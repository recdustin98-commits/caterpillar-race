// Adventures — 3 adventures × 10 control missions (top-down + side-view jump missions).
// Controls: joystick (constant speed; "go" = keeps going when you let go, "stop" = let go to stop),
// two-thumb oars/flippers (raft missions), tap/hold (jump), tap (chameleon tongue).
// Progress: localStorage cr-adv1..cr-adv3 (best stars per mission). Next adventure opens when the previous boss is beaten.
(()=>{
'use strict';
const B=()=>window.CRB||{};
const st={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const S=n=>{try{const f=B().sfx&&B().sfx[n];f&&f()}catch(e){}};
const vib=ms=>{try{B().buzz&&B().buzz(ms)}catch(e){}};
const TAU=Math.PI*2,clamp=(v,a,b)=>v<a?a:v>b?b:v,wrap=a=>{while(a>Math.PI)a-=TAU;while(a<-Math.PI)a+=TAU;return a},hyp=Math.hypot;
const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const AW=400,AH=560,HUD=54,PAD=172,DRAGON=75;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const nm=k=>{try{return B().t('ch_'+k)}catch(e){return k}};

// ---------- progress ----------
const getP=a=>{let v;try{v=JSON.parse(st.get('cr-adv'+(a+1))||'null')}catch(e){}return Array.isArray(v)&&v.length===10?v.map(x=>+x||0):Array(10).fill(0)};
const setP=(a,v)=>st.set('cr-adv'+(a+1),JSON.stringify(v));
const advOpen=a=>a===0||getP(a-1)[9]>0;
const misOpen=(a,i)=>advOpen(a)&&(i===0||getP(a)[i-1]>0);
const totStars=()=>[0,1,2].reduce((s,a)=>s+getP(a).reduce((x,y)=>x+y,0),0);

// ---------- DOM ----------
const css=`#advL{position:fixed;inset:0;z-index:1000;display:none;background:#bfe3a5;touch-action:none;user-select:none;-webkit-user-select:none}
#advL canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none}
#advU{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:12px;pointer-events:none}
#advU .ap{pointer-events:auto;background:var(--card,#fff);color:var(--ink,#10301f);border-radius:20px;padding:16px 18px;width:min(440px,100%);max-height:100%;overflow-y:auto;box-shadow:0 14px 40px rgba(0,40,20,.28);text-align:center;font-family:"Baloo 2",system-ui,sans-serif;position:relative}
#advU h2{margin:4px 0 2px;font-size:26px;line-height:1.1;color:var(--title,#1f7a2b)}
#advU p{margin:6px 0;font-size:16px;line-height:1.3}
#advU .sm{font-size:14px;opacity:.85}
#advU .ab{display:block;width:100%;min-height:52px;border:0;border-radius:14px;background:#ff8a2a;color:#2a1200;font:800 21px "Baloo 2",system-ui,sans-serif;margin-top:10px;cursor:pointer;box-shadow:0 4px 0 #c45a0c}
#advU .ab.g{background:#4fb33a;color:#fff;box-shadow:0 4px 0 #2f7a22}
#advU .row2{display:flex;gap:8px}#advU .row2 .ab{flex:1;font-size:18px}
#advU .x{position:absolute;left:10px;top:10px;border:0;background:#eef7e8;border-radius:12px;width:44px;height:44px;font-size:22px;cursor:pointer}
#advU .ml{display:flex;flex-direction:column;gap:7px;margin-top:10px}
#advU .mi{display:flex;align-items:center;gap:10px;border:0;border-radius:14px;padding:8px 10px;background:#eaf6e2;color:#10301f;font:700 17px "Baloo 2",system-ui,sans-serif;text-align:left;cursor:pointer;min-height:56px}
#advU .mi.cur{background:#ffe9a8;box-shadow:0 0 0 3px #ffb52a inset}
#advU .mi.lk{opacity:.55;cursor:default}
#advU .mi .n{width:30px;height:30px;border-radius:50%;background:#4fb33a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;flex:none}
#advU .mi .e{font-size:24px;flex:none}#advU .mi .t{flex:1;line-height:1.1}#advU .mi .s{font-size:15px;letter-spacing:1px;flex:none;color:#e0a000}
#advU .mi.boss .n{background:#c8461e}#advU .mi .s i{color:#cfd8d2;font-style:normal}
#advU .ad{display:flex;align-items:center;gap:10px;border:0;border-radius:16px;padding:10px;color:#fff;font:800 19px "Baloo 2",system-ui,sans-serif;text-align:left;cursor:pointer;min-height:86px;box-shadow:0 4px 0 rgba(0,0,0,.2)}
#advU .ad img{width:84px;height:62px;object-fit:contain;flex:none;background:rgba(255,255,255,.25);border-radius:12px}#advU .ad.lk{filter:grayscale(.8);opacity:.6;cursor:default}
#advU .ad small{display:block;font:600 14px "Baloo 2",system-ui,sans-serif;opacity:.95}
#advU .bar{height:10px;border-radius:6px;background:#e3ece0;overflow:hidden;margin:4px 0 2px}#advU .bar i{display:block;height:100%;background:linear-gradient(90deg,#ffd23f,#ff8a2a)}
#advU .fr{display:flex;justify-content:center;gap:10px;margin:6px 0}
#advU .fr div{width:74px;font-size:12px;line-height:1.1}#advU .fr img{width:70px;height:50px;object-fit:contain}#advU .fr .lk img{filter:grayscale(1) brightness(.4)}
#advU .ctl{display:inline-block;background:#e6f5ff;border-radius:10px;padding:4px 10px;font-weight:800;margin:4px 0}
#advU .stars{font-size:40px;letter-spacing:4px;color:#ffb300;margin:4px 0}#advU .stars i{color:#cfd8d2;font-style:normal}
#advU ul{text-align:left;margin:6px 0 0;padding-left:20px;font-size:15px}
#advU .big{width:220px;height:160px;object-fit:contain}`;
(()=>{const s=document.createElement('style');s.textContent=css;document.head.appendChild(s)})();
let L,cv,g,U,W=0,H=0,dpr=1;
function mount(){if(L)return;
  L=document.createElement('div');L.id='advL';L.innerHTML='<canvas></canvas><div id="advU"></div>';document.body.appendChild(L);
  cv=L.querySelector('canvas');g=cv.getContext('2d');U=L.querySelector('#advU');
  addEventListener('resize',size);size();
  cv.addEventListener('pointerdown',pdown);cv.addEventListener('pointermove',pmove);
  ['pointerup','pointercancel','pointerleave'].forEach(e=>cv.addEventListener(e,pup));
  U.addEventListener('click',click);
  addEventListener('keydown',e=>{if(!on)return;if(!keys[e.key]&&(e.key===' '||e.key==='Enter'))press();keys[e.key]=1;if(e.key.startsWith('Arrow')||e.key===' ')e.preventDefault()});
  addEventListener('keyup',e=>{keys[e.key]=0;if(e.key===' '||e.key==='Enter')release()});
}
function size(){if(!cv)return;dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr}
let on=false,scr='pick',M=null,AV=0,raf=0,lastT=0,keys={},HERO='cat';
function open(a){mount();on=true;L.style.display='block';size();if(a!=null)listScr(a);else pickScr();if(!raf){lastT=performance.now();raf=requestAnimationFrame(tick)}}
function close(){on=false;L.style.display='none';M=null;scr='pick';cancelAnimationFrame(raf);raf=0;try{B().home&&B().home()}catch(e){}}

// ---------- layout ----------
let sc=1,ox=0,oy=0;
function layout(){const ah=H-HUD-PAD;sc=Math.min(W/AW,ah/AH);ox=(W-AW*sc)/2;oy=HUD+(ah-AH*sc)/2}
const JX=()=>W/2,JY=()=>H-PAD/2+4,JR=58;

// ---------- input ----------
const ptr=new Map();let joy=null;
function pdown(e){if(scr!=='play')return;cv.setPointerCapture&&cv.setPointerCapture(e.pointerId);
  const p={x:e.clientX,y:e.clientY,ly:e.clientY,lt:performance.now(),side:e.clientX<W/2?'L':'R',v:0};ptr.set(e.pointerId,p);
  if(joy==null)joy=e.pointerId;press();e.preventDefault()}
function pmove(e){const p=ptr.get(e.pointerId);if(!p)return;const now=performance.now(),dt=Math.max(8,now-p.lt);
  const v=(e.clientY-p.ly)/dt*1000;p.v=p.v*0.5+v*0.5;p.ly=e.clientY;p.lt=now;p.x=e.clientX;p.y=e.clientY}
function pup(e){if(!ptr.has(e.pointerId))return;ptr.delete(e.pointerId);if(joy===e.pointerId){joy=null;const n=[...ptr.keys()];if(n.length)joy=n[0]}if(!ptr.size)release()}
function press(){if(scr==='play'&&M&&!M.count&&M.def.press)M.def.press.call(M.def,M)}
function release(){if(scr==='play'&&M&&M.def.release)M.def.release.call(M.def,M)}
function stick(){
  let kx=(keys.ArrowRight||keys.d?1:0)-(keys.ArrowLeft||keys.a?1:0),ky=(keys.ArrowDown||keys.s?1:0)-(keys.ArrowUp||keys.w?1:0);
  if(kx||ky)return{a:Math.atan2(ky,kx),on:true,fx:JX()+kx*JR,fy:JY()+ky*JR};
  const p=joy!=null&&ptr.get(joy);if(!p)return{on:false};
  const dx=p.x-JX(),dy=p.y-JY();if(hyp(dx,dy)<14)return{on:false,held:true,fx:p.x,fy:p.y};
  return{a:Math.atan2(dy,dx),on:true,fx:p.x,fy:p.y}}
function oars(now){
  let l=(keys.w||keys.W?0.8:0)-(keys.s||keys.S?0.8:0),r=(keys.ArrowUp?0.8:0)-(keys.ArrowDown?0.8:0);
  for(const p of ptr.values()){if(now-p.lt>90)p.v*=0.6;const s=clamp(p.v/900,-1.4,1.4);if(p.side==='L')l+=s;else r+=s}
  return{l:clamp(l,-1.4,1.4),r:clamp(r,-1.4,1.4)}}

// ---------- hero (caterpillar / sea turtle / chameleon) ----------
function mkCat(x,y,dir){const c={x,y,dir,spd:0,trail:[],stun:0,turn:0};for(let i=0;i<140;i++)c.trail.push({x:x-Math.cos(dir)*i,y:y-Math.sin(dir)*i});return c}
function catSegs(c,n=8,gap=11){const s=[c.trail[0]];let acc=0,need=gap;for(let i=1;i<c.trail.length&&s.length<n;i++){acc+=hyp(c.trail[i].x-c.trail[i-1].x,c.trail[i].y-c.trail[i-1].y);if(acc>=need){s.push(c.trail[i]);need+=gap}}while(s.length<n)s.push(s[s.length-1]);return s}
function steerCat(c,dt,speed,ctrl,blocked){
  const j=stick();let target=0;
  if(c.stun>0){c.stun-=dt;c.spd=0;return false}
  if(j.on){const d=wrap(j.a-c.dir),r=clamp(d*4.2,-3.4,3.4);c.turn=r;c.dir+=r*dt}else c.turn*=0.8;
  target=ctrl==='go'?speed:j.on?speed:0;
  c.spd+=(target-c.spd)*(1-Math.exp(-dt/(target>c.spd?0.18:0.1)));
  let nx=c.x+Math.cos(c.dir)*c.spd*dt,ny=c.y+Math.sin(c.dir)*c.spd*dt;
  if(blocked&&blocked(nx,ny)){if(!blocked(nx,c.y))ny=c.y;else if(!blocked(c.x,ny))nx=c.x;else{nx=c.x;ny=c.y}}
  const moved=hyp(nx-c.x,ny-c.y);c.x=nx;c.y=ny;if(moved>0.01){c.trail.unshift({x:c.x,y:c.y});if(c.trail.length>220)c.trail.pop()}
  return c.spd>8}
function moveBack(c,dx,dy){c.x+=dx;c.y+=dy;c.trail=[];for(let i=0;i<140;i++)c.trail.push({x:c.x-Math.cos(c.dir)*i,y:c.y-Math.sin(c.dir)*i})}
function drawHero(c,k=1){if(HERO==='turtle')return drawTurtle(c,k);if(HERO==='cham')return drawCham(c,k);drawCat(c,k)}
function eyes(x,y,d,k,fw,side){for(const sd of[-1,1]){const ex=x+Math.cos(d)*fw+Math.cos(d+sd*1.57)*side,ey=y+Math.sin(d)*fw+Math.sin(d+sd*1.57)*side;
    g.fillStyle='#fff';g.beginPath();g.arc(ex,ey,3.1*k,0,TAU);g.fill();g.fillStyle='#123';g.beginPath();g.arc(ex+Math.cos(d),ey+Math.sin(d),1.6*k,0,TAU);g.fill()}}
function stunMark(c,h){if(c.stun>0){g.font='18px system-ui';g.textAlign='center';g.fillText('💫',h.x,h.y-16)}}
function drawCat(c,k=1){const s=catSegs(c);
  for(let i=s.length-1;i>=0;i--){const p=s[i];g.fillStyle=i?(i%2?'#9bd24a':'#86c23a'):'#6fb02a';g.beginPath();g.arc(p.x,p.y,(i?8.5:10.5)*k,0,TAU);g.fill();
    if(i&&i%2===0){g.fillStyle='#ffd23f';g.beginPath();g.arc(p.x,p.y,2.2*k,0,TAU);g.fill()}}
  const h=s[0],d=c.dir;g.strokeStyle='#3d6b18';g.lineWidth=1.6;
  for(const sd of[-1,1]){g.beginPath();g.moveTo(h.x+Math.cos(d)*6,h.y+Math.sin(d)*6);g.lineTo(h.x+Math.cos(d+sd*.5)*16*k,h.y+Math.sin(d+sd*.5)*16*k);g.stroke()}
  eyes(h.x,h.y,d,k,4,4.5);stunMark(c,h)}
function drawTurtle(c,k=1){const d=c.dir,x=c.x-Math.cos(d)*14,y=c.y-Math.sin(d)*14,t=performance.now()/180,f=Math.sin(t)*0.45;
  g.save();g.translate(x,y);g.rotate(d);g.fillStyle='#6fbf8a';
  for(const[fx,fy,s]of[[8,-13,1],[8,13,-1],[-12,-10,1],[-12,10,-1]]){g.save();g.translate(fx*k,fy*k);g.rotate((fx>0?-0.6:-2.4)*s+f*s);g.beginPath();g.ellipse(7*k,0,9*k,4*k,0,0,TAU);g.fill();g.restore()}
  g.fillStyle='#2e7d5b';g.beginPath();g.ellipse(0,0,17*k,14*k,0,0,TAU);g.fill();g.fillStyle='#5fc79a';
  for(const[a,b]of[[0,0],[-8,-6],[-8,6],[7,-6],[7,6]]){g.beginPath();g.arc(a*k,b*k,4.2*k,0,TAU);g.fill()}
  g.fillStyle='#7fd49c';g.beginPath();g.ellipse(19*k,0,7*k,6*k,0,0,TAU);g.fill();g.restore();
  const hx=x+Math.cos(d)*19*k,hy=y+Math.sin(d)*19*k;eyes(hx,hy,d,k*0.8,1,3.5*k);stunMark(c,{x:hx,y:hy})}
function drawCham(c,k=1){const s=catSegs(c,7,9),d=c.dir,t=performance.now()/200;
  const tail=s[6],tb=Math.atan2(s[5].y-s[6].y,s[5].x-s[6].x);g.strokeStyle='#3d9a3a';g.lineWidth=5*k;g.lineCap='round';g.beginPath();g.moveTo(s[4].x,s[4].y);g.lineTo(tail.x,tail.y);g.stroke();
  g.beginPath();g.arc(tail.x-Math.cos(tb)*6,tail.y-Math.sin(tb)*6,6*k,tb,tb+5.2);g.stroke();
  for(let i=4;i>=1;i--){const p=s[i];g.fillStyle=i%2?'#4fb84a':'#62c95a';g.beginPath();g.arc(p.x,p.y,(9-i*0.6)*k,0,TAU);g.fill()}
  for(const[i,sd,ph]of[[1,-1,0],[1,1,Math.PI],[3,-1,Math.PI],[3,1,0]]){const p=s[i],a=d+sd*1.57,w=Math.sin(t*3+ph)*3;g.strokeStyle='#2f7d2a';g.lineWidth=3*k;g.beginPath();g.moveTo(p.x,p.y);g.lineTo(p.x+Math.cos(a)*11*k+Math.cos(d)*w,p.y+Math.sin(a)*11*k+Math.sin(d)*w);g.stroke()}
  const h=s[0];g.fillStyle='#57c24f';g.beginPath();g.ellipse(h.x,h.y,11*k,8.5*k,d,0,TAU);g.fill();g.fillStyle='#3f9e3a';g.beginPath();g.ellipse(h.x-Math.cos(d)*4*k,h.y-Math.sin(d)*4*k,6*k,6*k,d,0,TAU);g.fill();
  eyes(h.x,h.y,d,k*1.1,3*k,6*k);stunMark(c,h)}

// ---------- scenery ----------
function grass(seed,col='#8fd06a',dots='#7bbf55'){g.fillStyle=col;g.fillRect(0,0,AW,AH);const r=rng(seed);g.strokeStyle=dots;g.lineWidth=2;
  for(let i=0;i<70;i++){const x=r()*AW,y=r()*AH;g.beginPath();g.moveTo(x,y);g.lineTo(x-3,y-7);g.moveTo(x,y);g.lineTo(x+3,y-8);g.stroke()}}
function sand(seed,col='#ecd59a',dots='#d9bd78'){g.fillStyle=col;g.fillRect(0,0,AW,AH);const r=rng(seed);g.fillStyle=dots;for(let i=0;i<120;i++){g.beginPath();g.arc(r()*AW,r()*AH,1+r()*1.5,0,TAU);g.fill()}}
function sea(seed,col='#3f9fd6'){g.fillStyle=col;g.fillRect(0,0,AW,AH);const r=rng(seed),t=performance.now()/1000;g.strokeStyle='rgba(255,255,255,.18)';g.lineWidth=2;
  for(let i=0;i<26;i++){const x=r()*AW,y=r()*AH,o=Math.sin(t+i)*4;g.beginPath();g.moveTo(x-12+o,y);g.quadraticCurveTo(x+o,y-6,x+12+o,y);g.stroke()}}
const BG={grass,sand,sea,jungle:s=>grass(s,'#5fae4a','#4c9a3a'),dirt:s=>grass(s,'#c9a46a','#b28d55')};
function leafShape(cx,cy,rx,ry,fill='#4f9a3a',vein='#3c7d2c'){g.fillStyle=fill;g.beginPath();g.moveTo(cx,cy-ry);
  g.bezierCurveTo(cx+rx*1.35,cy-ry*0.55,cx+rx*1.2,cy+ry*0.7,cx,cy+ry);g.bezierCurveTo(cx-rx*1.2,cy+ry*0.7,cx-rx*1.35,cy-ry*0.55,cx,cy-ry);g.fill();
  g.strokeStyle=vein;g.lineWidth=3;g.beginPath();g.moveTo(cx,cy-ry);g.lineTo(cx,cy+ry);g.stroke();g.lineWidth=1.6;
  for(let i=-3;i<=3;i++){if(!i)continue;const y=cy+i*ry/4.2,w=rx*0.8*(1-Math.abs(i)/5);g.beginPath();g.moveTo(cx,y);g.lineTo(cx+w,y-ry*0.13);g.moveTo(cx,y);g.lineTo(cx-w,y-ry*0.13);g.stroke()}}
function inLeaf(x,y,cx,cy,rx,ry){const dy=(y-cy)/ry;if(Math.abs(dy)>1)return false;const half=rx*(dy<0?Math.sqrt(1-dy*dy)*(1+dy*0.15):Math.sqrt(1-dy*dy)*(1-dy*0.08));return Math.abs(x-cx)<=half*0.98}
function flower(x,y,r=26,t=0,col='#ff7fb3'){g.save();g.translate(x,y);g.rotate(t*0.3);g.fillStyle=col;for(let i=0;i<6;i++){g.beginPath();g.ellipse(Math.cos(i*TAU/6)*r*0.55,Math.sin(i*TAU/6)*r*0.55,r*0.5,r*0.3,i*TAU/6,0,TAU);g.fill()}g.fillStyle='#ffd23f';g.beginPath();g.arc(0,0,r*0.38,0,TAU);g.fill();g.restore()}
function pebble(x,y,r,c1='#9aa3a8',c2='#c3cacd'){g.fillStyle=c1;g.beginPath();g.ellipse(x,y,r,r*0.85,0.3,0,TAU);g.fill();g.fillStyle=c2;g.beginPath();g.ellipse(x-r*0.3,y-r*0.3,r*0.35,r*0.25,0.3,0,TAU);g.fill()}
function coral(x,y,r){const c=['#ff7a7a','#ffb35c','#c88bff'][Math.abs(Math.floor(x+y))%3];g.strokeStyle=c;g.lineCap='round';g.lineWidth=r*0.28;
  for(let i=0;i<5;i++){const a=-Math.PI/2+(i-2)*0.45;g.beginPath();g.moveTo(x,y+r*0.5);g.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r*0.9);g.stroke()}}
function cactus(x,y,r){g.fillStyle='#4f9a4a';g.beginPath();g.ellipse(x,y,r*0.35,r,0,0,TAU);g.fill();g.beginPath();g.ellipse(x-r*0.45,y-r*0.1,r*0.18,r*0.45,0.4,0,TAU);g.fill();g.beginPath();g.ellipse(x+r*0.45,y-r*0.25,r*0.18,r*0.4,-0.4,0,TAU);g.fill()}
const PROP={pebble,coral,cactus,rock:(x,y,r)=>pebble(x,y,r,'#8a7f74','#b0a598')};
function emo(t,x,y,s,rot=0,flip=false){g.save();g.translate(x,y);if(rot)g.rotate(rot);if(flip)g.scale(-1,1);g.font=`${s}px system-ui,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji"`;g.textAlign='center';g.textBaseline='middle';g.fillText(t,0,0);g.restore()}
function ant(x,y,dirR,t){g.save();g.translate(x,y);if(!dirR)g.scale(-1,1);g.fillStyle='#2b1d14';g.strokeStyle='#2b1d14';g.lineWidth=1.3;
  const w=Math.sin(t*18+x)*2;for(const lx of[-3,1,5]){g.beginPath();g.moveTo(lx,0);g.lineTo(lx-2+w,7);g.moveTo(lx,0);g.lineTo(lx-2-w,-7);g.stroke()}
  g.beginPath();g.arc(-6,0,3.6,0,TAU);g.arc(1,0,2.6,0,TAU);g.fill();g.beginPath();g.arc(7,0,3.1,0,TAU);g.fill();g.restore()}
function jelly(x,y,t,s=1){g.fillStyle='rgba(255,170,220,.9)';g.beginPath();g.arc(x,y,9*s,Math.PI,0);g.lineTo(x-9*s,y);g.fill();g.strokeStyle='rgba(255,170,220,.85)';g.lineWidth=1.5;
  for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(x+i*3.5*s,y);g.quadraticCurveTo(x+i*3.5*s+Math.sin(t*6+i)*3,y+7*s,x+i*3.5*s,y+13*s);g.stroke()}}
function weed(x,y,t){g.save();g.translate(x,y);g.rotate(Math.sin(t*4+x)*0.3+t*2);g.strokeStyle='#a9773d';g.lineWidth=2;for(let i=0;i<6;i++){g.beginPath();g.arc(0,0,4+i*1.6,i,i+4);g.stroke()}g.restore()}
const CROSSER={ant:(x,y,r,t)=>ant(x,y,r,t),crab:(x,y,r,t)=>emo('🦀',x,y+Math.sin(t*10+x)*1.5,20),weed:(x,y,r,t)=>weed(x,y,t)};
function pushOutCircle(c,x,y,r){const dx=c.x-x,dy=c.y-y,d=hyp(dx,dy);if(d<r&&d>0.01){c.x=x+dx/d*r;c.y=y+dy/d*r;return true}return false}
function dew(x,y){g.fillStyle='#bfe8ff';g.strokeStyle='#5aa9d6';g.lineWidth=2;g.beginPath();g.arc(x,y,9,0,TAU);g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(x-3,y-3,2.5,0,TAU);g.fill()}
function lady(x,y,a,k=1){g.save();g.translate(x,y);g.rotate(a);g.fillStyle='#e02020';g.beginPath();g.arc(0,0,8*k,0,TAU);g.fill();g.fillStyle='#111';g.beginPath();g.arc(7*k,0,4*k,0,TAU);g.fill();g.fillRect(-8*k,-0.6,16*k,1.2);
  for(const[dx,dy]of[[-3,-4],[-3,4],[2,-4],[2,4]]){g.beginPath();g.arc(dx*k,dy*k,1.6*k,0,TAU);g.fill()}g.restore()}
function babyFish(x,y,a){g.save();g.translate(x,y);g.rotate(a);g.fillStyle='#ffb52a';g.beginPath();g.ellipse(0,0,8,5,0,0,TAU);g.fill();g.beginPath();g.moveTo(-6,0);g.lineTo(-13,-5);g.lineTo(-13,5);g.fill();g.fillStyle='#123';g.beginPath();g.arc(4,-1,1.3,0,TAU);g.fill();g.restore()}
const KID={lady:(x,y,a)=>lady(x,y,a,1.05),fish:babyFish};
function mole(x,y,t){g.fillStyle='#4a3426';g.beginPath();g.ellipse(x,y,18,15,0,0,TAU);g.fill();g.fillStyle='#ffb0b8';g.beginPath();g.arc(x,y-13,5,0,TAU);g.fill();
  g.fillStyle='#111';g.beginPath();g.arc(x-6,y-6,1.8,0,TAU);g.arc(x+6,y-6,1.8,0,TAU);g.fill();g.strokeStyle='#e9c9a5';g.lineWidth=3;
  const w=Math.sin(t*10)*3;g.beginPath();g.moveTo(x-16,y+4);g.lineTo(x-22,y+8+w);g.moveTo(x+16,y+4);g.lineTo(x+22,y+8-w);g.stroke()}
function eel(x,y,t){g.strokeStyle='#6b7f3a';g.lineWidth=9;g.lineCap='round';g.beginPath();for(let i=0;i<6;i++){const xx=x-i*6+15,yy=y+Math.sin(t*8-i)*4;i?g.lineTo(xx,yy):g.moveTo(xx,yy)}g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(x+17,y-2,2.2,0,TAU);g.fill()}
const PATROL={mole,eel,scorp:(x,y,t)=>emo('🦂',x,y,30,Math.sin(t*4)*0.2)};
function frame(col,t){if(!col)return;g.strokeStyle=col;g.globalAlpha=0.55+0.35*Math.sin(t*12);g.lineWidth=10;g.strokeRect(5,5,AW-10,AH-10);g.globalAlpha=1}
function bigText(s,y){g.font='800 26px "Baloo 2",system-ui';g.textAlign='center';g.lineWidth=5;g.strokeStyle='rgba(255,255,255,.9)';g.strokeText(s,AW/2,y||AH/2);g.fillStyle='#c8261e';g.fillText(s,AW/2,y||AH/2)}
const starsBy=(n,a,b)=>n<=a?3:n<=b?2:1;
const bounds=(x,y)=>x<12||x>AW-12||y>AH-10||y<8;

// ---------- mission templates ----------
const T={};
// collect items on a leaf (fall off the edge) or in a pool (walls); moving hazards cost a mistake
T.collect=o=>({ctrl:'go',...o,
  init(m){m.cat=mkCat(200,470,-Math.PI/2);const r=rng(o.seed||11);m.items=[];const inside=(x,y)=>o.shape==='leaf'?inLeaf(x,y,200,280,120,215):hyp((x-200)/170,(y-280)/240)<0.85;
   while(m.items.length<o.n){const x=40+r()*320,y=60+r()*420;if(inside(x,y)&&hyp(x-200,y-470)>70&&m.items.every(q=>hyp(q.x-x,q.y-y)>60))m.items.push({x,y})}
   m.got=0;m.mis=0;m.fall=0;m.limit=o.limit||75;m.t=0;m.hz=(o.hazards||[]).map(h=>({...h,x:h.cx,y:h.cy}));m.cool=0},
  update(m,dt){m.cool-=dt;if(m.fall>0){m.fall-=dt;if(m.fall<=0)m.cat=mkCat(200,430,-Math.PI/2);return}
   const pool=o.shape!=='leaf';steerCat(m.cat,dt,o.spd,o.ctrl,pool?(x,y)=>hyp((x-200)/180,(y-280)/255)>1:null);const c=m.cat;
   for(const q of m.items)if(!q.got&&hyp(q.x-c.x,q.y-c.y)<20){q.got=1;m.got++;S('ding')}
   for(const h of m.hz){h.x=h.cx+Math.sin(m.t*h.sp+h.ph)*h.ax;h.y=h.cy+Math.cos(m.t*h.sp*0.7+h.ph)*h.ay;if(m.cool<=0&&hyp(h.x-c.x,h.y-c.y)<h.r+10){m.mis++;m.cool=1.2;S('boing');vib(80);c.stun=0.6}}
   if(m.got===o.n)return win(m,starsBy(m.mis,0,1));
   if(!pool&&!inLeaf(c.x,c.y,200,280,150,255)){m.fall=1;m.mis++;S('boing');vib(60)}},
  draw(m){BG[o.bg||'grass'](o.seed||1);if(o.shape==='leaf')leafShape(200,280,150,255,o.leaf||'#4f9a3a');else{g.fillStyle=o.pool||'#3f9fd6';g.beginPath();g.ellipse(200,280,190,265,0,0,TAU);g.fill()}
   for(const q of m.items)if(!q.got)o.item(q.x,q.y,m.t);for(const h of m.hz)o.hz(h.x,h.y,m.t);if(m.fall>0)g.globalAlpha=m.fall;drawHero(m.cat);g.globalAlpha=1;if(m.fall>0)bigText('Fell off! 🍂')},
  hud:m=>`${o.icon} ${m.got}/${o.n}   ❌ ${m.mis}`});
// eat a leaf / graze a meadow before time runs out
T.eat=o=>({ctrl:'go',...o,
  init(m){m.cat=mkCat(200,470,-Math.PI/2);m.limit=o.limit;m.fall=0;
   m.can=document.createElement('canvas');m.can.width=AW;m.can.height=AH;const k=m.can.getContext('2d');const gg=g;g=k;
   if(o.meadow){const r=rng(5);for(let i=0;i<1400;i++){const x=40+r()*320,y=40+r()*480;if(hyp((x-200)/170,(y-280)/250)<1){g.strokeStyle=['#3c9a46','#56b35a','#2f8a3b'][i%3];g.lineWidth=4;g.beginPath();g.moveTo(x,y);g.lineTo(x+Math.sin(i)*4,y-14);g.stroke()}}}
   else leafShape(200,280,150,255);g=gg;
   const inside=(x,y)=>o.meadow?hyp((x-200)/165,(y-280)/245)<1:inLeaf(x,y,200,280,150,255);
   m.cells=[];for(let y=30;y<535;y+=8)for(let x=36;x<364;x+=8)if(inside(x,y))m.cells.push({x,y,e:0});m.eaten=0},
  update(m,dt){if(m.fall>0){m.fall-=dt;if(m.fall<=0)m.cat=mkCat(200,430,-Math.PI/2);return}
   const R=o.meadow?15:13;steerCat(m.cat,dt,o.spd,'go',o.meadow?bounds:null);const c=m.cat,k=m.can.getContext('2d');k.globalCompositeOperation='destination-out';k.beginPath();k.arc(c.x,c.y,R+2,0,TAU);k.fill();k.globalCompositeOperation='source-over';
   for(const q of m.cells)if(!q.e&&Math.abs(q.x-c.x)<R+1&&Math.abs(q.y-c.y)<R+1&&hyp(q.x-c.x,q.y-c.y)<R){q.e=1;m.eaten++}
   if(!o.meadow&&!inLeaf(c.x,c.y,200,280,150,255)){m.fall=1;S('boing');vib(60)}},
  timeUp(m){const p=m.eaten/m.cells.length*100;return p>=o.th[2]?3:p>=o.th[1]?2:p>=o.th[0]?1:0},
  draw(m){BG[o.bg||'grass'](2);g.drawImage(m.can,0,0);if(m.fall>0)g.globalAlpha=m.fall;drawHero(m.cat);g.globalAlpha=1;if(m.fall>0)bigText('Fell off! 🍂')},
  hud:m=>`${o.icon} ${Math.floor(m.eaten/m.cells.length*100)}% eaten`});
// cross lines of marching/rolling things to reach the goal
T.cross=o=>({ctrl:'stop',...o,
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=o.limit||90;m.bumps=0;m.rows=o.rows.map(r=>({per:300,grp:o.grp||5,gap:o.gap||26,...r}))},
  ants(r,t){const a=[];const base=((r.o+r.v*t)%r.per+r.per)%r.per;for(let k=-1;k<3;k++)for(let i=0;i<r.grp;i++)a.push(base+k*r.per+i*r.gap-r.per*0.5);return a.filter(x=>x>-20&&x<AW+20)},
  update(m,dt){steerCat(m.cat,dt,o.spd,'stop',bounds);const c=m.cat,s=catSegs(c).slice(0,3),h=o.hit||12;
   if(c.stun<=0)for(const r of m.rows){for(const ax of this.ants(r,m.t)){if(s.some(p=>Math.abs(p.y-r.y)<h&&Math.abs(p.x-ax)<h+1)){m.bumps++;S('boing');vib(80);c.stun=0.8;c.dir=-Math.PI/2;moveBack(c,0,Math.min(60,AH-20-c.y));break}}if(c.stun>0)break}
   if(hyp(c.x-200,c.y-40)<34)win(m,starsBy(m.bumps,0,2))},
  draw(m){BG[o.bg](3);for(const r of m.rows){g.fillStyle=o.lane||'rgba(90,60,30,.18)';g.fillRect(0,r.y-12,AW,24);for(const ax of this.ants(r,m.t))CROSSER[o.who](ax,r.y,r.v>0,m.t)}o.goal(200,40,m.t);drawHero(m.cat)},
  hud:m=>`${o.icon} bumps ${m.bumps}`});
// maze with patrollers: hide in a side tunnel until they pass
T.maze=o=>({ctrl:'stop',...o,
  init(m){m.map=o.map;m.oy=5;const c=(cx,cy)=>({x:cx*50+25,y:cy*50+25+m.oy});
   m.start=c(...o.start);m.exit=c(...o.exit);m.cat=mkCat(m.start.x,m.start.y,-Math.PI/2);m.check={...m.start};m.cps=o.checks.map(p=>c(...p));m.caught=0;m.limit=o.limit||120;
   m.moles=o.pats.map(p=>{const q={pts:p.path.map(v=>c(...v)),sp:p.sp,dir:1,len:[]};let Lx=0;for(let i=1;i<q.pts.length;i++){Lx+=hyp(q.pts[i].x-q.pts[i-1].x,q.pts[i].y-q.pts[i-1].y);q.len.push(Lx)}q.L=Lx;q.d=(p.s||0)*Lx;q.x=q.pts[0].x;q.y=q.pts[0].y;return q})},
  wall(m,x,y){const cx=Math.floor(x/50),cy=Math.floor((y-m.oy)/50);if(cy<0)return false;const r=m.map[cy];if(!r)return true;const ch=r[cx];return ch===undefined||ch==='#'},
  update(m,dt){const blk=(x,y)=>{for(const[dx,dy]of[[-10,0],[10,0],[0,-10],[0,10]])if(this.wall(m,x+dx,y+dy))return true;return false};
   steerCat(m.cat,dt,o.spd,'stop',blk);const c=m.cat;
   for(const q of m.moles){q.d+=q.sp*q.dir*dt;if(q.d>q.L){q.d=q.L;q.dir=-1}if(q.d<0){q.d=0;q.dir=1}let i=0;while(i<q.len.length-1&&q.d>q.len[i])i++;const a=q.pts[i],b=q.pts[i+1],l0=i?q.len[i-1]:0,f=(q.d-l0)/(q.len[i]-l0);q.x=a.x+(b.x-a.x)*f;q.y=a.y+(b.y-a.y)*f}
   for(const p of m.cps)if(hyp(p.x-c.x,p.y-c.y)<22)m.check={...p};
   if(c.stun<=0)for(const q of m.moles)if(catSegs(c).slice(0,3).some(p=>hyp(p.x-q.x,p.y-q.y)<24)){m.caught++;S('snap');vib(120);const k=m.check;m.cat=mkCat(k.x,k.y,-Math.PI/2);m.cat.stun=1;break}
   if(c.y<m.exit.y+10&&Math.abs(c.x-m.exit.x)<25)win(m,starsBy(m.caught,0,1))},
  draw(m){g.fillStyle=o.wallC;g.fillRect(0,0,AW,AH);const r=rng(5);g.fillStyle=o.floorC;
   for(let y=0;y<m.map.length;y++)for(let x=0;x<8;x++){if(m.map[y][x]!=='#'){g.fillRect(x*50+3,y*50+m.oy+3,44,44);if(m.map[y][x+1]&&m.map[y][x+1]!=='#')g.fillRect(x*50+25,y*50+m.oy+3,50,44);if(m.map[y+1]&&m.map[y+1][x]!=='#')g.fillRect(x*50+3,y*50+m.oy+25,44,50)}}
   g.fillStyle=o.dotC;for(let i=0;i<60;i++){g.beginPath();g.arc(r()*AW,r()*AH,1.5+r()*2,0,TAU);g.fill()}
   emo(o.exitE,m.exit.x,m.exit.y-8,26);for(const q of m.moles)PATROL[o.who](q.x,q.y,m.t);drawHero(m.cat)},
  hud:m=>`${o.icon} caught ${m.caught}`});
// babies ride behind you; a sharp U-turn drops one
T.follow=o=>({ctrl:'go',...o,
  init(m){m.cat=mkCat(200,520,-Math.PI/2);m.limit=o.limit||90;m.sharp=0;m.kids=[{on:1},{on:1},{on:1}];m.stones=o.stones},
  update(m,dt){steerCat(m.cat,dt,o.spd,'go',bounds);const c=m.cat;for(const s of m.stones)pushOutCircle(c,s.x,s.y,s.r+10);
   if(Math.abs(c.turn)>2.9)m.sharp+=dt;else m.sharp=Math.max(0,m.sharp-dt*2);
   const att=m.kids.filter(k=>k.on);if(m.sharp>0.4&&att.length){const k=att[att.length-1],sg=catSegs(c,8+att.length*2);const p=sg[sg.length-1];k.on=0;k.x=p.x;k.y=p.y;m.sharp=0;S('sad');vib(60)}
   for(const k of m.kids)if(!k.on&&hyp(k.x-c.x,k.y-c.y)<22){k.on=1;S('ding')}
   if(hyp(c.x-200,c.y-40)<36){const n=m.kids.filter(k=>k.on).length;if(n>0)win(m,n)}},
  timeUp(){return 0},
  draw(m){BG[o.bg](6);o.goal(200,40,m.t);for(const s of m.stones)PROP[o.prop](s.x,s.y,s.r);const c=m.cat;
   const sg=catSegs(c,14);let i=8;for(const k of m.kids){if(k.on){const p=sg[Math.min(sg.length-1,i)];KID[o.kid](p.x,p.y,c.dir);i+=2}else{KID[o.kid](k.x,k.y,0);emo('❗',k.x,k.y-16,14)}}drawHero(c);
   if(m.sharp>0.12){g.fillStyle='rgba(255,60,60,.9)';g.font='bold 16px "Baloo 2",system-ui';g.textAlign='center';g.fillText('Too sharp!',c.x,c.y-22)}},
  hud:m=>`${o.icon} ${m.kids.filter(k=>k.on).length}/3 riding`});
// someone sleeps / looks away; freeze while they're awake
T.freeze=o=>({ctrl:'stop',...o,
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=o.limit||90;m.caught=0;m.ph='sleep';m.pt=2.5;m.grace=0;m.r=rng(o.seed||77);m.stones=o.stones},
  update(m,dt){m.pt-=dt;
   if(m.pt<=0){if(m.ph==='sleep'){m.ph='warn';m.pt=o.warn||0.9;S('wake')}else if(m.ph==='warn'){m.ph='awake';m.pt=1.4+m.r()*1.2;m.grace=0.2;S('alarm');vib(50)}else{m.ph='sleep';m.pt=2.2+m.r()*2.3;S('beep')}}
   const mov=steerCat(m.cat,dt,o.spd,'stop',bounds);const c=m.cat;for(const s of m.stones)pushOutCircle(c,s.x,s.y,s.r+10);
   if(m.ph==='awake'){m.grace-=dt;if(m.grace<0&&mov&&c.stun<=0){m.caught++;S('failBig');vib(150);c.stun=1;c.dir=-Math.PI/2;moveBack(c,0,Math.min(90,AH-20-c.y))}}
   if(hyp(c.x-200,c.y-110)<26)win(m,starsBy(m.caught,0,1))},
  draw(m){BG[o.bg](7);for(const s of m.stones)PROP[o.prop](s.x,s.y,s.r);o.home(m);emo(o.watcher,200,52,38);
   if(m.ph==='sleep')emo('💤',230,30,20+Math.sin(m.t*3)*3);if(m.ph==='warn')emo('👀',232,30,22);if(m.ph==='awake')emo('❗',232,26,26);
   drawHero(m.cat);frame(m.ph==='awake'?'#ff3b30':m.ph==='warn'?'#ffcc00':null,m.t);if(m.ph==='awake')bigText('🛑 FREEZE!',250);else if(m.ph==='warn')bigText(o.warnTxt||'👀 Waking up!',250)},
  hud:m=>`${o.icon} caught ${m.caught}`});
// walls with one gap each; something drops into the gap now and then
T.gaps=o=>({ctrl:'stop',...o,
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=o.limit||100;m.caught=0;const r=rng(o.seed||88);m.webs=o.walls.map((w,i)=>({...w,ph:'up',pt:1+i*0.9,r,k:0}))},
  update(m,dt){for(const w of m.webs){w.pt-=dt;if(w.pt<=0){if(w.ph==='up'){w.ph='warn';w.pt=0.7}else if(w.ph==='warn'){w.ph='down';w.pt=1.6+w.r()*1.2}else{w.ph='up';w.pt=1.8+w.r()*1.4}}w.k=w.ph==='down'?Math.min(1,w.k+dt*4):Math.max(0,w.k-dt*3)}
   const blk=(x,y)=>{if(bounds(x,y))return true;for(const w of m.webs)if(Math.abs(y-w.y)<7&&Math.abs(x-w.gx)>w.gw/2-8)return true;return false};
   steerCat(m.cat,dt,o.spd,'stop',blk);const c=m.cat;
   if(c.stun<=0)for(const w of m.webs)if(w.k>0.5&&Math.abs(c.y-w.y)<20&&Math.abs(c.x-w.gx)<w.gw/2){m.caught++;S('snap');vib(120);c.stun=1;c.dir=-Math.PI/2;moveBack(c,w.gx-c.x,w.y+55-c.y);break}
   if(c.y<45)win(m,starsBy(m.caught,0,1))},
  draw(m){BG[o.bg](8);o.goal(200,22,m.t);
   for(const w of m.webs){const Lx=w.gx-w.gw/2,R=w.gx+w.gw/2;o.wall(0,Lx,w.y);o.wall(R,AW,w.y);
    const sh=w.ph==='warn'?Math.sin(m.t*40)*3:0,sz=18+w.k*20;if(w.k>0.2){g.fillStyle='rgba(0,0,0,.25)';g.beginPath();g.ellipse(w.gx,w.y+6,sz*0.7,sz*0.35,0,0,TAU);g.fill()}
    if(o.thread){g.strokeStyle='rgba(255,255,255,.6)';g.lineWidth=1.5;g.beginPath();g.moveTo(w.gx,-10);g.lineTo(w.gx,w.y-6+w.k*6);g.stroke()}
    emo(o.dropper,w.gx+sh,w.y-24+w.k*24,sz);if(w.ph==='warn')emo('❗',w.gx+22,w.y-30,16)}
   drawHero(m.cat)},
  hud:m=>`${o.icon} caught ${m.caught}`});
// raft / current: two thumbs = two oars (or flippers, or paddles)
T.raft=o=>({ctrl:'raft',...o,
  init(m){raftInit(m,o)},
  update(m,dt,now){raftUpd(m,dt,now);if(m.done){const b=m.bumps;win(m,o.petals?(b<=1&&m.pet>=6?3:b<=3&&m.pet>=3?2:1):starsBy(b,1,3))}if(m.over)lose(m,o.overMsg||'Whoosh — over the waterfall! Land on the beach next time.')},
  draw(m){raftDraw(m,o)},hud:m=>o.petals?`${o.petE||'🌸'} ${m.pet}/${m.petals.length}   💥 ${m.bumps}`:`💥 ${m.bumps}`});
// side-view jump: tap = little hop, hold = big jump. No steering.
T.jump=o=>({ctrl:'jump',...o,
  init(m){m.limit=0;m.x=0;m.y=0;m.vy=0;m.gnd=1;m.hold=0;m.ht=0;m.mis=0;m.fallT=0;m.stun=0;m.trail=[];const r=rng(o.seed);m.obs=[];let x=260;
   for(const k of o.seq){const w=k==='s'?34+r()*10:k==='l'?86+r()*16:k==='m'?58+r()*8:24;m.obs.push({t:k==='r'?'rock':'gap',x,w,h:22});x+=w+150+r()*90}m.end=x+120},
  press(m){if(m.gnd&&m.fallT<=0&&m.stun<=0){m.vy=300;m.gnd=0;m.hold=1;m.ht=0;S('boing')}},
  release(m){m.hold=0},
  update(m,dt){if(m.fallT>0){m.fallT-=dt;if(m.fallT<=0){m.x=m.respX;m.y=0;m.vy=0;m.gnd=1;m.trail=[]}return}
   if(m.stun>0){m.stun-=dt;return}
   m.x+=o.spd*dt;if(!m.gnd){if(m.hold&&m.ht<0.4&&m.vy>0){m.ht+=dt;m.vy-=300*dt}else{m.hold=0;m.vy-=1500*dt}m.y+=m.vy*dt;
    if(m.y<=0){m.y=0;m.vy=0;m.gnd=1;const gp=m.obs.find(q=>q.t==='gap'&&m.x>q.x+4&&m.x<q.x+q.w-4);if(gp)return this.splash(m,gp);S('tap')}}
   else{const gp=m.obs.find(q=>q.t==='gap'&&m.x>q.x+6&&m.x<q.x+q.w-6);if(gp)return this.splash(m,gp)}
   for(const q of m.obs)if(q.t==='rock'&&!q.hit&&Math.abs(m.x-q.x)<q.w/2+8&&m.y<q.h-4){q.hit=1;m.mis++;m.stun=0.6;m.x=q.x-q.w/2-30;S('boing');vib(80)}
   m.trail.unshift({x:m.x,y:m.y});if(m.trail.length>200)m.trail.pop();
   if(m.x>=m.end)win(m,starsBy(m.mis,0,2))},
  splash(m,q){m.mis++;m.fallT=0.9;m.respX=q.x-70;S('splash');vib(100)},
  draw(m){const G=380,cx=110,X=wx=>cx+(wx-m.x);
   g.fillStyle=o.sky;g.fillRect(0,0,AW,AH);g.fillStyle=o.water;g.fillRect(0,G,AW,AH-G);
   const r=rng(9);for(let i=0;i<8;i++){const x=((r()*900-m.x*0.3)%900+900)%900-200,y=60+r()*160;emo(o.far,x,y,30)}
   let a=X(-500);const segs=[];for(const q of m.obs.filter(q=>q.t==='gap')){segs.push([a,X(q.x)]);a=X(q.x+q.w)}segs.push([a,X(m.end+600)]);
   for(const[s0,s1]of segs){if(s1<-20||s0>AW+20)continue;if(o.lily){g.fillStyle='#3f9e3a';for(let x=s0;x<s1-10;x+=30){g.beginPath();g.ellipse(x+15,G+4,17,7,0,0.25,TAU-0.25);g.lineTo(x+15,G+4);g.fill()}}
    else{g.fillStyle=o.ground;g.fillRect(s0,G,s1-s0,AH-G);g.fillStyle=o.top;g.fillRect(s0,G,s1-s0,8)}}
   for(const q of m.obs){const sx=X(q.x);if(sx<-80||sx>AW+40)continue;if(q.t==='rock')PROP.pebble(sx,G-10,14);else{g.fillStyle='rgba(255,255,255,.35)';g.fillRect(sx+4,G+10,q.w-8,3);
     g.fillStyle='#fff';g.font='700 12px "Baloo 2",system-ui';g.textAlign='center';g.fillText(q.w>75?'HOLD!':q.w>50?'hold a bit':'tap',sx+q.w/2,G+34)}}
   const fx=X(m.end);if(fx<AW+40)o.goal(fx,G-30,m.t);
   const c={x:cx,y:G-12-m.y*0.9,dir:-m.vy/600,trail:[],stun:m.stun};
   for(let i=0;i<200;i++){const p=m.trail[Math.min(m.trail.length-1,Math.floor(i/1.3))];c.trail.push(p?{x:cx+(p.x-m.x),y:G-12-p.y*0.9}:{x:cx-i,y:G-12})}
   if(m.fallT>0){g.globalAlpha=m.fallT;emo('💦',cx,G,30);g.globalAlpha=1}else drawHero(c);
   if(m.t<4){g.fillStyle='rgba(255,255,255,.95)';g.font='800 18px "Baloo 2",system-ui';g.textAlign='center';g.fillText('TAP = little hop · HOLD = big jump',AW/2,120)}
   g.fillStyle='rgba(0,0,0,.2)';g.fillRect(20,20,AW-40,8);g.fillStyle='#ffd23f';g.fillRect(20,20,(AW-40)*clamp(m.x/m.end,0,1),8)},
  hud:m=>`❌ ${m.mis}`});
// chameleon tongue: tap when a bug is on the line; don't eat bees
T.tongue=o=>({ctrl:'tap',...o,
  init(m){m.limit=o.limit;m.bugs=[];m.next=0.6;m.got=0;m.bad=0;m.tg=0;m.tgDir=0;m.stuck=null;m.stun=0;m.r=rng(o.seed)},
  press(m){if(m.tgDir===0&&m.stun<=0){m.tgDir=1;S('whoosh')}},
  update(m,dt){m.next-=dt;if(m.stun>0)m.stun-=dt;
   if(m.next<=0){m.next=o.every*(0.6+m.r()*0.8);const Lf=m.r()<0.5,bad=m.r()<o.bad;m.bugs.push({x:Lf?-20:AW+20,y:150+m.r()*270,v:(Lf?1:-1)*(o.v[0]+m.r()*(o.v[1]-o.v[0])),bad,ph:m.r()*6})}
   for(const b of m.bugs){b.x+=b.v*dt;b.y+=Math.sin(m.t*5+b.ph)*20*dt}m.bugs=m.bugs.filter(b=>b.x>-40&&b.x<AW+40&&!b.gone);
   if(m.tgDir){m.tg+=m.tgDir*1500*dt;if(m.tg>=360){m.tg=360;m.tgDir=-1}const tip=480-m.tg;
    if(m.tgDir>0&&!m.stuck)for(const b of m.bugs)if(Math.abs(b.x-200)<17&&b.y>tip-10&&b.y<480){m.stuck=b;b.gone=1;m.tgDir=-1;break}
    if(m.tg<=0){m.tg=0;m.tgDir=0;if(m.stuck){if(m.stuck.bad){m.bad++;m.stun=1.2;S('failBig');vib(150)}else{m.got++;S('ding')}m.stuck=null}}}},
  timeUp(m){return m.got>=o.th[2]&&m.bad===0?3:m.got>=o.th[1]?2:m.got>=o.th[0]?1:0},
  draw(m){BG.jungle(12);g.fillStyle='rgba(0,0,0,.1)';g.fillRect(186,120,28,360);
   for(const b of m.bugs)bug(b,m.t);
   g.strokeStyle='#7a4f2a';g.lineWidth=14;g.lineCap='round';g.beginPath();g.moveTo(-10,515);g.lineTo(AW+10,505);g.stroke();
   if(m.tg>0){g.strokeStyle='#ff6f91';g.lineWidth=5;g.beginPath();g.moveTo(200,478);g.lineTo(200,480-m.tg);g.stroke();g.fillStyle='#ff4f7a';g.beginPath();g.arc(200,480-m.tg,7,0,TAU);g.fill();
    if(m.stuck)bug({...m.stuck,x:200,y:480-m.tg},m.t)}
   const c=mkCat(200,486,-Math.PI/2);c.stun=m.stun;const k=HERO;HERO='cham';drawHero(c,1.4);HERO=k;
   if(m.t<3.5){g.fillStyle='rgba(255,255,255,.95)';g.font='800 18px "Baloo 2",system-ui';g.textAlign='center';g.fillText('TAP when a fly is on the dark line!',AW/2,100)}},
  hud:m=>`🪰 ${m.got}   🐝 ${m.bad}`});
function bug(b,t){if(b.bad){emo('🐝',b.x,b.y,26,0,b.v<0);return}g.fillStyle='#333';g.beginPath();g.ellipse(b.x,b.y,6,4,0,0,TAU);g.fill();g.fillStyle='rgba(200,230,255,.85)';const f=Math.sin(t*40)*3;
  g.beginPath();g.ellipse(b.x-2,b.y-5,5,3+f*0.3,0.4,0,TAU);g.fill();g.beginPath();g.ellipse(b.x+2,b.y-5,5,3+f*0.3,-0.4,0,TAU);g.fill()}
// boss: hide under cover when the shadow comes, freeze, then circle the target 3 times
T.hide=o=>({ctrl:'stop',boss:true,...o,
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=150;m.spot=0;m.lives=3;m.r=rng(1010);m.check={x:200,y:525};
   m.covers=o.covers.map(c=>({...c}));m.twig={...o.target};m.bird={ph:'wait',pt:3.2,x:0,y:0,vx:0,vy:0};m.lap=0;m.lastA=null;m.inv=0;m.phase='go'},
  update(m,dt){m.inv-=dt;const c=m.cat,b=m.bird;
   if(m.phase==='spin'){steerCat(c,dt,o.spd*0.8,'go');const d=hyp(c.x-m.twig.x,c.y-m.twig.y),a=Math.atan2(c.y-m.twig.y,c.x-m.twig.x);
    if(d>24&&d<95){if(m.lastA!=null)m.lap+=wrap(a-m.lastA);m.lastA=a}else m.lastA=null;c.x=clamp(c.x,14,AW-14);c.y=clamp(c.y,14,AH-14);
    if(Math.abs(m.lap)>=TAU*3){S('champion');win(m,starsBy(m.spot,0,1))}return}
   b.pt-=dt;const T0=1.7-Math.min(0.5,m.t/120);
   if(b.ph==='wait'&&b.pt<=0){b.ph='warn';b.pt=1.3;S('wake');const fromL=m.r()<0.5;b.x=fromL?-120:AW+120;b.y=120+m.r()*320;const tx=fromL?AW+140:-140,ty=120+m.r()*320;b.vx=(tx-b.x)/T0;b.vy=(ty-b.y)/T0}
   else if(b.ph==='warn'&&b.pt<=0){b.ph='fly';b.pt=T0;S('whoosh')}
   else if(b.ph==='fly'){b.x+=b.vx*dt;b.y+=b.vy*dt;if(b.pt<=0){b.ph='wait';b.pt=2.6+m.r()*2.2}}
   const mov=steerCat(c,dt,o.spd,'stop',bounds);
   for(const k of m.covers)if(hyp(c.x-k.x,c.y-k.y)<k.r*0.6)m.check={x:k.x,y:k.y};
   if(b.ph==='fly'&&m.inv<=0&&hyp(c.x-b.x,c.y-b.y)<85){const hid=m.covers.some(k=>hyp(c.x-k.x,c.y-k.y)<k.r-6);if(!hid||mov){m.spot++;m.lives--;m.inv=1.6;S('failBig');vib(160);
     if(m.lives<=0)return lose(m,o.loseMsg);m.cat=mkCat(m.check.x,m.check.y,-Math.PI/2);m.cat.stun=1}}
   if(hyp(c.x-m.twig.x,c.y-m.twig.y)<70){m.phase='spin';b.ph='gone';S('cheer');m.msgT=2.2}},
  draw(m){BG[o.bg](10);const c=m.cat,b=m.bird;o.targetDraw(m.twig.x,m.twig.y,m.t);
   if(m.phase==='spin'){g.strokeStyle='rgba(255,255,255,.7)';g.setLineDash([6,8]);g.lineWidth=2;g.beginPath();g.arc(m.twig.x,m.twig.y,55,0,TAU);g.stroke();g.setLineDash([]);
    const n=Math.min(3,Math.abs(m.lap)/TAU);g.strokeStyle='rgba(255,248,220,.95)';g.lineWidth=4;g.beginPath();g.arc(m.twig.x,m.twig.y,14+n*5,0,TAU*Math.min(1,n/3));g.stroke()}
   drawHero(c);
   for(const k of m.covers){g.globalAlpha=hyp(c.x-k.x,c.y-k.y)<k.r?0.72:0.95;o.cover(k.x,k.y,k.r);g.globalAlpha=1}
   if(b.ph==='fly'){g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(b.x,b.y,85,60,Math.atan2(b.vy,b.vx),0,TAU);g.fill();emo(o.hunter,b.x,b.y-10,44,0,b.vx<0)}
   if(b.ph==='warn'){frame('#ffcc00',m.t);bigText(o.warnTxt,90)}
   if(m.phase==='spin'&&m.msgT>0){m.msgT-=1/60;bigText(o.spinTxt,90)}},
  hud:m=>m.phase==='spin'?`🌀 lap ${Math.min(3,Math.floor(Math.abs(m.lap)/TAU))}/3`:`${'❤️'.repeat(Math.max(0,m.lives))}   👀 spotted ${m.spot}`});

// ---------- raft engine ----------
function raftInit(m,o){const r=rng(o.seed);Object.assign(m,{cur:o.cur,beach:null,t:0,limit:0,bumps:0,cool:0,pet:0,done:0,over:0});
  m.cx=y=>200+55*Math.sin(y/260)+25*Math.sin(y/97);m.hwAt=y=>o.hw+12*Math.sin(y/180);
  m.raft={x:m.cx(0),y:0,a:-Math.PI/2,vx:0,vy:0,w:0};m.cam=-430;
  m.rocks=[];for(let i=0;i<o.rocks;i++){const y=-260-i*(o.len-500)/o.rocks-r()*60,c=m.cx(y),hw=m.hwAt(y);m.rocks.push({x:c+(r()*2-1)*(hw-40),y,r:16+r()*12})}
  m.whirls=[];for(let i=0;i<o.whirls;i++){const y=-500-i*(o.len-900)/Math.max(1,o.whirls)-r()*120;m.whirls.push({x:m.cx(y)+(r()*2-1)*(m.hwAt(y)-60),y,r:44})}
  m.petals=[];for(let i=0;i<(o.petals||0);i++){const y=-200-i*(o.len-400)/o.petals,c=m.cx(y);let x,n=0;do{x=c+(r()*2-1)*(m.hwAt(y)-30)}while(n++<30&&m.rocks.some(k=>hyp(k.x-x,k.y-y)<k.r+22));m.petals.push({x,y})}
  if(o.beach){const y=-o.len+260;m.beach={y,side:r()<0.5?-1:1,h:150}}m.end=-o.len}
function raftUpd(m,dt,now){m.cool-=dt;const R=m.raft,j=stick();
  if(j.on){const d=wrap(j.a-R.a);R.w+=clamp(d*6,-6,6)*dt;const hx=Math.cos(R.a),hy=Math.sin(R.a),th=110*Math.max(0,Math.cos(d));R.vx+=hx*th*dt;R.vy+=hy*th*dt}
  for(const w of m.whirls){const dx=R.x-w.x,dy=R.y-w.y,d=hyp(dx,dy);if(d<w.r&&d>0.1){R.w+=2.6*dt;R.vx+=(-dy/d)*80*dt-dx/d*25*dt;R.vy+=(dx/d)*80*dt-dy/d*25*dt}}
  const dr=Math.exp(-dt/1.1);R.vx*=dr;R.vy*=dr;R.w*=Math.exp(-dt/0.7);const sp=hyp(R.vx,R.vy);if(sp>140){R.vx*=140/sp;R.vy*=140/sp}
  R.a+=R.w*dt;R.x+=R.vx*dt;R.y+=(R.vy-m.cur)*dt;
  const c=m.cx(R.y),hw=m.hwAt(R.y);
  if(m.beach&&Math.abs(R.y-m.beach.y)<m.beach.h/2&&(R.x-c)*m.beach.side>hw-26){m.done=1;S('cheer');return}
  if(Math.abs(R.x-c)>hw-18){const s=Math.sign(R.x-c);R.x=c+s*(hw-18);R.vx=-s*Math.abs(R.vx)*0.6-s*30;bump(m)}
  for(const k of m.rocks){const dx=R.x-k.x,dy=R.y-k.y,d=hyp(dx,dy),rr=k.r+16;if(d<rr&&d>0.1){R.x=k.x+dx/d*rr;R.y=k.y+dy/d*rr;const vn=R.vx*dx/d+R.vy*dy/d;if(vn<0){R.vx-=1.6*vn*dx/d;R.vy-=1.6*vn*dy/d}R.vy+=20;bump(m)}}
  for(const p of m.petals)if(!p.got&&hyp(p.x-R.x,p.y-R.y)<24){p.got=1;m.pet++;S('ding')}
  m.cam+=((R.y-400)-m.cam)*(1-Math.exp(-dt/0.25));
  if(R.y<m.end+(m.beach?40:0)){if(m.beach)m.over=1;else{m.done=1;S('cheer')}}}
function bump(m){if(m.cool>0)return;m.cool=0.7;m.bumps++;S('boing');vib(70)}
function raftDraw(m,o){const R=m.raft;g.fillStyle=o.bank||'#7cc35a';g.fillRect(0,0,AW,AH);g.save();g.translate(0,-m.cam);
  const y0=m.cam-20,y1=m.cam+AH+20;
  g.fillStyle=o.water||'#4aa3df';g.beginPath();for(let y=y0;y<=y1;y+=10)g.lineTo(m.cx(y)-m.hwAt(y),y);for(let y=y1;y>=y0;y-=10)g.lineTo(m.cx(y)+m.hwAt(y),y);g.fill();
  g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=2;for(let y=Math.floor(y0/40)*40;y<y1;y+=40){const off=(m.t*m.cur)%40,yy=y-off,c=m.cx(yy);for(const dx of[-60,0,55]){g.beginPath();g.moveTo(c+dx-10,yy+8);g.lineTo(c+dx,yy);g.lineTo(c+dx+10,yy+8);g.stroke()}}
  if(m.beach){const b=m.beach;g.fillStyle='#f1d58a';g.beginPath();for(let y=b.y-b.h/2;y<=b.y+b.h/2;y+=10)g.lineTo(m.cx(y)+b.side*(m.hwAt(y)-34),y);for(let y=b.y+b.h/2;y>=b.y-b.h/2;y-=10)g.lineTo(m.cx(y)+b.side*(m.hwAt(y)+40),y);g.fill();
    emo('🏖️',m.cx(b.y)+b.side*(m.hwAt(b.y)-4),b.y,30);g.fillStyle='#7a5200';g.font='bold 15px "Baloo 2",system-ui';g.textAlign='center';g.fillText('LAND HERE',m.cx(b.y)+b.side*(m.hwAt(b.y)-60),b.y-b.h/2-6)}
  if(m.end>y0-200){const yy=m.end;g.fillStyle='rgba(255,255,255,.8)';g.fillRect(0,yy-30,AW,30);g.fillStyle=m.beach?'#1b4f7a':'#2a7a2a';g.font='800 20px "Baloo 2",system-ui';g.textAlign='center';g.fillText(m.beach?(o.endWord||'⚠️ WATERFALL ⚠️'):'🏁 FINISH 🏁',AW/2,yy-8)}
  for(const w of m.whirls)for(let k=0;k<3;k++){g.strokeStyle=`rgba(255,255,255,${0.5-k*0.12})`;g.lineWidth=3;g.beginPath();g.arc(w.x,w.y,w.r*(0.35+k*0.25),m.t*3+k,m.t*3+k+4.2);g.stroke()}
  for(const k of m.rocks)PROP[o.rock||'pebble'](k.x,k.y,k.r);for(const p of m.petals)if(!p.got)emo(o.petE||'🌸',p.x,p.y,20);
  if(o.vessel==='turtle'){const k=HERO;HERO='turtle';drawTurtle({x:R.x,y:R.y,dir:R.a,stun:0},1.15);HERO=k}
  else{g.save();g.translate(R.x,R.y);g.rotate(R.a+Math.PI/2);if(o.vessel==='log'){g.fillStyle='#8a5a2b';g.fillRect(-14,-30,28,60);g.strokeStyle='#5f3d1c';g.lineWidth=2;for(let i=-20;i<=20;i+=10){g.beginPath();g.moveTo(-14,i);g.lineTo(14,i);g.stroke()}}else leafShape(0,0,15,30,'#d98a2b','#a8611a');g.restore();
   const c={x:R.x+Math.cos(R.a)*12,y:R.y+Math.sin(R.a)*12,dir:R.a,trail:[],stun:0};for(let i=0;i<60;i++)c.trail.push({x:c.x-Math.cos(R.a)*i*0.5,y:c.y-Math.sin(R.a)*i*0.5});drawHero(c,0.75)}
  g.restore()}

// ---------- the three adventures ----------
const leafCover=(x,y,r)=>leafShape(x,y,r*0.62,r,'#2f7d2a','#245f20');
const grassCover=(x,y,r)=>{g.fillStyle='#2f8a3b';g.beginPath();g.arc(x,y,r*0.85,0,TAU);g.fill();g.strokeStyle='#3fae48';g.lineWidth=4;for(let i=0;i<10;i++){const a=i/10*TAU;g.beginPath();g.moveTo(x+Math.cos(a)*r*0.3,y+Math.sin(a)*r*0.3);g.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r);g.stroke()}};
const rockCover=(x,y,r)=>{g.fillStyle='#7d736a';g.beginPath();g.ellipse(x,y,r,r*0.8,0.2,0,TAU);g.fill();g.fillStyle='#9c9186';g.beginPath();g.ellipse(x-r*0.25,y-r*0.25,r*0.5,r*0.35,0.2,0,TAU);g.fill()};
const STONES=[{x:120,y:430,r:26},{x:270,y:440,r:22},{x:200,y:340,r:30},{x:90,y:260,r:24},{x:310,y:250,r:28},{x:180,y:190,r:22}];
const COVERS=[{x:100,y:420,r:50},{x:300,y:300,r:50},{x:110,y:190,r:48},{x:300,y:440,r:42}];
const ADV=[
 {hero:'cat',title:"Caterpillar's Adventure",color:'linear-gradient(135deg,#3c9a2e,#7cc242)',img:'cat',friends:{2:'inch',4:'centi',6:'snail'},reward:'turtle',
  endTitle:'🦋 Cocoon spun!',endText:'The caterpillar sleeps in its cocoon… and wakes up as a <b>butterfly</b>!',endA:'🐛',endB:'🦋',
  ms:[
  T.collect({name:'Dewdrop breakfast',e:'💧',story:'Collect all 6 dewdrops on the leaf. Don\'t crawl off the edge!',stars:['Collect all 6 dewdrops','1 mistake or less','No mistakes'],
    shape:'leaf',n:6,spd:70,icon:'💧',item:dew,hz:()=>{},seed:11}),
  T.eat({name:'Munch the leaf',e:'🍃',story:'You\'re hungry! Crawl over the leaf to eat it. Eat as much as you can before time runs out — don\'t fall off.',stars:['Eat 28% of the leaf','Eat 40%','Eat 50%'],
    spd:75,limit:40,th:[28,40,50],icon:'🍃'}),
  T.cross({name:'Ant parade',e:'🐜',story:'Four lines of ants are marching! Let go to stop and wait for a gap, then cross to the flower.',stars:['Reach the flower','2 bumps or less','No bumps'],
    bg:'dirt',who:'ant',spd:75,icon:'🐜',goal:(x,y,t)=>flower(x,y,30,t),rows:[{y:430,v:38,o:0},{y:340,v:-52,o:60},{y:250,v:64,o:130},{y:160,v:-80,o:20}]}),
  T.raft({name:'Leaf raft',e:'🍂',story:'Ride a leaf down the stream! Push the joystick the way you want to paddle — the leaf turns slowly and glides. Dodge rocks and whirlpools, pick up petals.',
    stars:['Reach the end of the stream','3 bumps or less and 3+ petals','1 bump or less and 6+ petals'],len:2300,cur:52,hw:128,seed:41,rocks:9,whirls:2,petals:8,vessel:'leaf',oarL:'OAR'}),
  T.maze({name:'Mole tunnels',e:'🕳️',story:'Find the way out of the tunnels. Moles are patrolling! Let go to stop and hide in a side tunnel until they pass.',stars:['Find the way out','Caught once or less','Never caught'],
    map:['#E######','#.#....#','#.#.##.#','#...#..#','###.#.##','#...#..#','#.####.#','#......#','#.##.###','#.#..#.#','#S#....#'],start:[1,10],exit:[1,0],checks:[[1,7],[3,5]],
    pats:[{path:[[1,7],[6,7]],sp:52},{path:[[1,5],[3,5],[3,3],[1,3]],sp:46,s:0.5}],spd:80,who:'mole',wallC:'#6b4a2e',floorC:'#a77d52',dotC:'#5a3d24',exitE:'☀️',icon:'🐹'}),
  T.follow({name:'Ladybug babies',e:'🐞',story:'Three baby ladybugs ride behind you. Take them to the flower! Turn smoothly — a sharp U-turn makes a baby fall off (touch it to pick it up).',stars:['Bring 1 baby','Bring 2 babies','Bring all 3'],
    bg:'grass',kid:'lady',prop:'pebble',spd:80,icon:'🐞',goal:(x,y,t)=>flower(x,y,32,t),stones:[{x:110,y:420,r:30},{x:300,y:350,r:34},{x:160,y:250,r:30},{x:290,y:160,r:26},{x:90,y:120,r:24}]}),
  T.freeze({name:'Sleeping bee',e:'🐝',story:'A bee is sleeping on the flower. Sneak up to the nectar! When it wakes up, let go and FREEZE.',stars:['Reach the nectar','Caught once or less','Never caught'],
    bg:'grass',prop:'pebble',spd:62,icon:'🐝',watcher:'🐝',stones:STONES,home:()=>{flower(200,60,40,0);g.fillStyle='#ffe066';g.beginPath();g.arc(200,110,14,0,TAU);g.fill();emo('🍯',200,110,18)}}),
  T.jump({name:'Puddle hop',e:'💦',story:'It rained! You crawl by yourself — just jump over the puddles and pebbles. TAP for a little hop, HOLD for a big jump. Watch the puddle size!',
    stars:['Reach the flower','2 mistakes or less','No mistakes'],spd:125,seed:31,seq:['s','r','s','m','l','r','s','l','m','r','l','s','m','l'],
    sky:'#bfe6ff',water:'#5aa9e6',ground:'#a77d52',top:'#6fbf4a',far:'☁️',goal:(x,y,t)=>flower(x,y,30,t)}),
  T.raft({name:'Rapids!',e:'🌊',story:'The stream is faster now, and there is a WATERFALL at the end! Paddle with the joystick and get off the leaf at the sandy beach before the waterfall.',
    stars:['Land on the beach','3 bumps or less','1 bump or less'],len:2500,cur:78,hw:108,seed:93,rocks:12,whirls:3,beach:true,vessel:'leaf',oarL:'OAR'}),
  T.hide({name:'The hungry bird',e:'🐦',story:'BOSS! A bird is looking for a snack. When its shadow comes, hide under a big leaf and let go to freeze. Reach the twig, then crawl around it 3 times to spin your cocoon!',
    stars:['Spin your cocoon','Spotted once or less','Never spotted'],bg:'grass',spd:85,hunter:'🐦',cover:leafCover,warnTxt:'🐦 Bird coming — hide!',spinTxt:'Crawl around the twig 3 times!',
    loseMsg:'The bird spotted you 3 times. Hide under the leaves and freeze!',covers:COVERS,target:{x:290,y:85},
    targetDraw:(x,y)=>{g.strokeStyle='#7a4f2a';g.lineWidth=9;g.lineCap='round';g.beginPath();g.moveTo(x-60,y-40);g.lineTo(x,y);g.lineTo(x+30,y-55);g.stroke();g.fillStyle='#7a4f2a';g.beginPath();g.arc(x,y,10,0,TAU);g.fill()}})
 ]},
 {hero:'turtle',title:"Sea Turtle's Adventure",color:'linear-gradient(135deg,#1f7fc4,#4fc3e8)',img:'turtle',friends:{2:'puffer',4:'crab',6:'shrimp'},reward:'cham',
  endTitle:'🥚 Nest dug!',endText:'The sea turtle lays her eggs in the warm sand. Soon tiny turtles will race to the sea!',endA:'🐢',endB:'🥚',
  ms:[
  T.cross({name:'Race to the sea',e:'🦀',story:'You just hatched! Crawl down the beach to the sea. Ghost crabs scuttle across — let go to stop and wait for a gap.',stars:['Reach the water','2 bumps or less','No bumps'],
    bg:'sand',who:'crab',spd:70,icon:'🦀',hit:14,grp:3,gap:34,lane:'rgba(160,120,60,.15)',goal:(x,y)=>{g.fillStyle='#3f9fd6';g.fillRect(0,0,AW,66);emo('🌊',x,y,30)},rows:[{y:430,v:44,o:0},{y:330,v:-58,o:90},{y:230,v:70,o:40},{y:140,v:-86,o:150}]}),
  T.collect({name:'Jellyfish snack',e:'🍮',story:'Sea turtles love to eat jellyfish! Swim around and eat all 7 — but stay away from plastic bags.',stars:['Eat all 7 jellyfish','1 bump or less','No bumps'],
    shape:'pool',bg:'sand',pool:'#2f8fc6',n:7,spd:75,icon:'🎐',seed:21,item:(x,y,t)=>jelly(x,y,t,1.2),
    hazards:[{cx:120,cy:200,ax:60,ay:40,sp:1.1,ph:0,r:14},{cx:280,cy:330,ax:60,ay:60,sp:0.9,ph:2,r:14},{cx:200,cy:430,ax:90,ay:20,sp:1.3,ph:4,r:14}],hz:(x,y)=>emo('🛍️',x,y,26)}),
  T.raft({name:'Ride the current',e:'🌀',story:'Catch the ocean current! Push the joystick the way you want to swim — your flippers take you there. Grab the sea stars, dodge the coral.',
    stars:['Reach the reef','3 bumps or less and 3+ stars','1 bump or less and 6+ stars'],len:2300,cur:56,hw:124,seed:52,rocks:10,whirls:2,petals:8,petE:'⭐',vessel:'turtle',water:'#2f8fc6',bank:'#e7d39a',rock:'coral',oarL:'FLIPPER'}),
  T.eat({name:'Seagrass lunch',e:'🌱',story:'Grown-up green sea turtles munch seagrass. Graze the meadow — eat as much as you can before time runs out!',stars:['Eat 28% of the meadow','Eat 40%','Eat 50%'],
    meadow:true,bg:'sand',spd:80,limit:40,th:[28,40,50],icon:'🌱'}),
  T.maze({name:'Coral caves',e:'🪸',story:'Swim out of the coral caves. Moray eels patrol the tunnels — let go to stop and hide until they pass.',stars:['Find the way out','Caught once or less','Never caught'],
    map:['######E#','#....#.#','#.##.#.#','#.#....#','#.#.####','#...#..#','###.#.##','#.....##','#.##.#.#','#...#..#','###S####'],start:[3,10],exit:[6,0],checks:[[3,7],[4,3]],
    pats:[{path:[[1,7],[5,7]],sp:55},{path:[[3,3],[6,3],[6,1]],sp:48,s:0.3}],spd:80,who:'eel',wallC:'#1d5f8a',floorC:'#3f9fd6',dotC:'#2b7bb0',exitE:'🌞',icon:'🐍'}),
  T.follow({name:'Baby fish school',e:'🐠',story:'Three baby fish follow you home to the reef. Turn smoothly — a sharp U-turn makes one get lost (touch it to pick it up).',stars:['Bring 1 fish','Bring 2 fish','Bring all 3'],
    bg:'sea',kid:'fish',prop:'coral',spd:82,icon:'🐠',goal:(x,y)=>{coral(x-20,y,22);coral(x+20,y+4,18)},stones:[{x:120,y:420,r:30},{x:290,y:350,r:32},{x:170,y:250,r:30},{x:300,y:170,r:26},{x:90,y:130,r:24}]}),
  T.gaps({name:'Clam gates',e:'🦪',story:'Three rock walls, each with one gap. A crab snaps its claws into the gap now and then — wait, then swim through!',stars:['Get through all gaps','Caught once or less','Never caught'],
    bg:'sea',spd:80,icon:'🦀',dropper:'🦀',seed:66,goal:(x,y)=>emo('🐚',x,y+6,24),walls:[{y:430,gx:110,gw:74},{y:300,gx:290,gw:70},{y:170,gx:150,gw:66}],
    wall:(a,b,y)=>{g.fillStyle='#7d736a';g.fillRect(a,y-9,b-a,18);g.fillStyle='#9c9186';for(let x=a+8;x<b;x+=20){g.beginPath();g.arc(x,y-2,6,0,TAU);g.fill()}}}),
  T.freeze({name:'Sleepy shark',e:'🦈',story:'A nurse shark naps in front of a yummy sponge. Sneak in! When it opens its eyes, let go and FREEZE.',stars:['Reach the sponge','Caught once or less','Never caught'],
    bg:'sea',prop:'coral',spd:64,icon:'🦈',watcher:'🦈',warn:0.8,stones:STONES,
    home:()=>{g.fillStyle='#ffd23f';g.beginPath();g.arc(200,110,16,0,TAU);g.fill();g.fillStyle='#e0a000';for(let i=0;i<6;i++){g.beginPath();g.arc(200+Math.cos(i)*8,110+Math.sin(i)*8,3,0,TAU);g.fill()}}}),
  T.raft({name:'Storm swim',e:'⛈️',story:'A storm makes the current super strong! Swim with the joystick and climb onto the beach before the big rock drop.',
    stars:['Reach the beach','3 bumps or less','1 bump or less'],len:2500,cur:80,hw:106,seed:77,rocks:12,whirls:3,beach:true,vessel:'turtle',water:'#2577ad',bank:'#e7d39a',rock:'coral',oarL:'FLIPPER',endWord:'⚠️ ROCK DROP ⚠️',overMsg:'Whoosh — over the rock drop! Get to the beach next time.'}),
  T.hide({name:'Tiger shark',e:'🦈',story:'BOSS! A tiger shark is cruising. When its shadow comes, hide in the seagrass and let go to freeze. Reach the beach, then crawl around the nest spot 3 times to dig your nest!',
    stars:['Dig your nest','Spotted once or less','Never spotted'],bg:'sea',spd:85,hunter:'🦈',cover:grassCover,warnTxt:'🦈 Shark coming — hide!',spinTxt:'Go around the nest spot 3 times!',
    loseMsg:'The shark spotted you 3 times. Hide in the seagrass and freeze!',covers:COVERS,target:{x:290,y:85},
    targetDraw:(x,y)=>{g.fillStyle='#ecd59a';g.beginPath();g.ellipse(x,y,70,46,0,0,TAU);g.fill();g.fillStyle='#d9bd78';g.beginPath();g.arc(x,y,14,0,TAU);g.fill()}})
 ]},
 {hero:'cham',title:"Chameleon's Adventure",color:'linear-gradient(135deg,#7a4fd0,#e0702a)',img:'frill',friends:{2:'garter',4:'basil',6:'frill'},reward:'imugi',
  endTitle:'✨ The pearl is yours!',endText:'The Imugi bows to you — you are a true legend! Now you can race as the <b>Imugi</b>.',endA:'🐉',endB:'✨',
  ms:[
  T.tongue({name:'Sticky tongue',e:'👅',story:'You are a hungry chameleon on a branch. TAP to shoot your tongue straight up when a fly crosses the dark line. Don\'t eat the bees!',
    stars:['Catch 5 flies','Catch 8 flies','Catch 10 flies and no bees'],limit:40,th:[5,8,10],every:1.1,bad:0.22,v:[60,120],seed:3}),
  T.collect({name:'Cricket hunt',e:'🦗',story:'Crawl along the big jungle leaf and grab 7 crickets. Don\'t fall off!',stars:['Catch all 7 crickets','1 mistake or less','No mistakes'],
    shape:'leaf',bg:'jungle',leaf:'#3f8f3a',n:7,spd:72,icon:'🦗',seed:17,item:(x,y)=>emo('🦗',x,y,20),hz:()=>{}}),
  T.freeze({name:'Hawk watch',e:'🦅',story:'A hawk is watching from the tree. Sneak to the fruit! When it turns to look, let go and FREEZE — chameleons are great at staying still.',stars:['Reach the fruit','Caught once or less','Never caught'],
    bg:'jungle',prop:'rock',spd:62,icon:'🦅',watcher:'🦅',warnTxt:'👀 It\'s turning!',stones:STONES,home:()=>emo('🍊',200,110,30)}),
  T.jump({name:'Lily pad hop',e:'🪷',story:'Hop across the pond on lily pads! You keep moving — TAP for a little hop, HOLD for a big jump. Don\'t splash in!',
    stars:['Reach the other side','2 splashes or less','No splashes'],spd:130,seed:44,seq:['s','m','s','l','m','s','l','l','m','s','l','m','l','s','l'],
    sky:'#cfeccc',water:'#4d9fc9',lily:true,far:'🌿',goal:(x,y,t)=>flower(x,y,26,t,'#ff9ad0')}),
  T.maze({name:'Desert burrows',e:'🦂',story:'Find your way out of the sandy burrows. Scorpions patrol — let go to stop and hide until they pass.',stars:['Find the way out','Caught once or less','Never caught'],
    map:['#E######','#.#....#','#.#.##.#','#...#..#','#.#.#.##','#.#...##','#.####.#','#......#','###.##.#','#...#..#','#.#S####'],start:[3,10],exit:[1,0],checks:[[3,7],[3,3]],
    pats:[{path:[[1,7],[6,7]],sp:55},{path:[[1,1],[1,5]],sp:45,s:0.6},{path:[[3,1],[6,1]],sp:40}],spd:80,who:'scorp',wallC:'#b0844a',floorC:'#e6c987',dotC:'#c9a464',exitE:'🌵',icon:'🦂'}),
  T.tongue({name:'Bug rush',e:'🪰',story:'Lots of bugs and they are fast! TAP to catch them on the dark line. More bees today — watch out!',
    stars:['Catch 6 bugs','Catch 9 bugs','Catch 12 bugs and no bees'],limit:40,th:[6,9,12],every:0.8,bad:0.3,v:[90,170],seed:8}),
  T.cross({name:'Tumbleweed wind',e:'🌪️',story:'The desert wind blows tumbleweeds across your path. Let go to stop, wait for a gap, and cross to the cactus flower.',stars:['Reach the cactus','2 bumps or less','No bumps'],
    bg:'sand',who:'weed',spd:75,icon:'🌾',hit:15,grp:2,gap:46,lane:'rgba(160,120,60,.12)',goal:(x,y,t)=>{cactus(x,y+8,22);flower(x,y-14,10,t,'#ff6fae')},rows:[{y:430,v:60,o:0},{y:340,v:-75,o:60},{y:250,v:90,o:130},{y:160,v:-105,o:20}]}),
  T.gaps({name:'Vine curtains',e:'🌿',story:'Thick vines block the jungle, each with one gap. A snake drops into the gap now and then — wait, then slip through!',stars:['Get through all vines','Caught once or less','Never caught'],
    bg:'jungle',spd:82,icon:'🐍',dropper:'🐍',thread:true,seed:12,goal:(x,y)=>emo('🍌',x,y+6,24),walls:[{y:430,gx:290,gw:70},{y:300,gx:110,gw:66},{y:170,gx:250,gw:62}],
    wall:(a,b,y)=>{g.strokeStyle='#2f6e1f';g.lineWidth=4;for(let k=-1;k<=1;k++){g.beginPath();for(let x=a;x<=b;x+=6)g.lineTo(x,y+k*5+Math.sin(x/9+k)*3);g.stroke()}g.fillStyle='#4fae3a';for(let x=a+6;x<b;x+=18){g.beginPath();g.ellipse(x,y,5,3,0.6,0,TAU);g.fill()}}}),
  T.raft({name:'Jungle river',e:'🪵',story:'Ride a log down the jungle river! Paddle with the joystick and land on the beach before the waterfall!',
    stars:['Land on the beach','3 bumps or less','1 bump or less'],len:2500,cur:80,hw:106,seed:15,rocks:12,whirls:3,beach:true,vessel:'log',water:'#3a8f7a',bank:'#4f9a3a',oarL:'PADDLE'}),
  T.hide({name:'The Imugi',e:'🐉',story:'FINAL BOSS! The Imugi — a giant serpent from Korean legend — guards the waterfall pearl. When its shadow comes, hide behind a rock and freeze. Reach the pearl and circle it 3 times to wake its magic!',
    stars:['Win the pearl','Spotted once or less','Never spotted'],bg:'jungle',spd:88,hunter:'🐉',cover:rockCover,warnTxt:'🐉 The Imugi is coming!',spinTxt:'Circle the pearl 3 times!',
    loseMsg:'The Imugi spotted you 3 times. Hide behind the rocks and freeze!',covers:COVERS.map(c=>({...c,r:c.r-4})),target:{x:290,y:85},
    targetDraw:(x,y,t)=>{const gr=g.createRadialGradient(x,y,2,x,y,40);gr.addColorStop(0,'rgba(255,250,200,.95)');gr.addColorStop(1,'rgba(255,250,200,0)');g.fillStyle=gr;g.beginPath();g.arc(x,y,40,0,TAU);g.fill();g.fillStyle='#fffbe6';g.beginPath();g.arc(x,y+Math.sin(t*2)*3,11,0,TAU);g.fill()}})
 ]}
];

// ---------- play loop ----------
function startMission(i){const A=ADV[AV];HERO=A.hero;M={a:AV,i,def:A.ms[i],t:0,res:null};M.def.init.call(M.def,M);ptr.clear();joy=null;scr='play';M.count=3;M.cT=0;U.innerHTML='';S('beep')}
function win(m,stars){if(m.res)return;m.res={stars,win:true};finish()}
function lose(m,msg){if(m.res)return;m.res={stars:0,win:false,msg};finish()}
let Q=[];function nextQ(){const f=Q.shift();f&&f()}
function finish(){scr='result';const r=M.res,a=M.a,i=M.i,p=getP(a),first=r.stars>0&&!p[i],tot0=totStars();if(r.stars>p[i]){p[i]=r.stars;setP(a,p)}const dragon=tot0<DRAGON&&totStars()>=DRAGON;
  if(r.stars>0){S(r.stars===3?'winBig':'win');vib(80)}else{S('failBig');vib(200)}
  const A=ADV[a];Q=[];if(first&&A.friends[i])Q.push(()=>friendScr(A.friends[i],'joins your adventure!'));
  if(first&&i===9){Q.push(()=>endScr(A));Q.push(()=>friendScr(A.reward,a<2?`is the hero of the next adventure — <b>${esc(ADV[a+1].title)}</b> is open!`:'is yours!'))}
  if(dragon)Q.push(()=>friendScr('dragon','— the GOLDEN DRAGON — is yours for collecting 75 stars!'));
  Q.push(()=>resultScr(r));
  setTimeout(()=>{if(scr==='result')nextQ()},r.stars?700:900)}
function tick(now){raf=requestAnimationFrame(tick);if(!on)return;const dt=Math.min(0.05,(now-lastT)/1000);lastT=now;layout();
  g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,W,H);
  if((scr==='play'||scr==='result')&&M){
    const m=M,d=m.def;
    if(scr==='play'){if(m.count>0){m.cT+=dt;if(m.cT>=1){m.cT=0;m.count--;S(m.count?'beep':'go')}}
      else{m.t+=dt;d.update.call(d,m,dt,now);if(!m.res&&m.limit&&m.t>=m.limit){const s=d.timeUp?d.timeUp.call(d,m):0;if(s>0)win(m,s);else lose(m,'Time\'s up! Try again — you can do it.')}}}
    g.save();g.translate(ox,oy);g.scale(sc,sc);g.beginPath();g.rect(0,0,AW,AH);g.clip();d.draw.call(d,m);
    if(scr==='play'&&m.count>0){g.fillStyle='rgba(0,0,0,.25)';g.fillRect(0,0,AW,AH);g.font='800 80px "Baloo 2",system-ui';g.textAlign='center';g.fillStyle='#fff';g.fillText(m.count,AW/2,AH/2+25)}
    g.restore();g.setTransform(dpr,0,0,dpr,0,0);drawHud(m,d);drawPad(d,now)}
  else drawMapBg(now)}
function drawHud(m,d){g.fillStyle='rgba(20,60,30,.92)';g.fillRect(0,0,W,HUD);g.fillStyle='#fff';g.textBaseline='middle';
  g.font='800 18px "Baloo 2",system-ui';g.textAlign='center';g.fillText(`${d.e} ${m.i+1}. ${d.name}`,W/2,16);
  g.font='700 15px "Baloo 2",system-ui';const right=m.limit?`⏱ ${Math.max(0,Math.ceil(m.limit-m.t))}s`:'';
  g.fillText(`${d.hud(m)}${right?'   '+right:''}`,W/2,38);g.textBaseline='alphabetic';
  g.fillStyle='rgba(255,255,255,.18)';rr(8,7,40,40,10);g.fill();g.fillStyle='#fff';g.font='22px system-ui';g.textAlign='center';g.fillText('✕',28,35)}
function rr(x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
function drawPad(d,now){const y=H-PAD;g.fillStyle='rgba(30,80,40,.88)';rr(0,y,W,PAD+20,22);g.fill();g.textAlign='center';
  if(d.ctrl==='jump'||d.ctrl==='tap'){const dn=ptr.size>0||keys[' '];g.fillStyle=dn?'#ffd23f':'#ff8a2a';rr(W/2-130,y+30,260,PAD-60,24);g.fill();
    g.fillStyle='#2a1200';g.font='800 21px "Baloo 2",system-ui';g.fillText(d.ctrl==='jump'?'TAP = hop · HOLD = big jump':'TAP = tongue!',W/2,y+PAD/2+8);
    g.fillStyle='#fff';g.font='700 13px "Baloo 2",system-ui';g.fillText('Tap anywhere on the screen (or press Space)',W/2,y+18);return}
  const j=stick();g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=3;g.beginPath();g.arc(JX(),JY(),JR,0,TAU);g.stroke();g.fillStyle='rgba(255,255,255,.85)';g.beginPath();g.arc(JX(),JY(),7,0,TAU);g.fill();
  if(j.fx!=null){const a=Math.atan2(j.fy-JY(),j.fx-JX()),dd=Math.min(JR,hyp(j.fx-JX(),j.fy-JY()));g.strokeStyle='#ff8a2a';g.lineWidth=5;g.beginPath();g.moveTo(JX(),JY());g.lineTo(JX()+Math.cos(a)*dd,JY()+Math.sin(a)*dd);g.stroke();g.fillStyle='#ff8a2a';g.beginPath();g.arc(JX()+Math.cos(a)*dd,JY()+Math.sin(a)*dd,13,0,TAU);g.fill()}
  g.fillStyle='#fff';g.font='700 14px "Baloo 2",system-ui';g.fillText(d.ctrl==='go'?'➡️ Keeps moving · steer with the joystick':d.ctrl==='raft'?'🛶 Paddle toward the joystick · let go to drift':'✋ Let go to STOP · hold to move',W/2,y+16)}
function drawMapBg(now){g.fillStyle=AV===1?'#bfe2f2':AV===2?'#e8d9b8':'#bfe3a5';g.fillRect(0,0,W,H);const r=rng(3);g.font='28px system-ui';g.globalAlpha=0.35;
  const set=AV===1?['🐚','🌊','⭐','🐠']:AV===2?['🌵','🌿','🍃','🌼']:['🍃','🌼','🍀','🌸'];for(let i=0;i<18;i++){const x=r()*W,y=(r()*H+now*0.01*(0.5+r()))%H;g.fillText(set[i%4],x,y)}g.globalAlpha=1}

// ---------- screens ----------
const starsHtml=n=>`<span class="s">${'★'.repeat(n)}${'<i>★</i>'.repeat(3-n)}</span>`;
const CTLS={go:'➡️ keeps moving',stop:'✋ let go to stop',raft:'🛶 paddle with the joystick',jump:'⤴️ tap / hold to jump',tap:'👅 tap at the right time'};
const CTL={go:'➡️ Keeps moving — you only steer',stop:'✋ Let go of the joystick to STOP',raft:'🛶 Paddle toward the joystick · let go to drift with the water',jump:'⤴️ No steering! TAP = little hop · HOLD = big jump',tap:'👅 No steering! TAP to shoot your tongue'};
function pickScr(){scr='pick';M=null;const tot=totStars();
  U.innerHTML=`<div class="ap"><button class="x" data-a="home" aria-label="Home">🏠</button><h2>🗺️ Adventures</h2>
  <p class="sm">⭐ ${tot} / 90 stars · 🐉 Golden Dragon at ${DRAGON} ⭐</p><div class="bar"><i style="width:${Math.min(100,tot/DRAGON*100)}%"></i></div>
  <div class="ml">${ADV.map((A,a)=>{const op=advOpen(a),s=getP(a).reduce((x,y)=>x+y,0);return `<button class="ad${op?'':' lk'}" style="background:${A.color}" data-a="${op?'list':''}" data-v="${a}"><img src="img/${A.img}.webp" alt=""><span>${op?'':'🔒 '}${esc(A.title)}<small>${op?`⭐ ${s} / 30`:`Beat the boss of ${esc(ADV[a-1].title)} to open`}</small></span></button>`}).join('')}</div>
  <p class="sm" style="margin-top:10px">Each adventure: 10 missions · friends join on the way · a boss at the end.</p></div>`}
function listScr(a){AV=a;scr='map';M=null;const A=ADV[a],p=getP(a),tot=p.reduce((x,y)=>x+y,0),nextI=p.findIndex(v=>!v);
  const fr=Object.entries(A.friends).map(([i,k])=>`<div class="${p[i]?'':'lk'}"><img src="img/${k}.webp" alt=""><br>${p[i]?esc(nm(k)):'🔒 Mission '+(+i+1)}</div>`).join('');
  U.innerHTML=`<div class="ap"><button class="x" data-a="pick" aria-label="Back">←</button><h2>${esc(A.title)}</h2>
  <p class="sm">⭐ ${tot} / 30 stars · Friends join you on the way:</p><div class="fr">${fr}</div>
  <div class="ml">${A.ms.map((d,i)=>{const op=misOpen(a,i);return `<button class="mi${op?'':' lk'}${i===nextI?' cur':''}${d.boss?' boss':''}" data-a="${op?'start':''}" data-v="${i}"><span class="n">${d.boss?'👑':i+1}</span><span class="e">${d.e}</span><span class="t">${esc(d.name)}<br><small class="sm">${CTLS[d.ctrl]}</small></span>${op?starsHtml(p[i]):'🔒'}</button>`}).join('')}</div></div>`;
  const cur=U.querySelector('.mi.cur');cur&&cur.scrollIntoView&&cur.scrollIntoView({block:'center'})}
function startScr(i){scr='start';const d=ADV[AV].ms[i],p=getP(AV);U.innerHTML=`<div class="ap"><button class="x" data-a="list" data-v="${AV}" aria-label="Back">←</button><h2>${d.e} ${i+1}. ${esc(d.name)}</h2>
  ${d.boss?'<p><b>👑 Boss mission</b></p>':''}<p>${esc(d.story)}</p><div class="ctl">${CTL[d.ctrl]}</div>
  <ul>${d.stars.map((s,k)=>`<li>${'⭐'.repeat(k+1)} ${esc(s)}</li>`).join('')}</ul>
  ${p[i]?`<p class="sm">Your best: ${'⭐'.repeat(p[i])}</p>`:''}<p class="sm">${d.ctrl==='jump'||d.ctrl==='tap'?'On a computer: Space bar.':'On a computer you can also use the arrow keys.'}</p>
  <button class="ab" data-a="go" data-v="${i}">▶ Start</button></div>`}
function resultScr(r){scr='result';const a=M.a,i=M.i,d=ADV[a].ms[i],nx=i<9&&misOpen(a,i+1);
  U.innerHTML=`<div class="ap"><h2>${r.stars?(r.stars===3?'PERFECT!':'Mission complete!'):'So close!'}</h2><div class="stars">${'★'.repeat(r.stars)}<i>${'★'.repeat(3-r.stars)}</i></div>
  <p>${r.stars?esc(d.stars[r.stars-1])+'!':esc(r.msg||'Try again!')}</p>${r.stars&&r.stars<3?`<p class="sm">Next star: ${esc(d.stars[r.stars])}</p>`:''}
  ${r.stars&&nx?`<button class="ab" data-a="start" data-v="${i+1}">Next mission →</button>`:''}${r.stars&&i===9&&a<2?`<button class="ab" data-a="list" data-v="${a+1}">Next adventure →</button>`:''}
  <div class="row2"><button class="ab g" data-a="go" data-v="${i}">🔁 Try again</button><button class="ab g" data-a="list" data-v="${a}">🗺️ Missions</button></div></div>`}
function friendScr(k,txt){scr='friend';let fact='';try{fact=B().t('fact_'+k)}catch(e){}S('cheer');
  U.innerHTML=`<div class="ap"><h2>🎉 ${k==='dragon'||k==='imugi'?'A legend!':'A new friend!'}</h2><img class="big" src="img/${k}.webp" alt="" onerror="this.style.display='none'"><p><b>${esc(nm(k))}</b> ${txt}</p><p class="sm">${esc(fact)}</p>
  <button class="ab" data-a="next">Yay! →</button>${B().playVid?`<button class="ab g" data-a="vid" data-v="${k}">▶ Watch video</button>`:''}</div>`}
function endScr(A){scr='friend';S('champion');U.innerHTML=`<div class="ap"><h2>${A.endTitle}</h2><div style="font-size:70px;line-height:1.2" id="bfly">${A.endA}</div>
  <p>${A.endText}</p><p class="sm">You finished ${esc(A.title)}!</p><button class="ab" data-a="next">Hooray! →</button></div>`;
  setTimeout(()=>{const e=document.getElementById('bfly');if(e)e.textContent=A.endB},1600)}
function click(e){const b=e.target.closest('button');if(!b)return;const a=b.dataset.a,v=+b.dataset.v;if(!a)return;S('tap');
  if(a==='home')return close();if(a==='pick')return pickScr();if(a==='list')return listScr(v);if(a==='start')return startScr(v);if(a==='go')return startMission(v);
  if(a==='next')return nextQ();
  if(a==='vid'){const k=b.dataset.v;L.style.display='none';on=false;try{B().playVid(k,()=>{on=true;L.style.display='block';lastT=performance.now();nextQ()})}catch(err){on=true;L.style.display='block'}}}
addEventListener('pointerdown',e=>{if(!on||scr!=='play'||e.target!==cv)return;if(e.clientX<56&&e.clientY<HUD){e.stopImmediatePropagation();ptr.delete(e.pointerId);if(joy===e.pointerId)joy=null;listScr(AV)}},true);
window.ADV={open,close,list:ADV,_dbg:()=>({M,scr,getP,setP,startMission:(a,i)=>{AV=a;startMission(i)},win:s=>M&&win(M,s),totStars})};
})();
