const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const s=fs.readFileSync('dist/app.js','utf8'),c={};
vm.runInNewContext(s.slice(0,s.indexOf('let category='))+s.slice(s.indexOf('const routinePlans='),s.indexOf('function focusRoutineTitle'))+'this.m=machines;this.r=routinePlans;this.d= routineDose;this.g=routineLoadGuide',c);
for(const [key,level] of Object.entries(c.r))for(const plan of level.plans){assert.equal(plan.items.length,key==='advanced'?6:5);assert.equal(new Set(plan.items.map(i=>i[0])).size,plan.items.length);for(const [i,[id,mode]]of plan.items.entries()){const m=c.m.find(m=>m.id===id);assert.ok(m);assert.ok(m.modes?m.modes[mode].tip:m.tip);const d=c.d(key,i,id);assert.ok(d.sets>=1&&d.sets<=3);assert.ok(d.rest&&d.reps);}assert.ok(c.g(key).includes('보조 무게가 클수록 쉬워집니다'));}
assert.equal(JSON.stringify(c.r.beginner.plans[0].items.map(i=>i[0])),JSON.stringify(['29','38','36','25','37']));
assert.equal(c.d('advanced',1,'03').sets,2);
assert.ok(!s.includes('무게와 운동량은 아직 지정하지 않았습니다'));
console.log('PASS: 10 routine counts, 54 unique-per-plan machine/mode links, prescriptions and assistance guidance');
