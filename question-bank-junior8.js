// 國二原創練習題，每個小節 50 題，僅附答案，供後續補充詳解。
(() => {
  const units = [
    {id:"j8-l1",title:"乘法公式",topic:"algebra",q:n=>{let a=n+2,b=n%7+1;switch(n%4){case 0:return [`展開：(x＋${a})²。`,`x²＋${2*a}x＋${a*a}`];case 1:return [`展開：(x−${a})(x＋${a})。`,`x²−${a*a}`];case 2:return [`展開：(x＋${a})(x＋${b})。`,`x²＋${a+b}x＋${a*b}`];default:return [`展開：(2x＋${a})²。`,`4x²＋${4*a}x＋${a*a}`]}}},
    {id:"j8-l2",title:"多項式運算與因式分解",topic:"number",q:n=>{let a=n+2,b=n%6+1;switch(n%4){case 0:return [`化簡：( ${a}x²＋${b}x )＋( ${b}x²−${a}x )。`,`${a+b}x²＋${b-a}x`];case 1:return [`因式分解：x²＋${2*a}x＋${a*a}。`,`(x＋${a})²`];case 2:return [`因式分解：x²−${a*a}。`,`(x−${a})(x＋${a})`];default:return [`計算：(x＋${a})(x＋${b}) 中 x 項係數。`,a+b]}}},
    {id:"j8-l3",title:"聯立方程式的解",topic:"equation",q:n=>{let x=n+1,y=n%7+1,a=n%5+2,b=n%4+2;switch(n%4){case 0:return [`方程組 x＋y＝${x+y}、x−y＝${x-y} 的解中，x 為何？`,x];case 1:return [`方程組 ${a}x＋y＝${a*x+y}、x＋y＝${x+y} 的解中，y 為何？`,y];case 2:return [`方程組 x＋${a}y＝${x+a*y}、x＋y＝${x+y} 的解中，x 為何？`,x];default:return [`方程組 ${a}x＋${b}y＝${a*x+b*y}、x−y＝${x-y} 的解中，y 為何？`,y]}}},
    {id:"j8-l4",title:"聯立方程式應用",topic:"equation",q:n=>{let a=n+2,b=n%6+2;switch(n%4){case 0:return [`兩數和為 ${a+b}、差為 ${a-b}，較大的數是多少？`,a];case 1:return [`成人票 ${a*100} 元、兒童票 ${b*100} 元。買 1 張成人票和 1 張兒童票共多少元？`,(a+b)*100];case 2:return [`雞兔共 ${a+b} 隻，雞兔腳共 ${2*a+4*b} 隻，兔有幾隻？`,b];default:return [`鉛筆每枝 ${a} 元、橡皮擦每個 ${b} 元，買 2 枝鉛筆與 3 個橡皮擦共多少元？`,2*a+3*b]}}},
    {id:"j8-l5",title:"坐標平面",topic:"coordinate",q:n=>{let x=(n%9+1)*(n%2?1:-1),y=(n%7+1)*(n%3?1:-1);switch(n%4){case 0:return [`點 (${x}, ${y}) 位於第幾象限？`,x*y>0?(x>0?1:3):(x>0?4:2)];case 1:return [`點 (${x}, ${y}) 對 x 軸的對稱點 y 坐標為何？`,-y];case 2:return [`點 (${x}, ${y}) 向右移 ${n%5+1} 單位後的 x 坐標為何？`,x+n%5+1];default:return [`點 (${x}, ${y}) 到 y 軸的距離是多少？`,Math.abs(x)]}}},
    {id:"j8-l6",title:"一次函數與圖形",topic:"function",q:n=>{let a=n+1,b=n%9-4,x=n%8+1;switch(n%4){case 0:return [`若 y＝${a}x＋${b}，x＝${x} 時 y 為何？`,a*x+b];case 1:return [`直線 y＝${a}x＋${b} 的斜率為何？`,a];case 2:return [`直線 y＝${a}x＋${b} 與 y 軸交點的 y 坐標為何？`,b];default:return [`若直線 y＝${a}x＋${b} 上一點的 y 坐標為 ${a*x+b}，該點的 x 坐標為何？`,x]}}},
    {id:"j8-l7",title:"全等與三角形性質",topic:"geometry",q:n=>{let a=n%50+30;switch(n%4){case 0:return [`三角形兩角為 ${a}°、${180-a-30}°，第三角幾度？`,30];case 1:return [`等腰三角形頂角 ${a}°，每個底角幾度？`,(180-a)/2];case 2:return [`三角形三邊為 ${a}、${a}、${a}，周長是多少？`,3*a];default:return [`兩個三角形三邊分別為 ${a}、${a+1}、${a+2} 與相同三數，依 SSS 判定是否全等？`,"是"]}}},
    {id:"j8-l8",title:"平行四邊形與特殊四邊形",topic:"geometry",q:n=>{let a=n+3,b=n%6+2,angle=n+30;switch(n%4){case 0:return [`平行四邊形一角為 ${angle}°，相鄰角為幾度？`,180-angle];case 1:return [`長方形長 ${a}、寬 ${b}，面積是多少？`,a*b];case 2:return [`平行四邊形底 ${a}、高 ${b}，面積是多少？`,a*b];default:return [`菱形兩條對角線長 ${2*a}、${2*b}，面積是多少？`,2*a*b]}}},
    {id:"j8-l9",title:"幾何推理",topic:"geometry",q:n=>{let a=n%60+20,b=n%50+25;switch(n%4){case 0:return [`兩平行線被截線所截，一組內錯角中一角為 ${a}°，另一角為幾度？`,a];case 1:return [`三角形外角兩個不相鄰內角為 ${a}°、${b}°，外角為幾度？`,a+b];case 2:return [`等腰三角形頂角為 ${a}°，底角為幾度？`,(180-a)/2];default:return [`直線上的鄰角之一為 ${a}°，另一角為幾度？`,180-a]}}},
    {id:"j8-l10",title:"尺規作圖",topic:"geometry",q:n=>{let a=n+2;switch(n%4){case 0:return [`線段長 ${a} 公分，以線段兩端為圓心，畫半徑大於線段一半的等半徑弧，連接兩弧交點可作出原線段的什麼線？`,"垂直平分線"];case 1:return [`作一角的角平分線後，原角 ${2*a}° 被分成每角幾度？`,a];case 2:return [`線段長 ${2*a} 公分，以兩端為圓心畫半徑 ${a+1} 公分的弧。半徑是否大於線段的一半？`,`是`];default:return [`角平分線將 ${2*a}° 的角分成幾個相等的角？`,2]}}},
    {id:"j8-l11",title:"平均數、中位數與眾數",topic:"statistics",q:n=>{let a=n+2,b=n%6+1,c=n%7+3;switch(n%4){case 0:return [`資料 ${a}、${a+2}、${a+4} 的平均數為何？`,a+2];case 1:return [`資料 ${a}、${b}、${a}、${c}、${a} 的眾數為何？`,a];case 2:return [`資料 ${a}、${b}、${c} 的中位數為何？`,[a,b,c].sort((u,v)=>u-v)[1]];default:return [`四筆資料的平均數為 ${a+2}，其中三筆為 ${a}、${a+1}、${a+3}，第四筆為何？`,a+4]}}},
    {id:"j8-l12",title:"資料分布與判讀",topic:"statistics",q:n=>{let a=n+1,b=2*n+3,c=3*n+5;switch(n%4){case 0:return [`資料 ${a}、${b}、${c}、${c+4} 的全距為何？`,Math.max(a,b,c,c+4)-Math.min(a,b,c,c+4)];case 1:return [`某組資料平均數為 ${a}，共 ${b} 筆，資料總和為何？`,a*b];case 2:return [`資料 ${a}、${b}、${c} 的中位數為何？`,[a,b,c].sort((u,v)=>u-v)[1]];default:return [`某班 ${a*5} 人中 ${b} 人選甲，選甲占全班百分之幾？`,b/(a*5)*100]}}}
  ];
  const difficultyByTemplate={
    "j8-l1":["basic","basic","standard","challenge"],"j8-l2":["standard","challenge","challenge","basic"],
    "j8-l3":["basic","standard","standard","challenge"],"j8-l4":["standard","basic","challenge","standard"],
    "j8-l5":["standard","basic","challenge","standard"],"j8-l6":["standard","basic","basic","challenge"],
    "j8-l7":["standard","challenge","basic","challenge"],"j8-l8":["standard","basic","basic","challenge"],
    "j8-l9":["standard","challenge","standard","basic"],"j8-l10":["challenge","standard","basic","standard"],
    "j8-l11":["standard","basic","standard","challenge"],"j8-l12":["basic","standard","standard","challenge"],
  };
  window.junior8QuestionBank=units.flatMap((u,k)=>Array.from({length:50},(_,i)=>{
    const n=i+1,[prompt,answer]=u.q(n); let options;
    if(typeof answer==="string") {
      if(answer==="是") options=["是","否","無法判定","不一定"];
      else if(answer==="垂直平分線") options=[answer,"只垂直弦","只平分弦","角平分線"];
      else {
        const a=n+2,b=n%7+1;
        if(u.id==="j8-l1"&&n%4===0) options=[answer,`x²＋${a*a}`,`x²＋${a}x＋${a*a}`,`x²−${2*a}x＋${a*a}`];
        else if(u.id==="j8-l1"&&n%4===1) options=[answer,`x²＋${a*a}`,`(x−${a})²`,`x²−${2*a*a}`];
        else if(u.id==="j8-l1"&&n%4===2) options=[answer,`x²＋${a-b}x＋${a*b}`,`x²＋${a+b}x`,`x²＋${a*b}`];
        else if(u.id==="j8-l1") options=[answer,`4x²＋${2*a}x＋${a*a}`,`4x²＋${4*a}x−${a*a}`,`2x²＋${4*a}x＋${a*a}`];
        else if(u.id==="j8-l2"&&n%4===0){const c=n%6+1;options=[answer,`${a+c}x²＋${a-c}x`,`${a+c}x²＋${a+c}x`,`${a+c}x²`]}
        else if(u.id==="j8-l2"&&n%4===1){const c=n%6+1;options=[answer,`(x−${a})²`,`(x−${a})(x＋${a})`,`x²＋${2*a}x＋${a}`]}
        else if(u.id==="j8-l2"&&n%4===2){options=[answer,`(x＋${a})²`,`(x−${a})²`,`x²−${a}`]}
        else options=[answer,`${a+b}x＋${a-b}`,`${a+b}x−${a-b}`,`${a*b}`];
      }
    } else options=[answer,answer+1,answer-1,answer+2];
    const shift=(i+k)%4;options=options.slice(shift).concat(options.slice(0,shift));
    return {id:`j8-${u.id.slice(-2)}-${String(n).padStart(3,"0")}`,stage:"junior",grade:8,courses:[],topic:u.topic,lessonIds:[u.id],unitTitle:u.title,difficulty:difficultyByTemplate[u.id][n%4],prompt,options,answer:options.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
