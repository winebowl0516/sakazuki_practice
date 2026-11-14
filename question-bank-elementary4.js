// 小四原創練習題。每個小節 50 題，答案已提供，詳解留待後續補充。
(() => {
  const lessons = [
    {id:"e4-l1",title:"大數的位值",topic:"number",q:n=>{
      const value=(n*2385167)%900000000+10000000, places=[[1000,"千位"],[10000,"萬位"],[100000,"十萬位"],[1000000,"百萬位"],[10000000,"千萬位"],[100000000,"億位"]], [place,name]=places[n%places.length], digit=Math.floor(value/place)%10, t=n%5;
      return t===0?[`${value} 的${name}數字是多少？`,digit]:
        t===1?[`${value} 的${name}數字所代表的數值是多少？`,digit*place]:
        t===2?[`${value} 裡有幾個一萬？`,Math.floor(value/10000)]:
        t===3?[`${value} 再加多少，就會到下一個整萬？`,10000-value%10000]:
        [`比較 ${value} 和 ${value+100000}，哪個數比較大？`,value+100000];
    }},
    {id:"e4-l2",title:"概數與估算",topic:"number",q:n=>{
      const value=(n*1739)%90000+10000, a=(n*137)%80000+10000, b=(n*97)%40000+10000, t=n%5;
      return t===0?[`把 ${value} 四捨五入到十位，約是多少？`,Math.round(value/10)*10]:
        t===1?[`把 ${value} 四捨五入到百位，約是多少？`,Math.round(value/100)*100]:
        t===2?[`把 ${value} 四捨五入到千位，約是多少？`,Math.round(value/1000)*1000]:
        t===3?[`估算 ${a}＋${b}：先把兩數各自四捨五入到千位，再相加，約是多少？`,Math.round(a/1000)*1000+Math.round(b/1000)*1000]:
        [`把 ${value} 四捨五入到萬位，約是多少？`,Math.round(value/10000)*10000];
    }},
    {id:"e4-l3",title:"乘除與四則運算",topic:"number",q:n=>{
      const a=n%50+10, b=n%8+2, c=n%9+2, t=n%5;
      return t===0?[`計算：${a}×${b}＝？`,a*b]:
        t===1?[`計算：${a*b}÷${b}＝？`,a]:
        t===2?[`計算：${a}＋${b}×${c}＝？`,a+b*c]:
        t===3?[`計算：(${a}＋${b})×${c}＝？`,(a+b)*c]:
        [`計算：${a}×${b}＋${c}＝？`,a*b+c];
    }},
    {id:"e4-l4",title:"運算順序與應用",topic:"number",q:n=>{
      const a=n%40+20, b=n%8+2, c=n%7+3, t=n%5;
      return t===0?[`計算：${a}＋${b}×${c}＝？`,a+b*c]:
        t===1?[`計算：(${a}＋${b})×${c}＝？`,(a+b)*c]:
        t===2?[`每箱有 ${b} 盒彩筆，每盒 ${c} 枝，老師買了 ${a%5+2} 箱，共有幾枝？`,b*c*(a%5+2)]:
        t===3?[`計算：${a}×${b}−${c}＝？`,a*b-c]:
        [`計算：${a*b}÷${b}＋${c}＝？`,a+c];
    }},
    {id:"e4-l5",title:"因數、倍數與公因數",topic:"number",q:n=>{
      const a=n%19+12, b=n%17+8, multiple=(n%8+2)*a, t=n%5;
      return t===0?[`${a} 有幾個正因數？`,Array.from({length:a},(_,i)=>i+1).filter(x=>a%x===0).length]:
        t===1?[`${a} 和 ${b} 的最大公因數是多少？`,gcd(a,b)]:
        t===2?[`大於 ${b} 的最小 ${a} 倍數是多少？`,Math.ceil((b+1)/a)*a]:
        t===3?[`${multiple} 是 ${a} 的幾倍？`,multiple/a]:
        [`${a} 的最大正因數是多少？`,a];
    }},
    {id:"e4-l6",title:"公倍數與生活應用",topic:"number",q:n=>{
      const a=n%8+2, b=n%9+2, common=lcm(a,b), t=n%5;
      return t===0?[`${a} 和 ${b} 的最小公倍數是多少？`,common]:
        t===1?[`大於 100 的最小 ${common} 倍數是多少？`,Math.ceil(101/common)*common]:
        t===2?[`兩盞燈分別每 ${a} 分鐘和每 ${b} 分鐘閃一次，剛好同時閃後，至少幾分鐘會再次同時閃？`,common]:
        t===3?[`列出 ${a} 和 ${b} 的倍數，最小的共同倍數是多少？`,common]:
        [`${a} 和 ${b} 的前幾個共同倍數中，最小的一個是多少？`,common];
    }},
    {id:"e4-l7",title:"等值分數與分數加減",topic:"fraction",q:n=>{
      const d=n%8+3, a=n%(d-1)+1, b=(n*3)%(d-a)+1, m=n%3+2, t=n%5;
      return t===0?[`在等式 ${a}/${d}＝□/${d*m} 中，□應填多少？`,a*m]:
        t===1?[`在等式 ${a}/${d}＝${a*m}/□ 中，□應填多少？`,d*m]:
        t===2?[`計算：${a}/${d}＋${b}/${d}＝？`,`${a+b}/${d}`]:
        t===3?[`計算：${a+b}/${d}−${a}/${d}＝？`,`${b}/${d}`]:
        [`小明吃了披薩的 ${a}/${d}，小華吃了 ${b}/${d}，兩人合起來吃了全個披薩的幾分之幾？`,`${a+b}/${d}`];
    }},
    {id:"e4-l8",title:"小數加減與乘法",topic:"fraction",q:n=>{
      const a=n%80+10, b=n%65+10, k=n%8+2, t=n%5, dec=x=>(x/10).toFixed(1);
      return t===0?[`計算：${dec(a)}＋${dec(b)}＝？`,Number(dec(a+b))]:
        t===1?[`計算：${dec(a+b)}−${dec(b)}＝？`,Number(dec(a))]:
        t===2?[`計算：${dec(a)}×${k}＝？`,Number(dec(a*k))]:
        t===3?(()=>{const cut=Math.min(a+b-1,n%30+10); return [`一條彩帶長 ${dec(a)} 公尺，另一條長 ${dec(b)} 公尺，兩條接起來後剪掉 ${dec(cut)} 公尺，剩下幾公尺？`,Number(dec(a+b-cut))]})():
        [`計算：${dec(b)}×10＝？`,Number(dec(b*10))];
    }},
    {id:"e4-l9",title:"角度測量",topic:"geometry",q:n=>{
      const angle=(n%8+2)*10, acute=(n%8+1)*10, t=n%5;
      return t===0?[`平角是幾度？`,180]:
        t===1?[`兩個角的和是 180°，大角比小角多 ${angle}°，小角是多少度？`,(180-angle)/2]:
        t===2?[`一個直角分成 ${acute}° 和另一個角，另一個角是多少度？`,90-acute]:
        t===3?[`${angle}° 比直角大或小多少度？`,Math.abs(angle-90)]:
        [`兩個相鄰角合成平角，其中一角是 ${acute}°，另一角是多少度？`,180-acute];
    }},
    {id:"e4-l10",title:"周長與面積",topic:"geometry",q:n=>{
      const l=n%16+5, w=n%10+3, t=n%5;
      return t===0?[`長 ${l} 公分、寬 ${w} 公分的長方形，周長是多少公分？`,2*(l+w)]:
        t===1?[`長 ${l} 公分、寬 ${w} 公分的長方形，面積是多少平方公分？`,l*w]:
        t===2?[`正方形面積是 ${l*l} 平方公分，邊長是多少公分？`,l]:
        t===3?[`長 ${l} 公分的長方形面積是 ${l*w} 平方公分，寬是多少公分？`,w]:
        (()=>{const limit=Math.min(l,w)-1, cut=n%limit+1; return [`長 ${l} 公尺、寬 ${w} 公尺的菜園，挖去一塊邊長 ${cut} 公尺的正方形後，剩下面積是多少平方公尺？`,l*w-cut*cut]})();
    }},
  ];
  const gcd=(a,b)=>b===0?Math.abs(a):gcd(b,a%b);
  const lcm=(a,b)=>a/gcd(a,b)*b;
  const numericChoices=value=>{
    const choices=[value], steps=Number.isInteger(value)?[1,-1,10,-10,2,-2,100,-100,3,-3]:[0.1,-0.1,0.2,-0.2,1,-1,2,-2];
    for(const step of steps){const candidate=Number((value+step).toFixed(2));if(candidate>=0&&!choices.includes(candidate))choices.push(candidate);if(choices.length===4)break;}
    while(choices.length<4)choices.push(Number((value+choices.length+3).toFixed(2)));
    return choices;
  };
  const fractionChoices=value=>{
    const [num,den]=String(value).split("/").map(Number), choices=[value];
    for(const [p,q] of [[num+1,den],[num-1,den],[num,den+1],[num,den-1],[num+2,den+1],[num+1,den+2]]){
      if(q<=0||p<0||p*den===num*q)continue;
      const candidate=`${p}/${q}`;
      if(!choices.includes(candidate)&&!choices.some(x=>{const [a,b]=String(x).split("/").map(Number);return a*q===p*b;}))choices.push(candidate);
      if(choices.length===4)break;
    }
    return choices;
  };
  const challengeTemplates={"e4-l1":[4],"e4-l2":[3],"e4-l3":[4],"e4-l4":[2],"e4-l5":[1],"e4-l6":[2],"e4-l7":[4],"e4-l8":[3],"e4-l9":[1],"e4-l10":[4]};
  window.elementary4QuestionBank=lessons.flatMap((unit,u)=>Array.from({length:50},(_,i)=>{
    const n=i+1, [prompt,answer,customOptions]=unit.q(n);
    const options=customOptions||(typeof answer==="string"&&/^\d+\/\d+$/.test(answer)?fractionChoices(answer):numericChoices(answer));
    const shift=(i+u)%4, shuffled=options.slice(shift).concat(options.slice(0,shift));
    return {id:`e4-${String(u+1).padStart(2,"0")}-${String(n).padStart(3,"0")}`,stage:"elementary",grade:4,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty:challengeTemplates[unit.id]?.includes(n%5)?"challenge":"basic",prompt,options:shuffled,answer:shuffled.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
