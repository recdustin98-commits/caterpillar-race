// Caterpillar's Adventure — 10 control missions (top-down). Separate layer over the game.
// Controls: joystick (constant speed; "go" = keeps going when you let go, "stop" = let go to stop)
// and two-thumb oars for the leaf-raft missions. Progress: localStorage cr-adv1 (best stars per mission).
(()=>{
'use strict';
const B=()=>window.CRB||{};
const st={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const S=n=>{try{const f=B().sfx&&B().sfx[n];f&&f()}catch(e){}};
const vib=ms=>{try{B().buzz&&B().buzz(ms)}catch(e){}};
const TAU=Math.PI*2,clamp=(v,a,b)=>v<a?a:v>b?b:v,wrap=a=>{while(a>Math.PI)a-=TAU;while(a<-Math.PI)a+=TAU;return a},hyp=Math.hypot;
const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const AW=400,AH=560,HUD=54,PAD=172;

// ---------- progress ----------
const getP=()=>{let a;try{a=JSON.parse(st.get('cr-adv1')||'null')}catch(e){}return Array.isArray(a)&&a.length===10?a:Array(10).fill(0)};
const setP=a=>st.set('cr-adv1',JSON.stringify(a));
const opened=n=>n===0||getP()[n-1]>0;
const FRIEND={2:'inch',4:'centi',6:'snail'}; // mission index (0-based) -> animal that joins

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
#advU .mi.boss .n{background:#c8461e}
#advU .mi .s i{color:#cfd8d2;font-style:normal}
#advU .fr{display:flex;justify-content:center;gap:10px;margin:6px 0}
#advU .fr div{width:74px;font-size:12px;line-height:1.1}#advU .fr img{width:70px;height:50px;object-fit:contain}#advU .fr .lk img{filter:grayscale(1) brightness(.4)}
#advU .ctl{display:inline-block;background:#e6f5ff;border-radius:10px;padding:4px 10px;font-weight:800;margin:4px 0}
#advU .stars{font-size:40px;letter-spacing:4px;color:#ffb300;margin:4px 0}#advU .stars i{color:#cfd8d2;font-style:normal}
#advU ul{text-align:left;margin:6px 0 0;padding-left:20px;font-size:15px}
#advU .big{width:220px;height:160px;object-fit:contain}
.tile.cadv{background:linear-gradient(135deg,#3c9a2e,#7cc242)}`;
let L,cv,g,U,W=0,H=0,dpr=1;
(()=>{const s=document.createElement('style');s.textContent=css;document.head.appendChild(s)})();
function mount(){if(L)return;
  L=document.createElement('div');L.id='advL';L.innerHTML='<canvas></canvas><div id="advU"></div>';document.body.appendChild(L);
  cv=L.querySelector('canvas');g=cv.getContext('2d');U=L.querySelector('#advU');
  addEventListener('resize',size);size();
  cv.addEventListener('pointerdown',pdown);cv.addEventListener('pointermove',pmove);
  ['pointerup','pointercancel','pointerleave'].forEach(e=>cv.addEventListener(e,pup));
  U.addEventListener('click',click);
  addEventListener('keydown',e=>{if(on){keys[e.key]=1;if(e.key.startsWith('Arrow')||e.key===' ')e.preventDefault()}});
  addEventListener('keyup',e=>{keys[e.key]=0});
}
function size(){if(!cv)return;dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr}
let on=false,scr='map',M=null,cur=0,raf=0,lastT=0,keys={};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function open(){mount();on=true;L.style.display='block';size();mapScr();if(!raf){lastT=performance.now();raf=requestAnimationFrame(tick)}}
function close(){on=false;L.style.display='none';M=null;scr='map';cancelAnimationFrame(raf);raf=0;try{B().home&&B().home()}catch(e){}}

// ---------- layout ----------
let sc=1,ox=0,oy=0;
function layout(){const ah=H-HUD-PAD;sc=Math.min(W/AW,ah/AH);ox=(W-AW*sc)/2;oy=HUD+(ah-AH*sc)/2}
const toW=(x,y,cam=0)=>({x:(x-ox)/sc,y:(y-oy)/sc+cam});
const JX=()=>W/2,JY=()=>H-PAD/2+4,JR=58;

// ---------- input ----------
const ptr=new Map();let joy=null; // joy = pointer id driving the joystick
function pdown(e){if(scr!=='play')return;cv.setPointerCapture&&cv.setPointerCapture(e.pointerId);
  const p={x:e.clientX,y:e.clientY,ly:e.clientY,lt:performance.now(),side:e.clientX<W/2?'L':'R',v:0};ptr.set(e.pointerId,p);
  if(joy==null)joy=e.pointerId;e.preventDefault()}
function pmove(e){const p=ptr.get(e.pointerId);if(!p)return;const now=performance.now(),dt=Math.max(8,now-p.lt);
  const v=(e.clientY-p.ly)/dt*1000;p.v=p.v*0.5+v*0.5;p.ly=e.clientY;p.lt=now;p.x=e.clientX;p.y=e.clientY}
function pup(e){if(!ptr.has(e.pointerId))return;ptr.delete(e.pointerId);if(joy===e.pointerId){joy=null;const n=[...ptr.keys()];if(n.length)joy=n[0]}}
function stick(){ // returns {a: angle (screen, 0=right), on: bool}
  let kx=(keys.ArrowRight||keys.d?1:0)-(keys.ArrowLeft||keys.a?1:0),ky=(keys.ArrowDown||keys.s?1:0)-(keys.ArrowUp||keys.w?1:0);
  if(kx||ky)return{a:Math.atan2(ky,kx),on:true,fx:JX()+kx*JR,fy:JY()+ky*JR};
  const p=joy!=null&&ptr.get(joy);if(!p)return{on:false};
  const dx=p.x-JX(),dy=p.y-JY();if(hyp(dx,dy)<14)return{on:false,held:true,fx:p.x,fy:p.y};
  return{a:Math.atan2(dy,dx),on:true,fx:p.x,fy:p.y}}
function oars(now){ // left/right stroke strength, + = pushing water back (finger down) = forward
  let l=(keys.w||keys.W?0.8:0)-(keys.s||keys.S?0.8:0),r=(keys.ArrowUp?0.8:0)-(keys.ArrowDown?0.8:0);
  for(const p of ptr.values()){if(now-p.lt>90)p.v*=0.6;const s=clamp(p.v/900,-1.4,1.4);if(p.side==='L')l+=s;else r+=s}
  return{l:clamp(l,-1.4,1.4),r:clamp(r,-1.4,1.4)}}

// ---------- caterpillar ----------
function mkCat(x,y,dir){const c={x,y,dir,spd:0,trail:[],stun:0,turn:0};for(let i=0;i<140;i++)c.trail.push({x:x-Math.cos(dir)*i,y:y-Math.sin(dir)*i});return c}
function catSegs(c,n=8,gap=11){const s=[c.trail[0]];let acc=0,need=gap;for(let i=1;i<c.trail.length&&s.length<n;i++){acc+=hyp(c.trail[i].x-c.trail[i-1].x,c.trail[i].y-c.trail[i-1].y);if(acc>=need){s.push(c.trail[i]);need+=gap}}while(s.length<n)s.push(s[s.length-1]);return s}
function steerCat(c,dt,speed,ctrl,blocked){ // returns true if moving
  const j=stick();let target=0;
  if(c.stun>0){c.stun-=dt;c.spd=0;return false}
  if(j.on){const d=wrap(j.a-c.dir),r=clamp(d*4.2,-3.4,3.4);c.turn=r;c.dir+=r*dt}else c.turn*=0.8;
  if(ctrl==='go')target=speed;else target=j.on?speed:0;
  c.spd+=(target-c.spd)*(1-Math.exp(-dt/(target>c.spd?0.18:0.1)));
  let nx=c.x+Math.cos(c.dir)*c.spd*dt,ny=c.y+Math.sin(c.dir)*c.spd*dt;
  if(blocked){if(blocked(nx,ny)){if(!blocked(nx,c.y))ny=c.y;else if(!blocked(c.x,ny))nx=c.x;else{nx=c.x;ny=c.y}}}
  const moved=hyp(nx-c.x,ny-c.y);c.x=nx;c.y=ny;if(moved>0.01){c.trail.unshift({x:c.x,y:c.y});if(c.trail.length>220)c.trail.pop()}
  return c.spd>8}
function moveBack(c,dx,dy){c.x+=dx;c.y+=dy;c.trail=[];for(let i=0;i<140;i++)c.trail.push({x:c.x-Math.cos(c.dir)*i,y:c.y-Math.sin(c.dir)*i})}
function drawCat(c,k=1,sad=false){const s=catSegs(c);
  for(let i=s.length-1;i>=0;i--){const p=s[i];g.fillStyle=i?(i%2?'#9bd24a':'#86c23a'):'#6fb02a';g.beginPath();g.arc(p.x,p.y,(i?8.5:10.5)*k,0,TAU);g.fill();
    if(i&&i%2===0){g.fillStyle='#ffd23f';g.beginPath();g.arc(p.x,p.y,2.2*k,0,TAU);g.fill()}}
  const h=s[0],d=c.dir;g.strokeStyle='#3d6b18';g.lineWidth=1.6;
  for(const sd of[-1,1]){g.beginPath();g.moveTo(h.x+Math.cos(d)*6,h.y+Math.sin(d)*6);g.lineTo(h.x+Math.cos(d+sd*.5)*16*k,h.y+Math.sin(d+sd*.5)*16*k);g.stroke()}
  for(const sd of[-1,1]){const ex=h.x+Math.cos(d)*4+Math.cos(d+sd*1.57)*4.5,ey=h.y+Math.sin(d)*4+Math.sin(d+sd*1.57)*4.5;
    g.fillStyle='#fff';g.beginPath();g.arc(ex,ey,3.1*k,0,TAU);g.fill();g.fillStyle='#123';g.beginPath();g.arc(ex+Math.cos(d)*(sad?0:1),ey+Math.sin(d)*(sad?1:0),1.6*k,0,TAU);g.fill()}
  if(c.stun>0){g.font='18px system-ui';g.textAlign='center';g.fillText('💫',h.x,h.y-16)}}

// ---------- scenery ----------
function grass(seed,col='#8fd06a',dots='#7bbf55'){g.fillStyle=col;g.fillRect(0,0,AW,AH);const r=rng(seed);g.strokeStyle=dots;g.lineWidth=2;
  for(let i=0;i<70;i++){const x=r()*AW,y=r()*AH;g.beginPath();g.moveTo(x,y);g.lineTo(x-3,y-7);g.moveTo(x,y);g.lineTo(x+3,y-8);g.stroke()}}
function leafShape(cx,cy,rx,ry,fill='#4f9a3a',vein='#3c7d2c'){g.fillStyle=fill;g.beginPath();g.moveTo(cx,cy-ry);
  g.bezierCurveTo(cx+rx*1.35,cy-ry*0.55,cx+rx*1.2,cy+ry*0.7,cx,cy+ry);g.bezierCurveTo(cx-rx*1.2,cy+ry*0.7,cx-rx*1.35,cy-ry*0.55,cx,cy-ry);g.fill();
  g.strokeStyle=vein;g.lineWidth=3;g.beginPath();g.moveTo(cx,cy-ry);g.lineTo(cx,cy+ry);g.stroke();g.lineWidth=1.6;
  for(let i=-3;i<=3;i++){if(!i)continue;const y=cy+i*ry/4.2,w=rx*0.8*(1-Math.abs(i)/5);g.beginPath();g.moveTo(cx,y);g.lineTo(cx+w,y-ry*0.13);g.moveTo(cx,y);g.lineTo(cx-w,y-ry*0.13);g.stroke()}}
function inLeaf(x,y,cx,cy,rx,ry){const dy=(y-cy)/ry;if(Math.abs(dy)>1)return false;const half=rx*(dy<0?Math.sqrt(1-dy*dy)*(1+dy*0.15):Math.sqrt(1-dy*dy)*(1-dy*0.08));return Math.abs(x-cx)<=half*0.98}
function flower(x,y,r=26,t=0){g.save();g.translate(x,y);g.rotate(t*0.3);g.fillStyle='#ff7fb3';for(let i=0;i<6;i++){g.beginPath();g.ellipse(Math.cos(i*TAU/6)*r*0.55,Math.sin(i*TAU/6)*r*0.55,r*0.5,r*0.3,i*TAU/6,0,TAU);g.fill()}g.fillStyle='#ffd23f';g.beginPath();g.arc(0,0,r*0.38,0,TAU);g.fill();g.restore()}
function pebble(x,y,r){g.fillStyle='#9aa3a8';g.beginPath();g.ellipse(x,y,r,r*0.85,0.3,0,TAU);g.fill();g.fillStyle='#c3cacd';g.beginPath();g.ellipse(x-r*0.3,y-r*0.3,r*0.35,r*0.25,0.3,0,TAU);g.fill()}
function emo(t,x,y,s,rot=0,flip=false){g.save();g.translate(x,y);if(rot)g.rotate(rot);if(flip)g.scale(-1,1);g.font=`${s}px system-ui,"Apple Color Emoji","Segoe UI Emoji"`;g.textAlign='center';g.textBaseline='middle';g.fillText(t,0,0);g.restore()}
function ant(x,y,dirR,t){g.save();g.translate(x,y);if(!dirR)g.scale(-1,1);g.fillStyle='#2b1d14';g.strokeStyle='#2b1d14';g.lineWidth=1.3;
  const w=Math.sin(t*18+x)*2;for(const lx of[-3,1,5]){g.beginPath();g.moveTo(lx,0);g.lineTo(lx-2+w,7);g.moveTo(lx,0);g.lineTo(lx-2-w,-7);g.stroke()}
  g.beginPath();g.arc(-6,0,3.6,0,TAU);g.arc(1,0,2.6,0,TAU);g.fill();g.beginPath();g.arc(7,0,3.1,0,TAU);g.fill();g.restore()}
function pushOutCircle(c,x,y,r){const dx=c.x-x,dy=c.y-y,d=hyp(dx,dy);if(d<r&&d>0.01){c.x=x+dx/d*r;c.y=y+dy/d*r;return true}return false}

// ---------- missions ----------
const SPD=[70,75,75,0,80,80,62,80,0,85];
const MS=[
 {name:'Dewdrop breakfast',e:'💧',ctrl:'go',story:'Collect all 6 dewdrops on the leaf. Don\'t crawl off the edge!',
  stars:['Collect all 6 dewdrops','Fall off only once','Never fall off'],
  init(m){m.cat=mkCat(200,470,-Math.PI/2);const r=rng(11);m.drops=[];while(m.drops.length<6){const x=60+r()*280,y=70+r()*400;if(inLeaf(x,y,200,280,150,255)&&inLeaf(x,y,200,280,120,215)&&hyp(x-200,y-470)>70&&m.drops.every(o=>hyp(o.x-x,o.y-y)>70))m.drops.push({x,y})}
   m.got=0;m.falls=0;m.fall=0;m.limit=75},
  update(m,dt){if(m.fall>0){m.fall-=dt;if(m.fall<=0){m.cat=mkCat(200,430,-Math.PI/2)}return}
   steerCat(m.cat,dt,SPD[0],'go');for(const d of m.drops)if(!d.got&&hyp(d.x-m.cat.x,d.y-m.cat.y)<20){d.got=1;m.got++;S('ding')}
   if(m.got===6)return win(m,m.falls===0?3:m.falls===1?2:1);
   if(!inLeaf(m.cat.x,m.cat.y,200,280,150,255)){m.fall=1;m.falls++;S('boing');vib(60)}},
  draw(m){grass(1);leafShape(200,280,150,255);for(const d of m.drops)if(!d.got)dew(d.x,d.y);if(m.fall>0){g.globalAlpha=m.fall}drawCat(m.cat,m.fall>0?Math.max(.3,m.fall):1);g.globalAlpha=1;if(m.fall>0)bigText('Fell off! 🍂')},
  hud:m=>`💧 ${m.got}/6   🍂 ${m.falls}`},
 {name:'Munch the leaf',e:'🍃',ctrl:'go',story:'You\'re hungry! Crawl over the leaf to eat it. Eat as much as you can before time runs out — but don\'t fall off.',
  stars:['Eat 28% of the leaf','Eat 40%','Eat 50%'],
  init(m){m.cat=mkCat(200,470,-Math.PI/2);m.limit=40;m.falls=0;m.fall=0;
   m.can=document.createElement('canvas');m.can.width=AW;m.can.height=AH;const k=m.can.getContext('2d');const gg=g;g=k;leafShape(200,280,150,255);g=gg;
   m.cells=[];for(let y=30;y<535;y+=8)for(let x=50;x<350;x+=8)if(inLeaf(x,y,200,280,150,255))m.cells.push({x,y,e:0});m.eaten=0},
  update(m,dt){if(m.fall>0){m.fall-=dt;if(m.fall<=0)m.cat=mkCat(200,430,-Math.PI/2);return}
   steerCat(m.cat,dt,SPD[1],'go');const c=m.cat,k=m.can.getContext('2d');k.globalCompositeOperation='destination-out';k.beginPath();k.arc(c.x,c.y,13,0,TAU);k.fill();k.globalCompositeOperation='source-over';
   for(const q of m.cells)if(!q.e&&Math.abs(q.x-c.x)<14&&Math.abs(q.y-c.y)<14&&hyp(q.x-c.x,q.y-c.y)<13){q.e=1;m.eaten++}
   if(!inLeaf(c.x,c.y,200,280,150,255)){m.fall=1;m.falls++;S('boing');vib(60)}},
  timeUp(m){const p=m.eaten/m.cells.length*100;return p>=50?3:p>=40?2:p>=28?1:0},
  draw(m){grass(2);g.drawImage(m.can,0,0);if(m.fall>0)g.globalAlpha=m.fall;drawCat(m.cat);g.globalAlpha=1;if(m.fall>0)bigText('Fell off! 🍂')},
  hud:m=>`🍃 ${Math.floor(m.eaten/m.cells.length*100)}% eaten`},
 {name:'Ant parade',e:'🐜',ctrl:'stop',story:'Four lines of ants are marching! Let go to stop and wait for a gap, then cross to the flower.',
  stars:['Reach the flower','Bump into ants 2 times or less','No bumps'],
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=90;m.bumps=0;m.t=0;
   m.rows=[{y:430,v:38,o:0},{y:340,v:-52,o:60},{y:250,v:64,o:130},{y:160,v:-80,o:20}].map(r=>({...r,per:300,grp:5,gap:26}))},
  ants(r,t){const a=[];const base=((r.o+r.v*t)%r.per+r.per)%r.per;for(let k=-1;k<3;k++)for(let i=0;i<r.grp;i++)a.push(base+k*r.per+i*r.gap-r.per*0.5);return a.filter(x=>x>-20&&x<AW+20)},
  update(m,dt){m.t+=dt;steerCat(m.cat,dt,SPD[2],'stop',(x,y)=>x<12||x>AW-12||y>AH-10||y<8);const c=m.cat,s=catSegs(c).slice(0,3);
   if(c.stun<=0)for(const r of m.rows){for(const ax of this.ants(r,m.t)){if(s.some(p=>Math.abs(p.y-r.y)<12&&Math.abs(p.x-ax)<13)){m.bumps++;S('boing');vib(80);c.stun=0.8;c.dir=-Math.PI/2;moveBack(c,0,Math.min(60,AH-20-c.y));break}}if(c.stun>0)break}
   if(hyp(c.x-200,c.y-40)<34)win(m,m.bumps===0?3:m.bumps<=2?2:1)},
  draw(m){grass(3,'#c9a46a','#b28d55');for(const r of m.rows){g.fillStyle='rgba(90,60,30,.18)';g.fillRect(0,r.y-11,AW,22);for(const ax of this.ants(r,m.t))ant(ax,r.y,r.v>0,m.t)}flower(200,40,30,m.t);drawCat(m.cat)},
  hud:m=>`🐜 bumps ${m.bumps}`},
 {name:'Leaf raft',e:'🍂',ctrl:'raft',story:'Ride a leaf down the stream! Use two thumbs like oars: drag DOWN to row forward, UP to row back. Left up + right down = spin left. Dodge rocks and whirlpools, pick up petals.',
  stars:['Reach the end of the stream','3 bumps or less and 3+ petals','1 bump or less and 6+ petals'],
  init(m){raftInit(m,{len:2300,cur:52,hw:128,seed:41,rocks:9,whirls:2,petals:8})},
  update(m,dt,now){raftUpd(m,dt,now);if(m.done){const b=m.bumps,p=m.pet;win(m,b<=1&&p>=6?3:b<=3&&p>=3?2:1)}},
  draw(m){raftDraw(m)},hud:m=>`🌸 ${m.pet}/${m.petals.length}   💥 ${m.bumps}`},
 {name:'Mole tunnels',e:'🕳️',ctrl:'stop',story:'Find the way out of the tunnels. Moles are patrolling! Let go to stop and hide in a side tunnel until they pass.',
  stars:['Find the way out','Get caught once or less','Never get caught'],
  init(m){m.map=['#E######','#.#....#','#.#.##.#','#...#..#','###.#.##','#...#..#','#.####.#','#......#','#.##.###','#.#..#.#','#S#....#'];
   m.cell=50;m.oy=5;const c=(cx,cy)=>({x:cx*50+25,y:cy*50+25+m.oy});
   m.start=c(1,10);m.exit=c(1,0);m.cat=mkCat(m.start.x,m.start.y,-Math.PI/2);m.check={...m.start};m.caught=0;m.limit=120;m.t=0;
   m.moles=[{path:[c(1,7),c(6,7)],sp:52,s:0,dir:1},{path:[c(1,5),c(3,5),c(3,3),c(1,3)],sp:46,s:0.5,dir:1}].map(o=>{o.pts=o.path;o.len=[];let L=0;for(let i=1;i<o.pts.length;i++){L+=hyp(o.pts[i].x-o.pts[i-1].x,o.pts[i].y-o.pts[i-1].y);o.len.push(L)}o.L=L;o.d=o.s*L;return o})},
  wall(m,x,y){const cx=Math.floor(x/50),cy=Math.floor((y-m.oy)/50);if(cy<0)return false;const r=m.map[cy];if(!r)return true;const ch=r[cx];return ch===undefined||ch==='#'},
  update(m,dt){m.t+=dt;const blk=(x,y)=>{for(const[dx,dy]of[[-10,0],[10,0],[0,-10],[0,10]])if(this.wall(m,x+dx,y+dy))return true;return false};
   steerCat(m.cat,dt,SPD[4],'stop',blk);const c=m.cat;
   for(const o of m.moles){o.d+=o.sp*o.dir*dt;if(o.d>o.L){o.d=o.L;o.dir=-1}if(o.d<0){o.d=0;o.dir=1}let i=0;while(i<o.len.length-1&&o.d>o.len[i])i++;const a=o.pts[i],b=o.pts[i+1],l0=i?o.len[i-1]:0,f=(o.d-l0)/(o.len[i]-l0);o.x=a.x+(b.x-a.x)*f;o.y=a.y+(b.y-a.y)*f}
   const cy=Math.floor((c.y-m.oy)/50),cx=Math.floor(c.x/50);if((cx===1&&cy===7)||(cx===3&&cy===5))m.check={x:cx*50+25,y:cy*50+25+m.oy};
   if(c.stun<=0)for(const o of m.moles)if(catSegs(c).slice(0,3).some(p=>hyp(p.x-o.x,p.y-o.y)<24)){m.caught++;S('snap');vib(120);c.stun=1;const k=m.check;m.cat=mkCat(k.x,k.y,-Math.PI/2);m.cat.stun=1;break}
   if(c.y<m.exit.y+10&&Math.abs(c.x-m.exit.x)<25)win(m,m.caught===0?3:m.caught===1?2:1)},
  draw(m){g.fillStyle='#6b4a2e';g.fillRect(0,0,AW,AH);const r=rng(5);
   for(let y=0;y<m.map.length;y++)for(let x=0;x<8;x++){const ch=m.map[y][x];if(ch!=='#'){g.fillStyle='#a77d52';g.fillRect(x*50+3,y*50+m.oy+3,44,44)}}
   for(let y=0;y<m.map.length;y++)for(let x=0;x<8;x++){const ch=m.map[y][x];if(ch!=='#'){if(m.map[y][x+1]&&m.map[y][x+1]!=='#')g.fillRect(x*50+25,y*50+m.oy+3,50,44);if(m.map[y+1]&&m.map[y+1][x]!=='#')g.fillRect(x*50+3,y*50+m.oy+25,44,50)}}
   g.fillStyle='#5a3d24';for(let i=0;i<60;i++){g.beginPath();g.arc(r()*AW,r()*AH,1.5+r()*2,0,TAU);g.fill()}
   emo('☀️',m.exit.x,m.exit.y-8,26);for(const o of m.moles)mole(o.x,o.y,m.t);drawCat(m.cat)},
  hud:m=>`🐹 caught ${m.caught}`},
 {name:'Ladybug babies',e:'🐞',ctrl:'go',story:'Three baby ladybugs ride behind you. Take them to the flower! Turn smoothly — a sharp turn makes a baby fall off (go back and touch it to pick it up).',
  stars:['Bring 1 baby to the flower','Bring 2 babies','Bring all 3'],
  init(m){m.cat=mkCat(200,520,-Math.PI/2);m.limit=90;m.t=0;m.sharp=0;m.kids=[{on:1},{on:1},{on:1}];
   m.stones=[{x:110,y:420,r:30},{x:300,y:350,r:34},{x:160,y:250,r:30},{x:290,y:160,r:26},{x:90,y:120,r:24}]},
  update(m,dt){m.t+=dt;steerCat(m.cat,dt,SPD[5],'go',(x,y)=>x<12||x>AW-12||y>AH-10||y<8);const c=m.cat;for(const s of m.stones)pushOutCircle(c,s.x,s.y,s.r+10);
   if(Math.abs(c.turn)>2.9)m.sharp+=dt;else m.sharp=Math.max(0,m.sharp-dt*2);
   const att=m.kids.filter(k=>k.on);if(m.sharp>0.4&&att.length){const k=att[att.length-1],sg=catSegs(c,8+att.length*2);const p=sg[sg.length-1];k.on=0;k.x=p.x;k.y=p.y;m.sharp=0;S('sad');vib(60)}
   for(const k of m.kids)if(!k.on&&hyp(k.x-c.x,k.y-c.y)<22){k.on=1;S('ding')}
   if(hyp(c.x-200,c.y-40)<36){const n=m.kids.filter(k=>k.on).length;if(n>0)win(m,n)}},
  timeUp(m){return 0},
  draw(m){grass(6);flower(200,40,32,m.t);for(const s of m.stones)pebble(s.x,s.y,s.r);const c=m.cat;
   const sg=catSegs(c,14);let i=8;for(const k of m.kids){if(k.on){const p=sg[Math.min(sg.length-1,i)];lady(p.x,p.y,c.dir,1.05);i+=2}else{lady(k.x,k.y,0,1.05);emo('❗',k.x,k.y-16,14)}}drawCat(c);
   if(m.sharp>0.12){g.fillStyle='rgba(255,60,60,.85)';g.font='bold 16px "Baloo 2",system-ui';g.textAlign='center';g.fillText('Too sharp!',c.x,c.y-22)}},
  hud:m=>`🐞 ${m.kids.filter(k=>k.on).length}/3 riding`},
 {name:'Sleeping bee',e:'🐝',ctrl:'stop',story:'A bee is sleeping on the flower. Sneak up to the nectar! When it wakes up, let go and FREEZE.',
  stars:['Reach the nectar','Get caught once or less','Never get caught'],
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=90;m.t=0;m.caught=0;m.ph='sleep';m.pt=2.5;m.grace=0;m.r=rng(77);
   m.stones=[{x:120,y:430,r:26},{x:270,y:440,r:22},{x:200,y:340,r:30},{x:90,y:260,r:24},{x:310,y:250,r:28},{x:180,y:190,r:22}]},
  update(m,dt){m.t+=dt;m.pt-=dt;
   if(m.pt<=0){if(m.ph==='sleep'){m.ph='warn';m.pt=0.9;S('wake')}else if(m.ph==='warn'){m.ph='awake';m.pt=1.4+m.r()*1.2;m.grace=0.2;S('alarm');vib(50)}else{m.ph='sleep';m.pt=2.2+m.r()*2.3;S('beep')}}
   const mov=steerCat(m.cat,dt,SPD[6],'stop',(x,y)=>x<12||x>AW-12||y>AH-10||y<8);const c=m.cat;for(const s of m.stones)pushOutCircle(c,s.x,s.y,s.r+10);
   if(m.ph==='awake'){m.grace-=dt;if(m.grace<0&&mov&&c.stun<=0){m.caught++;S('failBig');vib(150);c.stun=1;c.dir=-Math.PI/2;moveBack(c,0,Math.min(90,AH-20-c.y))}}
   if(hyp(c.x-200,c.y-110)<26)win(m,m.caught===0?3:m.caught===1?2:1)},
  draw(m){grass(7);for(const s of m.stones)pebble(s.x,s.y,s.r);flower(200,60,40,0);g.fillStyle='#ffe066';g.beginPath();g.arc(200,110,14,0,TAU);g.fill();emo('🍯',200,110,18);
   emo('🐝',200,52,34);if(m.ph==='sleep')emo('💤',228,32,20+Math.sin(m.t*3)*3);if(m.ph==='warn')emo('👀',232,30,22);if(m.ph==='awake')emo('❗',232,26,26);
   drawCat(m.cat);frame(m.ph==='awake'?'#ff3b30':m.ph==='warn'?'#ffcc00':null,m.t);if(m.ph==='awake')bigText('🛑 FREEZE!',250);else if(m.ph==='warn')bigText('👀 Waking up!',250)},
  hud:m=>`🐝 caught ${m.caught}`},
 {name:'Spider webs',e:'🕸️',ctrl:'stop',story:'Three webs block the way, each with one gap. A spider drops down into the gap now and then. Wait, then slip through when it climbs up!',
  stars:['Get through all webs','Get caught once or less','Never get caught'],
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=100;m.t=0;m.caught=0;const r=rng(88);
   m.webs=[{y:430,gx:300,gw:74},{y:300,gx:100,gw:70},{y:170,gx:260,gw:66}].map((w,i)=>({...w,ph:'up',pt:1+i*0.9,r}))},
  update(m,dt){m.t+=dt;for(const w of m.webs){w.pt-=dt;if(w.pt<=0){if(w.ph==='up'){w.ph='warn';w.pt=0.7}else if(w.ph==='warn'){w.ph='down';w.pt=1.6+w.r()*1.2}else{w.ph='up';w.pt=1.8+w.r()*1.4}}w.k=w.ph==='down'?Math.min(1,(w.k||0)+dt*4):Math.max(0,(w.k||0)-dt*3)}
   const blk=(x,y)=>{if(x<12||x>AW-12||y>AH-10||y<8)return true;for(const w of m.webs)if(Math.abs(y-w.y)<7&&Math.abs(x-w.gx)>w.gw/2-8)return true;return false};
   steerCat(m.cat,dt,SPD[7],'stop',blk);const c=m.cat;
   if(c.stun<=0)for(const w of m.webs)if(w.k>0.5&&Math.abs(c.y-w.y)<20&&Math.abs(c.x-w.gx)<w.gw/2){m.caught++;S('snap');vib(120);c.stun=1;c.dir=-Math.PI/2;moveBack(c,w.gx-c.x,w.y+55-c.y);break}
   if(c.y<45)win(m,m.caught===0?3:m.caught===1?2:1)},
  draw(m){grass(8,'#7fbf63','#6cab50');flower(200,22,22,m.t);
   for(const w of m.webs){g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=1.5;const L=w.gx-w.gw/2,R=w.gx+w.gw/2;
    for(const[a,b]of[[0,L],[R,AW]]){for(let k=-2;k<=2;k++){g.beginPath();g.moveTo(a,w.y+k*4);g.lineTo(b,w.y+k*4);g.stroke()}for(let x=a;x<b;x+=14){g.beginPath();g.moveTo(x,w.y-10);g.lineTo(x+7,w.y+10);g.stroke()}}
    g.strokeStyle='rgba(255,255,255,.6)';g.beginPath();g.moveTo(w.gx,-10);g.lineTo(w.gx,w.y-6+w.k*6);g.stroke();
    const sh=w.ph==='warn'?Math.sin(m.t*40)*3:0;const sz=18+w.k*20;if(w.k>0.2){g.fillStyle='rgba(0,0,0,.25)';g.beginPath();g.ellipse(w.gx,w.y+6,sz*0.7,sz*0.35,0,0,TAU);g.fill()}
    emo('🕷️',w.gx+sh,w.y-24+w.k*24,sz);if(w.ph==='warn')emo('❗',w.gx+22,w.y-30,16)}
   drawCat(m.cat)},
  hud:m=>`🕷️ caught ${m.caught}`},
 {name:'Rapids!',e:'🌊',ctrl:'raft',story:'The stream is faster now, and there is a WATERFALL at the end! Paddle with both thumbs and get off the leaf at the sandy beach before the waterfall.',
  stars:['Land on the beach','3 bumps or less','1 bump or less'],
  init(m){raftInit(m,{len:2500,cur:78,hw:108,seed:93,rocks:12,whirls:3,petals:0,beach:true})},
  update(m,dt,now){raftUpd(m,dt,now);if(m.done)win(m,m.bumps<=1?3:m.bumps<=3?2:1);if(m.over)lose(m,'Whoosh — over the waterfall! Land on the beach next time.')},
  draw(m){raftDraw(m)},hud:m=>`💥 ${m.bumps}`},
 {name:'The hungry bird',e:'🐦',ctrl:'stop',boss:true,story:'BOSS! A bird is looking for a snack. When its shadow comes, hide under a big leaf and let go to freeze. Reach the twig, then crawl around it 3 times to spin your cocoon!',
  stars:['Spin your cocoon','Get spotted once or less','Never get spotted'],
  init(m){m.cat=mkCat(200,525,-Math.PI/2);m.limit=150;m.t=0;m.spot=0;m.lives=3;m.r=rng(1010);m.check={x:200,y:525};
   m.covers=[{x:100,y:420,r:50},{x:300,y:300,r:50},{x:110,y:190,r:48},{x:300,y:440,r:42}];m.twig={x:290,y:85};
   m.bird={ph:'wait',pt:3.2,x:0,y:0,vx:0,vy:0};m.lap=0;m.lastA=null;m.inv=0;m.phase='go'},
  update(m,dt){m.t+=dt;m.inv-=dt;const c=m.cat,b=m.bird;
   if(m.phase==='spin'){steerCat(c,dt,SPD[9]*0.8,'go');const d=hyp(c.x-m.twig.x,c.y-m.twig.y);const a=Math.atan2(c.y-m.twig.y,c.x-m.twig.x);
    if(d>24&&d<95){if(m.lastA!=null)m.lap+=wrap(a-m.lastA);m.lastA=a}else m.lastA=null;c.x=clamp(c.x,14,AW-14);c.y=clamp(c.y,14,AH-14);
    if(Math.abs(m.lap)>=TAU*3){S('champion');win(m,m.spot===0?3:m.spot===1?2:1)}return}
   b.pt-=dt;if(b.ph==='wait'&&b.pt<=0){b.ph='warn';b.pt=1.3;S('wake');const fromL=m.r()<0.5;b.x=fromL?-120:AW+120;b.y=120+m.r()*320;const tx=fromL?AW+140:-140,ty=120+m.r()*320,T=1.7-Math.min(0.5,m.t/120);b.vx=(tx-b.x)/T;b.vy=(ty-b.y)/T}
   else if(b.ph==='warn'&&b.pt<=0){b.ph='fly';b.pt=1.7-Math.min(0.5,m.t/120);S('whoosh')}
   else if(b.ph==='fly'){b.x+=b.vx*dt;b.y+=b.vy*dt;if(b.pt<=0){b.ph='wait';b.pt=2.6+m.r()*2.2}}
   const mov=steerCat(c,dt,SPD[9],'stop',(x,y)=>x<12||x>AW-12||y>AH-10||y<8);
   for(const k of m.covers)if(hyp(c.x-k.x,c.y-k.y)<k.r*0.6)m.check={x:k.x,y:k.y};
   if(b.ph==='fly'&&m.inv<=0&&hyp(c.x-b.x,c.y-b.y)<85){const hid=m.covers.some(k=>hyp(c.x-k.x,c.y-k.y)<k.r-6);if(!hid||mov){m.spot++;m.lives--;m.inv=1.6;S('failBig');vib(160);
     if(m.lives<=0)return lose(m,'The bird spotted you 3 times. Hide under the leaves and freeze!');m.cat=mkCat(m.check.x,m.check.y,-Math.PI/2);m.cat.stun=1}}
   if(hyp(c.x-m.twig.x,c.y-m.twig.y)<70){m.phase='spin';b.ph='gone';S('cheer');m.msgT=2.2}},
  draw(m){grass(10,'#86c862','#73b450');const c=m.cat,b=m.bird;
   g.strokeStyle='#7a4f2a';g.lineWidth=9;g.lineCap='round';g.beginPath();g.moveTo(m.twig.x-60,m.twig.y-40);g.lineTo(m.twig.x,m.twig.y);g.lineTo(m.twig.x+30,m.twig.y-55);g.stroke();
   g.fillStyle='#7a4f2a';g.beginPath();g.arc(m.twig.x,m.twig.y,10,0,TAU);g.fill();
   if(m.phase==='spin'){g.strokeStyle='rgba(255,255,255,.7)';g.setLineDash([6,8]);g.lineWidth=2;g.beginPath();g.arc(m.twig.x,m.twig.y,55,0,TAU);g.stroke();g.setLineDash([]);
    const n=Math.min(3,Math.abs(m.lap)/TAU);g.strokeStyle='rgba(255,248,220,.95)';g.lineWidth=4;g.beginPath();g.arc(m.twig.x,m.twig.y,14+n*5,0,TAU*Math.min(1,n/3));g.stroke()}
   drawCat(c);
   for(const k of m.covers){g.globalAlpha=hyp(c.x-k.x,c.y-k.y)<k.r?0.72:0.95;leafShape(k.x,k.y,k.r*0.62,k.r,'#2f7d2a','#245f20');g.globalAlpha=1}
   if(b.ph==='fly'){g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(b.x,b.y,85,60,Math.atan2(b.vy,b.vx),0,TAU);g.fill();emo('🐦',b.x,b.y-10,40,0,b.vx<0)}
   if(b.ph==='warn'){frame('#ffcc00',m.t);bigText('🐦 Bird coming — hide!',90)}
   if(m.phase==='spin'&&m.msgT>0){m.msgT-=1/60;bigText('Crawl around the twig 3 times!',90)}},
  hud:m=>m.phase==='spin'?`🧵 lap ${Math.min(3,Math.floor(Math.abs(m.lap)/TAU))}/3`:`${'❤️'.repeat(Math.max(0,m.lives))}   👀 spotted ${m.spot}`}
];

// ---------- extras: drawings ----------
function dew(x,y){g.fillStyle='#bfe8ff';g.strokeStyle='#5aa9d6';g.lineWidth=2;g.beginPath();g.arc(x,y,9,0,TAU);g.fill();g.stroke();g.fillStyle='#fff';g.beginPath();g.arc(x-3,y-3,2.5,0,TAU);g.fill()}
function lady(x,y,a,k=1){g.save();g.translate(x,y);g.rotate(a);g.fillStyle='#e02020';g.beginPath();g.arc(0,0,8*k,0,TAU);g.fill();g.fillStyle='#111';g.beginPath();g.arc(7*k,0,4*k,0,TAU);g.fill();g.fillRect(-8*k,-0.6,16*k,1.2);
  for(const[dx,dy]of[[-3,-4],[-3,4],[2,-4],[2,4]]){g.beginPath();g.arc(dx*k,dy*k,1.6*k,0,TAU);g.fill()}g.restore()}
function mole(x,y,t){g.fillStyle='#4a3426';g.beginPath();g.ellipse(x,y,18,15,0,0,TAU);g.fill();g.fillStyle='#ffb0b8';g.beginPath();g.arc(x,y-13,5,0,TAU);g.fill();
  g.fillStyle='#111';g.beginPath();g.arc(x-6,y-6,1.8,0,TAU);g.arc(x+6,y-6,1.8,0,TAU);g.fill();g.strokeStyle='#e9c9a5';g.lineWidth=3;
  const w=Math.sin(t*10)*3;g.beginPath();g.moveTo(x-16,y+4);g.lineTo(x-22,y+8+w);g.moveTo(x+16,y+4);g.lineTo(x+22,y+8-w);g.stroke()}
function frame(col,t){if(!col)return;g.strokeStyle=col;g.globalAlpha=0.55+0.35*Math.sin(t*12);g.lineWidth=10;g.strokeRect(5,5,AW-10,AH-10);g.globalAlpha=1}
let bigY=0;function bigText(s,y){g.font='800 26px "Baloo 2",system-ui';g.textAlign='center';g.lineWidth=5;g.strokeStyle='rgba(255,255,255,.9)';g.strokeText(s,AW/2,y||AH/2);g.fillStyle='#c8261e';g.fillText(s,AW/2,y||AH/2)}

// ---------- raft ----------
function raftInit(m,o){Object.assign(m,o);const r=rng(o.seed);m.t=0;m.limit=0;m.bumps=0;m.cool=0;m.pet=0;
  m.cx=y=>200+55*Math.sin(y/260)+25*Math.sin(y/97);m.hwAt=y=>o.hw+12*Math.sin(y/180);
  m.raft={x:m.cx(0),y:0,a:-Math.PI/2,vx:0,vy:0,w:0};m.cam=-430;
  m.rocks=[];for(let i=0;i<o.rocks;i++){const y=-260-i*(o.len-500)/o.rocks-r()*60,c=m.cx(y),hw=m.hwAt(y);m.rocks.push({x:c+(r()*2-1)*(hw-40),y,r:16+r()*12})}
  m.whirls=[];for(let i=0;i<o.whirls;i++){const y=-500-i*(o.len-900)/Math.max(1,o.whirls)-r()*120;m.whirls.push({x:m.cx(y)+(r()*2-1)*(m.hwAt(y)-60),y,r:44})}
  m.petals=[];for(let i=0;i<o.petals;i++){const y=-200-i*(o.len-400)/o.petals,c=m.cx(y);let x;do{x=c+(r()*2-1)*(m.hwAt(y)-30)}while(m.rocks.some(k=>hyp(k.x-x,k.y-y)<k.r+22));m.petals.push({x,y})}
  if(o.beach){const y=-o.len+260;m.beach={y,side:r()<0.5?-1:1,h:150}}m.end=-o.len}
function raftUpd(m,dt,now){m.t+=dt;m.cool-=dt;const R=m.raft,o=oars(now);
  const hx=Math.cos(R.a),hy=Math.sin(R.a);const th=(o.l+o.r)*95;R.vx+=hx*th*dt;R.vy+=hy*th*dt;R.w+=(o.l-o.r)*3.1*dt;
  for(const w of m.whirls){const dx=R.x-w.x,dy=R.y-w.y,d=hyp(dx,dy);if(d<w.r){R.w+=2.6*dt;R.vx+=(-dy/d)*80*dt-dx/d*25*dt;R.vy+=(dx/d)*80*dt-dy/d*25*dt}}
  const dr=Math.exp(-dt/1.1);R.vx*=dr;R.vy*=dr;R.w*=Math.exp(-dt/0.7);const sp=hyp(R.vx,R.vy);if(sp>140){R.vx*=140/sp;R.vy*=140/sp}
  R.a+=R.w*dt;R.x+=R.vx*dt;R.y+=(R.vy-m.cur)*dt;
  const c=m.cx(R.y),hw=m.hwAt(R.y);
  if(m.beach&&Math.abs(R.y-m.beach.y)<m.beach.h/2&&(R.x-c)*m.beach.side>hw-26){m.done=1;S('cheer');return}
  if(Math.abs(R.x-c)>hw-18){const s=Math.sign(R.x-c);R.x=c+s*(hw-18);R.vx=-s*Math.abs(R.vx)*0.6-s*30;bump(m)}
  for(const k of m.rocks){const dx=R.x-k.x,dy=R.y-k.y,d=hyp(dx,dy),rr=k.r+16;if(d<rr){R.x=k.x+dx/d*rr;R.y=k.y+dy/d*rr;const vn=R.vx*dx/d+R.vy*dy/d;if(vn<0){R.vx-=1.6*vn*dx/d;R.vy-=1.6*vn*dy/d}R.vy+=20;bump(m)}}
  for(const p of m.petals)if(!p.got&&hyp(p.x-R.x,p.y-R.y)<24){p.got=1;m.pet++;S('ding')}
  m.cam+=((R.y-400)-m.cam)*(1-Math.exp(-dt/0.25));
  if(R.y<m.end+(m.beach?40:0)){if(m.beach)m.over=1;else{m.done=1;S('cheer')}}}
function bump(m){if(m.cool>0)return;m.cool=0.7;m.bumps++;S('boing');vib(70)}
function raftDraw(m){const R=m.raft;g.fillStyle='#7cc35a';g.fillRect(0,0,AW,AH);g.save();g.translate(0,-m.cam);
  const y0=m.cam-20,y1=m.cam+AH+20;
  g.fillStyle='#4aa3df';g.beginPath();for(let y=y0;y<=y1;y+=10)g.lineTo(m.cx(y)-m.hwAt(y),y);for(let y=y1;y>=y0;y-=10)g.lineTo(m.cx(y)+m.hwAt(y),y);g.fill();
  g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=2;for(let y=Math.floor(y0/40)*40;y<y1;y+=40){const off=(m.t*m.cur)%40;const yy=y-off,c=m.cx(yy);for(const dx of[-60,0,55]){g.beginPath();g.moveTo(c+dx-10,yy+8);g.lineTo(c+dx,yy);g.lineTo(c+dx+10,yy+8);g.stroke()}}
  if(m.beach){const b=m.beach;g.fillStyle='#f1d58a';g.beginPath();for(let y=b.y-b.h/2;y<=b.y+b.h/2;y+=10){const e=m.cx(y)+b.side*(m.hwAt(y)-34);g.lineTo(e,y)}for(let y=b.y+b.h/2;y>=b.y-b.h/2;y-=10)g.lineTo(m.cx(y)+b.side*(m.hwAt(y)+40),y);g.fill();
    emo('🏖️',m.cx(b.y)+b.side*(m.hwAt(b.y)-4),b.y,30);g.fillStyle='#7a5200';g.font='bold 15px "Baloo 2",system-ui';g.textAlign='center';g.fillText('LAND HERE',m.cx(b.y)+b.side*(m.hwAt(b.y)-60),b.y-b.h/2-6)}
  if(m.end>y0-200){const yy=m.end;g.fillStyle='rgba(255,255,255,.8)';g.fillRect(0,yy-30,AW,30);g.fillStyle=m.beach?'#1b4f7a':'#2a7a2a';g.font='800 20px "Baloo 2",system-ui';g.textAlign='center';g.fillText(m.beach?'⚠️ WATERFALL ⚠️':'🏁 FINISH 🏁',AW/2,yy-8)}
  for(const w of m.whirls){for(let k=0;k<3;k++){g.strokeStyle=`rgba(255,255,255,${0.5-k*0.12})`;g.lineWidth=3;g.beginPath();g.arc(w.x,w.y,w.r*(0.35+k*0.25),m.t*3+k,m.t*3+k+4.2);g.stroke()}}
  for(const k of m.rocks)pebble(k.x,k.y,k.r);for(const p of m.petals)if(!p.got)emo('🌸',p.x,p.y,20);
  g.save();g.translate(R.x,R.y);g.rotate(R.a+Math.PI/2);leafShape(0,0,15,30,'#d98a2b','#a8611a');g.restore();
  const c={x:R.x+Math.cos(R.a)*14,y:R.y+Math.sin(R.a)*14,dir:R.a,trail:[]};for(let i=0;i<60;i++)c.trail.push({x:c.x-Math.cos(R.a)*i*0.5,y:c.y-Math.sin(R.a)*i*0.5});drawCat(c,0.75);
  g.restore()}

// ---------- play loop ----------
function startMission(i){cur=i;M={i,def:MS[i],t:0,res:null};MS[i].init(M);ptr.clear();joy=null;scr='play';M.count=3;M.cT=0;U.innerHTML='';S('beep')}
function win(m,stars){if(m.res)return;m.res={stars,win:true};finish()}
function lose(m,msg){if(m.res)return;m.res={stars:0,win:false,msg};finish()}
function finish(){scr='result';const r=M.res,p=getP(),i=M.i,first=r.stars>0&&!p[i];if(r.stars>p[i]){p[i]=r.stars;setP(p)}
  if(r.stars>0){S(r.stars===3?'winBig':'win');vib(80)}else{S('failBig');vib(200)}
  setTimeout(()=>{if(scr!=='result')return;if(first&&FRIEND[i])friendScr(FRIEND[i],()=>resultScr(r,first));else if(first&&i===9)endScr(()=>resultScr(r,first));else resultScr(r,first)},r.stars?700:900)}
function tick(now){raf=requestAnimationFrame(tick);if(!on)return;const dt=Math.min(0.05,(now-lastT)/1000);lastT=now;layout();
  g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,W,H);
  if(scr==='play'||scr==='result'){
    const m=M,d=m.def;
    if(scr==='play'){if(m.count>0){m.cT+=dt;if(m.cT>=1){m.cT=0;m.count--;S(m.count?'beep':'go')}}
      else{m.t+=dt;d.update.call(d,m,dt,now);if(!m.res&&m.limit&&m.t>=m.limit){const s=d.timeUp?d.timeUp.call(d,m):0;if(s>0)win(m,s);else lose(m,d.timeUp?'Time\'s up! Try to do a bit better.':'Time\'s up!')}}}
    g.save();g.translate(ox,oy);g.scale(sc,sc);g.beginPath();g.rect(0,0,AW,AH);g.clip();d.draw.call(d,m);
    if(scr==='play'&&m.count>0){g.fillStyle='rgba(0,0,0,.25)';g.fillRect(0,0,AW,AH);g.font='800 80px "Baloo 2",system-ui';g.textAlign='center';g.fillStyle='#fff';g.fillText(m.count,AW/2,AH/2+25)}
    g.restore();g.setTransform(dpr,0,0,dpr,0,0);
    drawHud(m,d);drawPad(d,now)}
  else drawMapBg(now)}
function drawHud(m,d){g.fillStyle='rgba(20,60,30,.92)';g.fillRect(0,0,W,HUD);g.fillStyle='#fff';g.textBaseline='middle';
  g.font='800 18px "Baloo 2",system-ui';g.textAlign='center';g.fillText(`${d.e} ${m.i+1}. ${d.name}`,W/2,16);
  g.font='700 15px "Baloo 2",system-ui';let right='';if(m.limit){const left=Math.max(0,Math.ceil(m.limit-m.t));right=`⏱ ${left}s`}
  g.fillText(`${d.hud(m)}${right?'   '+right:''}`,W/2,38);g.textBaseline='alphabetic';
  g.fillStyle='rgba(255,255,255,.18)';rr(8,7,40,40,10);g.fill();g.fillStyle='#fff';g.font='22px system-ui';g.textAlign='center';g.fillText('✕',28,35)}
function rr(x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
function drawPad(d,now){const y=H-PAD;g.fillStyle='rgba(30,80,40,.88)';rr(0,y,W,PAD+20,22);g.fill();g.textAlign='center';
  if(d.ctrl==='raft'){const o=oars(now);for(const[s,x,v]of[['L',W*0.25,o.l],['R',W*0.75,o.r]]){g.fillStyle='rgba(255,255,255,.12)';rr(x-W*0.2,y+14,W*0.4,PAD-30,16);g.fill();
      g.fillStyle='#fff';g.font='700 14px "Baloo 2",system-ui';g.fillText(s==='L'?'LEFT OAR':'RIGHT OAR',x,y+34);g.font='13px "Baloo 2",system-ui';g.fillText('↓ forward · ↑ back',x,y+PAD-26);
      const k=clamp(v,-1.4,1.4);g.save();g.translate(x,y+PAD/2+4);g.rotate(k*0.5*(s==='L'?-1:1));g.fillStyle='#c98a3c';rr(-5,-38,10,62,4);g.fill();g.beginPath();g.ellipse(0,30,13,20,0,0,TAU);g.fill();g.restore();
      if(Math.abs(k)>0.15){g.fillStyle=k>0?'#9cf07a':'#ffcf5a';g.font='800 26px system-ui';g.fillText(k>0?'▼':'▲',x+(s==='L'?-44:44),y+PAD/2+12)}}
    for(const p of ptr.values()){g.fillStyle='rgba(255,138,42,.7)';g.beginPath();g.arc(p.x,p.y,16,0,TAU);g.fill()}return}
  const j=stick();g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=3;g.beginPath();g.arc(JX(),JY(),JR,0,TAU);g.stroke();g.fillStyle='rgba(255,255,255,.85)';g.beginPath();g.arc(JX(),JY(),7,0,TAU);g.fill();
  if(j.fx!=null){const a=Math.atan2(j.fy-JY(),j.fx-JX()),dd=Math.min(JR,hyp(j.fx-JX(),j.fy-JY()));g.strokeStyle='#ff8a2a';g.lineWidth=5;g.beginPath();g.moveTo(JX(),JY());g.lineTo(JX()+Math.cos(a)*dd,JY()+Math.sin(a)*dd);g.stroke();g.fillStyle='#ff8a2a';g.beginPath();g.arc(JX()+Math.cos(a)*dd,JY()+Math.sin(a)*dd,13,0,TAU);g.fill()}
  g.fillStyle='#fff';g.font='700 14px "Baloo 2",system-ui';g.fillText(d.ctrl==='go'?'➡️ Keeps crawling · steer with the joystick':'✋ Let go to STOP · hold to crawl',W/2,y+16)}
let bgT=0;function drawMapBg(now){g.fillStyle='#bfe3a5';g.fillRect(0,0,W,H);const r=rng(3);g.font='28px system-ui';g.globalAlpha=0.35;for(let i=0;i<18;i++){const x=r()*W,y=(r()*H+now*0.01*(0.5+r()))%H;g.fillText(['🍃','🌼','🍀','🌸'][i%4],x,y)}g.globalAlpha=1}

// ---------- screens ----------
function starsHtml(n,size){return `<span class="s">${'★'.repeat(n)}${'<i>★</i>'.repeat(3-n)}</span>`}
function mapScr(){scr='map';M=null;const p=getP(),tot=p.reduce((a,b)=>a+b,0);let nextI=p.findIndex(v=>!v);if(nextI<0)nextI=-1;
  const fr=[['inch',2],['centi',4],['snail',6]].map(([k,i])=>`<div class="${p[i]?'':'lk'}"><img src="img/${k}.webp" alt=""><br>${p[i]?esc(nm(k)):'🔒 Mission '+(i+1)}</div>`).join('');
  U.innerHTML=`<div class="ap"><button class="x" data-a="home" aria-label="Home">🏠</button><h2>🐛 Caterpillar's Adventure</h2>
  <p class="sm">⭐ ${tot} / 30 stars · Garden friends join you on the way:</p><div class="fr">${fr}</div>
  <div class="ml">${MS.map((d,i)=>{const op=opened(i);return `<button class="mi${op?'':' lk'}${i===nextI?' cur':''}${d.boss?' boss':''}" data-a="${op?'pick':''}" data-v="${i}"><span class="n">${d.boss?'👑':i+1}</span><span class="e">${d.e}</span><span class="t">${esc(d.name)}<br><small class="sm">${d.ctrl==='go'?'➡️ keeps crawling':d.ctrl==='stop'?'✋ let go to stop':'🛶 two-thumb oars'}</small></span>${op?starsHtml(p[i]):'🔒'}</button>`}).join('')}</div>
  <p class="sm" style="margin-top:10px">Sea and Reptile adventures are coming later.</p></div>`;
  const cur=U.querySelector('.mi.cur');cur&&cur.scrollIntoView&&cur.scrollIntoView({block:'center'})}
const nm=k=>{try{return B().t('ch_'+k)}catch(e){return k}};
const CTL={go:'➡️ Keeps crawling — you only steer',stop:'✋ Let go of the joystick to STOP',raft:'🛶 Two thumbs = two oars'};
function startScr(i){scr='start';const d=MS[i],p=getP();U.innerHTML=`<div class="ap"><button class="x" data-a="map" aria-label="Back">←</button><h2>${d.e} ${i+1}. ${esc(d.name)}</h2>
  ${d.boss?'<p><b>👑 Boss mission</b></p>':''}<p>${esc(d.story)}</p><div class="ctl">${CTL[d.ctrl]}</div>
  <ul>${d.stars.map((s,k)=>`<li>${'⭐'.repeat(k+1)} ${esc(s)}</li>`).join('')}</ul>
  ${p[i]?`<p class="sm">Your best: ${'⭐'.repeat(p[i])}</p>`:''}${d.ctrl==='raft'?'<p class="sm">On a computer: W / S = left oar, ↑ / ↓ = right oar.</p>':'<p class="sm">On a computer you can also use the arrow keys.</p>'}
  <button class="ab" data-a="go" data-v="${i}">▶ Start</button></div>`}
function resultScr(r,first){scr='result';const i=M.i,d=MS[i],nx=i<9&&opened(i+1);
  U.innerHTML=`<div class="ap"><h2>${r.stars?(r.stars===3?'PERFECT!':'Mission complete!'):'So close!'}</h2><div class="stars">${'★'.repeat(r.stars)}<i>${'★'.repeat(3-r.stars)}</i></div>
  <p>${r.stars?esc(d.stars[r.stars-1])+'!':esc(r.msg||'Try again!')}</p>${r.stars&&r.stars<3?`<p class="sm">Next star: ${esc(d.stars[r.stars])}</p>`:''}
  ${r.stars&&nx?`<button class="ab" data-a="pick" data-v="${i+1}">Next mission →</button>`:''}
  <div class="row2"><button class="ab g" data-a="go" data-v="${i}">🔁 Try again</button><button class="ab g" data-a="map">🗺️ Adventure</button></div></div>`}
let after=null;
function friendScr(k,next){scr='friend';after=next;let fact='';try{fact=B().t('fact_'+k)}catch(e){}S('cheer');
  U.innerHTML=`<div class="ap"><h2>🎉 A new friend!</h2><img class="big" src="img/${k}.webp" alt=""><p><b>${esc(nm(k))}</b> joins your adventure!</p><p class="sm">${esc(fact)}</p>
  <button class="ab" data-a="after">Yay! →</button>${B().playVid?`<button class="ab g" data-a="vid" data-v="${k}">▶ Watch video</button>`:''}</div>`}
function endScr(next){scr='friend';after=next;S('champion');U.innerHTML=`<div class="ap"><h2>🦋 Cocoon spun!</h2><div style="font-size:70px;line-height:1.2" id="bfly">🐛</div>
  <p>The caterpillar sleeps in its cocoon… and wakes up as a <b>butterfly</b>!</p><p class="sm">You finished Caterpillar's Adventure!</p><button class="ab" data-a="after">Hooray! →</button></div>`;
  setTimeout(()=>{const e=document.getElementById('bfly');if(e)e.textContent='🦋'},1600)}
function click(e){const b=e.target.closest('button');if(!b)return;const a=b.dataset.a,v=+b.dataset.v;S('tap');
  if(a==='home')return close();if(a==='map')return mapScr();if(a==='pick')return startScr(v);if(a==='go')return startMission(v);
  if(a==='after'){const f=after;after=null;f&&f();return}
  if(a==='vid'){const k=b.dataset.v,f=after;L.style.display='none';on=false;try{B().playVid(k,()=>{on=true;L.style.display='block';lastT=performance.now();f&&f()})}catch(err){on=true;L.style.display='block'}}}
// tap ✕ on the HUD during play
addEventListener('pointerdown',e=>{if(!on||scr!=='play'||e.target!==cv)return;if(e.clientX<56&&e.clientY<HUD){ptr.delete(e.pointerId);if(joy===e.pointerId)joy=null;mapScr()}},true);
window.ADV={open,close,_dbg:()=>({M,scr,getP,setP,startMission,win:s=>M&&win(M,s)})};
})();
