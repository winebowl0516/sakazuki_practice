// 小三原創練習題。每個小節 50 題，答案與詳解均已提供。
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
      const angle=(n%13+1)*10, acute=(n%8+1)*10, wide=(Math.floor((n-1)/5)+2)*5, t=n%5;
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
  const explain=(unitId,n,prompt,answer)=>{
    const t=n%5, v=(prompt.match(/\d+(?:\.\d+)?/g)||[]).map(Number), a=v[0], b=v[1], c=v[2], d=v[3];
    const fmt=x=>Number.isInteger(x)?String(x):x.toFixed(1);
    switch(unitId){
      case "e3-l1":
        if(t===0)return `${a}＝${Math.floor(a/1000)} 個千＋${Math.floor(a/100)%10} 個百＋${Math.floor(a/10)%10} 個十＋${a%10} 個一，所以有 ${answer} 個千。`;
        if(t===1)return `從右邊起，個位、十位、百位依序是第 1、2、3 位。${a} 的百位數字是 ${answer}。`;
        if(t===2)return `${a} 個千是 ${a*1000}，${b} 個百是 ${b*100}，${c} 個十是 ${c*10}，再加 ${d} 個一：${a*1000}＋${b*100}＋${c*10}＋${d}＝${answer}。`;
        if(t===3)return `先比較千位，再比較百位。${a} 和 ${b} 相比，${answer} 較大，所以答案是 ${answer}。`;
        return `個位是 ${a%10}，加上 ${10-a%10} 就會湊成下一個整十：${a}＋${10-a%10}＝${answer}。`;
      case "e3-l2":
        if(t===0)return `用乘法計算：${a}×${b}＝${answer}。`;
        if(t===1)return `除法可用乘法驗算：${b}×${answer}＝${a}，所以 ${a}÷${b}＝${answer}。`;
        if(t===2)return `每盒 ${a} 顆，共 ${b} 盒，將每盒的數量相加就是相同數量連加：${a}×${b}＝${answer} 顆。`;
        if(t===3)return `先算買來的總數 ${a}×${b}＝${a*b} 顆，再送出 ${c} 顆：${a*b}−${c}＝${answer} 顆。`;
        return `先算乘積：${a}×${b}＝${a*b}。估算到最接近的十位時，看個位數 ${a*b%10}；${a*b%10>=5?"進一個十": "保留原來的十位"}，約為 ${answer}。`;
      case "e3-l3":
        if(t===0)return `用乘法找商：${b}×${answer}＝${a}，因此 ${a}÷${b} 的商是 ${answer}。`;
        if(t===1)return `除法關係是「被除數＝除數×商＋餘數」。${a}＝${b}×${Math.floor(a/b)}＋${answer}，所以餘數是 ${answer}。`;
        if(t===2)return `每袋裝 ${b} 個，計算 ${a}÷${b}＝${Math.floor(a/b)} 餘 ${a%b}。只能算裝滿的袋數，因此可以裝滿 ${answer} 袋。`;
        if(t===3)return `平均分配時先算 ${a}÷${b}＝${answer} 餘 ${a%b}。題目問每人分到幾顆，所以取商 ${answer} 顆。`;
        return `每箱放 ${b} 本，${a}÷${b}＝${Math.floor(a/b)} 餘 ${answer}。商表示放滿的箱數，餘數 ${answer} 就是剩下的書本數。`;
      case "e3-l4":
        if(t===0){const q=Math.floor(a/b),r=a%b;return `先算 ${a}÷${b}＝${q}${r?` 餘 ${r}`:""}。${r?"還有小朋友坐不下，須再加一輛車；":"剛好坐滿。"}因此需要 ${answer} 輛車。`;}
        if(t===1)return `平均分配用除法：${a}÷${b}＝${answer} 餘 ${a%b}。每人最多分到商 ${answer} 顆。`;
        if(t===2)return `每人分 ${b} 張，用貼紙總數除以每人份數：${a}÷${b}＝${answer} 餘 ${a%b}，最多可分給 ${answer} 人。`;
        if(t===3)return `每盒裝 ${b} 顆，${a}÷${b}＝${Math.floor(a/b)} 餘 ${answer}。餘數表示裝滿後剩下的雞蛋數。`;
        {const q=Math.floor(a/b),r=a%b;return `先算 ${a}÷${b}＝${q}${r?` 餘 ${r}`:""}。${r?"剩下的杯子也要用一盤放，":""}所以至少需要 ${answer} 盤。`;}
      case "e3-l5":
        if(t===0)return `全披薩平均分成 ${a} 片，分母記錄總份數；吃了 ${b} 片，分子記錄取了幾份。因此吃了 ${b}/${a}。`;
        if(t===1)return `分數線上方的數是分子。${a}/${b} 的分子是 ${answer}。`;
        if(t===2)return `分母表示把一個全體平均分成幾份。${a}/${b} 的分母是 ${b}，表示平均分成 ${answer} 份。`;
        if(t===3)return `兩塊蛋糕都平均分成 ${a} 份，份數相同時只要比較拿了幾份：小美拿 ${b} 份，小安拿 ${c} 份。${answer==="一樣多"?"兩人拿的份數相同。":`${answer}拿的份數較多。`}答案是${answer}。`;
        return `全長平均分成 ${a} 段，其中一段是 ${1}/${a}，也就是全長的 ${answer}。`;
      case "e3-l6":
        if(t===0)return `同分母分數相加時分母不變，只把分子相加：${a}/${b}＋${c}/${d}＝${a+c}/${b}。`;
        if(t===1)return `分母相同，分子相減、分母保留：${a}/${b}−${c}/${d}＝${a-c}/${b}。`;
        if(t===2)return `分母相同，分子相減、分母保留：${a}/${b}−${c}/${d}＝${a-c}/${b}。`;
        if(t===3)return `讀完的兩部分都是全書的幾分之幾，分母相同，所以分子相加、分母不變：${a}/${b}＋${c}/${d}＝${a+c}/${b}。`;
        return `剩下的水量＝原有水量−用掉的水量。分母相同時分子相減：${a}/${b}−${c}/${d}＝${a-c}/${b}。`;
      case "e3-l7":
        if(t===0)return `把十分位對齊後相加：${fmt(a)}＋${fmt(b)}＝${fmt(answer)}。`;
        if(t===1)return `把十分位對齊後相減：${fmt(a)}−${fmt(b)}＝${fmt(answer)}。`;
        if(t===2)return `每個 0.1 是一個十分之一。${fmt(a)} 有 ${answer} 個 0.1，因為 ${answer} 個十分之一合起來是 ${fmt(a)}。`;
        if(t===3)return `兩段緞帶合長要相加：${fmt(a)}＋${fmt(b)}＝${fmt(answer)} 公尺。`;
        return `相差就是用較大的數減較小的數：${fmt(Math.max(a,b))}−${fmt(Math.min(a,b))}＝${fmt(answer)}。`;
      case "e3-l8":
        if(t===0)return `1 公尺＝100 公分，所以 ${a} 公尺＝${a}×100＝${answer} 公分。`;
        if(t===1)return `1 公分＝10 毫米，所以 ${a} 公分＝${a}×10＝${answer} 毫米。`;
        if(t===2)return `先把公尺換成公分：${a} 公尺＝${a*100} 公分，再加上 ${b} 公分：${a*100}＋${b}＝${answer} 公分。`;
        if(t===3)return `先把第一段換成公分：${a} 公尺 ${b} 公分＝${a*100+b} 公分，再加第二段 ${c} 公分：${a*100+b}＋${c}＝${answer} 公分。`;
        return `1 公里＝1000 公尺。用公尺數除以 1000：${a}÷1000＝${answer} 公里。`;
      case "e3-l9":
        if(t===0)return `直角的角度固定是 90°，所以答案是 90°。`;
        if(t===1)return a===90?`${a}°等於直角的 90°，所以是直角。`:`${a}°${a<90?"小於":"大於"}90°，因此是${a<90?"銳":"鈍"}角。`;
        if(t===2)return `直角是 90°，少 ${a}° 就用減法：90°−${a}°＝${answer}°。`;
        if(t===3)return `直角是 90°，題目說這個角比直角多 ${a}°，所以用加法：90°＋${a}°＝${answer}°。${answer}°大於 90°且小於 180°，符合鈍角的範圍。`;
        return `求兩個角相差幾度，用較大的 90°減去 ${a}°：90°−${a}°＝${answer}°。`;
      case "e3-l10":
        if(t===0)return `長方形周長是兩條長加兩條寬：(${a}＋${b})×2＝${answer} 公分。`;
        if(t===1)return `長方形面積＝長×寬：${a}×${b}＝${answer} 平方公分。`;
        if(t===2)return `長方形周長的一半是長加寬：${b}÷2＝${b/2} 公分；再用長加寬減去長，${b/2}−${a}＝${answer} 公分。`;
        if(t===3)return `正方形四邊一樣長，周長＝邊長×4：${a}×4＝${answer} 公分。`;
        return `先算花圃總面積：${a}×${b}＝${a*b} 平方公尺；扣掉種花的 ${c} 平方公尺：${a*b}−${c}＝${answer} 平方公尺。`;
      default:return "";
    }
  };
  window.elementary3QuestionBank=lessons.flatMap((unit,u)=>Array.from({length:50},(_,i)=>{
    const n=i+1, [prompt,answer,customOptions]=unit.q(n);
    const options=customOptions||(typeof answer==="string"&&/^\d+\/\d+$/.test(answer)?fractionChoices(answer):numericChoices(answer));
    const shift=(i+u)%4, shuffled=options.slice(shift).concat(options.slice(0,shift));
    const explanation=explain(unit.id,n,prompt,answer);
    return {id:`e3-${String(u+1).padStart(2,"0")}-${String(n).padStart(3,"0")}`,stage:"elementary",grade:3,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty:challengeTemplates[unit.id]?.includes(n%5)?"challenge":"basic",prompt,options:shuffled,answer:shuffled.indexOf(answer),explanation,explanationStatus:explanation?"complete":"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:explanation?"solution-checked":"answer-only"};
  }));
})();
