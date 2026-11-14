// 小二原創練習題。每個小節 50 題，答案已提供，詳解留待後續補充。
(() => {
  const lessons = [
    { id:"e2-l1", title:"三位數的位值", topic:"number", q:n=>{
      const value=(n*37)%890+100, hundreds=Math.floor(value/100), tens=Math.floor(value/10)%10, ones=value%10, t=n%5;
      return t===0?[`${value} 裡有幾個百？`,hundreds]:
        t===1?[`${value} 的十位數字是多少？`,tens]:
        t===2?[`${value} 的個位數字是多少？`,ones]:
        t===3?[`${hundreds} 個百、${tens} 個十和 ${ones} 個一合起來是多少？`,value]:
        [`${value} 再加 ${10-ones}，會變成多少？`,value+(10-ones)];
    }},
    { id:"e2-l2", title:"加減直式與估算", topic:"number", q:n=>{
      const a=(n*23)%700+100, b=n%89+10, small=n%90+10, t=n%5;
      return t===0?[`計算：${a}＋${b}＝？`,a+b]:
        t===1?[`計算：${a+b}−${b}＝？`,a]:
        t===2?[`圖書館原有 ${a} 本書，又收到 ${b} 本，後來借出 ${n%9+1} 本，現在有幾本？`,a+b-(n%9+1)]:
        t===3?[`公園有 ${a} 棵樹，移走 ${b} 棵，還剩幾棵？`,a-b]:
        [`把 ${small} 四捨五入到十位，約是多少？`,Math.round(small/10)*10];
    }},
    { id:"e2-l3", title:"乘法表與乘法問題", topic:"number", q:n=>{
      const a=n%8+2, b=(n*3)%8+2, t=n%5;
      return t===0?[`計算：${a}×${b}＝？`,a*b]:
        t===1?[`${a} 盒餅乾，每盒有 ${b} 片，共有幾片？`,a*b]:
        t===2?[`${b}＋${b}＋${b}＋${b} 可以寫成哪一個乘法算式的答案？`,b*4]:
        t===3?[`每排有 ${a} 張椅子，排成 ${b} 排，共有幾張椅子？`,a*b]:
        [`${a} 個 ${b} 合起來是多少？`,a*b];
    }},
    { id:"e2-l4", title:"乘法的應用", topic:"number", q:n=>{
      const groups=n%7+2, each=(n*3)%8+2, extra=n%6+1, t=n%5;
      return t===0?[`每盒彩筆有 ${each} 枝，買 ${groups} 盒共有幾枝？`,each*groups]:
        t===1?[`${groups} 張桌子各坐 ${each} 人，最多可坐幾人？`,groups*each]:
        t===2?[`每袋有 ${each} 顆橘子，${groups} 袋再加上 ${extra} 顆，共有幾顆？`,each*groups+extra]:
        t===3?[`一星期有 7 天，${groups} 星期共有幾天？`,groups*7]:
        [`每排種 ${each} 棵樹，種了 ${groups} 排，總共種幾棵？`,each*groups];
    }},
    { id:"e2-l5", title:"公尺與公分", topic:"measure", q:n=>{
      const m=n%8+1, cm=(n*13)%100, a=n%80+10, b=n%70+10, t=n%5;
      return t===0?[`${m} 公尺等於幾公分？`,m*100]:
        t===1?[`${m} 公尺 ${cm} 公分合起來是幾公分？`,m*100+cm]:
        t===2?[`繩子長 ${a} 公分，再接上 ${b} 公分，總長幾公分？`,a+b]:
        t===3?[`一條緞帶長 ${m*100+cm} 公分，剪掉 ${cm} 公分，還剩幾公分？`,m*100]:
        [`${m*100} 公分等於幾公尺？`,m];
    }},
    { id:"e2-l6", title:"容量與重量", topic:"measure", q:n=>{
      const amount=n%8+1, part=n%9+1, t=n%5;
      return t===0?[`${amount} 公升等於幾毫升？`,amount*1000]:
        t===1?[`${amount} 公斤等於幾公克？`,amount*1000]:
        t===2?[`水壺有 ${amount*1000} 毫升，倒出 ${part*100} 毫升後又加入 ${(n%4+1)*100} 毫升，現在有幾毫升？`,amount*1000-part*100+(n%4+1)*100]:
        t===3?[`一袋米重 ${amount} 公斤，另一袋重 ${part} 公斤，合起來重幾公斤？`,amount+part]:
        [`${amount} 公升和 ${part*100} 毫升合起來是幾毫升？`,amount*1000+part*100];
    }},
    { id:"e2-l7", title:"平分與包含除", topic:"number", q:n=>{
      const divisor=n%8+2, quotient=n%9+2, total=divisor*quotient, t=n%5;
      return t===0?[`把 ${total} 顆糖平均分給 ${divisor} 人，每人分到幾顆？`,quotient]:
        t===1?[`${total} 枝鉛筆，每 ${divisor} 枝裝一盒，可以裝幾盒？`,quotient]:
        t===2?[`${total} 個積木平分成 ${divisor} 堆，每堆有幾個？`,quotient]:
        t===3?[`計算：${total}÷${divisor}＝？`,quotient]:
        [`有 ${total} 張卡片，每人分 ${divisor} 張，可以分給幾人？`,quotient];
    }},
    { id:"e2-l8", title:"單位分數", topic:"fraction", q:n=>{
      const d=n%9+2, d2=(n*3)%8+2, t=n%5;
      if(t===0) return [`把一個蛋糕平均分成 ${d} 份，每一份是全蛋糕的幾分之幾？`,`1/${d}`,[`1/${d-1}`,`1/${d}`,`1/${d+1}`,`${d}/1`]];
      if(t===1) return [`把一張紙平均分成 ${d} 份，其中一份可以記作什麼分數？`,`1/${d}`,[`1/${d+1}`,`${d}/1`,`1/${d}`,`1/${d-1}`]];
      if(t===2) return [`${d} 個「${d} 分之 1」合起來是幾個完整的全體？`,1,[0,2,3,1]];
      if(t===3) return [`比較單位分數 1/${d} 和 1/${d+1}，哪一個比較大？`,`1/${d}`,[`1/${d+1}`,`1/${d}`,`1/${d+2}`,`1/${d-1}`]];
      return [`把一個圓平均分成 ${d2} 份，取其中 1 份，取了幾分之幾？`,`1/${d2}`,[`1/${d2-1}`,`${d2}/1`,`1/${d2}`,`1/${d2+1}`]];
    }},
  ];
  const numericChoices=value=>{
    const choices=[value];
    for(const step of [1,-1,2,-2,10,-10,100,-100,3,-3]){
      const candidate=value+step;
      if(candidate>=0&&!choices.includes(candidate)) choices.push(candidate);
      if(choices.length===4) break;
    }
    while(choices.length<4) choices.push(value+choices.length+3);
    return choices;
  };
  const challengeTemplates={"e2-l2":[2],"e2-l4":[2],"e2-l5":[3],"e2-l6":[2],"e2-l8":[3]};
  window.elementary2QuestionBank=lessons.flatMap((unit,u)=>Array.from({length:50},(_,i)=>{
    const n=i+1, [prompt,answer,customOptions]=unit.q(n);
    const options=customOptions||numericChoices(answer);
    const shift=(i+u)%4, shuffled=options.slice(shift).concat(options.slice(0,shift));
    const difficulty=challengeTemplates[unit.id]?.includes(n%5)?"challenge":"basic";
    return {id:`e2-${String(u+1).padStart(2,"0")}-${String(n).padStart(3,"0")}`,stage:"elementary",grade:2,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty,prompt,options:shuffled,answer:shuffled.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
