const fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync(process.argv[2] || 'dist/app.js','utf8');
const data=source.slice(0,source.indexOf("let category="));
const normalize=source.match(/const normalize=.*?;/)[0];
const render=source.slice(source.indexOf('function render()'),source.indexOf('let disposeMotion='));
const context=vm.createContext({});
vm.runInContext(`${data}\n${normalize}\nlet category='전체'; const search={value:''}; const list={items:[],replaceChildren(){this.items=[]},append(b){this.items.push(b)}}; const status={},empty={}; const document={querySelector(s){return s==='#count'?status:empty},createElement(){return {setAttribute(){}}}}; ${render}\nglobalThis.records=machines;globalThis.run=(query,cat)=>{search.value=query;category=cat;render();return {ids:list.items.map(b=>b.innerHTML.match(/machine-number">(.*?)</)[1]),empty:empty.hidden===false,count:status.textContent}};`,context);
const cases=[];
for(const m of context.records) cases.push({group:'displayed English',q:m.en,cat:'전체',expected:[m.id]});
for(const [q,expected] of [['티바로우',['01','07']],['펙덱',['02']],['바이킹프레스',['03']],['복근',['04']],['삼두',['05']],['이두',['06']],['리니어로우',['07']],['턱걸이',['08']]]) cases.push({group:'Korean aliases',q,cat:'전체',expected});
for(const [q,cat,expected] of [['  vIkInG   pReSs  ','전체',['03']],['linear','전체',['07']],['tbar row','등',['01']],['티바로우','가슴',[]],['턱걸이','가슴',['08']],['','전체',['01','02','03','04','05','06','07','08','09','10','11','12']],['','등',['01','07','08','11']],['존재하지않는기구','전체',[]],['<img src=x onerror=alert(1)>','전체',[]]]) cases.push({group:'combined and edge',q,cat,expected});
for(const [q,cat,expected] of [['와이드체스트','가슴',['09']],['슈퍼인클라인','어깨',['10']],['풀오버','등',['11']],['디클라인','가슴',['12']],['','가슴',['02','08','09','10','12']],['','어깨',['03','10']]])cases.push({group:'new Hammer machines',q,cat,expected});
let failures=0;const groups={};
for(const c of cases){const result=context.run(c.q,c.cat);const pass=JSON.stringify(result.ids)===JSON.stringify(c.expected)&&result.empty===(c.expected.length===0);groups[c.group]??={passed:0,total:0};groups[c.group].total++;if(pass)groups[c.group].passed++;else{failures++;console.log(JSON.stringify({FAIL:c.q,category:c.cat,expected:c.expected,actual:result.ids}));}}
console.log(JSON.stringify({total:cases.length,passed:cases.length-failures,failed:failures,groups}));
process.exitCode=failures?1:0;
