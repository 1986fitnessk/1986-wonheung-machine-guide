// Equipment restyling must not change the user's approved motion axes/timing.
const fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const baseline=require('./fixtures/motion-axes.json');
const ctx=vm.createContext({});vm.runInContext(fs.readFileSync('dist/visual-guide.js','utf8'),ctx);
for(const [id,expected] of Object.entries(baseline)){
 const svg=vm.runInContext(`motionFigure('${id}')`,ctx);
 assert(!/NaN|undefined|Infinity/.test(svg),`${id}: invalid geometry`);
 const actual=crypto.createHash('sha256').update(JSON.stringify(svg.match(/<animate(?:Transform)?\b[^>]*\/>/g))).digest('hex');
 assert.equal(actual,expected,`${id}: approved motion changed`);
 assert.match(svg,/<g class="machine-hardware"[^>]*><(?:path|rect)/,`${id}: missing equipment silhouette`);
}
console.log(`${Object.keys(baseline).length} motion axes/timings preserved; equipment silhouettes present.`);
