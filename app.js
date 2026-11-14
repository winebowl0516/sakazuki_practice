const gradeOptions = {
  elementary: [1, 2, 3, 4, 5, 6],
  junior: [7, 8, 9],
  senior: [10, 11, 12],
};

const lesson = (id, title, bankTopic = null) => ({ id, title, bankTopic });
const chapter = (id, title, term, ...lessons) => ({ id, title, term, lessons });

// 章節層級參考課綱與台灣常見教材的編排；小節留有出版社對照的擴充空間。
const curriculum = {
  elementary: {
    1: [
      chapter("e1-c1", "數到 10", "first", lesson("e1-l1", "數量、唱數與數序"), lesson("e1-l2", "數的合成與分解")),
      chapter("e1-c2", "20 以內的加法與減法", "first", lesson("e1-l3", "加法的意義"), lesson("e1-l4", "減法的意義")),
      chapter("e1-c3", "50 以內的數", "second", lesson("e1-l5", "十進位位值"), lesson("e1-l6", "數的大小比較")),
      chapter("e1-c4", "形體、長度與時間", "second", lesson("e1-l7", "平面與立體形體", "geometry"), lesson("e1-l8", "長度與時間", "measure")),
    ],
    2: [
      chapter("e2-c1", "三位數與加減", "first", lesson("e2-l1", "三位數的位值"), lesson("e2-l2", "加減直式與估算")),
      chapter("e2-c2", "乘法", "first", lesson("e2-l3", "乘法表與乘法問題", "number"), lesson("e2-l4", "乘法的應用")),
      chapter("e2-c3", "長度與容量", "second", lesson("e2-l5", "公尺與公分", "measure"), lesson("e2-l6", "容量與重量")),
      chapter("e2-c4", "分分看", "second", lesson("e2-l7", "平分與包含除"), lesson("e2-l8", "單位分數", "fraction")),
    ],
    3: [
      chapter("e3-c1", "數到一萬與四則", "first", lesson("e3-l1", "位值與數的大小"), lesson("e3-l2", "整數乘除與估算", "number")),
      chapter("e3-c2", "除法", "first", lesson("e3-l3", "除法直式與餘數", "number"), lesson("e3-l4", "除法情境題")),
      chapter("e3-c3", "分數與加減", "first", lesson("e3-l5", "分數的意義"), lesson("e3-l6", "同分母分數加減", "fraction")),
      chapter("e3-c4", "小數與長度", "second", lesson("e3-l7", "一位小數"), lesson("e3-l8", "長度單位換算", "measure")),
      chapter("e3-c5", "角、圓與面積", "second", lesson("e3-l9", "角的認識"), lesson("e3-l10", "周長與面積", "geometry")),
    ],
    4: [
      chapter("e4-c1", "大數與概數", "first", lesson("e4-l1", "大數的位值"), lesson("e4-l2", "概數與估算")),
      chapter("e4-c2", "整數四則", "first", lesson("e4-l3", "乘除與四則運算", "number"), lesson("e4-l4", "運算順序與應用")),
      chapter("e4-c3", "因數與倍數", "first", lesson("e4-l5", "因數、倍數與公因數"), lesson("e4-l6", "公倍數與生活應用")),
      chapter("e4-c4", "分數與小數", "second", lesson("e4-l7", "等值分數與分數加減", "fraction"), lesson("e4-l8", "小數加減與乘法", "fraction")),
      chapter("e4-c5", "角度與周長面積", "second", lesson("e4-l9", "角度測量"), lesson("e4-l10", "周長與面積", "geometry")),
    ],
    5: [
      chapter("e5-c1", "因數與倍數", "first", lesson("e5-l1", "質數與合數"), lesson("e5-l2", "最大公因數與最小公倍數")),
      chapter("e5-c2", "分數與小數的計算", "first", lesson("e5-l3", "分數乘除與應用", "fraction"), lesson("e5-l4", "小數乘除與估算", "fraction")),
      chapter("e5-c3", "比率與百分率", "first", lesson("e5-l5", "比與比值"), lesson("e5-l6", "百分率與折扣", "ratio")),
      chapter("e5-c4", "平面圖形", "second", lesson("e5-l7", "三角形與平行四邊形"), lesson("e5-l8", "面積公式與應用", "geometry")),
      chapter("e5-c5", "體積與表面積", "second", lesson("e5-l9", "長方體與正方體"), lesson("e5-l10", "體積和容量換算", "measure")),
    ],
    6: [
      chapter("e6-c1", "最大公因數與最小公倍數", "first", lesson("e6-l1", "質因數分解"), lesson("e6-l2", "公因數與公倍數")),
      chapter("e6-c2", "分數與小數四則", "first", lesson("e6-l3", "分數四則混合計算"), lesson("e6-l4", "小數四則應用")),
      chapter("e6-c3", "比與比值", "first", lesson("e6-l5", "比、比值與相等的比"), lesson("e6-l6", "正比與生活應用", "ratio")),
      chapter("e6-c4", "速率與百分率", "second", lesson("e6-l7", "速率、距離與時間"), lesson("e6-l8", "百分率、折扣與利率", "ratio")),
      chapter("e6-c5", "圓形與柱體", "second", lesson("e6-l9", "圓周長與圓面積", "geometry"), lesson("e6-l10", "柱體體積")),
      chapter("e6-c6", "統計圖表", "second", lesson("e6-l11", "長條圖與折線圖"), lesson("e6-l12", "圓形圖與資料判讀", "probability")),
    ],
  },
  junior: {
    7: [
      chapter("j7-c1", "整數與數線", "first", lesson("j7-l1", "正負數、數線與絕對值"), lesson("j7-l2", "整數的加減乘除", "number")),
      chapter("j7-c2", "分數運算與指數", "first", lesson("j7-l3", "分數與數的四則"), lesson("j7-l4", "指數記法與科學記號", "exponent")),
      chapter("j7-c3", "一元一次方程式", "first", lesson("j7-l5", "代數式與式的運算"), lesson("j7-l6", "一元一次方程式", "equation")),
      chapter("j7-c4", "比例與線型關係", "second", lesson("j7-l7", "比例式與正反比"), lesson("j7-l8", "生活中的比例問題")),
      chapter("j7-c5", "幾何圖形", "second", lesson("j7-l9", "基本幾何與角度"), lesson("j7-l10", "三角形內角和", "geometry")),
      chapter("j7-c6", "統計圖表", "second", lesson("j7-l11", "資料整理與統計圖", "statistics"), lesson("j7-l12", "資料判讀", "statistics")),
    ],
    8: [
      chapter("j8-c1", "乘法公式與多項式", "first", lesson("j8-l1", "乘法公式", "algebra"), lesson("j8-l2", "多項式運算與因式分解", "algebra")),
      chapter("j8-c2", "二元一次聯立方程式", "first", lesson("j8-l3", "聯立方程式的解", "equation"), lesson("j8-l4", "聯立方程式應用", "equation")),
      chapter("j8-c3", "直角坐標與一次函數", "first", lesson("j8-l5", "坐標平面", "coordinate"), lesson("j8-l6", "一次函數與圖形", "function")),
      chapter("j8-c4", "三角形與四邊形", "second", lesson("j8-l7", "全等與三角形性質"), lesson("j8-l8", "平行四邊形與特殊四邊形", "geometry")),
      chapter("j8-c5", "幾何證明與尺規作圖", "second", lesson("j8-l9", "幾何推理"), lesson("j8-l10", "尺規作圖")),
      chapter("j8-c6", "統計資料", "second", lesson("j8-l11", "平均數、中位數與眾數", "statistics"), lesson("j8-l12", "資料分布與判讀", "statistics")),
    ],
    9: [
      chapter("j9-c1", "相似形", "first", lesson("j9-l1", "比例線段與相似"), lesson("j9-l2", "相似形的面積與應用")),
      chapter("j9-c2", "圓形", "first", lesson("j9-l3", "圓、弦與弧"), lesson("j9-l4", "圓周角與幾何推理", "geometry")),
      chapter("j9-c3", "幾何與三角比", "first", lesson("j9-l5", "幾何證明與應用"), lesson("j9-l6", "直角三角形與三角比")),
      chapter("j9-c4", "二次函數", "second", lesson("j9-l7", "平方函數與圖形", "function"), lesson("j9-l8", "二次函數的最大最小值", "function")),
      chapter("j9-c5", "二次方程式", "second", lesson("j9-l9", "因式分解解方程式"), lesson("j9-l10", "二次方程式與應用", "equation")),
      chapter("j9-c6", "統計與機率", "second", lesson("j9-l11", "機率與樣本空間", "probability"), lesson("j9-l12", "資料分析", "statistics")),
    ],
  },
  senior: {
    required: {
      10: [
        chapter("sR10-c1", "數與式", "first", lesson("sR10-l1", "實數、絕對值與數線", "number"), lesson("sR10-l2", "根式運算", "number")),
        chapter("sR10-c2", "直線與圓", "first", lesson("sR10-l3", "直線斜率與方程式", "line"), lesson("sR10-l4", "圓的標準式", "circle")),
        chapter("sR10-c3", "多項式函數", "first", lesson("sR10-l5", "多項式運算與餘式", "polynomial"), lesson("sR10-l6", "二次函數與圖形", "function")),
        chapter("sR10-c4", "指數與對數", "second", lesson("sR10-l7", "指數律與指數函數", "exponent"), lesson("sR10-l8", "對數與對數函數", "exponent")),
        chapter("sR10-c5", "數列與級數", "second", lesson("sR10-l9", "等差與等比數列", "sequence"), lesson("sR10-l10", "級數與求和")),
        chapter("sR10-c6", "排列組合與機率", "second", lesson("sR10-l11", "計數原理", "counting"), lesson("sR10-l12", "機率初步", "probability")),
      ],
      11: [],
      12: [],
    },
    A: {
      10: [],
      11: [
        chapter("sA11-c1", "三角函數", "first", lesson("sA11-l1", "弧度量與三角比", "trigonometry"), lesson("sA11-l2", "三角函數圖形與性質", "trigonometry")),
        chapter("sA11-c2", "平面向量", "first", lesson("sA11-l3", "向量運算與內積", "vector"), lesson("sA11-l4", "向量的幾何應用")),
        chapter("sA11-c3", "空間向量與矩陣", "second", lesson("sA11-l5", "空間向量"), lesson("sA11-l6", "矩陣運算", "matrix")),
        chapter("sA11-c4", "機率與統計", "second", lesson("sA11-l7", "隨機變數與機率分布", "probability"), lesson("sA11-l8", "統計量與資料分析", "statistics")),
      ],
      12: [
        chapter("sA12-c1", "函數與極限", "first", lesson("sA12-l1", "函數變化與極限概念", "calculus"), lesson("sA12-l2", "連續與極限的應用", "calculus")),
        chapter("sA12-c2", "微分", "first", lesson("sA12-l3", "導數與切線斜率", "calculus"), lesson("sA12-l4", "微分與函數變化", "calculus")),
        chapter("sA12-c3", "積分與面積", "second", lesson("sA12-l5", "反導函數與定積分", "calculus"), lesson("sA12-l6", "面積與累積量", "calculus")),
        chapter("sA12-c4", "機率與統計統整", "second", lesson("sA12-l7", "機率模型", "probability"), lesson("sA12-l8", "資料判讀與應用", "statistics")),
      ],
    },
    B: {
      10: [],
      11: [
        chapter("sB11-c1", "函數與數學模型", "first", lesson("sB11-l1", "函數關係與圖形", "function"), lesson("sB11-l2", "數學建模與應用", "function")),
        chapter("sB11-c2", "計數與機率", "first", lesson("sB11-l3", "計數原理與排列組合", "counting"), lesson("sB11-l4", "機率應用", "probability")),
        chapter("sB11-c3", "統計與資料判讀", "second", lesson("sB11-l5", "統計量與資料分布", "statistics"), lesson("sB11-l6", "資料解讀與推論", "statistics")),
      ],
      12: [
        chapter("sB12-c1", "數學建模與決策", "first", lesson("sB12-l1", "用函數描述情境", "function"), lesson("sB12-l2", "數學模型與決策", "function")),
        chapter("sB12-c2", "機率應用", "first", lesson("sB12-l3", "條件機率與事件", "probability"), lesson("sB12-l4", "機率模型與應用", "probability")),
        chapter("sB12-c3", "統計與資料分析", "second", lesson("sB12-l5", "統計摘要與圖表", "statistics"), lesson("sB12-l6", "資料分析與解讀", "statistics")),
      ],
    },
  },
};

// 題庫同時收錄原創練習與公開歷屆題；每題可附來源、答案及逐步解說。
const questionBank = [...(window.high1QuestionBank || []), ...(window.high1SecondSemesterQuestionBank || []), ...(window.high2QuestionBank || []), ...(window.high3QuestionBank || []), ...(window.junior7QuestionBank || []), ...(window.junior8QuestionBank || []), ...(window.junior9QuestionBank || []),
  { id: "e-n1", stage: "elementary", topic: "number", difficulty: "basic", prompt: "計算：48 ÷ 6 ＋ 3 × 2 ＝？", options: ["11", "14", "19", "22"], answer: 1, explanation: "先算乘除，再算加減。48 ÷ 6 ＝ 8，3 × 2 ＝ 6，所以 8 ＋ 6 ＝ 14。" },
  { id: "e-n2", stage: "elementary", topic: "number", difficulty: "challenge", prompt: "一盒彩色筆有 12 枝，買 7 盒後送給同學 18 枝，還剩下幾枝？", options: ["54 枝", "60 枝", "66 枝", "84 枝"], answer: 2, explanation: "先求彩色筆總數：12 × 7 ＝ 84 枝；再扣掉送出的 18 枝：84 − 18 ＝ 66 枝。" },
  { id: "e-f1", stage: "elementary", topic: "fraction", difficulty: "basic", prompt: "計算：3/4 − 1/8 ＝？", options: ["1/2", "5/8", "2/3", "7/8"], answer: 1, explanation: "先通分成相同分母：3/4 ＝ 6/8。再相減：6/8 − 1/8 ＝ 5/8。" },
  { id: "e-f2", stage: "elementary", topic: "fraction", difficulty: "challenge", prompt: "一條緞帶長 2.4 公尺，用掉全長的一半，還剩下幾公尺？", options: ["0.8 公尺", "1.2 公尺", "1.4 公尺", "1.8 公尺"], answer: 1, explanation: "用掉一半後，另一半就是剩下的長度。2.4 ÷ 2 ＝ 1.2，所以還剩 1.2 公尺。" },
  { id: "e-m1", stage: "elementary", topic: "measure", difficulty: "basic", prompt: "2.5 公尺等於幾公分？", options: ["25 公分", "205 公分", "250 公分", "2,500 公分"], answer: 2, explanation: "1 公尺＝100 公分，因此 2.5 公尺＝2.5 × 100＝250 公分。" },
  { id: "e-m2", stage: "elementary", topic: "measure", difficulty: "challenge", prompt: "一部電影下午 1 時 35 分開始，片長 1 小時 50 分，電影幾時幾分結束？", options: ["下午 3 時 15 分", "下午 3 時 25 分", "下午 3 時 35 分", "下午 2 時 85 分"], answer: 1, explanation: "1 時 35 分加 1 小時是 2 時 35 分，再加 50 分是 3 時 25 分。" },
  { id: "e-g1", stage: "elementary", topic: "geometry", difficulty: "basic", prompt: "長方形長 8 公分、寬 5 公分，它的周長是多少？", options: ["13 公分", "26 公分", "40 平方公分", "80 公分"], answer: 1, explanation: "長方形周長＝（長＋寬）× 2＝（8＋5）× 2＝26 公分。" },
  { id: "e-g2", stage: "elementary", topic: "geometry", difficulty: "challenge", prompt: "一個平行四邊形底 9 公分、高 4 公分，面積是多少？", options: ["13 平方公分", "26 平方公分", "36 平方公分", "72 平方公分"], answer: 2, explanation: "平行四邊形面積＝底 × 高，所以 9 × 4＝36 平方公分。" },

  { id: "j-n1", stage: "junior", topic: "number", difficulty: "basic", prompt: "計算：−7 ＋ 12 − 3 ＝？", options: ["−8", "−2", "2", "8"], answer: 2, explanation: "由左至右計算：−7＋12＝5，再算 5−3＝2。" },
  { id: "j-n2", stage: "junior", topic: "number", difficulty: "challenge", prompt: "化簡：2³ × 2² ＝？", options: ["2⁵", "4⁵", "2⁶", "4⁶"], answer: 0, explanation: "同底數相乘，指數相加：2³ × 2²＝2³⁺²＝2⁵＝32。" },
  { id: "j-e1", stage: "junior", topic: "equation", difficulty: "basic", prompt: "解方程式：3x − 5 ＝ 16。x 等於多少？", options: ["5", "6", "7", "8"], answer: 2, explanation: "等式兩邊同加 5，得 3x＝21；再同除以 3，得 x＝7。代回：3×7−5＝16，符合題意。" },
  { id: "j-e2", stage: "junior", topic: "equation", difficulty: "challenge", prompt: "解方程式：2(x ＋ 3) ＝ 14。", options: ["x＝2", "x＝4", "x＝5", "x＝8"], answer: 1, explanation: "等式兩邊同除以 2，得 x＋3＝7；再同減 3，得 x＝4。" },
  { id: "j-f1", stage: "junior", topic: "function", difficulty: "basic", prompt: "若 y ＝ 2x − 3，當 x ＝ 4 時，y 等於多少？", options: ["3", "5", "8", "11"], answer: 1, explanation: "將 x＝4 代入 y＝2x−3：y＝2×4−3＝8−3＝5。" },
  { id: "j-f2", stage: "junior", topic: "function", difficulty: "challenge", prompt: "直線 y ＝ −x ＋ 6 與 y 軸交於哪一點？", options: ["(0, −6)", "(0, 6)", "(6, 0)", "(−6, 0)"], answer: 1, explanation: "與 y 軸交點的 x 座標為 0。代入 y＝−x＋6，得 y＝6，所以交點是 (0, 6)。" },
  { id: "j-g1", stage: "junior", topic: "geometry", difficulty: "basic", prompt: "三角形的兩個內角是 45° 與 65°，第三個內角是多少？", options: ["60°", "70°", "80°", "90°"], answer: 1, explanation: "三角形內角和是 180°。第三個角＝180°−45°−65°＝70°。" },
  { id: "j-g2", stage: "junior", topic: "geometry", difficulty: "challenge", prompt: "一組資料為 1、3、4、8、9，其中位數是多少？", options: ["3", "4", "5", "8"], answer: 1, explanation: "資料已由小到大排列，共有 5 個數，中間第 3 個數是 4，因此中位數為 4。" },
  { id: "cap114-math-01", stage: "junior", topic: "exponent", difficulty: "basic", prompt: "算式 7¹⁰ × 7² ÷ 7⁴ 之值可用下列何者表示？", options: ["7³", "7⁵", "7⁸", "7¹⁶"], answer: 2, explanation: "同底數相乘時指數相加，相除時指數相減：7¹⁰ × 7² ÷ 7⁴ ＝ 7^(10＋2−4) ＝ 7⁸，因此選 (C)。", sourceLabel: "114 年國中教育會考數學科第 1 題", sourceUrl: "https://drive.google.com/file/d/1c2AGC67Bq344EdGSZkO9SZhrY50hHTJx/view", answerSourceUrl: "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view" },
  { id: "cap114-math-02", stage: "junior", topic: "number", difficulty: "basic", prompt: "計算 (5x² − 2x) − (4 − 3x) 的結果，與下列何者相同？", options: ["5x² − 3x", "5x² ＋ x − 4", "5x² − 5x ＋ 4", "5x² − 5x − 4"], answer: 1, explanation: "減去括號時，括號內每一項都要改變符號：(5x² − 2x) − (4 − 3x) ＝ 5x² − 2x − 4 ＋ 3x ＝ 5x² ＋ x − 4，因此選 (B)。", sourceLabel: "114 年國中教育會考數學科第 2 題", sourceUrl: "https://drive.google.com/file/d/1c2AGC67Bq344EdGSZkO9SZhrY50hHTJx/view", answerSourceUrl: "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view" },
  { id: "cap114-math-04", stage: "junior", topic: "equation", difficulty: "basic", prompt: "若二元一次聯立方程式 37x ＋ 2y ＝ 81、23x − 2y ＝ 39 的解為 x＝a、y＝b，則 a＋2b 之值為何？", options: ["33", "9", "−3", "−27"], answer: 1, explanation: "兩式相加可消去 y，得到 60x＝120，所以 x＝2。代回第一式：74＋2y＝81，得 y＝7/2。因此 a＋2b＝2＋2×(7/2)＝9，選 (B)。", sourceLabel: "114 年國中教育會考數學科第 4 題", sourceUrl: "https://drive.google.com/file/d/1c2AGC67Bq344EdGSZkO9SZhrY50hHTJx/view", answerSourceUrl: "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view" },
  { id: "cap114-math-06", stage: "junior", topic: "coordinate", difficulty: "basic", prompt: "圖（三）為一坐標平面，若從平面上的點 (−1, 2) 出發，向下移動再向右移動，則可能移動到下列哪一點？", options: ["(4, 1)", "(4, 3)", "(−4, 1)", "(−4, 3)"], answer: 0, explanation: "向下移動會使 y 座標變小，向右移動會使 x 座標變大。從 (−1, 2) 出發，只有 (4, 1) 同時符合這兩個方向，因此選 (A)。", sourceLabel: "114 年國中教育會考數學科第 6 題", sourceUrl: "https://drive.google.com/file/d/1c2AGC67Bq344EdGSZkO9SZhrY50hHTJx/view", answerSourceUrl: "https://drive.google.com/file/d/175hz0lHG4GTDNxYet9lrRDu0lmC_G08o/view" },

  { id: "s-x1", stage: "senior", topic: "exponent", difficulty: "basic", prompt: "計算：log₁₀ 1000 ＝？", options: ["2", "3", "10", "100"], answer: 1, explanation: "對數 log₁₀ 1000 表示 10 的幾次方等於 1000。因為 10³＝1000，所以答案是 3。" },
  { id: "s-x2", stage: "senior", topic: "function", difficulty: "challenge", prompt: "若 f(x)＝x²−4x＋3，拋物線頂點的 x 座標為何？", options: ["−4", "−2", "2", "4"], answer: 2, explanation: "二次函數 ax²＋bx＋c 的頂點 x 座標為 −b/(2a)。此處 a＝1、b＝−4，故 x＝−(−4)/(2×1)＝2。" },
  { id: "s-s1", stage: "senior", topic: "sequence", difficulty: "basic", prompt: "等差數列 5、8、11、⋯ 的第 10 項是多少？", options: ["29", "30", "32", "35"], answer: 2, explanation: "首項 a₁＝5，公差 d＝3。第 n 項 aₙ＝a₁＋(n−1)d，因此 a₁₀＝5＋9×3＝32。" },
  { id: "s-s2", stage: "senior", topic: "sequence", difficulty: "challenge", prompt: "等差數列 2、5、8、11、14 的總和是多少？", options: ["35", "38", "40", "42"], answer: 2, explanation: "直接相加：2＋5＋8＋11＋14＝40。也可用等差級數公式：5×(2＋14)/2＝40。" },
  { id: "s-t1", stage: "senior", topic: "trigonometry", difficulty: "basic", prompt: "sin 30° 的值為何？", options: ["0", "1/2", "√2/2", "1"], answer: 1, explanation: "特殊角三角比中，sin 30°＝對邊/斜邊＝1/2。" },
  { id: "s-t2", stage: "senior", topic: "vector", difficulty: "challenge", prompt: "向量 a＝(2, 3)、b＝(−1, 4)，a＋b 為何？", options: ["(1, 7)", "(3, −1)", "(−2, 12)", "(−1, 7)"], answer: 0, explanation: "向量相加時對應座標分別相加：(2＋(−1), 3＋4)＝(1, 7)。" },
  { id: "s-p1", stage: "senior", topic: "probability", difficulty: "basic", prompt: "袋中有 3 顆紅球、2 顆藍球，任取 1 顆，取到紅球的機率是多少？", options: ["2/5", "1/2", "3/5", "3/2"], answer: 2, explanation: "共有 3＋2＝5 顆球，其中紅球 3 顆。取到紅球的機率＝有利結果數/所有可能結果數＝3/5。" },
  { id: "s-p2", stage: "senior", topic: "statistics", difficulty: "challenge", prompt: "資料 2、4、6、8 的平均數是多少？", options: ["4", "5", "6", "8"], answer: 1, explanation: "平均數＝資料總和 ÷ 資料個數＝(2＋4＋6＋8)÷4＝20÷4＝5。" },
  { id: "e1-n1", stage: "elementary", topic: "number", difficulty: "basic", prompt: "小安有 7 顆彈珠，又得到 8 顆，現在共有幾顆？", options: ["13 顆", "14 顆", "15 顆", "16 顆"], answer: 2, explanation: "把原有和新得到的彈珠合起來：7＋8＝15，所以共有 15 顆。" },
  { id: "e1-g1", stage: "elementary", topic: "geometry", difficulty: "basic", prompt: "哪一種圖形有四條一樣長的邊，而且四個角都是直角？", options: ["長方形", "正方形", "三角形", "圓形"], answer: 1, explanation: "正方形的四條邊一樣長，而且四個角都是直角。" },
  { id: "e2-n1", stage: "elementary", topic: "number", difficulty: "basic", prompt: "每盒彩色筆有 6 枝，4 盒共有幾枝？", options: ["10 枝", "20 枝", "24 枝", "30 枝"], answer: 2, explanation: "每盒 6 枝，共 4 盒：6×4＝24 枝。" },
  { id: "e2-m1", stage: "elementary", topic: "measure", difficulty: "basic", prompt: "1 公尺 20 公分合起來是幾公分？", options: ["102 公分", "120 公分", "200 公分", "1,020 公分"], answer: 1, explanation: "1 公尺＝100 公分，100＋20＝120 公分。" },
  { id: "e3-n1", stage: "elementary", topic: "number", difficulty: "basic", prompt: "56 個橘子平均裝成 7 袋，每袋有幾個？", options: ["7 個", "8 個", "9 個", "49 個"], answer: 1, explanation: "平均分成 7 袋，用除法計算：56÷7＝8，所以每袋 8 個。" },
  { id: "e3-f1", stage: "elementary", topic: "fraction", difficulty: "basic", prompt: "計算：1/4 ＋ 1/4 ＝？", options: ["1/4", "1/2", "2/4", "2/8"], answer: 1, explanation: "分母相同，分子相加：1/4＋1/4＝2/4＝1/2。" },
  { id: "e6-r1", stage: "elementary", topic: "ratio", difficulty: "basic", prompt: "果汁中果汁與水的比例是 2：3，共有 25 杯。果汁有幾杯？", options: ["5 杯", "10 杯", "15 杯", "20 杯"], answer: 1, explanation: "比例總份數是 2＋3＝5，每份 25÷5＝5 杯。果汁占 2 份，所以有 2×5＝10 杯。" },
  { id: "e6-r2", stage: "elementary", topic: "ratio", difficulty: "challenge", prompt: "一件外套原價 150 元，打八折後是多少元？", options: ["30 元", "80 元", "120 元", "130 元"], answer: 2, explanation: "八折是原價的 80%。150×0.8＝120，所以折後是 120 元。" },
  { id: "j9-e1", stage: "junior", topic: "equation", difficulty: "basic", prompt: "解方程式：x² − 9 ＝ 0。", options: ["x＝3", "x＝−3", "x＝±3", "x＝9"], answer: 2, explanation: "移項得 x²＝9，因此 x＝3 或 x＝−3，合寫為 x＝±3。" },
  { id: "j9-f1", stage: "junior", topic: "function", difficulty: "challenge", prompt: "函數 y＝x²−4 的最小值是多少？", options: ["−4", "−2", "0", "4"], answer: 0, explanation: "因為 x²≥0，最小值在 x＝0 時取得。此時 y＝0−4＝−4。" },
  { id: "s11-p1", stage: "senior", topic: "probability", difficulty: "basic", prompt: "袋中有 2 顆紅球和 2 顆藍球，任取 1 顆，取到紅球的機率是多少？", options: ["1/4", "1/2", "2/3", "3/4"], answer: 1, explanation: "共有 4 顆球，其中紅球 2 顆。機率＝2/4＝1/2。" },
  { id: "s-exp2", stage: "senior", topic: "exponent", difficulty: "basic", prompt: "若 2ˣ＝8，x 等於多少？", options: ["2", "3", "4", "6"], answer: 1, explanation: "因為 8＝2³，所以 2ˣ＝2³，得到 x＝3。" },
  { id: "s-num1", stage: "senior", topic: "number", difficulty: "basic", prompt: "化簡 √72。", options: ["6√2", "4√3", "8√2", "12√2"], answer: 0, explanation: "72＝36×2，因此 √72＝√36×√2＝6√2。" },
  { id: "s-num2", stage: "senior", topic: "number", difficulty: "challenge", prompt: "方程式 |2x−1|＝5 的解為何？", options: ["x＝2 或 −3", "x＝3 或 −2", "x＝3 或 2", "x＝−3 或 −2"], answer: 1, explanation: "分兩種情況：2x−1＝5 得 x＝3；2x−1＝−5 得 x＝−2。" },
  { id: "s-line1", stage: "senior", topic: "line", difficulty: "basic", prompt: "通過 (1, −2) 與 (4, 4) 的直線斜率是多少？", options: ["1", "2", "3", "6"], answer: 1, explanation: "斜率＝(y₂−y₁)/(x₂−x₁)＝(4−(−2))/(4−1)＝6/3＝2。" },
  { id: "s-line2", stage: "senior", topic: "line", difficulty: "challenge", prompt: "通過 (2, 1)，斜率為 −3 的直線方程式為何？", options: ["y＝−3x＋7", "y＝3x−5", "y＝−3x−5", "y＝3x＋7"], answer: 0, explanation: "使用點斜式 y−1＝−3(x−2)，整理得 y＝−3x＋7。" },
  { id: "s-circle1", stage: "senior", topic: "circle", difficulty: "basic", prompt: "圓心為 (−2, 1)、半徑為 4 的圓，其標準式為何？", options: ["(x−2)²＋(y＋1)²＝16", "(x＋2)²＋(y−1)²＝16", "(x＋2)²＋(y−1)²＝4", "(x−2)²＋(y＋1)²＝4"], answer: 1, explanation: "圓心 (h,k)、半徑 r 的標準式是 (x−h)²＋(y−k)²＝r²。代入 h＝−2、k＝1、r＝4，即得 (x＋2)²＋(y−1)²＝16。" },
  { id: "s-poly1", stage: "senior", topic: "polynomial", difficulty: "basic", prompt: "多項式 P(x)＝x³−2x＋1 除以 x−2，餘數是多少？", options: ["3", "5", "7", "9"], answer: 1, explanation: "餘式定理指出，除以 x−2 的餘數為 P(2)。P(2)＝8−4＋1＝5。" },
  { id: "s-poly2", stage: "senior", topic: "polynomial", difficulty: "challenge", prompt: "方程式 x²−5x＋6＝0 的解為何？", options: ["x＝1 或 6", "x＝2 或 3", "x＝−2 或 −3", "x＝−1 或 −6"], answer: 1, explanation: "將左式因式分解為 (x−2)(x−3)＝0，因此 x＝2 或 x＝3。" },
  { id: "s-exp1", stage: "senior", topic: "exponent", difficulty: "basic", prompt: "計算：3² × 3⁻¹。", options: ["1/3", "3", "9", "27"], answer: 1, explanation: "同底數相乘，指數相加：3²×3⁻¹＝3¹＝3。" },
  { id: "s-log1", stage: "senior", topic: "exponent", difficulty: "basic", prompt: "log₂ 32 等於多少？", options: ["4", "5", "8", "16"], answer: 1, explanation: "log₂ 32 是求 2 的幾次方等於 32；因為 2⁵＝32，所以答案是 5。" },
  { id: "s-seq1", stage: "senior", topic: "sequence", difficulty: "basic", prompt: "等比數列 2、6、18、⋯ 的第 5 項是多少？", options: ["54", "108", "162", "486"], answer: 2, explanation: "首項為 2、公比為 3。第 5 項＝2×3⁴＝2×81＝162。" },
  { id: "s-count1", stage: "senior", topic: "counting", difficulty: "basic", prompt: "從 5 位同學中選出 2 位代表，有幾種選法？", options: ["5 種", "10 種", "20 種", "25 種"], answer: 1, explanation: "不分先後，是組合數 C(5,2)＝5×4÷(2×1)＝10 種。" },
  { id: "s-dice1", stage: "senior", topic: "probability", difficulty: "challenge", prompt: "同時擲兩顆均勻骰子，點數和為 7 的機率是多少？", options: ["1/12", "1/6", "1/4", "1/3"], answer: 1, explanation: "共有 36 種等可能結果。和為 7 的有 (1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)，共 6 種，所以機率為 6/36＝1/6。" },
  { id: "a-cos1", stage: "senior", topic: "trigonometry", difficulty: "basic", prompt: "cos 60° 的值為何？", options: ["0", "1/2", "√3/2", "1"], answer: 1, explanation: "特殊角三角比中，cos 60°＝1/2。" },
  { id: "a-trig1", stage: "senior", topic: "trigonometry", difficulty: "challenge", prompt: "在 0°≤θ<180° 範圍內，若 sin θ＝√3/2，θ 為何？", options: ["60°", "120°", "60° 或 120°", "30° 或 150°"], answer: 2, explanation: "sin 60°＝√3/2，且第二象限的正弦值也為正，所以 θ＝60° 或 120°。" },
  { id: "a-dot1", stage: "senior", topic: "vector", difficulty: "basic", prompt: "向量 a＝(2, −1)、b＝(3, 4)，內積 a·b 為多少？", options: ["2", "5", "10", "14"], answer: 0, explanation: "內積＝2×3＋(−1)×4＝6−4＝2。" },
  { id: "a-vector1", stage: "senior", topic: "vector", difficulty: "basic", prompt: "向量 v＝(3, 4) 的長度是多少？", options: ["4", "5", "7", "25"], answer: 1, explanation: "向量長度＝√(3²＋4²)＝√25＝5。" },
  { id: "a-matrix1", stage: "senior", topic: "matrix", difficulty: "basic", prompt: "計算矩陣 [[1,2],[-1,0]] 乘以向量 (3,4)，結果為何？", options: ["(11, −3)", "(11, 3)", "(10, −4)", "(5, −3)"], answer: 0, explanation: "第一列：1×3＋2×4＝11；第二列：(−1)×3＋0×4＝−3，因此結果為 (11,−3)。" },
  { id: "a-matrix2", stage: "senior", topic: "matrix", difficulty: "challenge", prompt: "矩陣 [[2,1],[5,3]] 的行列式是多少？", options: ["−1", "0", "1", "11"], answer: 2, explanation: "二階行列式 ad−bc＝2×3−1×5＝6−5＝1。" },
  { id: "a-derivative1", stage: "senior", topic: "calculus", difficulty: "basic", prompt: "若 f(x)＝x³−3x，則 f′(2) 為多少？", options: ["3", "6", "9", "12"], answer: 2, explanation: "微分得 f′(x)＝3x²−3。代入 x＝2：f′(2)＝12−3＝9。" },
  { id: "a-derivative2", stage: "senior", topic: "calculus", difficulty: "challenge", prompt: "若 f(x)＝x²−4x，則 f′(3) 為多少？", options: ["0", "2", "4", "6"], answer: 1, explanation: "f′(x)＝2x−4，因此 f′(3)＝6−4＝2。" },
  { id: "a-integral1", stage: "senior", topic: "calculus", difficulty: "basic", prompt: "計算定積分 ∫₀³ 2x dx。", options: ["3", "6", "9", "12"], answer: 2, explanation: "2x 的反導函數為 x²，因此 ∫₀³2x dx＝[x²]₀³＝9。" },
  { id: "a-optimize1", stage: "senior", topic: "calculus", difficulty: "challenge", prompt: "函數 f(x)＝x²−6x＋5 的最小值為何？", options: ["−5", "−4", "−3", "−2"], answer: 1, explanation: "配方得 f(x)＝(x−3)²−4。因為平方項最小為 0，所以最小值為 −4。" },
  { id: "b-mean1", stage: "senior", topic: "statistics", difficulty: "basic", prompt: "資料 3、5、5、7、10 的平均數是多少？", options: ["5", "6", "7", "30"], answer: 1, explanation: "平均數＝(3＋5＋5＋7＋10)÷5＝30÷5＝6。" },
  { id: "b-expected1", stage: "senior", topic: "probability", difficulty: "challenge", prompt: "隨機變數 X 以 1/4 機率取 1，以 3/4 機率取 3，期望值 E(X) 為何？", options: ["2", "2.5", "3", "4"], answer: 1, explanation: "期望值＝1×1/4＋3×3/4＝1/4＋9/4＝10/4＝2.5。" },
  { id: "b-red1", stage: "senior", topic: "probability", difficulty: "basic", prompt: "袋中有 4 顆紅球、6 顆藍球，任取 1 顆，取到紅球的機率為何？", options: ["2/5", "3/5", "2/3", "4/6"], answer: 0, explanation: "共有 10 顆球，其中紅球 4 顆，機率＝4/10＝2/5。" },
  { id: "b-union1", stage: "senior", topic: "probability", difficulty: "challenge", prompt: "事件 A、B 互斥，且 P(A)＝0.4、P(B)＝0.5，P(A∪B) 為何？", options: ["0.1", "0.2", "0.9", "1.0"], answer: 2, explanation: "互斥事件不會同時發生，因此 P(A∪B)＝P(A)＋P(B)＝0.4＋0.5＝0.9。" },
  { id: "b-model1", stage: "senior", topic: "function", difficulty: "basic", prompt: "某服務費用模型為 C＝80＋15x，x 代表使用次數。使用 12 次的費用是多少？", options: ["180", "240", "260", "320"], answer: 2, explanation: "代入 x＝12：C＝80＋15×12＝80＋180＝260。" },
  { id: "b-percent1", stage: "senior", topic: "statistics", difficulty: "basic", prompt: "某校有 250 位學生，其中 30% 參加數學社，參加者有幾人？", options: ["50 人", "65 人", "75 人", "80 人"], answer: 2, explanation: "250×30%＝250×0.3＝75 人。" },
];

const questionGrades = {
  "e1-n1": 1, "e1-g1": 1, "e2-n1": 2, "e2-m1": 2, "e3-n1": 3, "e3-f1": 3,
  "e-n1": 4, "e-n2": 4, "e-m1": 4, "e-m2": 4, "e-g1": 4, "e-f1": 5, "e-f2": 5, "e-g2": 5, "e6-r1": 6, "e6-r2": 6,
  "j-n1": 7, "j-n2": 7, "j-e1": 7, "j-e2": 7, "j-f1": 8, "j-f2": 8, "j-g1": 7, "j-g2": 9, "j9-e1": 9, "j9-f1": 9,
  "cap114-math-01": 7, "cap114-math-02": 8, "cap114-math-04": 8, "cap114-math-06": 8,
  "s-x1": 10, "s-x2": 10, "s-s1": 10, "s-s2": 10, "s-t1": 11, "s-t2": 11, "s-p1": 10, "s-p2": 12, "s11-p1": 11, "s-exp2": 10,
  "s-num1": 10, "s-num2": 10, "s-line1": 10, "s-line2": 10, "s-circle1": 10, "s-poly1": 10, "s-poly2": 10,
  "s-exp1": 10, "s-log1": 10, "s-seq1": 10, "s-count1": 10, "s-dice1": 10,
  "a-cos1": 11, "a-trig1": 11, "a-dot1": 11, "a-vector1": 11, "a-matrix1": 11, "a-matrix2": 11,
  "a-derivative1": 12, "a-derivative2": 12, "a-integral1": 12, "a-optimize1": 12,
  "b-mean1": 11, "b-expected1": 12, "b-red1": 11, "b-union1": 12, "b-model1": 11, "b-percent1": 12,
};
const questionCourses = {
  "s-t1": ["A"], "s-t2": ["A"], "a-cos1": ["A"], "a-trig1": ["A"], "a-dot1": ["A"], "a-vector1": ["A"], "a-matrix1": ["A"], "a-matrix2": ["A"],
  "a-derivative1": ["A"], "a-derivative2": ["A"], "a-integral1": ["A"], "a-optimize1": ["A"],
  "b-mean1": ["B"], "b-expected1": ["B"], "b-red1": ["B"], "b-union1": ["B"], "b-model1": ["B"], "b-percent1": ["B"],
};
const questionLessons = {
  "j-n1": ["j7-l2"], "j-n2": ["j7-l4"], "j-e1": ["j7-l6"], "j-e2": ["j7-l6"], "j-g1": ["j7-l10"],
  "j-f1": ["j8-l6"], "j-f2": ["j8-l6"], "j-g2": ["j9-l12"], "j9-e1": ["j9-l9"], "j9-f1": ["j9-l8"],
  "cap114-math-01": ["j7-l4"], "cap114-math-02": ["j8-l2"], "cap114-math-04": ["j8-l3"], "cap114-math-06": ["j8-l5"],
  "s-x1": ["sR10-l8"], "s-x2": ["sR10-l6"], "s-s1": ["sR10-l9"], "s-s2": ["sR10-l10"],
  "s-t1": ["sA11-l1"], "s-t2": ["sA11-l3"], "s-p1": ["sR10-l12"], "s-p2": ["sA12-l8", "sB12-l5"],
  "s11-p1": ["sA11-l7", "sB11-l4"], "s-exp2": ["sR10-l7"],
  "s-num1": ["sR10-l2"], "s-num2": ["sR10-l1"], "s-line1": ["sR10-l3"], "s-line2": ["sR10-l3"], "s-circle1": ["sR10-l4"],
  "s-poly1": ["sR10-l5"], "s-poly2": ["sR10-l5"], "s-exp1": ["sR10-l7"], "s-log1": ["sR10-l8"], "s-seq1": ["sR10-l9"],
  "s-count1": ["sR10-l11"], "s-dice1": ["sR10-l12"],
  "a-cos1": ["sA11-l1"], "a-trig1": ["sA11-l1"], "a-dot1": ["sA11-l3"], "a-vector1": ["sA11-l3"],
  "a-matrix1": ["sA11-l6"], "a-matrix2": ["sA11-l6"], "a-derivative1": ["sA12-l3"], "a-derivative2": ["sA12-l4"],
  "a-integral1": ["sA12-l5"], "a-optimize1": ["sA12-l4"],
  "b-mean1": ["sB11-l5"], "b-expected1": ["sB12-l4"], "b-red1": ["sB11-l4"], "b-union1": ["sB12-l4"],
  "b-model1": ["sB11-l2"], "b-percent1": ["sB12-l5"],
};
questionBank.forEach((question) => {
  question.grade = questionGrades[question.id] ?? question.grade;
  question.provenance = question.provenance || (question.sourceLabel ? "public-exam" : "original");
  question.lessonIds = questionLessons[question.id] || question.lessonIds || [];
  if (question.stage === "senior") {
    question.courses = questionCourses[question.id] || question.courses || ["A", "B"];
    question.provenance = "original";
    question.curriculumReference = question.curriculumReference || "國教院 108 課綱數學領域";
    question.answerCheck = question.answerCheck || "solution-checked";
  }
});

const stageNames = { elementary: "國小", junior: "國中", senior: "高中" };
const letters = ["A", "B", "C", "D"];

let currentStage = "junior";
let currentTerm = "all";
let selectedTopics = new Set();
let quizItems = [];
let answers = [];
let eliminatedOptions = [];
let optionMarkingMode = false;
let currentQuestion = 0;
let timerId = null;
let remainingSeconds = 0;
let startedAt = 0;
let toastTimer = null;

const gradeSelect = document.getElementById("grade-select");
const courseField = document.getElementById("course-field");
const courseSelect = document.getElementById("course-select");
const topicGrid = document.getElementById("topic-grid");
const startButton = document.getElementById("start-button");

function stageGradeLabel() {
  const grade = gradeSelect.value;
  if (currentStage === "senior") return grade === "10" ? "高中10年級 · 共同必修" : `高中${grade}年級 · 數學 ${courseSelect.value}`;
  return `${stageNames[currentStage]}${grade}年級數學`;
}

function getCurrentChapters() {
  const grade = gradeSelect.value;
  if (currentStage === "senior") {
    if (grade === "10") return (curriculum.senior.required[grade] || []).map((item) => ({ ...item, courseGroup: "共同必修" }));
    const extension = (curriculum.senior[courseSelect.value][grade] || []).map((item) => ({ ...item, courseGroup: `數學 ${courseSelect.value} 延伸` }));
    return extension;
  }
  return curriculum[currentStage][grade] || [];
}

function getCurrentUnits() {
  return getCurrentChapters().flatMap((chapter) => chapter.lessons.map((lesson) => ({
    ...lesson,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    term: chapter.term,
  })));
}

function getAvailableQuestions() {
  const difficulty = document.getElementById("difficulty").value;
  const selectedUnits = getCurrentUnits().filter((unit) => selectedTopics.has(unit.id));
  const selectedBankTopics = new Set(getCurrentUnits().filter((unit) => selectedTopics.has(unit.id)).map((unit) => unit.bankTopic));
  return questionBank.filter((question) => {
    if (question.stage !== currentStage || question.grade !== Number(gradeSelect.value)) return false;
    if (currentStage === "senior") {
      if (!question.courses.includes(courseSelect.value) || !question.lessonIds.some((id) => selectedUnits.some((unit) => unit.id === id))) return false;
    } else if (question.grade === 7 || question.grade === 8 || question.grade === 9
      ? !question.lessonIds?.some((id) => selectedUnits.some((unit) => unit.id === id))
      : !selectedBankTopics.has(question.topic)) return false;
    if (difficulty === "basic" && question.difficulty !== "basic") return false;
    if (difficulty === "standard" && question.difficulty !== "standard") return false;
    if (difficulty === "challenge" && question.difficulty !== "challenge") return false;
    return true;
  });
}

function renderGrades() {
  const grades = gradeOptions[currentStage];
  const standardDifficulty = document.querySelector('#difficulty option[value="standard"]');
  standardDifficulty.disabled = currentStage !== "junior";
  if (standardDifficulty.disabled && document.getElementById("difficulty").value === "standard") {
    document.getElementById("difficulty").value = "mixed";
  }
  const previousGrade = Number(gradeSelect.value);
  gradeSelect.innerHTML = grades.map((grade) => `<option value="${grade}">${stageNames[currentStage]}${grade}年級</option>`).join("");
  gradeSelect.value = grades.includes(previousGrade) ? String(previousGrade) : String(grades[0]);
  courseField.hidden = currentStage !== "senior" || gradeSelect.value === "10";
  renderTopics();
  updatePreview();
}

function renderTopics() {
  const chapters = getCurrentChapters().filter((item) => currentTerm === "all" || item.term === currentTerm);
  let lastCourseGroup = "";
  topicGrid.innerHTML = chapters.map((item, index) => {
    const lessonIds = item.lessons.map((itemLesson) => itemLesson.id);
    const selectedCount = lessonIds.filter((id) => selectedTopics.has(id)).length;
    const allSelected = selectedCount === lessonIds.length;
    const bankTopics = new Set(item.lessons.map((itemLesson) => itemLesson.bankTopic).filter(Boolean));
    const chapterQuestionCount = questionBank.filter((question) => question.stage === currentStage && question.grade === Number(gradeSelect.value) && (currentStage === "senior" ? question.lessonIds?.some((id) => lessonIds.includes(id)) && question.courses.includes(courseSelect.value) : gradeSelect.value === "7" || gradeSelect.value === "8" || gradeSelect.value === "9" ? question.lessonIds?.some((id) => lessonIds.includes(id)) : bankTopics.has(question.topic))).length;
    const lessonMarkup = item.lessons.map((itemLesson) => {
      const count = currentStage === "senior"
        ? questionBank.filter((question) => question.stage === currentStage && question.grade === Number(gradeSelect.value) && question.lessonIds?.includes(itemLesson.id) && question.courses.includes(courseSelect.value)).length
        : gradeSelect.value === "7" || gradeSelect.value === "8" || gradeSelect.value === "9" ? questionBank.filter((question) => question.stage === currentStage && question.grade === Number(gradeSelect.value) && question.lessonIds?.includes(itemLesson.id)).length
          : itemLesson.bankTopic ? questionBank.filter((question) => question.stage === currentStage && question.grade === Number(gradeSelect.value) && question.topic === itemLesson.bankTopic).length : 0;
      const selected = selectedTopics.has(itemLesson.id);
      return `<button type="button" class="lesson-option${selected ? " selected" : ""}" data-topic="${itemLesson.id}" aria-pressed="${selected}">
        <span class="topic-checkbox">${selected ? "✓" : ""}</span><span class="lesson-title">${itemLesson.title}</span>
        <span class="lesson-availability">${count ? `${count} 題` : "題庫建置中"}</span>
      </button>`;
    }).join("");
    const termLabel = item.term === "first" ? "上學期" : "下學期";
    const groupHeading = item.courseGroup && item.courseGroup !== lastCourseGroup ? `<div class="course-group-label">${item.courseGroup}</div>` : "";
    lastCourseGroup = item.courseGroup || "";
    return `${groupHeading}<article class="chapter-group">
      <div class="chapter-header">
        <button type="button" class="chapter-check${selectedCount ? " selected" : ""}${allSelected ? " all-selected" : ""}" data-chapter="${item.id}" aria-pressed="${allSelected}" aria-label="${allSelected ? "取消" : "勾選"}${item.title}整章範圍"><span class="topic-checkbox">${allSelected ? "✓" : selectedCount ? "−" : ""}</span></button>
        <div class="chapter-copy"><span>第 ${index + 1} 章 · ${termLabel}</span><strong>${item.title}</strong><small>${item.lessons.length} 個小節</small></div>
        <span class="chapter-count">${chapterQuestionCount} 題</span>
      </div>
      <div class="lesson-list">${lessonMarkup}</div>
    </article>`;
  }).join("");
}

function updatePreview() {
  const names = getCurrentUnits().filter((topic) => selectedTopics.has(topic.id)).map((topic) => topic.title);
  const available = getAvailableQuestions().length;
  const requested = Number(document.getElementById("question-count").value);
  const duration = Number(document.getElementById("duration").value);
  const difficultyLabel = { mixed: "混合難度", basic: "基礎", standard: "標準", challenge: "挑戰" }[document.getElementById("difficulty").value];

  document.getElementById("summary-range").textContent = stageGradeLabel();
  document.getElementById("summary-topics").textContent = names.length ? `${names.length} 個小節 · ${names.slice(0, 2).join("、")}${names.length > 2 ? "…" : ""}` : "尚未選擇";
  document.getElementById("summary-count").textContent = available ? `最多 ${Math.min(requested, available)} 題` : "等待選擇範圍";
  document.getElementById("summary-settings").textContent = `${duration ? `${duration} 分鐘` : "不限時"} · ${difficultyLabel}`;
  startButton.disabled = names.length === 0 || available === 0;

  const note = document.getElementById("button-note");
  if (!names.length) note.textContent = "先勾選想練習的單元";
  else if (!available) note.textContent = "這個難度目前沒有對應題目";
  else if (available < requested) note.textContent = `目前題庫有 ${available} 題，會依現有題目建立練習卷`;
  else note.textContent = `${available} 道符合範圍的題目`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2700);
}

function switchView(viewName) {
  document.querySelectorAll(".view").forEach((view) => {
    const active = view.id === `${viewName}-view`;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });
  document.getElementById("breadcrumb-current").textContent = viewName === "setup" ? "開始練習" : viewName === "exam" ? "作答中" : "練習結果";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  const available = getAvailableQuestions();
  if (!available.length) return;
  const requested = Number(document.getElementById("question-count").value);
  const selectedUnits = getCurrentUnits().filter((unit) => selectedTopics.has(unit.id));
  quizItems = shuffle(available).slice(0, requested).map((question) => ({
    ...question,
    topicName: selectedUnits.find((unit) => question.lessonIds?.includes(unit.id))?.title || selectedUnits.find((unit) => unit.bankTopic === question.topic)?.title || "數學單元",
  }));
  answers = new Array(quizItems.length).fill(null);
  eliminatedOptions = quizItems.map(() => new Set());
  optionMarkingMode = false;
  currentQuestion = 0;
  startedAt = Date.now();
  remainingSeconds = Number(document.getElementById("duration").value) * 60;
  document.getElementById("exam-subtitle").textContent = `${stageGradeLabel()} · ${selectedTopics.size} 個自主選擇的單元 · 共 ${quizItems.length} 題`;
  document.getElementById("timer-card").classList.remove("urgent");
  document.getElementById("timer-card").hidden = remainingSeconds === 0;
  renderQuestion();
  switchView("exam");
  startTimer();
  if (quizItems.length < requested) showToast(`所選範圍目前有 ${quizItems.length} 道示範題，先為你建立 ${quizItems.length} 題練習卷。`);
}

function startTimer() {
  clearInterval(timerId);
  if (!remainingSeconds) return;
  updateTimerDisplay();
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    updateTimerDisplay();
    if (remainingSeconds <= 60) document.getElementById("timer-card").classList.add("urgent");
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      showResults(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(Math.max(remainingSeconds, 0) / 60).toString().padStart(2, "0");
  const seconds = (Math.max(remainingSeconds, 0) % 60).toString().padStart(2, "0");
  document.getElementById("timer-display").textContent = `${minutes}:${seconds}`;
}

function renderQuestion() {
  const question = quizItems[currentQuestion];
  const selected = answers[currentQuestion];
  const card = document.getElementById("question-card");
  const questionOrigin = question.sourceLabel
    ? `<p class="question-origin">歷屆試題 · <a href="${question.sourceUrl}" target="_blank" rel="noopener noreferrer">${question.sourceLabel}（官方原題）</a></p>`
    : `<p class="question-origin">原創練習題</p>`;
  const markedOptions = eliminatedOptions[currentQuestion] || new Set();
  card.innerHTML = `
    <div class="question-meta"><span class="question-number">${String(currentQuestion + 1).padStart(2, "0")}</span><span>第 ${currentQuestion + 1} 題</span><span class="question-type">單選題</span><span class="question-score">平均配分</span></div>
    ${questionOrigin}
    <p class="question-prompt">${question.prompt}</p>
    <div class="option-mode-row"><span class="option-mode-label">選項工具</span><button type="button" class="option-mode-button${optionMarkingMode ? " active" : ""}" id="toggle-option-mode" aria-pressed="${optionMarkingMode}">${optionMarkingMode ? "切回作答" : "劃掉選項"}</button><span class="option-mode-hint">${optionMarkingMode ? "點選選項可劃掉或恢復" : "作答模式：選擇你的答案"}</span></div>
    <div class="options-list" role="radiogroup" aria-label="選擇答案">${question.options.map((option, index) => {const eliminated=markedOptions.has(index);return `<button type="button" class="answer-option${selected === index ? " selected" : ""}${eliminated ? " eliminated" : ""}" role="radio" aria-checked="${selected === index}" aria-label="${letters[index]}：${option}${eliminated ? "，已劃掉" : ""}" data-option="${index}"><span class="option-letter">${letters[index]}</span><span class="option-text">${option}</span></button>`}).join("")}</div>
    <div class="question-nav-row"><button type="button" class="secondary-button" id="previous-question" ${currentQuestion === 0 ? "disabled" : ""}>← 上一題</button><button type="button" class="${currentQuestion === quizItems.length - 1 ? "submit-button" : "secondary-button"}" id="next-question">${currentQuestion === quizItems.length - 1 ? "交卷並查看詳解 →" : "下一題 →"}</button></div>`;
  card.querySelector("#toggle-option-mode").addEventListener("click", () => {
    optionMarkingMode = !optionMarkingMode;
    renderQuestion();
  });
  card.querySelectorAll("[data-option]").forEach((button) => button.addEventListener("click", () => {
    const optionIndex = Number(button.dataset.option);
    const currentMarks = eliminatedOptions[currentQuestion];
    if (optionMarkingMode) {
      if (currentMarks.has(optionIndex)) currentMarks.delete(optionIndex);
      else {
        currentMarks.add(optionIndex);
        if (answers[currentQuestion] === optionIndex) answers[currentQuestion] = null;
      }
    } else {
      answers[currentQuestion] = optionIndex;
      currentMarks.delete(optionIndex);
    }
    renderQuestion();
  }));
  card.querySelector("#previous-question").addEventListener("click", () => moveQuestion(-1));
  card.querySelector("#next-question").addEventListener("click", () => {
    if (currentQuestion === quizItems.length - 1) {
      const unanswered = answers.filter((answer) => answer === null).length;
      if (unanswered && !window.confirm(`還有 ${unanswered} 題未作答，要先交卷並查看詳解嗎？`)) return;
      showResults(false);
    } else moveQuestion(1);
  });
  renderQuestionDots();
}

function renderQuestionDots() {
  const dots = document.getElementById("question-dots");
  dots.innerHTML = quizItems.map((_, index) => `<button type="button" class="question-dot${index === currentQuestion ? " current" : ""}${answers[index] !== null ? " answered" : ""}" aria-label="第 ${index + 1} 題${answers[index] !== null ? "，已作答" : "，未作答"}" data-index="${index}">${index + 1}</button>`).join("");
  dots.querySelectorAll("[data-index]").forEach((button) => button.addEventListener("click", () => {
    currentQuestion = Number(button.dataset.index);
    renderQuestion();
  }));
  document.getElementById("answered-count").textContent = `${answers.filter((answer) => answer !== null).length} / ${quizItems.length} 已作答`;
}

function moveQuestion(offset) {
  currentQuestion = Math.min(quizItems.length - 1, Math.max(0, currentQuestion + offset));
  renderQuestion();
}

function showResults(timeUp) {
  clearInterval(timerId);
  const correct = quizItems.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
  const score = quizItems.length ? Math.round((correct / quizItems.length) * 100) : 0;
  const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
  const elapsedMinutes = Math.max(1, Math.round(elapsedSeconds / 60));
  document.getElementById("score-value").textContent = String(score);
  document.getElementById("correct-value").textContent = `${correct} / ${quizItems.length}`;
  document.getElementById("elapsed-value").textContent = `${elapsedMinutes} 分鐘`;
  document.getElementById("result-title").textContent = timeUp ? "時間到，完成這次練習！" : score === 100 ? "太好了，全部答對！" : "完成今天的練習！";
  document.getElementById("result-subtitle").textContent = score >= 80 ? "穩穩掌握得不錯，繼續保持自己的節奏。" : "先看懂每一步，再挑戰一次也可以。";
  const pendingExplanations = quizItems.filter((question) => !question.explanation).length;
  document.querySelector("#result-view .review-heading h2").textContent = pendingExplanations ? "逐題檢視與答案" : "逐題檢視與詳解";
  document.querySelector("#result-view .review-heading p").textContent = pendingExplanations ? `${pendingExplanations} 題已先收錄答案，詳解待後續補充。` : "看懂步驟，也看看自己在哪裡卡住。";
  document.getElementById("review-list").innerHTML = quizItems.map((question, index) => {
    const answer = answers[index];
    const isCorrect = answer === question.answer;
    const status = answer === null ? "未作答" : isCorrect ? "答對" : "再複習";
    const statusClass = answer === null ? "unanswered" : isCorrect ? "correct" : "incorrect";
    const userAnswer = answer === null ? "未作答" : `${letters[answer]}. ${question.options[answer]}`;
    const correctAnswer = `${letters[question.answer]}. ${question.options[question.answer]}`;
    const sourceLine = question.sourceLabel
      ? `<div class="question-source">來源：<a href="${question.sourceUrl}" target="_blank" rel="noopener noreferrer">${question.sourceLabel}</a> · <a href="${question.answerSourceUrl}" target="_blank" rel="noopener noreferrer">官方參考答案</a></div>`
      : `<div class="question-source">原創練習題</div>`;
    const explanation = question.explanation
      ? `<div class="explanation-box"><strong>解題思路</strong><br />${question.explanation}</div>`
      : `<div class="explanation-box"><strong>詳解待補</strong><br />本題已收錄正確答案，完整解說將於後續補充。</div>`;
    return `<article class="review-card"><div class="review-card-head"><span class="review-status ${statusClass}">${status}</span><span class="review-topic">${question.topicName} · 第 ${index + 1} 題</span></div><p class="review-q">${question.prompt}</p>${sourceLine}<div class="review-answer"><span>你的答案：<strong>${userAnswer}</strong></span><span>正確答案：<strong>${correctAnswer}</strong></span></div>${explanation}</article>`;
  }).join("");
  switchView("result");
}

function resetToSetup() {
  clearInterval(timerId);
  switchView("setup");
}

document.querySelectorAll(".stage-tab").forEach((button) => button.addEventListener("click", () => {
  if (currentStage === button.dataset.stage) return;
  currentStage = button.dataset.stage;
  currentTerm = "all";
  selectedTopics = new Set();
  document.querySelectorAll(".term-tab").forEach((tab) => {
    const active = tab.dataset.term === currentTerm;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".stage-tab").forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderGrades();
}));

topicGrid.addEventListener("click", (event) => {
  const chapterButton = event.target.closest("[data-chapter]");
  if (chapterButton) {
    const selectedChapter = getCurrentChapters().find((item) => item.id === chapterButton.dataset.chapter);
    if (!selectedChapter) return;
    const chapterIds = selectedChapter.lessons.map((itemLesson) => itemLesson.id);
    const allSelected = chapterIds.every((id) => selectedTopics.has(id));
    chapterIds.forEach((id) => allSelected ? selectedTopics.delete(id) : selectedTopics.add(id));
    renderTopics();
    updatePreview();
    return;
  }
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  const topic = button.dataset.topic;
  if (selectedTopics.has(topic)) selectedTopics.delete(topic);
  else selectedTopics.add(topic);
  renderTopics();
  updatePreview();
});

document.getElementById("select-all").addEventListener("click", () => {
  getCurrentUnits().forEach((topic) => selectedTopics.add(topic.id));
  renderTopics();
  updatePreview();
});
document.getElementById("clear-all").addEventListener("click", () => {
  selectedTopics.clear();
  renderTopics();
  updatePreview();
});
document.querySelectorAll(".term-tab").forEach((button) => button.addEventListener("click", () => {
  currentTerm = button.dataset.term;
  document.querySelectorAll(".term-tab").forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  renderTopics();
}));
gradeSelect.addEventListener("change", () => {
  selectedTopics.clear();
  courseField.hidden = currentStage !== "senior" || gradeSelect.value === "10";
  renderTopics();
  updatePreview();
});
courseSelect.addEventListener("change", () => {
  selectedTopics.clear();
  renderTopics();
  updatePreview();
});
document.getElementById("question-count").addEventListener("change", updatePreview);
document.getElementById("difficulty").addEventListener("change", updatePreview);
document.getElementById("duration").addEventListener("change", updatePreview);
startButton.addEventListener("click", startQuiz);
document.getElementById("back-to-setup").addEventListener("click", () => {
  const hasWork = answers.some((answer) => answer !== null) || eliminatedOptions.some((options) => options.size > 0);
  if (hasWork && !window.confirm("離開後目前的作答與劃掉標記不會保留，確定返回範圍設定嗎？")) return;
  resetToSetup();
});
document.getElementById("retry-button").addEventListener("click", () => {
  answers = new Array(quizItems.length).fill(null);
  eliminatedOptions = quizItems.map(() => new Set());
  optionMarkingMode = false;
  currentQuestion = 0;
  startedAt = Date.now();
  remainingSeconds = Number(document.getElementById("duration").value) * 60;
  document.getElementById("timer-card").classList.remove("urgent");
  document.getElementById("timer-card").hidden = remainingSeconds === 0;
  renderQuestion();
  switchView("exam");
  startTimer();
});
document.getElementById("finish-button").addEventListener("click", resetToSetup);
document.querySelectorAll("[data-toast]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.toast)));

renderGrades();
