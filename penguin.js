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
// physics (feet, seconds) — tuned by simulation: 0 RPM ≈ 730 ft, 150 ≈ 1,350–1,550, 300 ≈ 1,750–2,350, 450 ≈ 2,100–3,000 (more with flapping)
const G=32,LIP=420,DROP=180,KICK=8*Math.PI/180,SLOPE=0.3,MU=0.55,DRAG=0.0006,KSPIN=0.12,FLAP=0.92,MINSINK=40,FLAPGAP=0.125,END=4600;
const inrun=x=>x<=60?0:x<=LIP?-DROP*(1-Math.cos(Math.PI*(x-60)/(LIP-60)))/2:-DROP;
const land=x=>x<LIP?-DROP:-DROP-12-SLOPE*(x-LIP);
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
#pjU .x{position:absolute;left:10px;top:10px;border:0;background:#e8f2fb;border-radius:12px;width:44px;height:44px;font-size:22px;cursor:pointer}`;
(()=>{const s=document.createElement('style');s.textContent=css;document.head.appendChild(s)})();
let L,cv,g,U,W,H,dpr=1,on=false,raf=0,last=0,P=null,scr='intro';
function mount(){if(L)return;L=document.createElement('div');L.id='pjL';L.innerHTML='<canvas></canvas><div id="pjU"></div>';document.body.appendChild(L);
  cv=L.querySelector('canvas');g=cv.getContext('2d');U=L.querySelector('#pjU');addEventListener('resize',size);size();
  cv.addEventListener('pointerdown',down);cv.addEventListener('pointermove',move);['pointerup','pointercancel'].forEach(e=>cv.addEventListener(e,up));
  addEventListener('keydown',e=>{if(on&&(e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault();tap()}});
  U.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;S('tap');const a=b.dataset.a;if(a==='go')start();if(a==='home')close();if(a==='board'){close();try{B().board&&B().board()}catch(err){}}})}
function size(){if(!cv)return;dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr}
function open(){mount();on=true;L.style.display='block';size();intro();if(!raf){last=performance.now();raf=requestAnimationFrame(tick)}}
function close(){on=false;L.style.display='none';cancelAnimationFrame(raf);raf=0;P=null;try{B().home&&B().home()}catch(e){}}
// ---------- input: circle spinning (RPM) + taps ----------
let fp=null;
function down(e){cv.setPointerCapture&&cv.setPointerCapture(e.pointerId);fp={x:e.clientX,y:e.clientY,cx:e.clientX,cy:e.clientY,pa:null,id:e.pointerId};tap()}
function move(e){if(!fp||e.pointerId!==fp.id||!P)return;const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];for(const v of(evs.length?evs:[e])){
  fp.cx+=(v.clientX-fp.cx)*0.07;fp.cy+=(v.clientY-fp.cy)*0.07;const dx=v.clientX-fp.cx,dy=v.clientY-fp.cy;if(dx*dx+dy*dy<144){fp.pa=null;continue}
  const a=Math.atan2(dy,dx);if(fp.pa!=null){let d=a-fp.pa;if(d>Math.PI)d-=TAU;if(d<-Math.PI)d+=TAU;if(Math.abs(d)<1.3)P.acc+=Math.abs(d)}fp.pa=a}}
function up(e){if(fp&&e.pointerId===fp.id)fp=null}
function tap(){if(!P||scr!=='play')return;if(P.ph==='air'&&P.flapCd<=0){P.flapCd=FLAPGAP;P.flaps++;P.wing=1;if(P.vy<-MINSINK)P.vy=Math.min(P.vy*FLAP,-MINSINK);S('puff')}}
// ---------- run ----------
function start(){scr='play';U.innerHTML='';P={ph:'count',cnt:3,ct:0,x:0,y:0,v:3,vx:0,vy:0,acc:0,rpm:0,top:0,flaps:0,flapCd:0,wing:0,lipV:0,flightFt:0,t:0,trail:[]};S('beep')}
function stepP(dt){const p=P;p.t+=dt;p.flapCd-=dt;p.wing=Math.max(0,p.wing-dt*5);
  const inst=dt>0?p.acc/dt*60/TAU:0;p.acc=0;p.rpm+=(Math.min(520,inst)-p.rpm)*(1-Math.exp(-dt/0.13));
  if(p.ph==='count'){p.ct+=dt;if(p.ct>=1){p.ct=0;p.cnt--;S(p.cnt?'beep':'go');if(!p.cnt)p.ph='run'}return}
  if(p.ph==='run'){const th=Math.atan(slope(inrun,p.x)),a=-G*Math.sin(th)+KSPIN*p.rpm-DRAG*p.v*p.v-0.02*G;p.v=Math.max(2,p.v+a*dt);p.x+=p.v*Math.cos(th)*dt;p.y=inrun(p.x);p.top=Math.max(p.top,p.rpm);
    if(p.x>=LIP){p.ph='air';p.lipV=p.v;p.vx=p.v*Math.cos(KICK);p.vy=p.v*Math.sin(KICK);p.y=inrun(LIP);S('whoosh');vib(60)}}
  else if(p.ph==='air'){p.vy-=G*dt;p.vx-=DRAG*p.vx*p.vx*dt*0.5;p.x+=p.vx*dt;p.y+=p.vy*dt;p.trail.push([p.x,p.y]);if(p.trail.length>400)p.trail.shift();
    if(p.y<=land(p.x)){p.ph='slide';p.flightFt=Math.round(p.x-LIP);const th=Math.atan(-SLOPE);p.v=Math.max(0,p.vx*Math.cos(th)+p.vy*Math.sin(th));p.y=land(p.x);S('puff');vib(90)}}
  else if(p.ph==='slide'){const th=Math.atan(-SLOPE),a=-G*Math.sin(th)-MU*G*Math.cos(th)-DRAG*p.v*p.v;p.v+=a*dt;if(p.v<=0||p.x>END){p.v=0;p.ph='stop';done()}else{p.x+=p.v*Math.cos(th)*dt;p.y=land(p.x)}}}
function dist(){return P?Math.max(0,Math.round(P.x-LIP)):0}
function done(){const ft=dist(),b=best(),nb=ft>b;if(nb)st.set('cr-ski',JSON.stringify({s:0,ft}));S(nb?'winBig':'win');
  try{B().submitJump&&ft>0&&B().submitJump(ft,Math.round(P.top))}catch(e){}
  setTimeout(()=>{if(!on)return;scr='result';U.innerHTML=`<div class="ap"><h2>🐧 ${nb?'NEW BEST!':'Nice jump!'}</h2><div class="big">${ft.toLocaleString('en-US')} ft</div>
  <p>Flight ${P.flightFt.toLocaleString('en-US')} ft · take-off ${Math.round(P.lipV*0.6818)} mph · top spin ${Math.round(P.top)} RPM · ${P.flaps} flaps</p>
  <p><b>Best: ${Math.max(b,ft).toLocaleString('en-US')} ft</b></p>
  <button class="ab" data-a="go">🎿 Jump again</button><div class="row2"><button class="ab g" data-a="board">🏆 Leaderboard</button><button class="ab g" data-a="home">🏠 Home</button></div></div>`},900)}
function intro(){scr='intro';P=null;const b=best();U.innerHTML=`<div class="ap"><button class="x" data-a="home" aria-label="Home">🏠</button><h2>🎿 Penguin jump</h2>
  <ol><li><b>Spin circles</b> as fast as you can on the downhill — faster spinning = more speed.</li><li>After the take-off, <b>TAP TAP TAP</b> to flap your wings and fall slower.</li><li>Then you slide on your belly until you stop.</li></ol>
  ${b?`<p><b>Your best: ${b.toLocaleString('en-US')} ft</b></p>`:''}<button class="ab" data-a="go">▶ Jump!</button></div>`}
// ---------- drawing ----------
function tick(now){raf=requestAnimationFrame(tick);if(!on)return;const dt=Math.min(0.05,(now-last)/1000);last=now;
  if(P&&scr==='play'){let k=dt;while(k>0){const h=Math.min(1/120,k);stepP(h);k-=h}}
  draw(now)}
function draw(now){g.setTransform(dpr,0,0,dpr,0,0);const p=P,px=p?p.x:200,py=p?p.y:inrun(200);
  const sk=g.createLinearGradient(0,0,0,H);sk.addColorStop(0,'#8fc7f0');sk.addColorStop(1,'#e8f4fd');g.fillStyle=sk;g.fillRect(0,0,W,H);
  // zoomed-out view that follows the penguin (about 700 ft across)
  const sc=Math.min(W/700,H/520),cx=W*0.35,cy=H*0.5,X=x=>cx+(x-px)*sc,Y=y=>cy-(y-py)*sc;
  g.fillStyle='rgba(255,255,255,.6)';for(let i=0;i<6;i++){const x=((i*260-px*0.15*sc)%(W+300)+W+300)%(W+300)-150;g.beginPath();g.arc(x,80+(i%3)*40,24,0,TAU);g.arc(x+26,72+(i%3)*40,30,0,TAU);g.arc(x+56,82+(i%3)*40,22,0,TAU);g.fill()}
  const x0=px-cx/sc-20,x1=px+(W-cx)/sc+20;g.fillStyle='#ffffff';g.beginPath();g.moveTo(X(x0),H);for(let x=x0;x<=x1;x+=4)g.lineTo(X(x),Y(hill(x)));g.lineTo(X(x1),H);g.fill();
  g.strokeStyle='#9cc6e6';g.lineWidth=3;g.beginPath();for(let x=x0;x<=x1;x+=4){const y=Y(hill(x));x===x0?g.moveTo(X(x),y):g.lineTo(X(x),y)}g.stroke();
  // take-off lip + start flag
  g.fillStyle='#e0402f';g.fillRect(X(LIP)-3,Y(inrun(LIP))-26,6,26);g.font='800 13px "Baloo 2",system-ui';g.textAlign='center';g.fillText('TAKE OFF',X(LIP),Y(inrun(LIP))-32);
  g.fillStyle='#ff8a2a';g.fillRect(X(30)-2,Y(0)-30,4,30);g.beginPath();g.moveTo(X(30)+2,Y(0)-30);g.lineTo(X(30)+22,Y(0)-24);g.lineTo(X(30)+2,Y(0)-18);g.fill();
  // distance boards every 250 ft and the best flag
  g.font='800 12px "Baloo 2",system-ui';for(let f=250;f<=4000;f+=250){const x=LIP+f;if(x<x0||x>x1)continue;const y=Y(land(x));g.fillStyle='#7a5530';g.fillRect(X(x)-1.5,y-24,3,24);g.fillStyle='#fff';g.strokeStyle='#14301f';g.lineWidth=1.5;rr(X(x)-30,y-42,60,18,5);g.fill();g.stroke();g.fillStyle='#14301f';g.fillText(f.toLocaleString('en-US')+' ft',X(x),y-29)}
  const b=best();if(b){const x=LIP+b;if(x>x0&&x<x1){const y=Y(land(x));g.fillStyle='#7a3cff';g.fillRect(X(x)-1.5,y-50,3,50);g.beginPath();g.moveTo(X(x)+1.5,y-50);g.lineTo(X(x)+26,y-43);g.lineTo(X(x)+1.5,y-36);g.fill();g.textAlign='left';g.fillText('BEST',X(x)+4,y-54)}}
  if(p){g.strokeStyle='rgba(255,255,255,.8)';g.setLineDash([4,6]);g.lineWidth=2;g.beginPath();p.trail.forEach(([x,y],i)=>i?g.lineTo(X(x),Y(y)):g.moveTo(X(x),Y(y)));g.stroke();g.setLineDash([])}
  // penguin (drawn a little bigger than true scale so you can see it)
  const ang=p?(p.ph==='air'?Math.atan2(p.vy,p.vx):p.ph==='run'?Math.atan(slope(inrun,px)):Math.atan(-SLOPE)):0;penguin(X(px),Y(py),-ang,p,now);
  minimap(p);hud(p,now)}
function rr(x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
function penguin(x,y,a,p,now){g.save();g.translate(x,y);g.rotate(a);const belly=p&&(p.ph==='slide'||p.ph==='stop'),s=1.1;
  if(belly){g.fillStyle='#1d2733';g.beginPath();g.ellipse(0,-7*s,16*s,8*s,0,0,TAU);g.fill();g.fillStyle='#fff';g.beginPath();g.ellipse(1*s,-4*s,12*s,4.5*s,0,0,TAU);g.fill();
    g.fillStyle='#ffa72a';g.beginPath();g.moveTo(16*s,-8*s);g.lineTo(23*s,-6*s);g.lineTo(16*s,-4*s);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(11*s,-10*s,2.4*s,0,TAU);g.fill();g.fillStyle='#123';g.beginPath();g.arc(11.6*s,-10*s,1.2*s,0,TAU);g.fill()}
  else{g.fillStyle='#ffa72a';g.fillRect(-6*s,-3*s,5*s,3*s);g.fillRect(2*s,-3*s,5*s,3*s);g.fillStyle='#1d2733';g.beginPath();g.ellipse(0,-14*s,9*s,13*s,0,0,TAU);g.fill();
    g.fillStyle='#fff';g.beginPath();g.ellipse(2*s,-12*s,6*s,9*s,0,0,TAU);g.fill();
    const w=p&&p.ph==='air'?(p.wing>0?-1.1*p.wing:0.2)+Math.sin(now/90)*0.15:0.25;for(const sd of[-1,1]){g.save();g.translate(-2*s,-18*s);g.rotate(sd>0?w:-w*0.4);g.fillStyle='#2a3642';g.beginPath();g.ellipse(-2*s,8*s,3.5*s,11*s,0.3,0,TAU);g.fill();g.restore()}
    g.fillStyle='#ffa72a';g.beginPath();g.moveTo(7*s,-24*s);g.lineTo(13*s,-22*s);g.lineTo(7*s,-20*s);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(4*s,-25*s,2.4*s,0,TAU);g.fill();g.fillStyle='#123';g.beginPath();g.arc(4.6*s,-25*s,1.2*s,0,TAU);g.fill()}
  g.restore()}
function minimap(p){const mw=Math.min(W-24,360),mh=46,mx=(W-mw)/2,my=8;g.fillStyle='rgba(255,255,255,.75)';rr(mx,my,mw,mh,10);g.fill();
  const xs=-20,xe=3400,yt=10,yb=-DROP-12-SLOPE*(xe-LIP),fx=x=>mx+8+(x-xs)/(xe-xs)*(mw-16),fy=y=>my+6+(yt-y)/(yt-yb)*(mh-12);
  g.strokeStyle='#5d9fd0';g.lineWidth=2;g.beginPath();for(let x=xs;x<=xe;x+=40){const y=fy(hill(x));x===xs?g.moveTo(fx(x),y):g.lineTo(fx(x),y)}g.stroke();
  const b=best();if(b){g.fillStyle='#7a3cff';g.fillRect(fx(LIP+b)-1,my+4,2,mh-8)}
  if(p){g.fillStyle='#e0402f';g.beginPath();g.arc(fx(clamp(p.x,xs,xe)),fy(clamp(p.y,yb,yt)),4,0,TAU);g.fill()}}
function hud(p,now){if(!p)return;g.textAlign='center';const y0=72;
  g.fillStyle='rgba(20,40,60,.8)';rr(W/2-120,y0,240,52,14);g.fill();g.fillStyle='#fff';g.font='800 22px "Baloo 2",system-ui';
  const mph=Math.round((p.ph==='air'?Math.hypot(p.vx,p.vy):p.v)*0.6818);
  g.fillText(p.ph==='run'||p.ph==='count'?`${mph} mph · ${Math.round(p.rpm)} RPM`:`${dist().toLocaleString('en-US')} ft · ${mph} mph`,W/2,y0+33);
  let msg='';if(p.ph==='count')msg=String(p.cnt);else if(p.ph==='run')msg='🌀 SPIN! SPIN! SPIN!';else if(p.ph==='air')msg='👆 TAP TAP TAP to flap!';else if(p.ph==='slide')msg='🐧 Wheee…';
  if(msg){g.font=p.ph==='count'?'800 90px "Baloo 2",system-ui':'800 28px "Baloo 2",system-ui';g.lineWidth=6;g.strokeStyle='rgba(255,255,255,.9)';const yy=p.ph==='count'?H*0.42:H-60;g.strokeText(msg,W/2,yy);g.fillStyle=p.ph==='air'?'#1f5f9a':'#c8461e';g.fillText(msg,W/2,yy)}
  if(p.ph==='air'){g.fillStyle='rgba(255,255,255,.18)';}
  // quit
  g.fillStyle='rgba(20,40,60,.6)';rr(8,y0,44,44,12);g.fill();g.fillStyle='#fff';g.font='22px system-ui';g.fillText('✕',30,y0+30)}
addEventListener('pointerdown',e=>{if(!on||scr!=='play'||e.target!==cv)return;if(e.clientX<56&&e.clientY>=72&&e.clientY<=118){e.stopImmediatePropagation();P=null;intro()}},true);
window.PJ={open,close,_dbg:()=>({P,scr,start,tap,setRpm:r=>{if(P)P.acc+=r/60*TAU/60}})};
})();
