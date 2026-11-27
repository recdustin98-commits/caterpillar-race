// Penguin jump (redesign, Nov 27): flat start → downhill in-run (spinning always adds speed, more for faster spinning)
// → take-off → free flight (each TAP = wing flap that slightly slows the fall; there is always a minimum sink, so you always land)
// → landing slope → belly slide that only friction stops. Distance = where the penguin stops, measured from the lip, in feet.
(()=>{
'use strict';
const B=()=>window.CRB||{};
const S=n=>{try{const f=B().sfx&&B().sfx[n];f&&f()}catch(e){}};
const vib=ms=>{try{B().buzz&&B().buzz(ms)}catch(e){}};
const st={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const TAU=Math.PI*2,clamp=(v,a,b)=>v<a?a:v>b?b:v;
// physics (feet, seconds of game time). Nov 27 (Dustin, round 4): in-run drop section 2.25x longer (540 ft, drop 450 ft), 120-ft take-off
// ramp curving up to 20°, low friction (rolling 0.005 g, air drag 0.0006), spin boost 0.24 ft/s² per RPM. Landing hill shaped like a real
// ski-jump hill: a knoll easing from 0.15 to a steep 0.6 slope (31°) by 150 ft, steep to 5,000 ft (was 3,000: long flights landed on the flat), then a 1,200-ft curve into a flat
// outrun; belly slide μ 0.2. SCORE = flight distance (lip → landing point), like real ski jumping; the slide is just for fun.
// Game runs 2x faster on screen (TIME=2). Simulated flight (no flaps → flapping all the way):
// Flap effect halved Nov 27 (fall speed ×0.96 per flap, was ×0.92). Simulated flight, no flaps → ~7 taps/s → max-rate tapping:
// 0 RPM ≈ 660 / 750 / 960 ft, 150 ≈ 1,830 / 2,210 / 3,230, 300 ≈ 2,600 / 3,160 / 4,570, 450 ≈ 3,180 / 3,870 / 5,450. Tap during the slide to skip it.
const TIME=2,F0=60,DL=540,RAMP=120,G=32,LIP=F0+DL+RAMP,DROP=450,KICK=20*Math.PI/180,S0=0.15,KNOLL=150,SL=0.6,LHILL=5000,LBEND=1200,MU=0.2,ROLL=0.005,DRAG=0.0006,KSPIN=0.24,FLAP=0.96,MINSINK=40,FLAPGAP=0.125,END=LIP+30000;
const RB=F0+DL,TK=Math.tan(KICK),LTOP=-DROP+TK*RAMP/2;
const inrun=x=>x<=F0?0:x<=RB?-DROP*(1-Math.cos(Math.PI*(x-F0)/DL))/2:x<=LIP?-DROP+TK*(x-RB)*(x-RB)/(2*RAMP):LTOP;
const lslope=d=>d<0?0:d<KNOLL?S0+(SL-S0)*(1-Math.cos(Math.PI*d/KNOLL))/2:d<LHILL?SL:d<LHILL+LBEND?SL*(1+Math.cos(Math.PI*(d-LHILL)/LBEND))/2:0;
const LN=Math.ceil((END-LIP)/2)+2,LT=(()=>{const t=new Float64Array(LN+1);t[0]=LTOP-12;for(let i=1;i<=LN;i++)t[i]=t[i-1]-lslope((i-0.5)*2)*2;return t})();
const land=x=>{const d=x-LIP;if(d<0)return LTOP;const f=Math.min(d/2,LN-1),i=Math.floor(f);return LT[i]+(LT[i+1]-LT[i])*(f-i)};
const hill=x=>x<=LIP?inrun(x):land(x);
const slope=(f,x)=>(f(x+0.5)-f(x-0.5));
const best=()=>{try{return +JSON.parse(st.get('cr-ski')||'{}').ft||0}catch(e){return 0}};
const css=`#pjL{position:fixed;inset:0;z-index:1001;display:none;background:#cfe8fb;touch-action:none;user-select:none;-webkit-user-select:none}
#pjL canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none}
#pjU{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:12px;pointer-events:none}
#pjU .ap{pointer-events:auto;background:var(--card,#fff);color:var(--ink,#10301f);border-radius:20px;padding:16px 18px;width:min(420px,100%);max-height:100%;overflow-y:auto;box-shadow:0 14px 40px rgba(0,40,60,.3);text-align:center;font-family:"Baloo 2",system-ui,sans-serif;position:relative}
#pjU h2{margin:4px 0;font-size:28px;color:var(--title,#1f5f9a)}#pjU p{margin:6px 0;font-size:16px;line-height:1.3}#pjU ol{text-align:left;font-size:16px;margin:6px 0;padding-left:22px}
#pjU .big{font:800 46px "Baloo 2",system-ui;color:#1f5f9a;margin:2px 0}
#pjU .ab{display:block;width:100%;min-height:52px;border:0;border-radius:14px;background:#ff8a2a;color:#2a1200;font:800 21px "Baloo 2",system-ui,sans-serif;margin-top:10px;cursor:pointer;box-shadow:0 4px 0 #c45a0c}
#pjU .ab.g{background:#4fa3e0;color:#fff;box-shadow:0 4px 0 #2f6f9a}#pjU .row2{display:flex;gap:8px}#pjU .row2 .ab{flex:1}
#pjU .opt{display:flex;align-items:center;justify-content:center;gap:6px;margin:6px 0}#pjU .opt span{font-weight:800;font-size:14px;width:96px;text-align:right}#pjU .opt button{border:0;border-radius:10px;padding:7px 10px;font:800 14px "Baloo 2",system-ui;background:#e8f2fb;color:#1f5f9a;cursor:pointer}#pjU .opt button.on{background:#ffd23f;color:#2a1200}
#pjU .x{position:absolute;left:10px;top:10px;border:0;background:#e8f2fb;border-radius:12px;width:44px;height:44px;font-size:22px;cursor:pointer}`;
(()=>{const s=document.createElement('style');s.textContent=css;document.head.appendChild(s)})();
let L,cv,g,U,W,H,dpr=1,on=false,raf=0,last=0,P=null,scr='intro';
// test options (Dustin, Nov 27: "put options here too so I can judge"): camera distance and speed effects, saved on the phone
const VIEWS=[[220,'Close'],[380,'Medium'],[700,'Far']],FXS=['Off','On','Max'];
let VIEW=+(st.get('pj-view')??0)||0,FX=st.get('pj-fx')==null?1:+st.get('pj-fx')||0,lines=[],snow=[],camZ=1;
const optHtml=()=>`<div class="opt"><span>Camera</span>${VIEWS.map((v,i)=>`<button class="${i===VIEW?'on':''}" data-a="view" data-v="${i}">${v[1]}</button>`).join('')}</div>
  <div class="opt"><span>Speed effects</span>${FXS.map((v,i)=>`<button class="${i===FX?'on':''}" data-a="fx" data-v="${i}">${v}</button>`).join('')}</div>`;
function mount(){if(L)return;L=document.createElement('div');L.id='pjL';L.innerHTML='<canvas></canvas><div id="pjU"></div>';document.body.appendChild(L);
  cv=L.querySelector('canvas');g=cv.getContext('2d');U=L.querySelector('#pjU');addEventListener('resize',size);size();
  cv.addEventListener('pointerdown',down);cv.addEventListener('pointermove',move);['pointerup','pointercancel'].forEach(e=>cv.addEventListener(e,up));
  addEventListener('keydown',e=>{if(on&&(e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault();tap()}});
  U.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;S('tap');const a=b.dataset.a;if(a==='view'||a==='fx'){if(a==='view'){VIEW=+b.dataset.v;st.set('pj-view',VIEW)}else{FX=+b.dataset.v;st.set('pj-fx',FX)}b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));return}if(a==='go')start();if(a==='home')close();if(a==='board'){close();try{B().board&&B().board()}catch(err){}}})}
function size(){if(!cv)return;dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr}
function open(){mount();on=true;L.style.display='block';size();intro();if(!raf){last=performance.now();raf=requestAnimationFrame(tick)}}
function close(){on=false;L.style.display='none';cancelAnimationFrame(raf);raf=0;P=null;try{B().home&&B().home()}catch(e){}}
// ---------- input: circle spinning (RPM) + taps ----------
let fp=null;
function down(e){cv.setPointerCapture&&cv.setPointerCapture(e.pointerId);fp={x:e.clientX,y:e.clientY,cx:e.clientX,cy:e.clientY,pa:null,id:e.pointerId};tap()}
function move(e){if(!fp||e.pointerId!==fp.id||!P)return;const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];for(const v of(evs.length?evs:[e])){
  fp.cx+=(v.clientX-fp.cx)*0.07;fp.cy+=(v.clientY-fp.cy)*0.07;const dx=v.clientX-fp.cx,dy=v.clientY-fp.cy;if(dx*dx+dy*dy<144){fp.pa=null;continue}
  const a=Math.atan2(dy,dx);if(fp.pa!=null){let d=a-fp.pa;if(d>Math.PI)d-=TAU;if(d<-Math.PI)d+=TAU;if(Math.abs(d)<1.3)P.acc+=Math.abs(d)}fp.pa=a;P.fa=a}}
function up(e){if(fp&&e.pointerId===fp.id)fp=null}
function tap(){if(!P||scr!=='play')return;if(P.ph==='slide'&&P.t-P.landT>1.5){P.v=0;P.ph='stop';done();return}if(P.ph==='air'&&P.flapCd<=0){P.flapCd=FLAPGAP;P.flaps++;P.wing=1;if(P.vy<-MINSINK)P.vy=Math.min(P.vy*FLAP,-MINSINK);S('puff')}}
// ---------- run ----------
function start(){scr='play';U.innerHTML='';lines=[];snow=[];camZ=1;P={ph:'count',cnt:3,ct:0,x:0,y:0,v:15,vx:0,vy:0,acc:0,rpm:0,fa:-Math.PI/2,top:0,flaps:0,flapCd:0,wing:0,lipV:0,flightFt:0,t:0,trail:[]};S('beep')}
// real-time part: finger RPM with the same 'Light' feel as every race (0.5 s up, 1.5 s down) and the 3-2-1 countdown
function realP(dt){const p=P,inst=dt>0?p.acc/dt*60/TAU:0;p.acc=0;const ti=Math.min(520,inst);p.rpm+=(ti-p.rpm)*(1-Math.exp(-dt/(ti>p.rpm?0.5:1.5)));
  if(p.ph==='count'){p.ct+=dt;if(p.ct>=1){p.ct=0;p.cnt--;S(p.cnt?'beep':'go');if(!p.cnt)p.ph='run'}}}
function stepP(dt){const p=P;p.t+=dt;p.flapCd-=dt;p.wing=Math.max(0,p.wing-dt*5);
  if(p.ph==='run'){const th=Math.atan(slope(inrun,p.x)),a=-G*Math.sin(th)+KSPIN*p.rpm-DRAG*p.v*p.v-ROLL*G;p.v=Math.max(2,p.v+a*dt);p.x+=p.v*Math.cos(th)*dt;p.y=inrun(p.x);p.top=Math.max(p.top,p.rpm);
    if(p.x>=LIP){p.ph='air';p.lipV=p.v;p.vx=p.v*Math.cos(KICK);p.vy=p.v*Math.sin(KICK);p.y=inrun(LIP);S('whoosh');vib(60)}}
  else if(p.ph==='air'){p.vy-=G*dt;p.vx-=DRAG*p.vx*p.vx*dt*0.5;p.x+=p.vx*dt;p.y+=p.vy*dt;p.trail.push([p.x,p.y]);if(p.trail.length>400)p.trail.shift();
    if(p.y<=land(p.x)){p.ph='slide';p.landT=p.t;p.flightFt=Math.round(p.x-LIP);const th=Math.atan(slope(land,p.x));p.v=Math.max(0,p.vx*Math.cos(th)+p.vy*Math.sin(th));p.y=land(p.x);S('puff');vib(90)}}
  else if(p.ph==='slide'){const th=Math.atan(slope(land,p.x)),a=-G*Math.sin(th)-MU*G*Math.cos(th)-DRAG*p.v*p.v;p.v+=a*dt;if(p.v<=0||p.x>END){p.v=0;p.ph='stop';done()}else{p.x+=p.v*Math.cos(th)*dt;p.y=land(p.x)}}}
function dist(){return !P?0:P.ph==='slide'||P.ph==='stop'?P.flightFt:Math.max(0,Math.round(P.x-LIP))} // score = flight distance
function done(){const ft=dist(),b=best(),nb=ft>b;if(nb)st.set('cr-ski',JSON.stringify({s:0,ft}));S(nb?'winBig':'win');
  try{B().submitJump&&ft>0&&B().submitJump(ft,Math.round(P.top))}catch(e){}
  setTimeout(()=>{if(!on)return;scr='result';U.innerHTML=`<div class="ap"><h2>🐧 ${nb?'NEW BEST!':'Nice jump!'}</h2><div class="big">${ft.toLocaleString('en-US')} ft</div>
  <p>Slide ${Math.max(0,Math.round(P.x-LIP-P.flightFt)).toLocaleString('en-US')} ft · take-off ${Math.round(P.lipV*0.6818)} mph · top spin ${Math.round(P.top)} RPM · ${P.flaps} flaps</p>
  <p><b>Best: ${Math.max(b,ft).toLocaleString('en-US')} ft</b></p>
  ${optHtml()}<button class="ab" data-a="go">🎿 Jump again</button><div class="row2"><button class="ab g" data-a="board">🏆 Leaderboard</button><button class="ab g" data-a="home">🏠 Home</button></div></div>`},900)}
function intro(){scr='intro';P=null;const b=best();U.innerHTML=`<div class="ap"><button class="x" data-a="home" aria-label="Home">🏠</button><h2>🎿 Penguin jump</h2>
  <ol><li>Belly down! <b>Spin circles</b> as fast as you can on the downhill — faster spinning = more speed.</li><li>After the take-off, <b>TAP TAP TAP</b> to flap your wings and fall slower.</li><li>Your score = <b>how far you fly</b>. Then slide on your belly to the bottom.</li></ol>
  ${b?`<p><b>Your best: ${b.toLocaleString('en-US')} ft</b></p>`:''}${optHtml()}<button class="ab" data-a="go">▶ Jump!</button></div>`}
// ---------- drawing ----------
function tick(now){raf=requestAnimationFrame(tick);if(!on)return;const dt=Math.min(0.05,(now-last)/1000);last=now;
  if(P&&scr==='play'){realP(dt);if(P.ph!=='count'){let k=dt*TIME;while(k>0&&P&&P.ph!=='stop'){const h=Math.min(1/120,k);stepP(h);k-=h}}}
  draw(now)}
function draw(now){g.setTransform(dpr,0,0,dpr,0,0);const p=P,px=p?p.x:200,py=p?p.y:inrun(200);
  const sk=g.createLinearGradient(0,0,0,H);sk.addColorStop(0,'#8fc7f0');sk.addColorStop(1,'#e8f4fd');g.fillStyle=sk;g.fillRect(0,0,W,H);
  // zoomed-out view that follows the penguin (about 700 ft across)
  const spd=p?(p.ph==='air'?Math.hypot(p.vx,p.vy):p.v):0,vw=VIEWS[VIEW][0];camZ+=((1+Math.min(0.35,spd/600))-camZ)*0.05;
  const sc=Math.min(W/(vw*camZ),H/(vw*camZ*0.75)),sh=FX===2&&spd>110&&p&&p.ph!=='stop'?Math.min(4,(spd-110)/25):0,shx=(Math.random()-.5)*sh*2,shy=(Math.random()-.5)*sh*2;
  const cx=W*0.33+shx,cy=H*0.5+shy,X=x=>cx+(x-px)*sc,Y=y=>cy-(y-py)*sc;
  g.fillStyle='rgba(255,255,255,.6)';for(let i=0;i<6;i++){const x=((i*260-px*0.15*sc)%(W+300)+W+300)%(W+300)-150;g.beginPath();g.arc(x,80+(i%3)*40,24,0,TAU);g.arc(x+26,72+(i%3)*40,30,0,TAU);g.arc(x+56,82+(i%3)*40,22,0,TAU);g.fill()}
  const x0=px-cx/sc-20,x1=px+(W-cx)/sc+20;g.fillStyle='#ffffff';g.beginPath();g.moveTo(X(x0),H);for(let x=x0;x<=x1;x+=4)g.lineTo(X(x),Y(hill(x)));g.lineTo(X(x1),H);g.fill();
  // snow texture marks every 12 ft so the ground visibly rushes past
  g.strokeStyle='rgba(150,190,220,.55)';g.lineWidth=2;for(let x=Math.floor(x0/12)*12;x<x1;x+=12){const h=hill(x),k=((x*7919)%13)/13;g.beginPath();g.moveTo(X(x),Y(h)+4+k*10);g.lineTo(X(x+5),Y(hill(x+5))+4+k*10);g.stroke()}
  g.fillStyle='rgba(160,200,230,.5)';for(let x=Math.floor(x0/40)*40;x<x1;x+=40){const k=((x*104729)%17)/17;g.beginPath();g.ellipse(X(x+k*20),Y(hill(x+k*20))+18+k*30,6+k*8,2,0,0,TAU);g.fill()}
  g.strokeStyle='#9cc6e6';g.lineWidth=3;g.beginPath();for(let x=x0;x<=x1;x+=4){const y=Y(hill(x));x===x0?g.moveTo(X(x),y):g.lineTo(X(x),y)}g.stroke();
  // take-off ramp (last 120 ft, curves up to 8°): blue ice surface
  if(RB<x1&&LIP>x0){g.strokeStyle='#4fa3e0';g.lineWidth=5;g.beginPath();for(let x=RB;x<=LIP;x+=3){x===RB?g.moveTo(X(x),Y(inrun(x))):g.lineTo(X(x),Y(inrun(x)))}g.stroke()}
  // take-off lip + start flag
  g.fillStyle='#e0402f';g.fillRect(X(LIP)-3,Y(inrun(LIP))-26,6,26);g.font='800 13px "Baloo 2",system-ui';g.textAlign='center';g.fillText('TAKE OFF',X(LIP),Y(inrun(LIP))-32);
  g.fillStyle='#ff8a2a';g.fillRect(X(30)-2,Y(0)-30,4,30);g.beginPath();g.moveTo(X(30)+2,Y(0)-30);g.lineTo(X(30)+22,Y(0)-24);g.lineTo(X(30)+2,Y(0)-18);g.fill();
  // distance boards every 250 ft and the best flag
  g.font='800 12px "Baloo 2",system-ui';for(let f=500;f<=10000;f+=500){const x=LIP+f;if(x<x0||x>x1)continue;const y=Y(land(x));g.fillStyle='#7a5530';g.fillRect(X(x)-1.5,y-24,3,24);g.fillStyle='#fff';g.strokeStyle='#14301f';g.lineWidth=1.5;rr(X(x)-30,y-42,60,18,5);g.fill();g.stroke();g.fillStyle='#14301f';g.fillText(f.toLocaleString('en-US')+' ft',X(x),y-29)}
  const b=best();if(b){const x=LIP+b;if(x>x0&&x<x1){const y=Y(land(x));g.fillStyle='#7a3cff';g.fillRect(X(x)-1.5,y-50,3,50);g.beginPath();g.moveTo(X(x)+1.5,y-50);g.lineTo(X(x)+26,y-43);g.lineTo(X(x)+1.5,y-36);g.fill();g.textAlign='left';g.fillText('BEST',X(x)+4,y-54)}}
  if(p){g.strokeStyle='rgba(255,255,255,.8)';g.setLineDash([4,6]);g.lineWidth=2;g.beginPath();p.trail.forEach(([x,y],i)=>i?g.lineTo(X(x),Y(y)):g.moveTo(X(x),Y(y)));g.stroke();g.setLineDash([])}
  if(p&&FX>0)speedFx(p,spd,X(px),Y(py),now);
  // penguin (drawn a little bigger than true scale so you can see it)
  const ang=p?(p.ph==='air'?Math.atan2(p.vy,p.vx):p.ph==='run'||p.ph==='count'?Math.atan(slope(inrun,px)):Math.atan(slope(land,px))):0;penguin(X(px),Y(py),-ang,p,now);
  minimap(p);hud(p,now)}
function rr(x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
function penguin(x,y,a,p,now){g.save();g.translate(x,y);g.rotate(a);const s=1.15,ph=p?p.ph:'run',air=ph==='air';
  // belly-down pose: on the downhill (tobogganing), in the air (streamlined, wings out) and in the slide
  const lift=air?-6:0;g.translate(0,lift);
  g.fillStyle='#ffa72a';g.beginPath();g.ellipse(-17*s,-4*s,4*s,2*s,0.3,0,TAU);g.fill();g.beginPath();g.ellipse(-17*s,-1*s,4*s,2*s,-0.2,0,TAU);g.fill();
  g.fillStyle='#1d2733';g.beginPath();g.ellipse(0,-7*s,17*s,7.5*s,0,0,TAU);g.fill();
  g.fillStyle='#fff';g.beginPath();g.ellipse(1*s,-3.5*s,13*s,4*s,0,0,TAU);g.fill();
  const flap=p&&p.wing>0?p.wing:0,wa=air?(-0.9-flap*1.2+Math.sin(now/70)*0.12):0.15;
  g.save();g.translate(-2*s,-9*s);g.rotate(wa);g.fillStyle='#2a3642';g.beginPath();g.ellipse(-6*s,-2*s,11*s,3*s,0,0,TAU);g.fill();g.restore();
  g.fillStyle='#1d2733';g.beginPath();g.arc(15*s,-9*s,6.5*s,0,TAU);g.fill();
  g.fillStyle='#ffa72a';g.beginPath();g.moveTo(20*s,-10*s);g.lineTo(27*s,-8.5*s);g.lineTo(20*s,-7*s);g.fill();
  g.fillStyle='#fff';g.beginPath();g.arc(17*s,-11*s,2.3*s,0,TAU);g.fill();g.fillStyle='#123';g.beginPath();g.arc(17.8*s,-11*s,1.2*s,0,TAU);g.fill();
  if(ph==='run'||ph==='slide'){g.strokeStyle='rgba(255,255,255,.9)';g.lineWidth=2;g.beginPath();g.moveTo(-20*s,1*s);g.lineTo(-30*s,0);g.stroke()}
  g.restore()}
function speedFx(p,spd,px,py,now){const k=FX===2?1.8:1,n=Math.min(60,Math.floor(spd/6*k));
  // speed lines streaming past (more and longer the faster you go)
  while(lines.length<n)lines.push({x:Math.random()*W,y:Math.random()*H,l:0.5+Math.random()});lines.length=Math.min(lines.length,n);
  const ang=p.ph==='air'?Math.atan2(-p.vy,p.vx):Math.atan2(-(p.ph==='run'||p.ph==='count'?slope(inrun,p.x):slope(land,p.x)),1),dx=Math.cos(ang),dy=Math.sin(ang),len=spd*0.5*k;
  g.strokeStyle=`rgba(255,255,255,${Math.min(0.75,spd/250)})`;g.lineWidth=FX===2?2.5:1.6;
  for(const l of lines){l.x-=dx*spd*0.18*k;l.y-=dy*spd*0.18*k;if(l.x<-60||l.y<-60||l.y>H+60){l.x=W+Math.random()*80;l.y=Math.random()*H}
    g.beginPath();g.moveTo(l.x,l.y);g.lineTo(l.x+dx*len*l.l,l.y+dy*len*l.l);g.stroke()}
  // snow spray behind the belly on the ground
  if((p.ph==='run'||p.ph==='slide')&&spd>8){for(let i=0;i<Math.min(6,spd/20*k);i++)snow.push({x:px-18,y:py-2,vx:-(40+Math.random()*80)*k-spd*0.3,vy:-(20+Math.random()*90),t:0})}
  snow=snow.filter(q=>(q.t+=1/60)<0.7);g.fillStyle='rgba(255,255,255,.95)';for(const q of snow){q.x+=q.vx/60;q.y+=q.vy/60;q.vy+=260/60;g.beginPath();g.arc(q.x,q.y,1.5+FX,0,TAU);g.fill()}
  // vignette at high speed
  if(FX===2&&spd>120){const v=g.createRadialGradient(W/2,H/2,Math.min(W,H)*0.3,W/2,H/2,Math.max(W,H)*0.7);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,`rgba(10,40,80,${Math.min(0.35,(spd-120)/300)})`);g.fillStyle=v;g.fillRect(0,0,W,H)}}
function minimap(p){const mw=Math.min(W-24,360),mh=46,mx=(W-mw)/2,my=8;g.fillStyle='rgba(255,255,255,.75)';rr(mx,my,mw,mh,10);g.fill();
  const xs=-20,xe=LIP+LHILL+LBEND+1500,yt=10,yb=land(xe),fx=x=>mx+8+(x-xs)/(xe-xs)*(mw-16),fy=y=>my+6+(yt-y)/(yt-yb)*(mh-12);
  g.strokeStyle='#5d9fd0';g.lineWidth=2;g.beginPath();for(let x=xs;x<=xe;x+=40){const y=fy(hill(x));x===xs?g.moveTo(fx(x),y):g.lineTo(fx(x),y)}g.stroke();
  const b=best();if(b){g.fillStyle='#7a3cff';g.fillRect(fx(LIP+b)-1,my+4,2,mh-8)}
  if(p){g.fillStyle='#e0402f';g.beginPath();g.arc(fx(clamp(p.x,xs,xe)),fy(clamp(p.y,yb,yt)),4,0,TAU);g.fill()}}
// race-style dashboard (same look as the race gauges): speedometer (mph) + tachometer (RPM, red from 300, comet ring follows your finger)
const MAXMPH=300,MAXRPM=500,REDRPM=300;
function dial(cx,cy,R,frac,redFrac,col,num,unit,ringAng){const a0=Math.PI*.75,a1=Math.PI*2.25,ang=f=>a0+(a1-a0)*f,Ro=R+4,red=redFrac!=null&&frac>=redFrac;g.save();
  g.lineWidth=Math.max(3,R*.17);g.strokeStyle='#22262a';g.beginPath();g.arc(cx,cy,Ro,0,TAU);g.stroke();
  if(ringAng!=null){const rpm=frac*MAXRPM,zc=rpm>=REDRPM?'#ff3b30':rpm>=200?'#ffd23f':'#6fd14a',tail=Math.min(Math.PI*1.7,.25+rpm/300*Math.PI*1.2),head=ringAng-Math.PI/2,n=24,lw=Math.max(3,R*.17)*.8;
    g.lineCap='round';for(let i=0;i<n;i++){const a2=head-tail*i/n,b2=head-tail*(i+1)/n;g.strokeStyle=zc;g.globalAlpha=(1-i/n)*.95;g.lineWidth=lw*(1-i/n*.6);g.beginPath();g.arc(cx,cy,Ro,b2,a2);g.stroke()}g.globalAlpha=1;
    g.fillStyle='#fff';g.strokeStyle=zc;g.lineWidth=Math.max(1.5,R*.055);g.beginPath();g.arc(cx+Math.cos(head)*Ro,cy+Math.sin(head)*Ro,Math.max(3,R*.15),0,TAU);g.fill();g.stroke()}
  else{g.strokeStyle='#c9d3da';g.lineWidth=1;g.beginPath();g.arc(cx,cy,Ro,0,TAU);g.stroke()}
  g.fillStyle='rgba(10,22,16,.92)';g.beginPath();g.arc(cx,cy,R,0,TAU);g.fill();
  if(red&&Math.floor(performance.now()/120)%2){g.strokeStyle='#ff3b30';g.lineWidth=2;g.stroke()}
  const ar=R*.86,aw=Math.max(2.5,R*.12);g.lineCap='butt';g.lineWidth=aw;
  if(redFrac!=null){g.strokeStyle='#ff3b30';g.beginPath();g.arc(cx,cy,ar,ang(redFrac),a1);g.stroke()}
  const f=clamp(frac,0,1);if(f>0.002){g.strokeStyle=col;g.beginPath();g.arc(cx,cy,ar,a0,ang(redFrac!=null?Math.min(f,redFrac):f));g.stroke()}
  g.lineCap='round';g.strokeStyle='rgba(255,255,255,.55)';g.lineWidth=1.2;
  for(let i=0;i<=10;i++){const an=ang(i/10),r0=R*(i%5===0?.62:.68),r1=R*.74;g.beginPath();g.moveTo(cx+Math.cos(an)*r0,cy+Math.sin(an)*r0);g.lineTo(cx+Math.cos(an)*r1,cy+Math.sin(an)*r1);g.stroke()}
  const an=ang(f);g.strokeStyle='#ff8a2a';g.lineWidth=Math.max(2,R*.08);g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(an)*R*.72,cy+Math.sin(an)*R*.72);g.stroke();
  g.fillStyle='#ff8a2a';g.beginPath();g.arc(cx,cy,Math.max(2.5,R*.1),0,TAU);g.fill();
  g.textAlign='center';g.textBaseline='middle';g.fillStyle=red?'#ff6b5e':'#fff';g.font='800 '+Math.max(12,Math.round(R*.46))+'px "Baloo 2",system-ui';g.fillText(num,cx,cy+R*.5);
  g.fillStyle='#b9d0c1';g.font='700 '+Math.max(9,Math.round(R*.3))+'px "Baloo 2",system-ui';g.fillText(unit,cx,cy+R*.86);g.restore()}
function hud(p,now){if(!p)return;g.textAlign='center';g.textBaseline='alphabetic';const y0=72;
  const mph=(p.ph==='air'?Math.hypot(p.vx,p.vy):p.v)*0.6818,R=Math.round(clamp(W*0.085,28,40)),Ro=R+4+Math.max(3,R*.17)/2,tx=W-Ro-8,sx=tx-2*Ro-6,cy=62+Ro;
  dial(sx,cy,R,mph/MAXMPH,null,'#4fb3ff',String(Math.round(mph)),'mph',null);
  dial(tx,cy,R,p.rpm/MAXRPM,REDRPM/MAXRPM,'#6cc4ff',String(Math.round(p.rpm)),'RPM',p.fa+Math.PI/2);
  g.textBaseline='alphabetic';
  if(p.ph==='air'||p.ph==='slide'||p.ph==='stop'){const by=cy+Ro+10;g.fillStyle='rgba(20,40,60,.8)';rr(W/2-90,by,180,44,14);g.fill();g.fillStyle='#fff';g.font='800 24px "Baloo 2",system-ui';g.fillText(`${dist().toLocaleString('en-US')} ft`,W/2,by+31)}
  let msg='';if(p.ph==='count')msg=String(p.cnt);else if(p.ph==='run')msg='🌀 SPIN! SPIN! SPIN!';else if(p.ph==='air')msg='👆 TAP TAP TAP to flap!';else if(p.ph==='slide')msg='🐧 Wheee… (tap to skip)';
  if(msg){g.textAlign='center';g.font=p.ph==='count'?'800 90px "Baloo 2",system-ui':'800 28px "Baloo 2",system-ui';g.lineWidth=6;g.strokeStyle='rgba(255,255,255,.9)';const yy=p.ph==='count'?H*0.42:H-60;g.strokeText(msg,W/2,yy);g.fillStyle=p.ph==='air'?'#1f5f9a':'#c8461e';g.fillText(msg,W/2,yy)}
  // quit
  g.textAlign='center';g.fillStyle='rgba(20,40,60,.6)';rr(8,y0,44,44,12);g.fill();g.fillStyle='#fff';g.font='22px system-ui';g.fillText('✕',30,y0+30)}
addEventListener('pointerdown',e=>{if(!on||scr!=='play'||e.target!==cv)return;if(e.clientX<56&&e.clientY>=72&&e.clientY<=118){e.stopImmediatePropagation();P=null;intro()}},true);
window.PJ={open,close,_dbg:()=>({P,scr,start,tap,setRpm:r=>{if(P)P.acc+=r/60*TAU/60}})};
})();
