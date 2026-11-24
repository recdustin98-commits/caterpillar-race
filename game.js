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
  startNow:'Start now with {k} ready',autoStart:'The race starts when everyone is ready.',inProgress:'A race is running. You\'ll join the next one.',
  leave:'Leave',full:'This race is full (8 players).',offline:'Could not connect. Check your internet and try again.',back:'Back',
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
  boardRank:'Leaderboard: you\'re #{r} of {n} in the last 24 hours',boardNoNick:'Add a nickname on the start screen to join the leaderboard.',boardFail:'Couldn\'t save to the leaderboard.',loading:'Loading…',boardNote:'Your best time counts once per period.',
  character:'Character',ch_cat:'Caterpillar',ch_inch:'Inchworm',ch_centi:'Centipede',ch_turtle:'Sea turtle',huff:'Huff!',phew:'Phew~',yay:'Yay!'},
 ko:{title:'애벌레 경주',intro:'손가락으로 화면에 <b>원을 그리세요</b>. 바퀴를 돌리듯 빨리 돌릴수록 빨리 기어갑니다. 멈추면 애벌레도 멈춰요.',
  foot:'컴퓨터, 같은 폰의 친구, 또는 각자 폰으로 최대 8명이 온라인으로 경주하세요. 컴퓨터에서는 마우스로 원을 그리세요.',
  ready:'경주 준비됐나요?',vsCpu:'컴퓨터',duo:'폰 1대 2명',online:'온라인 (2–8명)',easy:'쉬움',normal:'보통',hard:'어려움',
  play:'시작',best:'{d} 최고 기록: {t}',nobest:'{d} 기록이 아직 없어요.',duoHint:'1번은 위쪽 절반, 2번은 아래쪽 절반에 원을 그립니다.',
  nick:'닉네임',create:'경주방 만들기',joinT:'경주 참가',join:'참가',joining:'연결 중…',
  onlineHint:'링크가 만들어져요. 친구 최대 7명에게 보내세요. 각자 자기 폰으로 경주합니다.',
  room:'경주방',shareHint:'이 링크를 친구들에게 보내세요 (최대 8명):',copy:'링크 복사',share:'공유',copied:'복사됨!',
  waiting:'친구들이 들어오기를 기다리는 중…',readyBtn:'준비 완료',readyCount:'{n}명 중 {r}명 준비',isReady:'준비',notReady:'대기',
  startNow:'준비된 {k}명으로 지금 시작',autoStart:'모두 준비하면 경주가 시작돼요.',inProgress:'경주가 진행 중이에요. 다음 판에 참가해요.',
  leave:'나가기',full:'이 경주방은 꽉 찼어요 (8명).',offline:'연결할 수 없어요. 인터넷을 확인하고 다시 시도하세요.',back:'뒤로',
  you:'나',cpu:'컴퓨터',p1:'1번 선수',p2:'2번 선수',youWin:'승리!',cpuWin:'컴퓨터 승리',wins:'{n} 승리!',place:'{n}명 중 {p}',
  rank:'순위',racer:'선수',time:'기록',topRpm:'최고 RPM',rematch:'한 판 더',change:'모드 바꾸기',copyRes:'결과 복사',
  newBest:'{d} 신기록!',firstBest:'{d} 첫 기록 저장.',leftTag:'나감',dnf:'—',
  drawHere:'여기에 원을 그리세요',go:'출발!',copyOk:'복사했어요. 친구에게 붙여넣으세요.',
  shareSolo:'애벌레 경주 ({d}): {r}{t}, 최고 {rpm} RPM. 이길 수 있어요?',won:'이겼어요',lost:'졌어요',
  shareOnline:'애벌레 경주: {n}명 중 {p}{t}! 같이 해요: {u}',invite:'애벌레 경주 한판 해요!',waitingName:'대기 중…',host:'방장',
  practice:'연습',practiceHint:'원 그리기를 연습해요. 상대도, 결승선도, 기록도 없어요.',start:'시작',done:'끝내기',
  tipStart:'화면 아무 곳에나 원을 그리세요',tipFaster:'더 빨리! 작고 빠르게 돌려보세요',tipSteady:'좋은 리듬이에요, 계속 유지하세요',tipRed:'최대 출력!',
  goal:'목표: 300 RPM 이상 5초 유지',goalDone:'목표 달성! 300 RPM 이상 5초',holdLbl:'300+ RPM 유지',topLbl:'최고 RPM',
  board:'순위표',boardTitle:'가장 빠른 애벌레',p24:'24시간',p7:'7일',pAll:'전체',nickOpt:'닉네임 (순위표용)',
  boardEmpty:'아직 기록이 없어요. 첫 번째가 되어 보세요!',boardErr:'순위표를 불러올 수 없어요. 인터넷을 확인하세요.',boardSaving:'순위표에 저장 중…',
  boardRank:'순위표: 최근 24시간 {n}명 중 {r}위',boardNoNick:'시작 화면에서 닉네임을 넣으면 순위표에 올라가요.',boardFail:'순위표에 저장하지 못했어요.',loading:'불러오는 중…',boardNote:'기간마다 최고 기록 하나만 올라가요.',
  character:'캐릭터',ch_cat:'애벌레',ch_inch:'자벌레',ch_centi:'지네',ch_turtle:'바다거북',huff:'헉헉',phew:'휴~',yay:'야호!'}
};
let lang=store.get('cr-lang')||((navigator.language||'').toLowerCase().startsWith('ko')?'ko':'en');
const t=(k,v={})=>(L[lang][k]||L.en[k]||k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');
const ord=p=>lang==='ko'?p+'등':p+(p%10===1&&p%100!==11?'st':p%10===2&&p%100!==12?'nd':p%10===3&&p%100!==13?'rd':'th');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function applyLang(){document.documentElement.lang=lang;document.title=t('title');document.getElementById('h1').textContent=t('title');document.getElementById('intro').innerHTML=t('intro');document.getElementById('foot').textContent=t('foot');document.getElementById('lang').textContent=lang==='ko'?'English':'한국어'}
document.getElementById('lang').addEventListener('click',()=>{lang=lang==='ko'?'en':'ko';store.set('cr-lang',lang);applyLang();refreshPanel(true)});

// ---------- canvas ----------
const cv=document.getElementById('cv'),ctx=cv.getContext('2d'),ov=document.getElementById('ov');
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let W=0,H=0,DPR=1;
const resize=()=>{DPR=Math.min(2,window.devicePixelRatio||1);W=cv.clientWidth;H=cv.clientHeight;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR)};
const ro=new ResizeObserver(resize);ro.observe(cv);resize();

// ---------- game model ----------
const TRACK=2400,START=40,HUD=30;
const N=10,SP=13,STEP=34,DELTA=.6,LIFT=13,GAIN=1.4,CAP=52,MAXRPM=500,REDRPM=400;
const KMH=100/(STEP*GAIN*CAP/(2*Math.PI)),MAXKMH=100;
const g=p=>(p-Math.sin(p))/(2*Math.PI);
const headOff=phi=>(N-1)*SP+STEP*g(phi-(N-1)*DELTA);
const X0=START+120-headOff(0),S0=START+120;
const CHARS=['cat','inch','centi','turtle'];
const SIG={cat:{body:'#6fd14a',dark:'#2f7d1f',spot:'#ffd23f'},inch:{body:'#a6e86a',dark:'#3f8a24',spot:'#fff6a8'},centi:{body:'#c9b3ff',dark:'#7d5fd1',spot:'#ffadc8'},turtle:{body:'#5fc79a',dark:'#2e7d5b',spot:'#ffe27a'}};
// Every character moves the same average distance per turn (fair races); only the look differs.
function headPos(ch,phi){
  if(ch==='inch')return S0+2*STEP*g(phi/2);
  if(ch==='centi'||ch==='turtle')return S0+STEP*phi/(2*Math.PI);
  return X0+headOff(phi);
}
const headX=c=>headPos(c.char||'cat',c.phi);
const prog=c=>Math.max(0,Math.min(1,(headX(c)-S0)/(TRACK-S0)));
const DIFF=[{k:'easy',w:9},{k:'normal',w:14},{k:'hard',w:19}];
const SK=[['#6fd14a','#2f7d1f','#ffd23f'],['#ff9a3c','#b5560e','#fff1a8'],['#4fb3ff','#1f6ea8','#ffffff'],['#ff6b9a','#b02d5c','#ffffff'],['#b38bff','#5e3bb0','#ffffff'],['#ffd23f','#9a7a05','#ffffff'],['#3fd6c6','#13806f','#ffffff'],['#ff5b4f','#a32118','#ffe9a8']].map(([body,dark,spot])=>({body,dark,spot}));
let myChar=CHARS.includes(store.get('cr-char'))?store.get('cr-char'):'cat',botChar=null;
let mode=qs.get('room')?'online':'solo',diff=1,state='menu',startT=0,firstDone=0,endEl=0,winner=null,racers=[],me=null,endNote='';
const hash=k=>{const s=Math.sin(k*127.1+311.7)*43758.5453;return s-Math.floor(s)};
const fmt=ms=>(ms/1000).toFixed(2)+(lang==='ko'?'초':'s');
const rpmOf=w=>Math.max(0,w)*60/(2*Math.PI);

const mk=(sk,name,kind,id,ch)=>({...sk,id,name,char:CHARS.includes(ch)?ch:'cat',kind:kind||'human',phi:0,acc:0,w:0,spin:0,top:0,done:null,left:false,ph:Math.random()*6,pv:0,disp:0,bt:0,btw:0,tphi:0,tw:0,rt:0,ang:0,px:null,vs:0,kmh:0,hold:0,bestHold:0,goalDone:false});
function setup(ids){
  if(mode==='solo'){racers=[mk(SK[2],t('cpu'),'bot',null,botChar||(botChar=CHARS[Math.floor(Math.random()*CHARS.length)])),mk(SIG[myChar],myName()||t('you'),'human',null,myChar)];me=racers[1]}
  else if(mode==='practice'){racers=[mk(SIG[myChar],myName()||t('you'),'human',null,myChar)];me=racers[0]}
  else if(mode==='duo'){racers=[mk(SIG[myChar],t('p1'),'human',null,myChar),mk(SK[1],t('p2'),'human',null,myChar)];me=null}
  else{
    const mem=net?net.members():[];
    const list=ids||mem.map(p=>p.id);
    racers=list.map((id,i)=>{const p=mem.find(x=>x.id===id)||(net&&net.peers.get(id));return mk(SK[i%8],id===myId?(net?net.me.name:myName()):(p?p.name:'?'),id===myId?'human':'remote',id,id===myId?myChar:(p&&p.ch))});
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
    if(mode==='practice'){if(rpmOf(sp)>=300){c.hold+=dt/1000;c.bestHold=Math.max(c.bestHold,c.hold);if(c.hold>=5&&!c.goalDone){c.goalDone=true;c.goalAt=now}}else c.hold=0}
    else if(headX(c)>=TRACK){c.done=now-startT;if(!firstDone)firstDone=now;if(mode==='online'&&c===me&&net)net.send({t:'fin',time:c.done,spin:c.spin,top:c.top})}
  }
  const hx=headX(c);if(c.px!=null&&dt>0){const v=(hx-c.px)/dt*1000;c.vs+=(v-c.vs)*(1-Math.exp(-dt/350))}c.px=hx;c.kmh=Math.max(0,c.vs)*KMH;
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
  for(let i=0;i<N;i++){const psi=c.phi-i*DELTA,lift=LIFT*(1-Math.cos(psi))/2,r=10+3*Math.sin(Math.PI*(i+1)/(N+1));seg.push({x:X0+i*SP+STEP*g(psi),y:base-r-lift+(i%2?br:-br),r,lift})}
  if(!ghost){const x0=seg[0].x,x1=seg[N-1].x;ctx.fillStyle='rgba(30,60,20,.22)';ctx.beginPath();ctx.ellipse((x0+x1)/2+6,base+1,(x1-x0)/2+20,4,0,0,7);ctx.fill()}
  ctx.fillStyle=c.dark;
  seg.forEach(s=>{const down=s.lift<2.5,ly=down?base-1:s.y+s.r-1;ctx.beginPath();ctx.ellipse(s.x-3,ly,3.2,down?2.8:2,0,0,7);ctx.ellipse(s.x+4,ly,3.2,down?2.8:2,0,0,7);ctx.fill()});
  for(let i=0;i<N;i++){const s=seg[i];ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(255,255,255,.35)';ctx.beginPath();ctx.arc(s.x-3,s.y-4,s.r*.35,0,7);ctx.fill();if(i%2){ctx.fillStyle=c.spot;ctx.beginPath();ctx.arc(s.x+1,s.y-s.r*.55,2.4,0,7);ctx.fill()}}
  const hs=seg[N-1],hx=hs.x+13,hy=hs.y-7;
  const a=RM?0:Math.sin(now/140+c.ph)*.2+Math.min(.5,sp*.02)*Math.sin(now/60);
  ctx.strokeStyle=c.dark;ctx.lineWidth=2.5;ctx.lineCap='round';
  [[-5,-1.85],[6,-1.3]].forEach(([dx,b])=>{const ang=b+a,sx=hx+dx,sy=hy-14,ex=sx+Math.cos(ang)*22,ey=sy+Math.sin(ang)*22;ctx.beginPath();ctx.moveTo(sx,sy);ctx.quadraticCurveTo(sx+3,sy-14,ex,ey);ctx.stroke();ctx.fillStyle='#ff4f6d';ctx.beginPath();ctx.arc(ex,ey,4,0,7);ctx.fill()});
  ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(hx,hy,17,0,7);ctx.fill();ctx.stroke();
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
  ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=2.2;ctx.beginPath();ctx.arc(hx,hy,12,0,7);ctx.fill();ctx.stroke();
  return {x:hx,y:hy,r:12};
}
function drawCenti(c,now){
  const base=178,hx=headX(c),hy=base-13,n=10;
  ctx.fillStyle='rgba(30,60,20,.2)';ctx.beginPath();ctx.ellipse(hx-62,base+2,72,3.5,0,0,7);ctx.fill();
  const segs=[];for(let i=1;i<=n;i++){const psi=c.phi*1.6-i*.75;segs.push({x:hx-13-(i-1)*12,y:hy+1+Math.sin(psi)*1.1,psi})}
  ctx.lineCap='round';
  segs.forEach(s=>{const sw=Math.sin(s.psi)*5,lift=Math.max(0,Math.cos(s.psi))*4;ctx.strokeStyle=c.spot;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(s.x,s.y+4);ctx.lineTo(s.x+sw,base-1-lift);ctx.stroke();ctx.fillStyle=c.spot;ctx.beginPath();ctx.arc(s.x+sw,base-1-lift,1.8,0,7);ctx.fill()});
  const last=segs[n-1];ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(last.x-6,last.y);ctx.quadraticCurveTo(last.x-14,last.y-4,last.x-20,last.y+3);ctx.stroke();
  for(let i=n-1;i>=0;i--){const s=segs[i];ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=1.8;ctx.beginPath();ctx.ellipse(s.x,s.y,7.5,7,0,0,7);ctx.fill();ctx.stroke();if(i%2){ctx.fillStyle='#fff6a8';ctx.beginPath();ctx.arc(s.x,s.y-3.5,1.8,0,7);ctx.fill()}}
  const a=RM?0:Math.sin(now/120+c.ph)*.18;ctx.strokeStyle=c.dark;ctx.lineWidth=2;
  [[2,-1.5,22],[6,-.95,22]].forEach(([dx,bb,L])=>{const an=bb+a,sx=hx+dx,sy=hy-10;ctx.beginPath();ctx.moveTo(sx,sy);ctx.quadraticCurveTo(sx+6,sy-12,sx+Math.cos(an)*L,sy+Math.sin(an)*L);ctx.stroke();ctx.fillStyle=c.spot;ctx.beginPath();ctx.arc(sx+Math.cos(an)*L,sy+Math.sin(an)*L,3,0,7);ctx.fill()});
  ctx.fillStyle=c.body;ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.arc(hx,hy,13,0,7);ctx.fill();ctx.stroke();
  return {x:hx,y:hy,r:13};
}
function drawTurtle(c,now){
  const base=178,hx=headX(c),cy=base-42+(RM?0:Math.sin(now/420+c.ph)*3),sx=hx-34,skin='#bff0d8',sp=Math.min(CAP,Math.max(0,c.w));
  ctx.fillStyle='rgba(20,40,60,.15)';ctx.beginPath();ctx.ellipse(sx,base+2,34,4,0,0,7);ctx.fill();
  const flip=(px,py,len,wid,ang,far)=>{ctx.save();ctx.translate(px,py);ctx.rotate(ang);ctx.fillStyle=far?'#9fd9be':skin;ctx.strokeStyle=c.dark;ctx.lineWidth=1.8;ctx.beginPath();ctx.ellipse(len*.55,0,len*.6,wid,0,0,7);ctx.fill();ctx.stroke();ctx.restore()};
  flip(sx+14,cy+5,22,5.5,.9+Math.sin(c.ang+1.2)*.8,true);
  flip(sx-24,cy+5,11,4,2.4+Math.sin(c.ang+Math.PI)*.5,true);
  ctx.fillStyle=skin;ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(hx-12,cy-1,12,6,-.15,0,7);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(sx,cy,32,21,0,Math.PI,0);ctx.ellipse(sx,cy,32,7,0,0,Math.PI);ctx.fillStyle=c.body;ctx.fill();ctx.strokeStyle=c.dark;ctx.lineWidth=2.2;ctx.stroke();
  ctx.strokeStyle=c.dark;ctx.lineWidth=1.4;ctx.globalAlpha*=.6;[[-14,-8],[0,-13],[14,-8]].forEach(([dx,dy])=>{ctx.beginPath();ctx.ellipse(sx+dx,cy+dy,7,5.5,0,0,7);ctx.stroke()});ctx.globalAlpha/=.6;
  ctx.fillStyle='#fff8d0';ctx.beginPath();ctx.ellipse(sx,cy+3,28,3,0,0,7);ctx.fill();
  flip(sx+16,cy+6,24,6,.6+Math.sin(c.ang)*.9,false);
  flip(sx-22,cy+6,12,4.5,2.6+Math.sin(c.ang+Math.PI*.8)*.5,false);
  ctx.fillStyle=skin;ctx.strokeStyle=c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.arc(hx,cy-3,12,0,7);ctx.fill();ctx.stroke();
  if(sp>8&&!RM)for(let i=0;i<3;i++){const tt=((now/(900-sp*10))+i/3)%1;ctx.strokeStyle=`rgba(255,255,255,${.9*(1-tt)})`;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(hx+12+tt*5,cy-8-tt*34,2+tt*2.5,0,7);ctx.stroke()}
  return {x:hx,y:cy-3,r:12};
}
function exprOf(c){
  if(mode==='practice')return state==='race'?(c.disp>=REDRPM?'red':c.disp>=200?'fast':'slow'):'slow';
  if(c.done!=null){const fin=racers.filter(r=>r.done!=null).sort((a,b)=>a.done-b.done);return fin[0]===c?'win':'lose'}
  if(state==='done')return c===winner?'win':'lose';
  if(state==='count')return 'ready';
  if(state!=='race')return 'slow';
  return c.disp>=REDRPM?'red':c.disp>=200?'fast':'slow';
}
function drop(x,y,s,a){ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#6cc4ff';ctx.strokeStyle='#2a8fd0';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,-6);ctx.quadraticCurveTo(4.5,0,0,4);ctx.quadraticCurveTo(-4.5,0,0,-6);ctx.fill();ctx.stroke();ctx.restore()}
// One face, six moods. Drawn in units of a 17px head, facing right, centred on the head.
function face(cx,cy,r,ex,now,c){
  const ink='#14301f';ctx.save();ctx.translate(cx,cy);ctx.scale(r/17,r/17);
  if(ex==='ready'&&!RM)ctx.translate(Math.sin(now/35)*.9,0);
  if(ex==='red'){ctx.fillStyle='rgba(255,70,70,.2)';ctx.beginPath();ctx.arc(0,0,17,0,7);ctx.fill()}
  const eye=(x,y,s,px,big)=>{ctx.fillStyle='#fff';ctx.strokeStyle=ink;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,y,s,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=ink;ctx.beginPath();ctx.arc(x+px,y+1,s*(big?.55:.42),0,7);ctx.fill();if(big){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x+px+1,y-1,s*.2,0,7);ctx.fill()}};
  const cheeks=(col)=>{ctx.fillStyle=col;ctx.beginPath();ctx.arc(10,6,4,0,7);ctx.fill();ctx.beginPath();ctx.arc(-9,6,3.4,0,7);ctx.fill()};
  ctx.lineCap='round';ctx.lineJoin='round';
  if(ex==='slow'){
    cheeks('rgba(255,110,130,.5)');
    const blink=!RM&&((now+c.ph*997)%3400)<130;
    if(blink){ctx.strokeStyle=ink;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-5,-5);ctx.lineTo(5,-5);ctx.moveTo(7,-4);ctx.lineTo(15,-4);ctx.stroke()}
    else{eye(0,-5,6.5,1.5+c.pv);eye(11,-4,5.5,1.5+c.pv)}
    ctx.strokeStyle=ink;ctx.lineWidth=2;ctx.beginPath();ctx.arc(6,3,6,.2,Math.PI-.6);ctx.stroke();
  }else if(ex==='ready'){
    cheeks('rgba(255,110,130,.55)');eye(0,-5,6.8,1.5,true);eye(11,-4,5.8,1.5,true);
    ctx.strokeStyle=ink;ctx.lineWidth=1.8;ctx.beginPath();ctx.arc(7,7,2.6,0,7);ctx.stroke();
  }else if(ex==='fast'){
    cheeks('rgba(255,80,80,.55)');
    ctx.strokeStyle=ink;ctx.lineWidth=2.6;ctx.beginPath();ctx.moveTo(-6,-13);ctx.lineTo(4,-9.5);ctx.moveTo(7,-9.5);ctx.lineTo(16,-12.5);ctx.stroke();
    ctx.fillStyle='#fff';ctx.strokeStyle=ink;ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(0,-4,6,3.6,0,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(11,-4,5,3.2,0,0,7);ctx.fill();ctx.stroke();
    ctx.fillStyle=ink;ctx.beginPath();ctx.arc(2,-4,2.3,0,7);ctx.arc(13,-4,2,0,7);ctx.fill();
    ctx.fillStyle='#fff';ctx.strokeStyle=ink;ctx.lineWidth=1.5;rr(-1,3,15,7,2);ctx.fill();ctx.stroke();
    ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(4,3);ctx.lineTo(4,10);ctx.moveTo(9,3);ctx.lineTo(9,10);ctx.moveTo(-1,6.5);ctx.lineTo(14,6.5);ctx.stroke();
    if(!RM)for(let i=0;i<3;i++){const tt=((now/520)+i/3)%1;drop(-15-tt*20,-13+tt*12-Math.sin(tt*Math.PI)*6,.9,1-tt)}
  }else if(ex==='red'){
    cheeks('rgba(255,70,70,.7)');
    ctx.strokeStyle=ink;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(-5,-9);ctx.lineTo(2,-5);ctx.lineTo(-5,-1);ctx.moveTo(15,-8);ctx.lineTo(8,-4);ctx.lineTo(15,0);ctx.stroke();
    ctx.fillStyle='#7a1f2b';ctx.strokeStyle=ink;ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(7,7,6.5,5.5,0,0,7);ctx.fill();ctx.stroke();
    ctx.fillStyle='#ff7fa3';ctx.beginPath();ctx.moveTo(4,9);ctx.quadraticCurveTo(8,18,12,9);ctx.fill();
    if(!RM){for(let i=0;i<5;i++){const tt=((now/330)+i/5)%1,side=i%2?1:-1;drop(side>0?16+tt*14:-15-tt*20,-14+tt*14-Math.sin(tt*Math.PI)*8,.9,1-tt)}
      for(let i=0;i<3;i++){const tt=((now/700)+i/3)%1;ctx.fillStyle=`rgba(255,255,255,${.85*(1-tt)})`;ctx.beginPath();ctx.arc(-6+i*8,-22-tt*20,3.5+tt*4,0,7);ctx.fill()}
      if(Math.floor(now/450)%2){ctx.font='800 11px "Baloo 2",sans-serif';ctx.fillStyle='#a32118';ctx.textAlign='left';ctx.fillText(t('huff'),20,14)}}
  }else if(ex==='win'){
    cheeks('rgba(255,110,150,.7)');
    ctx.strokeStyle=ink;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(-6,-3);ctx.quadraticCurveTo(0,-11,5,-3);ctx.moveTo(7,-3);ctx.quadraticCurveTo(11.5,-10,16,-3);ctx.stroke();
    ctx.fillStyle='#7a1f2b';ctx.strokeStyle=ink;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-2,3);ctx.quadraticCurveTo(7,20,16,3);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#ff7fa3';ctx.beginPath();ctx.moveTo(3,9);ctx.quadraticCurveTo(7,15,11,9);ctx.fill();
    if(!RM)for(let i=0;i<4;i++){const an=now/600+i*Math.PI/2,x=Math.cos(an)*26,y=Math.sin(an)*20-6;ctx.fillStyle='#ffd23f';ctx.beginPath();for(let k=0;k<8;k++){const rr2=k%2?1.6:4.5,aa=k*Math.PI/4;ctx.lineTo(x+Math.cos(aa)*rr2,y+Math.sin(aa)*rr2)}ctx.fill()}
    ctx.font='800 12px "Baloo 2",sans-serif';ctx.fillStyle='#a35a00';ctx.textAlign='left';ctx.fillText(t('yay'),20,-16);
  }else{ // lose
    cheeks('rgba(255,110,130,.4)');
    ctx.strokeStyle=ink;ctx.lineWidth=1.4;[[0,-5,6],[11,-4,5]].forEach(([x,y,s])=>{ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y,s,0,7);ctx.fill();ctx.stroke();ctx.beginPath();for(let a=0;a<4*Math.PI;a+=.3){const rr2=s*.85*a/(4*Math.PI),aa=a+(RM?0:now/200);ctx.lineTo(x+Math.cos(aa)*rr2,y+Math.sin(aa)*rr2)}ctx.stroke()});
    ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(1,7);ctx.quadraticCurveTo(4,5,7,7);ctx.quadraticCurveTo(10,9,13,7);ctx.stroke();
    drop(15,-12,.8,1);
    ctx.font='800 11px "Baloo 2",sans-serif';ctx.fillStyle='#3b5a49';ctx.textAlign='left';ctx.fillText(t('phew'),20,12);
  }
  ctx.restore();
}
function confetti(x,y,now){
  if(RM)return;const cols=['#ff6b9a','#4fb3ff','#ffd23f','#b38bff','#ff8a2a','#3fd6c6'];
  for(let k=0;k<14;k++){const tt=((now/1800)+hash(k)*1)%1,px=x+(hash(k+7)-.5)*130,py=y-70+tt*110;ctx.save();ctx.globalAlpha*=1-tt*.6;ctx.translate(px+Math.sin(now/200+k)*6,py);ctx.rotate(now/300+k);ctx.fillStyle=cols[k%6];ctx.fillRect(-3,-1.5,6,3);ctx.restore()}
}
function drawRacer(c,now,ghost){
  const ex=exprOf(c);ctx.save();
  if(ex==='win'&&!RM)ctx.translate(0,-Math.abs(Math.sin(now/170))*16);
  if(ex==='lose')ctx.translate(0,2);
  const ch=c.char||'cat';
  const hd=ch==='inch'?drawInch(c,now):ch==='centi'?drawCenti(c,now):ch==='turtle'?drawTurtle(c,now):drawCat(c,now,ghost);
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
  dial(tx,cy,R,c.disp/MAXRPM,REDRPM/MAXRPM,c.body,String(Math.round(c.disp)),'RPM',c.ang);
  return {w:4*Ro+14,h:2*Ro+16};
}
function drawLane(c,ghosts,y0,lh,now,withLabel){
  const s=lh/220,vw=W/s,prac=mode==='practice',cam=prac?headX(c)-vw*.62:Math.max(-vw*.15,Math.min(headX(c)-vw*.52,TRACK+260-vw));
  ctx.save();ctx.beginPath();ctx.rect(0,y0,W,lh);ctx.clip();ctx.translate(0,y0);ctx.scale(s,s);
  const sea=c.char==='turtle';
  const gr=ctx.createLinearGradient(0,0,0,150);gr.addColorStop(0,sea?'#1f7fc4':'#86cfff');gr.addColorStop(1,sea?'#7fd3f5':'#e6f7ff');ctx.fillStyle=gr;ctx.fillRect(0,0,vw+2,222);
  if(sea){ctx.fillStyle='rgba(255,255,255,.08)';for(let k=0;k<4;k++){const x=((k*170-cam*.08)%(vw+200)+vw+200)%(vw+200)-100;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+40,0);ctx.lineTo(x+90,150);ctx.lineTo(x+20,150);ctx.fill()}
    for(let k=0;k<10;k++){const span=vw+40,x=((hash(k)*span-cam*.2)%span+span)%span,y=150-((now/40*(0.5+hash(k+3))+hash(k+5)*150)%150);ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(x,y,2+hash(k+9)*3,0,7);ctx.stroke()}}
  else for(let k=0;k<4;k++){const span=vw+320,cx=((k*span/4+60-cam*.12)%span+span)%span-160,cy=26+hash(k)*40;ctx.fillStyle='rgba(255,255,255,.92)';ctx.beginPath();ctx.arc(cx,cy,15,0,7);ctx.arc(cx+18,cy-8,19,0,7);ctx.arc(cx+38,cy,14,0,7);ctx.fill()}
  hills(vw,cam*.25,116,sea?'#3e98b8':'#acdf8e',90,16);hills(vw,cam*.45,134,sea?'#5ab3bd':'#86cc66',60,11);
  ctx.translate(-cam,0);
  ctx.fillStyle=sea?'#e3cf94':'#5cb83c';ctx.fillRect(cam,148,vw+2,74);ctx.fillStyle=sea?'#f0dfab':'#dcb57d';ctx.fillRect(cam,160,vw+2,34);ctx.fillStyle=sea?'#d2bb7a':'#c39459';ctx.fillRect(cam,192,vw+2,3);
  for(let k=Math.floor(cam/55);k<(cam+vw)/55+1;k++){const q=hash(k);if(q<.5){ctx.fillStyle='#b9894f';ctx.beginPath();ctx.ellipse(k*55+q*40,166+hash(k+9)*22,3+q*3,2+q*2,0,0,7);ctx.fill()}}
  const pet=['#ff6b8a','#ffd23f','#ffffff','#ff9a3c'];
  if(sea)for(let k=Math.floor(cam/70)-1;k<(cam+vw)/70+1;k++){const q=hash(k*3.1),x=k*70+q*50;ctx.lineCap='round';for(let i=0;i<3;i++){const sw=RM?0:Math.sin(now/600+k+i)*5;ctx.strokeStyle=i%2?'#2f9e5e':'#47b874';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x+i*5,155);ctx.quadraticCurveTo(x+i*5+sw,140-q*10,x+i*5+sw*1.6,122-q*16);ctx.stroke()}
    if(q>.6){const fx=x+26;['#ff8fa3','#ffb26b','#ff8fa3'].forEach((cc,j)=>{ctx.fillStyle=cc;ctx.beginPath();ctx.arc(fx+j*6-6,150-j%2*5,4,0,7);ctx.fill()})}}
  else for(let k=Math.floor(cam/70)-1;k<(cam+vw)/70+1;k++){const q=hash(k*3.1),x=k*70+q*50;ctx.strokeStyle='#3f9a2a';ctx.lineWidth=2;ctx.lineCap='round';for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x+i*4,153);ctx.lineTo(x+i*5-3,139-q*8);ctx.stroke()}
    if(q>.62){const fx=x+22,fy=120+hash(k)*12;ctx.strokeStyle='#2f8a24';ctx.beginPath();ctx.moveTo(fx,154);ctx.lineTo(fx,fy);ctx.stroke();ctx.fillStyle=pet[Math.floor(hash(k+5)*4)];for(let j=0;j<5;j++){const an=j*1.2566;ctx.beginPath();ctx.arc(fx+Math.cos(an)*5.5,fy+Math.sin(an)*5.5,4.5,0,7);ctx.fill()}ctx.fillStyle='#7a4a12';ctx.beginPath();ctx.arc(fx,fy,3,0,7);ctx.fill()}}
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
    ctx.fillStyle=c.body;ctx.beginPath();ctx.arc(23,y0+20,6,0,7);ctx.fill();ctx.fillStyle='#14301f';ctx.fillText(tx,34,y0+21);
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
const ROWH=22;
function stripH(){return 8+ROWH*Math.max(2,racers.length)}
function strip(y0,h){
  ctx.fillStyle='#173b28';ctx.fillRect(0,y0,W,h);
  const order=standings(),pos=new Map(order.map((c,i)=>[c,i+1]));
  const nameW=Math.min(110,W*.28),x0=nameW+18,x1=W-74;
  racers.forEach((c,i)=>{
    const y=y0+4+i*ROWH+ROWH/2;
    if(c===me){ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(0,y-ROWH/2,W,ROWH)}
    ctx.fillStyle=c.body;ctx.beginPath();ctx.arc(12,y,5,0,7);ctx.fill();
    ctx.font=(c===me?'800 ':'600 ')+'13px "Baloo 2",sans-serif';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillStyle=c.left?'rgba(255,255,255,.45)':'#fff';
    let nm=c.name;while(nm.length>1&&ctx.measureText(nm).width>nameW-6)nm=nm.slice(0,-1);if(nm!==c.name)nm=nm.slice(0,-1)+'…';
    ctx.fillText(nm,22,y+1);
    ctx.strokeStyle='rgba(255,255,255,.22)';ctx.lineWidth=3;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke();
    ctx.fillStyle='#fff';ctx.fillRect(x1+2,y-5,3,10);
    const px=x0+(x1-x0)*prog(c);ctx.fillStyle=c.body;ctx.strokeStyle=c===me?'#fff':c.dark;ctx.lineWidth=2;ctx.beginPath();ctx.arc(px,y,6,0,7);ctx.fill();ctx.stroke();
    ctx.textAlign='right';ctx.font='700 13px "Baloo 2",sans-serif';ctx.fillStyle=c.done!=null?'#ffd23f':'#cfe3d6';
    ctx.fillText(c.left?t('leftTag'):c.done!=null?fmt(c.done):(state==='race'?ord(pos.get(c)):''),W-8,y+1);
  });
}
function hud(now){
  ctx.fillStyle='#14301f';ctx.fillRect(0,0,W,HUD);
  const el=state==='race'?Math.max(0,now-startT):state==='done'?endEl:0;
  ctx.fillStyle='#fff';ctx.font='700 15px "Baloo 2",sans-serif';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(fmt(el),12,HUD/2+1);
  if(mode==='practice'){ctx.textAlign='right';ctx.fillStyle='#cfe3d6';ctx.fillText(t('practice'),W-12,HUD/2+1);return}
  if(mode==='online'){if(net){ctx.textAlign='right';ctx.fillStyle='#cfe3d6';ctx.fillText(t('room')+' '+net.code,W-12,HUD/2+1)}return}
  const x0=84,x1=W-26;
  ctx.strokeStyle='rgba(255,255,255,.28)';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x0,HUD/2);ctx.lineTo(x1,HUD/2);ctx.stroke();
  for(let yy=0;yy<3;yy++)for(let xx=0;xx<2;xx++){ctx.fillStyle=(xx+yy)%2?'#14301f':'#fff';ctx.fillRect(x1+4+xx*5,HUD/2-7.5+yy*5,5,5)}
  racers.forEach(c=>{ctx.fillStyle=c.body;ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x0+(x1-x0)*prog(c),HUD/2,7,0,7);ctx.fill();ctx.stroke()});
}
function draw(now){
  ctx.setTransform(DPR,0,0,DPR,0,0);ctx.clearRect(0,0,W,H);
  if(!racers.length)return;
  let mid;
  if(mode==='practice'){
    const c=racers[0];drawLane(c,[],HUD,H-HUD,now,false);if(state==='race')practiceInfo(c,HUD,H-HUD,now);mid=HUD+(H-HUD)/2;
  }else if(mode==='online'){
    const sh=stripH(),c=me||racers[0];strip(HUD,sh);
    drawLane(c,racers.filter(r=>r!==c),HUD+sh,H-HUD-sh,now,false);mid=HUD+sh+(H-HUD-sh)/2;
  }else{
    const lh=(H-HUD)/2;
    drawLane(racers[0],[racers[1]],HUD,lh,now,true);drawLane(racers[1],[racers[0]],HUD+lh,lh,now,true);
    ctx.fillStyle='#14301f';ctx.fillRect(0,HUD+lh-1.5,W,3);mid=HUD+lh;
  }
  hud(now);
  if(state==='count'||(state==='race'&&now-startT<600)){
    const tx=state==='count'?String(Math.max(1,Math.ceil((startT-now)/1000))):t('go');
    ctx.font='800 '+Math.round(Math.min(W,H)*.18)+'px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=10;ctx.strokeStyle='#14301f';ctx.fillStyle=state==='count'?'#fff':'#ffd23f';
    ctx.strokeText(tx,W/2,mid);ctx.fillText(tx,W/2,mid);
  }
}

// ---------- loop ----------
let last=performance.now(),lastSend=0;
function loop(now){
  const dt=Math.min(50,now-last);last=now;
  if(state==='count'&&now>=startT)state='race';
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
  draw(now);requestAnimationFrame(loop);
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
function newCode(){const a='ABCDEFGHJKMNPQRSTUVWXYZ23456789';let s='';for(let i=0;i<5;i++)s+=a[Math.floor(Math.random()*a.length)];return s}
function joinRoom(code){
  if(net)net.close();
  const peers=new Map();
  const me0={id:myId,name:myName()||t('you'),ready:false,joined:Date.now()};
  let status='connecting',hb=0,lastHi=0;
  const n={code,me:me0,peers,status:()=>status,
    send:m=>{m.id=myId;tr.send(m)},
    hello:()=>{lastHi=Date.now();const h={t:'hi',name:me0.name,ready:me0.ready,joined:me0.joined,ph:state,ch:myChar};if(state==='count'&&curIds){h.rid=curRid;h.ids=curIds;h.left=Math.max(0,startT-performance.now())}n.send(h)},
    all:()=>[me0,...[...peers.values()]].sort((a,b)=>a.joined-b.joined||(a.id<b.id?-1:1)),
    members:()=>n.all().slice(0,MAXP),
    inRoom:()=>n.members().some(p=>p.id===myId),
    host:()=>n.members()[0].id===myId,
    racing:()=>[...peers.values()].some(p=>p.ph==='race'||p.ph==='count'),
    close:()=>{clearInterval(hb);tr.close();net=null}};
  const tr=makeTransport(code,onMsg,st=>{
    status=st;
    if(st==='ok'){n.hello();n.send({t:'who'});
      hb=setInterval(()=>{const racing=state==='race'||state==='count';if(Date.now()-lastHi>(racing?4000:1500))n.hello();prune()},500);
      setTimeout(()=>{if(!n.inRoom())status='full';refreshPanel(true)},1500)}
    refreshPanel(true);
  });
  function prune(){const now=Date.now(),lim=(state==='race'||state==='count')?9000:6000;for(const[id,p]of peers)if(now-p.seen>lim){peers.delete(id);onLeave(p)}}
  function onMsg(m){
    if(!m||m.id===myId)return;
    const p=peers.get(m.id);if(p)p.seen=Date.now();
    if(m.t==='who'){n.hello();return}
    if(m.t==='hi'){
      peers.set(m.id,{id:m.id,name:String(m.name||'?').slice(0,14),ready:!!m.ready,joined:+m.joined||Date.now(),ph:m.ph,ch:CHARS.includes(m.ch)?m.ch:'cat',seen:Date.now()});
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
  const mem=net.members(),ids=readyIds();
  if(ids.length<2)return;
  if(!force&&ids.length<mem.length)return;
  const rid=Math.random().toString(36).slice(2,8);net.send({t:'go',delay:3000,ids,rid});startRace(3000,ids,rid);
}
let curRid=null,curIds=null;
function startRace(delay,ids,rid){
  if(state==='count'||state==='race')return;
  finishId++;
  curRid=rid||null;curIds=ids||null;
  if(net)net.me.ready=false;
  setup(ids);firstDone=0;winner=null;endNote='';ov.innerHTML='';panel='race';state='count';startT=performance.now()+delay;
  racers.forEach(c=>{c.bt=0});
  if(net)net.hello();
}
addEventListener('pagehide',()=>{if(net)net.send({t:'bye'})});

// ---------- panels ----------
let panel='menu',sig='';
function refreshPanel(force){
  if(state==='count'||state==='race')return;
  if(panel==='lobby'||(panel==='results'&&net)){
    const s=(net?net.status()+'|'+net.members().map(p=>p.id+p.name+p.ready+(p.ch||'')).join(',')+'|'+net.racing():'')+'|'+lang+'|'+endNote+'|'+boardNote;
    if(!force&&s===sig)return;sig=s;
  }
  if(panel==='menu')menu();else if(panel==='lobby')lobby();else if(panel==='results')results();else if(panel==='board')board();
}
const ICON={
 cat:'<svg viewBox="0 0 60 36" aria-hidden="true"><g fill="#6fd14a" stroke="#2f7d1f" stroke-width="2"><circle cx="8" cy="26" r="5"/><circle cx="16" cy="23" r="6"/><circle cx="25" cy="19" r="6.5"/><circle cx="34" cy="19" r="6.5"/><circle cx="42" cy="23" r="6"/><circle cx="51" cy="20" r="7.5"/></g><circle cx="52" cy="18" r="2.4" fill="#fff" stroke="#14301f"/><circle cx="52.6" cy="18.4" r="1.1" fill="#14301f"/></svg>',
 inch:'<svg viewBox="0 0 60 36" aria-hidden="true"><path d="M8 30 C 9 4, 38 4, 40 30" fill="none" stroke="#3f8a24" stroke-width="7" stroke-linecap="round"/><path d="M8 30 C 9 4, 38 4, 40 30" fill="none" stroke="#a6e86a" stroke-width="4.5" stroke-linecap="round"/><circle cx="47" cy="25" r="6.5" fill="#a6e86a" stroke="#3f8a24" stroke-width="1.8"/><circle cx="48.5" cy="23.5" r="2.2" fill="#fff" stroke="#14301f"/><circle cx="49" cy="24" r="1" fill="#14301f"/></svg>',
 centi:'<svg viewBox="0 0 60 36" aria-hidden="true"><g stroke="#ffadc8" stroke-width="1.8" stroke-linecap="round"><path d="M7 25l-2 7M14 25l2 7M21 25l-2 7M28 25l2 7M35 25l-2 7M42 25l2 7"/></g><g fill="#c9b3ff" stroke="#7d5fd1" stroke-width="1.4"><circle cx="7" cy="22" r="4.5"/><circle cx="14" cy="21.5" r="4.5"/><circle cx="21" cy="22" r="4.5"/><circle cx="28" cy="21.5" r="4.5"/><circle cx="35" cy="22" r="4.5"/><circle cx="42" cy="21.5" r="4.5"/><circle cx="50" cy="20" r="6.5"/></g><path d="M51 14q3-8 8-9M54 15q4-4 6-3" fill="none" stroke="#7d5fd1" stroke-width="1.4"/><circle cx="51.5" cy="18.5" r="2.2" fill="#fff" stroke="#14301f"/><circle cx="52" cy="19" r="1" fill="#14301f"/></svg>',
 turtle:'<svg viewBox="0 0 60 36" aria-hidden="true"><ellipse cx="34" cy="27" rx="10" ry="3" fill="#bff0d8" stroke="#2e7d5b" stroke-width="1.4" transform="rotate(25 34 27)"/><path d="M8 24 A 18 13 0 0 1 44 24 Z" fill="#5fc79a" stroke="#2e7d5b" stroke-width="1.8"/><circle cx="50" cy="20" r="6.5" fill="#bff0d8" stroke="#2e7d5b" stroke-width="1.8"/><circle cx="51.5" cy="18.5" r="2.2" fill="#fff" stroke="#14301f"/><circle cx="52" cy="19" r="1" fill="#14301f"/></svg>'};
function charPicker(){return `<label>${t('character')}</label><div class="chars" data-g="char">${CHARS.map(k=>`<button data-v="${k}" class="${k===myChar?'on':''}" aria-pressed="${k===myChar}">${ICON[k]}<span>${t('ch_'+k)}</span></button>`).join('')}</div>`}
function menu(){
  panel='menu';state='menu';finishId++;
  if(net&&mode!=='online'){net.send({t:'bye'});net.close()}
  setup();
  const room=qs.get('room');
  const nickIn=(lbl)=>`<label for="nick">${lbl}</label><input type="text" id="nick" maxlength="14" autocomplete="nickname" value="${esc(myName())}" placeholder="${lang==='ko'?'예: 번개애벌레':'e.g. Speedy'}">`;
  let body='';
  if(mode==='practice')body=`<p class="small">${t('practiceHint')}</p><button class="go" data-act="start">${t('start')}</button>`;
  else if(mode==='solo'){const best=store.get('cr2-best-'+diff),d=t(DIFF[diff].k);
    body=`<div class="seg" data-g="diff">${DIFF.map((x,i)=>`<button data-v="${i}" class="${i===diff?'on':''}">${t(x.k)}</button>`).join('')}</div>${nickIn(t('nickOpt'))}
    <button class="go" data-act="start">${t('play')}</button><p class="small">${best?t('best',{d,t:fmt(+best)}):t('nobest',{d})}</p>`}
  else if(mode==='duo')body=`<p class="small">${t('duoHint')}</p><button class="go" data-act="start">${t('play')}</button>`;
  else body=`${nickIn(t('nick'))}
    <button class="go" data-act="${room?'join':'create'}">${room?t('join')+' · '+esc(room):t('create')}</button><p class="small">${room?'':t('onlineHint')}</p>`;
  const modes=[['practice','practice'],['solo','vsCpu'],['duo','duo'],['online','online']];
  ov.innerHTML=`<div class="panel"><h2>${room&&mode==='online'?t('joinT'):t('ready')}</h2>
  ${charPicker()}
  <div class="seg grid2" data-g="mode">${modes.map(([v,k])=>`<button data-v="${v}" class="${mode===v?'on':''}">${t(k)}</button>`).join('')}</div>${body}
  <div class="row"><button class="sec" data-act="board">${t('board')}</button></div></div>`;
}
function roomLink(code){return location.origin+location.pathname+'?room='+code+(qs.get('local')==='1'?'&local=1':'')}
function playerList(){
  const mem=net.members();
  return `<ul class="players">${mem.map((p,i)=>`<li><span class="dot" style="background:${SK[i%8].body}"></span><span class="ic">${ICON[p.id===myId?myChar:(p.ch||'cat')]}</span>${esc(p.name)}${p.id===myId?' ('+t('you')+')':''}${i===0?` <span class="st" style="margin-left:4px">· ${t('host')}</span>`:''}<span class="st ${p.ready?'ok':''}">${p.ready?t('isReady'):t('notReady')}</span></li>`).join('')}</ul>`;
}
function readyArea(){
  const mem=net.members(),ids=readyIds(),others=mem.length-1;
  let h='';
  if(net.racing()&&panel==='lobby')h+=`<p class="small">${t('inProgress')}</p>`;
  if(others<1)h+=`<p class="small">${t('waiting')}</p>`;
  else{
    h+=`<p class="small">${t('readyCount',{r:ids.length,n:mem.length})}${net.me.ready?'':' · '+t('autoStart')}</p>`;
    if(!net.me.ready)h+=`<button class="go" data-act="ready">${panel==='results'?t('rematch'):t('readyBtn')}</button>`;
    if(net.host()&&net.me.ready&&ids.length>=2&&ids.length<mem.length)h+=`<button class="go" data-act="startnow">${t('startNow',{k:ids.length})}</button>`;
  }
  return h;
}
function lobby(){
  panel='lobby';if(state!=='done')state='lobby';
  const n=net;if(!n){menu();return}
  const st=n.status();
  if(st==='connecting'){ov.innerHTML=`<div class="panel"><h2>${t('room')}</h2><p class="code">${esc(n.code)}</p><p class="small">${t('joining')}</p></div>`;return}
  if(st==='fail'||st==='full'){ov.innerHTML=`<div class="panel"><h2>${t('room')}</h2><p>${st==='full'?t('full'):t('offline')}</p><button class="go" data-act="leave">${t('back')}</button></div>`;return}
  setup();
  const link=roomLink(n.code),full=n.members().length>=MAXP;
  ov.innerHTML=`<div class="panel"><h2>${t('room')} <span style="letter-spacing:.1em">${esc(n.code)}</span></h2>
  ${full?'':`<p class="small">${t('shareHint')}</p><p class="link" id="lnk">${esc(link)}</p><div class="row"><button class="sec" data-act="copylink">${t('copy')}</button>${navigator.share?`<button class="sec" data-act="sharelink">${t('share')}</button>`:''}</div>`}
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
    const row=(r,mine)=>`<tr${mine?' style="font-weight:800;background:color-mix(in srgb,var(--on) 14%,transparent)"':''}><td>${r.rk}</td><td><span class="ic">${ICON[CHARS.includes(r.animal)?r.animal:'cat']}</span>${esc(r.nick)}${mine?' ('+t('you')+')':''}</td><td>${fmt(r.best)}</td><td>${r.rpm}</td></tr>`;
    const meIn=lbData.top.some(r=>r.me);
    body=`<table class="rk"><thead><tr><th>${t('rank')}</th><th>${t('racer')}</th><th>${t('time')}</th><th>${t('topRpm')}</th></tr></thead><tbody>${lbData.top.map(r=>row(r,r.me)).join('')}${!meIn&&lbData.me?`<tr><td colspan="4" style="text-align:center">…</td></tr>`+row(lbData.me,true):''}</tbody></table><p class="small">${t('boardNote')}</p>`;
  }
  ov.innerHTML=`<div class="panel"><h2>${t('boardTitle')}</h2><div class="seg" data-g="period">${tabs.map(([k,l])=>`<button data-v="${k}" class="${k===lbPeriod?'on':''}">${t(l)}</button>`).join('')}</div>${body}
  <div class="row"><button class="sec" data-act="menu">${t('back')}</button><button class="go" data-act="start" style="margin-top:0;min-height:44px;font-size:18px">${t('play')}</button></div></div>`;
}
async function loadBoard(){lbData=null;lbErr=false;board();try{lbData=await fetchBoard(lbPeriod)}catch(e){lbErr=true}if(panel==='board')board()}
let shareText='',finishId=0;
function finish(){
  if(state==='done')return;
  state='done';endEl=performance.now()-startT;
  const order=standings();
  winner=order[0]&&(order[0].done!=null||mode==='online')?order[0]:null;
  if(mode==='solo'&&me.done!=null){const k='cr2-best-'+diff,b=+store.get(k)||0,d=t(DIFF[diff].k);if(!b||me.done<b){store.set(k,String(me.done));endNote=b?t('newBest',{d}):t('firstBest',{d})}else endNote=t('best',{d,t:fmt(b)})}
  if(mode==='solo')shareText=t('shareSolo',{d:t(DIFF[diff].k),r:winner===me?t('won'):t('lost'),t:me.done!=null?' · '+fmt(me.done):'',rpm:Math.round(me.top*60)});
  else if(mode==='online'&&me){const p=order.indexOf(me)+1;shareText=t('shareOnline',{p:ord(p),n:racers.length,t:me.done!=null?' · '+fmt(me.done):'',u:net?roomLink(net.code):location.origin})}
  else if(winner)shareText=t('wins',{n:winner.name})+(winner.done!=null?' '+fmt(winner.done):'');
  boardNote='';
  if((mode==='solo'||mode==='online')&&me&&me.done!=null)submitScore(me.done,me.top*60,mode,diff);
  sig='';const fid=++finishId;setTimeout(()=>{if(state==='done'&&fid===finishId)results()},1900);
}
function results(){
  panel='results';
  const order=standings();
  let title;
  if(mode==='solo')title=winner===me?t('youWin'):t('cpuWin');
  else if(mode==='online'&&me){const p=order.indexOf(me)+1;title=p===1?t('youWin'):t('place',{p:ord(p),n:racers.length})}
  else title=winner?t('wins',{n:winner.name}):'—';
  const rows=order.map((c,i)=>`<tr${c===me&&mode==='online'?' style="font-weight:800"':''}><td>${i+1}</td><td><span class="dot" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.body};margin-right:6px"></span>${esc(c.name)}</td><td>${c.left?t('leftTag'):c.done!=null?fmt(c.done):t('dnf')}</td><td>${Math.round(c.top*60)}</td></tr>`).join('');
  const again=mode==='online'?(net&&net.status()==='ok'?readyArea():''):`<button class="go" data-act="start">${t('rematch')}</button>`;
  ov.innerHTML=`<div class="panel"><h2>${esc(title)}</h2>
  <table class="rk"><thead><tr><th>${t('rank')}</th><th>${t('racer')}</th><th>${t('time')}</th><th>${t('topRpm')}</th></tr></thead><tbody>${rows}</tbody></table>
  ${endNote?`<p class="small">${esc(endNote)}</p>`:''}
  ${boardNote?`<p class="small">${esc(boardNote)}</p>`:''}
  ${again}
  <div class="row"><button class="sec" data-act="${mode==='online'?'leave':'menu'}">${mode==='online'?t('leave'):t('change')}</button><button class="sec" data-act="copy">${t('copyRes')}</button></div>
  <p class="small" id="msg" aria-live="polite"></p></div>`;
}
function say(s){const m=document.getElementById('msg');if(m)m.textContent=s}
function copyText(s,ok){try{navigator.clipboard.writeText(s).then(()=>say(ok),()=>say(s))}catch(e){say(s)}}
function saveNick(){const i=document.getElementById('nick');if(i){const v=i.value.trim().slice(0,14);store.set('cr-nick',v);return v}return myName()}
function saveNickQuiet(){saveNick()}
ov.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;const gp=b.parentElement.dataset.g,act=b.dataset.act;
  if(act==='menu'&&mode==='practice'&&state==='race'){state='menu';menu();return}
  if(gp==='mode'){saveNick();if(net){net.send({t:'bye'});net.close()}mode=b.dataset.v;if(mode!=='online'&&qs.get('room')){qs.delete('room');history.replaceState(null,'',location.pathname+(qs.toString()?'?'+qs.toString():''))}menu();return}
  if(gp==='diff'){saveNick();diff=+b.dataset.v;menu();return}
  if(gp==='char'){saveNick();myChar=b.dataset.v;store.set('cr-char',myChar);if(net)net.hello();menu();return}
  if(gp==='period'){lbPeriod=b.dataset.v;loadBoard();return}
  if(act==='board'){saveNick();loadBoard();return}
  if(act==='start'){
    if(mode==='online'){menu();return}
    saveNick();botChar=null;finishId++;setup();firstDone=0;winner=null;endNote='';boardNote='';panel='race';
    if(mode==='practice'){state='race';startT=performance.now();ov.innerHTML=`<button class="done" data-act="menu">${t('done')}</button>`}
    else{ov.innerHTML='';state='count';startT=performance.now()+3000}
    return}
  if(act==='menu'){menu();return}
  if(act==='create'||act==='join'){
    if(!saveNick()){const i=document.getElementById('nick');i.focus();i.style.borderColor='#ff8a2a';return}
    const code=act==='join'?qs.get('room').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8):newCode();
    if(act==='create'){qs.set('room',code);history.replaceState(null,'','?'+qs.toString())}
    joinRoom(code);panel='lobby';lobby();return}
  if(act==='ready'&&net){net.me.ready=true;net.hello();endNote='';maybeStart();refreshPanel(true);return}
  if(act==='startnow'&&net){maybeStart(true);return}
  if(act==='leave'){if(net){net.send({t:'bye'});net.close()}qs.delete('room');history.replaceState(null,'',location.pathname+(qs.toString()?'?'+qs.toString():''));state='menu';menu();return}
  if(act==='copylink'&&net){copyText(roomLink(net.code),t('copied'));return}
  if(act==='sharelink'&&net){navigator.share({title:t('title'),text:t('invite'),url:roomLink(net.code)}).catch(()=>{});return}
  if(act==='copy'){copyText(shareText,t('copyOk'))}
});
ov.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='nick'){const b=ov.querySelector('button.go');if(b)b.click()}});

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

applyLang();menu();requestAnimationFrame(loop);
}
