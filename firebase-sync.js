import { firebaseConfig } from "./firebase-config.js";

const sdkVersion = "11.0.2";
const configured = Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
const cloud = { status: configured ? "loading" : "unconfigured", user: null };
window.studyCloud = cloud;

function emitState() {
  window.dispatchEvent(new CustomEvent("study-cloud-state", { detail: { status: cloud.status, user: cloud.user } }));
}

function errorMessage(error) {
  if (error?.code === "auth/unauthorized-domain") return "這個網站網址尚未加入 Firebase 授權網域。";
  if (error?.code === "auth/popup-blocked") return "瀏覽器封鎖了登入視窗，請允許此網站開啟彈出視窗後再試。";
  if (error?.code === "permission-denied") return "資料庫權限尚未設定，請檢查 Firestore 安全規則。";
  return error?.message || "連線暫時無法完成，請稍後再試。";
}

if (configured) {
  try {
    const base = `https://www.gstatic.com/firebasejs/${sdkVersion}`;
    const [appSdk, authSdk, storeSdk] = await Promise.all([
      import(`${base}/firebase-app.js`),
      import(`${base}/firebase-auth.js`),
      import(`${base}/firebase-firestore.js`),
    ]);
    const app = appSdk.initializeApp(firebaseConfig);
    const auth = authSdk.getAuth(app);
    const db = storeSdk.getFirestore(app);
    const googleProvider = new authSdk.GoogleAuthProvider();

    cloud.signIn = async () => {
      try {
        await authSdk.signInWithPopup(auth, googleProvider);
        return { ok: true };
      } catch (error) {
        return { ok: false, message: errorMessage(error) };
      }
    };
    cloud.signOut = async () => {
      try {
        await authSdk.signOut(auth);
        return { ok: true };
      } catch (error) {
        return { ok: false, message: errorMessage(error) };
      }
    };
    cloud.getFavorites = async () => {
      const collection = storeSdk.collection(db, "users", cloud.user.uid, "favorites");
      const result = await storeSdk.getDocs(storeSdk.query(collection, storeSdk.orderBy("createdAt", "desc")));
      return result.docs.map((item) => ({ id: item.id, ...item.data() }));
    };
    cloud.isFavorite = async (questionId) => {
      const item = await storeSdk.getDoc(storeSdk.doc(db, "users", cloud.user.uid, "favorites", questionId));
      return item.exists();
    };
    const favoriteData = (question) => ({
      questionId: question.id,
      stage: question.stage || "",
      grade: question.grade ?? null,
      courseName: question.courseName || "",
      topicName: question.topicName || "數學單元",
      prompt: question.prompt || "",
      options: question.options || [],
      answer: question.answer ?? null,
      explanation: question.explanation || "",
      sourceLabel: question.sourceLabel || "",
      sourceUrl: question.sourceUrl || "",
      answerSourceUrl: question.answerSourceUrl || "",
      createdAt: storeSdk.serverTimestamp(),
    });
    cloud.setFavorite = async (question, saved) => {
      const ref = storeSdk.doc(db, "users", cloud.user.uid, "favorites", question.id);
      if (!saved) {
        await storeSdk.deleteDoc(ref);
        return;
      }
      await storeSdk.setDoc(ref, favoriteData(question));
    };
    cloud.addFavoriteIfMissing = async (question) => {
      const ref = storeSdk.doc(db, "users", cloud.user.uid, "favorites", question.id);
      const existing = await storeSdk.getDoc(ref);
      if (existing.exists()) return false;
      await storeSdk.setDoc(ref, favoriteData(question));
      return true;
    };
    cloud.saveSession = async (session) => {
      const collection = storeSdk.collection(db, "users", cloud.user.uid, "sessions");
      await storeSdk.addDoc(collection, { ...session, createdAt: storeSdk.serverTimestamp() });
      const savedSessions = await storeSdk.getDocs(storeSdk.query(collection, storeSdk.orderBy("createdAt", "desc")));
      const olderSessions = savedSessions.docs.slice(50);
      for (let offset = 0; offset < olderSessions.length; offset += 450) {
        const batch = storeSdk.writeBatch(db);
        olderSessions.slice(offset, offset + 450).forEach((item) => batch.delete(item.ref));
        await batch.commit();
      }
    };
    cloud.getSessions = async () => {
      const collection = storeSdk.collection(db, "users", cloud.user.uid, "sessions");
      const result = await storeSdk.getDocs(storeSdk.query(collection, storeSdk.orderBy("createdAt", "desc"), storeSdk.limit(50)));
      return result.docs.map((item) => ({ id: item.id, ...item.data() }));
    };

    authSdk.onAuthStateChanged(auth, (user) => {
      cloud.status = "ready";
      cloud.user = user ? { uid: user.uid, displayName: user.displayName || "", email: user.email || "", photoURL: user.photoURL || "" } : null;
      emitState();
    });
  } catch (error) {
    cloud.status = "unavailable";
    cloud.error = errorMessage(error);
    emitState();
  }
} else {
  emitState();
}
