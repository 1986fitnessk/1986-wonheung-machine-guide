const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const s=fs.readFileSync('dist/app.js','utf8');
const ctx=vm.createContext({});
vm.runInContext(s.slice(0,s.indexOf('let category='))+s.match(/const normalize=.*?;/)[0]+`
let category='전체'; const search={value:''},list={items:[],replaceChildren(){this.items=[]},append(b){this.items.push(b)}};
const document={querySelector(){return {}},createElement(){return {setAttribute(){}}}};let opened;function showMachine(m,i){opened=m.modes?.[i].id||m.id;}
`+s.slice(s.indexOf('function render()'),s.indexOf('let disposeMotion='))+`
globalThis.choose=(q,c)=>{search.value=q;category=c;render();list.items.find(b=>b.innerHTML.includes('어시스트')).onclick();return opened};`,ctx);
for(const [q,c,want] of [['','가슴','08-dip'],['','등','08-pull'],['','전체','08-pull'],['assisted dip','등','08-dip'],['풀업','가슴','08-pull']])assert.equal(ctx.choose(q,c),want);
let click,change;const attrs={};const button={setAttribute(k,v){attrs[k]=v},addEventListener(t,f){click=f}};const media={matches:true,addEventListener(t,f){change=f}};
vm.runInNewContext(s.slice(s.indexOf('const mascot =')),{document:{querySelector(){return button}},window:{matchMedia(){return media}}});
assert.equal(button.disabled,true);assert.equal(attrs['aria-pressed'],'true');assert.match(attrs['aria-label'],/정지된/);
media.matches=false;change();assert.equal(button.disabled,false);assert.equal(attrs['aria-pressed'],'false');
click();assert.equal(attrs['aria-pressed'],'true');assert.match(button.title,/재생/);
media.matches=true;change();assert.equal(button.disabled,true);media.matches=false;change();assert.equal(attrs['aria-pressed'],'true');click();assert.equal(attrs['aria-pressed'],'false');
console.log('PASS: 5 category/query mode cases; reduced-motion startup, preference changes, pause/resume and title state');
