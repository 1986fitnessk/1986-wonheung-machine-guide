/* Original schematic artwork. Movement references are linked in each machine guide. */
const visualGuides={
 '01':{primary:['lats','midback'],secondary:['biceps','rearshoulder'],main:'광배근 · 중부 승모근 · 능형근',assist:'상완이두근 · 후면 삼각근',cue:'가슴은 패드에 · 팔꿈치는 뒤로',action:'당기기 → 천천히 펴기'},
 '02':{primary:['chest'],secondary:['shoulder'],main:'대흉근',assist:'전면 삼각근',cue:'팔꿈치 각도를 유지하며 가슴 앞으로',action:'모으기 → 천천히 벌리기'},
 '03':{primary:['shoulder'],secondary:['triceps'],main:'전면·측면 삼각근',assist:'상완삼두근',cue:'복부를 고정하고 손잡이를 위로',action:'밀어 올리기 → 천천히 내리기'},
 '04':{primary:['abs'],secondary:[],main:'복직근',assist:'복부 근육으로 몸통 안정',cue:'명치와 골반 사이를 좁히듯',action:'몸통 말기 → 천천히 돌아오기'},
 '05':{primary:['triceps'],secondary:[],main:'상완삼두근',assist:'위팔을 패드에 고정',cue:'팔꿈치 위치를 유지하며 펴기',action:'펴기 → 천천히 굽히기'},
 '06':{primary:['biceps'],secondary:[],main:'상완이두근',assist:'위팔을 패드에 고정',cue:'몸통은 그대로 · 팔꿈치만 굽히기',action:'굽히기 → 천천히 펴기'}
};
function muscleFigure(view,v){
 const color=k=>v.primary.includes(k)?'#de876e':v.secondary.includes(k)?'#d8c7a6':'#343a3b';
 const shape=(k,d)=>`<path d="${d}" fill="${color(k)}" stroke="#101818" stroke-width="1.2"/>`;
 let body='<circle cx="60" cy="20" r="12"/><path d="M53 32 L53 40 Q31 42 29 60 L21 101 L17 119 L25 123 L35 105 L41 77 L43 108 L39 140 L42 186 L53 186 L60 141 L67 186 L78 186 L81 140 L77 108 L79 77 L85 105 L95 123 L103 119 L99 101 L91 60 Q89 42 67 40 L67 32 Z"/>';
 let muscles='';
 if(view==='front'){
 muscles=shape('chest','M43 49 Q50 43 59 50 L59 67 Q49 72 40 62 Z')+shape('chest','M61 50 Q70 43 77 49 L80 62 Q71 72 61 67 Z')+shape('shoulder','M39 46 Q27 46 29 66 L39 63 L44 49 Z')+shape('shoulder','M81 46 Q93 46 91 66 L81 63 L76 49 Z')+shape('biceps','M30 68 L39 66 L35 91 Q26 96 27 86 Z')+shape('biceps','M81 66 L90 68 L93 86 Q94 96 85 91 Z');
 for(let y=72;y<103;y+=10)muscles+=shape('abs',`M50 ${y} h9 v8 h-9 Z M61 ${y} h9 v8 h-9 Z`);
 }else if(view==='back'){
 muscles=shape('midback','M59 40 L43 49 L51 66 L60 79 L69 66 L77 49 L61 40 L61 73 L59 73 Z')+shape('lats','M41 65 L50 70 L59 83 L56 106 L46 97 Z')+shape('lats','M79 65 L70 70 L61 83 L64 106 L74 97 Z')+shape('rearshoulder','M39 46 Q27 46 29 66 L40 61 L46 50 Z')+shape('rearshoulder','M81 46 Q93 46 91 66 L80 61 L74 50 Z')+shape('triceps','M30 68 L39 66 L35 94 L26 91 Z')+shape('triceps','M81 66 L90 68 L94 91 L85 94 Z');
 }else{
 body='<path d="M50 12 Q68 3 73 20 L78 25 L71 28 L69 36 L61 37 L61 43 Q77 48 73 74 L68 105 Q78 127 69 146 L65 180 L77 185 L76 190 L55 190 L52 146 L47 121 Q40 111 46 92 L44 65 Q42 49 53 42 L54 34 Q44 27 50 12 Z"/><path d="M58 51 Q70 50 68 68 L65 92 L75 117 L70 122 L57 97 L52 71 Z"/>';
 muscles=shape('shoulder','M55 48 Q70 46 69 63 L54 66 Q49 56 55 48 Z')+shape('biceps','M63 67 L69 65 L66 91 L61 94 Z')+shape('triceps','M53 67 L61 68 L59 94 L53 90 Z')+shape('chest','M71 51 L76 60 L72 76 L69 72 Z')+shape('abs','M70 78 L73 78 L68 102 L64 103 Z')+shape('lats','M45 68 L50 72 L51 99 L46 96 Z');
 }
 return `<svg viewBox="0 0 120 214" role="img" aria-label="${{front:'정면',side:'측면',back:'후면'}[view]} 사용 근육"><g fill="#242b2d" stroke="#87908d" stroke-width="1.3" stroke-linejoin="round">${body}</g>${muscles}<text x="60" y="210" text-anchor="middle" fill="#b9bcb5" font-size="10">${{front:'정면',side:'측면',back:'후면'}[view]}</text></svg>`;
}
function motionFigure(id){
 const animate=(a,b)=>`<animate attributeName="d" values="${a};${b};${a}" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".42 0 .58 1;.42 0 .58 1"/>`;
 const path=(a,b,stroke='#d8c7a6',width=9)=>`<path d="${a}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round">${b?animate(a,b):''}</path>`;
 const head=(x,y)=>`<circle cx="${x}" cy="${y}" r="13" fill="#c4c8c1"/>`;
 let art='';
 const seat=path('M88 157 H151 M106 157 V213 M75 213 H176',null,'#555f5f',7);
 if(id==='01')art=path('M85 210 L150 128 L177 146 M144 135 L166 97',null,'#555f5f',8)+head(169,65)+path('M156 85 L119 145 L96 174 L81 207')+path('M153 91 L169 126 L189 159','M153 91 L120 114 L150 136','#de876e')+path('M189 159 L97 211','M150 136 L97 211','#899692',4);
 if(id==='02')art=path('M109 120 H191 M150 120 V203',null,'#555f5f',8)+head(150,102)+path('M125 110 L175 110',null,'#c4c8c1',13)+path('M125 110 L83 97 L62 60','M125 110 L119 67 L140 29','#de876e')+path('M175 110 L217 97 L238 60','M175 110 L181 67 L160 29','#de876e')+'<text x="150" y="185" text-anchor="middle" fill="#aeb4af" font-size="12">위에서 본 모습</text>';
 if(id==='03')art=path('M252 210 V72',null,'#555f5f',7)+head(131,78)+path('M131 98 L126 151 L109 209 M126 151 L155 209')+path('M134 102 L158 129 L174 91','M134 102 L152 66 L174 29','#de876e')+path('M174 91 L252 72','M174 29 L252 72','#899692',4);
 if(id==='04')art=seat+path('M111 155 L151 158 L171 207')+`<g><animateTransform attributeName="transform" type="rotate" values="0 111 153;23 111 153;0 111 153" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".42 0 .58 1;.42 0 .58 1"/>${head(116,62)}${path('M115 82 Q105 113 111 148',null,'#de876e',12)}${path('M118 88 L138 113 L128 89',null,'#d8c7a6',7)}</g>`;
 if(id==='05'||id==='06'){
 const low='M155 118 L184 151',high='M155 118 L176 80';
 art=seat+path('M122 111 L171 128 M151 123 V154',null,'#555f5f',9)+head(109,59)+path('M108 79 L109 150 L154 157 L169 208')+path('M112 86 L155 118',null,id==='05'?'#de876e':'#d8c7a6')+path(id==='05'?high:low,id==='05'?low:high,'#de876e')+'<circle cx="155" cy="118" r="5" fill="#101111" stroke="#faf4e6" stroke-width="2"/>';
 }
 return `<svg class="motion-svg" viewBox="0 0 300 230" role="img" aria-label="${visualGuides[id].action} 동작 이해용 애니메이션">${path('M42 216 H266',null,'#343c3b',1)}${art}</svg>`;
}
function renderVisualGuide(m){const v=visualGuides[m.id];return `<section class="visual-guide" aria-label="사용 근육과 동작 안내"><div class="visual-heading"><p class="eyebrow">MUSCLE MAP</p><h3>어디에 힘이 들어가나요?</h3></div><div class="muscle-views">${['front','side','back'].map(view=>muscleFigure(view,v)).join('')}</div><div class="muscle-key"><p><i class="primary-dot"></i><strong>주요 근육</strong> ${v.main}</p>${v.secondary.length?`<p><i class="secondary-dot"></i><strong>보조 근육</strong> ${v.assist}</p>`:''}</div><p class="visual-footnote">주요 부위를 간략히 표시한 그림입니다. 자세와 손잡이에 따라 자극 부위가 달라집니다.</p><div class="motion-panel"><div class="motion-heading"><div><p class="eyebrow">MOVEMENT</p><h3>동작을 한눈에</h3></div><button type="button" id="motion-toggle" aria-pressed="false">일시정지</button></div>${motionFigure(m.id)}<p class="motion-action">${v.action}</p><p class="motion-cue">${v.cue}</p><p class="visual-footnote">동작 이해용 그림 · 실제 머신의 형태·이동 범위와는 차이가 있습니다.</p></div></section>`;}
function initMotion(){const svg=document.querySelector('.motion-svg'),button=document.querySelector('#motion-toggle');if(!svg||!button)return;let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;const update=()=>{paused?svg.pauseAnimations():svg.unpauseAnimations();button.textContent=paused?'재생':'일시정지';button.setAttribute('aria-pressed',String(paused));};button.onclick=()=>{paused=!paused;update();};update();}
