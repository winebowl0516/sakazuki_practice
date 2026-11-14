// 小三原創練習題。每個小節 50 題，答案已提供，詳解留待後續補充。
(() => {
  const lessons = [
    {id:"e3-l1",title:"位值與數的大小",topic:"number",q:n=>{
      const value=(n*19193)%9000+1000, comparison=value+Math.min(100,10000-value), thousands=Math.floor(value/1000), hundreds=Math.floor(value/100)%10, tens=Math.floor(value/10)%10, ones=value%10, t=n%5;
      return t===0?[`${value} 裡有幾個千？`,thousands]:
        t===1?[`${value} 的百位數字是多少？`,hundreds]:
        t===2?[`${thousands} 個千、${hundreds} 個百、${tens} 個十和 ${ones} 個一合起來是多少？`,value]:
        t===3?[`比較 ${value} 和 ${comparison}，較大的數是多少？`,comparison]:
        [`${value} 再加 ${10-ones}，會變成多少？`,value+(10-ones)];
    }},
    {id:"e3-l2",title:"整數乘除與估算",topic:"number",q:n=>{
      const a=n%79+21, b=n%8+2, divisor=n%8+2, quotient=n%50+10, product=divisor*quotient, t=n%5;
      return t===0?[`計算：${a}×${b}＝？`,a*b]:
        t===1?[`計算：${product}÷${divisor}＝？`,quotient]:
        t===2?[`每盒彩球有 ${b} 顆，${a%7+2} 盒共有幾顆？`,b*(a%7+2)]:
        t===3?[`每袋有 ${b} 顆橘子，買 ${a%7+2} 袋後送出 ${b} 顆，還剩幾顆？`,b*(a%7+1)]:
        [`把 ${a}×${b} 的積估算到最接近的十位數，約是多少？`,Math.round(a*b/10)*10];
    }},
    {id:"e3-l3",title:"除法直式與餘數",topic:"number",q:n=>{
      const divisor=n%8+2, quotient=n%25+5, remainder=n%divisor, dividend=divisor*quotient+remainder, t=n%5;
      return t===0?[`計算：${dividend}÷${divisor}，商是多少？`,quotient]:
        t===1?[`計算：${dividend}÷${divisor}，餘數是多少？`,remainder]:
        t===2?[`${dividend} 個積木每 ${divisor} 個裝一袋，可以裝滿幾袋？`,quotient]:
        t===3?[`${dividend} 顆糖平均分給 ${divisor} 人，每人分到幾顆，還剩幾顆？請回答每人分到幾顆。`,quotient]:
        [`${dividend} 本書每 ${divisor} 本放一箱，放滿後還剩幾本？`,remainder];
    }},
    {id:"e3-l4",title:"除法情境題",topic:"number",q:n=>{
      const group=n%7+3, each=n%8+2, total=group*each+n%(each), rem=total%each, t=n%5;
      return t===0?[`${total} 位小朋友每車坐 ${each} 人，需要幾輛車才能全部坐下？`,Math.ceil(total/each)]:
        t===1?[`${total} 顆彈珠平分給 ${group} 人，每人最多分到幾顆？`,Math.floor(total/group)]:
        t===2?[`${total} 張貼紙每人分 ${each} 張，最多可分給幾人？`,Math.floor(total/each)]:
        t===3?[`有 ${total} 顆雞蛋，每盒裝 ${each} 顆，裝滿後還剩幾顆？`,rem]:
        [`${total} 個杯子，每 ${each} 個放一盤，至少需要幾盤？`,Math.ceil(total/each)];
    }},
    {id:"e3-l5",title:"分數的意義",topic:"fraction",q:n=>{
      const denominator=n%9+2, numerator=n%(denominator-1)+1, other=(n*3)%(denominator-1)+1, t=n%5;
      return t===0?[`一個披薩平均分成 ${denominator} 片，吃了 ${numerator} 片，吃了全個披薩的幾分之幾？`,`${numerator}/${denominator}`]:
        t===1?[`分數 ${numerator}/${denominator} 的分子是多少？`,numerator]:
        t===2?[`分數 ${numerator}/${denominator} 的分母表示全體被平均分成幾份？`,denominator]:
        t===3?[`同樣大小的蛋糕平均分成 ${denominator} 份，小美拿 ${numerator} 份，小安拿 ${other} 份。誰拿得比較多？`,numerator===other?"一樣多":numerator>other?"小美":"小安",["小美","小安","一樣多","無法比較"]]:
        [`一條緞帶平均剪成 ${denominator} 段，其中一段是全長的幾分之幾？`,`1/${denominator}`];
    }},
    {id:"e3-l6",title:"同分母分數加減",topic:"fraction",q:n=>{
      const d=n%8+3, a=n%(d-1)+1, b=(n*3)%(d-a)+1, t=n%5;
      return t===0?[`計算：${a}/${d}＋${b}/${d}＝？`,`${a+b}/${d}`]:
        t===1?[`計算：${a+b}/${d}−${a}/${d}＝？`,`${b}/${d}`]:
        t===2?[`計算：${a+b}/${d}−${b}/${d}＝？`,`${a}/${d}`]:
        t===3?[`小明讀完一本書的 ${a}/${d}，又讀了 ${b}/${d}，一共讀了全書的幾分之幾？`,`${a+b}/${d}`]:
        [`水桶原有 ${a+b}/${d} 桶水，用掉 ${b}/${d} 桶，還剩全桶的幾分之幾？`,`${a}/${d}`];
    }},
    {id:"e3-l7",title:"一位小數",topic:"fraction",q:n=>{
      const a=n%45+10, b=n%35+10, t=n%5, toDecimal=x=>(x/10).toFixed(1);
      return t===0?[`計算：${toDecimal(a)}＋${toDecimal(b)}＝？`,Number(toDecimal(a+b))]:
        t===1?[`計算：${toDecimal(a+b)}−${toDecimal(b)}＝？`,Number(toDecimal(a))]:
        t===2?[`${toDecimal(a)} 裡有幾個 0.1？`,a]:
        t===3?[`小玲有 ${toDecimal(a)} 公尺緞帶，又買了 ${toDecimal(b)} 公尺，一共有幾公尺？`,Number(toDecimal(a+b))]:
        [`${toDecimal(a)} 和 ${toDecimal(b)} 相差多少？`,Number(toDecimal(Math.abs(a-b)))];
    }},
    {id:"e3-l8",title:"長度單位換算",topic:"measure",q:n=>{
      const m=n%8+1, cm=n%90+10, t=n%5;
      return t===0?[`${m} 公尺等於幾公分？`,m*100]:
        t===1?[`${cm} 公分等於幾毫米？`,cm*10]:
        t===2?[`${m} 公尺 ${cm} 公分合起來是幾公分？`,m*100+cm]:
        t===3?[`一段路長 ${m} 公尺 ${cm} 公分，另一段長 ${cm} 公分，兩段合起來是幾公分？`,m*100+2*cm]:
        [`${m*1000} 公尺等於幾公里？`,m];
    }},
    {id:"e3-l9",title:"角的認識",topic:"geometry",q:n=>{
      const angle=(n%13+1)*10, acute=(n%8+1)*10, wide=(n%5+10)*10, t=n%5;
      return t===0?[`一個直角是幾度？`,90]:
        t===1?[`${angle}° 是銳角、直角還是鈍角？`,angle===90?"直角":angle<90?"銳角":"鈍角",["銳角","直角","鈍角","平角"]]:
        t===2?[`一個銳角比直角少 ${acute}°，這個銳角是幾度？`,90-acute]:
        t===3?[`一個鈍角比直角多 ${wide}°，這個鈍角是幾度？`,90+wide]:
        [`${acute}° 和 90° 相差幾度？`,90-acute];
    }},
    {id:"e3-l10",title:"周長與面積",topic:"geometry",q:n=>{
      const l=n%12+4, w=n%8+2, t=n%5;
      return t===0?[`長 ${l} 公分、寬 ${w} 公分的長方形，周長是多少公分？`,2*(l+w)]:
        t===1?[`長 ${l} 公分、寬 ${w} 公分的長方形，面積是多少平方公分？`,l*w]:
        t===2?[`長方形長 ${l} 公分、周長 ${2*(l+w)} 公分，寬是多少公分？`,w]:
        t===3?[`邊長 ${l} 公分的正方形，周長是多少公分？`,4*l]:
        (()=>{const pond=n%w+1; return [`花圃長 ${l} 公尺、寬 ${w} 公尺，其中有 ${pond} 平方公尺種花，其餘面積是多少平方公尺？`,l*w-pond]})();
    }},
  ];
  const gcd=(a,b)=>b===0?Math.abs(a):gcd(b,a%b);
  const numericChoices=value=>{
    const choices=[value], steps=Number.isInteger(value)?[1,-1,2,-2,10,-10,100,-100,3,-3]:[0.1,-0.1,0.2,-0.2,1,-1,2,-2];
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
  const challengeTemplates={"e3-l1":[3],"e3-l2":[3],"e3-l3":[4],"e3-l4":[4],"e3-l5":[4],"e3-l6":[3],"e3-l7":[3],"e3-l8":[3],"e3-l9":[3],"e3-l10":[4]};
  window.elementary3QuestionBank=lessons.flatMap((unit,u)=>Array.from({length:50},(_,i)=>{
    const n=i+1, [prompt,answer,customOptions]=unit.q(n);
    const options=customOptions||(typeof answer==="string"&&/^\d+\/\d+$/.test(answer)?fractionChoices(answer):numericChoices(answer));
    const shift=(i+u)%4, shuffled=options.slice(shift).concat(options.slice(0,shift));
    return {id:`e3-${String(u+1).padStart(2,"0")}-${String(n).padStart(3,"0")}`,stage:"elementary",grade:3,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty:challengeTemplates[unit.id]?.includes(n%5)?"challenge":"basic",prompt,options:shuffled,answer:shuffled.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
