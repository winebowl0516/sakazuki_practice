// 國三原創練習題，每個小節 50 題，詳解待補。
(() => {
  const units = [
    {id:"j9-l1",title:"比例線段與相似",topic:"geometry",q:n=>{const a=n+2,k=n%5+2;switch(n%4){case 0:return [`兩相似三角形對應邊長比為 1：${k}，小三角形邊長 ${a}，大三角形對應邊長為何？`,a*k];case 1:return [`線段被平行線截成 ${a}、${a*2} 兩段，另一線段對應前段為 ${a+1}，對應後段為何？`,2*(a+1)];case 2:return [`兩相似圖形對應邊長比為 1：${k}，大圖周長為 ${a*k*3}，小圖周長為何？`,a*3];default:return [`兩相似三角形對應邊長比為 1：${k}，小三角形面積 ${a*a}，大三角形面積為何？`,a*a*k*k]}}},
    {id:"j9-l2",title:"相似形的面積與應用",topic:"geometry",q:n=>{const a=n+2,k=n%4+2;switch(n%4){case 0:return [`相似圖形的邊長比為 1：${k}，小圖面積 ${a*a}，大圖面積為何？`,a*a*k*k];case 1:return [`影長 ${a} 公尺的旗桿高 ${a*2} 公尺，同時影長 ${a*3} 公尺的樹高為何？`,a*6];case 2:return [`兩相似三角形面積比為 1：${k*k}，小三角形邊長 ${a}，大三角形對應邊長為何？`,a*k];default:return [`地圖比例尺 1：${k*10000}，圖上 ${a} 公分代表實際幾公尺？`,a*k*100]}}},
    {id:"j9-l3",title:"圓、弦與弧",topic:"geometry",q:n=>{const r=n+2;switch(n%4){case 0:return [`圓半徑為 ${r} 公分，直徑長多少公分？`,2*r];case 1:return [`圓直徑為 ${2*r} 公分，半徑長多少公分？`,r];case 2:return [`圓心到弦的垂線長 ${r} 公分，圓心到弦的垂足與弦有何關係？`,`垂直且平分弦`];default:return [`半徑為 ${r} 的圓中，長度 ${2*r} 的弦是否可能為直徑？`,`是`]}}},
    {id:"j9-l4",title:"圓周角與幾何推理",topic:"geometry",q:n=>{const a=n+20;switch(n%4){case 0:return [`同弧所對圓心角為 ${2*a}°，圓周角為幾度？`,a];case 1:return [`同弧所對圓周角為 ${a}°，圓心角為幾度？`,2*a];case 2:return [`圓內接四邊形一角為 ${a}°，其對角為幾度？`,180-a];default:return [`半徑 ${n+3} 公分的圓中，直徑所對的圓周角為幾度？`,90]}}},
    {id:"j9-l5",title:"幾何證明與應用",topic:"geometry",q:n=>{const a=n+30;switch(n%4){case 0:return [`三角形兩角為 ${a}°、${180-a-40}°，第三角為幾度？`,40];case 1:return [`等腰三角形頂角 ${a}°，每個底角為幾度？`,(180-a)/2];case 2:return [`平行四邊形一角為 ${a}°，相鄰角為幾度？`,180-a];default:return [`三角形的外角為 ${a+40}°，一個不相鄰內角為 ${a}°，另一個不相鄰內角為幾度？`,40]}}},
    {id:"j9-l6",title:"直角三角形與三角比",topic:"trigonometry",q:n=>{const a=n+3,k=n+1;switch(n%4){case 0:return [`梯子長 ${5*k} 公尺，底端離牆 ${3*k} 公尺，梯子頂端離地幾公尺？`,4*k];case 1:return [`直角三角形中，某銳角的對邊 ${3*k}、斜邊 ${5*k}，該角的 sin 值為何？`,`3/5`];case 2:return [`30°、60°、90° 三角形中，斜邊長 ${2*a}，30° 的對邊長為何？`,a];default:return [`45°、45°、90° 三角形中，一股長 ${a}，斜邊長為何？`,`${a}√2`]}}},
    {id:"j9-l7",title:"平方函數與圖形",topic:"function",q:n=>{const a=n+1,b=n%7-3;switch(n%4){case 0:return [`函數 y＝(x−${a})²＋${b} 的圖形頂點坐標為何？`,`(${a},${b})`];case 1:return [`若 y＝${a}x²，x＝${b} 時 y 為何？`,a*b*b];case 2:return [`y＝${a}x² 的圖形開口方向為何？`,"向上"];default:return [`函數 y＝(x−${a})² 的對稱軸為何？`,`x＝${a}`]}}},
    {id:"j9-l8",title:"二次函數的最大最小值",topic:"function",q:n=>{const a=n+1,b=n%11-5;switch(n%4){case 0:return [`y＝(x−${a})²＋${b} 的最小值為何？`,b];case 1:return [`y＝−(x＋${a})²＋${b} 的最大值為何？`,b];case 2:return [`y＝x²−${2*a}x＋${a*a+ b} 的最小值為何？`,b];default:return [`y＝(x−${a})²＋${b} 的對稱軸為何？`,`x＝${a}`]}}},
    {id:"j9-l9",title:"因式分解解方程式",topic:"equation",q:n=>{const a=n+1,b=n+2;switch(n%4){case 0:return [`解方程式：(x−${a})(x＋${b})＝0。兩根的和為何？`,a-b];case 1:return [`解方程式：x²−${a*a}＝0。正根為何？`,a];case 2:return [`解方程式：x²−${a+b}x＋${a*b}＝0。較大的根為何？`,Math.max(a,b)];default:return [`解方程式：x²＋${2*a}x＋${a*a}＝0。根為何？`,`−${a}`]}}},
    {id:"j9-l10",title:"二次方程式與應用",topic:"equation",q:n=>{const a=n+2;switch(n%4){case 0:return [`長方形長 ${a+2}、寬 ${a}，面積為 ${a*(a+2)}，其寬是多少？`,a];case 1:return [`某數的平方為 ${a*a}，該數的正值為何？`,a];case 2:return [`連續兩正整數的乘積為 ${a*(a+1)}，較小的數為何？`,a];default:return [`解方程式：x²−${2*a}x＋${a*a}＝0。x 為何？`,a]}}},
    {id:"j9-l11",title:"機率與樣本空間",topic:"probability",q:n=>{const a=n+2,b=n%4+2,m=n+5;switch(n%4){case 0:return [`袋中有 ${a} 顆紅球、${b} 顆藍球，任取一顆，取到紅球的機率為何？`,`${a}/${a+b}`];case 1:return [`擲一顆面值為 1 至 ${m} 的公平骰子，擲出偶數的機率為何？`,`${Math.floor(m/2)}/${m}`];case 2:return [`同時擲 ${n} 枚公平硬幣，樣本空間結果共有幾種？`,2**n];default:return [`從 1 至 ${m} 的號碼球中任取一球，取到奇數的機率為何？`,`${Math.ceil(m/2)}/${m}`]}}},
    {id:"j9-l12",title:"資料分析",topic:"statistics",q:n=>{const a=n+2,b=n%6+3,c=n%8+1;switch(n%4){case 0:return [`資料 ${a}、${a+2}、${a+4} 的平均數為何？`,a+2];case 1:return [`資料 ${a}、${b}、${c} 的全距為何？`,Math.max(a,b,c)-Math.min(a,b,c)];case 2:return [`資料 ${a}、${b}、${c} 的中位數為何？`,[a,b,c].sort((x,y)=>x-y)[1]];default:return [`某班 ${a*5} 人中有 ${b} 人參加社團，抽一人恰為社團成員的機率為何？`,`${b}/${a*5}`]}}}
  ];
  const difficultyByTemplate={
    "j9-l1":["basic","standard","challenge","challenge"],"j9-l2":["basic","standard","challenge","standard"],
    "j9-l3":["basic","basic","challenge","standard"],"j9-l4":["standard","standard","challenge","basic"],
    "j9-l5":["standard","basic","standard","challenge"],"j9-l6":["challenge","basic","standard","standard"],
    "j9-l7":["standard","challenge","basic","standard"],"j9-l8":["basic","challenge","challenge","standard"],
    "j9-l9":["challenge","standard","challenge","basic"],"j9-l10":["basic","standard","challenge","challenge"],
    "j9-l11":["basic","standard","challenge","standard"],"j9-l12":["basic","challenge","standard","challenge"],
  };
  window.junior9QuestionBank=units.flatMap((u,k)=>Array.from({length:50},(_,i)=>{
    const n=i+1,[prompt,answer]=u.q(n); let options;
    if(typeof answer==="string") {
      if(answer==="垂直且平分弦") options=[answer,"平行且等長","只平分弦","只垂直弦"];
      else if(answer==="是") options=[answer,"否","無法判定","不一定"];
      else if(answer==="向上") options=[answer,"向下","向左","向右"];
      else if(answer.includes("/")){const [a,b]=answer.split("/").map(Number);options=[answer,`${a+1}/${b}`,`${a-1}/${b}`,`${a}/${b+1}`]}
      else if(answer.includes("√2")){const a=Number(answer.replace("√2",""));options=[answer,`${a}`,`${a}√3`,`${a*2}√2`]}
      else if(answer.startsWith("(")){const m=answer.match(/^\((-?\d+),(-?\d+)\)$/),x=Number(m[1]),y=Number(m[2]);options=[answer,`(${x+1},${y})`,`(${x},${y+1})`,`(${-x},${y})`]}
      else if(answer.startsWith("x＝")){const x=Number(answer.slice(2));options=[answer,`x＝${x+1}`,`x＝${x-1}`,`x＝${-x}`]}
      else if(answer.startsWith("−")){const x=Number(answer.slice(1));options=[answer,`${x}`,`−${x+1}`,`−${x-1}`]}
      else options=[answer,`${answer}＋1`,`${answer}−1`,"以上皆非"];
    } else options=[answer,answer+1,answer-1,answer+2];
    const shift=(i+k)%4;options=options.slice(shift).concat(options.slice(0,shift));
    return {id:`j9-${u.id.slice(-2)}-${String(n).padStart(3,"0")}`,stage:"junior",grade:9,courses:[],topic:u.topic,lessonIds:[u.id],unitTitle:u.title,difficulty:difficultyByTemplate[u.id][n%4],prompt,options,answer:options.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
