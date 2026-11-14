// 小一原創練習題。每個小節 50 題，答案已提供，詳解留待後續補充。
(() => {
  const lessons = [
    { id:"e1-l1", title:"數量、唱數與數序", topic:"number", q:n=>{
      const a=(n-1)%9+1, b=Math.min(10-a,(n*3)%9+1), t=n%5;
      return t===0?[`桌上有 ${a} 顆積木，又放上 ${b} 顆，現在有幾顆？`,a+b]:
        t===1?[`從 0 開始往上數，${b} 後面的數是多少？`,b+1]:
        t===2?[`從 0 開始往上數，${a} 前面的數是多少？`,Math.max(0,a-1)]:
        t===3?[`盒子裡有 ${a} 顆球，拿走 ${Math.min(a,b)} 顆，還有幾顆？`,a-Math.min(a,b)]:
        [`哪個數比 ${b} 多 1？`,b+1];
    }},
    { id:"e1-l2", title:"數的合成與分解", topic:"number", q:n=>{
      const total=n%9+2, part=n%(total+1), other=total-part, t=n%5;
      return t===0?[`${part} 和 ${other} 合起來是多少？`,total]:
        t===1?[`10 可以分成 ${n%8+1} 和多少？`,10-(n%8+1)]:
      t===2?[`盒子裡有 10 顆糖，先拿走 ${part} 顆，再拿走 ${other} 顆，還剩幾顆？`,10-part-other]:
        t===3?(()=>{const whole=n%8+2, first=n%(whole+1); return [`${whole} 可以分成 ${first} 和多少？`,whole-first]})():
        [`${part} 再加多少會變成 ${total}？`,other];
    }},
    { id:"e1-l3", title:"加法的意義", topic:"number", q:n=>{
      const a=n%10+1, b=(n*3)% (20-a+1), t=n%5;
      return t===0?[`計算：${a}＋${b}＝？`,a+b]:
        t===1?[`小華有 ${a} 張貼紙，又得到 ${b} 張，現在有幾張？`,a+b]:
        t===2?[`數線上從 ${a} 向右跳 ${b} 格，會到哪個數？`,a+b]:
      t===3?(()=>{const c=n%4+1, safeB=Math.min(b,20-a-c); return [`紅氣球有 ${a} 個、藍氣球有 ${safeB} 個、黃氣球有 ${c} 個，一共有幾個？`,a+safeB+c]})():
        [`${a} 加上多少等於 ${a+b}？`,b];
    }},
    { id:"e1-l4", title:"減法的意義", topic:"number", q:n=>{
      const a=n%10+5, b=n%a+1, t=n%5;
      return t===0?[`計算：${a}−${b}＝？`,a-b]:
        t===1?[`原有 ${a} 顆糖，吃掉 ${b} 顆，還剩幾顆？`,a-b]:
        t===2?[`${a} 比 ${b} 多多少？`,a-b]:
      t===3?(()=>{const start=n%10+10, first=n%5+1, second=n%4+1; return [`籃子裡有 ${start} 顆蘋果，先拿走 ${first} 顆，再拿走 ${second} 顆，還剩幾顆？`,start-first-second]})():
        [`${a} 減去多少等於 ${a-b}？`,b];
    }},
    { id:"e1-l5", title:"十進位位值", topic:"number", q:n=>{
      const value=(n*7)%40+10, tens=Math.floor(value/10), ones=value%10, t=n%5;
      return t===0?[`${value} 裡有幾個十？`,tens]:
        t===1?[`${value} 的個位數字是多少？`,ones]:
        t===2?[`${tens} 個十和 ${ones} 個一合起來是多少？`,value]:
        t===3?[`${value} 再加 ${10-ones}，會變成多少？`,value+(10-ones)]:
        [`${value} 比 ${Math.floor(value/10)*10} 多多少？`,ones];
    }},
    { id:"e1-l6", title:"數的大小比較", topic:"number", q:n=>{
      const a=(n*13)%49+1, gap=n%9+1, b=Math.min(50,a+gap), t=n%5;
      return t===0?[`比較 ${a} 和 ${b}，較大的數是多少？`,Math.max(a,b)]:
        t===1?[`比較 ${a} 和 ${b}，較小的數是多少？`,Math.min(a,b)]:
        t===2?[`${a} 和 ${b} 相差多少？`,Math.abs(a-b)]:
        t===3?[`比較 ${a} 和 ${b} 到 50 的距離，哪個數比較接近 50？`,(50-a)<(50-b)?a:b]:
        [`${a} 和 ${b} 中，哪個數在數線上比較靠右？`,Math.max(a,b)];
    }},
    { id:"e1-l7", title:"平面與立體形體", topic:"geometry", q:n=>{
      const bank=[
        [`四條邊一樣長、四個角都是直角的圖形是什麼？`,`正方形`,[`長方形`,`三角形`,`正方形`,`圓形`]],
        [`四個角都是直角、兩組對邊一樣長的圖形是什麼？`,`長方形`,[`正方形`,`長方形`,`三角形`,`圓形`]],
        [`哪一種平面圖形有三條直邊和三個角？`,`三角形`,[`正方形`,`長方形`,`三角形`,`圓形`]],
        [`哪一種平面圖形沒有直邊和角？`,`圓形`,[`三角形`,`圓形`,`正方形`,`長方形`]],
        [`哪一種立體形體的每個面都是正方形？`,`正方體`,[`長方體`,`圓柱體`,`正方體`,`球體`]],
        [`像球一樣可以向各方向滾動的立體形體是什麼？`,`球體`,[`正方體`,`長方體`,`圓柱體`,`球體`]],
        [`有兩個圓形底面，像罐子一樣的立體形體是什麼？`,`圓柱體`,[`圓錐體`,`圓柱體`,`球體`,`正方體`]],
        [`有一個圓形底面和尖尖頂端的立體形體是什麼？`,`圓錐體`,[`圓柱體`,`正方體`,`圓錐體`,`球體`]],
        [`像鞋盒一樣有長方形面的立體形體是什麼？`,`長方體`,[`圓柱體`,`球體`,`長方體`,`圓錐體`]],
        [`圓柱體的兩個底面是什麼形狀？`,`圓形`,[`正方形`,`三角形`,`長方形`,`圓形`]],
      ];
      const [prompt,answer,options]=bank[(n-1)%bank.length];
      return [prompt,answer,options];
    }},
    { id:"e1-l8", title:"長度與時間", topic:"measure", q:n=>{
      const a=n%9+1, b=n%5+1, t=n%5;
      return t===0?[`一支鉛筆長 ${a} 公分，另一支長 ${b} 公分，兩支接起來長幾公分？`,a+b]:
        t===1?[`繩子長 ${a+5} 公分，剪掉 ${b} 公分，還剩幾公分？`,a+5-b]:
        t===2?[`現在是 ${a} 時，再過 1 小時是幾時？`,a%12+1]:
        t===3?(()=>{const first=a+5, second=b+3, cut=Math.min(a,b); return [`一條緞帶長 ${first} 公分，接上 ${second} 公分後，再剪掉 ${cut} 公分，現在長幾公分？`,first+second-cut]})():
        [`尺上從 0 公分到 ${a+b} 公分，這段長幾公分？`,a+b];
    }},
  ];
  const numericChoices=value=>{
    const choices=[value];
    for(const step of [1,-1,2,-2,10,-10,100,-100,3,-3]){
      const candidate=value+step;
      if(candidate>=0&&candidate<=50&&!choices.includes(candidate)) choices.push(candidate);
      if(choices.length===4) break;
    }
    while(choices.length<4) choices.push(value+choices.length+3);
    return choices;
  };
  const challengeTemplates={"e1-l2":[2],"e1-l3":[3],"e1-l4":[3],"e1-l6":[3],"e1-l8":[3]};
  window.elementary1QuestionBank=lessons.flatMap((unit,u)=>Array.from({length:50},(_,i)=>{
    const n=i+1, [prompt,answer,customOptions]=unit.q(n);
    const options=customOptions||numericChoices(answer);
    const shift=(i+u)%4, shuffled=options.slice(shift).concat(options.slice(0,shift));
    const difficulty=challengeTemplates[unit.id]?.includes(n%5)?"challenge":"basic";
    return {id:`e1-${String(u+1).padStart(2,"0")}-${String(n).padStart(3,"0")}`,stage:"elementary",grade:1,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty,prompt,options:shuffled,answer:shuffled.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
