/* Original schematic artwork. Movement references are linked in each machine guide. */
const visualGuides={
 '07':{primary:['lats','midback'],secondary:['biceps','rearshoulder'],main:'광배근 · 중부 승모근 · 능형근',assist:'상완이두근 · 후면 삼각근',cue:'가슴은 패드에 · 몸통은 고정',action:'레일을 따라 당기기 → 천천히 펴기'},
 '01':{primary:['lats','midback'],secondary:['biceps','rearshoulder'],main:'광배근 · 중부 승모근 · 능형근',assist:'상완이두근 · 후면 삼각근',cue:'가슴은 패드에 · 팔꿈치는 뒤로',action:'당기기 → 천천히 펴기'},
 '02':{primary:['chest'],secondary:['shoulder'],main:'대흉근',assist:'전면 삼각근',cue:'팔꿈치 각도를 유지하며 가슴 앞으로',action:'모으기 → 천천히 벌리기'},
 '03':{primary:['shoulder'],secondary:['triceps'],main:'전면·측면 삼각근',assist:'상완삼두근',cue:'복부를 고정하고 손잡이를 위로',action:'밀어 올리기 → 천천히 내리기'},
 '04':{primary:['abs'],secondary:[],main:'복직근',assist:'복부 근육으로 몸통 안정',cue:'명치와 골반 사이를 좁히듯',action:'몸통 말기 → 천천히 돌아오기'},
 '05':{primary:['triceps'],secondary:[],main:'상완삼두근',assist:'위팔을 패드에 고정',cue:'팔꿈치 위치를 유지하며 펴기',action:'펴기 → 천천히 굽히기'},
 '06':{primary:['biceps'],secondary:[],main:'상완이두근',assist:'위팔을 패드에 고정',cue:'몸통은 그대로 · 팔꿈치만 굽히기',action:'굽히기 → 천천히 펴기'}
};
function muscleFigure(view,v){
 const color=k=>v.primary.includes(k)?'#de876e':v.secondary.includes(k)?'#d8c7a6':'#3b4543';
 const muscle=(key,d)=>`<path d="${d}" fill="${color(key)}" stroke="#202a28" stroke-width=".85" stroke-linejoin="round"/>`;
 const line=(d,opacity=.65)=>`<path d="${d}" fill="none" stroke="#84918a" stroke-width=".7" stroke-linecap="round" opacity="${opacity}"/>`;
 const neutral=d=>muscle('',d);
 const head='<path d="M49 19 C49 11 53 7 60 7 C67 7 71 11 71 19 L70 26 Q67 34 60 35 Q53 34 50 26 Z"/><path d="M49 20 Q46 18 47 24 L50 27 M71 20 Q74 18 73 24 L70 27"/>';
 const outline='M53 34 L53 40 C48 42 42 42 37 45 C29 48 28 56 28 64 L24 86 L20 103 L17 112 L17 120 Q18 123 20 121 L23 115 L22 123 Q25 126 27 121 L30 109 L34 96 L40 76 L44 85 L46 99 L43 112 Q41 120 42 130 L42 151 L45 172 L45 182 L41 190 Q41 194 47 194 L54 192 L55 180 L58 158 L60 136 L62 158 L65 180 L66 192 L73 194 Q79 194 79 190 L75 182 L75 172 L78 151 L78 130 Q79 120 77 112 L74 99 L76 85 L80 76 L86 96 L90 109 L93 121 Q95 126 98 123 L97 115 L100 121 Q102 123 103 120 L103 112 L100 103 L96 86 L92 64 C92 56 91 48 83 45 C78 42 72 42 67 40 L67 34';
 let body=head+`<path d="${outline}"/>`,muscles='',details='';
 if(view==='front'){
  muscles=muscle('shoulder','M39 45 C31 46 28 52 29 62 L33 68 Q37 64 41 60 L45 49 Z')
   +muscle('shoulder','M81 45 C89 46 92 52 91 62 L87 68 Q83 64 79 60 L75 49 Z')
   +muscle('chest','M45 48 Q51 46 59 51 L59 68 Q50 73 40 64 L40 58 Z')
   +muscle('chest','M75 48 Q69 46 61 51 L61 68 Q70 73 80 64 L80 58 Z')
   +muscle('biceps','M31 68 Q35 65 39 67 L36 81 Q34 90 29 91 L27 87 Z')
   +muscle('biceps','M89 68 Q85 65 81 67 L84 81 Q86 90 91 91 L93 87 Z')
   +neutral('M28 93 Q32 92 34 88 L29 105 L24 116 L22 114 Z')
   +neutral('M92 93 Q88 92 86 88 L91 105 L96 116 L98 114 Z')
   +neutral('M41 69 L47 74 L49 96 L44 91 Z M79 69 L73 74 L71 96 L76 91 Z')
   +neutral('M46 96 L50 102 L58 112 L48 108 Z M74 96 L70 102 L62 112 L72 108 Z');
  const abs=[['M51 73 Q54 71 59 72 L59 80 L51 80 Z','M61 72 Q66 71 69 73 L69 80 L61 80 Z'],['M51 82 L59 82 L59 90 L51 90 Z','M61 82 L69 82 L69 90 L61 90 Z'],['M51 92 L59 92 L59 100 Q54 102 51 98 Z','M61 92 L69 92 L69 98 Q66 102 61 100 Z'],['M53 102 L59 103 L59 113 L55 109 Z','M61 103 L67 102 L65 109 L61 113 Z']];
  muscles+=abs.flat().map(d=>muscle('abs',d)).join('')
   +neutral('M45 115 Q49 113 55 119 L55 134 Q53 145 49 151 Q44 143 44 132 Z')
   +neutral('M75 115 Q71 113 65 119 L65 134 Q67 145 71 151 Q76 143 76 132 Z')
   +neutral('M57 120 L59 128 L56 149 L53 155 L51 150 Z M63 120 L61 128 L64 149 L67 155 L69 150 Z')
   +neutral('M46 159 Q50 156 54 159 L52 172 L49 182 L47 181 Z M74 159 Q70 156 66 159 L68 172 L71 182 L73 181 Z');
  details=line('M54 36 L57 44 L60 47 L63 44 L66 36 M44 46 L54 46 M66 46 L76 46 M60 51 V69 M46 155 Q50 153 54 155 M66 155 Q70 153 74 155 M47 184 L52 184 M68 184 L73 184')
   +line('M54 19 H57 M63 19 H66 M60 20 L58 25 H61 M56 29 Q60 31 64 29',.45);
 }else if(view==='back'){
  muscles=muscle('midback','M54 38 L58 43 L58 61 L50 58 L41 48 L49 43 Z')
   +muscle('midback','M66 38 L62 43 L62 61 L70 58 L79 48 L71 43 Z')
   +muscle('midback','M49 60 L58 64 L59 82 L51 74 L46 65 Z M71 60 L62 64 L61 82 L69 74 L74 65 Z')
   +muscle('rearshoulder','M38 46 Q29 47 29 59 L31 66 L40 61 L45 51 Z')
   +muscle('rearshoulder','M82 46 Q91 47 91 59 L89 66 L80 61 L75 51 Z')
   +muscle('lats','M41 65 L48 68 L57 82 L57 102 Q49 100 45 92 L42 80 Z')
   +muscle('lats','M79 65 L72 68 L63 82 L63 102 Q71 100 75 92 L78 80 Z')
   +muscle('triceps','M31 68 Q35 65 39 66 L36 83 L32 92 L27 88 Z')
   +muscle('triceps','M89 68 Q85 65 81 66 L84 83 L88 92 L93 88 Z')
   +neutral('M28 94 L33 91 L29 105 L24 116 L22 113 Z M92 94 L87 91 L91 105 L96 116 L98 113 Z')
   +neutral('M55 84 L59 88 L58 109 L49 111 L46 104 Z M65 84 L61 88 L62 109 L71 111 L74 104 Z')
   +neutral('M47 112 Q54 109 59 114 L59 126 Q49 131 43 123 Z M73 112 Q66 109 61 114 L61 126 Q71 131 77 123 Z')
   +neutral('M44 130 Q48 132 55 130 L55 143 L51 155 L47 151 Z M76 130 Q72 132 65 130 L65 143 L69 155 L73 151 Z')
   +neutral('M46 159 Q49 154 53 159 L54 166 L50 179 L47 174 Z M74 159 Q71 154 67 159 L66 166 L70 179 L73 174 Z');
  details=line('M60 39 V112 M46 54 Q43 62 48 68 M74 54 Q77 62 72 68 M59 115 V125 M49 180 L49 187 M71 180 L71 187 M46 156 H53 M67 156 H74')
   +line('M51 27 Q60 30 69 27 M54 32 L54 37 M66 32 L66 37',.4);
 }else{
  // One continuous, rounded scalp and a separate ear: no hair or cap shape.
  body='<path d="M49 21 C48 13 53 7 61 7 C69 7 73 13 72 21 L71 24 L76 29 Q76 31 71 31 L70 35 Q67 39 62 37 L61 43 Q70 46 73 54 Q77 65 72 79 L68 94 L69 106 Q76 117 72 133 L67 153 L65 178 L66 185 L77 190 Q80 194 74 195 L58 194 Q54 194 55 188 L54 173 L52 154 L47 137 Q40 122 44 109 L46 97 L43 78 Q39 63 44 52 L52 43 L54 35 Q49 31 49 21 Z"/><path d="M54 51 Q64 47 68 57 Q72 68 66 82 L63 93 L67 106 L74 117 L74 123 Q71 126 69 122 L67 118 L67 123 L63 121 L58 107 L55 97 L54 82 Q48 71 50 60 Z"/>';
  muscles=muscle('chest','M66 49 Q76 55 73 68 L68 73 L65 61 Z')
   +muscle('abs','M70 75 L73 73 L70 89 L67 102 L63 104 L66 89 Z')
   +muscle('lats','M44 65 L51 68 L55 89 L53 100 L46 94 Z')
   +muscle('shoulder','M53 51 C60 46 67 50 68 58 Q70 64 65 70 L54 68 Q48 62 53 51 Z')
   +muscle('biceps','M63 71 L68 68 Q68 81 62 92 L59 93 L60 83 Z')
   +muscle('triceps','M53 70 L59 72 L58 82 L57 94 L54 90 L52 80 Z')
   +neutral('M58 98 L62 95 L66 109 L70 117 L67 118 L62 110 Z')
   +neutral('M47 107 Q53 102 63 107 L66 118 Q56 127 45 121 Z')
   +neutral('M64 125 L70 122 L67 140 L62 154 L56 153 L55 143 Z')
   +neutral('M45 126 L51 129 L55 146 L54 154 L50 145 Z')
   +neutral('M56 160 Q62 156 64 161 L63 171 L59 182 L57 181 Z');
  details=line('M59 22 Q55 20 55 25 Q55 29 59 27 M68 22 H70 M64 34 L69 34 M54 36 L59 43 M48 50 L52 48 M54 155 Q59 158 64 155 M58 185 L64 185')
   +line('M69 80 L72 80 M68 87 L70 88 M66 94 L68 95 M61 114 Q54 119 49 117',.5);
 }
 const label={front:'정면',side:'측면',back:'후면'}[view];
 return `<svg viewBox="0 0 120 214" role="img" aria-label="${label} 사용 근육"><g fill="#2c3532" stroke="#8b9790" stroke-width=".95" stroke-linejoin="round">${body}</g>${muscles}${details}<text x="60" y="211" text-anchor="middle" fill="#b9c0b8" font-size="10">${label}</text></svg>`;
}

function motionFigure(id){
 const palette={skin:'#c8cbbf',shade:'#a3ac9e',edge:'#6f7d70',muscle:'#de876e',assist:'#d8c7a6',metal:'#53625a',pad:'#34413a',shorts:'#3b4840'};
 const number=n=>Math.round(n*100)/100;
 // Shared cosine samples keep joints, hands and machine levers in the same 4 s loop.
 const phases=Array.from({length:33},(_,i)=>(1-Math.cos(i*Math.PI/16))/2);
 const animation=(attribute,values,type)=>`<${type?'animateTransform':'animate'} attributeName="${attribute}"${type?` type="${type}"`:''} values="${values.join(';')}" dur="4s" repeatCount="indefinite" calcMode="linear"/>`;
 const rotate=(from,to,content)=>`<g transform="rotate(${from})">${from===to?'':animation('transform',phases.map(p=>number(from+(to-from)*p)),'rotate')}${content}</g>`;
 const translate=(from,to,content)=>`<g transform="translate(${from.join(' ')})">${to?animation('transform',phases.map(p=>from.map((n,i)=>number(n+(to[i]-n)*p)).join(' ')),'translate'):''}${content}</g>`;
 const morph=(a,b)=>{const values=b.match(/-?\d*\.?\d+/g).map(Number);return animation('d',phases.map(p=>{let i=0;return a.replace(/-?\d*\.?\d+/g,n=>number(+n+(values[i++]-n)*p));}));};
 const shape=(d,fill=palette.skin,other='',end)=>`<path d="${d}" fill="${fill}" stroke="${palette.edge}" stroke-width="1" stroke-linejoin="round" ${other}>${end?morph(d,end):''}</path>`;
 const line=(d,color=palette.metal,width=1,other='',end)=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${other}>${end?morph(d,end):''}</path>`;
 const bolt=(x,y,r=3)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#1c2922" stroke="#8d9c8d" stroke-width="1.2"/>`;
 const profile=()=>shape('M-10-5 C-10-13-5-18 2-18 C9-18 13-13 13-5 L12-2 L17 2 Q18 4 13 5 L12 9 Q8 13 2 11 L1 18 L-8 16 L-6 8 Q-10 3-10-5 Z')+line('M1-2 Q-3-5-4 0 Q-4 5 0 3 M9-3 H11 M7 8 H11',palette.edge,.8);
 const head=(x,y,angle=0,end,angleEnd=angle)=>translate([x,y],end,rotate(angle,angleEnd,profile()));
 const segment=(length,wide,narrow,fill=palette.skin)=>shape(`M${-wide} 2 C${-wide} ${-wide} ${wide} ${-wide} ${wide} 2 C${wide*1.15} ${length*.3} ${narrow*1.15} ${length*.72} ${narrow} ${length-2} Q${narrow} ${length+3} 0 ${length+3} Q${-narrow} ${length+3} ${-narrow} ${length-2} C${-narrow*1.15} ${length*.7} ${-wide*1.1} ${length*.3} ${-wide} 2 Z`,fill);
 const arm=({x,y,to,upper=35,lower=34,a=[0,0],bend=[0,0],focus='',opacity=1,scale=1,aValues,bendValues})=>{
  const joint=(range,values,content)=>values?`<g transform="rotate(${values[0]})">${animation('transform',values.map(number),'rotate')}${content}</g>`:rotate(range[0],range[1],content);
  let upperArt=segment(upper,7.5*scale,4.2*scale);
  if(focus==='shoulder')upperArt+=shape('M-7 1 C-7-7 6-7 8 1 Q9 10 1 15 Q-6 11-7 1 Z',palette.muscle);
  if(focus==='biceps')upperArt+=shape(`M1 7 C8 8 8 ${upper*.59} 3 ${upper-6} Q0 ${upper-3}-2 ${upper-8} C0 ${upper*.56}-3 12 1 7 Z`,palette.muscle);
  if(focus==='triceps'||focus==='assist')upperArt+=shape(`M-6 7 Q-2 5 0 11 L-1 ${upper-9} L-4 ${upper-4} Q-8 ${upper*.6}-6 7 Z`,focus==='triceps'?palette.muscle:palette.assist);
  upperArt+=line(`M3 15 Q5 ${upper*.65} 1 ${upper-6}`,palette.edge,.65);
  const forearm=segment(lower,5.4*scale,3.1*scale)+line(`M2 9 L0 ${lower-6}`,palette.edge,.65)
   +shape(`M-3 ${lower-1} Q-5 ${lower+3}-3 ${lower+7} L2 ${lower+9} Q6 ${lower+8} 5 ${lower+3} L3 ${lower-1} Z`)
   +line(`M-5 ${lower+4} H6`,'#3b4840',3)+line(`M-2 ${lower+2} L2 ${lower+5}`,palette.shade,2);
  return `<g opacity="${opacity}">${translate([x,y],to,joint(a,aValues,upperArt+translate([0,upper],null,joint(bend,bendValues,forearm))))}</g>`;
 };
 const pointOnArm=(spec,p)=>{
  const angle=(spec.a[0]+(spec.a[1]-spec.a[0])*p)*Math.PI/180;
  const bend=angle+(spec.bend[0]+(spec.bend[1]-spec.bend[0])*p)*Math.PI/180;
  return [spec.x-Math.sin(angle)*spec.upper-Math.sin(bend)*(spec.lower+4),spec.y+Math.cos(angle)*spec.upper+Math.cos(bend)*(spec.lower+4)];
 };
 const lever=(origin,spec)=>{
  const values=phases.map(p=>{const end=pointOnArm(spec,p);return `M${origin.join(' ')} L${end.map(number).join(' ')}`;});
  return `<path d="${values[0]}" fill="none" stroke="#899a8c" stroke-width="4" stroke-linecap="round">${animation('d',values)}</path>`+bolt(...origin,4);
 };
 const leg=(hip,knee,ankle,opacity=1)=>{
  const bone=(a,b,wide,narrow)=>{const dx=b[0]-a[0],dy=b[1]-a[1];return translate(a,null,rotate(Math.atan2(-dx,dy)*180/Math.PI,Math.atan2(-dx,dy)*180/Math.PI,segment(Math.hypot(dx,dy),wide,narrow)));};
  return `<g opacity="${opacity}">${bone(hip,knee,11,6.5)}${bone(knee,ankle,7,3.8)}${translate(ankle,null,shape('M-4-4 L4-4 L7 0 L16 4 Q19 9 13 9 H-5 Q-8 6-4-4 Z','#b8c0af')+line('M-5 6 H15','#566650',.8))}${line(`M${knee[0]-4} ${knee[1]} Q${knee[0]} ${knee[1]+2} ${knee[0]+4} ${knee[1]}`,palette.edge,.7)}</g>`;
 };
 const torso=(x,y,angle=0,focus='')=>translate([x,y],null,rotate(angle,angle,
  shape('M-7-65 L5-67 Q18-62 19-49 Q20-34 14-23 L12-8 Q17-2 12 7 L-12 7 Q-20 0-17-12 L-16-31 Q-22-50-14-61 Z')
  +shape('M-15-55 Q-19-40-12-24 L-11-9 L-2-7 L0-22 L-5-45 Z',focus==='back'?palette.muscle:palette.shade)
  +shape('M4-61 Q15-59 16-48 L12-40 L3-44 Z',focus==='chest'?palette.muscle:'#d3d4c7')
  +line('M5-39 Q10-31 7-17 M-10-61 L-2-58 M-8-20 L-6-9',palette.edge,.8)
  +shape('M-16-8 Q-2-3 13-8 L15 7 L7 17 L-13 11 L-19 1 Z',palette.shorts)
  +line('M-14-4 L10-3 M-2 0 L1 11','#879480',.7)
  ));
 const seatedLegs=()=>leg([111,149],[150,162],[160,202],.5)+leg([113,151],[158,158],[171,203]);
 const seat=line('M106 162 V211 M77 212 H179',palette.metal,6)+shape('M88 151 H135 Q140 151 140 156 V162 H88 Q83 162 83 157 Q83 151 88 151 Z',palette.pad)+bolt(106,180);
 let art='';
 if(id==='01'){
  const pulling={x:147,y:93,upper:35,lower:34,a:[-25,46],bend:[-3,-100],focus:'assist'};
  art=line('M69 211 H190 M96 207 L153 122 M151 122 L183 211',palette.metal,6)
   +shape('M143 109 L164 92 Q168 90 171 94 L174 100 L152 121 Z',palette.pad)
   +line('M64 209 L94 205 M95 207 L116 205','#899a8c',4)
   +lever([101,207],pulling)
   +leg([112,146],[111,175],[103,203],.5)+leg([111,146],[91,175],[78,202])
   +torso(111,147,35,'back')+head(157,80,35)
   +arm(pulling)+bolt(151,123,3);
 }
 if(id==='07'){
  // Solve the elbow at each shared phase so the hand follows the straight rail.
  const shoulder=[147,93],upper=35,lower=34;
  const hands=phases.map(p=>[177-25*p,154-30*p]);
  const angles=hands.map(([x,y])=>{
   const dx=x-shoulder[0],dy=y-shoulder[1],length=lower+4;
   const bend=-Math.acos(Math.max(-1,Math.min(1,(dx*dx+dy*dy-upper*upper-length*length)/(2*upper*length))));
   const angle=Math.atan2(-dx,dy)-Math.atan2(length*Math.sin(bend),upper+length*Math.cos(bend));
   return [angle*180/Math.PI,bend*180/Math.PI];
  });
  const carriage=shape('M-8-5 H8 V5 H-8 Z',palette.metal)+line('M-9 0 H9','#c8cbbf',3)+bolt(0,0,3);
  art=line('M65 211 H216 M94 207 L152 123 M152 123 L204 211',palette.metal,6)
   +line('M194 175 L138 107','#99a69d',4)
   +translate(hands[0],hands[16],carriage)
   +shape('M143 109 L164 92 Q168 90 171 94 L174 100 L152 121 Z',palette.pad)
   +line('M64 209 L96 204','#899a8c',5)
   +leg([112,146],[111,175],[103,203],.5)+leg([111,146],[91,175],[78,202])
   +torso(111,147,35,'back')+head(157,80,35)
   +arm({x:147,y:93,upper,lower,aValues:angles.map(a=>a[0]),bendValues:angles.map(a=>a[1]),focus:'assist'});
 }
 if(id==='02'){
  const left={x:120,y:130,upper:42,lower:38,a:[116,180],bend:[34,34]};
  const right={x:180,y:130,upper:42,lower:38,a:[-116,-180],bend:[-34,-34]};
  art=line('M93 156 H207 M150 156 V178',palette.metal,6)
   +shape('M116 143 Q150 138 184 143 L187 156 Q150 164 113 156 Z',palette.pad)
   +line('M65 76 Q85 34 141 54 M235 76 Q215 34 159 54','#75816c',.8,'stroke-dasharray="3 5" opacity=".55"')
   +lever([93,156],left)+lever([207,156],right)
   +shape('M119 119 Q128 112 141 116 H159 Q172 112 181 119 L187 134 Q180 150 163 151 H137 Q120 150 113 134 Z')
   +shape('M122 121 Q133 113 147 121 L145 133 Q131 138 120 131 Z',palette.muscle)
   +shape('M178 121 Q167 113 153 121 L155 133 Q169 138 180 131 Z',palette.muscle)
   +arm(left)+arm(right)
   +shape('M138 125 Q135 115 143 109 Q150 105 157 109 Q165 115 162 125 L160 137 Q150 144 140 137 Z')
   +shape('M147 110 L150 104 L153 110',palette.skin)+line('M138 122 L136 126 M162 122 L164 126 M142 136 Q150 140 158 136',palette.edge,.8)
   +'<text x="150" y="205" text-anchor="middle" fill="#aeb8ac" font-size="11">위에서 본 모습</text>';
 }
 if(id==='03'){
  const pressing={x:133,y:97,upper:35,lower:36,a:[-50,-148],bend:[-108,-8],focus:'shoulder'};
  art=line('M250 211 V77 M229 211 H268 M250 158 L269 210',palette.metal,6)+lever([250,77],pressing)
   +leg([122,147],[112,176],[103,202],.5)+leg([127,147],[139,177],[145,202])
   +torso(126,147)+head(127,65)
   +arm({...pressing,x:128,y:95,opacity:.4})+arm(pressing)
   +line('M254 88 V147','#83917f',1)+bolt(250,158);
 }
 if(id==='04'){
  art=seat+line('M89 151 V107',palette.metal,5)+shape('M88 113 Q92 108 97 113 L100 141 L91 145 Z',palette.pad)+seatedLegs()
   +shape('M105 80 L118 81 Q134 87 133 103 Q133 119 125 134 L124 149 L106 153 Q95 143 96 126 L98 103 Q97 89 105 80 Z',palette.skin,'','M126 97 L139 102 Q153 109 148 123 Q144 136 129 143 L124 149 L106 153 Q97 145 99 131 L107 114 Q114 102 126 97 Z')
   +shape('M102 92 Q96 113 103 134 L110 143 L113 128 L112 106 Z',palette.shade,'','M122 108 Q106 118 105 135 L110 143 L119 132 L129 118 Z')
   +shape('M124 106 L131 104 Q132 120 124 135 L118 141 L117 126 Z',palette.muscle,'','M142 121 L149 119 Q143 135 129 142 L121 145 L124 135 Z')
   +line('M122 115 L130 115 M120 123 L127 124 M119 132 L124 133','#a75f4b',.8,'','M138 126 L145 129 M132 132 L139 135 M126 138 L132 140')
   +shape('M104 143 Q114 145 127 143 L132 153 L124 165 L104 160 L99 151 Z',palette.shorts)
   +head(112,63,0,[137,85],25)
   +arm({x:116,y:91,to:[138,111],upper:27,lower:26,a:[-43,-16],bend:[-145,-145]})
   +line('M80 216 H188',palette.metal,2);
 }
 if(id==='05'||id==='06'){
  const extending=id==='05';
  const elbow=[155,118];
  const fixedAngle=-55,upperLength=46;
  const shoulder=[elbow[0]+Math.sin(fixedAngle*Math.PI/180)*upperLength,elbow[1]-Math.cos(fixedAngle*Math.PI/180)*upperLength];
  const working={x:shoulder[0],y:shoulder[1],upper:upperLength,lower:36,a:[fixedAngle,fixedAngle],bend:extending?[-93,7]:[7,-93],focus:extending?'triceps':'biceps'};
  art=seat+line('M150 153 V128 M150 131 L173 121',palette.metal,5)
   +shape('M118 111 L166 129 L173 119 L125 101 Z',palette.pad)
   +lever(elbow,working)+seatedLegs()+torso(110,150)+head(110,66)
   +arm(working)+bolt(...elbow,2.5)
   +line('M182 82 Q211 114 183 149','#75816c',.8,'stroke-dasharray="3 5" opacity=".5"');
 }
 return `<svg class="motion-svg" viewBox="0 0 300 230" role="img" aria-label="${visualGuides[id].action} 동작 이해용 애니메이션">${id==='02'?'':line('M42 216 H273','#34443a',1)}${art}</svg>`;
}
function renderVisualGuide(m){const v=visualGuides[m.id];return `<section class="visual-guide" aria-label="사용 근육과 동작 안내"><div class="visual-heading"><p class="eyebrow">MUSCLE MAP</p><h3>어디에 힘이 들어가나요?</h3></div><div class="muscle-views">${['front','side','back'].map(view=>muscleFigure(view,v)).join('')}</div><div class="muscle-key"><p><i class="primary-dot"></i><strong>주요 근육</strong> ${v.main}</p>${v.secondary.length?`<p><i class="secondary-dot"></i><strong>보조 근육</strong> ${v.assist}</p>`:''}</div><p class="visual-footnote">주요 부위를 간략히 표시한 그림입니다. 자세와 손잡이에 따라 자극 부위가 달라집니다.</p><div class="motion-panel"><div class="motion-heading"><div><p class="eyebrow">MOVEMENT</p><h3>동작을 한눈에</h3></div><button type="button" id="motion-toggle" aria-pressed="false">일시정지</button></div>${motionFigure(m.id)}<p class="motion-action">${v.action}</p><p class="motion-cue">${v.cue}</p><p class="visual-footnote">동작 이해용 그림 · 실제 머신의 형태·이동 범위와는 차이가 있습니다.</p></div></section>`;}
// Pause off-screen work and detach all listeners when the dialog changes.
function initMotion(){
 const svg=document.querySelector('.motion-svg'),button=document.querySelector('#motion-toggle');
 if(!svg||!button)return ()=>{};
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let userPaused=preference.matches,inView=true;
 const update=()=>{
  const paused=userPaused||document.hidden||!inView;
  paused?svg.pauseAnimations():svg.unpauseAnimations();
  button.textContent=userPaused?'재생':'일시정지';
  button.setAttribute('aria-pressed',String(userPaused));
 };
 const toggle=()=>{userPaused=!userPaused;update();};
 const changePreference=event=>{userPaused=event.matches;update();};
 button.addEventListener('click',toggle);
 document.addEventListener('visibilitychange',update);
 preference.addEventListener('change',changePreference);
 const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;update();},{threshold:0});
 observer.observe(svg);update();
 return ()=>{observer.disconnect();svg.pauseAnimations();button.removeEventListener('click',toggle);document.removeEventListener('visibilitychange',update);preference.removeEventListener('change',changePreference);};
}
