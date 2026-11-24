{
// ---------- config ----------
const SB_URL='https://cxcsxqqghwscztauxhhy.supabase.co';
const SB_KEY='sb_publishable_iBuJ0q0b7mFMJQ7PgDXucg_jDqtMe2T';
const MAXP=8;
const qs=new URLSearchParams(location.search);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

// ---------- language ----------
const L={
 en:{title:'Caterpillar Race',intro:'Draw <b>circles</b> on the screen, like turning a wheel. Spin faster to crawl faster. Stop and your caterpillar stops.',
  foot:'Race the computer, a friend on the same phone, or up to 8 friends online, each on their own phone. On a computer: draw circles with the mouse.',
  ready:'Ready to race?',vsCpu:'Computer',duo:'Same phone',online:'Online (2–8)',easy:'Easy',normal:'Normal',hard:'Hard',
  play:'Play',best:'Your best on {d}: {t}',nobest:'No best time yet on {d}.',duoHint:'Player 1 draws on the top half, player 2 on the bottom half.',
  nick:'Your nickname',create:'Create a race',joinT:'Join the race',join:'Join',joining:'Joining…',
  onlineHint:'You get a link. Send it to up to 7 friends. Everyone races on their own phone.',
  room:'Race room',shareHint:'Send this link to your friends (up to 8 players):',copy:'Copy link',share:'Share',copied:'Copied!',
  waiting:'Waiting for friends to join…',readyBtn:'I\'m ready',readyCount:'{r} of {n} ready',isReady:'ready',notReady:'not ready',
  startNow:'Start now ({k} players)',autoStart:'Auto start when all {m} are in and ready.',inProgress:'A race is running. You\'ll join the next one.',
  leave:'Leave',full:'This race is full ({m} players).',offline:'Could not connect. Check your internet and try again.',back:'Back',
  you:'You',cpu:'Computer',p1:'Player 1',p2:'Player 2',youWin:'You win!',cpuWin:'Computer wins',wins:'{n} wins!',place:'You finished {p} of {n}',
  rank:'#',racer:'Racer',time:'Time',topRpm:'Top RPM',rematch:'Race again',change:'Change mode',copyRes:'Copy result',
  newBest:'New best on {d}!',firstBest:'First best time on {d}.',leftTag:'left',dnf:'—',
  drawHere:'Draw circles here',go:'GO!',copyOk:'Copied. Paste it to a friend.',
  shareSolo:'Caterpillar Race ({d}): I {r}{t}, top {rpm} RPM. Can you beat it?',won:'won',lost:'lost',
  shareOnline:'Caterpillar Race: I finished {p} of {n}{t}! Race us: {u}',invite:'Race me in Caterpillar Race!',waitingName:'Waiting…',host:'host',
  practice:'Practice',practiceHint:'Learn the circles. No opponent, no finish line, nothing recorded.',start:'Start',done:'Done',
  tipStart:'Draw circles anywhere on the screen',tipFaster:'Faster! Try smaller, quicker circles',tipSteady:'Nice rhythm, keep it steady',tipRed:'Max power!',
  goal:'Goal: hold 300+ RPM for 5 seconds',goalDone:'Goal done! 5 seconds at 300+ RPM',holdLbl:'300+ RPM held',topLbl:'Top RPM',
  board:'Leaderboard',boardTitle:'Fastest caterpillars',p24:'24 hours',p7:'7 days',pAll:'All time',nickOpt:'Nickname (for the leaderboard)',
  boardEmpty:'No times yet. Be the first!',boardErr:'Couldn\'t load the leaderboard. Check your internet.',boardSaving:'Saving to leaderboard…',
  boardRank:'Leaderboard: you\'re #{r} of {n} in the last 24 hours',boardNoNick:'Add a nickname before the race to join the leaderboard.',boardFail:'Couldn\'t save to the leaderboard.',loading:'Loading…',boardNote:'Your best time counts once per period.',
  character:'Character',modeQ:'How do you want to play?',practiceSub:'Learn the circles · nothing recorded',cpuSub:'Easy · Normal · Hard · Champion',champion:'Champion',champLocked:'🔒 Beat the computer on Hard to unlock Champion.',champUnlocked:'🏆 Champion level unlocked!',champHint:'Champion races at 330 RPM. Almost impossible!',yourPic:'Your race picture',picAlt:'Picture of your animal celebrating with its result',sharePic:'Share',savePic:'Save picture',copyText:'Copy text',picHint:'On a phone you can also press and hold the picture to save it.',picSaved:'Picture saved.',sharePicBtn:'🎉 Share picture',players:'players',duoSub:'Two players, one screen split in half',onlineSub:'2–8 friends, each on their own phone',next:'Next',pickAnimal:'Pick your animal',p1Animal:"Player 1's animal",p2Animal:"Player 2's animal",p1Is:'Player 1: {a}',selected:'Selected: {a}',cpuNote:'The computer picks a different animal.',nameDiff:'Name & level',difficulty:'Difficulty',nameRoom:'Name & race room',createTab:'Create a race',joinTab:'Join with code',howMany:'How many players?',capHint:'The race starts when all {n} players are in and ready.',codeLbl:'4-digit race code',joinBtn:'Join race',createBtn:'Create race',invited:"You're invited to race {c}!",notNow:'Play something else',stepOf:'Step {i} of {n}',roomCode:'Race code',joinedCount:'{n} / {m} players in',emptySlot:'Empty spot · waiting…',waitReady:'Waiting for everyone to be ready…',waitJoin:'Waiting for {k} more to join…',hostCan:'The host can start early with everyone here.',noRoom:'No race found with code {c}. Check the code and try again.',badCode:'Enter the 4-digit code.',quit:'Quit',quitQ:'Quit this race?',keep:'Keep racing',quitYes:'Quit',home:'Home',music:'Music',sound:'Sounds',on:'on',off:'off',ch_cat:'Caterpillar',ch_inch:'Inchworm',ch_centi:'Centipede',ch_turtle:'Green sea turtle',ch_snail:'Garden snail',ch_garter:'Garter snake',ch_frill:'Frilled lizard',ch_basil:'Green basilisk',ch_puffer:'Pufferfish',ch_shrimp:'Pistol shrimp',ch_crab:'Swimming crab',ch_peng:'Gentoo penguin',snap:'Snap!',huff:'Huff!',phew:'Phew~',yay:'Yay!'},
};
const lang='en';
const t=(k,v={})=>(L[lang][k]||L.en[k]||k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');
const ord=p=>p+(p%10===1&&p%100!==11?'st':p%10===2&&p%100!==12?'nd':p%10===3&&p%100!==13?'rd':'th');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function applyLang(){document.documentElement.lang=lang;document.title=t('title');document.getElementById('h1').textContent=t('title');document.getElementById('intro').innerHTML=t('intro');document.getElementById('foot').textContent=t('foot');}

// ---------- canvas ----------
const cv=document.getElementById('cv'),ov=document.getElementById('ov');let ctx=cv.getContext('2d');
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let W=0,H=0,DPR=1;
const resize=()=>{DPR=Math.min(2,window.devicePixelRatio||1);W=cv.clientWidth;H=cv.clientHeight;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR)};
const ro=new ResizeObserver(resize);ro.observe(cv);resize();

// ---------- game model ----------
const TRACK=2400,START=40,HUD=30;
const N=10,SP=13,STEP=34,DELTA=.6,LIFT=13,GAIN=1.4,CAP=52,MAXRPM=500,REDRPM=300;
const KMH=100/(STEP*GAIN*CAP/(2*Math.PI)),MAXKMH=100;
const g=p=>(p-Math.sin(p))/(2*Math.PI);
const headOff=phi=>(N-1)*SP+STEP*g(phi-(N-1)*DELTA);
const X0=START+120-headOff(0),S0=START+120;
const CHARS=['cat','inch','centi','snail','garter','frill','basil','turtle','puffer','shrimp','crab','peng'];
const HAB={cat:'garden',inch:'garden',centi:'garden',snail:'garden',garter:'garden',frill:'desert',basil:'pond',turtle:'sea',puffer:'sea',shrimp:'sea',crab:'sea',peng:'ice'};
const SIG={cat:{body:'#6fd14a',dark:'#2f7d1f',spot:'#ffd23f'},inch:{body:'#a6e86a',dark:'#3f8a24',spot:'#fff6a8'},centi:{body:'#c9b3ff',dark:'#5b3fb0',spot:'#ff4f97'},turtle:{body:'#5fc79a',dark:'#2e7d5b',spot:'#ffe27a'},snail:{body:'#f1d2b0',dark:'#a5784e',spot:'#f0a35e'},garter:{body:'#5cbf6a',dark:'#2f7d4a',spot:'#ffe27a'},frill:{body:'#e3ad66',dark:'#8a5a2b',spot:'#ff8a5c'},basil:{body:'#6fd14a',dark:'#2f7d1f',spot:'#c9f59a'},puffer:{body:'#ffd84a',dark:'#b8860b',spot:'#fff4c8'},shrimp:{body:'#ff9a76',dark:'#c2482a',spot:'#ffd1c2'},crab:{body:'#ff7a5c',dark:'#b23a22',spot:'#ffd0c0'},peng:{body:'#2b2f36',dark:'#0f1115',spot:'#ffffff',gauge:'#6cc4ff'}};
// Every character moves the same average distance per turn (fair races); only the look differs.
function headPos(ch,phi){
  if(ch==='inch')return S0+2*STEP*g(phi/2);
  return S0+STEP*phi/(2*Math.PI);
}
const headX=c=>headPos(c.char||'cat',c.phi);
const prog=c=>Math.max(0,Math.min(1,(headX(c)-S0)/(TRACK-S0)));
// computer's average speed per level (it varies ±18% around this)
const DIFF=[{k:'easy',rpm:100},{k:'normal',rpm:160},{k:'hard',rpm:250},{k:'champion',rpm:330}].map(d=>({...d,w:d.rpm*2*Math.PI/60}));
const champOpen=()=>store.get('cr-champ')==='1';
const SK=[['#6fd14a','#2f7d1f','#ffd23f'],['#ff9a3c','#b5560e','#fff1a8'],['#4fb3ff','#1f6ea8','#ffffff'],['#ff6b9a','#b02d5c','#ffffff'],['#b38bff','#5e3bb0','#ffffff'],['#ffd23f','#9a7a05','#ffffff'],['#3fd6c6','#13806f','#ffffff'],['#ff5b4f','#a32118','#ffe9a8']].map(([body,dark,spot])=>({body,dark,spot}));
let myChar=CHARS.includes(store.get('cr-char'))?store.get('cr-char'):'cat',botChar=null;
let mode=qs.get('room')?'online':'solo',diff=Math.min(3,Math.max(0,+(store.get('cr-diff')??1)||0)),state='menu',startT=0,firstDone=0,endEl=0,winner=null,racers=[],me=null,endNote='';
if(diff===3&&!champOpen())diff=2;
const hash=k=>{const s=Math.sin(k*127.1+311.7)*43758.5453;return s-Math.floor(s)};
const fmt=ms=>(ms/1000).toFixed(2)+'s';
const rpmOf=w=>Math.max(0,w)*60/(2*Math.PI);

const mk=(sk,name,kind,id,ch)=>({...sk,id,name,char:CHARS.includes(ch)?ch:'cat',kind:kind||'human',phi:0,acc:0,w:0,spin:0,top:0,done:null,left:false,ph:Math.random()*6,pv:0,disp:0,bt:0,btw:0,tphi:0,tw:0,rt:0,ang:0,px:null,vs:0,kmh:0,hold:0,bestHold:0,goalDone:false});
function setup(ids){
  if(mode==='solo'){racers=[mk(SK[2],t('cpu'),'bot',null,botChar||(botChar=(l=>l[Math.floor(Math.random()*l.length)])(CHARS.filter(k=>k!==myChar)))),mk(SIG[myChar],myName()||t('you'),'human',null,myChar)];me=racers[1]}
  else if(mode==='practice'){racers=[mk(SIG[myChar],myName()||t('you'),'human',null,myChar)];me=racers[0]}
  else if(mode==='duo'){racers=[mk(SIG[myChar],t('p1'),'human',null,myChar),mk(p2Char===myChar?SK[1]:SIG[p2Char],t('p2'),'human',null,p2Char)];me=null}
  else{
    const mem=net?net.members():[];
    const list=ids||mem.map(p=>p.id);
    racers=list.map((id,i)=>{const p=mem.find(x=>x.id===id)||(net&&net.peers.get(id)),cc=id===myId?myChar:(p&&p.ch);return mk({...(SIG[cc]||SIG.cat),pc:SK[i%8].body},id===myId?(net?net.me.name:myName()):(p?p.name:'?'),id===myId?'human':'remote',id,id===myId?myChar:(p&&p.ch))});
    if(!racers.length)racers=[mk(SK[0],myName()||t('you'),'human',myId,myChar)];
    me=racers.find(r=>r.id===myId)||null;
  }
}
function feed(c,d){if(c&&c.kind==='human'){c.acc+=d;c.ang+=d}}
function upd(c,now,dt){
  const k=1-Math.exp(-dt/130);
  if(c.kind==='bot'){
    if(state==='race'&&c.done==null){if(now>c.bt){c.bt=now+600+Math.random()*900;c.btw=DIFF[diff].w*(.82+Math.random()*.36)}c.w+=(c.btw-c.w)*(1-Math.exp(-dt/400))}
    else c.w+=(0-c.w)*k;
    c.acc=0;
  }else if(c.kind==='remote'){
    c.w+=((c.left?0:c.tw)-c.w)*k;
    if(state==='race'&&c.done==null&&!c.left){
      const pred=c.tphi+Math.min(1.5,(now-c.rt)/1000)*Math.max(0,c.tw)*GAIN;
      c.phi=Math.max(c.phi,c.phi+(pred-c.phi)*.2);
      if(headX(c)>TRACK-2)c.phi=Math.min(c.phi,phiForFinish(c.char)-.01);
    }
  }else{
    const inst=dt>0?c.acc/dt*1000:0;c.acc=0;c.w+=(inst-c.w)*k;
  }
  const sp=Math.min(CAP,Math.max(0,c.w));
  c.disp+=(rpmOf(sp)-c.disp)*Math.min(1,dt/90);
  if(c.kind!=='human')c.ang+=sp*dt/1000;
  if(state==='race'&&c.done==null&&c.kind!=='remote'){
    c.phi+=sp*GAIN*dt/1000;c.spin+=sp*dt/1000;c.top=Math.max(c.top,sp/(2*Math.PI));
    if(mode==='practice'){if(rpmOf(sp)>=300){c.hold+=dt/1000;c.bestHold=Math.max(c.bestHold,c.hold);if(c.hold>=5&&!c.goalDone){c.goalDone=true;c.goalAt=now;sfx.win()}}else c.hold=0}
    else if(headX(c)>=TRACK){c.done=now-startT;if(!firstDone)firstDone=now;if(c.kind==='human'){sfx.ding();buzz(120)}if(mode==='online'&&c===me&&net)net.send({t:'fin',time:c.done,spin:c.spin,top:c.top})}
  }
  const hx=headX(c);if(c.px!=null&&dt>0){const v=(hx-c.px)/dt*1000;c.vs+=(v-c.vs)*(1-Math.exp(-dt/350))}c.px=hx;c.kmh=Math.min(MAXKMH,Math.max(0,c.vs)*KMH);
  c.pv+=(Math.max(-3,Math.min(3,-sp*.15))-c.pv)*.15;
}
function standings(){
  return racers.slice().sort((a,b)=>{
    if(a.left!==b.left)return a.left?1:-1;
    if((a.done!=null)!==(b.done!=null))return a.done!=null?-1:1;
    if(a.done!=null)return a.done-b.done;
    return headX(b)-headX(a);
  });
}

// ---------- drawing ----------
function rr(x,y,w,h,r){ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x,y,w,h,r);else ctx.rect(x,y,w,h)}
function hills(vw,off,base,col,wl,amp){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,220);for(let x=0;x<=vw+10;x+=10){const u=x+off;ctx.lineTo(x,base-amp*Math.sin(u/wl)-amp*.6*Math.sin(u/(wl*.43)+1))}ctx.lineTo(vw+10,220);ctx.closePath();ctx.fill()}
function drawCat(c,now,ghost){
  const base=178,sp=Math.min(CAP,Math.max(0,c.w)),br=RM?0:Math.sin(now/300+c.ph)*.7;
  const seg=[];
  const hx0=headX(c);
  // Body lies flat; a single segment pops up at a time and that bump walks from tail to head.
  const bump=((c.phi*(1.25/3*.7)/(2*Math.PI))*(N+1))%(N+1)-.5;
  for(let i=0;i<N;i++){const d=Math.abs(i-bump),k=d<1?(1+Math.cos(Math.PI*d))/2:0,lift=11*k,r=10+3*Math.sin(Math.PI*(i+1)/(N+1));seg.push({x:hx0-13-(N-1-i)*SP,y:base-r-lift,r,lift})}
  if(!ghost){const x0=seg[0].x,x1=seg[N-1].x;ctx.fillStyle='rgba(30,60,20,.22)';ctx.beginPath();ctx.ellipse((x0+x1)/2+6,base+1,(x1-x0)/2+20,4,0,0,7);ctx.fill()}
  ctx.fillStyle=c.dark;
  seg.forEach(s=>{const down=s.lift<1.5,ly=down?base-1:s.y+s.r-1;ctx.beginPath();ctx.ellipse(s.x-3,ly,3.2,down?2.8:2,0,0,7);ctx.ellipse(s.x+4,ly,3.2,down?2.8:2,0,0,7);ctx.fill()});
  for(let i=0;i<N;i++){const s=seg[i];ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(255,255,255,.35)';ctx.beginPath();ctx.arc(s.x-3,s.y-4,s.r*.35,0,7);ctx.fill();if(i%2){ctx.fillStyle=c.spot;ctx.beginPath();ctx.arc(s.x+1,s.y-s.r*.55,2.4,0,7);ctx.fill()}}
  const hs=seg[N-1],hx=hs.x+13,hy=base-20;
  const a=RM?0:Math.sin(now/140+c.ph)*.2+Math.min(.5,sp*.02)*Math.sin(now/60);
  ctx.strokeStyle=c.dark;ctx.lineWidth=2.5;ctx.lineCap='round';
  [[-5,-1.85],[6,-1.3]].forEach(([dx,b])=>{const ang=b+a,sx=hx+dx,sy=hy-14,ex=sx+Math.cos(ang)*22,ey=sy+Math.sin(ang)*22;ctx.beginPath();ctx.moveTo(sx,sy);ctx.quadraticCurveTo(sx+3,sy-14,ex,ey);ctx.stroke();ctx.fillStyle='#ff4f6d';ctx.beginPath();ctx.arc(ex,ey,4,0,7);ctx.fill()});
  ctx.fillStyle=headFill(c);ctx.strokeStyle=c.dark;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(hx,hy,17,0,7);ctx.fill();ctx.stroke();
  return {x:hx,y:hy,r:17};
}
function drawInch(c,now){
  const base=178,hp=c.phi/2,hx=headX(c),tail=S0-110+2*STEP*g(hp+Math.PI),fx=hx-8,D=fx-tail,Lb=92,h=.5*Math.sqrt(Math.max(0,Lb*Lb-D*D)),y=base-5;
  ctx.fillStyle='rgba(30,60,20,.2)';ctx.beginPath();ctx.ellipse((tail+fx)/2,base+2,D/2+12,3.5,0,0,7);ctx.fill();
  const path=()=>{ctx.beginPath();ctx.moveTo(tail,y);ctx.bezierCurveTo(tail+D*.04,y-h*1.33,fx-D*.04,y-h*1.33,fx,y)};
  ctx.lineCap='round';path();ctx.strokeStyle=c.dark;ctx.lineWidth=15;ctx.stroke();path();ctx.strokeStyle=c.body;ctx.lineWidth=11;ctx.stroke();
  ctx.setLineDash([2,7]);path();ctx.strokeStyle=c.spot;ctx.lineWidth=3;ctx.stroke();ctx.setLineDash([]);
  ctx.fillStyle=c.dark;[[tail-3,0],[tail+5,0],[fx-3,0],[fx-9,0],[fx-15,0]].forEach(([x])=>{ctx.beginPath();ctx.ellipse(x,base-1,3,2.6,0,0,7);ctx.fill()});
  const hy=base-13,a=RM?0:Math.sin(now/150+c.ph)*.2;
  ctx.strokeStyle=c.dark;ctx.lineWidth=2;[[-3,-1.7],[4,-1.25]].forEach(([dx,bb])=>{const an=bb+a,sx=hx+dx,sy=hy-9;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx+Math.cos(an)*12,sy+Math.sin(an)*12);ctx.stroke();ctx.fillStyle=c.spot;ctx.beginPath();ctx.arc(sx+Math.cos(an)*12,sy+Math.sin(an)*12,2.6,0,7);ctx.fill()});
  ctx.fillStyle=headFill(c);ctx.strokeStyle=c.dark;ctx.lineWidth=2.2;ctx.beginPath();ctx.arc(hx,hy,12,0,7);ctx.fill();ctx.stroke();
  return {x:hx,y:hy,r:12};
}
function drawCenti(c,now){
  const base=178,hx=headX(c),hy=base-19,n=10;
  ctx.fillStyle='rgba(30,60,20,.2)';ctx.beginPath();ctx.ellipse(hx-62,base+2,72,3.5,0,0,7);ctx.fill();
  const segs=[];for(let i=1;i<=n;i++){const psi=c.phi*1.6-i*.75;segs.push({x:hx-13-(i-1)*12,y:hy+1+Math.sin(psi)*1.1,psi})}
  ctx.lineCap='round';
  segs.forEach(s=>{const sw=Math.sin(s.psi)*7,lift=Math.max(0,Math.cos(s.psi))*5,fx=s.x+sw,fy=base+1-lift;ctx.beginPath();ctx.moveTo(s.x,s.y+2);ctx.lineTo(fx,fy);ctx.strokeStyle=c.dark;ctx.lineWidth=5;ctx.stroke();ctx.strokeStyle=c.spot;ctx.lineWidth=3;ctx.stroke();ctx.fillStyle=c.dark;ctx.beginPath();ctx.arc(fx,fy,2.6,0,7);ctx.fill()});
  const last=segs[n-1];ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(last.x-6,last.y);ctx.quadraticCurveTo(last.x-14,last.y-4,last.x-20,last.y+3);ctx.stroke();
  for(let i=n-1;i>=0;i--){const s=segs[i];ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=1.8;ctx.beginPath();ctx.ellipse(s.x,s.y,7.5,7,0,0,7);ctx.fill();ctx.stroke();if(i%2){ctx.fillStyle='#fff6a8';ctx.beginPath();ctx.arc(s.x,s.y-3.5,1.8,0,7);ctx.fill()}}
  const a=RM?0:Math.sin(now/120+c.ph)*.18;ctx.strokeStyle=c.dark;ctx.lineWidth=2;
  [[2,-1.5,22],[6,-.95,22]].forEach(([dx,bb,L])=>{const an=bb+a,sx=hx+dx,sy=hy-10;ctx.beginPath();ctx.moveTo(sx,sy);ctx.quadraticCurveTo(sx+6,sy-12,sx+Math.cos(an)*L,sy+Math.sin(an)*L);ctx.stroke();ctx.fillStyle=c.spot;ctx.beginPath();ctx.arc(sx+Math.cos(an)*L,sy+Math.sin(an)*L,3,0,7);ctx.fill()});
  ctx.fillStyle=headFill(c);ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.arc(hx,hy,13,0,7);ctx.fill();ctx.stroke();
  return {x:hx,y:hy,r:13};
}
function drawTurtle(c,now){
  const base=178,hx=headX(c),cy=base-42+(RM?0:Math.sin(now/420+c.ph)*3),sx=hx-34,skin='#bff0d8',sp=Math.min(CAP,Math.max(0,c.w));
  if(!noShadow){ctx.fillStyle='rgba(20,40,60,.15)';ctx.beginPath();ctx.ellipse(sx,base+2,34,4,0,0,7);ctx.fill();}
  const flip=(px,py,len,wid,ang,far)=>{ctx.save();ctx.translate(px,py);ctx.rotate(ang);ctx.fillStyle=far?'#9fd9be':skin;ctx.strokeStyle=c.dark;ctx.lineWidth=1.8;ctx.beginPath();ctx.ellipse(len*.55,0,len*.6,wid,0,0,7);ctx.fill();ctx.stroke();ctx.restore()};
  flip(sx+14,cy+5,22,5.5,.9+Math.sin(c.ang+1.2)*.8,true);
  flip(sx-24,cy+5,11,4,2.4+Math.sin(c.ang+Math.PI)*.5,true);
  ctx.fillStyle=skin;ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(hx-12,cy-1,12,6,-.15,0,7);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(sx,cy,32,21,0,Math.PI,0);ctx.ellipse(sx,cy,32,7,0,0,Math.PI);ctx.fillStyle=c.body;ctx.fill();ctx.strokeStyle=c.dark;ctx.lineWidth=2.2;ctx.stroke();
  ctx.strokeStyle=c.dark;ctx.lineWidth=1.4;ctx.globalAlpha*=.6;[[-14,-8],[0,-13],[14,-8]].forEach(([dx,dy])=>{ctx.beginPath();ctx.ellipse(sx+dx,cy+dy,7,5.5,0,0,7);ctx.stroke()});ctx.globalAlpha/=.6;
  ctx.fillStyle='#fff8d0';ctx.beginPath();ctx.ellipse(sx,cy+3,28,3,0,0,7);ctx.fill();
  flip(sx+16,cy+6,24,6,.6+Math.sin(c.ang)*.9,false);
  flip(sx-22,cy+6,12,4.5,2.6+Math.sin(c.ang+Math.PI*.8)*.5,false);
  ctx.fillStyle=headFill(c,skin);ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.arc(hx,cy-3,12,0,7);ctx.fill();ctx.stroke();
  if(sp>8&&!RM)for(let i=0;i<3;i++){const tt=((now/(900-sp*10))+i/3)%1;ctx.strokeStyle=`rgba(255,255,255,${.9*(1-tt)})`;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(hx+12+tt*5,cy-8-tt*34,2+tt*2.5,0,7);ctx.stroke()}
  return {x:hx,y:cy-3,r:12};
}
// ---------- extra animals (all face right, head at headX, ground at y=178) ----------
function heatOf(c){const ex=exprOf(c);return ex==='red'?1:ex==='fast'?Math.max(0,Math.min(1,(c.disp-EX_FLUSH)/(EX_RED-EX_FLUSH))):0}
function headFill(c,col){col=col||c.body;const ex=exprOf(c),h=heatOf(c);return h>0?mixHex(col,'#ff4234',ex==='red'?1:.15+.7*h):col}
let noShadow=false;
function shadow(x,w){if(noShadow)return;ctx.fillStyle='rgba(30,50,30,.18)';ctx.beginPath();ctx.ellipse(x,180,w,3.5,0,0,7);ctx.fill()}
function ball(x,y,r,fill,stroke,lw){ctx.fillStyle=fill;ctx.strokeStyle=stroke;ctx.lineWidth=lw||2;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();ctx.stroke()}
function oval(x,y,rx,ry,rot,fill,stroke,lw){ctx.fillStyle=fill;ctx.strokeStyle=stroke;ctx.lineWidth=lw||2;ctx.beginPath();ctx.ellipse(x,y,rx,ry,rot||0,0,7);ctx.fill();ctx.stroke()}
function tube(pts,w,dark,fill){const path=()=>{ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y))};ctx.lineCap='round';ctx.lineJoin='round';path();ctx.strokeStyle=dark;ctx.lineWidth=w+4;ctx.stroke();path();ctx.strokeStyle=fill;ctx.lineWidth=w;ctx.stroke()}

function drawSnail(c,now){
  const base=178,hx=headX(c),sw=RM?0:Math.sin(c.phi*.8)*1.5;shadow(hx-26,36);
  ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(hx-60,base);ctx.quadraticCurveTo(hx-40,base-11+sw,hx-8,base-14);ctx.lineTo(hx+6,base-3);ctx.quadraticCurveTo(hx-22,base+2,hx-60,base);ctx.fill();ctx.stroke();
  const sx=hx-30,sy=base-31,R=22;ball(sx,sy,R,c.spot,c.dark,2.2);
  ctx.save();ctx.translate(sx,sy);ctx.rotate(c.ang);ctx.strokeStyle=c.dark;ctx.lineWidth=2.4;ctx.beginPath();for(let a=0;a<5.5*Math.PI;a+=.2){const q=R*.9*(1-a/(5.5*Math.PI));ctx.lineTo(Math.cos(a)*q,Math.sin(a)*q)}ctx.stroke();ctx.restore();
  ctx.fillStyle='rgba(255,255,255,.35)';ctx.beginPath();ctx.arc(sx-8,sy-11,5,0,7);ctx.fill();
  const hy=base-15;ball(hx,hy,11,headFill(c),c.dark,2);
  return {x:hx,y:hy,r:11};
}
function snakePts(c,hx,len,fn){const p=[];for(let i=0;i<=26;i++){const u=i/26;p.push([hx-10-u*len,fn(u)])}return p}
function drawGarter(c,now){
  const base=178,hx=headX(c),hy=base-11;shadow(hx-60,66);
  const pts=snakePts(c,hx,124,u=>base-8+Math.sin(u*9-c.phi*1.3)*5*Math.min(1,u*1.6));
  tube(pts,12,c.dark,c.body);ctx.strokeStyle=c.spot;ctx.lineWidth=3;ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y-1):ctx.moveTo(x,y-1));ctx.stroke();
  oval(hx,hy,15,11,0,headFill(c),c.dark,2.2);
  ctx.strokeStyle=c.spot;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(hx-13,hy-3);ctx.quadraticCurveTo(hx,hy-9,hx+12,hy-5);ctx.stroke();
  return {x:hx+1,y:hy+1,r:11};
}
function drawBasil(c,now){
  const base=171,hx=headX(c),sp=c.disp,sink=(state==='race'||mode==='practice')?Math.max(0,1-sp/90)*9:0,hipX=hx-16,hipY=base-24+sink;
  tube([[hipX,hipY],[hipX-22,hipY+6],[hipX-44,hipY+12],[hipX-62,hipY+14]],5,c.dark,c.body);
  ctx.lineCap='round';
  for(let k=0;k<2;k++){const a=c.phi*1.7+k*Math.PI,fx=hipX+Math.cos(a)*13,fy=Math.min(base,hipY+22+Math.sin(a)*9),kx=(hipX+fx)/2+5,ky=hipY+12;
    ctx.strokeStyle=c.dark;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(hipX,hipY);ctx.lineTo(kx,ky);ctx.lineTo(fx,fy);ctx.stroke();ctx.strokeStyle=c.body;ctx.lineWidth=2;ctx.stroke();
    if(fy>=base-1&&sp>40&&!RM){ctx.fillStyle='rgba(255,255,255,.85)';for(let j=0;j<4;j++){const tt=((now/240)+j/4+k*.5)%1;ctx.beginPath();ctx.arc(fx-6-tt*14+j*4,base-2-Math.sin(tt*Math.PI)*12,1.6+(1-tt)*1.6,0,7);ctx.fill()}}}
  oval(hx-8,hipY-9,16,8,-.75,c.body,c.dark,2);
  ctx.fillStyle=c.spot;for(let k=0;k<4;k++){const x=hx-18+k*5,y=hipY-2-k*7;ctx.beginPath();ctx.moveTo(x-3,y);ctx.lineTo(x-6,y-7);ctx.lineTo(x+1,y-2);ctx.fill()}
  ctx.strokeStyle=c.dark;ctx.lineWidth=2.2;ctx.beginPath();ctx.moveTo(hx-4,hipY-12);ctx.lineTo(hx+6,hipY-6);ctx.stroke();
  const hy=hipY-24;ctx.fillStyle=c.spot;ctx.strokeStyle=c.dark;ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(hx-8,hy-6);ctx.quadraticCurveTo(hx-16,hy-22,hx-2,hy-10);ctx.closePath();ctx.fill();ctx.stroke();
  oval(hx,hy,11,9,0,headFill(c),c.dark,2);
  return {x:hx,y:hy,r:10};
}
// Frilled lizard: walks on four legs, sprints upright at 150+ RPM, and pops its frill open in the red zone.
function frillFan(x,y,c,open){
  const R=10+18*open,a0=Math.PI*(.7-.38*open),a1=Math.PI*(1.3+.38*open),n=9;
  ctx.fillStyle=c.spot;ctx.strokeStyle='#b5481e';ctx.lineWidth=1.8;ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(x,y);
  for(let i=0;i<=n*2;i++){const a=a0+(a1-a0)*i/(n*2),r=i%2?R*.8:R;ctx.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
  ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='rgba(180,60,20,.55)';ctx.lineWidth=1.2;
  for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n;ctx.beginPath();ctx.moveTo(x+Math.cos(a)*5,y+Math.sin(a)*5);ctx.lineTo(x+Math.cos(a)*R*.86,y+Math.sin(a)*R*.86);ctx.stroke()}
  if(open>.9){ctx.fillStyle='#ffd23f';for(let i=1;i<n;i+=2){const a=a0+(a1-a0)*i/n;ctx.beginPath();ctx.arc(x+Math.cos(a)*R*.55,y+Math.sin(a)*R*.55,2,0,7);ctx.fill()}}
}
function drawFrill(c,now){
  const base=178,hx=headX(c),ex=exprOf(c),run=c.disp>=150,open=ex==='red'||ex==='win'?1:ex==='fast'?.35:.1;
  ctx.lineCap='round';ctx.lineJoin='round';
  if(!run){
    shadow(hx-34,44);
    tube([[hx-48,base-11],[hx-64,base-8],[hx-82,base-5],[hx-100,base-3]],5,c.dark,c.body);
    [[hx-46,0],[hx-38,Math.PI],[hx-18,Math.PI],[hx-10,0]].forEach(([x,o])=>{const ph=c.phi*1.6+o,fx=x+Math.cos(ph)*5,lift=Math.max(0,Math.sin(ph))*3;
      ctx.strokeStyle=c.dark;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x,base-12);ctx.lineTo(x+3,base-6);ctx.lineTo(fx,base-lift);ctx.stroke();ctx.strokeStyle=c.body;ctx.lineWidth=2;ctx.stroke()});
    oval(hx-28,base-14,23,8,0,c.body,c.dark,2);
    ctx.fillStyle=c.dark;for(let k=0;k<5;k++){const x=hx-44+k*7;ctx.beginPath();ctx.moveTo(x-2,base-21);ctx.lineTo(x,base-25);ctx.lineTo(x+2,base-21);ctx.fill()}
    const hy=base-18;frillFan(hx-4,hy,c,open);oval(hx,hy,11,9,0,headFill(c),c.dark,2);
    return {x:hx+1,y:hy,r:10};
  }
  const hipX=hx-16,hipY=base-26,bob=RM?0:Math.abs(Math.sin(c.phi*1.7))*2;
  if(!RM&&!noShadow)for(let i=0;i<3;i++){const tt=((now/380)+i/3)%1;ctx.fillStyle=`rgba(225,190,130,${(1-tt)*.55})`;ctx.beginPath();ctx.arc(hipX-14-tt*24,base-3-tt*7,3+tt*6,0,7);ctx.fill()}
  shadow(hipX-6,26);
  tube([[hipX,hipY],[hipX-22,hipY+7],[hipX-44,hipY+14],[hipX-64,hipY+17]],5,c.dark,c.body);
  for(let k=0;k<2;k++){const a=c.phi*1.7+k*Math.PI,fx=hipX+Math.cos(a)*14,fy=Math.min(base,hipY+24+Math.sin(a)*9),kx=(hipX+fx)/2+6,ky=hipY+12;
    ctx.strokeStyle=c.dark;ctx.lineWidth=4.5;ctx.beginPath();ctx.moveTo(hipX,hipY);ctx.lineTo(kx,ky);ctx.lineTo(fx,fy);ctx.stroke();ctx.strokeStyle=c.body;ctx.lineWidth=2.4;ctx.stroke()}
  oval(hx-9,hipY-10-bob,16,8,-.8,c.body,c.dark,2);
  const sw=RM?0:Math.sin(c.phi*1.7)*.6;ctx.strokeStyle=c.dark;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(hx-4,hipY-14-bob);ctx.lineTo(hx+4+Math.cos(sw)*4,hipY-6-bob+Math.sin(sw)*4);ctx.stroke();
  const hy=hipY-25-bob;frillFan(hx-4,hy,c,open);oval(hx,hy,11,9,0,headFill(c),c.dark,2);
  return {x:hx+1,y:hy,r:10};
}
function drawPuffer(c,now){
  const base=178,hx=headX(c),ex=exprOf(c),h=heatOf(c),R=16+(ex==='red'?12:h*6),cx=hx-R*.55,cy=base-46+(RM?0:Math.sin(now/450+c.ph)*3);shadow(cx,R);
  const wag=RM?0:Math.sin(now/(140-Math.min(90,c.disp/4)))*.45;
  ctx.save();ctx.translate(cx-R+2,cy);ctx.rotate(wag);ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-14,-9);ctx.lineTo(-11,0);ctx.lineTo(-14,9);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
  if(R>17){ctx.strokeStyle=c.dark;ctx.lineWidth=1.6;for(let k=0;k<16;k++){const a=k*Math.PI/8,L=3+(R-16)*.45;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);ctx.lineTo(cx+Math.cos(a)*(R+L),cy+Math.sin(a)*(R+L));ctx.stroke()}}
  ball(cx,cy,R,headFill(c),c.dark,2.2);
  ctx.fillStyle=c.spot;ctx.globalAlpha*=.8;ctx.beginPath();ctx.ellipse(cx,cy+R*.45,R*.75,R*.4,0,0,Math.PI);ctx.fill();ctx.globalAlpha/=.8;
  const fw=RM?0:Math.sin(now/90)*.5;oval(cx-2,cy+R*.25,6,3.5,.6+fw,c.body,c.dark,1.4);
  return {x:cx+R*.4,y:cy-R*.12,r:Math.min(14,R*.62)};
}
function drawShrimp(c,now){
  const base=178,hx=headX(c),cy=base-36+(RM?0:Math.sin(now/420+c.ph)*2),ex=exprOf(c);shadow(hx-24,30);
  ctx.lineCap='round';
  for(let i=0;i<5;i++){const x=hx-12-i*9,ph=c.phi*2.2-i*.8;ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,cy+6+i*i*.5);ctx.lineTo(x-3+Math.sin(ph)*3,cy+14+i*i*.5);ctx.stroke()}
  const segs=[];for(let i=0;i<6;i++)segs.push([hx-12-i*9,cy+i*i*.55,9-i*.9]);
  for(let i=5;i>=0;i--){const[x,y,r]=segs[i];oval(x,y,r+1,r,0,c.body,c.dark,1.8)}
  const[tx,ty]=segs[5];ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=1.6;[-.5,0,.5].forEach(a=>{ctx.save();ctx.translate(tx-4,ty+2);ctx.rotate(2.6+a);ctx.beginPath();ctx.ellipse(8,0,8,3.2,0,0,7);ctx.fill();ctx.stroke();ctx.restore()});
  const aw=RM?0:Math.sin(now/300)*3;ctx.strokeStyle=c.dark;ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(hx+4,cy-6);ctx.quadraticCurveTo(hx+20,cy-26+aw,hx+42,cy-20+aw);ctx.moveTo(hx+6,cy-4);ctx.quadraticCurveTo(hx+24,cy-14-aw,hx+44,cy-6-aw);ctx.stroke();
  const snap=ex==='red'&&!RM&&(now%600)<240,open=snap?0:.35,cxw=hx+14,cyw=cy+9;
  oval(cxw,cyw,9,5.5,0,c.spot,c.dark,1.6);
  ctx.save();ctx.translate(cxw-4,cyw-3);ctx.rotate(-open);ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(9,0,9,3,0,0,7);ctx.fill();ctx.stroke();ctx.restore();
  if(ex==='red'&&!RM){const tt=(now%600)/600;if(tt<.45){const k=tt/.45;ctx.strokeStyle=`rgba(255,255,255,${1-k})`;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(cxw+16,cyw,4+k*26,0,7);ctx.stroke();ctx.font='800 13px "Baloo 2",sans-serif';ctx.fillStyle=`rgba(255,240,120,${1-k})`;ctx.textAlign='left';ctx.fillText(t('snap'),cxw+20,cyw-12-k*8)}}
  ball(hx,cy,10,headFill(c),c.dark,2);
  return {x:hx,y:cy,r:10};
}
function drawCrab(c,now){
  const base=178,hx=headX(c),cx=hx-14,cy=base-19;shadow(cx,28);
  ctx.lineCap='round';ctx.lineJoin='round';
  for(let s=-1;s<=1;s+=2)for(let i=0;i<3;i++){const ph=c.phi*2.4+i*2.1+(s>0?Math.PI:0),lift=Math.max(0,Math.sin(ph))*4,sx=cx+s*(10+i*4),kx=cx+s*(22+i*5),ky=cy-4-i*1.5,fx=cx+s*(26+i*6)+Math.cos(ph)*2,fy=base-lift;
    ctx.strokeStyle=c.dark;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(sx,cy+3);ctx.lineTo(kx,ky);ctx.lineTo(fx,fy);ctx.stroke();ctx.strokeStyle=c.body;ctx.lineWidth=2.2;ctx.stroke()}
  const snipL=RM?0:Math.sin(now/170)*.35,snipR=RM?0:Math.sin(now/170+1.5)*.35;
  [[-1,snipL],[1,snipR]].forEach(([s,o])=>{const ax=cx+s*16,ay=cy-6,px=cx+s*24,py=cy-24;ctx.strokeStyle=c.dark;ctx.lineWidth=4.5;ctx.beginPath();ctx.moveTo(ax,ay);ctx.lineTo(px,py+8);ctx.stroke();ctx.strokeStyle=c.body;ctx.lineWidth=2.5;ctx.stroke();
    oval(px,py,7,5.5,0,c.body,c.dark,1.6);ctx.save();ctx.translate(px+s*2,py-4);ctx.rotate(-s*(.4+o));ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(s*5,-2,6,2.6,0,0,7);ctx.fill();ctx.stroke();ctx.restore()});
  ctx.fillStyle=headFill(c);ctx.strokeStyle=c.dark;ctx.lineWidth=2.2;ctx.beginPath();ctx.moveTo(cx-24,cy);ctx.quadraticCurveTo(cx-20,cy-15,cx,cy-15);ctx.quadraticCurveTo(cx+20,cy-15,cx+24,cy);ctx.quadraticCurveTo(cx+14,cy+11,cx,cy+11);ctx.quadraticCurveTo(cx-14,cy+11,cx-24,cy);ctx.fill();ctx.stroke();
  ctx.fillStyle=c.dark;[-24,24].forEach(x=>{ctx.beginPath();ctx.moveTo(cx+x,cy);ctx.lineTo(cx+x*1.22,cy-3);ctx.lineTo(cx+x*.92,cy-4);ctx.fill()});
  return {x:cx+3,y:cy-1,r:12};
}
function drawPeng(c,now){
  const base=178,hx=headX(c);
  if(c.disp>=150){
    shadow(hx-22,30);
    if(!RM)for(let i=0;i<4;i++){const tt=((now/360)+i/4)%1;ctx.fillStyle=`rgba(255,255,255,${(1-tt)*.9})`;ctx.beginPath();ctx.arc(hx-48-tt*22,base-3-Math.sin(tt*Math.PI)*9,1.8+tt*2,0,7);ctx.fill()}
    oval(hx-48,base-6,6,3,0,'#ff8a2a','#c45a0c',1.2);oval(hx-46,base-2,6,3,0,'#ff8a2a','#c45a0c',1.2);
    oval(hx-22,base-12,27,12,0,c.body,c.dark,2);
    ctx.fillStyle=c.spot;ctx.beginPath();ctx.ellipse(hx-20,base-6,22,6,0,0,Math.PI*2);ctx.fill();
    oval(hx-30,base-20,13,4,-.15,c.body,c.dark,1.6);
    const hy=base-15;ball(hx,hy,11,headFill(c),c.dark,2);
    return {x:hx,y:hy,r:11};
  }
  const tl=RM?0:Math.sin(c.phi*1.6)*.14;shadow(hx-6,16);
  ctx.save();ctx.translate(hx-8,base);ctx.rotate(tl);
  const st=Math.sin(c.phi*1.6);oval(-6,-1-Math.max(0,st)*3,7,3,0,'#ff8a2a','#c45a0c',1.2);oval(7,-1-Math.max(0,-st)*3,7,3,0,'#ff8a2a','#c45a0c',1.2);
  oval(0,-23,14,22,0,c.body,c.dark,2);ctx.fillStyle=c.spot;ctx.beginPath();ctx.ellipse(4,-19,9,16,0,0,7);ctx.fill();
  oval(-11,-26,4,12,.25+(RM?0:Math.sin(now/200)*.15),c.body,c.dark,1.6);
  ctx.restore();
  const gx=hx-8+2*Math.cos(tl)+46*Math.sin(tl),gy=base+2*Math.sin(tl)-46*Math.cos(tl);
  ball(gx,gy,11,headFill(c),c.dark,2);
  return {x:gx,y:gy,r:11};
}
const EX_FAST=100,EX_FLUSH=200,EX_RED=300; // RPM where the face starts sweating / huffing (separate from the gauge red zone)
function exprOf(c){
  if(mode==='practice')return state==='race'?(c.disp>=EX_RED?'red':c.disp>=EX_FAST?'fast':'slow'):'slow';
  if(c.done!=null){const fin=racers.filter(r=>r.done!=null).sort((a,b)=>a.done-b.done);return fin[0]===c?'win':'lose'}
  if(state==='done')return c===winner?'win':'lose';
  if(state==='count')return 'ready';
  if(state!=='race')return 'slow';
  return c.disp>=EX_RED?'red':c.disp>=EX_FAST?'fast':'slow';
}
function mixHex(a,b,t){ // blend by hue (green -> yellow -> orange -> red) so the face never turns muddy brown
  const hsl=h=>{const[r,g2,b2]=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255),mx=Math.max(r,g2,b2),mn=Math.min(r,g2,b2),l=(mx+mn)/2,d=mx-mn;let hh=0,s=0;if(d){s=d/(1-Math.abs(2*l-1));hh=mx===r?((g2-b2)/d)%6:mx===g2?(b2-r)/d+2:(r-g2)/d+4;hh*=60;if(hh<0)hh+=360}return[hh,s,l]};
  const A=hsl(a),B=hsl(b);let dh=B[0]-A[0];if(dh>180)dh-=360;if(dh<-180)dh+=360;
  const h=(A[0]+dh*t+360)%360,s=A[1]+(B[1]-A[1])*t,l=A[2]+(B[2]-A[2])*t;
  return `hsl(${h.toFixed(1)},${(s*100).toFixed(1)}%,${(l*100).toFixed(1)}%)`;
}
function drop(x,y,s,a){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#6cc4ff';ctx.strokeStyle='#2a8fd0';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,-6);ctx.quadraticCurveTo(4.5,0,0,4);ctx.quadraticCurveTo(-4.5,0,0,-6);ctx.fill();ctx.stroke();ctx.restore()}
// ---------- faces: one set of moods, a different face for each animal ----------
const FST={cat:{},inch:{},centi:{mouth:'fangs'},turtle:{mouth:'beak',beak:'#eadba8'},snail:{eyes:'stalk'},garter:{eyes:'slit',mouth:'tongue'},frill:{},basil:{eyes:'slit'},puffer:{mouth:'pucker'},shrimp:{eyes:'stalk2',mouth:'mini'},crab:{eyes:'stalk',mouth:'mini'},peng:{eyes:'peng',mouth:'beak',beak:'#ff8a2a'}};
const EYEPOS={normal:[[0,-5,6.5],[11,-4,5.5]],slit:[[0,-5,6.2],[11,-4,5.3]],spider:[[-1,-3,6],[12,-3,5.6]],big:[[-3,-4,8],[13,-4,7]],stalk:[[-4,-27,6.2],[10,-28,5.6]],stalk2:[[4,-16,4.8],[13,-15,4.3]],peng:[[0,-5,5.4],[11,-4,4.9]]};
function eye(kind,x,y,s,m,c,now){
  const ink='#14301f';ctx.lineCap='round';
  if(m==='blink'){ctx.strokeStyle=ink;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x-s*.8,y);ctx.lineTo(x+s*.8,y);ctx.stroke();return}
  if(m==='happy'){ctx.strokeStyle=ink;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(x-s*.9,y+2);ctx.quadraticCurveTo(x,y-s*1.25,x+s*.9,y+2);ctx.stroke();return}
  const scl=kind==='spider'?ink:kind==='slit'?'#fff2a8':'#fff',ry=m==='squint'?s*.62:s;
  ctx.fillStyle=scl;ctx.strokeStyle=ink;ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(x,y,s,ry,0,0,7);ctx.fill();ctx.stroke();
  if(m==='dizzy'){ctx.strokeStyle=kind==='spider'?'#fff':ink;ctx.lineWidth=1.3;ctx.beginPath();for(let a=0;a<4*Math.PI;a+=.3){const q=s*.85*a/(4*Math.PI),aa=a+(RM?0:now/200);ctx.lineTo(x+Math.cos(aa)*q,y+Math.sin(aa)*q)}ctx.stroke();return}
  if(kind==='spider'){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x+s*.3,y-ry*.35,s*(m==='ready'?.36:.26),0,7);ctx.fill();return}
  const px=m==='squint'?2:1.5+(c.pv||0);ctx.fillStyle=ink;ctx.beginPath();
  if(kind==='slit')ctx.ellipse(x+px*.6,y,s*.18,ry*.8,0,0,7);else ctx.arc(x+px,y+(m==='squint'?0:1),Math.min(ry*.8,s*(m==='ready'?.55:.42)),0,7);
  ctx.fill();
  if(m==='ready'){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x+px+1,y-1,s*.2,0,7);ctx.fill()}
}
function mouth(kind,ex,st,now){
  const ink='#14301f';ctx.lineCap='round';ctx.lineJoin='round';
  if(kind==='beak'){
    const open=ex==='win'?6:ex==='ready'?2.5:ex==='lose'?1.2:0;
    ctx.fillStyle=st.beak||'#ff8a2a';ctx.strokeStyle='#7a4a10';ctx.lineWidth=1.4;
    ctx.beginPath();ctx.moveTo(9,0);ctx.lineTo(25,3.5);ctx.lineTo(9,6);ctx.closePath();ctx.fill();ctx.stroke();
    if(open){if(ex==='win'){ctx.fillStyle='#7a1f2b';ctx.beginPath();ctx.moveTo(9,6);ctx.lineTo(23,4.5);ctx.lineTo(9,6+open);ctx.closePath();ctx.fill()}
      ctx.fillStyle=st.beak||'#ff8a2a';ctx.beginPath();ctx.moveTo(9,6+open*.4);ctx.lineTo(21,5+open);ctx.lineTo(9,8+open*.7);ctx.closePath();ctx.fill();ctx.stroke()}
    if(ex==='fast'||ex==='red'){ctx.strokeStyle='#7a4a10';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(10,4);ctx.lineTo(21,4);ctx.stroke()}
    return;
  }
  if(kind==='pucker'){const r=ex==='win'?5.5:ex==='fast'||ex==='red'?2.4:ex==='ready'?3.6:3;ctx.fillStyle='#ff9ab8';ctx.strokeStyle='#a32118';ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(10,7,r*1.15,r,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#7a1f2b';ctx.beginPath();ctx.ellipse(10,7,r*.45,r*.4,0,0,7);ctx.fill();return}
  ctx.save();
  if(kind==='snout'){ctx.fillStyle='#f2b8b0';ctx.strokeStyle=ink;ctx.lineWidth=1.3;ctx.beginPath();ctx.ellipse(19,1,6,3.6,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=ink;ctx.beginPath();ctx.arc(23,0,1,0,7);ctx.fill()}
  if(kind==='mini'){ctx.translate(6,6);ctx.scale(.65,.65);ctx.translate(-6,-4)}
  ctx.strokeStyle=ink;ctx.fillStyle=ink;ctx.lineWidth=2;
  if(ex==='slow'){ctx.beginPath();ctx.arc(6,3,6,.2,Math.PI-.6);ctx.stroke()}
  else if(ex==='ready'){ctx.lineWidth=1.8;ctx.beginPath();ctx.arc(7,7,2.6,0,7);ctx.stroke()}
  else if(ex==='fast'||ex==='red'){ctx.fillStyle='#fff';ctx.lineWidth=1.5;rr(-1,3,15,7,2);ctx.fill();ctx.stroke();ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(4,3);ctx.lineTo(4,10);ctx.moveTo(9,3);ctx.lineTo(9,10);ctx.moveTo(-1,6.5);ctx.lineTo(14,6.5);ctx.stroke()}
  else if(ex==='win'){ctx.fillStyle='#7a1f2b';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-2,3);ctx.quadraticCurveTo(7,20,16,3);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#ff7fa3';ctx.beginPath();ctx.moveTo(3,9);ctx.quadraticCurveTo(7,15,11,9);ctx.fill()}
  else{ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(1,7);ctx.quadraticCurveTo(4,5,7,7);ctx.quadraticCurveTo(10,9,13,7);ctx.stroke()}
  if(kind==='fangs'&&ex!=='win'){ctx.fillStyle='#fff';ctx.strokeStyle=ink;ctx.lineWidth=1;[[2,0],[9,0]].forEach(([x])=>{const y=ex==='fast'||ex==='red'?10:7;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+1.6,y+4);ctx.lineTo(x+3.2,y);ctx.closePath();ctx.fill();ctx.stroke()})}
  if(kind==='tongue'&&!RM){const fast=ex==='fast'||ex==='red';if((now%1300)<(fast?700:320)){ctx.strokeStyle='#ff4f6d';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(14,6);ctx.lineTo(23,7);ctx.lineTo(27,4);ctx.moveTo(23,7);ctx.lineTo(27,10);ctx.stroke()}}
  ctx.restore();
}
function face(cx,cy,r,ex,now,c){
  const st=FST[c.char]||{},ek=st.eyes||'normal',E=EYEPOS[ek],ink='#14301f';
  ctx.save();ctx.translate(cx,cy);ctx.scale(r/17,r/17);ctx.lineCap='round';ctx.lineJoin='round';
  if(ex==='ready'&&!RM)ctx.translate(Math.sin(now/35)*.9,0);
  if(ex==='red'&&!RM){ctx.strokeStyle=`rgba(255,40,40,${.55+.4*Math.sin(now/90)})`;ctx.lineWidth=2.2;ctx.beginPath();ctx.arc(0,0,19.5,0,7);ctx.stroke()}
  if(ek==='stalk'||ek==='stalk2')E.forEach(([x,y,s])=>{ctx.beginPath();ctx.moveTo(x*.4,ek==='stalk'?-12:-9);ctx.lineTo(x,y+s*.8);ctx.strokeStyle=c.dark;ctx.lineWidth=ek==='stalk'?5:3.6;ctx.stroke();ctx.strokeStyle=c.body;ctx.lineWidth=ek==='stalk'?3:2;ctx.stroke()});
  if(ek==='peng'){ctx.strokeStyle='#fff';ctx.lineWidth=4.5;ctx.beginPath();ctx.arc(2,-3,13,Math.PI*1.08,Math.PI*1.9);ctx.stroke()}
  if(ek==='spider'){ctx.fillStyle=ink;[[-9,-10],[20,-10],[-7,5],[18,5],[3,-13],[9,-13]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y,1.9,0,7);ctx.fill()})}
  if(st.horns){ctx.fillStyle=c.dark;E.forEach(([x,y,s])=>{ctx.beginPath();ctx.moveTo(x-3,y-s);ctx.lineTo(x,y-s-7);ctx.lineTo(x+3,y-s);ctx.fill()})}
  if(ek!=='spider'){ctx.fillStyle=ex==='red'?'rgba(255,70,70,.7)':ex==='fast'?'rgba(255,80,80,.55)':'rgba(255,110,130,.5)';ctx.beginPath();ctx.arc(10,6,4,0,7);ctx.fill();if(ek!=='big'){ctx.beginPath();ctx.arc(-9,6,3.4,0,7);ctx.fill()}}
  const blink=ex==='slow'&&!RM&&((now+c.ph*997)%3400)<130;
  const m=ex==='win'?'happy':ex==='lose'?'dizzy':ex==='ready'?'ready':(ex==='fast'||ex==='red')?'squint':blink?'blink':'open';
  E.forEach(([x,y,s])=>eye(ek,x,y,s,m,c,now));
  if(ex==='fast'||ex==='red'){ctx.strokeStyle=ink;ctx.lineWidth=2.6;const[[x1,y1,s1],[x2,y2,s2]]=E;ctx.beginPath();ctx.moveTo(x1-s1,y1-s1-4);ctx.lineTo(x1+s1*.8,y1-s1-1);ctx.moveTo(x2-s2*.8,y2-s2-1);ctx.lineTo(x2+s2,y2-s2-4);ctx.stroke()}
  ctx.save();if(ek==='big')ctx.translate(0,3);mouth(st.mouth||'smile',ex,st,now);ctx.restore();
  if((ex==='fast'||ex==='red')&&!RM){const nd=ex==='red'?5:3,sp=ex==='red'?360:520;for(let i=0;i<nd;i++){const tt=((now/sp)+i/nd)%1;drop(-15-tt*20,-13+tt*12-Math.sin(tt*Math.PI)*6,.9,1-tt)}
    if(ex==='red')for(let i=0;i<3;i++){const tt=((now/700)+i/3)%1;ctx.fillStyle=`rgba(255,255,255,${.85*(1-tt)})`;ctx.beginPath();ctx.arc(-6+i*8,-22-tt*20+(ek==='stalk'?-14:0),3.5+tt*4,0,7);ctx.fill()}}
  if(ex==='win'){if(!RM)for(let i=0;i<4;i++){const an=now/600+i*Math.PI/2,x=Math.cos(an)*26,y=Math.sin(an)*20-6;ctx.fillStyle='#ffd23f';ctx.beginPath();for(let k=0;k<8;k++){const q=k%2?1.6:4.5,aa=k*Math.PI/4;ctx.lineTo(x+Math.cos(aa)*q,y+Math.sin(aa)*q)}ctx.fill()}
    if(!noYay){ctx.font='800 12px "Baloo 2",sans-serif';ctx.fillStyle='#a35a00';ctx.textAlign='left';ctx.fillText(t('yay'),20,-16)}}
  if(ex==='lose'){drop(15,-12,.8,1);ctx.font='800 11px "Baloo 2",sans-serif';ctx.fillStyle='#3b5a49';ctx.textAlign='left';ctx.fillText(t('phew'),20,12)}
  ctx.restore();
}
function confetti(x,y,now){
  if(RM)return;const cols=['#ff6b9a','#4fb3ff','#ffd23f','#b38bff','#ff8a2a','#3fd6c6'];
  for(let k=0;k<14;k++){const tt=((now/1800)+hash(k)*1)%1,px=x+(hash(k+7)-.5)*130,py=y-70+tt*110;ctx.save();ctx.globalAlpha*=1-tt*.6;ctx.translate(px+Math.sin(now/200+k)*6,py);ctx.rotate(now/300+k);ctx.fillStyle=cols[k%6];ctx.fillRect(-3,-1.5,6,3);ctx.restore()}
}
const DRAW={cat:drawCat,inch:drawInch,centi:drawCenti,turtle:drawTurtle,snail:drawSnail,garter:drawGarter,frill:drawFrill,basil:drawBasil,puffer:drawPuffer,shrimp:drawShrimp,crab:drawCrab,peng:drawPeng};
function drawRacer(c,now,ghost){
  const ex=exprOf(c);ctx.save();
  if(ex==='win'&&!RM)ctx.translate(0,-Math.abs(Math.sin(now/170))*16);
  if(ex==='lose')ctx.translate(0,2);
  const ch=c.char||'cat';
  const hd=(DRAW[ch]||drawCat)(c,now,ghost);
  face(hd.x,hd.y,hd.r,ex,now,c);
  if(ex==='win'&&!ghost)confetti(hd.x,hd.y,now);
  ctx.restore();
}
// Vehicle-style dashboard: speedometer + tachometer, same outside diameter.
// The tachometer's outer tread ring turns exactly as your finger goes round.
function dial(cx,cy,R,frac,redFrac,col,num,unit,ringAng){
  const a0=Math.PI*.75,a1=Math.PI*2.25,ang=f=>a0+(a1-a0)*f,Ro=R+4,red=redFrac!=null&&frac>=redFrac;
  ctx.save();
  ctx.lineWidth=Math.max(3,R*.17);ctx.strokeStyle='#22262a';ctx.beginPath();ctx.arc(cx,cy,Ro,0,7);ctx.stroke();
  if(ringAng!=null){
    ctx.strokeStyle='#c9d3da';ctx.lineWidth=Math.max(2,R*.08);const seg=Math.max(5,R*.3);ctx.setLineDash([seg*.4,seg*.6]);ctx.lineDashOffset=-ringAng*Ro;ctx.beginPath();ctx.arc(cx,cy,Ro,0,7);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle='#ff8a2a';ctx.strokeStyle='#fff';ctx.lineWidth=1;ctx.beginPath();ctx.arc(cx+Math.cos(ringAng-Math.PI/2)*Ro,cy+Math.sin(ringAng-Math.PI/2)*Ro,Math.max(2.5,R*.12),0,7);ctx.fill();ctx.stroke();
  }else{ctx.strokeStyle='#c9d3da';ctx.lineWidth=1;ctx.beginPath();ctx.arc(cx,cy,Ro,0,7);ctx.stroke()}
  ctx.fillStyle='rgba(10,22,16,.92)';ctx.beginPath();ctx.arc(cx,cy,R,0,7);ctx.fill();
  if(red&&!RM&&Math.floor(performance.now()/120)%2){ctx.strokeStyle='#ff3b30';ctx.lineWidth=2;ctx.stroke()}
  const ar=R*.86,aw=Math.max(2.5,R*.12);ctx.lineCap='butt';ctx.lineWidth=aw;
  if(redFrac!=null){ctx.strokeStyle='#ff3b30';ctx.beginPath();ctx.arc(cx,cy,ar,ang(redFrac),a1);ctx.stroke()}
  const f=Math.max(0,Math.min(1,frac));
  if(f>0.002){ctx.strokeStyle=col;ctx.beginPath();ctx.arc(cx,cy,ar,a0,ang(redFrac!=null?Math.min(f,redFrac):f));ctx.stroke()}
  ctx.lineCap='round';ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=1.2;
  for(let i=0;i<=10;i++){const an=ang(i/10),r0=R*(i%5===0?.62:.68),r1=R*.74;ctx.beginPath();ctx.moveTo(cx+Math.cos(an)*r0,cy+Math.sin(an)*r0);ctx.lineTo(cx+Math.cos(an)*r1,cy+Math.sin(an)*r1);ctx.stroke()}
  const an=ang(f);ctx.strokeStyle='#ff8a2a';ctx.lineWidth=Math.max(2,R*.08);ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(an)*R*.72,cy+Math.sin(an)*R*.72);ctx.stroke();
  ctx.fillStyle='#ff8a2a';ctx.beginPath();ctx.arc(cx,cy,Math.max(2.5,R*.1),0,7);ctx.fill();
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=red?'#ff6b5e':'#fff';ctx.font='800 '+Math.max(12,Math.round(R*.46))+'px "Baloo 2",sans-serif';ctx.fillText(num,cx,cy+R*.5);
  ctx.fillStyle='#b9d0c1';ctx.font='700 '+Math.max(9,Math.round(R*.3))+'px "Baloo 2",sans-serif';ctx.fillText(unit,cx,cy+R*.86);
  ctx.restore();
}
function gauges(c,y0,R){
  const Ro=R+4+Math.max(3,R*.17)/2,tx=W-Ro-8,sx=tx-2*Ro-6,cy=y0+Ro+8;
  dial(sx,cy,R,c.kmh/MAXKMH,null,'#4fb3ff',String(Math.round(c.kmh)),'km/h',null);
  dial(tx,cy,R,c.disp/MAXRPM,REDRPM/MAXRPM,c.gauge||c.body,String(Math.round(c.disp)),'RPM',c.ang);
  return {w:4*Ro+14,h:2*Ro+16};
}
function drawLane(c,ghosts,y0,lh,now,withLabel){
  const s=lh/220,vw=W/s,prac=mode==='practice',cam=prac?headX(c)-vw*.62:Math.max(-vw*.15,Math.min(headX(c)-vw*.52,TRACK+260-vw));
  ctx.save();ctx.beginPath();ctx.rect(0,y0,W,lh);ctx.clip();ctx.translate(0,y0);ctx.scale(s,s);
  const hab=HAB[c.char]||'garden',sea=hab==='sea';
  // sky top, sky bottom, far hills, near hills, ground, path, path edge
  const P={garden:['#86cfff','#e6f7ff','#acdf8e','#86cc66','#5cb83c','#dcb57d','#c39459'],sea:['#1f7fc4','#7fd3f5','#3e98b8','#5ab3bd','#e3cf94','#f0dfab','#d2bb7a'],desert:['#ffb878','#ffeec4','#f5cf8c','#ebb66a','#eec57e','#f6dba6','#d6a45e'],pond:['#86cfff','#e6f7ff','#a6dc8e','#7cc866','#5cb83c','#62c0e8','#3b9ccc'],ice:['#9fd6ff','#f2fbff','#e4f4ff','#c9e7fa','#f6fcff','#d3ecfb','#a7d1ec']}[hab];
  const gr=ctx.createLinearGradient(0,0,0,150);gr.addColorStop(0,P[0]);gr.addColorStop(1,P[1]);ctx.fillStyle=gr;ctx.fillRect(0,0,vw+2,222);
  if(sea){ctx.fillStyle='rgba(255,255,255,.08)';for(let k=0;k<4;k++){const x=((k*170-cam*.08)%(vw+200)+vw+200)%(vw+200)-100;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+40,0);ctx.lineTo(x+90,150);ctx.lineTo(x+20,150);ctx.fill()}
    for(let k=0;k<10;k++){const span=vw+40,x=((hash(k)*span-cam*.2)%span+span)%span,y=150-((now/40*(0.5+hash(k+3))+hash(k+5)*150)%150);ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(x,y,2+hash(k+9)*3,0,7);ctx.stroke()}}
  else{
    if(hab==='desert'){ctx.fillStyle='rgba(255,240,170,.55)';ctx.beginPath();ctx.arc(vw*.82,42,34,0,7);ctx.fill();ctx.fillStyle='#fff2a8';ctx.beginPath();ctx.arc(vw*.82,42,22,0,7);ctx.fill()}
    const nc=hab==='desert'?2:4;for(let k=0;k<nc;k++){const span=vw+320,cx=((k*span/nc+60-cam*.12)%span+span)%span-160,cy=26+hash(k)*40;ctx.fillStyle=hab==='desert'?'rgba(255,255,255,.7)':'rgba(255,255,255,.92)';ctx.beginPath();ctx.arc(cx,cy,15,0,7);ctx.arc(cx+18,cy-8,19,0,7);ctx.arc(cx+38,cy,14,0,7);ctx.fill()}
    if(hab==='ice'){ctx.fillStyle='#ffffff';ctx.strokeStyle='#a7d1ec';ctx.lineWidth=1.5;for(let k=0;k<3;k++){const span=vw+300,x=((k*span/3+120-cam*.3)%span+span)%span-150;ctx.beginPath();ctx.moveTo(x,140);ctx.lineTo(x+18,96+hash(k)*14);ctx.lineTo(x+34,108);ctx.lineTo(x+52,84+hash(k+2)*16);ctx.lineTo(x+80,140);ctx.closePath();ctx.fill();ctx.stroke()}}
  }
  hills(vw,cam*.25,116,P[2],90,16);hills(vw,cam*.45,134,P[3],60,11);
  if(hab==='ice'&&!RM){ctx.fillStyle='rgba(255,255,255,.9)';for(let k=0;k<22;k++){const span=vw+40,x=((hash(k)*span-cam*.15+Math.sin(now/900+k)*10)%span+span)%span,y=((now/30*(0.4+hash(k+3))+hash(k+5)*220)%220);ctx.beginPath();ctx.arc(x,y,1.4+hash(k+9)*1.8,0,7);ctx.fill()}}
  ctx.translate(-cam,0);
  ctx.fillStyle=P[4];ctx.fillRect(cam,148,vw+2,74);ctx.fillStyle=P[5];ctx.fillRect(cam,160,vw+2,34);ctx.fillStyle=P[6];ctx.fillRect(cam,192,vw+2,3);
  if(hab==='pond'){ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=1.5;ctx.lineCap='round';for(let k=Math.floor(cam/40)-1;k<(cam+vw)/40+1;k++){const x=k*40+hash(k)*20+(RM?0:Math.sin(now/700+k)*4),y=165+hash(k+4)*24;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+6,y-3,x+12,y);ctx.stroke()}}
  else if(hab==='ice'){ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=1.2;for(let k=Math.floor(cam/60)-1;k<(cam+vw)/60+1;k++){const x=k*60+hash(k)*30,y=166+hash(k+2)*20;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+14,y+3);ctx.lineTo(x+20,y-2);ctx.stroke()}}
  else for(let k=Math.floor(cam/55);k<(cam+vw)/55+1;k++){const q=hash(k);if(q<.5){ctx.fillStyle=hab==='desert'?'#c4914e':'#b9894f';ctx.beginPath();ctx.ellipse(k*55+q*40,166+hash(k+9)*22,3+q*3,2+q*2,0,0,7);ctx.fill()}}
  const pet=['#ff6b8a','#ffd23f','#ffffff','#ff9a3c'];
  if(sea)for(let k=Math.floor(cam/70)-1;k<(cam+vw)/70+1;k++){const q=hash(k*3.1),x=k*70+q*50;ctx.lineCap='round';for(let i=0;i<3;i++){const sw=RM?0:Math.sin(now/600+k+i)*5;ctx.strokeStyle=i%2?'#2f9e5e':'#47b874';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x+i*5,155);ctx.quadraticCurveTo(x+i*5+sw,140-q*10,x+i*5+sw*1.6,122-q*16);ctx.stroke()}
    if(q>.6){const fx=x+26;['#ff8fa3','#ffb26b','#ff8fa3'].forEach((cc,j)=>{ctx.fillStyle=cc;ctx.beginPath();ctx.arc(fx+j*6-6,150-j%2*5,4,0,7);ctx.fill()})}}
  else if(hab==='desert')for(let k=Math.floor(cam/90)-1;k<(cam+vw)/90+1;k++){const q=hash(k*3.1),x=k*90+q*60;
    if(q>.45){const h=24+q*18;ctx.fillStyle='#5fb35a';ctx.strokeStyle='#2f7a3a';ctx.lineWidth=1.6;rr(x-5,154-h,10,h,5);ctx.fill();ctx.stroke();rr(x-15,140-h*.5,6,14,3);ctx.fill();ctx.stroke();rr(x+9,146-h*.7,6,12,3);ctx.fill();ctx.stroke();if(q>.8){ctx.fillStyle='#ff7fa3';ctx.beginPath();ctx.arc(x,154-h,3.5,0,7);ctx.fill()}}
    else{ctx.fillStyle='#c79a62';ctx.beginPath();ctx.ellipse(x,153,9+q*8,5,0,Math.PI,0);ctx.fill()}}
  else if(hab==='pond')for(let k=Math.floor(cam/70)-1;k<(cam+vw)/70+1;k++){const q=hash(k*3.1),x=k*70+q*50;ctx.lineCap='round';
    for(let i=0;i<3;i++){const sw=RM?0:Math.sin(now/800+k+i)*2;ctx.strokeStyle='#4f9a36';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x+i*5,156);ctx.lineTo(x+i*5+sw,128-q*10-i*3);ctx.stroke();if(i===1){ctx.fillStyle='#8a5a2b';rr(x+i*5+sw-2.5,124-q*10-i*3,5,13,2.5);ctx.fill()}}
    if(q>.5){const px=x+30,py=189;ctx.fillStyle='#5cbf4a';ctx.strokeStyle='#2f7d2a';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(px,py,11,3.5,0,.3,Math.PI*2-.1);ctx.lineTo(px,py);ctx.closePath();ctx.fill();ctx.stroke();if(q>.8){ctx.fillStyle='#ffb3cf';ctx.beginPath();ctx.arc(px-3,py-3,3,0,7);ctx.fill()}}}
  else if(hab==='ice')for(let k=Math.floor(cam/80)-1;k<(cam+vw)/80+1;k++){const q=hash(k*3.1),x=k*80+q*50;ctx.fillStyle='#ffffff';ctx.strokeStyle='#bcdcf0';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(x,154,10+q*12,6+q*5,0,Math.PI,0);ctx.fill();ctx.stroke();
    if(q>.7){ctx.strokeStyle='#8cc6e8';ctx.lineWidth=1.6;for(let a=0;a<3;a++){const an=a*Math.PI/3;ctx.beginPath();ctx.moveTo(x+22-Math.cos(an)*5,132-Math.sin(an)*5);ctx.lineTo(x+22+Math.cos(an)*5,132+Math.sin(an)*5);ctx.stroke()}}}
  if(!prac){
  ctx.font='700 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
  for(let i=1;i<5;i++){const x=S0+(TRACK-S0)*i/5;ctx.fillStyle='#7a5530';ctx.fillRect(x-2,146,4,16);rr(x-17,132,34,16,5);ctx.fillStyle='#fff7e0';ctx.fill();ctx.fillStyle='#5a3a1a';ctx.fillText(i*20+'%',x,140.5)}
  ctx.fillStyle='rgba(255,255,255,.9)';ctx.fillRect(S0-2,160,4,34);
  for(let yy=0;yy<4;yy++)for(let xx=0;xx<2;xx++){ctx.fillStyle=(xx+yy)%2?'#14301f':'#fff';ctx.fillRect(TRACK+xx*8,160+yy*8.5,8,8.5)}
  ctx.fillStyle='#6b4a2a';ctx.fillRect(TRACK+18,86,4,108);
  for(let yy=0;yy<3;yy++)for(let xx=0;xx<4;xx++){ctx.fillStyle=(xx+yy)%2?'#14301f':'#fff';ctx.fillRect(TRACK+22+xx*8,88+yy*8,8,8)}
  }
  ctx.globalAlpha=.25;ghosts.forEach(o=>{if(!o.left)drawRacer(o,now,true)});ctx.globalAlpha=1;drawRacer(c,now,false);
  ctx.restore();
  if(withLabel){
    ctx.font='700 14px "Baloo 2",sans-serif';ctx.textAlign='left';ctx.textBaseline='middle';
    const tx=c.name+(c.done!=null?' · '+fmt(c.done):'');const tw=ctx.measureText(tx).width;
    rr(10,y0+8,tw+34,24,12);ctx.fillStyle='rgba(255,255,255,.88)';ctx.fill();
    ctx.fillStyle=c.pc||c.body;ctx.beginPath();ctx.arc(23,y0+20,6,0,7);ctx.fill();ctx.fillStyle='#14301f';ctx.fillText(tx,34,y0+21);
  }
  const R=Math.round(Math.max(18,Math.min(prac?42:28,lh*(prac?.13:.1),W*(prac?.11:.075))));
  const gb=gauges(c,y0,R);gaugeH=gb.h;
  if(!prac&&c.kind==='human'&&(state==='count'||state==='race')&&c.done==null&&c.w<3){
    ctx.font='800 '+Math.round(Math.min(22,W*.05))+'px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=5;ctx.strokeStyle='rgba(20,48,31,.85)';ctx.fillStyle='#fff';
    const hx=Math.max(90,Math.min(W*.36,W-gb.w-80));ctx.strokeText(t('drawHere'),hx,y0+lh*.3);ctx.fillText(t('drawHere'),hx,y0+lh*.3);
  }
}
let gaugeH=0;
function practiceInfo(c,y0,lh,now){
  const rpm=c.disp,by=y0+gaugeH+4,y=Math.max(y0+lh*.42,by+90);
  let tip=c.w<3?t('tipStart'):rpm<100?t('tipFaster'):rpm>=REDRPM?t('tipRed'):t('tipSteady');
  if(c.goalDone&&now-c.goalAt<3000)tip=t('goalDone');
  ctx.save();ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';
  ctx.font='800 '+Math.round(Math.min(24,W*.058))+'px "Baloo 2",sans-serif';ctx.lineWidth=5;ctx.strokeStyle='rgba(20,48,31,.85)';ctx.fillStyle=c.goalDone&&now-c.goalAt<3000?'#ffd23f':'#fff';
  ctx.strokeText(tip,W/2,y);ctx.fillText(tip,W/2,y);
  const lines=[t('topLbl')+': '+Math.round(c.top*60),t('holdLbl')+': '+c.hold.toFixed(1)+'s / 5s'+(c.goalDone?'  ✓':''),c.goalDone?t('goalDone'):t('goal')];
  ctx.font='700 14px "Baloo 2",sans-serif';const w=Math.max(...lines.map(l=>ctx.measureText(l).width))+24;
  rr(10,by,w,lines.length*20+12,12);ctx.fillStyle='rgba(255,255,255,.9)';ctx.fill();
  ctx.textAlign='left';ctx.fillStyle='#14301f';lines.forEach((l,i)=>ctx.fillText(l,22,by+16+i*20));
  ctx.restore();
}
const ROWH=22,ICIMG={};
function icon(ch){let im=ICIMG[ch];if(!im){im=new Image();im.src=iconURL(ch);ICIMG[ch]=im}return im}
function marker(c,x,y,w,ring){
  const im=icon(c.char);
  if(ring){ctx.fillStyle='rgba(255,255,255,.9)';ctx.beginPath();ctx.ellipse(x,y,w*.55,w*.36,0,0,7);ctx.fill()}
  if(im.complete&&im.naturalWidth)ctx.drawImage(im,x-w/2,y-w*.3,w,w*.6);
  else{ctx.fillStyle=c.pc||c.body;ctx.beginPath();ctx.arc(x,y,6,0,7);ctx.fill()}
}
const split=()=>mode!=='online'||racers.length===2;
function stripH(){const n=racers.length;return 8+ROWH*(n>4?Math.ceil(n/2):Math.max(2,n))}
function strip(y0,h){
  ctx.fillStyle='#173b28';ctx.fillRect(0,y0,W,h);
  const order=standings(),pos=new Map(order.map((c,i)=>[c,i+1])),two=racers.length>4,cw=two?W/2:W;
  racers.forEach((c,i)=>{
    const col=two?i%2:0,row=two?Math.floor(i/2):i,xo=col*cw,y=y0+4+row*ROWH+ROWH/2;
    if(c===me){ctx.fillStyle='rgba(255,255,255,.13)';ctx.fillRect(xo,y-ROWH/2,cw,ROWH)}
    ctx.fillStyle=c.pc||c.body;ctx.beginPath();ctx.arc(xo+9,y,4.5,0,7);ctx.fill();
    const nameW=two?Math.min(62,cw*.33):Math.min(104,W*.27);
    ctx.font=(c===me?'800 ':'600 ')+(two?'12px':'13px')+' "Baloo 2",sans-serif';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillStyle=c.left?'rgba(255,255,255,.45)':'#fff';
    let nm=c.name;while(nm.length>1&&ctx.measureText(nm).width>nameW-4)nm=nm.slice(0,-1);if(nm!==c.name)nm=nm.slice(0,-1)+'…';
    ctx.fillText(nm,xo+17,y+1);
    const x0=xo+nameW+26,x1=xo+cw-(two?40:66);
    ctx.strokeStyle='rgba(255,255,255,.22)';ctx.lineWidth=3;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke();
    ctx.fillStyle='#fff';ctx.fillRect(x1+2,y-5,3,10);
    ctx.save();if(c.left)ctx.globalAlpha=.4;marker(c,x0+(x1-x0)*prog(c),y,26,c===me);ctx.restore();
    ctx.textAlign='right';ctx.font='700 '+(two?'11px':'13px')+' "Baloo 2",sans-serif';ctx.fillStyle=c.done!=null?'#ffd23f':'#cfe3d6';
    ctx.fillText(c.left?t('leftTag'):c.done!=null?fmt(c.done):(state==='race'?ord(pos.get(c)):''),xo+cw-6,y+1);
  });
  if(two){ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(W/2-.5,y0+4,1,h-8)}
}
function hud(now){
  ctx.fillStyle='#14301f';ctx.fillRect(0,0,W,HUD);
  const el=state==='race'?Math.max(0,now-startT):state==='done'?endEl:0;
  ctx.fillStyle='#fff';ctx.font='700 15px "Baloo 2",sans-serif';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(fmt(el),12,HUD/2+1);
  if(mode==='practice'){ctx.textAlign='right';ctx.fillStyle='#cfe3d6';ctx.fillText(t('practice'),W-12,HUD/2+1);return}
  if(!split()){if(net){ctx.textAlign='right';ctx.fillStyle='#cfe3d6';ctx.fillText(t('room')+' '+net.code,W-12,HUD/2+1)}return}
  const x0=84,x1=W-30;
  ctx.strokeStyle='rgba(255,255,255,.28)';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x0,HUD/2);ctx.lineTo(x1,HUD/2);ctx.stroke();
  for(let yy=0;yy<3;yy++)for(let xx=0;xx<2;xx++){ctx.fillStyle=(xx+yy)%2?'#14301f':'#fff';ctx.fillRect(x1+6+xx*5,HUD/2-7.5+yy*5,5,5)}
  racers.forEach(c=>marker(c,x0+(x1-x0)*prog(c),HUD/2,30,true));
}
// in big rooms only the racers just ahead of and behind you are shown on your track
function nearby(c){const o=racers.filter(r=>!r.left).sort((a,b)=>headX(b)-headX(a)),i=o.indexOf(c);return [o[i-1],o[i+1]].filter(r=>r&&r!==c)}
function draw(now){
  ctx.setTransform(DPR,0,0,DPR,0,0);ctx.clearRect(0,0,W,H);
  if(!racers.length)return;
  let mid;
  if(mode==='practice'){
    const c=racers[0];drawLane(c,[],HUD,H-HUD,now,false);if(state==='race')practiceInfo(c,HUD,H-HUD,now);mid=HUD+(H-HUD)/2;
  }else if(!split()){
    const sh=stripH(),c=me||racers[0];strip(HUD,sh);
    drawLane(c,nearby(c),HUD+sh,H-HUD-sh,now,false);mid=HUD+sh+(H-HUD-sh)/2;
  }else{
    const lh=(H-HUD)/2,mine=mode==='online'&&me?me:racers[1],other=racers.find(r=>r!==mine)||racers[0];
    drawLane(other,[mine],HUD,lh,now,true);drawLane(mine,[other],HUD+lh,lh,now,true);
    ctx.fillStyle='#14301f';ctx.fillRect(0,HUD+lh-1.5,W,3);mid=HUD+lh;
  }
  hud(now);
  if(state==='count'||(state==='race'&&now-startT<600)){
    const tx=state==='count'?String(Math.max(1,Math.ceil((startT-now)/1000))):t('go');
    ctx.font='800 '+Math.round(Math.min(W,H)*.18)+'px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=10;ctx.strokeStyle='#14301f';ctx.fillStyle=state==='count'?'#fff':'#ffd23f';
    ctx.strokeText(tx,W/2,mid);ctx.fillText(tx,W/2,mid);
  }
}

// ---------- sound: everything is synthesised in the browser (no audio files) ----------
const SND={sfx:store.get('cr-sfx')!=='0',music:store.get('cr-music')!=='0'};
let AC=null,master=null,musicBus=null,sfxBus=null,noiseBuf=null,eng=null,mStep=0,mNext=0,huffAt=0;
function audio(){
  if(!AC){const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;
    try{AC=new A()}catch(e){return null}
    master=AC.createGain();master.gain.value=.8;master.connect(AC.destination);
    musicBus=AC.createGain();musicBus.gain.value=0;musicBus.connect(master);sfxBus=AC.createGain();sfxBus.connect(master);
    noiseBuf=AC.createBuffer(1,AC.sampleRate,AC.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}
  if(AC.state==='suspended'&&!document.hidden)AC.resume().catch(()=>{});
  return AC;
}
['pointerdown','keydown'].forEach(ev=>addEventListener(ev,()=>audio(),{capture:true,passive:true}));
document.addEventListener('visibilitychange',()=>{if(!AC)return;if(document.hidden)AC.suspend().catch(()=>{});else AC.resume().catch(()=>{})});
function tone(f,d,o={}){
  const bus=o.bus||sfxBus;if(bus===sfxBus&&!SND.sfx)return;const a=AC;if(!a||(a.state!=='running'&&!a.isOffline))return;
  const t0=a.currentTime+(o.at||0),osc=a.createOscillator(),g=a.createGain();
  osc.type=o.type||'square';osc.frequency.setValueAtTime(f,t0);if(o.glide)osc.frequency.exponentialRampToValueAtTime(o.glide,t0+d);
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(o.v||.12,t0+.012);g.gain.exponentialRampToValueAtTime(.0001,t0+d);
  osc.connect(g);g.connect(bus);osc.start(t0);osc.stop(t0+d+.05);
}
function noise(d,o={}){
  if(!SND.sfx||!AC||(AC.state!=='running'&&!AC.isOffline))return;
  const t0=AC.currentTime+(o.at||0),src=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain();
  src.buffer=noiseBuf;f.type=o.type||'bandpass';f.frequency.setValueAtTime(o.f||1000,t0);f.Q.value=o.q||1;if(o.sweep)f.frequency.exponentialRampToValueAtTime(o.sweep,t0+d);
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(o.v||.2,t0+.02);g.gain.exponentialRampToValueAtTime(.0001,t0+d);
  src.connect(f);f.connect(g);g.connect(sfxBus);src.start(t0);src.stop(t0+d+.05);
}
const sfx={
  // crowd clapping: lots of tiny noise claps that swell and fade
  applause(d=2.4,at=0){for(let i=0;i<Math.round(d*38);i++){const tt=at+Math.random()*d,env=Math.sin(Math.PI*Math.min(1,(tt-at)/d));noise(.05,{v:.05+.12*env*Math.random(),f:1400+Math.random()*1600,q:.9,at:tt})}},
  cheer(at=0){[0,.08,.16].forEach((dt,i)=>tone([784,988,1175][i],.5,{type:'triangle',v:.06,at:at+dt,glide:[880,1109,1319][i]}))},
  winBig(){const m=[[523,.14],[659,.14],[784,.14],[1047,.32],[880,.14],[1047,.6]];let tt=0;m.forEach(([f,d])=>{tone(f,d+.05,{type:'square',v:.08,at:tt});tone(f/2,d+.05,{type:'triangle',v:.06,at:tt});tt+=d});sfx.cheer(.1);sfx.applause(2.6,.4)},
  champion(){const m=[[392,.12],[392,.12],[392,.12],[523,.45],[392,.2],[523,.2],[659,.2],[784,.7],[659,.15],[784,.9]];let tt=0;m.forEach(([f,d])=>{tone(f,d+.06,{type:'sawtooth',v:.07,at:tt});tone(f*1.5,d+.06,{type:'square',v:.035,at:tt});tone(f/2,d+.06,{type:'triangle',v:.07,at:tt});tt+=d});
    for(let k=0;k<6;k++){const a2=.6+k*.45;noise(.25,{v:.3,f:500,q:.6,type:'lowpass',at:a2});tone(1200+k*150,.5,{type:'sine',v:.04,at:a2+.05,glide:300})}
    sfx.cheer(.2);sfx.cheer(1.6);sfx.applause(4.2,.3)},
  sad(){[[466,.42],[440,.42],[415,.42],[392,1.1]].reduce((tt,[f,d],i)=>{tone(f,d,{type:'sawtooth',v:.09,at:tt,glide:i===3?370:f*.97});tone(f*1.006,d,{type:'triangle',v:.06,at:tt});return tt+d},0);tone(98,.25,{type:'sine',v:.18,at:2.4,glide:60})},
  tap(){tone(880,.07,{type:'triangle',v:.1,glide:1320})},
  beep(){tone(587,.16,{type:'square',v:.1})},
  go(){[523,659,784,1047].forEach((f,i)=>tone(f,.28,{type:'square',v:.09,at:i*.06}))},
  ding(){tone(1568,.6,{type:'triangle',v:.18});tone(2093,.45,{type:'sine',v:.08,at:.03})},
  win(){[523,659,784,1047,0,784,1047].forEach((f,i)=>f&&tone(f,i===6?.6:.15,{type:'square',v:.09,at:i*.12}));[262,392,523].forEach((f,i)=>tone(f,.9,{type:'triangle',v:.07,at:.72+i*.01}))},
  lose(){tone(392,.28,{type:'triangle',v:.14,glide:370});tone(370,.28,{type:'triangle',v:.14,at:.3,glide:349});tone(349,.7,{type:'triangle',v:.14,at:.6,glide:247})},
  huff(){noise(.16,{v:.22,f:1100,q:.7});noise(.12,{v:.12,f:700,q:.7,at:.2})},
  snap(){noise(.07,{v:.45,f:2600,q:.6,type:'highpass'});tone(1700,.05,{type:'square',v:.07})},
  puff(){tone(200,.4,{type:'sine',v:.2,glide:720})},
  whoosh(){noise(.55,{v:.18,f:500,q:1.4,sweep:2600})},
  boing(){tone(260,.35,{type:'sine',v:.18,glide:960});tone(520,.2,{type:'triangle',v:.06,at:.05,glide:1200})},
  splash(){noise(.3,{v:.15,f:1800,q:.5,sweep:600})}
};
const buzz=ms=>{try{if(SND.sfx&&navigator.vibrate)navigator.vibrate(ms)}catch(e){}};
// little 8-bit tune (C major pentatonic), quieter during a race
const MEL=[72,76,79,76,81,79,76,74,72,74,76,79,76,74,72,0,77,81,84,81,79,76,72,74,76,79,81,79,76,74,72,0],BAS=[48,48,45,45,41,41,43,43];
const mf=n=>440*Math.pow(2,(n-69)/12);
function musicTick(){
  if(!AC||AC.state!=='running')return;
  const racing=state==='race'||state==='count',want=SND.music?(racing?.21:.7):0;
  musicBus.gain.setTargetAtTime(want,AC.currentTime,.3);
  if(!SND.music){mNext=0;return}
  const spb=60/132/2;
  if(mNext<AC.currentTime)mNext=AC.currentTime+.05;
  while(mNext<AC.currentTime+.3){
    const s=mStep%32,at=mNext-AC.currentTime;
    if(MEL[s])tone(mf(MEL[s]),spb*.85,{type:'square',v:.05,at,bus:musicBus});
    if(s%4===0)tone(mf(BAS[s/4]),spb*3.4,{type:'triangle',v:.1,at,bus:musicBus});
    if(s%2===1)tone(mf(BAS[Math.floor(s/4)]+12),spb*.5,{type:'triangle',v:.035,at,bus:musicBus});
    mStep++;mNext+=spb;
  }
}
setInterval(musicTick,100);
function engine(on,rpm){
  if(!AC||AC.state!=='running')return;
  if(!eng){const o=AC.createOscillator(),o2=AC.createOscillator(),f=AC.createBiquadFilter(),g=AC.createGain();o.type='sawtooth';o2.type='square';f.type='lowpass';f.frequency.value=500;g.gain.value=0;o.connect(f);o2.connect(f);f.connect(g);g.connect(sfxBus);o.start();o2.start();eng={o,o2,g}}
  const tt=AC.currentTime,v=on&&SND.sfx?Math.min(1,rpm/80)*.045:0;
  eng.g.gain.setTargetAtTime(v,tt,.08);eng.o.frequency.setTargetAtTime(55+rpm*.42,tt,.08);eng.o2.frequency.setTargetAtTime((55+rpm*.42)*.502,tt,.08);
}
function soundTick(now){
  if(!AC)return;
  const live=state==='race';
  const humans=racers.filter(r=>r.kind==='human'&&r.done==null);
  const lead=mode==='duo'?humans.reduce((a,b)=>!a||b.disp>a.disp?b:a,null):(me&&me.done==null?me:null);
  engine(live&&!!lead,lead?lead.disp:0);
  humans.forEach(c=>{
    const red=live&&exprOf(c)==='red',run=live&&c.disp>=150;
    if(red&&now>huffAt){sfx.huff();huffAt=now+420}
    if(red&&!c.wasRed){if(c.char==='puffer')sfx.puff();if(c.char==='frill')sfx.boing()}
    if(red&&c.char==='shrimp'){const k=Math.floor(now/600);if(k!==c.snapK){c.snapK=k;sfx.snap()}}
    if(run&&!c.wasRun){if(c.char==='peng')sfx.whoosh();if(c.char==='basil')sfx.splash()}
    c.wasRed=red;c.wasRun=run;
  });
}
function soundButtons(){
  const m=document.getElementById('bMusic'),f=document.getElementById('bSfx');if(!m||!f)return;
  m.textContent=(SND.music?'🎵 ':'🔇 ')+t('music');m.setAttribute('aria-pressed',SND.music);
  f.textContent=(SND.sfx?'🔊 ':'🔈 ')+t('sound');f.setAttribute('aria-pressed',SND.sfx);
}
document.getElementById('bMusic').addEventListener('click',()=>{SND.music=!SND.music;store.set('cr-music',SND.music?'1':'0');audio();soundButtons()});
document.getElementById('bSfx').addEventListener('click',()=>{SND.sfx=!SND.sfx;store.set('cr-sfx',SND.sfx?'1':'0');audio();soundButtons();if(SND.sfx)sfx.tap()});
soundButtons();

// ---------- loop ----------
let last=performance.now(),lastSend=0,lastCount=0;
function loop(now){
  const dt=Math.min(50,now-last);last=now;
  if(state==='count'){const k=Math.ceil((startT-now)/1000);if(k!==lastCount&&k>=1&&k<=3){lastCount=k;sfx.beep()}}
  if(state==='count'&&now>=startT){state='race';sfx.go();buzz(60)}
  racers.forEach(c=>upd(c,now,dt));
  if(mode==='online'&&net&&me&&state==='race'&&me.done==null){
    const n=racers.filter(r=>!r.left).length,iv=Math.max(150,n*(n-1)*20);
    if(now-lastSend>iv){lastSend=now;net.send({t:'st',phi:me.phi,w:me.w,spin:me.spin,top:me.top})}
  }
  if(state==='race'&&mode!=='practice'){
    const active=racers.filter(r=>!r.left);
    const grace=mode==='online'?15000:3000;
    if((firstDone&&(active.every(c=>c.done!=null)||now-firstDone>grace))||(mode==='online'&&active.length<=1&&racers.length>1))finish();
  }
  soundTick(now);draw(now);requestAnimationFrame(loop);
}

// ---------- network (Supabase Realtime broadcast, or BroadcastChannel for local tests) ----------
let net=null,sbc=null;
const getSb=()=>{if(!sbc&&window.supabase)sbc=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:false},realtime:{params:{eventsPerSecond:40}}});return sbc};
const deviceId=store.get('cr-dev')||(()=>{const v='d'+Math.random().toString(36).slice(2,12)+Date.now().toString(36);store.set('cr-dev',v);return v})();
const myId=Math.random().toString(36).slice(2,10);
const myName=()=>(store.get('cr-nick')||'').slice(0,14);
function makeTransport(room,onMsg,onStatus){
  if(qs.get('local')==='1'){
    const bc=new BroadcastChannel('cr-'+room);bc.onmessage=e=>onMsg(e.data);setTimeout(()=>onStatus('ok'),50);
    return{send:m=>bc.postMessage(m),close:()=>bc.close()};
  }
  const sb=getSb();if(!sb){setTimeout(()=>onStatus('fail'),0);return{send(){},close(){}}}
  const ch=sb.channel('cr-room-'+room,{config:{broadcast:{self:false,ack:false}}});
  ch.on('broadcast',{event:'m'},({payload})=>onMsg(payload));
  let done=false;
  ch.subscribe(st=>{if(st==='SUBSCRIBED'&&!done){done=true;onStatus('ok')}else if((st==='CHANNEL_ERROR'||st==='TIMED_OUT')&&!done){done=true;onStatus('fail')}});
  // supabase-js drops a send that comes too soon after the previous one, so space them out; keep only the newest position update
  const q=[];let busy=false;
  const pump=()=>{if(!q.length){busy=false;return}busy=true;ch.send({type:'broadcast',event:'m',payload:q.shift()});setTimeout(pump,35)};
  return{send:m=>{if(m.t==='st'){const i=q.findIndex(x=>x.t==='st');if(i>=0){q[i]=m;return}}q.push(m);if(!busy)pump()},close:()=>{try{sb.removeChannel(ch)}catch(e){}}};
}
function newCode(){return String(1000+Math.floor(Math.random()*9000))}
function joinRoom(code,capSet){
  if(net)net.close();
  const peers=new Map();
  const me0={id:myId,name:myName()||t('you'),ready:false,joined:Date.now(),cap:capSet||null};
  let status='connecting',hb=0,lastHi=0;
  const n={code,me:me0,peers,status:()=>status,
    send:m=>{m.id=myId;tr.send(m)},
    hello:()=>{lastHi=Date.now();const h={t:'hi',name:me0.name,ready:me0.ready,joined:me0.joined,ph:state,ch:myChar,cap:me0.cap};if(state==='count'&&curIds){h.rid=curRid;h.ids=curIds;h.left=Math.max(0,startT-performance.now())}n.send(h)},
    all:()=>[me0,...[...peers.values()]].sort((a,b)=>a.joined-b.joined||(a.id<b.id?-1:1)),
    cap:()=>{const a=n.all(),f=a.find(p=>p.cap);return Math.min(MAXP,Math.max(2,(a[0]&&a[0].cap)||(f&&f.cap)||MAXP))},
    members:()=>n.all().slice(0,n.cap()),
    inRoom:()=>n.members().some(p=>p.id===myId),
    host:()=>n.members()[0].id===myId,
    racing:()=>[...peers.values()].some(p=>p.ph==='race'||p.ph==='count'),
    close:()=>{clearInterval(hb);tr.close();net=null}};
  const tr=makeTransport(code,onMsg,st=>{
    status=st;
    if(st==='ok'){n.hello();n.send({t:'who'});
      hb=setInterval(()=>{const racing=state==='race'||state==='count';if(Date.now()-lastHi>(racing?4000:1500))n.hello();prune()},500);
      setTimeout(()=>{if(!capSet&&!peers.size)status='noroom';else if(!n.inRoom())status='full';refreshPanel(true)},2500)}
    refreshPanel(true);
  });
  function prune(){const now=Date.now(),lim=(state==='race'||state==='count')?9000:6000;for(const[id,p]of peers)if(now-p.seen>lim){peers.delete(id);onLeave(p)}}
  function onMsg(m){
    if(!m||m.id===myId)return;
    const p=peers.get(m.id);if(p)p.seen=Date.now();
    if(m.t==='who'){n.hello();return}
    if(m.t==='hi'){
      peers.set(m.id,{id:m.id,name:String(m.name||'?').slice(0,14),ready:!!m.ready,joined:+m.joined||Date.now(),ph:m.ph,ch:CHARS.includes(m.ch)?m.ch:'cat',cap:(+m.cap>=2&&+m.cap<=MAXP)?+m.cap:null,seen:Date.now()});
      if(!me0.cap){const c0=n.cap();if(c0<MAXP||m.cap)me0.cap=c0}
      if(status==='noroom'){status='ok';refreshPanel(true)}
      if(!p)n.hello();
      if(m.rid&&m.rid!==curRid&&Array.isArray(m.ids)&&m.ids.includes(myId)&&me0.ready&&state!=='count'&&state!=='race')startRace(Math.max(400,+m.left||0),m.ids,m.rid);
      const r=racers.find(x=>x.id===m.id);if(r){r.name=peers.get(m.id).name;if(state!=='race'&&state!=='count')r.char=peers.get(m.id).ch}
      if(state==='lobby'||state==='done'){maybeStart();refreshPanel()}
      return}
    if(m.t==='bye'){peers.delete(m.id);if(p)onLeave(p);return}
    if(m.t==='go'){if(Array.isArray(m.ids)&&m.ids.includes(myId)){if(m.rid!==curRid)startRace(m.delay||3000,m.ids,m.rid)}else refreshPanel(true);return}
    const r=racers.find(x=>x.id===m.id);if(!r||r.kind!=='remote')return;
    if(m.t==='st'&&state==='race'){r.tphi=+m.phi||0;r.tw=+m.w||0;r.spin=+m.spin||0;r.top=+m.top||0;r.rt=performance.now();return}
    if(m.t==='fin'&&r.done==null&&(state==='race'||state==='count')){r.done=+m.time;r.spin=+m.spin||0;r.top=+m.top||0;r.phi=Math.max(r.phi,phiForFinish(r.char));r.w=0;r.tw=0;if(!firstDone)firstDone=performance.now();return}
  }
  function onLeave(p){
    if(mode!=='online')return;
    const r=racers.find(x=>x.id===p.id);
    if((state==='race'||state==='count')&&r){r.left=true;return}
    if(state==='done'&&r)r.left=true;
    refreshPanel(true);
  }
  net=n;return n;
}
function phiForFinish(ch){let lo=0,hi=800;for(let i=0;i<50;i++){const m=(lo+hi)/2;if(headPos(ch||'cat',m)>=TRACK)hi=m;else lo=m}return hi}
function readyIds(){return net.members().filter(p=>p.ready).map(p=>p.id)}
function maybeStart(force){
  if(!net||!net.host()||state==='race'||state==='count')return;
  const mem=net.members();let ids=readyIds();
  if(force){if(mem.length<2)return;ids=mem.map(p=>p.id)}
  else if(mem.length<net.cap()||ids.length<mem.length||ids.length<2)return;
  const rid=Math.random().toString(36).slice(2,8);net.send({t:'go',delay:3000,ids,rid});startRace(3000,ids,rid);
}
let curRid=null,curIds=null;
function startRace(delay,ids,rid){
  if(state==='count'||state==='race')return;
  finishId++;
  curRid=rid||null;curIds=ids||null;
  if(net)net.me.ready=false;
  setup(ids);firstDone=0;winner=null;endNote='';panel='race';state='count';startT=performance.now()+delay;lastCount=0;raceOv();
  racers.forEach(c=>{c.bt=0});
  if(net)net.hello();
}
addEventListener('pagehide',()=>{if(net)net.send({t:'bye'})});

// ---------- panels ----------
let panel='menu',sig='';
function refreshPanel(force){
  if(state==='count'||state==='race')return;
  if(panel==='lobby'||(panel==='results'&&net)){
    const s=(net?net.status()+'|'+net.cap()+':'+net.members().map(p=>p.id+p.name+p.ready+(p.ch||'')).join(',')+'|'+net.racing():'')+'|'+lang+'|'+endNote+'|'+boardNote;
    if(!force&&s===sig)return;sig=s;
  }
  if(panel==='menu')menu();else if(panel==='lobby')lobby();else if(panel==='results')results();else if(panel==='board')board();
}
// Icons are drawn from the real in-game artwork, cropped to fit.
const ICONS={};
function iconURL(ch){
  if(!CHARS.includes(ch))ch='cat';if(ICONS[ch])return ICONS[ch];
  const big=document.createElement('canvas');big.width=400;big.height=240;
  return ICONS[ch]=crop(big,ch);
}
function crop(big,ch){
  // redraw with face so the icon shows the animal's own face
  const g=big.getContext('2d');g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,400,240);const saved=ctx;
  try{noShadow=true;ctx=g;ctx.scale(1.25,1.25);ctx.translate(-10,-20);const f=mk(SIG[ch],'','human',null,ch);f.ph=1;const hd=(DRAW[ch]||drawCat)(f,1000,true);face(hd.x,hd.y,hd.r,'slow',1000,f)}finally{ctx=saved;noShadow=false}
  const d=g.getImageData(0,0,400,240).data;let x0=400,y0=240,x1=0,y1=0;
  for(let y=0;y<240;y++)for(let x=0;x<400;x++)if(d[(y*400+x)*4+3]>20){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}
  if(x1<x0)return '';
  const out=document.createElement('canvas');out.width=120;out.height=72;const o=out.getContext('2d');
  const bw=x1-x0+1,bh=y1-y0+1,k=Math.min(112/bw,66/bh);
  o.drawImage(big,x0,y0,bw,bh,(120-bw*k)/2,(72-bh*k)/2,bw*k,bh*k);
  return out.toDataURL();
}
const icImg=(ch,cls)=>`<img class="${cls||''}" src="${iconURL(ch)}" alt="">`;
// ---------- menu: game mode -> animal -> name ----------
const MODES=[['practice','🏁','practice','practiceSub'],['solo','🤖','vsCpu','cpuSub'],['duo','📱','duo','duoSub'],['online','🌐','online','onlineSub']];
let si=0,invite=!!qs.get('room'),onTab=invite?'join':'create',cap=Math.min(8,Math.max(2,+store.get('cr-cap')||4)),codeDraft=(qs.get('room')||'').replace(/\D/g,'').slice(0,4);
let p2Char=CHARS.includes(store.get('cr-char2'))?store.get('cr-char2'):'inch';
function flow(){if(mode==='online'&&invite)return['animal','online'];return{practice:['mode','animal'],solo:['mode','animal','solo'],duo:['mode','animal','animal2'],online:['mode','animal','online']}[mode]}
function stepDots(){const f=flow();return `<div class="steps" role="img" aria-label="${t('stepOf',{i:si+1,n:f.length})}">${f.map((_,i)=>`<i class="${i<=si?'on':''}"></i>`).join('')}</div>`}
function animalGrid(sel,g){return `<div class="chars" data-g="${g}">${CHARS.map(k=>`<button data-v="${k}" class="${k===sel?'on':''}" aria-pressed="${k===sel}">${icImg(k)}<span>${t('ch_'+k)}</span></button>`).join('')}</div>`}
function navRow(lbl,act){return `<div class="row nav">${si>0?`<button class="sec" data-act="back">← ${t('back')}</button>`:''}<button class="go" data-act="${act}">${lbl}</button></div>`}
const nickIn=lbl=>`<label for="nick">${lbl}</label><input type="text" id="nick" maxlength="14" autocomplete="nickname" value="${esc(myName())}" placeholder="e.g. Speedy">`;
function menu(){
  panel='menu';state='menu';finishId++;
  if(net){net.send({t:'bye'});net.close()}
  setup();
  const f=flow();si=Math.max(0,Math.min(si,f.length-1));const pg=f[si],last=si===f.length-1;
  let h=stepDots();
  if(pg==='mode'){
    h+=`<h2>${t('modeQ')}</h2><div class="modes" data-g="mode">${MODES.map(([v,e,k,s])=>`<button data-v="${v}" class="${mode===v?'on':''}" aria-pressed="${mode===v}"><span class="em" aria-hidden="true">${e}</span><span class="mt"><b>${t(k)}</b><small>${t(s)}</small></span></button>`).join('')}</div>
    ${navRow(t('next')+' →','next')}<div class="row"><button class="sec" data-act="board">🏆 ${t('board')}</button></div>`;
  }else if(pg==='animal'){
    h+=`<h2>${mode==='duo'?t('p1Animal'):t('pickAnimal')}</h2>${invite&&mode==='online'?`<p class="small"><b>${t('invited',{c:esc(codeDraft)})}</b></p>`:''}
    <p class="small">${t('selected',{a:`<b>${t('ch_'+myChar)}</b>`})}</p>${animalGrid(myChar,'char')}${mode==='solo'?`<p class="small">${t('cpuNote')}</p>`:''}
    ${navRow(last?t('start'):t('next')+' →',last?'start':'next')}${invite&&mode==='online'?`<div class="row"><button class="sec" data-act="uninvite">${t('notNow')}</button></div>`:''}`;
  }else if(pg==='animal2'){
    h+=`<h2>${t('p2Animal')}</h2><p class="small">${t('p1Is',{a:`<b>${t('ch_'+myChar)}</b>`})} · ${t('selected',{a:`<b>${t('ch_'+p2Char)}</b>`})}</p>${animalGrid(p2Char,'char2')}<p class="small">${t('duoHint')}</p>${navRow(t('start'),'start')}`;
  }else if(pg==='solo'){
    const best=store.get('cr2-best-'+diff),d=t(DIFF[diff].k);
    h+=`<h2>${t('nameDiff')}</h2><label>${t('difficulty')}</label><div class="seg diff4" data-g="diff">${DIFF.map((x,i)=>{const lk=i===3&&!champOpen();return `<button data-v="${i}" class="${i===diff?'on':''}" ${lk?'disabled aria-disabled="true"':''}>${lk?'🔒 ':''}${t(x.k)}</button>`}).join('')}</div><p class="small">${champOpen()?t('champHint'):t('champLocked')}</p>
    ${nickIn(t('nickOpt'))}<p class="small">${best?t('best',{d,t:fmt(+best)}):t('nobest',{d})}</p>${navRow(t('start'),'start')}`;
  }else{
    h+=`<h2>${t('nameRoom')}</h2>${nickIn(t('nick'))}`;
    if(!invite)h+=`<div class="seg" data-g="otab"><button data-v="create" class="${onTab==='create'?'on':''}">${t('createTab')}</button><button data-v="join" class="${onTab==='join'?'on':''}">${t('joinTab')}</button></div>`;
    if(onTab==='create'&&!invite)h+=`<label>${t('howMany')}</label><div class="seg cap" data-g="cap">${[2,3,4,5,6,7,8].map(n=>`<button data-v="${n}" class="${n===cap?'on':''}" aria-pressed="${n===cap}">${n}</button>`).join('')}</div><p class="small">${t('capHint',{n:cap})}</p>${navRow(t('createBtn'),'create')}`;
    else h+=`<label for="code">${t('codeLbl')}</label><input type="text" id="code" class="codein" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="off" value="${esc(codeDraft)}" placeholder="0000">${navRow(t('joinBtn'),'join')}`;
  }
  ov.innerHTML=`<div class="panel">${h}<p class="small" id="msg" aria-live="polite"></p></div>`;
}
function roomLink(code){return location.origin+location.pathname+'?room='+code+(qs.get('local')==='1'?'&local=1':'')}
function playerList(){
  const mem=net.members(),c=net.cap(),empty=Math.max(0,c-mem.length);
  return `<ul class="players">${mem.map((p,i)=>`<li><span class="dot" style="background:${SK[i%8].body}"></span><span class="ic">${icImg(p.id===myId?myChar:(p.ch||'cat'))}</span>${esc(p.name)}${p.id===myId?' ('+t('you')+')':''}${i===0?` <span class="st" style="margin-left:4px">· ${t('host')}</span>`:''}<span class="st ${p.ready?'ok':''}">${p.ready?t('isReady'):t('notReady')}</span></li>`).join('')}${`<li class="empty">${t('emptySlot')}</li>`.repeat(empty)}</ul>`;
}
function readyArea(){
  const mem=net.members(),ids=readyIds(),c=net.cap(),allIn=mem.length>=c,allReady=ids.length===mem.length;
  let h='';
  if(net.racing()&&panel==='lobby')h+=`<p class="small">${t('inProgress')}</p>`;
  h+=`<p class="small"><b>${t('joinedCount',{n:mem.length,m:c})}</b> · ${t('readyCount',{r:ids.length,n:mem.length})}</p>`;
  if(!net.me.ready)h+=`<button class="go" data-act="ready">${panel==='results'?t('rematch'):t('readyBtn')}</button>`;
  else h+=`<p class="small">${allIn?t('waitReady'):t('waitJoin',{k:c-mem.length})}</p>`;
  if(net.host()&&mem.length>=2&&!(allIn&&allReady))h+=`<button class="go alt" data-act="startnow">${t('startNow',{k:mem.length})}</button>`;
  h+=`<p class="small">${t('autoStart',{m:c})}${mem.length>=2?' '+t('hostCan'):''}</p>`;
  return h;
}
function lobby(){
  panel='lobby';if(state!=='done')state='lobby';
  const n=net;if(!n){menu();return}
  const st=n.status();
  if(st==='connecting'){ov.innerHTML=`<div class="panel"><h2>${t('room')}</h2><p class="code">${esc(n.code)}</p><p class="small">${t('joining')}</p></div>`;return}
  if(st==='fail'||st==='full'||st==='noroom'){ov.innerHTML=`<div class="panel"><h2>${t('room')} ${esc(n.code)}</h2><p>${st==='full'?t('full',{m:n.cap()}):st==='noroom'?t('noRoom',{c:esc(n.code)}):t('offline')}</p><button class="go" data-act="leave">${t('back')}</button></div>`;return}
  setup();
  const link=roomLink(n.code),full=n.members().length>=n.cap();
  ov.innerHTML=`<div class="panel"><p class="small" style="margin:0">${t('roomCode')}</p><p class="code">${esc(n.code)}</p>
  ${full?'':`<p class="link" id="lnk">${esc(link)}</p><div class="row"><button class="sec" data-act="copylink">🔗 ${t('copy')}</button>${navigator.share?`<button class="sec" data-act="sharelink">${t('share')}</button>`:''}</div>`}
  ${playerList()}${readyArea()}
  ${endNote?`<p class="small">${esc(endNote)}</p>`:''}
  <div class="row"><button class="sec" data-act="leave">${t('leave')}</button></div><p class="small" id="msg" aria-live="polite"></p></div>`;
}
let boardNote='',lbPeriod='day',lbData=null,lbErr=false;
async function fetchBoard(period){const sb=getSb();if(!sb||qs.get('local')==='1')throw new Error('offline');const {data,error}=await sb.rpc('cr_board',{p_period:period,p_device:deviceId});if(error)throw error;return data}
async function submitScore(ms,topRpm,md,df){
  const nick=myName().trim();
  if(!nick){boardNote=t('boardNoNick');return}
  const sb=getSb();if(!sb||qs.get('local')==='1')return;
  boardNote=t('boardSaving');
  try{
    const {error}=await sb.from('cr_scores').insert({nick,time_ms:Math.round(ms),top_rpm:Math.min(520,Math.round(topRpm)),mode:md,diff:md==='solo'?df:null,device_id:deviceId,animal:myChar});
    if(error)throw error;
    const b=await fetchBoard('day');
    boardNote=b&&b.me?t('boardRank',{r:b.me.rk,n:b.total}):'';
  }catch(e){boardNote=t('boardFail')}
  if(panel==='results'&&state==='done'){sig='';results()}
}
function board(){
  panel='board';state='menu';
  const tabs=[['day','p24'],['week','p7'],['all','pAll']];
  let body;
  if(lbErr)body=`<p class="small">${t('boardErr')}</p>`;
  else if(!lbData)body=`<p class="small">${t('loading')}</p>`;
  else if(!lbData.top.length)body=`<p class="small">${t('boardEmpty')}</p>`;
  else{
    const row=(r,mine)=>`<tr${mine?' style="font-weight:800;background:color-mix(in srgb,var(--on) 14%,transparent)"':''}><td>${r.rk}</td><td><span class="ic">${icImg(r.animal)}</span>${esc(r.nick)}${mine?' ('+t('you')+')':''}</td><td>${fmt(r.best)}</td><td>${r.rpm}</td></tr>`;
    const meIn=lbData.top.some(r=>r.me);
    body=`<table class="rk"><thead><tr><th>${t('rank')}</th><th>${t('racer')}</th><th>${t('time')}</th><th>${t('topRpm')}</th></tr></thead><tbody>${lbData.top.map(r=>row(r,r.me)).join('')}${!meIn&&lbData.me?`<tr><td colspan="4" style="text-align:center">…</td></tr>`+row(lbData.me,true):''}</tbody></table><p class="small">${t('boardNote')}</p>`;
  }
  ov.innerHTML=`<div class="panel"><h2>${t('boardTitle')}</h2><div class="seg" data-g="period">${tabs.map(([k,l])=>`<button data-v="${k}" class="${k===lbPeriod?'on':''}">${t(l)}</button>`).join('')}</div>${body}
  <div class="row"><button class="sec" data-act="menu">← ${t('back')}</button></div></div>`;
}
async function loadBoard(){lbData=null;lbErr=false;board();try{lbData=await fetchBoard(lbPeriod)}catch(e){lbErr=true}if(panel==='board')board()}
let shareText='',finishId=0;
function finish(){
  if(state==='done')return;
  state='done';endEl=performance.now()-startT;ov.innerHTML='';
  const order=standings();
  winner=order[0]&&(order[0].done!=null||mode==='online')?order[0]:null;
  if(mode==='solo'&&me.done!=null){const k='cr2-best-'+diff,b=+store.get(k)||0,d=t(DIFF[diff].k);if(!b||me.done<b){store.set(k,String(me.done));endNote=b?t('newBest',{d}):t('firstBest',{d})}else endNote=t('best',{d,t:fmt(b)})}
  if(mode==='solo'&&diff===2&&winner===me&&!champOpen()){store.set('cr-champ','1');endNote=(endNote?endNote+' ':'')+t('champUnlocked')}
  if(mode==='solo')shareText=t('shareSolo',{d:t(DIFF[diff].k),r:winner===me?t('won'):t('lost'),t:me.done!=null?' · '+fmt(me.done):'',rpm:Math.round(me.top*60)});
  else if(mode==='online'&&me){const p=order.indexOf(me)+1;shareText=t('shareOnline',{p:ord(p),n:racers.length,t:me.done!=null?' · '+fmt(me.done):'',u:net?roomLink(net.code):location.origin})}
  else if(winner)shareText=t('wins',{n:winner.name})+(winner.done!=null?' '+fmt(winner.done):'');
  boardNote='';
  if((mode==='solo'||mode==='online')&&me&&me.done!=null)submitScore(me.done,me.top*60,mode,diff);
  sig='';const fid=++finishId;setTimeout(()=>{if(state==='done'&&fid===finishId)results(true)},1900);
}
function results(fresh){
  panel='results';
  if(fresh){const won=mode==='duo'||winner===me;if(won&&mode==='solo'&&diff===3)sfx.champion();else if(won)sfx.winBig();else sfx.sad()}
  const order=standings();
  let title;
  if(mode==='solo')title=winner===me?t('youWin'):t('cpuWin');
  else if(mode==='online'&&me){const p=order.indexOf(me)+1;title=p===1?t('youWin'):t('place',{p:ord(p),n:racers.length})}
  else title=winner?t('wins',{n:winner.name}):'—';
  const rows=order.map((c,i)=>`<tr${c===me&&mode==='online'?' style="font-weight:800"':''}><td>${i+1}</td><td><span class="dot" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.pc||c.body};margin-right:4px"></span><span class="ic">${icImg(c.char)}</span>${esc(c.name)}</td><td>${c.left?t('leftTag'):c.done!=null?fmt(c.done):t('dnf')}</td><td>${Math.round(c.top*60)}</td></tr>`).join('');
  const again=mode==='online'?(net&&net.status()==='ok'?readyArea():''):`<button class="go" data-act="start">${t('rematch')}</button>`;
  const pic=ensureCard(),canShare=!!navigator.share;
  ov.innerHTML=`<div class="panel"><h2>${esc(title)}</h2>
  <button class="cardbtn" data-act="card" aria-label="${esc(t('picAlt'))}"><img class="card mini" src="${pic}" alt="${esc(t('picAlt'))}"></button>
  ${again}
  <div class="row">${canShare?`<button class="sec" data-act="sharepic">📤 ${t('sharePic')}</button>`:''}<button class="sec" data-act="savepic">⬇️ ${t('savePic')}</button></div>
  <table class="rk"><thead><tr><th>${t('rank')}</th><th>${t('racer')}</th><th>${t('time')}</th><th>${t('topRpm')}</th></tr></thead><tbody>${rows}</tbody></table>
  ${endNote?`<p class="small">${esc(endNote)}</p>`:''}
  ${boardNote?`<p class="small">${esc(boardNote)}</p>`:''}
  <div class="row"><button class="sec" data-act="${mode==='online'?'leave':'home'}">${mode==='online'?t('leave'):'🏠 '+t('home')}</button><button class="sec" data-act="copy">${t('copyText')}</button></div>
  <p class="small" id="msg" aria-live="polite"></p></div>`;
}
// ---------- result picture: your animal celebrating with its trophy ----------
let noYay=false;
function crown(x,y,s){
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.rotate(-.12);ctx.lineJoin='round';
  ctx.fillStyle='#ffd23f';ctx.strokeStyle='#b77800';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(-13,0);ctx.lineTo(-15,-14);ctx.lineTo(-7,-7);ctx.lineTo(0,-17);ctx.lineTo(7,-7);ctx.lineTo(15,-14);ctx.lineTo(13,0);ctx.closePath();ctx.fill();ctx.stroke();
  [['#ff4f6d',-8],['#4fb3ff',0],['#6fd14a',8]].forEach(([c2,x2])=>{ctx.fillStyle=c2;ctx.beginPath();ctx.arc(x2,-3.5,2.2,0,7);ctx.fill()});
  ctx.restore();
}
function trophy(x,y,s){
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.fillStyle='rgba(255,230,120,.45)';ctx.beginPath();ctx.arc(0,-6,30,0,7);ctx.fill();
  ctx.strokeStyle='#b77800';ctx.lineWidth=2.4;ctx.fillStyle='#ffd23f';
  ctx.beginPath();ctx.ellipse(-17,-12,7,9,0,0,7);ctx.ellipse(17,-12,7,9,0,0,7);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-15,-24);ctx.lineTo(15,-24);ctx.quadraticCurveTo(14,2,0,6);ctx.quadraticCurveTo(-14,2,-15,-24);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillRect(-3,5,6,9);ctx.strokeRect(-3,5,6,9);rr(-11,13,22,7,2);ctx.fill();ctx.stroke();
  ctx.fillStyle='#fff7c2';ctx.beginPath();for(let k=0;k<10;k++){const q=k%2?2.6:6.5,a=-Math.PI/2+k*Math.PI/5;ctx.lineTo(Math.cos(a)*q,-11+Math.sin(a)*q)}ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.7)';ctx.beginPath();ctx.ellipse(-8,-17,2.5,5,.3,0,7);ctx.fill();
  ctx.restore();
}
function medal(x,y,s,p){
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  ctx.fillStyle='#4fb3ff';ctx.beginPath();ctx.moveTo(-9,-30);ctx.lineTo(-2,-8);ctx.lineTo(4,-10);ctx.lineTo(-3,-30);ctx.fill();ctx.fillStyle='#ff6b8a';ctx.beginPath();ctx.moveTo(9,-30);ctx.lineTo(2,-8);ctx.lineTo(-4,-10);ctx.lineTo(3,-30);ctx.fill();
  const col=p===2?'#d9e2ea':p===3?'#e7a46a':'#a6e86a';ctx.fillStyle=col;ctx.strokeStyle='#6b7a86';ctx.lineWidth=2.2;ctx.beginPath();ctx.arc(0,4,14,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#2b3a46';ctx.font='800 15px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(p),0,5);
  ctx.restore();
}
function popper(x,y,ang,s,seed){
  ctx.save();ctx.translate(x,y);ctx.rotate(ang);ctx.scale(s,s);
  const col=['#ff6b8a','#ffd23f','#4fb3ff','#6fd14a','#c9b3ff','#ff9a3c'];
  for(let i=0;i<46;i++){const r=hash(seed+i),q=hash(seed+i*3.7),d=60+r*330,a=-Math.PI/2+(q-.5)*1.1;ctx.save();ctx.translate(Math.cos(a)*d,Math.sin(a)*d);ctx.rotate(r*6);ctx.fillStyle=col[i%6];
    if(i%3)ctx.fillRect(-5,-2.5,10,5);else{ctx.beginPath();ctx.arc(0,0,4,0,7);ctx.fill()}ctx.restore()}
  ctx.lineCap='round';for(let k=0;k<4;k++){ctx.strokeStyle=col[(k+seed)%6];ctx.lineWidth=4;ctx.beginPath();const a=-Math.PI/2+(k-1.5)*.28;for(let j=0;j<=24;j++){const d=40+j*9,w=Math.sin(j*.9+k)*10;ctx.lineTo(Math.cos(a)*d-Math.sin(a)*w,Math.sin(a)*d+Math.cos(a)*w)}ctx.stroke()}
  ctx.fillStyle='#ff9a3c';ctx.strokeStyle='#a34a00';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-22,-30);ctx.lineTo(22,-30);ctx.lineTo(4,60);ctx.lineTo(-4,60);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='#ffd23f';ctx.lineWidth=5;for(let k=0;k<3;k++){ctx.beginPath();ctx.moveTo(-18+k*4,-12+k*24);ctx.lineTo(18-k*4,-4+k*24);ctx.stroke()}
  ctx.fillStyle='#ffe27a';ctx.beginPath();ctx.ellipse(0,-30,22,7,0,0,7);ctx.fill();ctx.stroke();
  ctx.restore();
}
function cardStats(){
  const order=standings(),c=mode==='duo'?(winner||racers[0]):me;
  return {c,order,place:order.indexOf(c)+1,n:racers.length};
}
// a different cheer for beating each computer level
const WINLINE=['I BEAT THE COMPUTER!','SUPER SPEEDY WIN!','TOO FAST TO CATCH!','I AM THE CHAMPION!'];
// draws one animal with its winning face on its own canvas and crops it.
// what: 'trophy' | 'champ' (trophy + crown) | 'medal' | 'clap' (cheering in the crowd)
function animalShot(ch,what,seed,place){
  const saved=ctx,savedWin=winner,A=document.createElement('canvas');A.width=1400;A.height=900;
  try{
    ctx=A.getContext('2d');const f=mk(SIG[ch]||SIG.cat,'','human',null,ch);f.ph=1+seed;winner=f;
    const S=3;ctx.translate(900-headX(f)*S,760-178*S);ctx.scale(S,S);
    const hd=(DRAW[ch]||drawCat)(f,1000+seed*137,true);
    if(what==='clap'){
      // two little hands clapping in front of the face, with clap lines
      const hx=hd.x+hd.r*.2,hy=hd.y+hd.r*1.05,op=(seed%3)*.12;
      ctx.lineCap='round';[-1,1].forEach(s2=>{ctx.save();ctx.translate(hx+s2*(2.5+op*10),hy);ctx.rotate(s2*(.35+op));ctx.fillStyle=f.body;ctx.strokeStyle=f.dark;ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(0,0,4,6.5,0,0,7);ctx.fill();ctx.stroke();ctx.restore()});
      ctx.strokeStyle='#ffd23f';ctx.lineWidth=2.2;[[-1,-1],[0,-1.3],[1,-1]].forEach(([dx,dy])=>{ctx.beginPath();ctx.moveTo(hx+dx*8,hy-9+dy*2);ctx.lineTo(hx+dx*13,hy-9+dy*8);ctx.stroke()});
      face(hd.x,hd.y,hd.r,'win',1000+seed*137,f);
    }else{
      const tx=hd.x+4,ty=hd.y-hd.r-34;
      ctx.lineCap='round';[[-1,-14],[1,14]].forEach(([s2,dx])=>{ctx.strokeStyle=f.dark;ctx.lineWidth=5.5;ctx.beginPath();ctx.moveTo(hd.x+s2*hd.r*.75,hd.y+2);ctx.quadraticCurveTo(hd.x+s2*hd.r*1.5,hd.y-hd.r-6,tx+dx*.8,ty+14);ctx.stroke();ctx.strokeStyle=f.body;ctx.lineWidth=3;ctx.stroke()});
      face(hd.x,hd.y,hd.r,'win',1000,f);
      if(what==='champ')crown(hd.x,hd.y-hd.r*.9,hd.r/17);
      if(what==='medal')medal(tx,ty+6,1.25,place);else trophy(tx,ty,1.25);
    }
  }finally{ctx=saved;winner=savedWin}
  const d=A.getContext('2d').getImageData(0,0,A.width,A.height).data;let x0=A.width,y0=A.height,x1=0,y1=0;
  for(let y=0;y<A.height;y+=2)for(let x=0;x<A.width;x+=2)if(d[(y*A.width+x)*4+3]>16){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}
  if(x1<=x0)return null;
  const o=document.createElement('canvas');o.width=x1-x0+2;o.height=y1-y0+2;o.getContext('2d').drawImage(A,-x0,-y0);return o;
}
function resultCard(){
  const {c,place,n}=cardStats(),Wc=1080,Hc=1350,cv2=document.createElement('canvas');cv2.width=Wc;cv2.height=Hc;
  const saved=ctx,savedWin=winner,hab=HAB[c.char]||'garden';
  const sky={garden:['#7fd0ff','#e9f9ff'],desert:['#ffb36b','#fff0c9'],pond:['#7fd0ff','#e9f9ff'],sea:['#1f7fc4','#8adaf7'],ice:['#9fd6ff','#f4fcff']}[hab];
  const ground={garden:'#5cb83c',desert:'#eec57e',pond:'#62c0e8',sea:'#e3cf94',ice:'#f6fcff'}[hab];
  const first=place===1,champ=mode==='solo'&&first&&diff===3;
  try{
    ctx=cv2.getContext('2d');
    const g=ctx.createLinearGradient(0,0,0,Hc);if(champ){g.addColorStop(0,'#7a3cff');g.addColorStop(.45,'#ff9a3c');g.addColorStop(.75,'#ffe27a')}else{g.addColorStop(0,sky[0]);g.addColorStop(.75,sky[1])}ctx.fillStyle=g;ctx.fillRect(0,0,Wc,Hc);
    ctx.save();ctx.translate(Wc/2,640);ctx.fillStyle='rgba(255,255,255,.22)';for(let k=0;k<16;k++){ctx.rotate(Math.PI/8);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-60,-900);ctx.lineTo(60,-900);ctx.closePath();ctx.fill()}ctx.restore();
    ctx.fillStyle=ground;ctx.beginPath();ctx.ellipse(Wc/2,1010,700,150,0,Math.PI,0);ctx.lineTo(Wc,Hc);ctx.lineTo(0,Hc);ctx.closePath();ctx.fill();
    popper(110,1000,.55,1.35,3);popper(Wc-110,1000,-.55,1.35,11);
    // the animal, big, with its winning face
    noShadow=true;noYay=true;
    // the winner, big, in the middle; for Champion every other animal comes out to clap
    if(champ){
      // bleachers full of the other animals, all clapping
      const crowd=CHARS.filter(k=>k!==c.char),rows=[crowd.slice(0,5),crowd.slice(5)],tiers=[[505,470],[640,610]];
      rows.forEach((list,r)=>{const[by,ph]=tiers[r];
        ctx.fillStyle='rgba(255,255,255,.28)';rr(30,by-2,Wc-60,22,11);ctx.fill();ctx.fillStyle='rgba(122,60,255,.25)';rr(30,by+20,Wc-60,10,5);ctx.fill();
        list.forEach((k,i)=>{const sh=animalShot(k,'clap',r*7+i);if(!sh)return;const cw=(Wc-80)/list.length,cx=40+cw*(i+.5),k2=Math.min((cw-14)/sh.width,(r?118:104)/sh.height),dw=sh.width*k2,dh=sh.height*k2;ctx.drawImage(sh,cx-dw/2,by-dh+4,dw,dh)})});
    }
    const main=animalShot(c.char,first?(champ?'champ':'trophy'):'medal',0,place);
    if(main){const k=Math.min((champ?760:840)/main.width,(champ?330:600)/main.height,1.6),dw=main.width*k,dh=main.height*k;
      ctx.fillStyle='rgba(20,48,31,.18)';ctx.beginPath();ctx.ellipse(Wc/2,1018,dw*.42,22,0,0,7);ctx.fill();
      ctx.drawImage(main,(Wc-dw)/2,1020-dh,dw,dh)}
    for(let i=0;i<70;i++){const x=hash(i*7.1)*Wc,y=hash(i*3.3)*900,col=['#ff6b8a','#ffd23f','#4fb3ff','#6fd14a','#c9b3ff','#ff9a3c'][i%6];ctx.save();ctx.translate(x,y);ctx.rotate(hash(i)*6);ctx.fillStyle=col;ctx.globalAlpha=.85;ctx.fillRect(-7,-3.5,14,7);ctx.restore()}
    // headline
    let head,sub;
    if(mode==='solo'){head=first?WINLINE[diff]:'SO CLOSE! REMATCH?';sub=t('vsCpu')+' · '+t(DIFF[diff].k)}
    else if(mode==='online'){head=first?'1ST PLACE!':ord(place).toUpperCase()+' PLACE!';sub=t('online')+' · '+n+' '+t('players')}
    else{head=(c.name||'').toUpperCase()+' WINS!';sub=t('duo')}
    ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';
    let fs=150;ctx.font=`800 ${fs}px "Baloo 2",sans-serif`;while(ctx.measureText(head).width>Wc-90&&fs>60){fs-=6;ctx.font=`800 ${fs}px "Baloo 2",sans-serif`}
    ctx.lineWidth=22;ctx.strokeStyle='#14301f';ctx.strokeText(head,Wc/2,150);ctx.fillStyle=first?'#ffd23f':'#ffffff';ctx.fillText(head,Wc/2,150);
    ctx.font='700 46px "Baloo 2",sans-serif';ctx.lineWidth=10;ctx.strokeText(sub,Wc/2,250);ctx.fillStyle='#fff';ctx.fillText(sub,Wc/2,250);
    const who=(myName()&&mode!=='duo'?myName()+' the ':'')+t('ch_'+c.char);
    ctx.font='700 40px "Baloo 2",sans-serif';ctx.lineWidth=9;ctx.strokeText(who,Wc/2,310);ctx.fillStyle='#ffe9a8';ctx.fillText(who,Wc/2,310);
    // stat tiles
    const topK=Math.round(Math.min(MAXKMH,STEP*GAIN*c.top*KMH)),tiles=[['TIME',c.done!=null?fmt(c.done):'—'],['TOP SPEED',topK+' km/h'],['TOP RPM',String(Math.round(c.top*60))]];
    const tw=310,gap=25,x0=(Wc-3*tw-2*gap)/2,y0=1080;
    tiles.forEach(([k,v],i)=>{const x=x0+i*(tw+gap);ctx.fillStyle='rgba(20,48,31,.88)';rr(x,y0,tw,170,26);ctx.fill();
      ctx.fillStyle='#bfe8c9';ctx.font='800 34px "Baloo 2",sans-serif';ctx.fillText(k,x+tw/2,y0+48);
      ctx.fillStyle=i===2&&c.top*60>=REDRPM?'#ff7a5c':'#ffffff';let vs=72;ctx.font=`800 ${vs}px "Baloo 2",sans-serif`;while(ctx.measureText(v).width>tw-30){vs-=4;ctx.font=`800 ${vs}px "Baloo 2",sans-serif`}ctx.fillText(v,x+tw/2,y0+115)});
    ctx.fillStyle='#14301f';ctx.font='700 34px "Baloo 2",sans-serif';ctx.fillText((first?'Can you beat me? ':'')+'🐛 Caterpillar Race · '+location.host,Wc/2,1305);
  }finally{ctx=saved;winner=savedWin;noShadow=false;noYay=false}
  return cv2;
}
let cardURL='',cardFor=-1;
function ensureCard(){if(cardFor!==finishId||!cardURL){cardURL=resultCard().toDataURL('image/png');cardFor=finishId}return cardURL}
function showCard(){
  panel='card';ensureCard();
  ov.innerHTML=`<div class="panel"><h2>🎉 ${t('yourPic')}</h2><img class="card" src="${cardURL}" alt="${esc(t('picAlt'))}">
  <div class="row">${navigator.share?`<button class="go small" data-act="sharepic">📤 ${t('sharePic')}</button>`:''}<button class="${navigator.share?'sec':'go small'}" data-act="savepic">⬇️ ${t('savePic')}</button></div>
  <div class="row"><button class="sec" data-act="backres">← ${t('back')}</button><button class="sec" data-act="copy">${t('copyText')}</button></div>
  <p class="small">${t('picHint')}</p><p class="small" id="msg" aria-live="polite"></p></div>`;
}
// the message that goes with a shared picture always ends with a tappable game link
const gameURL=()=>location.origin+'/';
const shareMsg=()=>/https?:\/\//.test(shareText)?shareText:shareText+'\n'+gameURL();
async function sharePic(){
  try{const blob=await (await fetch(cardURL)).blob(),file=new File([blob],'caterpillar-race.png',{type:'image/png'});
    if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],text:shareMsg(),title:t('title')});return}
    await navigator.share({text:shareText,title:t('title'),url:gameURL()});
  }catch(e){if(e&&e.name!=='AbortError')savePic()}
}
function savePic(){const a=document.createElement('a');a.href=cardURL;a.download='caterpillar-race.png';document.body.appendChild(a);a.click();a.remove();say(t('picSaved'))}
function say(s){const m=document.getElementById('msg');if(m)m.textContent=s}
function copyText(s,ok){try{navigator.clipboard.writeText(s).then(()=>say(ok),()=>say(s))}catch(e){say(s)}}
function saveNick(){const i=document.getElementById('nick');if(i){const v=i.value.trim().slice(0,14);store.set('cr-nick',v);return v}return myName()}
function saveForm(){saveNick();const c=document.getElementById('code');if(c)codeDraft=c.value.replace(/\D/g,'').slice(0,4)}
function clearRoomParam(){qs.delete('room');history.replaceState(null,'',location.pathname+(qs.toString()?'?'+qs.toString():''))}
function raceOv(){ov.innerHTML=mode==='practice'?`<button class="done" data-act="menu">${t('done')}</button>`:`<button class="quit" data-act="quit">✕ ${t('quit')}</button>`}
function startLocal(){
  saveForm();botChar=null;finishId++;setup();firstDone=0;winner=null;endNote='';boardNote='';panel='race';lastCount=0;
  if(mode==='practice'){state='race';startT=performance.now();sfx.go()}
  else{state='count';startT=performance.now()+3000}
  raceOv();
}
function leaveRoom(){if(net){net.send({t:'bye'});net.close()}clearRoomParam();invite=false;onTab='create';si=0;state='menu';menu()}
ov.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;const gp=b.parentElement.dataset.g,act=b.dataset.act;
  sfx.tap();
  if(act==='menu'&&mode==='practice'&&state==='race'){state='menu';menu();return}
  if(act==='quit'){ov.innerHTML=`<div class="panel confirm" role="dialog" aria-label="${t('quitQ')}"><p><b>${t('quitQ')}</b></p><div class="row"><button class="sec" data-act="keep">${t('keep')}</button><button class="go small" data-act="quityes">${t('quitYes')}</button></div></div>`;return}
  if(act==='keep'){if(state==='race'||state==='count')raceOv();return}
  if(act==='quityes'){if(mode==='online'){leaveRoom();return}finishId++;state='menu';si=0;menu();return}
  if(gp==='mode'){saveForm();mode=b.dataset.v;menu();return}
  if(gp==='diff'){saveForm();diff=+b.dataset.v;store.set('cr-diff',String(diff));menu();return}
  if(gp==='char'){saveForm();myChar=b.dataset.v;store.set('cr-char',myChar);menu();return}
  if(gp==='char2'){saveForm();p2Char=b.dataset.v;store.set('cr-char2',p2Char);menu();return}
  if(gp==='otab'){saveForm();onTab=b.dataset.v;menu();return}
  if(gp==='cap'){saveForm();cap=+b.dataset.v;store.set('cr-cap',String(cap));menu();return}
  if(gp==='period'){lbPeriod=b.dataset.v;loadBoard();return}
  if(act==='next'){saveForm();si++;menu();return}
  if(act==='back'){saveForm();si--;menu();return}
  if(act==='uninvite'){clearRoomParam();invite=false;onTab='create';mode='solo';si=0;menu();return}
  if(act==='board'){saveForm();loadBoard();return}
  if(act==='start'){if(mode==='online'){menu();return}startLocal();return}
  if(act==='menu'){menu();return}
  if(act==='home'){si=0;menu();return}
  if(act==='create'||act==='join'){
    saveForm();
    if(!myName()){const i=document.getElementById('nick');i.focus();i.style.borderColor='#ff8a2a';return}
    let code;
    if(act==='join'){code=codeDraft;if(code.length!==4){say(t('badCode'));const c=document.getElementById('code');if(c){c.focus();c.style.borderColor='#ff8a2a'}return}}
    else code=newCode();
    qs.set('room',code);history.replaceState(null,'','?'+qs.toString());
    joinRoom(code,act==='create'?cap:null);panel='lobby';lobby();return}
  if(act==='ready'&&net){net.me.ready=true;net.hello();endNote='';maybeStart();refreshPanel(true);return}
  if(act==='startnow'&&net){maybeStart(true);return}
  if(act==='leave'){leaveRoom();return}
  if(act==='copylink'&&net){copyText(roomLink(net.code),t('copied'));return}
  if(act==='sharelink'&&net){navigator.share({title:t('title'),text:t('invite'),url:roomLink(net.code)}).catch(()=>{});return}
  if(act==='card'){showCard();return}
  if(act==='sharepic'){sharePic();return}
  if(act==='savepic'){savePic();return}
  if(act==='backres'){results();return}
  if(act==='copy'){copyText(shareMsg(),t('copyOk'))}
});
ov.addEventListener('keydown',e=>{if(e.key==='Enter'&&(e.target.id==='nick'||e.target.id==='code')){const b=ov.querySelector('.nav button.go');if(b)b.click()}});
ov.addEventListener('input',e=>{if(e.target.id==='code'){const v=e.target.value.replace(/\D/g,'').slice(0,4);if(v!==e.target.value)e.target.value=v;codeDraft=v}});

// ---------- input: draw circles ----------
const ptr=new Map();
function who(y){if(mode!=='duo')return me;return y-cv.getBoundingClientRect().top<HUD+(H-HUD)/2?racers[0]:racers[1]}
cv.addEventListener('pointerdown',e=>{try{cv.setPointerCapture(e.pointerId)}catch(err){}ptr.set(e.pointerId,{c:who(e.clientY),cx:e.clientX,cy:e.clientY,pa:null,sum:0})});
function moveP(p,x,y){
  p.cx+=(x-p.cx)*.07;p.cy+=(y-p.cy)*.07;
  const dx=x-p.cx,dy=y-p.cy;if(dx*dx+dy*dy<144){p.pa=null;return}
  const a=Math.atan2(dy,dx);
  if(p.pa!=null){let d=a-p.pa;if(d>Math.PI)d-=2*Math.PI;if(d<-Math.PI)d+=2*Math.PI;if(Math.abs(d)<1.3){p.sum=p.sum*.9+d;feed(p.c,Math.abs(p.sum)>.15?d*Math.sign(p.sum):0)}}
  p.pa=a;
}
cv.addEventListener('pointermove',e=>{const p=ptr.get(e.pointerId);if(!p||(state!=='race'&&state!=='count'))return;if(!p.c)p.c=who(e.clientY);const evs=e.getCoalescedEvents?e.getCoalescedEvents():[];(evs.length?evs:[e]).forEach(v=>moveP(p,v.clientX,v.clientY))});
const up=e=>{ptr.delete(e.pointerId)};
cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
addEventListener('keydown',e=>{
  if(e.repeat||state!=='race'||e.target.tagName==='INPUT')return;const k=e.key.toLowerCase();let c=null;
  if(k==='d'||k==='arrowright'||k===' ')c=mode==='duo'?racers[0]:me;
  else if((k==='l'||k==='enter')&&mode==='duo')c=racers[1];
  if(c){e.preventDefault();feed(c,1.6)}
});

// test hook for rendering sample pictures (only with ?cardtest=1)
if(qs.get('cardtest')==='1')window.__card=o=>{
  mode=o.mode||'solo';diff=o.diff??1;myChar=o.ch||'cat';if(o.nick!=null)store.set('cr-nick',o.nick);setup();
  const meR=mode==='solo'?racers[1]:racers[0];me=meR;
  racers.forEach((r,i)=>{r.done=null;r.top=(o.other||200)/60});
  meR.top=o.rpm/60;meR.done=o.time;
  if(mode==='solo'){const bot=racers[0];if(!o.win){bot.done=o.time-700}winner=o.win?meR:bot}
  state='done';return resultCard().toDataURL('image/png');
};
if(qs.get('cardtest')==='1')window.__sound=async(name,dur)=>{
  const sr=44100,oc=new OfflineAudioContext(1,Math.round(sr*dur),sr);oc.isOffline=true;
  const keep=[AC,master,sfxBus,musicBus,noiseBuf,SND.sfx];
  AC=oc;master=oc.createGain();master.gain.value=.8;master.connect(oc.destination);sfxBus=oc.createGain();sfxBus.connect(master);musicBus=oc.createGain();musicBus.connect(master);SND.sfx=true;
  noiseBuf=oc.createBuffer(1,sr,sr);const nd=noiseBuf.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
  sfx[name]();const buf=await oc.startRendering();[AC,master,sfxBus,musicBus,noiseBuf,SND.sfx]=keep;
  const x=buf.getChannelData(0),n=x.length,ab=new ArrayBuffer(44+n*2),v=new DataView(ab),w=(o,str)=>{for(let i=0;i<str.length;i++)v.setUint8(o+i,str.charCodeAt(i))};
  w(0,'RIFF');v.setUint32(4,36+n*2,true);w(8,'WAVE');w(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*2,true);
  for(let i=0;i<n;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,x[i]))*32767,true);
  let bin='';const u=new Uint8Array(ab);for(let i=0;i<u.length;i+=8192)bin+=String.fromCharCode.apply(null,u.subarray(i,i+8192));return btoa(bin);
};
applyLang();menu();requestAnimationFrame(loop);
}

