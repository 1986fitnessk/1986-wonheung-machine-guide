/* Original schematic artwork. Movement references are linked in each machine guide. */
const visualGuides={
"29-ab":{"primary": ["hipabductors"], "secondary": [], "main": "중둔근 · 소둔근", "assist": "", "cue": "패드 접촉 유지 · 몸통 고정", "action": "바깥쪽으로 벌리기 → 천천히 돌아오기"},
"31":{"primary": ["hipabductors"], "secondary": [], "main": "중둔근 · 소둔근", "assist": "", "cue": "패드 접촉 유지 · 몸통 고정", "action": "바깥쪽으로 벌리기 → 천천히 돌아오기"},
"32":{"primary": ["hipabductors"], "secondary": [], "main": "중둔근 · 소둔근", "assist": "", "cue": "패드 접촉 유지 · 몸통 고정", "action": "바깥쪽으로 벌리기 → 천천히 돌아오기"},
"29-ad":{"primary": ["adductors"], "secondary": [], "main": "고관절 내전근군", "assist": "", "cue": "무릎 안쪽으로 · 반동 없이", "action": "안쪽으로 모으기 → 천천히 벌리기"},
"33":{"primary": ["adductors"], "secondary": [], "main": "고관절 내전근군", "assist": "", "cue": "무릎 안쪽으로 · 반동 없이", "action": "안쪽으로 모으기 → 천천히 벌리기"},
"30":{"primary": ["hamstrings", "glutes"], "secondary": ["lowerback"], "main": "햄스트링 · 대둔근", "assist": "척추기립근 (몸통 안정)", "cue": "발바닥 지지 · 고관절 접기", "action": "엉덩이 뒤로 보내기 → 고관절 펴기"},
"34":{"primary": ["hamstrings"], "secondary": [], "main": "햄스트링", "assist": "", "cue": "골반은 패드에 · 무릎만 굽히기", "action": "뒤꿈치 당기기 → 천천히 펴기"},

"23":{"primary": ["glutes"], "secondary": ["hamstrings", "lowerback"], "main": "대둔근", "assist": "햄스트링 · 척추기립근", "cue": "골반 패드 · 발목 지지 유지", "action": "고관절 접기 → 몸이 일직선까지 펴기"},
"24":{"primary": ["glutes"], "secondary": ["hamstrings"], "main": "대둔근", "assist": "햄스트링", "cue": "몸통·무릎 지지 · 골반 고정", "action": "발 받침 뒤로 밀기 → 천천히 받아오기"},
"25":{"primary": ["shoulder"], "secondary": ["triceps"], "main": "전면·측면 삼각근", "assist": "상완삼두근", "cue": "등·엉덩이 밀착 · 손바닥으로", "action": "위로 밀기 → 천천히 받아오기"},
"26":{"primary": ["lats"], "secondary": ["biceps", "midback"], "main": "광배근", "assist": "상완이두근 · 등 상부 근육", "cue": "허벅지 고정 · 엉덩이는 좌석에", "action": "레버 당기기 → 천천히 올리기"},
"27":{"primary": ["lats"], "secondary": ["biceps", "midback"], "main": "광배근", "assist": "상완이두근 · 등 상부 근육", "cue": "바는 머리 앞 · 몸통 흔들림 없이", "action": "바를 아래로 당기기 → 천천히 올리기"},
"28":{"primary": ["lats", "midback"], "secondary": ["biceps", "rearshoulder"], "main": "광배근 · 중부 승모근 · 능형근", "assist": "상완이두근 · 후면 삼각근", "cue": "발판 접지 · 몸통 과하게 눕지 않기", "action": "배 쪽으로 당기기 → 두 박자로 늘리기"},

 '18':{primary:['lats','midback'],secondary:['biceps','rearshoulder'],main:'광배근 · 등 상부 근육',assist:'상완이두근 · 후면 삼각근',cue:'가슴은 패드에 · 팔꿈치를 아래·뒤로',action:'위에서 대각선으로 당기기 → 천천히 늘리기'},
 '19':{primary:['lats'],secondary:['biceps','midback'],main:'광배근',assist:'상완이두근 · 등 상부 근육',cue:'몸통 고정 · 팔꿈치는 아래로',action:'위에서 아래로 당기기 → 천천히 올리기'},
 '20':{primary:['chest'],secondary:['triceps','shoulder'],main:'대흉근',assist:'상완삼두근 · 전면 삼각근',cue:'등·엉덩이 밀착 · 가슴 앞쪽으로',action:'앞으로 밀기 → 천천히 받아오기'},
 '21':{primary:['shoulder'],secondary:['triceps'],main:'전면·측면 삼각근',assist:'상완삼두근',cue:'등받이 지지 · 허리 과신전 없이',action:'머리 위로 밀기 → 어깨 높이로 내리기'},
 '22':{primary:['lats','midback'],secondary:['biceps','rearshoulder'],main:'광배근 · 중부 승모근 · 능형근',assist:'상완이두근 · 후면 삼각근',cue:'가슴 밀착 · 팔꿈치를 몸통 뒤로',action:'앞에서 몸통 쪽으로 당기기 → 천천히 늘리기'},

 '13':{primary:['glutes'],secondary:['hamstrings'],main:'대둔근',assist:'햄스트링',cue:'등 상부와 발은 지지 · 허리 과신전 없이',action:'엉덩이 올리기 → 천천히 내려오기'},
 '14':{primary:['quads','glutes'],secondary:[],main:'대퇴사두근 · 대둔근',assist:'',cue:'무릎은 발끝 방향 · 발바닥 전체로',action:'패드와 함께 앉기 → 밀어 일어서기'},
 '14-reverse':{primary:['quads','glutes'],secondary:[],main:'대퇴사두근 · 대둔근',assist:'',cue:'어깨 아래 정강이 · 엉덩이는 뒤로',action:'어깨 지지하며 앉기 → 밀어 일어서기'},
 '15':{primary:['quads','glutes'],secondary:[],main:'대퇴사두근 · 대둔근',assist:'',cue:'등과 엉덩이는 패드에 · 무릎 튕기지 않기',action:'발판 받아오기 → 앞쪽으로 밀기'},
 '16':{primary:['quads','glutes'],secondary:[],main:'대퇴사두근 · 대둔근',assist:'',cue:'몸은 패드에 · 발은 고정 발판에',action:'레일 따라 내려오기 → 밀어 올라가기'},
 '17':{primary:['quads','glutes'],secondary:[],main:'대퇴사두근 · 대둔근',assist:'',cue:'골반 고정 · 발바닥 전체로 밀기',action:'무릎 굽혀 받아오기 → 레일 따라 밀기'},

 '09':{primary:['chest'],secondary:['triceps','shoulder'],main:'대흉근',assist:'상완삼두근 · 전면 삼각근',cue:'등은 패드에 · 앞쪽으로 모아 밀기',action:'앞쪽으로 밀기 → 천천히 받아오기'},
 '10':{primary:['chest','shoulder'],secondary:['triceps'],main:'대흉근 상부 · 전면 삼각근',assist:'상완삼두근',cue:'앞쪽 위로 밀기 · 허리 과신전 없이',action:'대각선 위로 밀기 → 천천히 받아오기'},
 '11':{primary:['lats'],secondary:['triceps'],main:'광배근',assist:'상완삼두근 장두 등',cue:'팔꿈치는 패드에 · 몸통은 고정',action:'패드를 아래로 누르기 → 머리 위로 천천히 돌아가기'},
 '12':{primary:['chest'],secondary:['triceps','shoulder'],main:'대흉근 (하부 중심)',assist:'상완삼두근 · 전면 삼각근',cue:'등받이에 기대어 · 앞쪽 아래로 밀기',action:'앞쪽 아래로 밀기 → 천천히 받아오기'},
 '08-pull':{primary:['lats'],secondary:['biceps','midback'],main:'광배근',assist:'상완이두근 · 등 상부 근육',cue:'몸통 흔들림 없이 · 팔꿈치를 아래로',action:'당겨 올라가기 → 천천히 내려오기'},
 '08-dip':{primary:['triceps','chest'],secondary:['shoulder'],main:'상완삼두근 · 대흉근',assist:'전면 삼각근',cue:'어깨가 편안한 범위에서 · 반동 없이',action:'천천히 내려가기 → 밀어 올라오기'},
 '07':{primary:['lats','midback'],secondary:['biceps','rearshoulder'],main:'광배근 · 중부 승모근 · 능형근',assist:'상완이두근 · 후면 삼각근',cue:'엉덩이는 패드에 · 힙힌지 유지',action:'레일을 따라 당기기 → 천천히 펴기'},
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
   +muscle('quads','M45 115 Q49 113 55 119 L55 134 Q53 145 49 151 Q44 143 44 132 Z')
   +muscle('quads','M75 115 Q71 113 65 119 L65 134 Q67 145 71 151 Q76 143 76 132 Z')
   +muscle('adductors','M57 120 L59 128 L56 149 L53 155 L51 150 Z M63 120 L61 128 L64 149 L67 155 L69 150 Z')
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
   +muscle('lowerback','M55 84 L59 88 L58 109 L49 111 L46 104 Z M65 84 L61 88 L62 109 L71 111 L74 104 Z')
   +muscle('glutes','M47 112 Q54 109 59 114 L59 126 Q49 131 43 123 Z M73 112 Q66 109 61 114 L61 126 Q71 131 77 123 Z')
   +muscle('hamstrings','M44 130 Q48 132 55 130 L55 143 L51 155 L47 151 Z M76 130 Q72 132 65 130 L65 143 L69 155 L73 151 Z')
   +neutral('M46 159 Q49 154 53 159 L54 166 L50 179 L47 174 Z M74 159 Q71 154 67 159 L66 166 L70 179 L73 174 Z');
  if(v.primary.includes('hipabductors'))muscles+=muscle('hipabductors','M46 109 Q50 104 57 109 L54 116 L44 120 Z M74 109 Q70 104 63 109 L66 116 L76 120 Z');
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
   +muscle('glutes','M47 107 Q53 102 63 107 L66 118 Q56 127 45 121 Z')
   +muscle('quads','M64 125 L70 122 L67 140 L62 154 L56 153 L55 143 Z')
   +muscle('hamstrings','M45 126 L51 129 L55 146 L54 154 L50 145 Z')
   +neutral('M56 160 Q62 156 64 161 L63 171 L59 182 L57 181 Z');
  if(v.primary.includes('hipabductors'))muscles+=muscle('hipabductors','M47 107 Q54 101 62 107 L60 115 L46 119 Z');
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
 const leg=(hip,knee,ankle,opacity=1,footAngle=0)=>{
  const bone=(a,b,wide,narrow)=>{const dx=b[0]-a[0],dy=b[1]-a[1];return translate(a,null,rotate(Math.atan2(-dx,dy)*180/Math.PI,Math.atan2(-dx,dy)*180/Math.PI,segment(Math.hypot(dx,dy),wide,narrow)));};
  return `<g opacity="${opacity}">${bone(hip,knee,11,6.5)}${bone(knee,ankle,7,3.8)}${translate(ankle,null,rotate(footAngle,footAngle,shape('M-4-4 L4-4 L7 0 L16 4 Q19 9 13 9 H-5 Q-8 6-4-4 Z','#b8c0af')+line('M-5 6 H15','#566650',.8)))}${line(`M${knee[0]-4} ${knee[1]} Q${knee[0]} ${knee[1]+2} ${knee[0]+4} ${knee[1]}`,palette.edge,.7)}</g>`;
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
 // Frontal views make inward/outward travel and pad contact visible.
 if(['29-ab','29-ad','32','33'].includes(id)){
  const standing=id==='31',inward=['29-ad','33'].includes(id),hipY=standing?116:130;
  const from=inward?34:8,to=inward?8:34;
  const frontBody=shape(`M144 ${hipY-82} H156 L157 ${hipY-70} L163 ${hipY-64} Q150 ${hipY-59} 137 ${hipY-64} L143 ${hipY-70} Z`)
   +shape(`M134 ${hipY-65} Q150 ${hipY-71} 166 ${hipY-65} Q174 ${hipY-54} 168 ${hipY-36} L163 ${hipY-8} L137 ${hipY-8} L132 ${hipY-36} Q126 ${hipY-54} 134 ${hipY-65} Z`)
   +shape(`M134 ${hipY-59} Q143 ${hipY-64} 149 ${hipY-57} V${hipY-42} Q139 ${hipY-39} 133 ${hipY-47} Z M166 ${hipY-59} Q157 ${hipY-64} 151 ${hipY-57} V${hipY-42} Q161 ${hipY-39} 167 ${hipY-47} Z`,'#d3d4c7')
   +line(`M150 ${hipY-39} V${hipY-15} M140 ${hipY-31} H160 M141 ${hipY-23} H159`,palette.edge,.8)
   +shape(`M137 ${hipY-10} H163 L169 ${hipY+8} L153 ${hipY+14} L150 ${hipY+5} L147 ${hipY+14} L131 ${hipY+8} Z`,palette.shorts)
   +translate([150,hipY-83],null,shape('M-11-7 Q-12-20 0-20 Q12-20 11-7 L9 3 Q0 14-9 3 Z')+line('M-6-5 H-3 M3-5 H6 M0-4 L-2 1 H1 M-4 5 H4',palette.edge,.8));
  const lower=(side)=>{
   const hip=[150+side*13,hipY],angle0=-side*from,angle1=-side*to;
   if(!standing){
    const a=-side*(inward?73:43),b=-side*(inward?43:73),padSide=side*(inward?-12:12);
    return translate(hip,null,rotate(a,b,
     segment(34,11,6,inward?palette.muscle:palette.skin)
     +translate([0,34],null,rotate(-a,-b,
      segment(37,7,4)+shape('M-6 34 H6 L11 42 V47 H-9 Z')
      +shape(`M${padSide-4} -13 H${padSide+4} V13 H${padSide-4} Z`,palette.pad)
      +line('M-13 49 H13',palette.metal,5)))
     +(!inward?shape('M-8 2 Q0-6 8 2 L6 11 H-6 Z',palette.muscle):'')));
   }
   // The pad, thigh and foot support share one moving assembly.
   const thigh=standing?42:28,shin=standing?39:37,padX=side*(inward?-12:12);
   return translate(hip,null,rotate(angle0,angle1,
    line(`M0 8 V${thigh+shin+10}`,palette.metal,5)
    +segment(thigh,10,6,inward?palette.muscle:palette.skin)
    +translate([0,thigh],null,segment(shin,7,4)+shape(`M-6 ${shin-3} H6 L11 ${shin+5} Q10 ${shin+10} 0 ${shin+10} H-9 Z`))
    +shape(`M${padX-4} 10 H${padX+4} V${thigh+10} H${padX-4} Z`,palette.pad)
    +line(`M-12 ${thigh+shin+11} H12`,palette.metal,5)
    +(!inward?shape('M-8 2 Q0-6 8 2 L6 11 H-6 Z',palette.muscle):'')));
  };
  art=line(standing?'M56 216 H244 M100 216 V87 H200 V216':'M65 216 H235 M117 216 V78 M183 216 V78 M112 78 H188 M150 149 V214',palette.metal,6)
   +(standing?'':shape('M126 60 H174 V126 H126 Z',palette.pad)+shape('M118 131 H182 V146 H118 Z',palette.pad))
   +lower(-1)+lower(1)+frontBody
   +line(standing?'M132 58 L118 82 L103 88 M168 58 L182 82 L197 88':`M130 76 L115 104 L114 133 M170 76 L185 104 L186 133`,palette.skin,11)
   +line(standing?'M93 88 H112 M188 88 H207':'M103 135 H122 M178 135 H197',palette.metal,5)
   +(standing?shape('M132 91 H168 V105 H132 Z',palette.pad):'')
   +`<text x="150" y="${standing?8:23}" fill="#aeb8ac" font-size="9" text-anchor="middle">정면 도식</text>`;
 }
 if(id==='31'){
  // Side projection: near/far legs separate in depth while torso stays on the support.
  const movingLeg=(offset,travel,lift,opacity)=>`<g opacity="${opacity}">`
   +shape(`M${119+offset} 128 Q${128+offset} 126 ${135+offset} 135 L${147+offset} 162 Q${148+offset} 170 ${138+offset} 170 L${123+offset} 145 Z`,palette.skin,'',`M${119+offset} 128 Q${128+offset} 126 ${135+offset} 135 L${147+offset+travel} ${162-lift} Q${148+offset+travel} ${170-lift} ${138+offset+travel} ${170-lift} L${123+offset} 145 Z`)
   +translate([143+offset,166],[143+offset+travel,166-lift],
    segment(36,7,4)+translate([0,36],null,shape('M-5-4 H4 L17 4 V9 H-6 Z'))
    +shape('M-13-25 H-6 V3 H-13 Z',palette.pad)
    +line('M-9 5 V48 M-13 48 H21',palette.metal,5))+'</g>';
  art=line('M76 216 H244 M184 215 V108 M183 125 L220 213 M89 215 H160',palette.metal,6)
   +line('M139 172 Q92 171 85 122',palette.muscle,1.8,'stroke-dasharray="4 4"')
   +line('M80 130 L85 121 L92 128',palette.muscle,1.8)
   +movingLeg(5,19,34,.4)+movingLeg(0,-47,44,1)
   +shape('M169 91 L178 94 L175 120 L166 116 Z',palette.pad)
   +translate([125,135],null,rotate(30,30,shape('M-7-78 H5 L7-62 L-8-59 Z')))
   +torso(125,135,30)+head(166,63,20)
   +shape('M111 126 Q119 119 128 125 L126 134 L114 137 Z',palette.muscle)
   +arm({x:164,y:88,upper:27,lower:24,a:[-35,-35],bend:[-60,-60]})
   +line('M200 108 H218 M210 108 V135 H184',palette.metal,5)
   +'<text x="227" y="44" fill="#aeb8ac" font-size="9" text-anchor="middle">측면 도식</text>'
   +'<text x="150" y="25" fill="#aeb8ac" font-size="9" text-anchor="middle">바깥으로 벌어지는 궤적을 펼쳐 표시했습니다</text>';
 }

 if(id==='30'){
  const hips=phases.map(p=>[127-18*p,119+3*p]),leans=phases.map(p=>5+60*p);
  const at=(pts,content)=>`<g transform="translate(${pts[0].join(' ')})">${animation('transform',pts.map(p=>p.map(number).join(' ')),'translate')}${content}</g>`;
  const bone=(a,b,len,w,fill)=>{const angles=a.map((p,i)=>Math.atan2(-(b[i][0]-p[0]),b[i][1]-p[1])*180/Math.PI);return at(a,`<g transform="rotate(${angles[0]})">${animation('transform',angles.map(number),'rotate')}${segment(len,w,4,fill)}</g>`);};
  const ankles=phases.map(()=>[139,202]);
  const knees=hips.map(h=>{const dx=139-h[0],dy=202-h[1],d=Math.hypot(dx,dy),height=Math.sqrt(Math.max(0,43*43-d*d/4));return [(h[0]+139)/2+dy/d*height,(h[1]+202)/2-dx/d*height];});
  const shoulders=hips.map((h,i)=>{const a=leans[i]*Math.PI/180;return [h[0]+10*Math.cos(a)+60*Math.sin(a),h[1]+10*Math.sin(a)-60*Math.cos(a)];});
  const grips=shoulders.map(s=>[s[0],s[1]+61]);
  const leverPaths=grips.map(g=>`M249 100 L${g.map(number).join(' ')}`);
  art=line('M70 215 H274 M250 214 V100 M164 211 L249 100',palette.metal,6)
   +shape('M99 211 H167 V217 H99 Z',palette.pad)
   +`<path d="${leverPaths[0]}" fill="none" stroke="#899a8c" stroke-width="6">${animation('d',leverPaths)}</path>`+bolt(249,100,12)
   +bone(hips,knees,43,10,palette.muscle)+bone(knees,ankles,43,7,palette.skin)
   +translate([139,202],null,shape('M-6-3 H5 L19 4 V9 H-7 Z'))
   +at(hips,`<g transform="rotate(${leans[0]})">${animation('transform',leans.map(number),'rotate')}${torso(0,0,0)}${head(0,-83,0)}</g>`)
   +at(shoulders,arm({x:0,y:0,upper:29,lower:28,a:[0,0],bend:[0,0]}))
   +'<text x="236" y="72" fill="#aeb8ac" font-size="9" text-anchor="middle">측면 도식</text>';
 }
 if(id==='34'){
  const knee=[199,137],angles=phases.map(p=>-78-80*p);
  const movingShin=`<g transform="rotate(${angles[0]})">${animation('transform',angles.map(number),'rotate')}${segment(41,7,4)}${translate([0,41],null,shape('M-5-4 H4 L14 3 V9 H-6 Z'))}${line('M-10 34 H10',palette.pad,12)}</g>`;
  art=line('M51 213 H267 M79 213 V153 M180 213 V151 M235 213 V35',palette.metal,6)
   +shape('M229 31 H258 V195 H229 Z',palette.pad)
   +line('M234 55 V185 M252 55 V185',palette.edge,2)
   +shape('M69 143 L151 137 L201 148 V158 L151 149 L69 155 Z',palette.pad)
   +translate([155,129],null,rotate(-85,-85,'<g transform="scale(-1 1)">'+torso(0,0,0)+'</g>'))
   +translate([72,122],null,rotate(-85,-85,'<g transform="scale(-1 1)">'+profile()+'</g>'))
   +translate([155,129],null,rotate(-79,-79,segment(45,11,6,palette.muscle)))
   +translate(knee,null,movingShin)+bolt(...knee)
   +arm({x:96,y:114,upper:25,lower:23,a:[25,25],bend:[70,70]})
   +line('M56 130 H76 M63 130 V155',palette.metal,5)
   +'<text x="151" y="47" fill="#aeb8ac" font-size="9" text-anchor="middle">측면 도식</text>';
 }


 if(['13','14','14-reverse','15','16','17'].includes(id)){
  // Fixed-length thigh/shin IK keeps feet attached to the moving or fixed footplate.
  const reverse=id==='14-reverse',hipThrust=id==='13',squat=id==='14'||reverse||id==='16',hack=id==='16';
  const poses=phases.map(p=>{
   let hip,ankle,lean;
   if(hipThrust){
    lean=-60-30*p;const r=lean*Math.PI/180;
    hip=[88-(10*Math.cos(r)+60*Math.sin(r)),125-(10*Math.sin(r)-60*Math.cos(r))];ankle=[190,202];
   }else if(reverse){
    // Hinge back on descent: shoulder stays above the planted shin, pelvis travels behind it.
    hip=[160-29*p,158-46*p];ankle=[112,202];lean=-42+27*p;
   }else if(squat){
    // Hack carriage, back pad and torso share the exact incline of the rail.
    hip=hack?[147-(38*62/169)*p,164-38*p]:[112+13*p,151-32*p];
    ankle=hack?[211,202]:[170,202];lean=hack?-Math.atan2(62,169)*180/Math.PI:-8;
   }else{hip=[110,177];ankle=id==='15'?[168+28*p,141-17*p]:[164+29*p,142-29*p];lean=-55;}
   const length=squat?49:hipThrust?46:59;
   const dx=ankle[0]-hip[0],dy=ankle[1]-hip[1],d=Math.hypot(dx,dy);
   const height=Math.sqrt(Math.max(0,length*length-d*d/4));
   const side=reverse?-1:1;
   const knee=[(hip[0]+ankle[0])/2+side*dy/d*height,(hip[1]+ankle[1])/2-side*dx/d*height];
   return {hip,ankle,knee,lean,length};
  });
  const moving=(points,content)=>`<g transform="translate(${points[0].join(' ')})">${animation('transform',points.map(p=>p.map(number).join(' ')),'translate')}${content}</g>`;
  const turning=(angles,content)=>`<g transform="rotate(${angles[0]})">${animation('transform',angles.map(number),'rotate')}${content}</g>`;
  const bone=(from,to,len,width,fill)=>moving(from,turning(from.map((a,i)=>Math.atan2(-(to[i][0]-a[0]),to[i][1]-a[1])*180/Math.PI),segment(len,width,4,fill)));
  const hips=poses.map(p=>p.hip),knees=poses.map(p=>p.knee),feet=poses.map(p=>p.ankle),leans=poses.map(p=>p.lean);
  const legs=bone(hips,knees,poses[0].length,10,hipThrust?palette.skin:palette.muscle)+bone(knees,feet,poses[0].length,7,palette.skin)
   +moving(feet,(id==='15'||id==='17')
    // The whole sole follows the footplate's near face (y = x - 7).
    // Both endpoints move with the plate, so heel and forefoot never lift off.
    ?shape('M-4 5 L-9-5 Q-17-13-12-19 L12 5 Q15 10 7 11 Z',palette.skin)+line('M-12-19 L12 5','#65745e',1.5)+line('M-8-5 L-1 1',palette.edge,.8)
    :`<g transform="scale(${reverse?-1:1} 1)">${shape('M-6-4 H5 L16 2 Q19 7 13 8 H-5 Z',palette.skin)}</g>`);
  const grip=squat?{a:[-65,-65],bend:[-115,-115]}:{a:[-8,-8],bend:[-15,-15]};
  const upper=moving(hips,turning(leans,`<g transform="scale(${reverse?-1:1} 1)">`+torso(0,0,0)+(hipThrust?shape('M-16-5 Q-5-9 5 1 L0 10 L-13 8 Z',palette.muscle):'')+head(0,-83)+arm({x:10,y:-60,upper:30,lower:28,...grip})+'</g>'));
  let frame='',pad='';
  if(hipThrust){
   // Two distinct supports: articulated upper-back pad and fixed starting seat.
   // The torso rotates around the same shoulder anchor as the back-pad assembly.
   frame=line('M46 216 H230 M88 216 V145 M130 216 V184',palette.metal,7)
    +moving(hips,turning(leans,shape('M-26-72 Q-30-72-30-67 V-28 Q-30-23-25-23 H-18 V-72 Z','#647267')))
    +shape('M116 179 H158 Q163 179 163 184 V189 H113 V184 Q113 179 116 179 Z','#647267')
    +shape('M178 210 H221 V217 H178 Z',palette.pad)
    +bolt(88,145,5)
    +'<text x="25" y="135" fill="#bfc9ba" font-size="9">등받이 패드</text><text x="103" y="204" fill="#bfc9ba" font-size="9">엉덩이 패드</text>';
   const links=hips.map(h=>`M88 145 L${number(h[0])} ${number(h[1]-7)}`);
   frame+=`<path d="${links[0]}" fill="none" stroke="#899a8c" stroke-width="4">${animation('d',links)}</path>`;
   pad=moving(hips,shape('M-13-14 H15 Q22-9 15-3 H-13 Q-20-8-13-14 Z',palette.pad));
  }else if(squat){
   frame=line(hack?'M82 212 L144 43 M69 212 L131 43 M62 216 H230':'M55 212 H220 M62 212 V112',palette.metal,6)+shape(hack?'M171 210 H238 V217 H171 Z':'M52 210 H202 V216 H52 Z',palette.pad);
   pad=moving(hips,turning(leans,shape(reverse?'M-24-73 H16 V-64 H-24 Z':'M-24-70 H-15 V9 H-24 Z M-24-73 H16 V-64 H-24 Z',palette.pad)));
   if(hack)frame+=moving(hips,turning(leans,line('M-51-56 V-8 M-51-51 H-25 M-51-13 H-25',palette.metal,5)+bolt(-51,-51,4)+bolt(-51,-13,4)));
   if(!hack){const links=poses.map(p=>{const r=p.lean*Math.PI/180;const end=reverse?[p.hip[0]-10*Math.cos(r)+64*Math.sin(r),p.hip[1]-10*Math.sin(r)-64*Math.cos(r)]:[p.hip[0]-22,p.hip[1]-25];return `M62 112 L${end.map(number).join(' ')}`;});frame+=`<path d="${links[0]}" fill="none" stroke="#899a8c" stroke-width="5">${animation('d',links)}</path>`+bolt(62,112);}
  }else{
   frame=line('M38 212 H252 M64 212 L47 145 M112 212 V187',palette.metal,6)+shape('M38 139 L44 131 L113 178 L108 187 Z',palette.pad);
   if(id==='17')frame+=line('M139 190 L221 92 M151 201 L233 103',palette.metal,5);
   else{const links=feet.map(a=>`M242 207 L${a[0]+10} ${a[1]}`);frame+=`<path d="${links[0]}" fill="none" stroke="#899a8c" stroke-width="5">${animation('d',links)}</path>`+bolt(242,207);}
   pad=moving(feet,shape('M-13-20 L-7-25 L29 11 L23 17 Z',palette.pad));
  }
  const assembly=frame+pad+legs+upper+(hipThrust?pad:'');
  const hackRail=line('M177 212 L239 43 M164 212 L226 43 M42 216 H252',palette.metal,6);
  const hackLinks=hack?[-51,-13].map(y=>{const paths=poses.map(p=>{const r=p.lean*Math.PI/180;const end=[300-(p.hip[0]-25*Math.cos(r)-y*Math.sin(r)),p.hip[1]-25*Math.sin(r)+y*Math.cos(r)];const railX=177+(212-end[1])*62/169;return `M${number(railX)} ${number(end[1])} L${end.map(number).join(' ')}`;});return `<path d="${paths[0]}" fill="none" stroke="#899a8c" stroke-width="4">${animation('d',paths)}</path>`;}).join(''):'';
  art=(hack?hackRail+hackLinks+`<g transform="translate(300 0) scale(-1 1)">${shape('M171 210 H238 V217 H171 Z',palette.pad)+pad+legs+upper}</g>`:assembly)+'<text x="248" y="225" text-anchor="middle" fill="#aeb8ac" font-size="9">측면 도식</text>';
 }



 if(id==='23'){
  // Fixed ankles and upper-thigh pad: the torso rotates only at the hip.
  const upperBody=torso(0,0,0,'back')+head(0,-83,8)
   +arm({x:10,y:-60,upper:30,lower:26,a:[-15,-15],bend:[-130,-130]});
  art=line('M48 213 H221 M75 204 L137 139 M132 145 L193 213',palette.metal,7)
   +shape('M48 198 H89 V207 H48 Z',palette.pad)
   +leg([130,130],[98,161],[65,194],.45)+leg([133,132],[101,164],[68,195])
   +translate([130,130],null,rotate(110,45,upperBody))
   +shape('M111 148 L136 121 L147 131 L122 158 Z',palette.pad)
   +shape('M55 182 H82 Q87 188 82 193 H55 Q50 188 55 182 Z',palette.pad)
   +bolt(132,165)+line('M140 145 L160 151',palette.metal,4);
 }
 if(id==='24'){
  // One knee stays on its pad; the opposite foot presses the moving lever backwards.
  const hip=[140,130],feet=phases.map(p=>[87-34*p,169-31*p]);
  const knees=feet.map(f=>{const dx=f[0]-hip[0],dy=f[1]-hip[1],d=Math.hypot(dx,dy),h=Math.sqrt(Math.max(0,48*48-d*d/4));return [(hip[0]+f[0])/2+dy/d*h,(hip[1]+f[1])/2-dx/d*h];});
  const moving=(pts,body)=>`<g transform="translate(${pts[0].join(' ')})">${animation('transform',pts.map(p=>p.map(number).join(' ')),'translate')}${body}</g>`;
  const bone=(a,b,w,fill)=>{const angles=a.map((p,i)=>Math.atan2(-(b[i][0]-p[0]),b[i][1]-p[1])*180/Math.PI);return moving(a,`<g transform="rotate(${angles[0]})">${animation('transform',angles.map(number),'rotate')}${segment(48,w,4,fill)}</g>`);};
  const hips=feet.map(()=>hip),paths=feet.map(f=>`M52 70 L${number(f[0]-7)} ${number(f[1]+4)}`);
  art=line('M40 212 H244 M139 212 V185 M190 212 V151 M52 212 V70',palette.metal,6)
   +shape('M123 182 H157 V192 H123 Z',palette.pad)
   +leg(hip,[140,174],[105,181],.4)
   +shape('M162 145 H207 Q211 145 211 150 V156 H162 Z',palette.pad)
   +torso(...hip,85)+head(223,123,65)
   +arm({x:201,y:135,upper:27,lower:26,a:[0,0],bend:[-75,-75]})
   +line('M222 170 H240 M232 170 V212',palette.metal,5)
   +bone(hips,knees,10,palette.muscle)+bone(knees,feet,7,palette.skin)
   +moving(feet,shape('M-5-5 L3-4 L7 1 L5 10 L-7 10 L-8 2 Z',palette.skin))
   +`<path d="${paths[0]}" fill="none" stroke="#a5a18c" stroke-width="5">${animation('d',paths)}</path>`
   +moving(feet,line('M-9 9 H5',palette.metal,5))+bolt(52,70,5);
 }

 if(['18','19','20','21','22','25','26','27','28'].includes(id)){
  const kind=({'25':'21','26':'19','27':'19','28':'22'})[id]||id;
  const cable=id==='27'||id==='28', freeRow=id==='28', lat=id==='26'||id==='27';
  const pull=['18','19','22'].includes(kind),overhead=kind==='21';
  const hip=[112,155],lean=lat?-5:freeRow?0:pull?5:-12;
  const bodyPoint=(x,y)=>[hip[0]+x*Math.cos(lean*Math.PI/180)-y*Math.sin(lean*Math.PI/180),hip[1]+x*Math.sin(lean*Math.PI/180)+y*Math.cos(lean*Math.PI/180)];
  const shoulder=bodyPoint(10,-60),headPos=bodyPoint(0,-83);
  const start=kind==='18'?[177,56]:kind==='19'?[141,31]:kind==='22'?[195,106]:kind==='21'?[140,77]:[139,109];
  const end=kind==='18'?[142,117]:kind==='19'?[145,96]:kind==='22'?[143,115]:kind==='21'?[119,28]:[177,101];
  const hands=phases.map(p=>[start[0]+(end[0]-start[0])*p,start[1]+(end[1]-start[1])*p]);
  const upper=36,lower=35;
  const angles=hands.map(([x,y])=>{
   const dx=x-shoulder[0],dy=y-shoulder[1],length=lower+4;
   const bend=-Math.acos(Math.max(-1,Math.min(1,(dx*dx+dy*dy-upper*upper-length*length)/(2*upper*length))));
   return [(Math.atan2(-dx,dy)-Math.atan2(length*Math.sin(bend),upper+length*Math.cos(bend)))*180/Math.PI,bend*180/Math.PI];
  });
  const spec={x:shoulder[0],y:shoulder[1],upper,lower,aValues:angles.map(a=>a[0]),bendValues:angles.map(a=>a[1]),focus:pull?'biceps':overhead?'shoulder':'triceps'};
  const pivot=cable?(freeRow?[245,153]:[145,14]):kind==='22'?[230,165]:pull?[229,38]:overhead?[84,115]:[85,35];
  const leverValues=hands.map(h=>`M${pivot.join(' ')} L${h.map(number).join(' ')}`);
  const support=(lat||freeRow)?'':pull
   ?line('M150 212 V110 M150 166 H112',palette.metal,6)+translate(hip,null,rotate(lean,lean,shape('M19-59 H29 V-22 H19 Z',palette.pad)))
   :line('M77 212 V80 M77 97 H92 M77 181 L106 154',palette.metal,6)+translate(hip,null,rotate(lean,lean,shape('M-26-74 H-17 V7 H-26 Z',palette.pad)));
  const thighPad=(kind==='18'||kind==='19')?shape('M137 149 H165 V158 H137 Z',palette.pad)+line('M163 154 V210',palette.metal,4):'';
  // Long bench and full-height weight tower distinguish the cable row from a seated lever row.
  const rowFrame=line('M37 212 H279 M52 212 V161 M133 212 V161 M53 178 H241 M240 212 V25 H274 V212',palette.metal,6)
   +shape('M244 29 H270 V193 H244 Z',palette.pad)
   +line('M249 41 V181 M265 41 V181','#899a8c',2)
   +Array.from({length:10},(_,i)=>line('M248 '+(111+i*7)+' H267','#899a8c',2)).join('')
   +shape('M35 151 H145 Q150 151 150 157 V163 H35 Q31 157 35 151 Z',palette.pad)
   +line('M183 210 L200 172',palette.metal,7);
  art=(freeRow?rowFrame:line(id==='27'?'M60 212 H253 M235 212 V14 H145':`M60 212 H253 M${pivot[0]} 212 V${pivot[1]}`,palette.metal,6)+seat)+support
   +`<path d="${leverValues[0]}" fill="none" stroke="#899a8c" stroke-width="${cable?1.6:4}">${animation('d',leverValues)}</path>`+bolt(...pivot,cable?7:4)
   +(freeRow?line('M192 211 L209 173',palette.metal,7)+leg([110,155],[159,157],[190,194],.4,-66)+leg([114,156],[161,160],[192,195],1,-66):leg([110,155],[148,167],[160,203],.4)+leg([114,156],[154,165],[172,203]))+thighPad
   +arm({...spec,opacity:.3,x:shoulder[0]-3,y:shoulder[1]-2})+torso(...hip,lean,pull?'back':overhead?'':'chest')+head(...headPos,lean)+arm(spec)
   +'<text x="242" y="193" fill="#aeb8ac" font-size="9" text-anchor="middle">측면 도식</text>';
 }

 if(['09','10','12'].includes(id)){
  const hip=[120,154],lean=-15;
  const bodyPoint=(x,y)=>[hip[0]+x*Math.cos(lean*Math.PI/180)-y*Math.sin(lean*Math.PI/180),hip[1]+x*Math.sin(lean*Math.PI/180)+y*Math.cos(lean*Math.PI/180)];
  const shoulder=bodyPoint(10,-60),headPos=bodyPoint(0,-83);
  // Decline is a chest press: drive forward from the lower chest, with only a slight downward angle.
  const start=id==='12'?[139,104]:[145,98];
  const end=id==='10'?[163,51]:id==='12'?[182,108]:[181,108];
  const upper=36,lower=35;
  const hands=phases.map(p=>[start[0]+(end[0]-start[0])*p,start[1]+(end[1]-start[1])*p]);
  const angles=hands.map(([x,y])=>{
   const dx=x-shoulder[0],dy=y-shoulder[1],length=lower+4;
   const bend=-Math.acos(Math.max(-1,Math.min(1,(dx*dx+dy*dy-upper*upper-length*length)/(2*upper*length))));
   return [(Math.atan2(-dx,dy)-Math.atan2(length*Math.sin(bend),upper+length*Math.cos(bend)))*180/Math.PI,bend*180/Math.PI];
  });
  // Place the press axis on the ear/chest line, behind the athlete rather than in front.
  const axisX=number(headPos[0]);
  const pivot=[axisX,id==='10'?104:35];
  const leverValues=hands.map(h=>`M${pivot.join(' ')} L${h.map(number).join(' ')}`);
  const pressing={x:shoulder[0],y:shoulder[1],upper,lower,aValues:angles.map(a=>a[0]),bendValues:angles.map(a=>a[1]),focus:'triceps'};
  // Rear upright and diagonal brace visibly support the back pad and share the floor base.
  const backSupport=line('M62 212 H217 M72 210 V72 M72 82 H88 M72 139 L105 148 M72 177 L101 150',palette.metal,6)
   +line('M82 78 L103 151','#899a8c',5)+bolt(72,82)+bolt(72,139);
  art=backSupport+line(`M${axisX} 212 V${pivot[1]} M72 177 H${axisX}`,palette.metal,6)+seat
   +shape('M86 79 L94 76 L115 151 L103 154 Z',palette.pad)
   +`<path d="${leverValues[0]}" fill="none" stroke="#899a8c" stroke-width="4">${animation('d',leverValues)}</path>`+bolt(...pivot,4)
   +leg([118,155],[151,165],[162,203],.45)+leg([122,156],[159,164],[173,203])
   +arm({...pressing,x:shoulder[0]-3,y:shoulder[1]-2,opacity:.35})
   +torso(...hip,lean,'chest')+head(...headPos,lean)+arm(pressing)
   +'<text x="232" y="192" fill="#aeb8ac" font-size="10" text-anchor="middle">측면 도식</text>';
 }
 if(id==='11'){
  const hip=[120,154],lean=-15,shoulder=[114,94];
  const pulling={x:shoulder[0],y:shoulder[1],upper:36,lower:34,a:[-160,-8],bend:[-70,-70],focus:'assist'};
  const pad=shape('M-12 30 H10 V42 H-12 Z',palette.pad)+line('M0 0 V36',palette.metal,4);
  art=seat+line('M78 211 V94 H114',palette.metal,6)
   +shape('M86 79 L94 76 L115 151 L103 154 Z',palette.pad)
   +seatedLegs()+torso(...hip,lean,'back')+head(98.5,73.8,lean)
   +translate(shoulder,null,rotate(-160,-8,pad))+arm(pulling)+bolt(...shoulder,3)
   +'<text x="220" y="173" fill="#d8c7a6" font-size="10" text-anchor="middle">팔꿈치 패드</text>';
 }
 if(id==='08-pull'||id==='08-dip'){
  const pull=id==='08-pull';
  const shift=pull?-34:24,hip=pull?145:132,ankle=pull?198:184;
  const shoulder=[147,hip-60],hand=pull?[165,20]:[166,132],upper=34,lower=34;
  // Hands remain on fixed handles while body, feet and assistance platform travel together.
  const angles=phases.map(p=>{
   const dx=hand[0]-shoulder[0],dy=hand[1]-(shoulder[1]+shift*p),length=lower+4;
   const bend=-Math.acos(Math.max(-1,Math.min(1,(dx*dx+dy*dy-upper*upper-length*length)/(2*upper*length))));
   const angle=Math.atan2(-dx,dy)-Math.atan2(length*Math.sin(bend),upper+length*Math.cos(bend));
   return [angle*180/Math.PI,bend*180/Math.PI];
  });
  const platform=shape(`M119 ${ankle+10} H176 V${ankle+16} H119 Z`,palette.pad)+line(`M176 ${ankle+13} H222`,palette.metal,5);
  const body=leg([134,hip],[137,hip+28],[143,ankle],.45)+leg([137,hip],[147,hip+28],[152,ankle])
   +torso(135,hip,0,pull?'back':'chest')+head(135,hip-83);
  art=line('M208 222 H240 M222 222 V14 M222 14 H159',palette.metal,6)
   +line(pull?'M154 20 H179':'M157 132 H192 M192 132 H222','#adb4a5',5)
   +line('M222 42 V202','#96a392',1)
   +translate([0,0],[0,shift],platform+body)
   +arm({x:shoulder[0],y:shoulder[1],to:[shoulder[0],shoulder[1]+shift],upper,lower,aValues:angles.map(a=>a[0]),bendValues:angles.map(a=>a[1]),focus:pull?'biceps':'triceps'})
   +'<text x="79" y="206" fill="#d8c7a6" font-size="10" text-anchor="middle">발판 보조</text>';
 }

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
  art=line('M65 211 H216 M80 207 L89 140 M89 140 L112 211',palette.metal,6)
   +line('M194 175 L138 107','#99a69d',4)
   +translate(hands[0],hands[16],carriage)
   +shape('M84 120 Q87 117 92 120 L103 151 Q104 155 98 158 L92 159 L81 127 Q80 123 84 120 Z',palette.pad)
   +line('M89 141 H61','#d8c7a6',1)
   +'<text x="52" y="130" fill="#d8c7a6" font-size="10" text-anchor="middle">엉덩이 지지</text>'
   +line('M133 212 L174 204','#899a8c',5)
   +leg([112,146],[128,175],[143,201],.5)+leg([111,146],[137,173],[153,200])
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
