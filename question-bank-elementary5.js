// 小五原創練習題。每個小節 50 題，答案已提供，詳解留待後續補充。
(() => {
  const gcd=(a,b)=>b===0?Math.abs(a):gcd(b,a%b);
  const lcm=(a,b)=>a/gcd(a,b)*b;
  const fraction=(n,d)=>{const g=gcd(n,d);n/=g;d/=g;return d===1?n:`${n}/${d}`};
  const primeFactors=n=>{const out=[];for(let p=2;p*p<=n;p++)while(n%p===0){out.push(p);n/=p;}if(n>1)out.push(n);return out};
  const uniqueOptions=(answer,candidates)=>[...new Set([answer,...candidates])].slice(0,4);
  const ratio=(a,b)=>{const g=gcd(a,b);return `${a/g}：${b/g}`};
  const ratioOptions=(a,b)=>{const choices=[ratio(a,b)];for(let step=1;choices.length<4&&step<=10;step++){for(const candidate of [ratio(a+step,b),ratio(a,b+step)])if(!choices.includes(candidate))choices.push(candidate);}return choices.slice(0,4)};
  const decimal=x=>Number((x/10).toFixed(1));
  const lessons=[
    {id:"e5-l1",title:"質數與合數",topic:"number",q:n=>{
      const value=n%48+2, composite=2*(n%20+3), factors=primeFactors(composite), t=n%5;
      return t===0?[`${value} 是質數還是合數？`,primeFactors(value).length===1&&value!==1?"質數":"合數",["質數","合數","既是質數也是合數","無法判斷"]]:
        t===1?[`${composite} 有幾個質因數（重複的也要計算）？`,factors.length]:
        t===2?[`將 ${composite} 寫成質因數相乘的形式。`,factors.join("×"),uniqueOptions(factors.join("×"),[`${factors[0]}×${composite/factors[0]}`,primeFactors(composite+1).join("×"),`${composite}×1`,primeFactors(composite+2).join("×")])]:
        t===3?[`${composite} 最小的質因數是多少？`,factors[0]]:
        [`${composite} 最大的質因數是多少？`,factors[factors.length-1]];
    }},
    {id:"e5-l2",title:"最大公因數與最小公倍數",topic:"number",q:n=>{
      const a=n%24+6,b=n%18+8,t=n%5;
      return t===0?[`${a} 和 ${b} 的最大公因數是多少？`,gcd(a,b)]:
        t===1?[`${a} 和 ${b} 的最小公倍數是多少？`,lcm(a,b)]:
        t===2?[`兩盞燈分別每 ${a} 秒和每 ${b} 秒亮一次，剛好同時亮後，至少幾秒會再次同時亮？`,lcm(a,b)]:
        t===3?[`有 ${a*12} 公分和 ${b*12} 公分長的緞帶，要剪成一樣長且沒有剩下的最長小段，每段長幾公分？`,gcd(a*12,b*12)]:
        [`${a} 個紅球和 ${b} 個藍球要分裝成內容完全相同的小袋，最多可以分成幾袋？`,gcd(a,b)];
    }},
    {id:"e5-l3",title:"分數乘除與應用",topic:"fraction",q:n=>{
      const d=n%8+2,p=n%(d-1)+1,k=n%5+2,total=k*d,t=n%5;
      return t===0?[`計算：${p}/${d}×${k}＝？`,fraction(p*k,d)]:
        t===1?[`計算：${p}/${d}÷${k}＝？`,fraction(p,d*k)]:
        t===2?[`計算：${k}×${p}/${d}＝？`,fraction(k*p,d)]:
        t===3?[`一條緞帶長 ${total} 公尺，用掉全長的 ${p}/${d}，用掉幾公尺？`,fraction(total*p,d)]:
        [`一桶果汁有 ${k} 公升，倒出其中的 ${p}/${d}，倒出幾公升？`,fraction(k*p,d)];
    }},
    {id:"e5-l4",title:"小數乘除與估算",topic:"fraction",q:n=>{
      const a=n%75+15,b=n%55+15,k=n%8+2,divisor=n%6+2,dividend=divisor*(n%9+1),t=n%5;
      return t===0?[`計算：${decimal(a)}×${k}＝？`,Number((a*k/10).toFixed(1))]:
        t===1?[`計算：${decimal(a)}×${decimal(b)}＝？`,Number((a*b/100).toFixed(2))]:
        t===2?[`計算：${decimal(dividend)}÷${divisor}＝？`,decimal(dividend/divisor)]:
        t===3?[`估算 ${decimal(a)}×${k}：先把 ${decimal(a)} 四捨五入到整數再乘，約是多少？`,Math.round(a/10)*k]:
        [`每公尺緞帶重 ${decimal(a)} 公斤，${k} 公尺重多少公斤？`,Number((a*k/10).toFixed(1))];
    }},
    {id:"e5-l5",title:"比與比值",topic:"ratio",q:n=>{
      const a=n%6+2,b=n%5+2,k=n%4+2,total=(a+b)*k,t=n%5;
      return t===0?[`把比 ${a*2}：${b*2} 化成最簡整數比。`,ratio(a*2,b*2),ratioOptions(a,b)]:
        t===1?[`比 ${a}：${b} 的比值是多少？`,fraction(a,b)]:
        t===2?[`紅球和白球的個數比是 ${a}：${b}，總共有 ${total} 顆，紅球有幾顆？`,a*k]:
        t===3?[`在 ${a}：${b}＝□：${b*k} 中，□是多少？`,a*k]:
        [`果汁和水的比是 ${a}：${b}，果汁有 ${a*k} 杯，水有幾杯？`,b*k];
    }},
    {id:"e5-l6",title:"百分率與折扣",topic:"ratio",q:n=>{
      const price=(n%9+2)*100,rate=(n%8+1)*10,number=n%6+3, t=n%5;
      return t===0?[`${price} 元的 ${rate}% 是多少元？`,price*rate/100]:
        t===1?[`一件 ${price} 元的商品打 ${100-rate}% 折，折扣後是多少元？`,price*(100-rate)/100]:
        t===2?[`一件 ${price} 元的商品打 ${100-rate}% 折，少付多少元？`,price*rate/100]:
        t===3?[`全班有 ${number*10} 人，其中 ${rate}% 參加合唱團，有幾人參加？`,number*10*rate/100]:
        [`原價 ${price} 元的商品折價 ${price*rate/100} 元，折扣率是多少百分比？`,rate];
    }},
    {id:"e5-l7",title:"三角形與平行四邊形",topic:"geometry",q:n=>{
      const a=(n%7+3)*10,b=(n%6+2)*10,side1=n%12+5,side2=n%9+4,t=n%5;
      return t===0?[`三角形兩個內角是 ${a}° 和 ${b}°，第三個內角是多少度？`,180-a-b]:
        t===1?[`等腰三角形的頂角是 ${a}°，每個底角是多少度？`,(180-a)/2]:
        t===2?[`平行四邊形的一個角是 ${a}°，與它相鄰的角是多少度？`,180-a]:
        t===3?[`平行四邊形相鄰兩邊長 ${side1} 公分和 ${side2} 公分，周長是多少公分？`,2*(side1+side2)]:
        [`等腰三角形的每個底角是 ${b}°，頂角是多少度？`,180-2*b];
    }},
    {id:"e5-l8",title:"面積公式與應用",topic:"geometry",q:n=>{
      const base=2*(n%10+3),height=n%8+2,l=n%12+5,w=n%9+4,t=n%5;
      return t===0?[`底 ${base} 公分、高 ${height} 公分的平行四邊形，面積是多少平方公分？`,base*height]:
        t===1?[`底 ${base} 公分、高 ${height} 公分的三角形，面積是多少平方公分？`,base*height/2]:
        t===2?[`長 ${l} 公尺、寬 ${w} 公尺的長方形土地，面積是多少平方公尺？`,l*w]:
        t===3?[`一個三角形面積是 ${base*height/2} 平方公分，底是 ${base} 公分，高是多少公分？`,height]:
        [`長 ${l} 公尺、寬 ${w} 公尺的菜園，留下 ${w} 平方公尺種菜，其餘面積是多少平方公尺？`,l*w-w];
    }},
    {id:"e5-l9",title:"長方體與正方體",topic:"geometry",q:n=>{
      const l=n%8+3,w=n%6+2,h=n%5+2,edge=n%7+2,t=n%5;
      return t===0?[`長 ${l} 公分、寬 ${w} 公分、高 ${h} 公分的長方體，體積是多少立方公分？`,l*w*h]:
        t===1?[`長 ${l} 公分、寬 ${w} 公分、高 ${h} 公分的長方體，表面積是多少平方公分？`,2*(l*w+l*h+w*h)]:
        t===2?[`邊長 ${edge} 公分的正方體，體積是多少立方公分？`,edge**3]:
        t===3?[`邊長 ${edge} 公分的正方體，表面積是多少平方公分？`,6*edge*edge]:
        [`一個長方體盒子的底面積是 ${l*w} 平方公分，高 ${h} 公分，體積是多少立方公分？`,l*w*h];
    }},
    {id:"e5-l10",title:"體積和容量換算",topic:"measure",q:n=>{
      const amount=n%8+2,l=n%9+3,w=n%6+2,h=n%5+2,t=n%5;
      return t===0?[`${amount*1000} 立方公分等於幾毫升？`,amount*1000]:
        t===1?[`${amount*1000} 毫升等於幾立方公分？`,amount*1000]:
        t===2?[`${amount} 公升等於幾毫升？`,amount*1000]:
        t===3?[`${amount} 立方公尺等於幾公升？`,amount*1000]:
        [`長 ${l} 公分、寬 ${w} 公分、高 ${h} 公分的水箱裝滿水，容量是多少毫升？`,l*w*h];
    }},
  ];
  const numberChoices=value=>{
    const choices=[value],steps=Number.isInteger(value)?[1,-1,10,-10,2,-2,100,-100,3,-3]:[0.1,-0.1,0.2,-0.2,1,-1,2,-2];
    for(const step of steps){const candidate=Number((value+step).toFixed(2));if(candidate>=0&&!choices.includes(candidate))choices.push(candidate);if(choices.length===4)break;}
    while(choices.length<4)choices.push(Number((value+choices.length+3).toFixed(2)));
    return choices;
  };
  const fractionChoices=value=>{
    if(typeof value!=="string"||!/^\d+\/\d+$/.test(value))return numberChoices(Number(value));
    const [num,den]=value.split("/").map(Number),choices=[value];
    for(const [p,q] of [[num+1,den],[num-1,den],[num,den+1],[num,den-1],[num+2,den+1],[num+1,den+2]]){
      if(q<=0||p<0||p*den===num*q)continue;const candidate=`${p}/${q}`;
      if(!choices.includes(candidate)&&!choices.some(x=>{const [a,b]=x.split("/").map(Number);return a*q===p*b;}))choices.push(candidate);
      if(choices.length===4)break;
    }
    return choices;
  };
  const challengeTemplates={"e5-l2":[2],"e5-l3":[3],"e5-l4":[3],"e5-l5":[2],"e5-l6":[1],"e5-l7":[4],"e5-l8":[4],"e5-l9":[1],"e5-l10":[4]};
  window.elementary5QuestionBank=lessons.flatMap((unit,u)=>Array.from({length:50},(_,i)=>{
    const n=i+1,[prompt,answer,customOptions]=unit.q(n),options=customOptions||(typeof answer==="string"&&/^\d+\/\d+$/.test(answer)?fractionChoices(answer):numberChoices(answer));
    const shift=(i+u)%4,shuffled=options.slice(shift).concat(options.slice(0,shift));
    return {id:`e5-${String(u+1).padStart(2,"0")}-${String(n).padStart(3,"0")}`,stage:"elementary",grade:5,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty:challengeTemplates[unit.id]?.includes(n%5)?"challenge":"basic",prompt,options:shuffled,answer:shuffled.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
