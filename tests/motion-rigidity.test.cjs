const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx=vm.createContext({});vm.runInContext(fs.readFileSync('dist/visual-guide.js','utf8'),ctx);
const ids=vm.runInContext('Object.keys(visualGuides)',ctx);let links=0;
for(const id of ids){
 ctx.audit=[];const svg=vm.runInContext(`motionFigure('${id}',audit)`,ctx);
 assert(!/NaN|undefined|Infinity/.test(svg),id+' invalid geometry');
 assert(!/<ellipse\b/.test(svg),id+' weight plates removed');
 assert(!/type="scale"/.test(svg),id+' animated body scaling');
 if(!['27','28'].includes(id))assert(!/attributeName="d"/.test(svg),id+' deforming outlines');
 for(const entry of ctx.audit){
  assert.equal(entry.distances.length,129,id+' sample count');
  for(const d of entry.distances){
   assert(Number.isFinite(d),id+' finite geometry');
   if(entry.kind==='rigid')assert(Math.abs(d-entry.length)<.05,`${id}: rigid link changed length ${d} vs ${entry.length}`);
   else assert(d<=entry.max+.001&&d>=entry.min-.001,id+' unreachable handle');
  }
  links++;
 }
 for(const tag of svg.match(/<animate(?:Transform)?\b[^>]*\/>/g)||[]){
  assert(tag.includes('dur="4s"'),id+' timing');
  const values=tag.match(/values="([^"]+)"/)[1].split(';');
  assert.equal(values[0],values.at(-1),id+' loop seam');
 }
 if(id==='01')assert(ctx.audit.some(x=>x.kind==='rigid'&&x.length>92&&x.length<93),'T-bar fixed pivot radius');
}
console.log(`${ids.length} motions: ${links} sampled linkage/reach checks; rigid outlines and seamless loops passed.`);
