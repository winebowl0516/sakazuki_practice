// 國一原創練習題。每小節 50 題，答案已提供，詳解留待後續補充。
(() => {
  const gcd=(a,b)=>b===0?Math.abs(a):gcd(b,a%b);
  const fractionAnswer=(numerator,denominator)=>{const divisor=gcd(numerator,denominator),n=numerator/divisor,d=denominator/divisor;return d===1?n:`${n}/${d}`};
  const lessons = [
    { id:"j7-l1", title:"正負數、數線與絕對值", topic:"number", q:(n)=>{const a=n%2? n+2:-(n+2); const b=n%3? -n:n; const t=n%5; return t===0?[`數線上，數 ${a} 與 0 的距離是多少？`,Math.abs(a)]:t===1?[`比較 ${a} 與 ${b}，哪一個數較大？`,Math.max(a,b)]:t===2?[`數線上從 ${a} 向右移動 ${n%7+1} 格，所在位置為何？`,a+n%7+1]:t===3?[`−${n} 的相反數是多少？`,n]:[`|${a}| 等於多少？`,Math.abs(a)];}},
    { id:"j7-l2", title:"整數的加減乘除", topic:"number", q:(n)=>{const a=n%2? n+3:-(n+3), b=n%4+2, t=n%5; return t===0?[`計算：(${a})＋(${b})。`,a+b]:t===1?[`計算：(${a})−(${b})。`,a-b]:t===2?[`計算：(${a})×(${b})。`,a*b]:t===3?[`計算：(${a*b})÷(${a})。`,b]:[`計算：(${b})×(−${n%6+1})。`,-b*(n%6+1)];}},
    { id:"j7-l3", title:"分數與數的四則", topic:"number", q:(n)=>{const d=n%7+2,a=n%5+1,b=n%4+1,t=n%5; return t===0?[`計算：${a}/${d}＋${b}/${d}。`,fractionAnswer(a+b,d)]:t===1?[`計算：${a}/${d}−${b}/${d}。`,fractionAnswer(a-b,d)]:t===2?[`計算：(${a}/${d})×(${b}/2)。`,fractionAnswer(a*b,d*2)]:t===3?[`計算：(${a}/${d})÷(${b}/2)。`,fractionAnswer(a*2,d*b)]:[`計算：${a}/${d}＋${b}/${d}×2。`,fractionAnswer(a+2*b,d)];}},
    { id:"j7-l4", title:"指數記法與科學記號", topic:"exponent", q:(n)=>{const a=n+2,v=(n+2)*1000,e=Math.floor(Math.log10(v)),c=v/10**e,t=n%5; return t===0?[`將 ${a}×${a}×${a} 寫成指數記法。`,`${a}³`]:t===1?[`計算：${a}²。`,a*a]:t===2?[`計算：${a}³÷${a}。`,`${a}²`]:t===3?[`將 ${v.toLocaleString("en-US")} 寫成科學記號。`,`${c}×10^${e}`]:[`計算：10^${n}×10³÷10²。`,`10^${n+1}`];}},
    { id:"j7-l5", title:"代數式與式的運算", topic:"equation", q:(n)=>{const a=n%8+2,b=n%9+1,t=n%5; return t===0?[`化簡：${a}x＋${b}x。`,`${formatLinear(a+b)}`]:t===1?[`化簡：${a}x−${b}x。`,`${formatLinear(a-b)}`]:t===2?[`當 x＝${b} 時，${a}x＋${b} 的值是多少？`,a*b+b]:t===3?[`化簡：${a}(x＋${b})。`,`${formatLinear(a,a*b)}`]:[`化簡：(${a}x＋${b})−(${b}x−${a})。`,`${formatLinear(a-b,a+b)}`];}},
    { id:"j7-l6", title:"一元一次方程式", topic:"equation", q:(n)=>{const x=n%9+1,a=n%6+2,b=n%7+1,t=n%5; return t===0?[`解方程式：x＋${a}＝${x+a}。`,`x＝${x}`]:t===1?[`解方程式：${a}x＝${a*x}。`,`x＝${x}`]:t===2?[`解方程式：${a}x＋${b}＝${a*x+b}。`,`x＝${x}`]:t===3?[`解方程式：${a}x＋${b}＝${a+1}x＋${b-x}。`,`x＝${x}`]:[`解方程式：${a}x−${b}＝${a*x-b}。`,`x＝${x}`];}},
    { id:"j7-l7", title:"比例式與正反比", topic:"ratio", q:(n)=>{const a=n%5+2,k=n%6+2,t=n%4; return t===0?[`比例式 ${a}：${2*a}＝x：${2*a*k}，x＝多少？`,k]:t===1?[`y 與 x 成正比，x＝${a} 時 y＝${a*k}。x＝${2*a} 時 y＝多少？`,2*a*k]:t===2?[`y 與 x 成反比，x＝${a} 時 y＝${a*k}。x＝${2*a} 時 y＝多少？`,k/2]:[`地圖比例尺為 1：${k*1000}，圖上 ${a} 公分代表實際幾公尺？`,a*k*10];}},
    { id:"j7-l8", title:"生活中的比例問題", topic:"ratio", q:(n)=>{const a=n+2,b=n%5+3,t=n%4; return t===0?[`果汁與水的比例為 ${a}：${b}，若果汁有 ${a*3} 杯，水有幾杯？`,b*3]:t===1?[`一件 ${a*100} 元的商品打八折，折後價多少元？`,a*80]:t===2?[`${a} 人工作 ${b} 天完成，工作效率相同時，${2*a} 人需幾天？`,b/2]:[`汽車每小時行駛 ${a*10} 公里，${b} 小時行駛幾公里？`,a*10*b];}},
    { id:"j7-l9", title:"基本幾何與角度", topic:"geometry", q:(n)=>{const a=n%80+20,acute=a%89+1,t=n%5; return t===0?[`一條直線上的兩個鄰角其中一角為 ${a}°，另一角為幾度？`,180-a]:t===1?[`兩直線相交，一角為 ${a}°，其對頂角為幾度？`,a]:t===2?[`一個銳角為 ${acute}°，它的餘角為幾度？`,90-acute]:t===3?[`兩個互補角中，較大角比小角多 ${a}°，較小角為幾度？`,(180-a)/2]:[`兩平行線被截線所截，同位角為 ${a}°，另一同位角為幾度？`,a];}},
    { id:"j7-l10", title:"三角形內角和", topic:"geometry", q:(n)=>{const a=n%60+30,b=n%50+40,third=n%30+1,t=n%4; return t===0?[`三角形兩角為 ${a}°、${b}°，第三角為幾度？`,180-a-b]:t===1?[`等腰三角形頂角為 ${a}°，每個底角為幾度？`,(180-a)/2]:t===2?[`直角三角形一銳角為 ${a%89+1}°，另一銳角為幾度？`,90-(a%89+1)]:[`三角形兩內角為 ${a}°、${180-a-third}°，第三角為幾度？`,third];}},
    { id:"j7-l11", title:"資料整理與統計圖", topic:"statistics", q:(n)=>{const a=n%8+2,b=n%7+3,t=n%4; return t===0?[`資料 ${a}、${b}、${a+b} 的平均數是多少？`,(2*a+2*b)/3]:t===1?[`某次調查有 ${a} 人選 A、${b} 人選 B，總人數是多少？`,a+b]:t===2?[`長條圖中 A 組為 ${a*5} 人，B 組為 ${b*5} 人，A 比 B 少幾人？`,Math.abs(a-b)*5]:[`全班 ${a*5} 人中有 ${b} 人參加社團，未參加者有幾人？`,a*5-b];}},
    { id:"j7-l12", title:"資料判讀", topic:"statistics", q:(n)=>{const a=n%9+1,b=n%8+2,c=n%7+3,t=n%4; return t===0?[`資料 ${a}、${b}、${a+b}、${a+b+2}、${a+b+4} 的中位數是多少？`,a+b]:t===1?[`資料 ${n+1}、${n+1}、${n+2}、${n+3} 的眾數是多少？`,n+1]:t===2?[`資料 ${a}、${b}、${c} 的全距是多少？`,Math.max(a,b,c)-Math.min(a,b,c)]:[`若 ${a}、${b}、${c} 三次測驗平均 ${b} 分，前兩次為 ${a}、${c} 分，第三次幾分？`,3*b-a-c];}}
  ];
  const formatLinear = (coefficient, constant = 0) => {
    const term = coefficient === 0 ? "" : coefficient === 1 ? "x" : coefficient === -1 ? "−x" : `${coefficient}x`;
    if (!constant) return term || "0";
    return `${term}${constant > 0 ? (term ? "＋" : "") : "−"}${Math.abs(constant)}`;
  };
  const distractors = (value) => {
    if (typeof value === "number") {
      const result=[];
      for(let step=1;result.length<3;step++) for(const candidate of [value+step,value-step]) if(result.length<3&&candidate!==value&&!result.includes(candidate)) result.push(candidate);
      return result;
    }
    const text=String(value), candidates=[];
    const fraction=text.match(/^(-?\d+)\/(\d+)$/);
    const equation=text.match(/^x＝(-?\d+(?:\.5)?)$/);
    const linear=text.match(/^([−-]?\d*)x(?:([＋+−-])(\d+))?$/);
    const power=text.match(/^(\d+)(²|³)$/);
    const tenPower=text.match(/^10\^(-?\d+)$/);
    const scientific=text.match(/^(\d+(?:\.\d+)?)×10\^(-?\d+)$/);
    if(fraction){
      const [num,den]=fraction.slice(1).map(Number);
      candidates.push(`${num+1}/${den}`,`${num-1}/${den}`,`${num+1}/${den+1}`,`${num}/${den+1}`,`${num-1}/${den+1}`);
      return candidates.filter((candidate,index,array)=>{const [p,q]=candidate.split("/").map(Number);return p*den!==num*q&&array.indexOf(candidate)===index&&!array.slice(0,index).some(prev=>{const [r,s]=prev.split("/").map(Number);return p*s===r*q})}).slice(0,3);
    }
    if(equation){const x=Number(equation[1]);return [`x＝${x+1}`,`x＝${x-1}`,`x＝${-x}`].filter((item,index,array)=>item!==text&&array.indexOf(item)===index).slice(0,3)}
    if(linear){const coefficientText=linear[1],coefficient=coefficientText===""||coefficientText==="+"?1:coefficientText==="−"||coefficientText==="-"?-1:Number(coefficientText.replace("−","-"));const sign=linear[2],amount=Number(linear[3]||0),constant=sign==="−"||sign==="-"?-amount:amount;return [formatLinear(coefficient+1,constant),formatLinear(coefficient-1,constant),formatLinear(-coefficient,constant)].filter((item,index,array)=>item!==text&&array.indexOf(item)===index).slice(0,3)}
    if(power){const base=Number(power[1]),sup=power[2];return [`${base+1}${sup}`,`${base-1}${sup}`,`${base}${sup==="²"?"³":"²"}`]}
    if(tenPower){const exp=Number(tenPower[1]);return [`10^${exp+1}`,`10^${exp-1}`,`2×10^${exp}`]}
    if(scientific){const coefficient=Number(scientific[1]),exp=Number(scientific[2]);return [`${coefficient}×10^${exp+1}`,`${coefficient}×10^${exp-1}`,`${coefficient+1}×10^${exp}`]}
    return [`${text}＋1`,`${text}−1`,`2×(${text})`];
  };
  const difficultyByTemplate = {
    "j7-l1": ["basic","basic","standard","challenge","basic"], "j7-l2": ["standard","standard","standard","basic","challenge"],
    "j7-l3": ["basic","basic","standard","standard","challenge"], "j7-l4": ["basic","basic","standard","standard","challenge"],
    "j7-l5": ["basic","basic","standard","standard","challenge"], "j7-l6": ["basic","basic","standard","challenge","challenge"],
    "j7-l7": ["basic","standard","standard","challenge"], "j7-l8": ["standard","basic","challenge","challenge"],
    "j7-l9": ["basic","basic","standard","challenge","basic"], "j7-l10": ["basic","challenge","basic","standard"],
    "j7-l11": ["standard","basic","standard","challenge"], "j7-l12": ["basic","standard","standard","challenge"],
  };
  window.junior7QuestionBank = lessons.flatMap((unit, u) => Array.from({length:50}, (_, i) => {
    const n=i+1, [prompt, answer]=unit.q(n);
    let opts=[answer, ...distractors(answer,n)];
    const shift=(i+u)%4; opts=opts.slice(shift).concat(opts.slice(0,shift));
    return {id:`j7-${unit.id.slice(-2)}-${String(n).padStart(3,"0")}`,stage:"junior",grade:7,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty:difficultyByTemplate[unit.id][n%difficultyByTemplate[unit.id].length],prompt,options:opts,answer:opts.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
