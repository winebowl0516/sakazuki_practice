# Firebase 登入與雲端保存

## Firebase 專案

- 目前網站使用的 Firebase 專案 ID：`sakazuki-practice`
- 專案顯示名稱：`sakazuki-practice`
- Web app：`sakazuki-practice Web`
- Google 登入：已啟用；支援信箱使用 Firebase 帳號信箱
- Cloud Firestore：Standard 版，資料位置 `asia-east1`（台灣）
- 計費方案：Spark 免費方案；未啟用 Analytics、Gemini 或排程備份
- 舊專案 `xinyu-math-practice` 保留，原有登入帳號與 Firestore 資料尚未遷移

Firebase Web app 設定已填入 [`firebase-config.js`](firebase-config.js)。Web 設定中的 API key 是 Firebase 用來識別專案的瀏覽器設定值；資料存取安全性由 Firestore 規則控管，不要把服務帳戶私密金鑰放進網站。

新專案已註冊網站 Web app，並啟用 Google 登入及發布 [`firestore.rules`](firestore.rules)。切換 Project ID 後，舊專案中的帳號與收藏、練習紀錄不會自動出現在新專案；舊專案仍保留，供日後匯出或遷移。

## 資料安全規則

已發布 [`firestore.rules`](firestore.rules)。規則只允許已登入使用者讀寫自己的 `users/{uid}` 路徑：

- 錯題收藏：`users/{uid}/favorites/{questionId}`
- 練習紀錄：`users/{uid}/sessions/{sessionId}`

收藏項目保存題目、選項、正解、詳解與來源；練習紀錄保存分數、答對題數、作答時間，以及當次每題的題目快照、使用者作答、正解、詳解與來源。答錯和未作答的題目會在交卷時自動加入收藏（已收藏的題目不會重複新增）。每位使用者最多保留最近 50 份練習紀錄，新增紀錄時會清除更舊的項目。

## 開啟網站與授權網域

Firebase Authentication 已授權以下網域：

- `localhost`：本機開發
- `sakazuki-practice.firebaseapp.com`、`sakazuki-practice.web.app`：Firebase 預設網域
- `winebowl0516.github.io`：GitHub Pages 正式網站（2026-11-15 加入）

若更換正式網站網域，請到 Firebase Console 的 **Authentication → Settings → Authorized domains** 加入新的主機名稱。請使用本機靜態伺服器或正式網站網址開啟 `index.html`；直接以 `file://` 開啟時，瀏覽器會限制 Firebase 所需的 ES modules 與 Google OAuth。

未登入時仍可選範圍、作答和查看結果；登入 Google 帳號後，才可儲存錯題收藏與學習紀錄。
