// 小六原創練習題。每個小節 50 題，答案已提供，詳解留待後續補充。
(() => {
  const gcd=(a,b)=>b===0?Math.abs(a):gcd(b,a%b);
  const lcm=(a,b)=>a/gcd(a,b)*b;
  const fraction=(n,d)=>{const g=gcd(n,d);n/=g;d/=g;return d===1?n:`${n}/${d}`};
  const primeFactors=n=>{const out=[];for(let p=2;p*p<=n;p++)while(n%p===0){out.push(p);n/=p;}if(n>1)out.push(n);return out};
  const decimal=x=>Number((x/10).toFixed(1));
  const ratio=(a,b)=>{const g=gcd(a,b);return `${a/g}：${b/g}`};
  const ratioOptions=(a,b)=>{const choices=[ratio(a,b)];for(let step=1;choices.length<4&&step<=10;step++){for(const candidate of [ratio(a+step,b),ratio(a,b+step)])if(!choices.includes(candidate))choices.push(candidate);}return choices.slice(0,4)};
  const lessons=[
    {id:"e6-l1",title:"質因數分解",topic:"number",q:n=>{
      const primes=[2,3,5,7,11],i=(n-1)%primes.length,j=(i+1)%primes.length,p=Math.min(primes[i],primes[j]),q=Math.max(primes[i],primes[j]),value=p*p*q,factors=primeFactors(value),t=n%5;
      return t===0?[`將 ${value} 寫成質因數相乘的形式。`,factors.join("×"),[factors.join("×"),`${p}×${q}`,`${value}×1`,primeFactors(value+1).join("×")]]:
        t===1?[`${value} 的質因數分解中，一共有幾個質因數（重複的也計算）？`,factors.length]:
        t===2?[`${value} 的最小質因數是多少？`,factors[0]]:
        t===3?[`${value} 的質因數分解中，有幾種不同的質因數？`,new Set(factors).size]:
        [`${value} 的最大質因數是多少？`,factors[factors.length-1]];
    }},
    {id:"e6-l2",title:"公因數與公倍數",topic:"number",q:n=>{
      const a=n%32+12,b=n%27+10,common=gcd(a,b),multiple=lcm(a,b),t=n%5;
      return t===0?[`${a} 和 ${b} 的最大公因數是多少？`,common]:
        t===1?[`${a} 和 ${b} 的最小公倍數是多少？`,multiple]:
        t===2?[`兩輛公車分別每 ${a} 分鐘和每 ${b} 分鐘發車，剛好同時發車後，至少幾分鐘會再次同時發車？`,multiple]:
        t===3?[`${a*common} 和 ${b*common} 的最大公因數是多少？`,common*common]:
        [`大於 200 的最小 ${multiple} 倍數是多少？`,Math.ceil(201/multiple)*multiple];
    }},
    {id:"e6-l3",title:"分數四則混合計算",topic:"fraction",q:n=>{
      const d1=n%7+2,d2=n%6+3,a=n%(d1-1)+1,b=(n*3)%(d2-1)+1,k=n%4+2,t=n%5;
      let x=a,y=d1,z=b,w=d2;
      if(a*d2<b*d1){x=b;y=d2;z=a;w=d1;}
      return t===0?[`計算：${a}/${d1}＋${b}/${d2}＝？`,fraction(a*d2+b*d1,d1*d2)]:
        t===1?[`計算：${x}/${y}−${z}/${w}＝？`,fraction(x*w-z*y,y*w)]:
        t===2?[`計算：${a}/${d1}×${b}/${d2}＝？`,fraction(a*b,d1*d2)]:
        t===3?[`計算：${a}/${d1}÷${b}/${d2}＝？`,fraction(a*d2,d1*b)]:
        [`計算：${a}/${d1}＋${b}/${d2}×${k}＝？`,fraction(a*d2+b*k*d1,d1*d2)];
    }},
    {id:"e6-l4",title:"小數四則應用",topic:"fraction",q:n=>{
      const a=n%72+18,b=n%55+10,k=n%7+2,divisor=n%6+2,dividend=divisor*(n%8+2),t=n%5;
      return t===0?[`計算：${decimal(a)}＋${decimal(b)}＝？`,Number(((a+b)/10).toFixed(1))]:
        t===1?[`計算：${decimal(a+b)}−${decimal(b)}＝？`,decimal(a)]:
        t===2?[`計算：${decimal(a)}×${decimal(b)}＝？`,Number((a*b/100).toFixed(2))]:
        t===3?[`計算：${decimal(dividend)}÷${divisor}＝？`,decimal(dividend/divisor)]:
        [`每公斤米 ${decimal(a)} 元，買 ${k} 公斤並付 100 元，應找回多少元？`,100-decimal(a)*k];
    }},
    {id:"e6-l5",title:"比、比值與相等的比",topic:"ratio",q:n=>{
      const a=n%7+2,b=n%6+2,k=n%5+2,total=(a+b)*k,t=n%5;
      return t===0?[`把比 ${a*k}：${b*k} 化成最簡整數比。`,ratio(a*k,b*k),ratioOptions(a,b)]:
        t===1?[`比 ${a}：${b} 的比值是多少？`,fraction(a,b)]:
        t===2?[`在 ${a}：${b}＝□：${b*k} 中，□是多少？`,a*k]:
        t===3?[`紅球和白球的比是 ${a}：${b}，共有 ${total} 顆，紅球有幾顆？`,a*k]:
        [`一幅圖上 ${a} 公分代表實際 ${a*k} 公尺，圖上 ${a*3} 公分代表實際幾公尺？`,3*a*k];
    }},
    {id:"e6-l6",title:"正比與生活應用",topic:"ratio",q:n=>{
      const unit=n%8+3,k=n%7+2,scale=n%5+2,total=n%9+3,t=n%5;
      return t===0?[`${unit} 本筆記本共 ${unit*35} 元，買 ${unit*k} 本要付多少元？`,unit*k*35]:
        t===1?[`做 ${unit} 人份點心要用 ${unit*scale} 杯麵粉，做 ${unit*k} 人份要用幾杯？`,unit*k*scale]:
        t===2?[`汽車每小時行駛 ${unit*10} 公里，照這個速度行駛 ${k} 小時，共走幾公里？`,unit*10*k]:
        t===3?[`地圖上 1 公分代表實際 ${scale} 公里，地圖上量得 ${total} 公分，實際距離是多少公里？`,scale*total]:
        [`每 ${unit} 個盒子需要 ${scale} 張貼紙，${unit*k} 個盒子需要幾張貼紙？`,scale*k];
    }},
    {id:"e6-l7",title:"速率、距離與時間",topic:"measure",q:n=>{
      const speed=n%8+4,time=n%6+2,distance=speed*time,t=n%5;
      return t===0?[`腳踏車每小時行 ${speed*5} 公里，騎 ${time} 小時共行幾公里？`,distance*5]:
        t===1?[`汽車 ${distance*10} 公里行駛 ${time} 小時，平均每小時行幾公里？`,speed*10]:
        t===2?[`步行每小時走 ${speed} 公里，走 ${distance} 公里需要幾小時？`,time]:
        t===3?[`每分鐘游 ${speed*10} 公尺，游 ${time*5} 分鐘共游幾公尺？`,speed*10*time*5]:
        [`火車以每小時 ${speed*10} 公里的速度行駛 ${time} 小時，距離是多少公里？`,speed*10*time];
    }},
    {id:"e6-l8",title:"百分率、折扣與利率",topic:"ratio",q:n=>{
      const principal=(n%8+2)*1000,rate=(n%6+2)*5,years=n%4+1,t=n%5;
      return t===0?[`${principal} 元的 ${rate}% 是多少元？`,principal*rate/100]:
        t===1?[`原價 ${principal} 元的商品打 ${100-rate}% 折，折價後是多少元？`,principal*(100-rate)/100]:
        t===2?[`原價 ${principal} 元的商品打 ${100-rate}% 折，少付多少元？`,principal*rate/100]:
        t===3?[`存入 ${principal} 元，年利率 ${rate}%，存 ${years} 年，單利利息是多少元？`,principal*rate/100*years]:
        [`存入 ${principal} 元，年利率 ${rate}%，存 ${years} 年，連本金和單利利息共可領回多少元？`,principal*(1+rate/100*years)];
    }},
    {id:"e6-l9",title:"圓周長與圓面積",topic:"geometry",q:n=>{
      const r=n%8+2,d=2*r,pi=3.14,t=n%5;
      return t===0?[`半徑 ${r} 公分的圓，圓周長約是多少公分？（圓周率取 3.14）`,Number((2*pi*r).toFixed(2))]:
        t===1?[`半徑 ${r} 公分的圓，面積約是多少平方公分？（圓周率取 3.14）`,Number((pi*r*r).toFixed(2))]:
        t===2?[`直徑 ${d} 公分的圓，半徑是多少公分？`,r]:
        t===3?[`直徑 ${d} 公分的圓，圓周長約是多少公分？（圓周率取 3.14）`,Number((pi*d).toFixed(2))]:
        [`半徑 ${r} 公分的半圓，面積約是多少平方公分？（圓周率取 3.14）`,Number((pi*r*r/2).toFixed(2))];
    }},
    {id:"e6-l10",title:"柱體體積",topic:"geometry",q:n=>{
      const r=n%6+2,h=n%8+3,pi=3.14,t=n%5;
      return t===0?[`圓柱底面半徑 ${r} 公分、高 ${h} 公分，體積約是多少立方公分？（圓周率取 3.14）`,Number((pi*r*r*h).toFixed(2))]:
        t===1?[`圓柱底面積是 ${Number((pi*r*r).toFixed(2))} 平方公分、高 ${h} 公分，體積約是多少立方公分？`,Number((pi*r*r*h).toFixed(2))]:
        t===2?[`圓柱底面直徑 ${2*r} 公分、高 ${h} 公分，體積約是多少立方公分？（圓周率取 3.14）`,Number((pi*r*r*h).toFixed(2))]:
        t===3?[`圓柱底面半徑 ${r} 公分、高度增加到原來的 2 倍後，體積約是多少立方公分？（圓周率取 3.14）`,Number((pi*r*r*h*2).toFixed(2))]:
        [`圓柱形水桶底面半徑 ${r} 公分、高 ${h} 公分，裝滿水約有多少立方公分？（圓周率取 3.14）`,Number((pi*r*r*h).toFixed(2))];
    }},
    {id:"e6-l11",title:"長條圖與折線圖",topic:"statistics",q:n=>{
      const base=n%10+6,rotated=[base,base+2,base+4,base+6],offset=n%4,values=rotated.slice(offset).concat(rotated.slice(0,offset)),[a,b,c,d]=values,days=n%4+3,t=n%5;
      return t===0?[`某班四天回收的寶特瓶數依序為 ${a}、${b}、${c}、${d} 個，四天共回收幾個？`,a+b+c+d]:
        t===1?[`某店四天銷售量為 ${a}、${b}、${c}、${d} 件，哪一天的銷售量最多？`,`第${values.indexOf(Math.max(...values))+1}天`,["第1天","第2天","第3天","第4天"]]:
        t===2?[`某地星期一和星期四的氣溫分別是 ${a}°C 和 ${d}°C，相差幾度？`,Math.abs(a-d)]:
        t===3?(()=>{const start=n%5+1; return [`某班連續 ${days} 天每天讀書 ${start}、${start+2}、${start+4}、${start+6}、${start+8} 小時（依序取前 ${days} 天），共讀書幾小時？`,days*start+days*(days-1)]})():
        [`某農場四天採收 ${a}、${b}、${c}、${d} 公斤蔬菜，平均每天採收幾公斤？`,(a+b+c+d)/4];
    }},
    {id:"e6-l12",title:"圓形圖與資料判讀",topic:"probability",q:n=>{
      const rate=(n%8+1)*10,total=(n%8+2)*100,values=[n%7+8,n%6+10,n%5+12],t=n%5;
      return t===0?[`圓形圖中一類資料占 ${rate}% ，對應的圓心角是多少度？`,rate*3.6]:
        t===1?[`全體有 ${total} 人，某一類占 ${rate}% ，這一類有幾人？`,total*rate/100]:
        t===2?[`圓形圖的一部分圓心角是 ${rate*3.6}°，占全體的百分之幾？`,rate]:
        t===3?[`三筆資料是 ${values.join("、")}，平均數是多少？`,(values[0]+values[1]+values[2])/3]:
        [`調查 ${total} 人，其中 ${total*rate/100} 人選 A，選 A 的人占百分之幾？`,rate];
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
  const challengeTemplates={"e6-l1":[0],"e6-l2":[2],"e6-l3":[4],"e6-l4":[4],"e6-l5":[4],"e6-l6":[3],"e6-l7":[4],"e6-l8":[3],"e6-l9":[4],"e6-l10":[3],"e6-l11":[3],"e6-l12":[0]};
  window.elementary6QuestionBank=lessons.flatMap((unit,u)=>Array.from({length:50},(_,i)=>{
    const n=i+1,[prompt,answer,customOptions]=unit.q(n),options=customOptions||(typeof answer==="string"&&/^\d+\/\d+$/.test(answer)?fractionChoices(answer):numberChoices(answer));
    const shift=(i+u)%4,shuffled=options.slice(shift).concat(options.slice(0,shift));
    return {id:`e6-${String(u+1).padStart(2,"0")}-${String(n).padStart(3,"0")}`,stage:"elementary",grade:6,courses:[],topic:unit.topic,lessonIds:[unit.id],unitTitle:unit.title,difficulty:challengeTemplates[unit.id]?.includes(n%5)?"challenge":"basic",prompt,options:shuffled,answer:shuffled.indexOf(answer),explanation:"",explanationStatus:"pending",provenance:"original",curriculumReference:"國教院 108 課綱數學領域",answerCheck:"answer-only"};
  }));
})();
