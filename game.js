{
// ---------- config ----------
const SB_URL='https://cxcsxqqghwscztauxhhy.supabase.co';
const SB_KEY='sb_publishable_iBuJ0q0b7mFMJQ7PgDXucg_jDqtMe2T';
const MAXP=8;
const qs=new URLSearchParams(location.search);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
// one-time reset (Nov 26, 2026): phones that climbed levels with the multi-finger bug go back to Level 1
(()=>{const d=store.get('cr-dev')||'';if(!store.get('cr-reset1')&&['d7161w6w','dngwzax5','d765plmb'].some(x=>d.startsWith(x))){try{Object.keys(localStorage).filter(k=>k.startsWith('cr3-best-')).forEach(k=>localStorage.removeItem(k))}catch(e){}['cr-clear','cr-lv','cr-char','cr-char2','cr-mstars'].forEach(k=>store.set(k,''));store.set('cr-reset1','1')}})();
// one-time reset of every player's mission progress (Dustin, Nov 26): stars, unlocks, ski best, ending, best times; names, settings and leaderboards stay
(()=>{if(store.get('cr-reset2'))return;try{Object.keys(localStorage).filter(k=>k.startsWith('cr3-best-')).forEach(k=>localStorage.removeItem(k))}catch(e){}['cr-clear','cr-lv','cr-char','cr-char2','cr-mstars','cr-ski','cr-end'].forEach(k=>store.set(k,''));store.set('cr-reset2','1')})();

// ---------- language ----------
const L={
 en:{title:'Caterpillar Race',intro:'Draw <b>circles</b> on the screen, like turning a wheel. Spin faster to crawl faster. Stop and your caterpillar stops.',
  foot:'Play 30 missions in 6 worlds to earn stars and unlock new animals, race anyone online, race up to 8 friends with a code, or race on the same phone. On a computer: draw circles with the mouse.',
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
  character:'Character',modeQ:'How do you want to play?',practiceSub:'Learn the circles · nothing recorded',cpuSub:'Easy · Normal · Hard · Champion',champion:'Champion',champLocked:'🔒 Beat the computer on Hard to unlock Champion.',champUnlocked:'🏆 Champion level unlocked!',champHint:'Champion races at 330 RPM. Almost impossible!',yourPic:'Your race picture',picAlt:'Picture of your animal celebrating with its result',sharePic:'Share',savePic:'Save picture',copyText:'Copy text',picHint:'On a phone you can also press and hold the picture to save it.',picSaved:'Picture saved.',sharePicBtn:'🎉 Share picture',players:'players',duoSub:'Two players, one screen split in half',onlineSub:'2–8 friends, each on their own phone',next:'Next',pickAnimal:'Pick your animal',p1Animal:"Player 1's animal",p2Animal:"Player 2's animal",p1Is:'Player 1: {a}',selected:'Selected: {a}',cpuNote:'The computer picks a different animal.',nameDiff:'Name & level',difficulty:'Difficulty',nameRoom:'Name & race room',createTab:'Create a race',joinTab:'Join with code',howMany:'How many players?',capHint:'The race starts when all {n} players are in and ready.',codeLbl:'4-digit race code',joinBtn:'Join race',createBtn:'Create race',invited:"You're invited to race {c}!",notNow:'Play something else',stepOf:'Step {i} of {n}',roomCode:'Race code',joinedCount:'{n} / {m} players in',emptySlot:'Empty spot · waiting…',waitReady:'Waiting for everyone to be ready…',waitJoin:'Waiting for {k} more to join…',hostCan:'The host can start early with everyone here.',noRoom:'No race found with code {c}. Check the code and try again.',badCode:'Enter the 4-digit code.',quit:'Quit',quitQ:'Quit this race?',keep:'Keep racing',quitYes:'Quit',home:'Home',music:'Music',sound:'Sounds',on:'on',off:'off',ch_cat:'Caterpillar',ch_inch:'Inchworm',ch_centi:'Centipede',ch_turtle:'Green sea turtle',ch_snail:'Garden snail',ch_garter:'Garter snake',ch_frill:'Frilled lizard',ch_basil:'Green basilisk',ch_puffer:'Pufferfish',ch_shrimp:'Pistol shrimp',ch_crab:'Swimming crab',ch_peng:'Gentoo penguin',editName:'Edit your name',ch_imugi:'Imugi',line_imugi:'The legendary serpent who chases the magic pearl.',
 misTile:'Mission',misTileSub:'6 worlds · 30 missions · unlock animals',starsOf:'⭐ {n} / 93 stars',notBoard:'Not on leaderboard',
 mapTitle:'Mission map',dragonAt:'Golden Dragon at {n} ⭐',startHere:'START · You start with these 4',unlockTag:'UNLOCK',unlockedTag:'UNLOCKED',worldN:'World {w} · {name}',missionN:'Mission {n}',misShort:'M{n}',
 goal_beat:'Beat the {a}!',goal_boss:'BOSS: beat the {a}!',goal_time:'Finish in under {t} s',goal_obst:'Obstacle course! Finish in under {t} s',goal_ski:'Bonus: ski jump as far as you can!',how_ski:'🐧 Spin hard up the hill. Your speed at the TAKE OFF sign is all that matters — then sit back and slide as far as you can go!',star_ft:'{f} ft',
 skiName:'Bonus · Ski jump',skiTitle:'🎿 {f} FT!',skiBest:'Best: {f} ft',skiNewBest:'New best: {f} ft!',skiAgain:'🎿 Jump again',shareSki:'🎿 I ski-jumped {f} ft {r} at {rpm} RPM in Caterpillar Race!',
 lbRace:'🏁 Fastest race',lbJump:'🎿 Longest jump',distance:'Distance',boardRankJ:'#{r} of {n} jumpers today',
 watchVid:'▶ Watch video',chooseA:'Choose',chosenA:'✓ Chosen',skipVid:'Skip ▶',endBtn:'🦋 Ending',endCap:'You cleared every mission!',
 endC1:'Munch, munch…',endC2:'Time for a long nap…',endC3:'Something is happening!',endC4:'A beautiful butterfly!',endC5:'Flying over every world!',endTitle:'You cleared all 30 missions!',
 fact_cat:'Caterpillars eat and eat. Then they make a chrysalis and turn into butterflies or moths!',
 fact_inch:'Inchworms are baby moths. They loop their bodies as they move, like they are measuring the ground.',
 fact_snail:'Garden snails carry their house on their back and glide along on one slimy foot.',
 fact_turtle:'Green sea turtles are named for the green color of their fat, not their shell. Grown-ups munch on seagrass.',
 fact_centi:'Centipede means "100 feet", but no centipede has exactly 100 legs!',
 fact_garter:'Garter snakes are harmless snakes found all over North America. Their babies are born alive, not in eggs.',
 fact_basil:'Green basilisks can run across water on their back legs — about 5 feet every second!',
 fact_crab:'Swimming crabs have back legs shaped like paddles, so they can zip through the water.',
 fact_puffer:'When danger is near, a pufferfish gulps water and puffs up into a big spiky ball.',
 fact_shrimp:'A pistol shrimp snaps its claw so fast it makes a bubble that pops louder than a gunshot!',
 fact_frill:'Frilled lizards pop open a big frill around their neck to look scary, then run away on two legs.',
 fact_peng:'Gentoo penguins are the fastest swimming birds in the world — up to 22 miles per hour!',
 fact_imugi:'In Korean legend, an Imugi waits 1,000 years to catch a magic pearl and become a dragon.',
 fact_dragon:'In Korean stories, dragons live in the water and the sky, bring the rain, and hold a magic pearl.',goal_red:'Move only while the {w} sleeps!',goal_catch:'Catch the falling {i}!',goal_egg:'Carry the {i} home safely!',goal_chase:'Escape the {f}!',goal_chaseB:'BOSS: escape the {f}!',goal_runner:'Catch the {f}!',goal_duck:'Lead the {f} home!',goal_gates:'Get through the {g}!',goal_water:'Run across the water!',goal_heat:'Dash across the hot sand!',goal_slide:'Slide and jump to the finish!',
 how_red:'{e} Spin while the {w} sleeps. When it opens its eyes, STOP right away or you get caught.',how_catch:'{e} Be under each spot when the {i} land. Speed up or slow down to get there on time. Catch 3 of 5 to pass.',how_egg:'{e} Stay under {l} RPM or the {i} cracks. 3 cracks and it breaks!',how_chase:'{e} The {f} is right behind you and sometimes speeds up. Don\'t let it catch your tail!',how_gates2:'Falling rocks block the path — wait for them to stop.',how_runner:'{e} The {f} runs ahead. Catch it before it reaches the finish!',how_duck:'{e} The {f} follow you. Keep a steady speed between {lo} and {hi} RPM or one gets lost. Bring 2 home to pass.',how_gates:'{e} The {g} open and close. Arrive while they are open — the dot turns green.',how_water:'💧 Stay above {w} RPM or you start to sink.',how_heat:'🔥 Spinning over {h} RPM heats you up. Too hot and you must stop to cool down.',how_slide:'⛰️ Push hard up the hills, then zoom down the other side. Reach each jump with {j}+ RPM or you splash into the icy water!',how_tide:'🌊 Tide waves cover the path. Wait for the water to go out — your rival has to wait too.',
 star_finish:'Finish',star_m1:'Under {t} s, max 1 {e}',star_m0:'Under {t} s, no {e}',star_w1:'Win, max 1 {e}',star_w0:'Win, no {e}',star_catch:'Catch {n}',star_catchAll:'Catch all 5',star_duck:'{n} home',star_duckAll:'All 4 home',star_run:'Catch it',star_runBy:'Catch it before {p}%',star_obst1:'Under {t} s, max 1 bump',star_obst0:'Under {t} s, no bumps',goal_zone:'Keep your speed between {lo} and {hi} RPM',goal_sprint:'Reach {r} RPM and finish',
 star_win:'Win',star_under:'Under {t} s',star_zone:'{p}% in the zone',star_top:'Top {r} RPM',startMission:'▶ Start mission',
 misDone:'MISSION {n} COMPLETE!',misFail:'MISSION {n} · TRY AGAIN',nextMission:'Next mission →',retryMission:'Try again',mapBtn:'🗺️ Map',backMap:'🗺️ Back to mission map',
 imugiLore:'A giant serpent from Korean legend. It waits 1,000 years in deep water, hoping to catch the magic pearl (yeouiju) and rise into the sky as a dragon. Beat it before it becomes a dragon!',
 zoneNow:'Zone {p}%',topNow:'Top {r} / {g}',goalT:'Goal {t}s',dragonStars:'Collect {n} ⭐ to unlock the Golden Dragon.',quitSent:'You left this race.',cpuN:'🤖 Computer {n}',addBot:'＋ Add computer',botNote:'Computers race at about your group\'s level and are always ready. If a friend joins a full room, a computer makes room.',lvLost:'LEVEL {n} · SO CLOSE!',nextUp:'Next: Lv {n}',nextAnimal:'Clear Lv {n} → {a}',cpuRpm:'Computer ≈ {r} RPM',back2:'Back',lvOf:'{n} / 30 cleared',nameShown:'Shown on the leaderboard.',changeAnimal:'Change animal',close:'Close',ch_dragon:'Golden Dragon',ch_king:'Dragon King',letsRace:"Let's race!",changeBtn:'✏️ Change',theAnimal:'the {a}',cpuTile:'vs Computer',cpuTileSub:'30 levels · unlock animals',onLv:"⭐ You're on Lv {n}",allDone:'⭐ All 30 levels cleared!',anyTile:'Play anyone',anyTileSub:'Race online',racingNow:'{n} racing now',friendsTile:'Play friends',friendsSub:'Private race with a code',sameTile:'Same phone',sameSub:'2 players, 1 phone',meTitle:'Animal & name',yourName:'Your name',newName:'🎲 New fun name',typeName:'Or type your own name (optional)',saveName:'Save name',useAuto:'Use my fun name',badName:'Please pick a different name.',nameSaved:'Name saved.',lockLv:'M{n}',lockedMsg:'Pass mission {n} to unlock the {a}.',doneBtn:'Done',
 finding:'Finding racers…',lookingMore:'Looking for up to {k} more…',startIn:'Starting in {s} s',anyStart:'▶ Start now ({k} racers)',waitCreator:'Waiting for {n} to start…',anyRule:'Starts by itself when all 8 places are full. The first racer in the room can start sooner.',funNames:'Everyone races with a fun name. No chat.',alone:'No one else is here right now',aloneQ:'How do you want to race?',raceCpu:'🤖 Race the computer',keepWait:'⏳ Keep waiting',cancel:'✕ Cancel',switchQ:'A racer is here!',switchYes:'Race them',
 nextLevel:'Next level →',tryAgain:'Try again',levelsBtn:'📋 Levels',levels:'Pick a level',levelN:'Level {n}',cpuAbout:'Computer: about {r} RPM',levelCleared:'LEVEL {n} CLEARED!',newAnimal:'🎉 New animal!',newAnimals:'🎉 {n} new animals!',legendary:'🐉 LEGENDARY unlock!',raceAs:'Race as {a} now',seePic:'See my race picture',lvJump:'Level jump! You skipped to level {n}.',allCleared:'You beat all 30 levels!',bestLv:'Your best on level {n}: {t}',newBestLv:'New best on level {n}!',
 lvCol:'Level',lvShort:'M{n}',onlineLv:'Online',waitingForYou:'Everyone is waiting for you!',leaveQ:'Leave the race?',stay:'Stay',leaveYes:'Leave',invitedT:"You're invited!",joinAs:'You will race as:',friendsTitle:'Play friends',p2Title:"Player 2's animal",paceLbl:'PACE',raceLbl:'race',
 line_cat:'Wiggles one bump at a time.',line_inch:'Loops up and stretches out.',line_snail:'Slow and steady… or is it?',line_turtle:'Paddles through the sea.',line_centi:'One hundred tiny feet!',line_crab:'Swims sideways super fast.',line_garter:'Slithers in S-curves.',line_basil:'Runs on water!',line_puffer:'Puffs up when it goes fast.',line_shrimp:'SNAP! The loudest little shrimp.',line_peng:'Slides on its belly.',line_frill:'Pops its frill and sprints.',line_dragon:'Breathes a fire trail at 300+ RPM!',
 snap:'Snap!',huff:'Huff!',phew:'Phew~',yay:'Yay!'},
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
const CHARS=['cat','inch','snail','turtle','centi','garter','basil','crab','puffer','shrimp','frill','peng','imugi','dragon'];
const ALLC=[...CHARS,'king']; // 'king' is the level-30 boss, never playable
// in a mission every lane uses that mission's world; elsewhere each animal races at its own home
const WHAB=['garden','pond','sea','desert','ice','waterfall'];
const habOf=ch=>VID?(HAB[ch]||'garden'):mode==='solo'&&MIS[raceLv-1]?WHAB[MIS[raceLv-1].w]:(HAB[ch]||'garden');
const HAB={cat:'garden',inch:'garden',centi:'garden',snail:'garden',garter:'garden',frill:'desert',basil:'pond',turtle:'sea',puffer:'sea',shrimp:'sea',crab:'sea',peng:'ice',dragon:'volcano',king:'volcano',imugi:'waterfall'};
const SIG={cat:{body:'#6fd14a',dark:'#2f7d1f',spot:'#ffd23f'},inch:{body:'#a6e86a',dark:'#3f8a24',spot:'#fff6a8'},centi:{body:'#c9b3ff',dark:'#5b3fb0',spot:'#ff4f97'},turtle:{body:'#5fc79a',dark:'#2e7d5b',spot:'#ffe27a'},snail:{body:'#f1d2b0',dark:'#a5784e',spot:'#f0a35e'},garter:{body:'#5cbf6a',dark:'#2f7d4a',spot:'#ffe27a'},frill:{body:'#e3ad66',dark:'#8a5a2b',spot:'#ff8a5c'},basil:{body:'#6fd14a',dark:'#2f7d1f',spot:'#c9f59a'},puffer:{body:'#ffd84a',dark:'#b8860b',spot:'#fff4c8'},shrimp:{body:'#ff9a76',dark:'#c2482a',spot:'#ffd1c2'},crab:{body:'#ff7a5c',dark:'#b23a22',spot:'#ffd0c0'},peng:{body:'#2b2f36',dark:'#0f1115',spot:'#ffffff',gauge:'#6cc4ff'},dragon:{body:'#ffcf3f',dark:'#b77800',spot:'#ff8a3c'},imugi:{body:'#3fa58f',dark:'#1f5f5b',spot:'#bfe8c8'},king:{body:'#d8283c',dark:'#4a0710',spot:'#2b2b2b'}};
// Every character moves the same average distance per turn (fair races); only the look differs.
function headPos(ch,phi){
  if(ch==='inch')return S0+2*STEP*g(phi/2);
  return S0+STEP*phi/(2*Math.PI);
}
const headX=c=>headPos(c.char||'cat',c.phi);
const prog=c=>Math.max(0,Math.min(1,(headX(c)-S0)/(TRACK-S0)));
// ---------- 30 computer levels ----------
// computer's average RPM per level (it varies ±18% around this); BOT_T = its average finish time (simulated, seconds)
const LV=[80,89,98,107,116,124,133,142,151,160,169,178,187,196,205,214,223,232,241,250,266,282,298,314,330,333,354,373,399,430];
const BOT_T=[35.72,32.1,29.26,26.83,24.74,23.21,21.66,20.3,19.14,18.08,17.13,16.31,15.55,14.84,14.18,13.63,13.05,12.61,12.12,11.73,11.04,10.46,9.87,9.43,9.0,8.91,8.4,7.99,7.5,6.99];
const NLV=LV.length;
// ---------- Mission mode: 6 worlds x 5 missions, up to 3 stars each ----------
const WORLDS=['Garden','Pond','Sea','Desert','Ice','Waterfall'];
const MOPP=[['inch','centi','garter'],['snail','turtle','basil'],['turtle','crab','puffer'],['garter','basil','frill'],['crab','puffer','peng'],['frill','peng','imugi']];
const r1=x=>Math.round(x*10)/10;
// missions 1..30 (Nov 26 redesign): each world mixes the mission types; "as" = played as the animal you just unlocked
const MSPEC=[
 ['beat',{opp:'inch'}],['red',{watch:'owl'}],['catch',{item:'apple'}],['egg',{as:'centi',item:'egg'}],['chase',{foe:'garter'}],
 ['runner',{as:'garter',foe:'mouse'}],['duck',{fol:'duck'}],['gates',{gate:'dam'}],['obst',{}],['beat',{opp:'basil',water:1}],
 ['water',{as:'basil'}],['gates',{gate:'wave'}],['catch',{item:'shell'}],['chase',{as:'puffer',foe:'shark'}],['beat',{opp:'crab',gate:'tide'}],
 ['red',{watch:'fox'}],['obst',{}],['egg',{item:'fruit'}],['heat',{as:'frill'}],['chase',{foe:'storm'}],
 ['egg',{item:'pegg'}],['obst',{}],['runner',{foe:'fish'}],['slide',{as:'peng',course:'ice'}],['chase',{foe:'avalanche'}],
 ['gates',{gate:'rocks'}],['obst',{}],['duck',{fol:'firefly'}],['catch',{item:'star'}],['chase',{foe:'imugi',gate:'rocks'}]];
const MBASE={2:54.1,4:26.5,5:24.5,8:22.1,9:22.3,11:16.8,12:17.3,14:14.5,16:26.1,17:16.1,18:12.3,19:11.9,20:11.4,21:10.8,22:11.6,24:9.6,25:8.7,26:10.3,27:11.9,30:7.8};
const MIS=MSPEC.map(([type,ex],i)=>{
  const w=Math.floor(i/5),k=i%5,n=i+1,rpm=LV[i],bt=BOT_T[i],r5=x=>Math.round(x/5)*5,tg=(a,b,c)=>[r1(bt*a),r1(bt*b),Math.max(5.9,r1(bt*c))];
  const m={n,w,k,type,rpm,boss:k===4,opp:null,...ex};
  if(type==='beat'){const g3=Math.max(5.9,r1(bt*.82));m.g=[0,Math.max(r1(g3+.3),r1(bt*.92)),g3];if(m.water)m.wmin=r5(rpm*.8)}
  if(type==='obst'){m.pmin=r5(rpm*.75);m.qmax=r5(rpm*.7);m.bmin=r5(rpm*1.1);m.g=[r1(bt*1.25),r1(bt*1.15),r1(bt*1.05)]}
  if(type==='red')m.g=tg(2.1,1.8,1.6);
  if(type==='egg'){m.lim=r5(rpm*1.2);m.g=tg(1.3,1.12,1)}
  if(type==='chase'){m.cbase=m.foe==='imugi'?.8:.88;const q=tg(1,1.05,.95);m.g=[0,q[1],q[2]]}
  if(type==='duck'){m.dlo=r5(rpm*.55);m.dhi=r5(rpm*1.25);m.g=[r1(bt*1.6)]}
  if(type==='gates')m.g=tg(1.6,1.35,1.2);
  if(type==='water'){m.wmin=r5(rpm*.8);m.g=tg(1.3,1.12,1.02)}
  if(type==='heat'){m.hot=r5(rpm*1.1);m.g=tg(1.3,1.12,1)}
  if(type==='slide'){m.jmin=r5(rpm*.9);m.g=tg(1.3,1.12,1)}
  if(type==='catch'||type==='runner')m.g=[];
  // star times from test runs of a good player spinning at the computer's average speed (Nov 26): ⭐ ≤ base×1.25, ⭐⭐ ≤ base×1.1, ⭐⭐⭐ ≤ base
  const B=MBASE[n];if(B)m.g=type==='chase'?[0,r1(B*1.08),r1(B)]:[r1(B*1.25),r1(B*1.1),r1(B)];
  return m});
// bonus mission 31: penguin ski jump (stars by distance in feet)
MIS.push({n:31,w:4,k:5,type:'ski',rpm:298,boss:false,opp:null,as:'peng',bonus:true,g:[520,600,680]});
const getStars=()=>{let a;try{a=JSON.parse(store.get('cr-mstars')||'null')}catch(e){a=null}
  if(!Array.isArray(a)){a=Array(30).fill(0);const old=Math.max(0,Math.min(30,+store.get('cr-clear')||0));for(let i=0;i<old;i++)a[i]=1;store.set('cr-mstars',JSON.stringify(a))}
  return Array.from({length:30},(_,i)=>Math.max(0,Math.min(3,+a[i]||0)))};
const setStars=a=>store.set('cr-mstars',JSON.stringify(a));
const totalStars=()=>getStars().reduce((x,y)=>x+y,0)+skiData().s;
const STAR_MAX=93,DRAGON_STARS=75;
// animals open when you pass a mission (the boss you beat joins you); the Golden Dragon needs 75 stars
const UNLOCK={centi:3,garter:5,basil:10,puffer:13,crab:15,shrimp:15,frill:18,peng:23,imugi:30};
const cleared=()=>{const a=getStars();let c=0;while(c<30&&a[c]>0)c++;return c};
const isOpen=k=>CHARS.includes(k)&&(k==='dragon'?totalStars()>=DRAGON_STARS:!(k in UNLOCK)||getStars()[UNLOCK[k]-1]>0);
const firstOpen=k=>isOpen(k)?k:'cat';
let lvl=Math.max(1,Math.min(NLV,+store.get('cr-lv')||cleared()+1,cleared()+1));
const botW=()=>LV[lvl-1]*2*Math.PI/60;
// my speed = average RPM of my last 5 finished races (race time ≈ 2823 / RPM); before any race, my mission's speed
const spdList=()=>{try{const a=JSON.parse(store.get('cr-spd')||'[]');return Array.isArray(a)?a.filter(x=>x>0):[]}catch(e){return[]}};
const mySpd=()=>{const a=spdList();return a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):LV[progLv()-1]};
const addSpd=ms=>{if(!(ms>0))return;const a=spdList();a.push(Math.min(500,Math.round(2823/(ms/1000))));store.set('cr-spd',JSON.stringify(a.slice(-5)))};
const SK=[['#6fd14a','#2f7d1f','#ffd23f'],['#ff9a3c','#b5560e','#fff1a8'],['#4fb3ff','#1f6ea8','#ffffff'],['#ff6b9a','#b02d5c','#ffffff'],['#b38bff','#5e3bb0','#ffffff'],['#ffd23f','#9a7a05','#ffffff'],['#3fd6c6','#13806f','#ffffff'],['#ff5b4f','#a32118','#ffe9a8']].map(([body,dark,spot])=>({body,dark,spot}));
let myChar=firstOpen(store.get('cr-char')),botChar=null;
let mode=qs.get('room')?'online':'solo',anyone=false,state='menu',startT=0,firstDone=0,endEl=0,winner=null,racers=[],me=null,endNote='';
const hash=k=>{const s=Math.sin(k*127.1+311.7)*43758.5453;return s-Math.floor(s)};
const fmt=ms=>(ms/1000).toFixed(2)+'s';
const rpmOf=w=>Math.max(0,w)*60/(2*Math.PI);

const mk=(sk,name,kind,id,ch)=>({...sk,id,name,char:ALLC.includes(ch)?ch:'cat',kind:kind||'human',phi:0,acc:0,w:0,spin:0,top:0,done:null,left:false,ph:Math.random()*6,pv:0,disp:0,bt:0,btw:0,tphi:0,tw:0,rt:0,ang:0,px:null,vs:0,kmh:0,hold:0,bestHold:0,goalDone:false});
function setup(ids){
  MX=null;
  if(mode==='solo'){const ms=MIS[lvl-1],pc=ms.as&&isOpen(ms.as)?ms.as:myChar;MX=initMX(ms);if(ms.opp){const bc=ms.opp===pc&&!ms.boss?(CHARS.find(k=>k!==pc&&k!=='dragon'&&k!=='imugi')):ms.opp;racers=[mk(SIG[bc],t('ch_'+bc),'bot',null,bc),mk(SIG[pc],myName(),'human',null,pc)];me=racers[1]}else{racers=[mk(SIG[pc],myName(),'human',null,pc)];me=racers[0]}}
  else if(mode==='practice'){racers=[mk(SIG[myChar],myName(),'human',null,myChar)];me=racers[0]}
  else if(mode==='duo'){racers=[mk(SIG[myChar],t('p1'),'human',null,myChar),mk(p2Char===myChar?SK[1]:SIG[p2Char],t('p2'),'human',null,p2Char)];me=null}
  else{
    const mem=net?net.members():[];
    const list=ids||mem.map(p=>p.id);
    racers=list.map((id,i)=>{const p=mem.find(x=>x.id===id)||(net&&net.peers.get(id))||raceBots.find(x=>x.id===id),cc=id===myId?myChar:(p&&p.ch),isBot=!!(p&&p.bot),mine=isBot&&p.owner===myId;const c=mk({...(SIG[cc]||SIG.cat),pc:SK[i%8].body},id===myId?(net?net.me.name:myName()):(p?p.name:'Racer'),id===myId?'human':mine?'bot':'remote',id,id===myId?myChar:(p&&p.ch));if(isBot){c.owner=p.owner;c.isCpu=true;if(mine)c.bw=(p.rpm||LV[Math.max(1,Math.min(NLV,p.lv||1))-1])*2*Math.PI/60}return c});
    if(!racers.length)racers=[mk(SK[0],myName(),'human',myId,myChar)];
    me=racers.find(r=>r.id===myId)||null;
  }
}
function feed(c,d){if(c&&c.kind==='human'){c.acc+=d;c.ang+=d}}
// ---------- obstacle courses (2nd mission of each world) ----------
// push = keep spinning fast enough or you get stuck; quiet = go gently or you stumble; boost = arrive fast for a speed boost
const OBW=[
  {push:['mud','🟤','Mud puddle'],quiet:['bee','🐝','Sleeping bee'],boost:['mush','🍄','Bouncy mushroom']},
  {push:['weed','🌿','Duckweed'],quiet:['frog','🐸','Sleeping frog'],boost:['lily','🪷','Jumping lily pad']},
  {push:['kelp','🌱','Kelp forest'],quiet:['jelly','🪼','Jellyfish'],boost:['bubble','🫧','Bubble stream']},
  {push:['sand','⏳','Quicksand'],quiet:['scorp','🦂','Sleeping scorpion'],boost:['rock','🔥','Hot rock']},
  {push:['snow','❄️','Snowdrift'],quiet:['crack','🧊','Thin ice'],boost:['slide','⛸️','Ice slide']},
  {push:['stream','🌊','Fast stream'],quiet:['bat','🦇','Sleeping bat'],boost:['pearl','🔮','Magic pearl']}];
const obX=f=>S0+(TRACK-S0)*f;
function obLayout(m){return m.w%2===0?[['push',.16,.29],['quiet',.40,.51],['boost',.62,.62],['push',.74,.85]]:[['quiet',.16,.27],['push',.38,.50],['boost',.62,.62],['quiet',.74,.85]]}
const obMis=()=>{const m=!VID&&mode==='solo'&&MIS[raceLv-1];return m&&m.type==='obst'?m:null};
// speed multiplier for a racer in an obstacle course (human only — there is no computer in these missions)
function obStep(c,now,hx,dt){
  const m=obMis();if(!m||c.kind!=='human'||state!=='race'||c.done!=null)return 1;
  const o=c.ob||(c.ob={bumps:0,hit:{},stun:0,boost:0,low:0,msg:'',msgT:0,px:hx});
  const L=obLayout(m),W0=OBW[m.w],say=(x,ms)=>{o.msg=x;o.msgT=now+(ms||1300)};
  let mult=1;
  L.forEach(([kind,a,b],i)=>{const x0=obX(a),x1=obX(b);
    if(kind==='boost'){if(o.px<x0&&hx>=x0){if(c.disp>=m.bmin){o.boost=now+1500;sfx.whoosh();say('⚡ BOOST!')}else say('Too slow for the '+W0.boost[2].toLowerCase(),1100)}return}
    if(hx<x0||hx>x1)return;
    if(kind==='push'){mult*=.6;if(c.disp<m.pmin){o.low+=dt;mult*=.35;if(o.low>500&&!o.hit[i]){o.hit[i]=1;o.bumps++;sfx.splash();say('😵 Stuck! Spin faster!')}}else o.low=0}
    if(kind==='quiet'&&c.disp>m.qmax&&!o.hit[i]&&now>o.stun){o.hit[i]=1;o.bumps++;o.stun=now+1000;sfx.boing();say('💫 Oops! It woke up!')}
  });
  o.px=hx;
  if(now<o.stun)return 0;
  if(now<o.boost)mult*=1.6;
  return mult;
}
// the next obstacle's rule, for the goal chip
function obHint(c){const m=obMis();if(!m||!c)return null;const hx=headX(c),W0=OBW[m.w];
  for(const [kind,a,b] of obLayout(m)){const x0=obX(a),x1=obX(b);if(hx>x1+2)continue;if(x0-hx>420)return null;
    const d=W0[kind];if(kind==='push')return{tx:d[1]+' Keep spinning '+m.pmin+'+',ok:c.disp>=m.pmin};
    if(kind==='quiet')return{tx:d[1]+' Shh! Under '+m.qmax,ok:c.disp<=m.qmax};return{tx:d[1]+' Boost at '+m.bmin+'+',ok:c.disp>=m.bmin}}
  return null}
function drawObstacles(m,now,cam,vw){
  const W0=OBW[m.w];
  obLayout(m).forEach(([kind,a,b])=>{const x0=obX(a),x1=obX(b);if(x1<cam-80||x0>cam+vw+80)return;
    const art=W0[kind][0],rule=kind==='push'?m.pmin+'+':kind==='quiet'?'< '+m.qmax:m.bmin+'+';
    // sign before the obstacle
    const sx=x0-34;ctx.fillStyle='#7a5530';ctx.fillRect(sx-1.5,128,3,32);rr(sx-26,108,52,24,6);ctx.fillStyle=kind==='push'?'#e8fbe0':kind==='quiet'?'#efe6ff':'#fff3c4';ctx.fill();
    ctx.strokeStyle=kind==='push'?'#2f9e3a':kind==='quiet'?'#7a3cff':'#e0a000';ctx.lineWidth=2;ctx.stroke();
    ctx.font='800 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#14301f';ctx.fillText(W0[kind][1]+' '+rule,sx,120.5);
    obArt(art,x0,x1,now);
  });
}
function obArt(a,x0,x1,now){
  const mid=(x0+x1)/2,w=x1-x0,t=RM?0:now;ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
  const blob=(col,edge)=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x0,177);for(let i=0;i<=12;i++){const x=x0+w*i/12;ctx.lineTo(x,162+Math.sin(i*1.7)*2.5)}for(let i=12;i>=0;i--){const x=x0+w*i/12;ctx.lineTo(x,192+Math.cos(i*1.3)*2.5)}ctx.closePath();ctx.fill();if(edge){ctx.strokeStyle=edge;ctx.lineWidth=2;ctx.stroke()}};
  if(a==='mud'){blob('#7a5232','#5a3a22');ctx.fillStyle='#9a6a42';for(let i=0;i<w/30;i++){const x=x0+15+i*30,y=172+hash(i)*14,r=2+((t/300+i)%3);ctx.globalAlpha=.7;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill()}ctx.globalAlpha=1}
  else if(a==='weed'){blob('#4fa3c9');ctx.fillStyle='#7cc84a';for(let i=0;i<w/6;i++){ctx.beginPath();ctx.arc(x0+hash(i)*w,166+hash(i+3)*24,2.2+hash(i+7)*1.5,0,7);ctx.fill()}}
  else if(a==='kelp'){for(let i=0;i<w/16;i++){const x=x0+8+i*16,sw=Math.sin(t/500+i)*6,h=60+hash(i)*30;ctx.strokeStyle=i%2?'#2f8f4e':'#46b06a';ctx.lineWidth=4;ctx.globalAlpha=.85;ctx.beginPath();ctx.moveTo(x,194);ctx.quadraticCurveTo(x+sw,194-h/2,x+sw*1.5,194-h);ctx.stroke()}ctx.globalAlpha=1}
  else if(a==='sand'){blob('#d9a85e','#b5823e');ctx.strokeStyle='rgba(140,90,40,.55)';ctx.lineWidth=1.6;for(let k=0;k<Math.max(1,Math.round(w/70));k++){const cx=x0+w*(k+.5)/Math.max(1,Math.round(w/70)),r0=t/400;ctx.beginPath();for(let q=0;q<26;q++){const an=r0+q*.5,rr2=2+q*.8;ctx.lineTo(cx+Math.cos(an)*rr2*1.6,177+Math.sin(an)*rr2*.45)}ctx.stroke()}}
  else if(a==='snow'){ctx.fillStyle='#ffffff';ctx.strokeStyle='#bcdcf0';ctx.lineWidth=1.5;for(let i=0;i<w/40;i++){const x=x0+20+i*40;ctx.beginPath();ctx.ellipse(x,186,26,18+hash(i)*6,0,Math.PI,0);ctx.fill();ctx.stroke()}}
  else if(a==='stream'){ctx.fillStyle='rgba(90,170,230,.85)';ctx.fillRect(x0,160,w,34);ctx.strokeStyle='rgba(255,255,255,.8)';ctx.lineWidth=1.5;for(let i=0;i<w/18;i++){const x=x0+((i*18+t/8)%w),y=166+hash(i)*24;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(Math.min(x1,x+10),y);ctx.stroke()}}
  else if(a==='crack'){ctx.fillStyle='rgba(150,205,240,.7)';ctx.fillRect(x0,160,w,34);ctx.strokeStyle='#ffffff';ctx.lineWidth=1.4;for(let i=0;i<w/30;i++){const x=x0+10+i*30,y=168+hash(i)*16;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+9,y+6);ctx.lineTo(x+4,y+12);ctx.moveTo(x+9,y+6);ctx.lineTo(x+17,y+3);ctx.stroke()}}
  else{
    // quiet zones get a soft purple path tint; the sleeping creature sits in the middle
    const quiet=['bee','frog','jelly','scorp','bat'].includes(a);
    if(quiet){ctx.fillStyle='rgba(150,110,255,.18)';ctx.fillRect(x0,160,w,34);const zz=(t/600)%1;ctx.fillStyle='#5b3fb0';ctx.font='800 '+(10+zz*6)+'px "Baloo 2",sans-serif';ctx.globalAlpha=1-zz;ctx.fillText('z',mid+16+zz*8,118-zz*16);ctx.font='800 9px "Baloo 2",sans-serif';ctx.globalAlpha=1;ctx.fillText('z',mid+12,126)}
    if(a==='bee'){ctx.strokeStyle='#3f8a24';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(mid,160);ctx.lineTo(mid,132);ctx.stroke();ctx.fillStyle='#ff8fb3';for(let k=0;k<5;k++){ctx.beginPath();ctx.arc(mid+Math.cos(k*1.26)*7,128+Math.sin(k*1.26)*7,5,0,7);ctx.fill()}ctx.fillStyle='#ffd23f';ctx.beginPath();ctx.arc(mid,128,4,0,7);ctx.fill();
      ctx.fillStyle='#ffd23f';ctx.strokeStyle='#14301f';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(mid+3,118,8,5.5,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#14301f';ctx.fillRect(mid+1,113,2,10);ctx.fillRect(mid+5,113,2,10);ctx.fillStyle='rgba(255,255,255,.85)';ctx.beginPath();ctx.ellipse(mid,111,4,6,-.4,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(mid-6,118);ctx.lineTo(mid-3,118);ctx.stroke()}
    else if(a==='frog'){ctx.fillStyle='#5cbf4a';ctx.strokeStyle='#2f7d2a';ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(mid,152,22,6,0,.3,Math.PI*2-.1);ctx.lineTo(mid,152);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#4fb53c';ctx.beginPath();ctx.ellipse(mid,141,12,9,0,0,7);ctx.fill();ctx.stroke();[-5,5].forEach(d=>{ctx.beginPath();ctx.arc(mid+d,133,4,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(mid+d-2.5,133);ctx.lineTo(mid+d+2.5,133);ctx.stroke()})}
    else if(a==='jelly'){const bob=Math.sin(t/700)*4;ctx.fillStyle='rgba(255,150,210,.85)';ctx.beginPath();ctx.arc(mid,128+bob,13,Math.PI,0);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(255,150,210,.8)';ctx.lineWidth=2;for(let k=-2;k<=2;k++){ctx.beginPath();ctx.moveTo(mid+k*5,128+bob);ctx.quadraticCurveTo(mid+k*5+Math.sin(t/300+k)*4,142+bob,mid+k*5,154+bob);ctx.stroke()}ctx.strokeStyle='#7a2a5a';ctx.lineWidth=1.4;[-4,4].forEach(d=>{ctx.beginPath();ctx.moveTo(mid+d-2,123+bob);ctx.lineTo(mid+d+2,123+bob);ctx.stroke()})}
    else if(a==='scorp'){ctx.fillStyle='#8a4a1f';ctx.strokeStyle='#5a2a0a';ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(mid,154,13,6,0,0,7);ctx.fill();ctx.stroke();ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(mid+12,154);ctx.quadraticCurveTo(mid+26,150,mid+22,136);ctx.quadraticCurveTo(mid+18,128,mid+12,134);ctx.stroke();[-1,1].forEach(d=>{ctx.beginPath();ctx.arc(mid-16,154+d*4,3.5,0,7);ctx.stroke()});ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(mid-6,151);ctx.lineTo(mid-2,151);ctx.stroke()}
    else if(a==='bat'){ctx.strokeStyle='#3a2a1a';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(mid-30,104);ctx.lineTo(mid+30,100);ctx.stroke();ctx.fillStyle='#3d2f5a';ctx.beginPath();ctx.ellipse(mid,116,7,11,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(mid-7,110);ctx.quadraticCurveTo(mid-14,118,mid-6,126);ctx.lineTo(mid,116);ctx.lineTo(mid+6,126);ctx.quadraticCurveTo(mid+14,118,mid+7,110);ctx.fill();ctx.strokeStyle='#cbb8ff';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(mid-4,121);ctx.lineTo(mid-1,121);ctx.moveTo(mid+1,121);ctx.lineTo(mid+4,121);ctx.stroke()}
    else{
      // boost pads
      const glow=.55+.45*Math.sin(t/200);
      if(a==='mush'){ctx.fillStyle='#f6ead2';rr(mid-5,166,10,16,4);ctx.fill();ctx.fillStyle='#e8402f';ctx.beginPath();ctx.ellipse(mid,166,17,11,0,Math.PI,0);ctx.fill();ctx.fillStyle='#fff';[[-8,161],[0,158],[8,162]].forEach(([dx,dy])=>{ctx.beginPath();ctx.arc(mid+dx,dy,2.4,0,7);ctx.fill()})}
      else if(a==='lily'){ctx.fillStyle='#5cbf4a';ctx.strokeStyle='#2f7d2a';ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(mid,180,24,8,0,.3,Math.PI*2-.1);ctx.lineTo(mid,180);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#ffb3cf';ctx.beginPath();ctx.arc(mid-6,176,4,0,7);ctx.fill()}
      else if(a==='bubble'){ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=1.5;for(let k=0;k<7;k++){const y=194-((t/12+k*14)%80);ctx.beginPath();ctx.arc(mid+Math.sin(k+t/300)*5,y,2+k%3,0,7);ctx.stroke()}}
      else if(a==='rock'){ctx.fillStyle='#b0703a';ctx.strokeStyle='#7a4a22';ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(mid,184,22,7,0,0,7);ctx.fill();ctx.stroke();ctx.strokeStyle='rgba(255,140,60,.7)';for(let k=-1;k<=1;k++){ctx.beginPath();ctx.moveTo(mid+k*9,174);ctx.quadraticCurveTo(mid+k*9+4,166,mid+k*9,158);ctx.quadraticCurveTo(mid+k*9-4,150,mid+k*9,144);ctx.stroke()}}
      else if(a==='slide'){ctx.fillStyle='rgba(180,230,255,.9)';rr(mid-26,164,52,26,6);ctx.fill();ctx.strokeStyle='#ffffff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(mid-18,170);ctx.lineTo(mid+10,170);ctx.moveTo(mid-10,182);ctx.lineTo(mid+18,182);ctx.stroke()}
      else if(a==='pearl'){const g2=ctx.createRadialGradient(mid,170,2,mid,170,22);g2.addColorStop(0,'rgba(255,250,200,'+glow+')');g2.addColorStop(1,'rgba(255,250,200,0)');ctx.fillStyle=g2;ctx.beginPath();ctx.arc(mid,170,22,0,7);ctx.fill();ctx.fillStyle='#ffe680';ctx.beginPath();ctx.arc(mid,170,7,0,7);ctx.fill()}
      ctx.fillStyle='rgba(255,210,63,'+glow+')';ctx.font='800 14px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText('⚡',mid,148);
    }
  }
  ctx.restore();
}
// ---------- mission engine: every mission type works with spinning only ----------
// red light green light · catch falling things · carry the egg · escape the chaser · catch the runner ·
// gates · lead the babies · run on water · overheat · slopes & jumps (+ obstacle courses above)
const FOE={mouse:['🐭','field mouse'],shark:['🦈','shark'],storm:['🌪️','sandstorm'],avalanche:['🏔️','avalanche'],fish:['🐟','runaway fish'],garter:['🐍','garter snake'],imugi:['🐉','Imugi']};
const WATCH={owl:['🦉','owl'],fox:['🦊','desert fox']};
const ITEM={apple:['🍎','apple','apples'],shell:['🐚','shell','shells'],star:['⭐','star','stars']};
const EGG={egg:['🥚',"robin's egg"],fruit:['🍈','cactus fruit'],pegg:['🥚','penguin egg']};
const GATE={dam:['🪵','beaver-dam gates'],wave:['🌊','waves'],rocks:['🪨','falling rocks'],tide:['🌊','tide waves']};
const FOL={duck:['🐥','ducklings'],firefly:['✨','baby fireflies']};
const UPS=r=>STEP*GAIN*r/60; // track units per second at r RPM
const misName=n=>n===31?t('skiName'):t('missionN',{n});
const curMis=()=>!VID&&mode==='solo'&&MIS[raceLv-1]?MIS[raceLv-1]:null;
const tagMis=()=>{const m=curMis();return m&&m.type!=='obst'&&m.type!=='beat'||m&&(m.water||m.gate)?m:null};
let MX=null;
// world state for one run of a mission (random parts are rolled here, so a retry is a little different)
function initMX(m){
  if(!m)return null;const X={t0:0,heat:0,got:0,fol:4,lost:[]},R=m.rpm,rnd=(a,b)=>a+Math.random()*(b-a),bt=BOT_T[m.n-1];
  const gateKind=m.type==='gates'?m.gate:m.gate;
  if(gateKind){const fr=m.type==='chase'?[.3,.5,.7]:m.type==='beat'?[.25,.5,.75]:[.2,.4,.6,.8];X.gates=fr.map(f=>({x:obX(f),P:rnd(2.2,3.4),open:.55,ph:rnd(0,3)}))}
  if(m.type==='red'){const ph=[];let tt=0;while(tt<bt*4){const g=Math.max(1.4,Math.min(5,bt*rnd(.1,.18)));ph.push(['green',tt,tt+g]);tt+=g;ph.push(['warn',tt,tt+.8]);tt+=.8;const r2=Math.max(1,Math.min(3,bt*rnd(.06,.1)));ph.push(['red',tt,tt+r2]);tt+=r2}X.ph=ph}
  if(m.type==='catch'){X.items=[.18,.34,.5,.66,.82].map((f,i)=>{const x=obX(f);return{x,t:.8+(x-S0)/UPS(R)*[1.25,1.05,1.2,1.1,1.15][i]*rnd(.97,1.03)}})}
  if(m.type==='chase'){X.ch={x:S0-110-200,v:0,next:0,delay:1,close:false}}
  if(m.type==='runner'){X.run={x:S0+260,v:0,next:0}}
  if(m.type==='ski')X.ski={ph:'run',x:0,y:0,vx:0,vy:0,v:0,rpm:0,ft:0};
  if(m.type==='slide')X.seg=[['up',.10,.20],['down',.26,.38],['kick',.43,.46],['jump',.46,.51],['up',.57,.66],['down',.72,.84],['kick',.87,.90],['jump',.90,.94]];
  return X;
}
// ground height (px above the flat path) for the slide course: two snowy hills and two jumps over icy water
const HILL=[[0,0],[.10,0],[.20,48],[.26,48],[.38,0],[.43,0],[.46,16],[.4601,0],[.57,0],[.66,48],[.72,48],[.84,0],[.87,0],[.90,16],[.9001,0],[1.2,0]];
function hillH(x){const f=(x-S0)/(TRACK-S0);for(let i=1;i<HILL.length;i++){const [f0,h0]=HILL[i-1],[f1,h1]=HILL[i];if(f<=f1){const u=f1>f0?Math.max(0,Math.min(1,(f-f0)/(f1-f0))):1;return h0+(h1-h0)*(1-Math.cos(u*Math.PI))/2}}return 0}
const slideMis=()=>{const m=curMis();return m&&m.type==='slide'?m:null};
const gateOpen=(g,t)=>((t+g.ph)%g.P)<g.P*g.open;
const redPhase=t=>{const p=MX&&MX.ph&&MX.ph.find(q=>t>=q[1]&&t<q[2]);return p||['green',0,1]};
function misFail(c,now,x){if(c.kind!=='human'||c.done!=null)return;c.failed=x;c.done=now-startT;if(!firstDone)firstDone=now;const o=c.ob;if(o){o.msg=x;o.msgT=now+4000}sfx.failBig()}
// speed multiplier for this frame (and c.minSp for slides/jumps); human and computer go through the same gates
function misStep(c,now,hx,dt){
  c.minSp=0;c.blocked=false;
  const m=curMis();if(!m||state!=='race'||c.done!=null||c.kind==='remote')return 1;
  if(m.type==='obst')return obStep(c,now,hx,dt);
  if(m.type==='ski')return c.kind==='human'&&MX?skiStep(c,now,hx,dt):1;
  const X=MX;if(!X)return 1;const t=(now-startT)/1000,me1=c.kind==='human';
  const o=c.ob||(c.ob={bumps:0,hit:{},stun:0,boost:0,low:0,msg:'',msgT:0,px:hx});
  const say=(x,ms)=>{if(me1){o.msg=x;o.msgT=now+(ms||1300)}};
  const bump=(x,ms,snd)=>{if(me1){o.bumps++;(sfx[snd||'boing']||sfx.boing)()}o.stun=now+(ms||0);say(x)};
  let mult=1;
  if(X.gates)X.gates.forEach((g,i)=>{if(!gateOpen(g,t)&&hx>=g.x-18&&hx<g.x+2){mult=0;c.blocked=true;if(!o.hit['g'+i]){o.hit['g'+i]=1;if(me1){o.bumps++;sfx.boing()}say((GATE[m.gate]||GATE.dam)[0]+' Bonk! Wait for it…')}}});
  if(me1){
    if(m.type==='red'){const p=redPhase(t);if(p[0]==='red'&&t-p[1]>.35&&c.disp>35&&now>o.stun)bump('👀 Caught moving! Freeze!',1200)}
    if(m.type==='egg'){if(c.disp>m.lim){o.low+=dt;if(o.low>300){o.low=-1000;o.bumps++;sfx.snap();if(o.bumps>=3)misFail(c,now,EGG[m.item][0]+' Oh no, it broke!');else say(EGG[m.item][0]+' Crack! '+o.bumps+'/3 — slow down!')}}else if(o.low>0)o.low=0;else if(o.low<0)o.low=Math.min(0,o.low+dt)}
    if(m.type==='water'||m.water){if(hx>obX(.06)&&hx<obX(.95)){if(c.disp<m.wmin){o.low+=dt;mult*=.5;if(o.low>600){o.low=0;bump('💦 Splash! Too slow!',1000,'splash')}}else o.low=0}}
    if(m.type==='heat'){if(c.disp>m.hot)X.heat+=40*(c.disp/m.hot)*dt/1000;else X.heat=Math.max(0,X.heat-25*dt/1000);if(X.heat>=100){X.heat=40;bump('🔥 Too hot! Cooling down…',1500,'puff')}}
    if(m.type==='duck'){if(t>2&&X.fol>0&&(c.disp<m.dlo||c.disp>m.dhi)){o.low+=dt;if(o.low>1200){o.low=0;X.fol--;X.lost.push(hx-150-X.fol*28);o.bumps++;sfx.boing();say((FOL[m.fol]||FOL.duck)[0]+' One got lost! Steady!')}}else o.low=0}
    if(m.type==='slide')X.seg.forEach(([k,a,b],i)=>{const x0=obX(a),x1=obX(b);
      if(k==='up'&&hx>=x0&&hx<=x1)mult*=.6;
      if(k==='down'){if(o.px<x0&&hx>=x0)X.carry=Math.max(c.w,0);if(hx>=x0&&hx<=x1){mult*=1.35;X.carry=(X.carry||0)*Math.exp(-dt/2500);c.minSp=Math.max(c.minSp,X.carry*1.25)}}
      if(k==='jump'){if(o.px<x0&&hx>=x0){if(c.disp>=m.jmin){X.air={x0,x1,sp:Math.max(c.w,0)*1.15};sfx.whoosh();say('🚀 Jump!',900)}else{bump('💦 Too slow — splash!',1300,'splash');X.air=null}}}});
    if(X.air){if(hx>=X.air.x1)X.air=null;else c.minSp=Math.max(c.minSp,X.air.sp)}
  }
  o.px=hx;
  if(now<o.stun){c.minSp=0;return 0}
  return mult;
}
// chasers, runners and falling things move once per frame
function misWorld(now,dt){
  const m=curMis(),X=MX,c=me;if(!m||!X||state!=='race'||!c||c.done!=null)return;
  if(m.type==='ski'){skiWorld(now,dt);return}
  const t=(now-startT)/1000,hx=headX(c),R=m.rpm,o=c.ob||(c.ob={bumps:0,hit:{},stun:0,boost:0,low:0,msg:'',msgT:0,px:hx});
  const say=(x,ms)=>{o.msg=x;o.msgT=now+(ms||1300)};
  if(X.ch){const ch=X.ch;if(t>ch.delay){if(now>ch.next){ch.next=now+1000+Math.random()*1600;ch.surge=Math.random()<.35;ch.v=UPS(R*(m.cbase+(ch.surge?.28:0)))}
      let v=ch.v;if(hx-110-ch.x>240)v=Math.max(v,UPS(R*1.05));if(c.blocked||now<o.stun)v=Math.min(v,UPS(R*.3));ch.x+=v*dt/1000}
    const gap=hx-110-ch.x;X.gap=gap;
    if(gap<55&&!ch.close){ch.close=true;o.bumps++;sfx.boing();say('😱 Close call! Faster!')}else if(gap>110)ch.close=false;
    if(gap<=0)misFail(c,now,(FOE[m.foe]||FOE.shark)[0]+' Caught! Try again!')}
  if(X.run){const r=X.run;if(now>r.next){r.next=now+700+Math.random()*900;r.v=UPS(R*(.45+Math.random()*.6))}
    let v=r.v;if(r.x-hx<80)v=Math.max(v,UPS(R*.8));r.x+=v*dt/1000;
    if(hx>=r.x-8){c.caughtAt=prog(c);c.done=now-startT;if(!firstDone)firstDone=now;sfx.ding();say('🎉 Got it!',4000)}
    else if(r.x>=TRACK)misFail(c,now,(FOE[m.foe]||FOE.mouse)[0]+' It got away!')}
  if(X.items)X.items.forEach(it=>{if(it.done||t<it.t)return;it.done=1;if(it.x<=hx+40&&it.x>=hx-150){it.got=1;X.got++;sfx.ding();say(ITEM[m.item][0]+' Got it! '+X.got+'/5',900)}else{it.miss=1;say('Missed!',700)}});
}
// what to do right now (top-left chip)
function misHint(c,now){
  const m=curMis(),X=MX;if(!m||!X||!c)return null;const t=state==='race'?(now-startT)/1000:0,o=c.ob||{bumps:0};
  switch(m.type){
    case 'red':{const p=redPhase(t)[0];return p==='green'?{tx:'🟢 GO! It\'s asleep',ok:true}:p==='warn'?{tx:'🟡 It\'s waking… slow down!',ok:c.disp<60}:{tx:'🔴 FREEZE!',ok:c.disp<=35}}
    case 'catch':{const nx=X.items.find(it=>!it.done);return{tx:ITEM[m.item][0]+' '+X.got+'/5'+(nx?' · lands in '+Math.max(0,nx.t-t).toFixed(1)+'s':''),ok:true}}
    case 'egg':return{tx:EGG[m.item][0]+' Under '+m.lim+' · cracks '+o.bumps+'/3',ok:c.disp<=m.lim};
    case 'chase':return{tx:(FOE[m.foe]||FOE.shark)[0]+' Run! '+(X.gap!=null?Math.max(0,Math.round(X.gap/10))+' m behind':''),ok:(X.gap||200)>110};
    case 'runner':return{tx:(FOE[m.foe]||FOE.mouse)[0]+' Catch it! '+Math.max(0,Math.round((X.run.x-headX(c))/10))+' m',ok:true};
    case 'duck':return{tx:(FOL[m.fol]||FOL.duck)[0]+' '+X.fol+'/4 · '+m.dlo+'–'+m.dhi,ok:c.disp>=m.dlo&&c.disp<=m.dhi};
    case 'water':return{tx:'💧 Stay above '+m.wmin+(o.bumps?' · 💦 '+o.bumps:''),ok:c.disp>=m.wmin};
    case 'heat':return{tx:'🔥 Heat '+Math.round(X.heat)+'% · cool under '+m.hot,ok:X.heat<70};
    case 'gates':return{tx:(GATE[m.gate]||GATE.dam)[0]+' Time it! · bonks '+o.bumps,ok:!c.blocked};
    case 'slide':{const hx=headX(c),nx=X.seg.find(([k,a,b])=>obX(b)>=hx);if(!nx)return{tx:'🏁 Go go go!',ok:true};const k=nx[0];return k==='jump'||k==='kick'?{tx:'🚀 Jump at '+m.jmin+'+',ok:c.disp>=m.jmin}:k==='up'?{tx:'⛰️ Uphill — push!',ok:true}:{tx:'🛷 Downhill — whee!',ok:true}}
    case 'ski':{const S=X.ski;return S.ph==='run'?{tx:'🐧 Spin up the hill — faster = farther!',ok:true}:{tx:'📏 '+S.ft.toFixed(1)+' ft'+(S.ph==='stop'?'':' …'),ok:true}}
    case 'beat':return m.water?{tx:'💧 Stay above '+m.wmin,ok:c.disp>=m.wmin}:{tx:'🌊 Wait for the tide · bonks '+o.bumps,ok:!c.blocked};
  }
  return null;
}
// everything the mission puts on the track (world coordinates; path is y 160–194)
function drawMis(m,now,cam,vw,c){
  const X=MX;if(!X)return;const t=state==='race'?(now-startT)/1000:0,T=RM?0:now,isMe=c===me;ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
  if(X.gates)X.gates.forEach(g=>{if(g.x<cam-60||g.x>cam+vw+60)return;const op=gateOpen(g,t),left=op?(g.P*g.open-((t+g.ph)%g.P)):(g.P-((t+g.ph)%g.P));gateArt(m.gate,g.x,op,T);
    ctx.strokeStyle=op?'#2f9e3a':'#e0402f';ctx.lineWidth=4;ctx.beginPath();ctx.arc(g.x,112,9,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,left/(op?g.P*g.open:g.P*(1-g.open))));ctx.stroke();ctx.fillStyle=op?'#2f9e3a':'#e0402f';ctx.beginPath();ctx.arc(g.x,112,5,0,7);ctx.fill()});
  if(m.type==='water'||m.water){const a=obX(.06),b=obX(.95);ctx.fillStyle='rgba(70,160,230,.75)';ctx.fillRect(a,160,b-a,34);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.4;for(let x=Math.max(a,Math.floor(cam/40)*40);x<Math.min(b,cam+vw);x+=40){const y=166+hash(x)*22+Math.sin(T/400+x)*2;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+7,y-3,x+14,y);ctx.stroke()}}
  if(m.type==='slide'){drawHills(cam,vw,T);X.seg.forEach(([k,a,b])=>{if(k==='kick'||k==='down')return;const x0=obX(a);if(x0<cam-80||x0>cam+vw+80)return;const sx=x0-30,hy=hillH(sx);
    ctx.fillStyle='#7a5530';ctx.fillRect(sx-1.5,128-hy,3,32);rr(sx-26,106-hy,52,24,6);ctx.fillStyle=k==='jump'?'#fff3c4':'#ffe3d6';ctx.fill();ctx.strokeStyle=k==='jump'?'#e0a000':'#c4560c';ctx.lineWidth=2;ctx.stroke();ctx.font='800 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#14301f';ctx.fillText(k==='jump'?'🚀 '+m.jmin+'+':'⛰️ push!',sx,118.5-hy)})}
  if(!isMe){ctx.restore();return}
  if(m.type==='red'){const p=redPhase(t)[0],wx=cam+vw*.5,wy=58;ctx.strokeStyle='#6b4a2a';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(wx-60,wy+22);ctx.lineTo(wx+60,wy+18);ctx.stroke();watcherArt(m.watch,wx,wy,p,T)}
  if(m.type==='catch')X.items.forEach(it=>{if(it.x<cam-40||it.x>cam+vw+40)return;const left=it.t-t;
    if(!it.done){ctx.strokeStyle='rgba(20,48,31,.45)';ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.beginPath();ctx.ellipse(it.x,177,16,5,0,0,7);ctx.stroke();ctx.setLineDash([]);
      if(left<1.6){const y=177-left/1.6*140;ctx.fillStyle='rgba(20,48,31,.18)';ctx.beginPath();ctx.ellipse(it.x,179,8+(1-left/1.6)*8,3,0,0,7);ctx.fill();itemArt(m.item,it.x,y-8)}
      else{ctx.font='800 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillStyle='#14301f';ctx.fillText(Math.ceil(left)+'s',it.x,160)}
      if(m.item==='shell'&&left<2.4){const gx=it.x-(left-1.6)*60;ctx.strokeStyle='#ffffff';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(gx-12,30);ctx.quadraticCurveTo(gx-6,22,gx,30);ctx.quadraticCurveTo(gx+6,22,gx+12,30);ctx.stroke()}}
    else if(it.miss){ctx.globalAlpha=.5;itemArt(m.item,it.x+14,184);ctx.globalAlpha=1}});
  if(X.ch){const x=X.ch.x;if(x>cam-200)foeArt(m.foe,x,T,cam);
    if(x<cam+30){const gp=Math.max(0,Math.round((headX(c)-110-x)/10)),bx=cam+34,pulse=RM?0:Math.sin(T/150)*3;rr(bx-26,138+pulse,58,34,10);ctx.fillStyle='rgba(224,64,47,.9)';ctx.fill();ctx.font='800 18px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(FOE[m.foe][0],bx-10,155+pulse);ctx.fillStyle='#fff';ctx.font='800 12px "Baloo 2",sans-serif';ctx.fillText(gp+'m',bx+14,155+pulse)}}
  if(X.run&&c.caughtAt==null)runnerArt(m.foe,X.run.x,T);
  if(m.type==='duck'){const hx=headX(c);for(let i=0;i<X.fol;i++)folArt(m.fol,hx-150-i*28,T+i*200,false);X.lost.forEach(x=>folArt(m.fol,x,T,true))}
  ctx.restore();
}
function gateArt(k,x,op,T){
  if(k==='dam'){ctx.fillStyle='#8a5a2b';ctx.fillRect(x-4,118,8,76);ctx.fillRect(x+30,118,8,76);if(!op){for(let i=0;i<4;i++){ctx.fillStyle=i%2?'#a06b36':'#7a4a22';rr(x-6,140+i*13,46,12,6);ctx.fill()}}else{ctx.fillStyle='#a06b36';rr(x-6,120,46,10,5);ctx.fill()}}
  else if(k==='wave'||k==='tide'){if(!op){ctx.fillStyle='rgba(40,140,220,.85)';ctx.beginPath();ctx.moveTo(x-30,194);ctx.quadraticCurveTo(x-20,120,x+10,128);ctx.quadraticCurveTo(x+26,132,x+18,146);ctx.quadraticCurveTo(x+40,150,x+44,194);ctx.closePath();ctx.fill();ctx.fillStyle='#fff';for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(x-8+i*8,126+Math.sin(T/200+i)*2,3,0,7);ctx.fill()}}else{ctx.fillStyle='rgba(40,140,220,.35)';ctx.beginPath();ctx.ellipse(x+8,192,30,4,0,0,7);ctx.fill()}}
  else if(k==='rocks'){ctx.fillStyle='#5a4a6a';ctx.fillRect(x-30,60,70,8);if(!op){for(let i=0;i<4;i++){const y=(70+((T/4+i*34)%110));ctx.fillStyle=i%2?'#8a7a8a':'#6a5a7a';ctx.beginPath();ctx.arc(x-14+i*11,y,6+i%2*2,0,7);ctx.fill()}}ctx.fillStyle='rgba(90,74,106,.5)';ctx.beginPath();ctx.ellipse(x+5,192,26,4,0,0,7);ctx.fill()}
}
function watcherArt(k,x,y,p,T){
  const shake=p==='warn'&&!RM?Math.sin(T/40)*2:0;x+=shake;
  if(k==='owl'){ctx.fillStyle='#8a6a4a';ctx.beginPath();ctx.ellipse(x,y,20,24,0,0,7);ctx.fill();ctx.fillStyle='#c9a77a';ctx.beginPath();ctx.ellipse(x,y+8,12,14,0,0,7);ctx.fill();ctx.fillStyle='#8a6a4a';ctx.beginPath();ctx.moveTo(x-18,y-16);ctx.lineTo(x-12,y-30);ctx.lineTo(x-6,y-18);ctx.moveTo(x+18,y-16);ctx.lineTo(x+12,y-30);ctx.lineTo(x+6,y-18);ctx.fill()}
  else{ctx.fillStyle='#e8893a';ctx.beginPath();ctx.ellipse(x,y+2,22,18,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(x-20,y-6);ctx.lineTo(x-16,y-34);ctx.lineTo(x-4,y-12);ctx.moveTo(x+20,y-6);ctx.lineTo(x+16,y-34);ctx.lineTo(x+4,y-12);ctx.fill();ctx.fillStyle='#fff2e0';ctx.beginPath();ctx.ellipse(x,y+10,10,7,0,0,7);ctx.fill()}
  [-8,8].forEach(d=>{if(p==='green'){ctx.strokeStyle='#14301f';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x+d,y-4,4,.2,Math.PI-.2);ctx.stroke()}else{ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x+d,y-4,p==='red'?7:5,0,7);ctx.fill();ctx.fillStyle=p==='red'?'#e0402f':'#14301f';ctx.beginPath();ctx.arc(x+d,y-4,p==='red'?3.5:2.5,0,7);ctx.fill()}});
  ctx.fillStyle='#ffb020';ctx.beginPath();ctx.moveTo(x-3,y+2);ctx.lineTo(x+3,y+2);ctx.lineTo(x,y+7);ctx.fill();
  if(p==='green'){ctx.fillStyle='#5b3fb0';ctx.font='800 13px "Baloo 2",sans-serif';ctx.textAlign='left';ctx.fillText('z z',x+22,y-20)}
  else{ctx.fillStyle=p==='red'?'#e0402f':'#ffb020';ctx.font='900 20px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText(p==='red'?'!!':'?',x+30,y-16)}
}
function itemArt(k,x,y){if(k==='star'){ctx.fillStyle='#ffd23f';ctx.strokeStyle='#e0a000';ctx.lineWidth=1.5;ctx.beginPath();for(let i=0;i<10;i++){const r=i%2?4.5:10,a=-Math.PI/2+i*Math.PI/5;ctx.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}ctx.closePath();ctx.fill();ctx.stroke();return}
  if(k==='apple'){ctx.fillStyle='#e8402f';ctx.beginPath();ctx.arc(x-3,y,7,0,7);ctx.arc(x+3,y,7,0,7);ctx.fill();ctx.strokeStyle='#6b4a2a';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y-6);ctx.lineTo(x+1,y-11);ctx.stroke();ctx.fillStyle='#4fb53c';ctx.beginPath();ctx.ellipse(x+5,y-10,4,2,-.5,0,7);ctx.fill()}
  else{ctx.fillStyle='#ffd8c2';ctx.strokeStyle='#d98a6a';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(x,y+7);ctx.lineTo(x-9,y-3);ctx.quadraticCurveTo(x,y-12,x+9,y-3);ctx.closePath();ctx.fill();ctx.stroke();for(let i=-1;i<=1;i++){ctx.beginPath();ctx.moveTo(x,y+6);ctx.lineTo(x+i*6,y-6);ctx.stroke()}}}
function foeArt(k,x,T,cam){
  if(k==='garter'||k==='imugi'){const f=mk(SIG[k],'','bot',null,k);f.phi=(x-S0)*2*Math.PI/STEP;f.w=30;f.ph=1;drawRacer(f,T,false);return}
  if(k==='shark'){const y=168+Math.sin(T/300)*3;ctx.fillStyle='#7a8a9a';ctx.beginPath();ctx.moveTo(x+10,y);ctx.quadraticCurveTo(x-30,y-26,x-110,y-4);ctx.lineTo(x-140,y-22);ctx.lineTo(x-132,y+2);ctx.lineTo(x-142,y+22);ctx.lineTo(x-110,y+6);ctx.quadraticCurveTo(x-30,y+22,x+10,y);ctx.fill();ctx.beginPath();ctx.moveTo(x-50,y-16);ctx.lineTo(x-64,y-44);ctx.lineTo(x-74,y-14);ctx.fill();ctx.fillStyle='#e8eef2';ctx.beginPath();ctx.moveTo(x+8,y+2);ctx.quadraticCurveTo(x-30,y+16,x-90,y+5);ctx.quadraticCurveTo(x-30,y+8,x+8,y+2);ctx.fill();ctx.fillStyle='#fff';for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(x-4-i*7,y+1);ctx.lineTo(x-7-i*7,y+7);ctx.lineTo(x-10-i*7,y+1);ctx.fill()}ctx.fillStyle='#14301f';ctx.beginPath();ctx.arc(x-12,y-6,2.5,0,7);ctx.fill();return}
  const sand=k==='storm',L=Math.max(cam-20,x-600);
  ctx.fillStyle=sand?'rgba(190,140,80,.85)':'rgba(255,255,255,.95)';ctx.fillRect(L,40,x-L-20,160);
  for(let i=0;i<9;i++){const yy=60+i*16,r=18+Math.sin(T/200+i)*5;ctx.fillStyle=sand?(i%2?'rgba(210,160,95,.95)':'rgba(170,120,65,.9)'):(i%2?'#ffffff':'#e3f0fa');ctx.beginPath();ctx.arc(x-14+Math.sin(T/150+i*2)*6,yy,r,0,7);ctx.fill()}
  if(!sand){ctx.strokeStyle='#bcdcf0';ctx.lineWidth=2;for(let i=0;i<3;i++){const bx=x+4+((T/6+i*30)%40),by=172+i*6;ctx.beginPath();ctx.arc(bx,by,6+i,0,7);ctx.stroke()}}
  else{ctx.strokeStyle='rgba(120,80,40,.6)';ctx.lineWidth=2;for(let i=0;i<5;i++){const yy=70+i*25;ctx.beginPath();ctx.moveTo(x-40,yy);ctx.quadraticCurveTo(x,yy-10+Math.sin(T/120+i)*6,x+20,yy);ctx.stroke()}}
}
function runnerArt(k,x,T){const hop=RM?0:Math.abs(Math.sin(T/90))*6,y=176-hop;
  if(k==='mouse'){ctx.strokeStyle='#d98aa0';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x-16,y+2);ctx.quadraticCurveTo(x-30,y-8,x-38,y+4);ctx.stroke();ctx.fillStyle='#9a9aa8';ctx.beginPath();ctx.ellipse(x-4,y,14,9,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(x+8,y-3,7,0,7);ctx.fill();ctx.fillStyle='#ffc2d6';ctx.beginPath();ctx.arc(x+5,y-11,5,0,7);ctx.fill();ctx.fillStyle='#14301f';ctx.beginPath();ctx.arc(x+11,y-4,1.6,0,7);ctx.fill();ctx.fillStyle='#ff8fa3';ctx.beginPath();ctx.arc(x+15,y-2,1.8,0,7);ctx.fill()}
  else{ctx.fillStyle='#ff9a3c';ctx.beginPath();ctx.ellipse(x-2,y,14,8,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(x-14,y);ctx.lineTo(x-26,y-8);ctx.lineTo(x-26,y+8);ctx.fill();ctx.fillStyle='#14301f';ctx.beginPath();ctx.arc(x+7,y-2,1.8,0,7);ctx.fill()}}
function folArt(k,x,T,lost){const hop=RM||lost?0:Math.abs(Math.sin(T/110))*5,y=180-hop;
  if(k==='firefly'){const gl=.5+.5*Math.sin(T/200);const g2=ctx.createRadialGradient(x,y-8,1,x,y-8,14);g2.addColorStop(0,'rgba(255,245,150,'+(lost?.3:gl)+')');g2.addColorStop(1,'rgba(255,245,150,0)');ctx.fillStyle=g2;ctx.beginPath();ctx.arc(x,y-8,14,0,7);ctx.fill();ctx.fillStyle='#3d2f5a';ctx.beginPath();ctx.ellipse(x,y-8,4,3,0,0,7);ctx.fill()}
  else{ctx.fillStyle=lost?'#f0dc8a':'#ffe14d';ctx.beginPath();ctx.ellipse(x,y-6,9,7,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(x+7,y-13,5,0,7);ctx.fill();ctx.fillStyle='#ff9a3c';ctx.beginPath();ctx.moveTo(x+11,y-13);ctx.lineTo(x+16,y-12);ctx.lineTo(x+11,y-10);ctx.fill();ctx.fillStyle='#14301f';ctx.beginPath();ctx.arc(x+8,y-15,1.3,0,7);ctx.fill()}
  if(lost){ctx.fillStyle='#4aa3df';ctx.beginPath();ctx.arc(x+4,y-20,2,0,7);ctx.fill();ctx.font='800 10px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillStyle='#14301f';ctx.fillText('?',x,y-26)}}
function drawHills(cam,vw,T){
  const L=Math.max(cam-30,S0-300),Rr=cam+vw+30,pts=[];for(let x=L;x<=Rr;x+=6)pts.push([x,hillH(x)]);
  // snowy hill body
  ctx.fillStyle='#f4f9fd';ctx.beginPath();ctx.moveTo(L,240);pts.forEach(([x,h])=>ctx.lineTo(x,160-h));ctx.lineTo(Rr,240);ctx.closePath();ctx.fill();
  // the icy path follows the ground
  ctx.fillStyle='#cfe6f5';ctx.beginPath();pts.forEach(([x,h],i)=>i?ctx.lineTo(x,160-h):ctx.moveTo(x,160-h));for(let i=pts.length-1;i>=0;i--)ctx.lineTo(pts[i][0],194-pts[i][1]*.65);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#9fc8e4';ctx.lineWidth=2;ctx.beginPath();pts.forEach(([x,h],i)=>i?ctx.lineTo(x,160-h):ctx.moveTo(x,160-h));ctx.stroke();
  // speed lines on the downhills
  ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=2;[[.26,.38],[.72,.84]].forEach(([a,b])=>{for(let x=obX(a)+20;x<obX(b)-10;x+=36){const h=hillH(x);ctx.beginPath();ctx.moveTo(x,176-h*.8);ctx.lineTo(x+18,176-hillH(x+18)*.8);ctx.stroke()}});
  // icy water in the jump gaps
  [[.46,.51],[.90,.94]].forEach(([a,b])=>{const x0=obX(a),x1=obX(b);if(x1<L||x0>Rr)return;ctx.fillStyle='#3b8fd0';ctx.fillRect(x0,156,x1-x0,90);ctx.fillStyle='#ffffff';for(let i=0;i<3;i++){const x=x0+(i+.5)*(x1-x0)/3+Math.sin(T/400+i)*3;rr(x-8,168+i*7,16,5,2);ctx.fill()}
    ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=1.5;for(let i=0;i<4;i++){const y=190+i*10;ctx.beginPath();ctx.moveTo(x0+6,y);ctx.lineTo(x1-6,y);ctx.stroke()}});
}
function slideArt(k,x0,x1,course,T){const ice=course==='ice',w=x1-x0;
  if(k==='up'){ctx.fillStyle=ice?'#e8f4fc':'#7a8a5a';ctx.beginPath();ctx.moveTo(x0,160);ctx.lineTo(x1,142);ctx.lineTo(x1,160);ctx.closePath();ctx.fill();ctx.fillStyle=ice?'rgba(160,200,230,.35)':'rgba(90,60,30,.25)';ctx.fillRect(x0,160,w,34);ctx.font='800 16px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillStyle='rgba(20,48,31,.4)';ctx.fillText('↗',x0+w/2,180)}
  else if(k==='down'){ctx.fillStyle=ice?'rgba(170,225,255,.85)':'rgba(120,190,240,.6)';ctx.fillRect(x0,160,w,34);ctx.strokeStyle='#fff';ctx.lineWidth=2;for(let x=x0+10;x<x1-20;x+=34){ctx.beginPath();ctx.moveTo(x,170+hash(x)*14);ctx.lineTo(x+20,170+hash(x)*14);ctx.stroke()}ctx.font='800 16px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillStyle='rgba(20,48,31,.4)';ctx.fillText('↘',x0+w/2,180)}
  else{ctx.fillStyle=ice?'#9fd0f0':'#3b8fd0';ctx.fillRect(x0,158,w,40);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.5;for(let i=0;i<3;i++){const x=x0+(i+.5)*w/3+Math.sin(T/400+i)*3;ctx.beginPath();ctx.moveTo(x-6,176+i*5);ctx.lineTo(x+6,176+i*5);ctx.stroke()}
    ctx.fillStyle=ice?'#ffffff':'#8a5a2b';ctx.beginPath();ctx.moveTo(x0-36,194);ctx.lineTo(x0,174);ctx.lineTo(x0,194);ctx.closePath();ctx.fill()}}
function drawMisFx(c,now){
  const m=curMis(),X=MX;if(!m||!X||c!==me)return;const hx=headX(c),o=c.ob||{bumps:0};
  if(m.type==='egg'&&!c.failed){const x=hx-70,y=150;ctx.fillStyle=m.item==='fruit'?'#ff6b8a':'#fff6e8';ctx.strokeStyle='#c9b49a';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(x,y,9,12,0,0,7);ctx.fill();ctx.stroke();if(m.item==='egg'){ctx.fillStyle='#9fd6ef';ctx.beginPath();ctx.ellipse(x,y,9,12,0,0,7);ctx.fill()}
    ctx.strokeStyle='#5a3a1a';ctx.lineWidth=1.3;for(let i=0;i<Math.min(3,o.bumps);i++){ctx.beginPath();ctx.moveTo(x-6+i*4,y-8+i*6);ctx.lineTo(x-1+i*4,y-3+i*6);ctx.lineTo(x-4+i*4,y+1+i*6);ctx.stroke()}}
  if(m.type==='heat'&&X.heat>50){ctx.fillStyle='rgba(255,80,40,'+((X.heat-50)/100)+')';ctx.beginPath();ctx.ellipse(hx-60,172,70,22,0,0,7);ctx.fill()}
}
// test-only autopilot (?cardtest=1): spins like a perfect player at a given pace
function apRPM(c,now){const m=curMis();if(!m)return 0;const R=m.rpm*(window.__APF||1),t=(now-startT)/1000,hx=headX(c),X=MX;
  switch(m.type){
    case 'red':{const p=redPhase(t)[0];return p==='green'?R:0}
    case 'catch':{const nx=X.items.find(it=>!it.done);if(!nx)return R;const d=nx.x+40-hx,tl=Math.max(.15,nx.t-t);return Math.max(0,Math.min(R*1.6,d/tl/UPS(1)))}
    case 'egg':return Math.min(R,m.lim*.93);case 'duck':return Math.max(m.dlo*1.1,Math.min(m.dhi*.9,R));case 'water':return Math.max(R,m.wmin*1.06);
    case 'heat':return Math.min(R,m.hot*.97);case 'slide':{const nx=X.seg.find(([k,a])=>k==='jump'&&obX(a)>hx);return nx&&obX(nx[1])-hx<260?Math.max(R,m.jmin*1.1):R}
    case 'beat':return m.water?Math.max(R,m.wmin*1.06):R;
    case 'ski':return R;
    case 'obst':{const L=obLayout(m);for(const [k,a,b] of L){const x0=obX(a),x1=obX(b);if(hx<x0-60||hx>x1)continue;if(k==='quiet')return Math.min(R,m.qmax*.9);if(k==='push')return Math.max(R,m.pmin*1.1);if(k==='boost')return Math.max(R,m.bmin*1.05)}return R}
  }return R}

// ---------- animal videos, the butterfly ending (drawn on the game canvas, no video files) ----------
let VID=null;
function vidPanel(){panel='vid';const k=VID.kind==='animal'?VID.ch:null;
  ov.innerHTML=`<div class="vidbar">${k?`<div class="vt">${icImg(k)}<b>${esc(t('ch_'+k))}</b></div><p>${esc(t('fact_'+k))}</p>`:''}<button class="sec" data-act="vidskip">${t('skipVid')}</button></div>`}
function playVid(ch,done){VID={kind:'animal',ch,t0:performance.now(),dur:7000,done,c:mk(SIG[ch],'','bot',null,ch),last:0};VID.c.phi=0;vidPanel();sfx.unlock&&sfx.unlock()}
function playEnding(done){VID={kind:'end',t0:performance.now(),dur:17500,done,c:mk(SIG.cat,'','bot',null,'cat'),last:0};vidPanel();sfx.champion&&sfx.champion()}
function playVids(list,done){if(!list.length){done();return}playVid(list[0],()=>playVids(list.slice(1),done))}
function endVid(){const d=VID&&VID.done;VID=null;if(d)d();else home()}
function drawVid(now){
  const tt=(now-VID.t0)/1000;if(tt*1000>VID.dur){endVid();return}
  if(VID.kind==='end'){drawEnding(tt,now);return}
  const c=VID.c,dt=VID.last?Math.min(50,now-VID.last):16;VID.last=now;
  const rpm=110+240*Math.max(0,Math.min(1,(tt-.6)/4));c.w=rpm*2*Math.PI/60;c.disp+=(rpm-c.disp)*Math.min(1,dt/90);c.top=Math.max(c.top,c.w);
  c.phi+=c.w*GAIN*dt/1000;c.spin+=c.w*dt/1000;
  drawLane(c,[],0,H,now,false);
  // title strip at the top
  ctx.save();ctx.fillStyle='rgba(20,48,31,.78)';rr(W/2-150,14,300,40,20);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 20px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(t('ch_'+VID.ch),W/2,35);ctx.restore();
}
// extra effects for each animal's video (world coordinates, after the animal is drawn)
function vidFx(c,now){
  const ch=c.char,hx=headX(c),T=RM?0:now,tt=(now-VID.t0)/1000;ctx.save();
  const bub=(x,y,n)=>{ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=1.5;for(let i=0;i<n;i++){const yy=y-((T/12+i*23)%90);ctx.beginPath();ctx.arc(x+Math.sin(T/300+i)*6,yy,2+i%3,0,7);ctx.stroke()}};
  if(ch==='cat'){for(let k=0;k<6;k++){const lx=S0+260+k*260;if(hx>lx+10)continue;ctx.fillStyle='#3f9e3a';ctx.beginPath();ctx.ellipse(lx,170,16,8,-.4,0,7);ctx.fill();ctx.strokeStyle='#2a6e22';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(lx-14,176);ctx.lineTo(lx+12,164);ctx.stroke()}
    const lastL=S0+260+Math.floor((hx-S0-270)/260)*260;if(hx-lastL<60&&hx>S0+270){ctx.fillStyle='#14301f';ctx.font='800 14px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText('munch!',hx,128)}}
  if(ch==='inch'){ctx.fillStyle='#ffe9a8';ctx.fillRect(hx-400,196,800,10);ctx.fillStyle='#7a5a00';ctx.font='700 8px "Baloo 2",sans-serif';ctx.textAlign='center';for(let x=Math.floor((hx-400)/20)*20;x<hx+400;x+=20){ctx.fillRect(x,196,1,x%100===0?8:4);if(x%100===0)ctx.fillText(Math.round((x-S0)/20)+' in',x,212)}}
  if(ch==='snail'){ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(S0-40,180);ctx.lineTo(hx-60,180);ctx.stroke();for(let i=0;i<5;i++){const x=hx-80-i*70;ctx.fillStyle='rgba(255,255,255,.9)';ctx.beginPath();ctx.arc(x,178,1.6,0,7);ctx.fill()}}
  if(ch==='turtle'||ch==='crab'||ch==='puffer')bub(hx-10,150,6);
  if(ch==='garter'&&Math.sin(T/260)>.4){ctx.strokeStyle='#e0402f';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(hx+4,172);ctx.lineTo(hx+16,172);ctx.lineTo(hx+21,168);ctx.moveTo(hx+16,172);ctx.lineTo(hx+21,176);ctx.stroke()}
  if(ch==='basil'){for(let i=0;i<4;i++){const x=hx-30-i*22,r=4+((T/60+i*7)%10);ctx.strokeStyle='rgba(255,255,255,'+(1-r/14)+')';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(x,190,r*1.6,r*.5,0,0,7);ctx.stroke()}}
  if(ch==='shrimp'){const ph=[2.4,4.2,5.8].map(x=>tt-x).find(d=>d>=0&&d<.6);if(ph!=null){const r=10+ph*120;ctx.strokeStyle='rgba(255,255,255,'+(1-ph/.6)+')';ctx.lineWidth=4;ctx.beginPath();ctx.arc(hx+16,170,r,0,7);ctx.stroke();ctx.fillStyle='rgba(255,250,200,'+(1-ph/.6)+')';ctx.beginPath();ctx.arc(hx+16,170,8,0,7);ctx.fill();ctx.fillStyle='#14301f';ctx.font='900 22px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText('SNAP!',hx+16,118)}}
  if(ch==='peng'){ctx.fillStyle='rgba(255,255,255,.95)';for(let i=0;i<6;i++){const x=hx-120-((T/5+i*20)%80),y=182-hash(i+Math.floor(T/200))*16;ctx.beginPath();ctx.arc(x,y,2.4,0,7);ctx.fill()}}
  if(ch==='imugi'){const g=ctx.createRadialGradient(hx+40,140,2,hx+40,140,26);g.addColorStop(0,'rgba(255,250,200,.95)');g.addColorStop(1,'rgba(255,250,200,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(hx+40,140+Math.sin(T/300)*5,26,0,7);ctx.fill();ctx.fillStyle='#ffe680';ctx.beginPath();ctx.arc(hx+40,140+Math.sin(T/300)*5,7,0,7);ctx.fill()}
  if(ch==='centi'){ctx.fillStyle='#14301f';ctx.font='800 13px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText('so many legs!',hx-60,128)}
  ctx.restore();
}
function drawButterfly(x,y,sz,flap,open){
  ctx.save();ctx.translate(x,y);const f=open*(0.35+0.65*Math.abs(Math.cos(flap)));
  [[-1],[1]].forEach(([d])=>{ctx.save();ctx.scale(d*f,1);
    let g=ctx.createLinearGradient(0,-sz,sz*1.2,0);g.addColorStop(0,'#ff8a2a');g.addColorStop(1,'#ffd23f');ctx.fillStyle=g;ctx.strokeStyle='#3a1f5a';ctx.lineWidth=sz*.06;
    ctx.beginPath();ctx.moveTo(0,-sz*.1);ctx.bezierCurveTo(sz*.3,-sz*1.2,sz*1.3,-sz*1.1,sz*1.1,-sz*.2);ctx.closePath();ctx.fill();ctx.stroke();
    g=ctx.createLinearGradient(0,0,sz,sz);g.addColorStop(0,'#b05cff');g.addColorStop(1,'#ff6bb5');ctx.fillStyle=g;
    ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(sz*.9,sz*.1,sz*.9,sz*.9,sz*.2,sz*.7);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#fff';[[.65,-.6,.12],[.85,-.35,.08],[.45,.4,.1]].forEach(([a,b,r])=>{ctx.beginPath();ctx.arc(sz*a,sz*b,sz*r,0,7);ctx.fill()});ctx.restore()});
  ctx.fillStyle='#3a1f5a';ctx.beginPath();ctx.ellipse(0,sz*.15,sz*.1,sz*.55,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(0,-sz*.45,sz*.13,0,7);ctx.fill();
  ctx.strokeStyle='#3a1f5a';ctx.lineWidth=sz*.04;[-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(0,-sz*.5);ctx.quadraticCurveTo(d*sz*.2,-sz*.9,d*sz*.32,-sz*.95);ctx.stroke();ctx.beginPath();ctx.arc(d*sz*.32,-sz*.95,sz*.05,0,7);ctx.fill()});
  ctx.restore();
}
// ~17 s ending: munch → chrysalis → wiggle and crack → butterfly → flight over the 6 worlds → congratulations
function drawEnding(tt,now){
  const s=Math.min(W,H)/420,cx=W/2,cy=H*.45,T=RM?0:now,ease=x=>x<0?0:x>1?1:x*x*(3-2*x);
  const dawn=ease((tt-10.5)/2.5),lerp=(a,b,u)=>a.map((v,i)=>Math.round(v+(b[i]-v)*u)),rgb=a=>`rgb(${a})`;
  const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,rgb(lerp([11,26,58],[255,184,120],dawn)));g.addColorStop(1,rgb(lerp([42,63,110],[255,236,196],dawn)));ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  if(dawn<1){ctx.globalAlpha=1-dawn;ctx.fillStyle='#fff';for(let k=0;k<40;k++){ctx.globalAlpha=(1-dawn)*(.4+.6*Math.abs(Math.sin(T/700+k)));ctx.beginPath();ctx.arc(hash(k)*W,hash(k+40)*H*.6,1+hash(k+80)*1.5,0,7);ctx.fill()}
    ctx.globalAlpha=1-dawn;ctx.fillStyle='#fffbe0';ctx.beginPath();ctx.arc(W*.82,H*.16,26*s,0,7);ctx.fill();ctx.globalAlpha=1}
  else{ctx.fillStyle='#ffe066';ctx.beginPath();ctx.arc(W*.8,H*.2,34*s,0,7);ctx.fill()}
  const fly=tt>=11;
  if(!fly){
    // the branch
    ctx.strokeStyle='#6b4a2a';ctx.lineWidth=14*s;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(cx-210*s,cy-90*s);ctx.quadraticCurveTo(cx,cy-110*s,cx+210*s,cy-86*s);ctx.stroke();
    [[-150,-.5],[-60,.4],[120,-.3],[180,.5]].forEach(([dx,a])=>{ctx.fillStyle='#3f9e3a';ctx.beginPath();ctx.ellipse(cx+dx*s,cy-104*s,22*s,10*s,a,0,7);ctx.fill()});
    if(tt<4){ // caterpillar munching along the branch
      const c=VID.c,X0=500,k=s*1.1;c.w=(tt<2.6?3:0);c.phi=(X0-S0+Math.min(tt,2.6)*40)*2*Math.PI/STEP;c.spin+=.05;
      ctx.save();ctx.globalAlpha=tt<3?1:1-(tt-3);ctx.translate(cx-headX(c)*k+30*s,cy-102*s-176*k+8*s);ctx.scale(k,k);drawRacer(c,now,false);ctx.restore();
      const leaf=Math.max(0,1-tt/3);ctx.fillStyle='#5cbf4a';ctx.beginPath();ctx.ellipse(cx+70*s,cy-112*s,18*s*leaf,9*s*leaf,-.3,0,7);ctx.fill();
      if(tt<3&&Math.sin(T/120)>0){ctx.fillStyle='#fff';ctx.font='800 '+Math.round(16*s)+'px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText('munch munch',cx+40*s,cy-150*s)}}
    // the chrysalis
    if(tt>=3&&tt<11){const grow=ease((tt-3)/2.5),wig=tt>6&&tt<8.6?Math.sin(T/70)*.18*Math.min(1,(tt-6)):0,hx=cx+10*s,hy=cy-92*s;
      ctx.strokeStyle='rgba(255,255,255,.8)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(hx,hy);ctx.lineTo(hx,hy+10*s);ctx.stroke();
      ctx.save();ctx.translate(hx,hy+10*s);ctx.rotate(wig);
      if(tt<8.6){if(tt>6){const gl=ctx.createRadialGradient(0,45*s,2,0,45*s,70*s);gl.addColorStop(0,'rgba(255,240,150,'+(.6*Math.min(1,(tt-6)/1.5))+')');gl.addColorStop(1,'rgba(255,240,150,0)');ctx.fillStyle=gl;ctx.beginPath();ctx.arc(0,45*s,70*s,0,7);ctx.fill()}
        ctx.fillStyle='#6fcf5a';ctx.strokeStyle='#2f7d2a';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(28*s*grow,10*s,30*s*grow,70*s*grow,0,90*s*grow);ctx.bezierCurveTo(-30*s*grow,70*s*grow,-28*s*grow,10*s,0,0);ctx.fill();ctx.stroke();
        ctx.fillStyle='#ffd23f';for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(-14*s+i*7*s,24*s*grow,1.8*s*grow,0,7);ctx.fill()}
        if(tt>7.6){ctx.strokeStyle='#14301f';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-6*s,40*s);ctx.lineTo(2*s,52*s);ctx.lineTo(-4*s,62*s);ctx.lineTo(4*s,74*s);ctx.stroke()}}
      else{ctx.fillStyle='rgba(180,230,170,.6)';ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(28*s,10*s,24*s,60*s,6*s,70*s);ctx.lineTo(-6*s,70*s);ctx.bezierCurveTo(-24*s,60*s,-28*s,10*s,0,0);ctx.fill()}
      ctx.restore();
      if(tt>=8.6){const op=ease((tt-8.6)/2);drawButterfly(hx,hy+70*s-op*30*s,60*s,T/(op<1?400:160),op);
        if(tt<9.4){ctx.fillStyle='rgba(255,255,255,'+(1-(tt-8.6)/.8)+')';ctx.fillRect(0,0,W,H)}}}
  }else{
    // flying over the six worlds
    const u=(tt-11),cols=[['#8fdc6a','Garden'],['#4fa3e0','Pond'],['#2f8fb8','Sea'],['#e3ad66','Desert'],['#e4f4ff','Ice'],['#4a5f8a','Waterfall']],bw=W*.55,off=u*W*.42;
    cols.forEach(([col,name],i)=>{const x=i*bw-off+W*.3;if(x>W||x+bw<0)return;ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x,H);ctx.lineTo(x,H*.78);ctx.quadraticCurveTo(x+bw/2,H*.68,x+bw,H*.78);ctx.lineTo(x+bw,H);ctx.fill();
      ctx.fillStyle='rgba(20,48,31,.7)';ctx.font='800 '+Math.round(16*s)+'px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText(name,x+bw/2,H*.86)});
    const bx=tt<14.5?cx:cx,by=cy-20*s+Math.sin(T/350)*18*s;drawButterfly(bx,by,48*s,T/150,1);
    for(let k=0;k<14;k++){const a=T/900+k,r=(70+k*9)*s;ctx.fillStyle=['#ffd23f','#ff6bb5','#7ee0ff'][k%3];ctx.globalAlpha=.7;ctx.beginPath();ctx.arc(bx-r*.8-((T/8+k*40)%200)*s,by+Math.sin(a)*30*s,3*s,0,7);ctx.fill()}ctx.globalAlpha=1;
    if(tt>=14.5){const a=ease((tt-14.5)/.8);ctx.globalAlpha=a;ctx.fillStyle='rgba(20,48,31,.82)';rr(cx-170*s,cy+70*s,340*s,96*s,18*s);ctx.fill();ctx.fillStyle='#ffd23f';ctx.textAlign='center';ctx.font='900 '+Math.round(24*s)+'px "Baloo 2",sans-serif';ctx.fillText(t('endTitle'),cx,cy+108*s);
      ctx.fillStyle='#fff';ctx.font='800 '+Math.round(18*s)+'px "Baloo 2",sans-serif';ctx.fillText('⭐ '+totalStars()+' / '+STAR_MAX,cx,cy+142*s);ctx.globalAlpha=1}
  }
  const cap=tt<3?'endC1':tt<6?'endC2':tt<8.6?'endC3':tt<11?'endC4':tt<14.5?'endC5':null;
  if(cap){ctx.fillStyle='rgba(20,48,31,.7)';rr(cx-160*s,16,320*s,36*s,18*s);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 '+Math.round(17*s)+'px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t(cap),cx,16+18*s);ctx.textBaseline='alphabetic'}
}
// ---------- bonus: penguin ski jump (mission 31; the take-off speed is all that matters) ----------
const SKI_XA=S0+350,SKI_XL=S0+850,SKI_HL=110,SKI_LAND=900,SKI_FT=.52;
const skiData=()=>{try{const d=JSON.parse(store.get('cr-ski')||'{}');return{s:+d.s||0,ft:+d.ft||0}}catch(e){return{s:0,ft:0}}};
const skiOpen=()=>getStars()[23]>0;
const skiRun=x=>x<SKI_XA?0:x<SKI_XL?SKI_HL*(1-Math.cos(Math.PI*(x-SKI_XA)/(SKI_XL-SKI_XA)))/2:0;
const skiLand=x=>x<SKI_XL?0:x<SKI_XL+SKI_LAND?(SKI_HL-15)*(1-(1-Math.cos(Math.PI*(x-SKI_XL)/SKI_LAND))/2):0;
const skiGround=x=>x<=SKI_XL?skiRun(x):skiLand(x);
function skiStep(c,now,hx,dt){
  const X=MX,S=X.ski;if(S.ph!=='run')return 0;
  if(hx>=SKI_XL){S.rpm=Math.round(c.disp);const v0=UPS(S.rpm);S.ph='air';S.x=SKI_XL;S.y=SKI_HL;S.vx=v0*Math.cos(.38);S.vy=v0*Math.sin(.38);sfx.whoosh();
    const o=c.ob||(c.ob={bumps:0,hit:{},stun:0,boost:0,low:0,msg:'',msgT:0,px:hx});o.msg='🚀 '+S.rpm+' RPM!';o.msgT=now+1500;return 0}
  return hx>SKI_XA?.75:1;
}
function skiWorld(now,dt){
  const c=me,S=MX.ski;if(S.ph==='run'||S.ph==='stop')return;const d=dt/1000;
  if(S.ph==='air'){S.vy-=260*d;S.x+=S.vx*d;S.y+=S.vy*d;if(S.y<=skiLand(S.x)){S.ph='slide';S.v=S.vx;S.y=skiLand(S.x);sfx.puff&&sfx.puff()}}
  else{const a=S.x<SKI_XL+SKI_LAND?0:-55;S.v=Math.max(S.x<SKI_XL+SKI_LAND?110:0,S.v+a*d);if(S.v<=0){S.ph='stop';S.ft=Math.round((S.x-SKI_XL)*SKI_FT*10)/10;c.done=now-startT;if(!firstDone)firstDone=now;sfx.ding()}S.x+=S.v*d;S.y=skiLand(S.x)}
  S.ft=Math.round((S.x-SKI_XL)*SKI_FT*10)/10;c.phi=(S.x-S0)*2*Math.PI/STEP;
}
function drawSki(cam,vw,T){
  const S=MX.ski,L=Math.max(cam-30,S0-400),Rr=cam+vw+30,pts=[];for(let x=L;x<=Rr;x+=6)pts.push([x,skiGround(x)]);
  ctx.fillStyle='#f4f9fd';ctx.beginPath();ctx.moveTo(L,240);pts.forEach(([x,h])=>ctx.lineTo(x,160-h));ctx.lineTo(Rr,240);ctx.closePath();ctx.fill();
  ctx.fillStyle='#cfe6f5';ctx.beginPath();pts.forEach(([x,h],i)=>i?ctx.lineTo(x,160-h):ctx.moveTo(x,160-h));for(let i=pts.length-1;i>=0;i--)ctx.lineTo(pts[i][0],194-pts[i][1]*.7);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#9fc8e4';ctx.lineWidth=2;ctx.beginPath();pts.forEach(([x,h],i)=>i?ctx.lineTo(x,160-h):ctx.moveTo(x,160-h));ctx.stroke();
  // the take-off lip
  if(SKI_XL>L&&SKI_XL<Rr){ctx.fillStyle='#8a5a2b';ctx.fillRect(SKI_XL-3,160-SKI_HL,6,SKI_HL+40);ctx.fillStyle='#e0402f';rr(SKI_XL-40,96-SKI_HL,80,22,6);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🚀 TAKE OFF',SKI_XL,107-SKI_HL)}
  // distance boards every 100 ft from the lip
  for(let f=100;f<2000;f+=100){const x=SKI_XL+f/SKI_FT;if(x<L||x>Rr)continue;const h=skiGround(x);ctx.fillStyle='#7a5530';ctx.fillRect(x-1.5,128-h,3,32);rr(x-24,108-h,48,20,6);ctx.fillStyle='#fff';ctx.fill();ctx.strokeStyle='#14301f';ctx.lineWidth=1.5;ctx.stroke();ctx.fillStyle='#14301f';ctx.font='800 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(f+' ft',x,118.5-h)}
  // best and star marks
  const best=skiData().ft;[[MIS[30].g[0],'⭐'],[MIS[30].g[1],'⭐⭐'],[MIS[30].g[2],'⭐⭐⭐']].forEach(([f,lab])=>{const x=SKI_XL+f/SKI_FT;if(x<L||x>Rr)return;ctx.fillStyle='rgba(255,210,63,.35)';ctx.fillRect(x-2,160-skiGround(x),4,34);ctx.font='800 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillStyle='#7a5a00';ctx.fillText(lab,x,206)});
  if(best){const x=SKI_XL+best/SKI_FT;if(x>L&&x<Rr){const h=skiGround(x);ctx.fillStyle='#7a3cff';ctx.fillRect(x-1.5,120-h,3,40);ctx.beginPath();ctx.moveTo(x+1.5,120-h);ctx.lineTo(x+24,128-h);ctx.lineTo(x+1.5,136-h);ctx.fill();ctx.font='800 10px "Baloo 2",sans-serif';ctx.textAlign='left';ctx.fillText('BEST '+best+' ft',x+4,114-h)}}
  if(S.ph==='stop'){const x=S.x,h=skiGround(x);ctx.fillStyle='#e0402f';ctx.fillRect(x-1.5,110-h,3,50);ctx.beginPath();ctx.moveTo(x+1.5,110-h);ctx.lineTo(x+28,119-h);ctx.lineTo(x+1.5,128-h);ctx.fill()}
}

function upd(c,now,dt){
  const k=1-Math.exp(-dt/130);
  if(c.kind==='bot'){
    if(state==='race'&&c.done==null){if(now>c.bt){c.bt=now+600+Math.random()*900;c.btw=(c.bw||botW())*(.82+Math.random()*.36)}c.w+=(c.btw-c.w)*(1-Math.exp(-dt/400))}
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
    let inst=dt>0?c.acc/dt*1000:0;c.acc=0;if(window.__AP&&state==='race'&&c===me&&c.done==null)inst=apRPM(c,now)*2*Math.PI/60;c.w+=(inst-c.w)*k;
  }
  const sp=Math.min(CAP,Math.max(0,c.w));
  c.disp+=(rpmOf(sp)-c.disp)*Math.min(1,dt/90);
  if(c.kind!=='human')c.ang+=sp*dt/1000;
  if(state==='race'&&c.done==null&&c.kind==='human'&&mode==='solo'){const ms=MIS[raceLv-1];if(ms&&ms.type==='zone'){c.zall=(c.zall||0)+dt;if(c.disp>=ms.lo&&c.disp<=ms.hi)c.zin=(c.zin||0)+dt}}
  if(state==='race'&&c.done==null&&c.kind!=='remote'){
    const mlt=misStep(c,now,headX(c),dt);c.phi+=Math.max(sp*mlt,c.minSp||0)*GAIN*dt/1000;c.spin+=sp*dt/1000;c.top=Math.max(c.top,sp/(2*Math.PI));
    if(mode!=='practice'&&headX(c)>=TRACK&&!(MX&&MX.ski)){c.done=now-startT;if(!firstDone)firstDone=now;if(c.kind==='human'){sfx.ding();buzz(120);if(c===me)addSpd(c.done)}if(mode==='online'&&c===me&&net)net.send({t:'fin',time:c.done,spin:c.spin,top:c.top});if(mode==='online'&&c.kind==='bot'&&net)net.send({t:'fin',b:c.id,time:c.done,spin:c.spin,top:c.top})}
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
// ---------- Imugi (이무기): Korean legendary serpent; final boss of Mission, playable after beating it ----------
function drawImugi(c,now){
  const base=178,hx=headX(c),hy=base-24,fast=c.disp>=REDRPM||exprOf(c)==='win';shadow(hx-70,78);
  const pts=snakePts(c,hx,150,u=>base-14-Math.max(0,Math.sin(u*7-c.phi*1.2))*10*Math.min(1,u*2)+u*4);
  tube(pts,20,c.dark,c.body);
  ctx.strokeStyle=c.spot;ctx.lineWidth=5;ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y+5):ctx.moveTo(x,y+5));ctx.stroke();
  ctx.fillStyle=c.dark;for(let i=3;i<pts.length;i+=3){const [x,y]=pts[i];ctx.beginPath();ctx.moveTo(x-4,y-9);ctx.lineTo(x,y-15);ctx.lineTo(x+4,y-9);ctx.fill()}
  // head: wide snout, small horn nubs, whiskers
  oval(hx+3,hy,20,15,0,headFill(c),c.dark,2.4);oval(hx+20,hy+5,12,8,0,headFill(c),c.dark,2.2);
  ctx.fillStyle='#e8f6ef';ctx.strokeStyle=c.dark;ctx.lineWidth=1.6;[[-8,0],[3,2]].forEach(([dx,dy])=>{ctx.beginPath();ctx.moveTo(hx+dx-3,hy-12+dy);ctx.lineTo(hx+dx-7,hy-22+dy);ctx.lineTo(hx+dx+3,hy-13+dy);ctx.closePath();ctx.fill();ctx.stroke()});
  const wv=RM?0:Math.sin(now/280+c.ph)*3;ctx.strokeStyle=c.dark;ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(hx+24,hy+3);ctx.bezierCurveTo(36,hy-4+wv,42,hy+8,50,hy+2-wv);ctx.moveTo(hx+24,hy+8);ctx.bezierCurveTo(34,hy+16,42,hy+18+wv,50,hy+24);ctx.stroke();
  // the magic pearl (yeouiju) it is chasing; glows brighter when racing fast
  const px=hx+40,py=hy-22+(RM?0:Math.sin(now/300)*3),pr=fast?8:6;
  if(!noShadow){const g=ctx.createRadialGradient(px,py,1,px,py,pr*3);g.addColorStop(0,'rgba(255,240,150,.9)');g.addColorStop(1,'rgba(255,240,150,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(px,py,pr*3,0,7);ctx.fill()}
  ctx.fillStyle='#ffe27a';ctx.strokeStyle='#e0a000';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(px,py,pr,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#fffbe0';ctx.beginPath();ctx.arc(px-2,py-2,pr*.35,0,7);ctx.fill();
  return {x:hx,y:hy-1,r:14};
}
// ---------- Golden Dragon (unlocks after level 29) and the level-30 boss, the Dragon King ----------
function flame(x,y,s,rot,cols,now,k){ctx.save();ctx.translate(x,y);ctx.rotate(rot);const fl=RM?1:1+.12*Math.sin(now/70+(k||0)*1.7);ctx.scale(s,s*fl);
  cols.forEach((col,i)=>{const q=1-i*.28;ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(-9*q,-6*q,-6*q,-20*q,0,-30*q);ctx.bezierCurveTo(6*q,-20*q,9*q,-6*q,0,0);ctx.fill()});ctx.restore()}
function drawDragon(c,now){
  const king=c.char==='king',hx=headX(c),base=178,S=.6,fast=c.disp>=REDRPM||exprOf(c)==='win';
  const body=c.body,dark=c.dark,belly=king?'#2b2b2b':'#ff8a3c',spike=king?'#1a1a1a':'#ff6a1a';
  const fire=['#ff3b1a','#ff8a1a','#ffe04a'],mane=king?['#7a1cff','#c06bff','#ffd6ff']:fire;
  if(!noShadow){const ag=ctx.createRadialGradient(hx-40,base-28,6,hx-40,base-28,95);ag.addColorStop(0,king?'rgba(170,60,255,.4)':'rgba(255,230,120,.45)');ag.addColorStop(1,'rgba(255,230,120,0)');ctx.fillStyle=ag;ctx.beginPath();ctx.arc(hx-40,base-28,95,0,7);ctx.fill()}
  shadow(hx-60,62);
  ctx.save();ctx.translate(hx,base);ctx.scale(S,S);
  const n=9,sp=19,bump=((c.phi*(1.25/3*.7)/(2*Math.PI))*(n+1))%(n+1)-.5,seg=[];
  for(let i=0;i<n;i++){const d=Math.abs(i-bump),k=d<1.5?(1+Math.cos(Math.PI*d/1.5))/2:0,r=13+4*Math.sin(Math.PI*(i+1)/(n+1));seg.push({x:-22-(n-1-i)*sp,y:-r-k*14,r})}
  if(fast&&!noShadow)for(let i=0;i<7;i++)flame(seg[0].x-24-i*16,-4,1.3-i*.12,-1.35,fire,now,i);
  flame(seg[0].x-10,seg[0].y,.9,-1.2,['#ff3b1a','#ffb02a'],now,9);
  [1,5].forEach((i,j)=>{const s2=seg[i],st=Math.sin(c.phi*1.2+j*Math.PI)*5;ctx.strokeStyle=dark;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(s2.x,s2.y+s2.r-4);ctx.lineTo(s2.x+4+st,-Math.max(0,-st)*.6);ctx.stroke();ctx.fillStyle='#fff3d0';[-3,1,5].forEach(dx=>{ctx.beginPath();ctx.moveTo(s2.x+4+st+dx,0);ctx.lineTo(s2.x+6+st+dx,4);ctx.lineTo(s2.x+8+st+dx,0);ctx.fill()})});
  seg.forEach(s2=>{ctx.fillStyle=spike;ctx.beginPath();ctx.moveTo(s2.x-6,s2.y-s2.r+3);ctx.lineTo(s2.x,s2.y-s2.r-10);ctx.lineTo(s2.x+6,s2.y-s2.r+3);ctx.fill();
    ctx.fillStyle=body;ctx.strokeStyle=dark;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(s2.x,s2.y,s2.r,0,7);ctx.fill();ctx.stroke();
    ctx.fillStyle=belly;ctx.beginPath();ctx.ellipse(s2.x,s2.y+s2.r*.45,s2.r*.7,s2.r*.35,0,0,7);ctx.fill();
    ctx.strokeStyle=king?'rgba(0,0,0,.35)':'rgba(183,120,0,.55)';ctx.lineWidth=1.3;[[-4,-3],[4,-3],[0,-8]].forEach(([dx,dy])=>{ctx.beginPath();ctx.arc(s2.x+dx,s2.y+dy,3.2,Math.PI*.1,Math.PI*.9);ctx.stroke()})});
  const hy=-34;
  for(let i=0;i<6;i++)flame(-10-i*3,hy-6+i*4,1.15,-2.1+i*.35,mane,now,i);
  ctx.fillStyle=king?'#222':'#fff3d0';ctx.strokeStyle=dark;ctx.lineWidth=1.8;[[-6,0],[4,4]].forEach(([dx,dy])=>{ctx.beginPath();ctx.moveTo(dx-3,hy-17+dy);ctx.quadraticCurveTo(dx-14,hy-38+dy,dx-26,hy-34+dy);ctx.quadraticCurveTo(dx-10,hy-30+dy,dx+3,hy-15+dy);ctx.closePath();ctx.fill();ctx.stroke()});
  ctx.fillStyle=headFill(c);ctx.strokeStyle=dark;ctx.lineWidth=2.5;ctx.beginPath();ctx.ellipse(22,hy+6,17,11,0,0,7);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.arc(0,hy,21,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=dark;ctx.beginPath();ctx.arc(33,hy+2,2,0,7);ctx.arc(28,hy+1,2,0,7);ctx.fill();
  ctx.strokeStyle=king?'#ffcf3f':'#ff6a1a';ctx.lineWidth=2;ctx.lineCap='round';const wv=RM?0:Math.sin(now/260+c.ph)*4;ctx.beginPath();ctx.moveTo(30,hy+4);ctx.bezierCurveTo(50,hy-4+wv,56,hy+18,72,hy+8-wv);ctx.moveTo(30,hy+8);ctx.bezierCurveTo(46,hy+22,58,hy+26+wv,70,hy+34);ctx.stroke();
  if(king){ctx.save();ctx.translate(-2,hy-22);ctx.rotate(-.15);ctx.fillStyle='#ffd23f';ctx.strokeStyle='#b77800';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-14,0);ctx.lineTo(-17,-16);ctx.lineTo(-8,-8);ctx.lineTo(0,-20);ctx.lineTo(8,-8);ctx.lineTo(17,-16);ctx.lineTo(14,0);ctx.closePath();ctx.fill();ctx.stroke();
    [['#ff4f6d',-8],['#4fb3ff',0],['#6fd14a',8]].forEach(([cc,xx])=>{ctx.fillStyle=cc;ctx.beginPath();ctx.arc(xx,-4,2.3,0,7);ctx.fill()});ctx.restore()}
  else if(!noShadow&&!RM){ctx.fillStyle='#fff8c0';[[-120,-60],[-40,-80],[10,-70],[-170,-30]].forEach(([dx,dy],k)=>{const tw=.5+.5*Math.sin(now/240+k*1.9);ctx.beginPath();for(let q=0;q<8;q++){const rr2=(q%2?1.4:4.2)*tw,aa=q*Math.PI/4;ctx.lineTo(dx+Math.cos(aa)*rr2,dy+Math.sin(aa)*rr2)}ctx.fill()})}
  ctx.restore();
  return {x:hx,y:base+hy*S,r:21*S};
}
const EX_FAST=100,EX_FLUSH=200,EX_RED=300; // RPM where the face starts sweating / huffing (separate from the gauge red zone)
function exprOf(c){
  if(mode==='practice')return state==='race'?(c.disp>=EX_RED?'red':c.disp>=EX_FAST?'fast':'slow'):'slow';
  if(c.failed)return 'lose';
  {const cm=c.kind==='human'&&curMis();if(cm&&cm.type!=='beat'&&c.done!=null)return missionStars(cm,c,true)>0?'win':'lose'}
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
const FST={imugi:{eyes:'slit'},dragon:{eyes:'slit',mouth:'fangs'},king:{eyes:'slit',mouth:'fangs'},cat:{},inch:{},centi:{mouth:'fangs'},turtle:{mouth:'beak',beak:'#eadba8'},snail:{eyes:'stalk'},garter:{eyes:'slit',mouth:'tongue'},frill:{},basil:{eyes:'slit'},puffer:{mouth:'pucker'},shrimp:{eyes:'stalk2',mouth:'mini'},crab:{eyes:'stalk',mouth:'mini'},peng:{eyes:'peng',mouth:'beak',beak:'#ff8a2a'}};
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
const DRAW={cat:drawCat,inch:drawInch,centi:drawCenti,turtle:drawTurtle,snail:drawSnail,garter:drawGarter,frill:drawFrill,basil:drawBasil,puffer:drawPuffer,shrimp:drawShrimp,crab:drawCrab,peng:drawPeng,dragon:drawDragon,king:drawDragon,imugi:drawImugi};
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
    // comet tail: a white ball where your finger is, with a tail that grows longer the faster you spin
    const rpm=frac*MAXRPM,zc=rpm>=REDRPM?'#ff3b30':rpm>=200?'#ffd23f':'#6fd14a',tail=Math.min(Math.PI*1.7,.25+rpm/300*Math.PI*1.2),head=ringAng-Math.PI/2,n=24,lw=Math.max(3,R*.17)*.8;
    ctx.lineCap='round';for(let i=0;i<n;i++){const a2=head-tail*i/n,b2=head-tail*(i+1)/n;ctx.strokeStyle=zc;ctx.globalAlpha=(1-i/n)*.95;ctx.lineWidth=lw*(1-i/n*.6);ctx.beginPath();ctx.arc(cx,cy,Ro,b2,a2);ctx.stroke()}
    ctx.globalAlpha=1;
    if(rpm>=REDRPM&&!RM)for(let k=0;k<6;k++){const a2=head-k*.18-.05,d=Ro+R*.14+k*R*.05,j=Math.sin(performance.now()/60+k*2)*R*.03;ctx.fillStyle=k%2?'#ffd23f':'#ff8a2a';ctx.beginPath();ctx.arc(cx+Math.cos(a2)*(d+j),cy+Math.sin(a2)*(d+j),Math.max(.8,R*.05-k*R*.006),0,7);ctx.fill()}
    ctx.fillStyle='#fff';ctx.strokeStyle=zc;ctx.lineWidth=Math.max(1.5,R*.055);ctx.beginPath();ctx.arc(cx+Math.cos(head)*Ro,cy+Math.sin(head)*Ro,Math.max(3,R*.15),0,7);ctx.fill();ctx.stroke();
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
  const s=lh/220,vw=W/s,prac=mode==='practice',cmq=c===me&&curMis(),fo=cmq?(cmq.type==='chase'?.78:cmq.type==='runner'?.3:cmq.type==='catch'?.42:.52):.52,cam=prac?headX(c)-vw*.62:cmq&&cmq.type==='ski'?Math.max(-vw*.15,headX(c)-vw*.42):Math.max(-vw*.15,Math.min(headX(c)-vw*fo,TRACK+260-vw));
  ctx.save();ctx.beginPath();ctx.rect(0,y0,W,lh);ctx.clip();ctx.translate(0,y0);ctx.scale(s,s);
  const hab=habOf(c.char),sea=hab==='sea';
  // sky top, sky bottom, far hills, near hills, ground, path, path edge
  const P={garden:['#86cfff','#e6f7ff','#acdf8e','#86cc66','#5cb83c','#dcb57d','#c39459'],sea:['#1f7fc4','#7fd3f5','#3e98b8','#5ab3bd','#e3cf94','#f0dfab','#d2bb7a'],desert:['#ffb878','#ffeec4','#f5cf8c','#ebb66a','#eec57e','#f6dba6','#d6a45e'],pond:['#86cfff','#e6f7ff','#a6dc8e','#7cc866','#5cb83c','#62c0e8','#3b9ccc'],ice:['#9fd6ff','#f2fbff','#e4f4ff','#c9e7fa','#f6fcff','#d3ecfb','#a7d1ec'],waterfall:['#14203d','#3b5a8a','#2c3e66','#33466e','#2f5a6e','#4a7fa0','#9fd6ff'],volcano:c.char==='king'?['#1b0b2e','#7a1a2a','#2a0f1a','#3a1420','#3a1a1a','#2a1010','#ff7a1a']:['#3b1d6e','#d2508a','#4a1f3a','#5e2a40','#5b3a2e','#4a2c22','#ff7a1a']}[hab];
  const gr=ctx.createLinearGradient(0,0,0,150);gr.addColorStop(0,P[0]);gr.addColorStop(1,P[1]);ctx.fillStyle=gr;ctx.fillRect(0,0,vw+2,222);
  if(sea){ctx.fillStyle='rgba(255,255,255,.08)';for(let k=0;k<4;k++){const x=((k*170-cam*.08)%(vw+200)+vw+200)%(vw+200)-100;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+40,0);ctx.lineTo(x+90,150);ctx.lineTo(x+20,150);ctx.fill()}
    for(let k=0;k<10;k++){const span=vw+40,x=((hash(k)*span-cam*.2)%span+span)%span,y=150-((now/40*(0.5+hash(k+3))+hash(k+5)*150)%150);ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(x,y,2+hash(k+9)*3,0,7);ctx.stroke()}}
  else{
    if(hab==='waterfall'){ctx.fillStyle='rgba(255,255,255,.85)';for(let k=0;k<22;k++){const span=vw+40,x=((hash(k)*span-cam*.05)%span+span)%span,y=hash(k+11)*80;ctx.globalAlpha=RM?1:.5+.5*Math.sin(now/500+k);ctx.beginPath();ctx.arc(x,y,.8+hash(k+4),0,7);ctx.fill()}ctx.globalAlpha=1;
      ctx.fillStyle='#fffbe0';ctx.beginPath();ctx.arc(((vw*.8-cam*.03)%(vw+80)+vw+80)%(vw+80)-40,30,13,0,7);ctx.fill();
      const span=vw+420;for(let k=0;k<2;k++){const fx=((k*span/2+160-cam*.12)%span+span)%span-210;ctx.fillStyle=P[2];ctx.fillRect(fx-70,40,50,120);ctx.fillRect(fx+40,30,60,130);ctx.fillStyle='rgba(190,230,255,.75)';ctx.fillRect(fx-20,40,60,120);
        ctx.fillStyle='rgba(255,255,255,.7)';for(let j=0;j<5;j++){const yy=RM?j*24:((now/6+j*24)%120);ctx.fillRect(fx-16+j*11,40+yy,3,16)}ctx.fillStyle='rgba(230,245,255,.8)';ctx.beginPath();ctx.ellipse(fx+10,158,46,7,0,0,7);ctx.fill()}}
    else if(hab==='volcano'){ctx.fillStyle='rgba(255,255,255,.8)';for(let k=0;k<26;k++){const span=vw+40,x=((hash(k)*span-cam*.05)%span+span)%span,y=hash(k+11)*90,tw=RM?1:.55+.45*Math.sin(now/400+k);ctx.globalAlpha=tw;ctx.beginPath();ctx.arc(x,y,.8+hash(k+4)*1.2,0,7);ctx.fill()}ctx.globalAlpha=1;
      const span=vw+500;for(let k=0;k<2;k++){const vx=((k*span/2+200-cam*.1)%span+span)%span-250;ctx.fillStyle=P[2];ctx.beginPath();ctx.moveTo(vx-90,130);ctx.lineTo(vx-18,52);ctx.lineTo(vx+18,52);ctx.lineTo(vx+90,130);ctx.fill();ctx.fillStyle='#ff6a1a';ctx.beginPath();ctx.ellipse(vx,53,17,4,0,0,7);ctx.fill();
        for(let i=0;i<5;i++){const tt=RM?i/5:((now/1800)+i/5)%1;ctx.fillStyle=`rgba(${i%2?'255,150,60':'120,90,110'},${.6*(1-tt)})`;ctx.beginPath();ctx.arc(vx+Math.sin(tt*5+k)*6,48-tt*46,5+tt*9,0,7);ctx.fill()}}}
    else if(hab==='desert'){ctx.fillStyle='rgba(255,240,170,.55)';ctx.beginPath();ctx.arc(vw*.82,42,34,0,7);ctx.fill();ctx.fillStyle='#fff2a8';ctx.beginPath();ctx.arc(vw*.82,42,22,0,7);ctx.fill()}
    const nc=hab==='volcano'||hab==='waterfall'?0:hab==='desert'?2:4;for(let k=0;k<nc;k++){const span=vw+320,cx=((k*span/nc+60-cam*.12)%span+span)%span-160,cy=26+hash(k)*40;ctx.fillStyle=hab==='desert'?'rgba(255,255,255,.7)':'rgba(255,255,255,.92)';ctx.beginPath();ctx.arc(cx,cy,15,0,7);ctx.arc(cx+18,cy-8,19,0,7);ctx.arc(cx+38,cy,14,0,7);ctx.fill()}
    if(hab==='ice'){ctx.fillStyle='#ffffff';ctx.strokeStyle='#a7d1ec';ctx.lineWidth=1.5;for(let k=0;k<3;k++){const span=vw+300,x=((k*span/3+120-cam*.3)%span+span)%span-150;ctx.beginPath();ctx.moveTo(x,140);ctx.lineTo(x+18,96+hash(k)*14);ctx.lineTo(x+34,108);ctx.lineTo(x+52,84+hash(k+2)*16);ctx.lineTo(x+80,140);ctx.closePath();ctx.fill();ctx.stroke()}}
  }
  hills(vw,cam*.25,116,P[2],90,16);hills(vw,cam*.45,134,P[3],60,11);
  if(hab==='ice'&&!RM){ctx.fillStyle='rgba(255,255,255,.9)';for(let k=0;k<22;k++){const span=vw+40,x=((hash(k)*span-cam*.15+Math.sin(now/900+k)*10)%span+span)%span,y=((now/30*(0.4+hash(k+3))+hash(k+5)*220)%220);ctx.beginPath();ctx.arc(x,y,1.4+hash(k+9)*1.8,0,7);ctx.fill()}}
  ctx.translate(-cam,0);
  ctx.fillStyle=P[4];ctx.fillRect(cam,148,vw+2,74);ctx.fillStyle=P[5];ctx.fillRect(cam,160,vw+2,34);ctx.fillStyle=P[6];ctx.fillRect(cam,192,vw+2,3);
  if(hab==='pond'){ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=1.5;ctx.lineCap='round';for(let k=Math.floor(cam/40)-1;k<(cam+vw)/40+1;k++){const x=k*40+hash(k)*20+(RM?0:Math.sin(now/700+k)*4),y=165+hash(k+4)*24;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+6,y-3,x+12,y);ctx.stroke()}}
  else if(hab==='waterfall'){ctx.strokeStyle='rgba(200,235,255,.7)';ctx.lineWidth=1.5;for(let k=Math.floor(cam/60)-1;k<(cam+vw)/60+1;k++){const a=k*60+hash(k)*24,y=170+hash(k+3)*20,ph=RM?0:Math.sin(now/400+k)*3;ctx.beginPath();ctx.ellipse(a,y,10+ph,2.5,0,0,7);ctx.stroke()}}
  else if(hab==='volcano'){ctx.strokeStyle='#ff7a1a';ctx.lineWidth=2;ctx.lineJoin='round';for(let k=Math.floor(cam/68)-1;k<(cam+vw)/68+1;k++){const a=k*68+hash(k)*20,y=172+hash(k+3)*16,gl=RM?1:.6+.4*Math.sin(now/300+k);ctx.globalAlpha=gl;ctx.beginPath();ctx.moveTo(a,y+4);ctx.lineTo(a+14,y-3);ctx.lineTo(a+22,y+8);ctx.lineTo(a+34,y);ctx.stroke()}ctx.globalAlpha=1}
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
  else if(hab==='volcano')for(let k=Math.floor(cam/90)-1;k<(cam+vw)/90+1;k++){const q=hash(k*3.1),x=k*90+q*60;ctx.fillStyle='#2a1418';ctx.beginPath();ctx.moveTo(x-12,155);ctx.lineTo(x-4,138-q*10);ctx.lineTo(x+6,143);ctx.lineTo(x+14,155);ctx.fill();if(q>.6){ctx.fillStyle='rgba(255,120,30,.8)';ctx.beginPath();ctx.arc(x+2,150,2.5,0,7);ctx.fill()}}
  else if(hab==='ice')for(let k=Math.floor(cam/80)-1;k<(cam+vw)/80+1;k++){const q=hash(k*3.1),x=k*80+q*50;ctx.fillStyle='#ffffff';ctx.strokeStyle='#bcdcf0';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(x,154,10+q*12,6+q*5,0,Math.PI,0);ctx.fill();ctx.stroke();
    if(q>.7){ctx.strokeStyle='#8cc6e8';ctx.lineWidth=1.6;for(let a=0;a<3;a++){const an=a*Math.PI/3;ctx.beginPath();ctx.moveTo(x+22-Math.cos(an)*5,132-Math.sin(an)*5);ctx.lineTo(x+22+Math.cos(an)*5,132+Math.sin(an)*5);ctx.stroke()}}}
  const obm=obMis(),cm=curMis();if(obm)drawObstacles(obm,now,cam,vw);else if(cm&&cm.type==='ski'&&MX)drawSki(cam,vw,now);else if(cm&&MX)drawMis(cm,now,cam,vw,c);
  const plain=!cm||cm.type==='beat';
  if(!prac&&!(cm&&cm.type==='ski')){
  ctx.font='700 11px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
  if(plain)for(let i=1;i<5;i++){const x=S0+(TRACK-S0)*i/5;ctx.fillStyle='#7a5530';ctx.fillRect(x-2,146,4,16);rr(x-17,132,34,16,5);ctx.fillStyle='#fff7e0';ctx.fill();ctx.fillStyle='#5a3a1a';ctx.fillText(i*20+'%',x,140.5)}
  ctx.fillStyle='rgba(255,255,255,.9)';ctx.fillRect(S0-2,160,4,34);
  for(let yy=0;yy<4;yy++)for(let xx=0;xx<2;xx++){ctx.fillStyle=(xx+yy)%2?'#14301f':'#fff';ctx.fillRect(TRACK+xx*8,160+yy*8.5,8,8.5)}
  ctx.fillStyle='#6b4a2a';ctx.fillRect(TRACK+18,86,4,108);
  for(let yy=0;yy<3;yy++)for(let xx=0;xx<4;xx++){ctx.fillStyle=(xx+yy)%2?'#14301f':'#fff';ctx.fillRect(TRACK+22+xx*8,88+yy*8,8,8)}
  }
  ctx.globalAlpha=.25;ghosts.forEach(o=>{if(!o.left)drawRacer(o,now,true)});ctx.globalAlpha=1;
  const air=c===me&&MX&&MX.air,hl=c===me&&slideMis(),sk=c===me&&MX&&MX.ski&&cm&&cm.type==='ski'?MX.ski:null;
  if(sk){const hx=headX(c),h1=sk.ph==='air'?sk.y:skiGround(hx),h0=sk.ph==='air'?sk.y-Math.max(-60,Math.min(60,sk.vy/sk.vx*110)):skiGround(hx-110),an=Math.atan2(h1-h0,110);ctx.save();ctx.translate(0,-h1);ctx.translate(hx,176);ctx.rotate(-an);ctx.translate(-hx,-176)}
  if(air||hl){const hx=headX(c);ctx.save();
    if(air){const f=Math.max(0,Math.min(1,(hx-air.x0)/(air.x1-air.x0)));ctx.translate(0,-(16*(1-f)+Math.sin(f*Math.PI)*50))}
    else{const h1=hillH(hx),h0=hillH(hx-110),an=Math.atan2(h1-h0,110);ctx.translate(0,-h1);ctx.translate(hx,176);ctx.rotate(-an);ctx.translate(-hx,-176)}}
  drawRacer(c,now,false);if(air||hl||sk)ctx.restore();drawMisFx(c,now);if(VID&&c===VID.c)vidFx(c,now);
  if(c.ob){const hx=headX(c),o=c.ob;
    if(now<o.stun){for(let k=0;k<3;k++){const an=now/180+k*2.1;ctx.fillStyle='#ffd23f';ctx.font='800 13px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillText('★',hx-8+Math.cos(an)*14,128+Math.sin(an)*5)}}
    if(now<o.boost){ctx.strokeStyle='rgba(255,210,63,.8)';ctx.lineWidth=2.5;for(let k=0;k<4;k++){const y=168+k*6;ctx.beginPath();ctx.moveTo(hx-60-k*10,y);ctx.lineTo(hx-24-k*6,y);ctx.stroke()}}
    if(now<o.msgT){ctx.font='800 15px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=4;ctx.strokeStyle='rgba(20,48,31,.85)';ctx.fillStyle='#fff';ctx.strokeText(o.msg,hx-10,100);ctx.fillText(o.msg,hx-10,100)}}
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
  // pace = average RPM over the last 3 seconds; steadiness = how even those 3 seconds were
  const h=c.hist||(c.hist=[]);h.push([now,c.disp]);while(h.length&&now-h[0][0]>3000)h.shift();
  const vals=h.map(x=>x[1]),pace=vals.reduce((a,b)=>a+b,0)/Math.max(1,vals.length);
  const sd=Math.sqrt(vals.reduce((a,b)=>a+(b-pace)*(b-pace),0)/Math.max(1,vals.length)),cvv=pace>20?sd/pace:1;
  const steady=pace<20?0:cvv<.08?5:cvv<.15?4:cvv<.25?3:cvv<.4?2:1;
  if(h.length&&now-h[0][0]>2500)c.bestPace=Math.max(c.bestPace||0,pace);
  const by=y0+gaugeH+4,x0=10,pw=W-20,ph=58,MX=520,px=r=>x0+12+(pw-24)*Math.min(1,r/MX);
  ctx.save();ctx.textBaseline='alphabetic';
  rr(x0,by,pw,ph,14);ctx.fillStyle='rgba(255,255,255,.94)';ctx.fill();
  ctx.textAlign='left';ctx.fillStyle='#3b5a49';ctx.font='800 11px "Baloo 2",sans-serif';ctx.fillText(t('paceLbl'),x0+12,by+22);
  let xx=x0+12+ctx.measureText(t('paceLbl')).width+6;ctx.fillStyle='#14301f';ctx.font='800 22px "Baloo 2",sans-serif';const pv=String(Math.round(pace));ctx.fillText(pv,xx,by+23);xx+=ctx.measureText(pv).width+3;
  ctx.fillStyle='#3b5a49';ctx.font='700 11px "Baloo 2",sans-serif';ctx.fillText('RPM',xx,by+23);
  const dots='●'.repeat(steady)+'○'.repeat(5-steady),rt=pace>=20?(2823/pace).toFixed(1)+'s':'—';
  ctx.textAlign='right';ctx.fillStyle='#2f9e3a';ctx.font='700 12px "Baloo 2",sans-serif';ctx.fillText(dots,x0+pw-12,by+22);let rx=x0+pw-12-ctx.measureText(dots).width-4;
  ctx.fillStyle='#3b5a49';ctx.fillText(' '+t('raceLbl')+' ·',rx,by+22);rx-=ctx.measureText(' '+t('raceLbl')+' ·').width;
  ctx.fillStyle='#14301f';ctx.font='800 14px "Baloo 2",sans-serif';ctx.fillText(rt,rx,by+22);rx-=ctx.measureText(rt).width;ctx.fillStyle='#3b5a49';ctx.font='700 12px "Baloo 2",sans-serif';ctx.fillText('≈ ',rx,by+22);
  const bx=x0+12,bw=pw-24,yb=by+32;rr(bx,yb,bw,8,4);ctx.fillStyle='#e3ece6';ctx.fill();
  if(pace>1){const gr=ctx.createLinearGradient(bx,0,bx+bw,0);gr.addColorStop(0,'#6fd14a');gr.addColorStop(.6,'#ffd23f');gr.addColorStop(.8,'#ff8a2a');gr.addColorStop(1,'#ff4234');rr(bx,yb,Math.max(8,px(pace)-bx),8,4);ctx.fillStyle=gr;ctx.fill()}
  ctx.textAlign='center';ctx.font='600 9.5px "Baloo 2",sans-serif';[1,10,20,25,30].forEach(n=>{const x=px(LV[n-1]);ctx.fillStyle='#14301f';ctx.fillRect(x-1,yb-2,2,12);ctx.fillStyle='#3b5a49';ctx.fillText(t('lvShort',{n}),x,yb+21)});
  if(c.bestPace){const x=px(c.bestPace);ctx.fillStyle='#7a3cff';ctx.beginPath();ctx.moveTo(x-5,yb-8);ctx.lineTo(x+5,yb-8);ctx.lineTo(x,yb-1);ctx.closePath();ctx.fill()}
  const tip=c.w<3?t('tipStart'):pace<100?t('tipFaster'):c.disp>=REDRPM?t('tipRed'):t('tipSteady'),ty=Math.max(by+ph+30,y0+lh*.5);
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.font='800 '+Math.round(Math.min(24,W*.058))+'px "Baloo 2",sans-serif';ctx.lineWidth=5;ctx.strokeStyle='rgba(20,48,31,.85)';ctx.fillStyle='#fff';
  ctx.strokeText(tip,W/2,ty);ctx.fillText(tip,W/2,ty);
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
    let nm=c.name;if(c.isCpu&&/^🤖 \D+ \d+$/.test(nm)&&ctx.measureText(nm).width>nameW-4)nm='🤖'+nm.match(/(\d+)$/)[1]; // "🤖3" instead of "🤖 Comp…"
    const nm0=nm;while(nm.length>1&&ctx.measureText(nm).width>nameW-4)nm=nm.slice(0,-1);if(nm!==nm0)nm=nm.slice(0,-1)+'…';
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
  if(!split()){if(net){ctx.textAlign='right';ctx.fillStyle='#cfe3d6';ctx.fillText(anyone?t('anyTile'):t('room')+' '+net.code,W-12,HUD/2+1)}return}
  let x0=84;const x1=W-30;
  if(mode==='solo'){const lt=raceLv===31?'🎿':t('misShort',{n:raceLv});ctx.font='800 13px "Baloo 2",sans-serif';const lw=ctx.measureText(lt).width+16;rr(66,HUD/2-10,lw,20,10);ctx.fillStyle='#ffd23f';ctx.fill();ctx.fillStyle='#5a3a00';ctx.textAlign='center';ctx.fillText(lt,66+lw/2,HUD/2+1);x0=66+lw+22}
  ctx.strokeStyle='rgba(255,255,255,.28)';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x0,HUD/2);ctx.lineTo(x1,HUD/2);ctx.stroke();
  for(let yy=0;yy<3;yy++)for(let xx=0;xx<2;xx++){ctx.fillStyle=(xx+yy)%2?'#14301f':'#fff';ctx.fillRect(x1+6+xx*5,HUD/2-7.5+yy*5,5,5)}
  racers.forEach(c=>marker(c,x0+(x1-x0)*prog(c),HUD/2,30,true));
}
// in big rooms only the racers just ahead of and behind you are shown on your track
function nearby(c){const o=racers.filter(r=>!r.left).sort((a,b)=>headX(b)-headX(a)),i=o.indexOf(c);return [o[i-1],o[i+1]].filter(r=>r&&r!==c)}
function draw(now){
  ctx.setTransform(DPR,0,0,DPR,0,0);ctx.clearRect(0,0,W,H);
  if(VID){drawVid(now);return}
  if(!racers.length)return;
  let mid;
  if(mode==='practice'){
    const c=racers[0];drawLane(c,[],HUD,H-HUD,now,false);if(state==='race')practiceInfo(c,HUD,H-HUD,now);mid=HUD+(H-HUD)/2;
  }else if(mode==='solo'&&racers.length===1){
    const c=racers[0];drawLane(c,[],HUD,H-HUD,now,false);mid=HUD+(H-HUD)/2;
  }else if(!split()){
    const sh=stripH(),c=me||racers[0];strip(HUD,sh);
    drawLane(c,nearby(c),HUD+sh,H-HUD-sh,now,false);mid=HUD+sh+(H-HUD-sh)/2;
  }else{
    const lh=(H-HUD)/2,mine=mode==='online'&&me?me:racers[1],other=racers.find(r=>r!==mine)||racers[0];
    drawLane(other,[mine],HUD,lh,now,true);drawLane(mine,[other],HUD+lh,lh,now,true);
    ctx.fillStyle='#14301f';ctx.fillRect(0,HUD+lh-1.5,W,3);mid=HUD+lh;
  }
  hud(now);
  if(mode==='solo'&&MIS[raceLv-1]&&(state==='race'||state==='done'||state==='count')){goalChip(now);speedMeter(now)}
  if(state==='count'||(state==='race'&&now-startT<600)){
    const tx=state==='count'?String(Math.max(1,Math.ceil((startT-now)/1000))):t('go');
    if(mode==='solo'&&state==='count'){const m=Math.min(W,H),ly=mid-m*.17;ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';
      ctx.font='800 '+Math.round(m*.085)+'px "Baloo 2",sans-serif';ctx.lineWidth=8;ctx.strokeStyle='#14301f';ctx.fillStyle='#ffd23f';const lt=misName(raceLv).toUpperCase()+(MIS[raceLv-1].boss?' 👑':'');ctx.strokeText(lt,W/2,ly);ctx.fillText(lt,W/2,ly);
      ctx.font='700 '+Math.round(m*.042)+'px "Baloo 2",sans-serif';ctx.lineWidth=5;ctx.fillStyle='#fff';const st=goalText(MIS[raceLv-1]);ctx.font='700 '+Math.round(Math.min(m*.042,W*.9/Math.max(10,st.length)*1.8))+'px "Baloo 2",sans-serif';ctx.strokeText(st,W/2,ly+m*.075);ctx.fillText(st,W/2,ly+m*.075)}
    ctx.font='800 '+Math.round(Math.min(W,H)*.18)+'px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=10;ctx.strokeStyle='#14301f';ctx.fillStyle=state==='count'?'#fff':'#ffd23f';
    ctx.strokeText(tx,W/2,mid);ctx.fillText(tx,W/2,mid);
  }
}

// ---------- mission goals ----------
function goalText(m){
  if(!m)return'';
  if(m.type==='beat'&&m.boss)return t('goal_boss',{a:t('ch_'+m.opp)});
  if(m.type==='red')return t('goal_red',{w:WATCH[m.watch][1]});
  if(m.type==='catch')return t('goal_catch',{i:ITEM[m.item][2]});
  if(m.type==='egg')return t('goal_egg',{i:EGG[m.item][1]});
  if(m.type==='chase')return t(m.boss?'goal_chaseB':'goal_chase',{f:FOE[m.foe][1]});
  if(m.type==='runner')return t('goal_runner',{f:FOE[m.foe][1]});
  if(m.type==='duck')return t('goal_duck',{f:FOL[m.fol][1]});
  if(m.type==='gates')return t('goal_gates',{g:GATE[m.gate][1]});
  if(m.type==='water')return t('goal_water');
  if(m.type==='heat')return t('goal_heat');
  if(m.type==='slide')return t('goal_slide');
  if(m.type==='ski')return t('goal_ski');
  if(m.type==='beat')return t('goal_beat',{a:t('ch_'+m.opp)});
  if(m.type==='boss')return t('goal_boss',{a:t('ch_'+m.opp)});
  if(m.type==='time')return t('goal_time',{t:m.g[0]});
  if(m.type==='obst')return t('goal_obst',{t:m.g[0]});
  if(m.type==='zone')return t('goal_zone',{lo:m.lo,hi:m.hi});
  return t('goal_sprint',{r:m.g[0]});
}
function starGoals(m){
  const err={red:'catch',egg:'crack',chase:'close call',gates:'bonk',water:'splash',heat:'overheat',slide:'splash'}[m.type]||'mistake',tm=()=>[m.g[0]?t('star_under',{t:m.g[0]}):t('star_finish'),t('star_m1',{t:m.g[1],e:err}),t('star_m0',{t:m.g[2],e:err+(err.endsWith('h')?'es':'s')})];
  if(m.type==='beat'&&(m.water||m.gate)){const e=m.water?'splash':'bonk';return[t('star_win'),t('star_w1',{e}),t('star_w0',{e:e+(m.water?'es':'s')})]}
  if(m.type==='ski')return m.g.map(f=>t('star_ft',{f}));
  if(m.type==='catch')return[t('star_catch',{n:3}),t('star_catch',{n:4}),t('star_catchAll')];
  if(m.type==='duck')return[t('star_duck',{n:2}),t('star_duck',{n:3}),t('star_duckAll')];
  if(m.type==='runner')return[t('star_run'),t('star_runBy',{p:75}),t('star_runBy',{p:50})];
  if(['red','egg','chase','gates','water','heat','slide'].includes(m.type))return tm();
  if(m.type==='beat'||m.type==='boss')return[t('star_win'),t('star_under',{t:m.g[1]}),t('star_under',{t:m.g[2]})];
  if(m.type==='time')return m.g.map(x=>t('star_under',{t:x}));
  if(m.type==='obst')return[t('star_under',{t:m.g[0]}),t('star_obst1',{t:m.g[1]}),t('star_obst0',{t:m.g[2]})];
  if(m.type==='zone')return m.g.map(x=>t('star_zone',{p:x}));
  return m.g.map(x=>t('star_top',{r:x}));
}
// stars earned in a finished mission race (0 = not passed)
function missionStars(m,c,won){
  if(!c||c.done==null||c.failed)return 0;const T=c.done/1000,top=Math.round(c.top*60),b=(c.ob&&c.ob.bumps)||0;
  if(m.type==='beat'&&(m.water||m.gate))return !won?0:b===0?3:b<=1?2:1;
  if(m.type==='ski'){const f=MX&&MX.ski?MX.ski.ft:0;return f>=m.g[2]?3:f>=m.g[1]?2:f>=m.g[0]?1:0}
  if(m.type==='catch'){const g=MX?MX.got:0;return g>=5?3:g>=4?2:g>=3?1:0}
  if(m.type==='duck'){const f=MX?MX.fol:0;return T>m.g[0]?0:f>=4?3:f>=3?2:f>=2?1:0}
  if(m.type==='runner'){const p=c.caughtAt;return p==null?0:p<=.5?3:p<=.75?2:1}
  if(['red','egg','chase','gates','water','heat','slide'].includes(m.type))return T<=m.g[2]&&b===0?3:T<=m.g[1]&&b<=1?2:(!m.g[0]||T<=m.g[0])?1:0;
  if(m.type==='beat'||m.type==='boss')return !won?0:T<=m.g[2]?3:T<=m.g[1]?2:1;
  if(m.type==='time')return T<=m.g[2]?3:T<=m.g[1]?2:T<=m.g[0]?1:0;
  if(m.type==='obst'){const b=(c.ob&&c.ob.bumps)||0;return T<=m.g[2]&&b===0?3:T<=m.g[1]&&b<=1?2:T<=m.g[0]?1:0}
  if(m.type==='zone'){const p=c.zall?100*c.zin/c.zall:0;return p>=m.g[2]?3:p>=m.g[1]?2:p>=m.g[0]?1:0}
  return top>=m.g[2]?3:top>=m.g[1]?2:top>=m.g[0]?1:0;
}
// what speed is allowed right now: {lo, hi, max, label} (RPM) or a heat bar
function meterSpec(c,now){
  const m=curMis();if(!m||!c||state!=='race'||c.done!=null)return null;const X=MX,t=(now-startT)/1000,R=m.rpm;
  switch(m.type){
    case 'ski':return X.ski.ph==='run'?{lo:0,hi:1e9,max:500,label:'🚀 Take-off speed'}:null;
    case 'egg':return{lo:0,hi:m.lim,max:m.lim*1.6,label:EGG[m.item][0]+' Under '+m.lim};
    case 'duck':return{lo:m.dlo,hi:m.dhi,max:m.dhi*1.45,label:(FOL[m.fol]||FOL.duck)[0]+' Stay '+m.dlo+'–'+m.dhi};
    case 'water':return{lo:m.wmin,hi:1e9,max:m.wmin*2,label:'💧 Stay above '+m.wmin};
    case 'beat':return m.water?{lo:m.wmin,hi:1e9,max:m.wmin*2,label:'💧 Stay above '+m.wmin}:null;
    case 'red':{const p=redPhase(t)[0];return p==='green'?{lo:0,hi:1e9,max:R*1.5,label:'🟢 GO!'}:{lo:0,hi:35,max:R*1.5,label:p==='red'?'🔴 FREEZE!':'🟡 Slow down…'}}
    case 'heat':return{heat:true,val:X.heat,label:'🔥 Heat · cool under '+m.hot,hot:m.hot};
    case 'slide':{const hx=headX(c),nx=X.seg.find(([k,a])=>k==='jump'&&obX(a)>hx);return nx&&obX(nx[1])-hx<420?{lo:m.jmin,hi:1e9,max:m.jmin*1.8,label:'🚀 Jump at '+m.jmin+'+'}:null}
    case 'obst':{const hx=headX(c),W0=OBW[m.w];for(const [k,a,b] of obLayout(m)){const x0=obX(a),x1=obX(b);if(hx>x1+2)continue;if(x0-hx>420)return null;
      return k==='push'?{lo:m.pmin,hi:1e9,max:m.pmin*2,label:W0.push[1]+' Keep '+m.pmin+'+'}:k==='quiet'?{lo:0,hi:m.qmax,max:m.qmax*2,label:W0.quiet[1]+' Under '+m.qmax}:{lo:m.bmin,hi:1e9,max:m.bmin*1.6,label:W0.boost[1]+' Boost at '+m.bmin+'+'}}return null}
  }return null}
function timeBar(now,y){
  const m=curMis(),c=me;if(!m||!c||!m.g||m.g.length<3&&m.type!=='duck'||m.type==='beat'||m.type==='ski'||m.type==='catch'||m.type==='runner'||state!=='race'&&state!=='done')return;
  const g=m.type==='duck'?[m.g[0],m.g[0],m.g[0]]:m.g,lim=g[0]||g[1]*1.15,el=c.done!=null?c.done/1000:Math.max(0,(now-startT)/1000),max=lim*1.12;
  const narrow=W<640,mw=Math.min(300,narrow?W-24:W-460),mx=(W-mw)/2,X=v=>mx+10+(mw-20)*Math.max(0,Math.min(1,v/max));
  ctx.save();rr(mx,y,mw,46,10);ctx.fillStyle='rgba(20,48,31,.82)';ctx.fill();
  const bx=mx+10,by=y+20,bh=9;rr(bx,by,mw-20,bh,4.5);ctx.fillStyle='#e0402f';ctx.fill();ctx.save();rr(bx,by,mw-20,bh,4.5);ctx.clip();
  ctx.fillStyle='#3fae5a';ctx.fillRect(bx,by,X(g[2])-bx,bh);ctx.fillStyle='#9bd34a';ctx.fillRect(X(g[2]),by,X(g[1])-X(g[2]),bh);ctx.fillStyle='#ffb020';ctx.fillRect(X(g[1]),by,X(lim)-X(g[1]),bh);ctx.restore();
  ctx.font='700 9px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillStyle='#ffd23f';
  if(m.type!=='duck'){ctx.fillText('3★',X(g[2]),by+bh+9);ctx.fillText('2★',X(g[1]),by+bh+9)}if(g[0])ctx.fillText('1★',X(lim),by+bh+9);
  ctx.fillStyle='#fff';ctx.textAlign='left';ctx.font='800 12px "Baloo 2",sans-serif';ctx.fillText('⏱ '+el.toFixed(1)+' s',mx+10,y+11);
  const left=lim-el;ctx.textAlign='right';ctx.fillStyle=left<0?'#ff8a7a':'#fff';ctx.fillText(g[0]?(left>=0?left.toFixed(1)+' s left':'Too slow!'):'',mx+mw-10,y+11);
  const px=X(el);ctx.fillStyle='#fff';rr(px-2,by-3,4,bh+6,2);ctx.fill();ctx.restore();
}
function speedMeter(now){
  {const narrow=W<640,sp0=meterSpec(me,now),my0=narrow?HUD+78:HUD+8;timeBar(now,sp0?my0+62:my0)}
  const c=me,sp=meterSpec(c,now);if(!sp)return;
  const narrow=W<640,mw=Math.min(300,narrow?W-24:W-460),mx=(W-mw)/2,my=narrow?HUD+78:HUD+8,val=sp.heat?sp.val:Math.round(c.disp),
    ok=sp.heat?val<70:val>=sp.lo&&val<=sp.hi;
  ctx.save();rr(mx,my,mw,58,12);ctx.fillStyle=ok?'rgba(20,60,36,.9)':'rgba(150,32,24,.92)';ctx.fill();
  ctx.fillStyle='#fff';ctx.textBaseline='middle';ctx.textAlign='left';ctx.font='800 14px "Baloo 2",sans-serif';
  const msg=ok?sp.label:sp.heat?'🔥 Too hot! Slow down':val>sp.hi?'⬇ Too fast! Slow down':'⬆ Too slow! Spin faster';ctx.fillText(msg,mx+10,my+15);
  ctx.textAlign='right';ctx.font='800 22px "Baloo 2",sans-serif';ctx.fillText(sp.heat?Math.round(val)+'%':String(val),mx+mw-(sp.heat?10:42),my+16);if(!sp.heat){ctx.font='700 10px "Baloo 2",sans-serif';ctx.fillText('RPM',mx+mw-10,my+18)}
  const bx=mx+10,bw=mw-20,by=my+33,bh=12,max=sp.heat?100:sp.max,X=v=>bx+bw*Math.max(0,Math.min(1,v/max));
  rr(bx,by,bw,bh,6);ctx.fillStyle='#e0402f';ctx.fill();
  if(sp.heat){const g=X(70);ctx.save();rr(bx,by,bw,bh,6);ctx.clip();ctx.fillStyle='#3fae5a';ctx.fillRect(bx,by,g-bx,bh);ctx.fillStyle='#ffb020';ctx.fillRect(g,by,X(90)-g,bh);ctx.restore()}
  else{const a=X(sp.lo),b=X(Math.min(sp.hi,max));ctx.save();rr(bx,by,bw,bh,6);ctx.clip();ctx.fillStyle='#3fae5a';ctx.fillRect(a,by,b-a,bh);ctx.restore();
    ctx.font='700 10px "Baloo 2",sans-serif';ctx.textAlign='center';ctx.fillStyle='#fff';if(sp.lo>0)ctx.fillText(sp.lo,a,by+bh+8);if(sp.hi<max)ctx.fillText(sp.hi,b,by+bh+8)}
  const px=X(val);ctx.fillStyle='#fff';rr(px-2.5,by-5,5,bh+10,2.5);ctx.fill();ctx.strokeStyle='rgba(0,0,0,.35)';ctx.lineWidth=1;ctx.stroke();
  ctx.restore();
}
function goalChip(now){
  const m=MIS[raceLv-1],c=me;if(!m||!c||m.type==='beat'&&!m.water&&!m.gate)return;
  let tx,ok=false;
  const oh=m.type==='obst'?(state==='race'?obHint(c):null):misHint(c,now);
  if(oh){tx=oh.tx;ok=oh.ok}
  else if(m.type==='time'||m.type==='obst'){tx=t('goalT',{t:m.g[0]})+(m.type==='obst'?' · 💥 '+((c.ob&&c.ob.bumps)||0):'');ok=state==='race'?(now-startT)/1000<=m.g[0]:c.done!=null&&c.done/1000<=m.g[0]}
  else if(m.type==='zone'){const p=c.zall?Math.round(100*c.zin/c.zall):0;tx=t('zoneNow',{p})+' · '+m.lo+'–'+m.hi;ok=c.disp>=m.lo&&c.disp<=m.hi}
  else{const top=Math.round(c.top*60);tx=t('topNow',{r:top,g:m.g[0]});ok=top>=m.g[0]}
  ctx.save();ctx.font='800 14px "Baloo 2",sans-serif';const w=ctx.measureText(tx).width+24;rr(10,HUD+10,w,26,13);ctx.fillStyle=ok?'rgba(47,158,58,.92)':'rgba(20,48,31,.82)';ctx.fill();
  ctx.fillStyle='#fff';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(tx,22,HUD+23.5);ctx.restore();
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
  failBig(){tone(70,.5,{type:'sine',v:.4,glide:38});tone(140,.18,{type:'square',v:.16,glide:60});
    [[392,.32],[370,.32],[349,.32],[330,1.3]].reduce((tt,[f,d],i)=>{tone(f,d,{type:'sawtooth',v:.17,at:.25+tt,glide:i===3?250:f*.97});tone(f/2,d,{type:'triangle',v:.12,at:.25+tt});if(i===3)for(let k=0;k<6;k++)tone(f*(k%2?.97:1.02),.18,{type:'sawtooth',v:.07,at:.25+tt+k*.18});return tt+d},0);
    tone(60,.6,{type:'sine',v:.3,at:1.9,glide:40});buzz(300)},
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
  misWorld(now,dt);racers.forEach(c=>upd(c,now,dt));
  if(mode==='online'&&net&&me&&state==='race'){
    const mb=racers.filter(r=>r.kind==='bot'&&r.done==null);
    if(me.done==null||mb.length){const n=racers.filter(r=>!r.left&&!(r.isCpu&&r.kind==='remote')).length,iv=Math.max(150,n*(n-1)*20);
      if(now-lastSend>iv){lastSend=now;const m={t:'st',phi:me.phi,w:me.w,spin:me.spin,top:me.top};if(me.done!=null)m.self=0;if(mb.length)m.bs=mb.map(r=>[r.id,+r.phi.toFixed(3),+r.w.toFixed(3),+r.spin.toFixed(2),+r.top.toFixed(3)]);net.send(m)}}
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
// ---------- names: everyone gets a fun name (max 16 letters) unless they type their own ----------
const NAMEMAX=16;
const ADJ=['Zippy','Turbo','Rapid','Lucky','Super','Happy','Brave','Swift','Jolly','Sunny','Fizzy','Peppy','Mega','Comet','Rocket','Speedy','Dizzy','Bouncy','Sparky','Mighty'];
const NOUN=['Snail','Turtle','Crab','Shrimp','Penguin','Lizard','Snake','Bug','Worm','Puffer','Dragon','Gecko','Beetle','Frog'];
function makeAutoName(){for(;;){const n=ADJ[Math.floor(Math.random()*ADJ.length)]+' '+NOUN[Math.floor(Math.random()*NOUN.length)]+' '+String(Math.floor(Math.random()*100)).padStart(2,'0');if(n.length<=NAMEMAX)return n}}
const autoName=()=>{let v=store.get('cr-auto');if(!v||v.length>NAMEMAX){v=makeAutoName();store.set('cr-auto',v)}return v};
// basic bad-word check: lower-case, spaces removed, looks for any listed word inside the name
const BADW=['fuck','fuk','shit','bitch','cunt','dick','pussy','penis','vagina','boob','tits','slut','whore','fag','nigg','nigger','retard','porn','sex','nazi','hitler','bastard','asshole','wank','twat','piss','dildo','kkk','poop'];
const isBad=v=>{const x=String(v||'').toLowerCase().replace(/\s+/g,'');return BADW.some(w=>x.includes(w))};
const cleanName=v=>{v=String(v||'').trim().slice(0,NAMEMAX);return v&&!isBad(v)?v:''};
const myName=()=>cleanName(store.get('cr-nick'))||autoName();
function makeTransport(room,onMsg,onStatus){
  if(qs.get('local')==='1'){
    const bc=new BroadcastChannel('cr-'+room);bc.onmessage=e=>onMsg(e.data);setTimeout(()=>onStatus('ok'),50);
    return{send:m=>bc.postMessage(m),close:()=>bc.close()};
  }
  const sb=getSb();if(!sb){setTimeout(()=>onStatus('fail'),0);return{send(){},close(){}}}
  // supabase-js hands back the SAME channel for the same name, so a channel still open (or closing) under this
  // name must be fully removed first; otherwise closing the old one also kills the new one (Race anyone froze at "Starting in 10 s")
  const topic='cr-room-'+room;let ch=null,closed=false,done=false,tries=0;
  const start=()=>{
    if(closed)return;
    const ex=sb.getChannels().filter(c=>c.topic==='realtime:'+topic);
    if(ex.length&&tries++<4){Promise.all(ex.map(c=>sb.removeChannel(c).catch(()=>{}))).then(()=>setTimeout(start,60));return}
    ch=sb.channel(topic,{config:{broadcast:{self:false,ack:false}}});
    ch.on('broadcast',{event:'m'},({payload})=>{if(!closed)onMsg(payload)});
    ch.subscribe(st=>{if(closed)return;if(st==='SUBSCRIBED'&&!done){done=true;onStatus('ok')}else if((st==='CHANNEL_ERROR'||st==='TIMED_OUT')&&!done){done=true;onStatus('fail')}});
  };
  (closingT[topic]||Promise.resolve()).then(start);
  // supabase-js drops a send that comes too soon after the previous one, so space them out; keep only the newest position update
  const q=[];let busy=false;
  const pump=()=>{if(closed){q.length=0;busy=false;return}if(!q.length){busy=false;return}busy=true;if(!ch||!done){setTimeout(pump,120);return}ch.send({type:'broadcast',event:'m',payload:q.shift()});setTimeout(pump,35)};
  return{send:m=>{if(closed)return;if(m.t==='st'){const k=q.findIndex(x=>x.t==='st');if(k>=0){q[k]=m;return}}q.push(m);if(!busy)pump()},
    close:()=>{if(closed)return;closed=true;if(ch){const c=ch,pr=sb.removeChannel(c).catch(()=>{});closingT[topic]=pr;pr.then(()=>{if(closingT[topic]===pr)delete closingT[topic]})}}};
}
const closingT={};
function newCode(){return String(1000+Math.floor(Math.random()*9000))}
function joinRoom(code,capSet){
  if(net)net.close();
  const peers=new Map();
  const me0={id:myId,name:anyone?autoName():myName(),ready:false,joined:Date.now(),cap:capSet||null,ws:0,bots:[]};
  let status='connecting',hb=0,lastHi=0;
  const n={code,me:me0,peers,status:()=>status,
    send:m=>{m.id=myId;tr.send(m)},
    hello:()=>{lastHi=Date.now();const h={t:'hi',name:me0.name,ready:me0.ready,joined:me0.joined,ph:anyone&&mode==='solo'?'cpu':state,ch:myChar,cap:me0.cap,ws:me0.ws,lv:progLv(),sp:mySpd(),bots:me0.bots.map(b=>({id:b.id,ch:b.ch,n:b.n})),mb:anyone&&state==='match'?visBots().map(b=>({id:b.id,name:b.name,ch:b.ch})):[]};if(state==='count'&&curIds){h.rid=curRid;h.ids=curIds;h.left=Math.max(0,startT-performance.now())}n.send(h)},
    all:()=>[me0,...[...peers.values()]].sort((a,b)=>a.joined-b.joined||(a.id<b.id?-1:1)),
    cap:()=>{if(n.any)return MAXP;const a=n.all(),f=a.find(p=>p.cap);return Math.min(MAXP,Math.max(2,(a[0]&&a[0].cap)||(f&&f.cap)||MAXP))},
    humans:()=>n.any?n.all():n.all().slice(0,n.cap()),
    // computer racers belong to the host; they give up their spot when a real friend needs it
    bots:()=>{if(n.any)return[];const hu=n.humans(),h=hu[0];if(!h)return[];const src=h.id===myId?me0.bots:((peers.get(h.id)||{}).bots||[]);return src.slice(0,Math.max(0,n.cap()-hu.length)).map(b=>({id:b.id,name:t('cpuN',{n:b.n}),ch:b.ch,ready:true,bot:true,owner:h.id,lv:b.lv}))},
    trimBots:()=>{const hu=n.humans();if(hu[0]&&hu[0].id===myId){const room=Math.max(0,n.cap()-hu.length);if(me0.bots.length>room){me0.bots=me0.bots.slice(0,room);n.hello();return true}}else if(me0.bots.length){me0.bots=[]}return false},
    members:()=>n.any?n.all():[...n.humans(),...n.bots()],any:anyone,
    inRoom:()=>n.humans().some(p=>p.id===myId),
    host:()=>n.humans()[0].id===myId,
    racing:()=>[...peers.values()].some(p=>p.ph==='race'||p.ph==='count'),
    close:()=>{clearInterval(hb);tr.close();net=null}};
  const tr=makeTransport(code,onMsg,st=>{
    status=st;
    if(st==='ok'){n.hello();n.send({t:'who'});
      hb=setInterval(()=>{const racing=state==='race'||state==='count';if(Date.now()-lastHi>(racing?4000:1500))n.hello();prune();if(n.any&&net===n)matchTick();else if(!racing&&n.trimBots())refreshPanel(true)},500);
      if(!n.any)setTimeout(()=>{if(!capSet&&!peers.size)status='noroom';else if(!n.inRoom())status='full';refreshPanel(true)},2500)}
    refreshPanel(true);
  });
  function prune(){const now=Date.now(),lim=(state==='race'||state==='count')?9000:6000;for(const[id,p]of peers)if(now-p.seen>lim){peers.delete(id);onLeave(p)}}
  function onMsg(m){
    if(!m||m.id===myId)return;
    const p=peers.get(m.id);if(p)p.seen=Date.now();
    if(m.t==='who'){n.hello();return}
    if(m.t==='hi'){
      peers.set(m.id,{id:m.id,name:cleanName(m.name)||'Racer',ready:!!m.ready,joined:+m.joined||Date.now(),ph:m.ph,ch:CHARS.includes(m.ch)?m.ch:'cat',ws:+m.ws||0,lv:Math.max(1,Math.min(NLV,+m.lv||1)),sp:Math.max(0,Math.min(500,+m.sp||0)),mb:(Array.isArray(m.mb)?m.mb:[]).slice(0,4).filter(b=>b&&/^b[a-z0-9]{4,14}$/.test(b.id)&&CHARS.includes(b.ch)).map(b=>({id:b.id,name:cleanName(b.name)||'Racer',ch:b.ch})),bots:(Array.isArray(m.bots)?m.bots:[]).slice(0,MAXP).filter(b=>b&&/^b[a-z0-9]{4,14}$/.test(b.id)&&CHARS.includes(b.ch)).map(b=>({id:b.id,ch:b.ch,n:Math.max(1,Math.min(9,+b.n||1))})),cap:(+m.cap>=2&&+m.cap<=MAXP)?+m.cap:null,seen:Date.now()});
      if(!me0.cap){const c0=n.cap();if(c0<MAXP||m.cap)me0.cap=c0}
      if(status==='noroom'){status='ok';refreshPanel(true)}
      if(!p)n.hello();
      if(m.rid&&m.rid!==curRid&&Array.isArray(m.ids)&&m.ids.includes(myId)&&me0.ready&&state!=='count'&&state!=='race')startRace(Math.max(400,+m.left||0),m.ids,m.rid);
      const r=racers.find(x=>x.id===m.id);if(r){r.name=peers.get(m.id).name;if(state!=='race'&&state!=='count')r.char=peers.get(m.id).ch}
      if(n.any){matchTick();return}
      if(state==='lobby'||state==='done'){maybeStart();refreshPanel()}
      return}
    if(m.t==='bye'){peers.delete(m.id);if(p)onLeave(p);return}
    if(m.t==='quit'){const q=racers.find(x=>x.id===m.id);if(q&&(state==='race'||state==='count'))q.left=true;return}
    if(m.t==='go'){if(Array.isArray(m.ids)&&m.ids.includes(myId)&&(!n.any||(state==='match'&&mode==='online'))){if(m.rid!==curRid){raceBots=(Array.isArray(m.bots)?m.bots:[]).slice(0,MAXP).filter(b=>b&&/^b[a-z0-9]{4,14}$/.test(b.id)&&CHARS.includes(b.ch)).map(b=>({id:b.id,name:cleanName(b.name)||'Racer',ch:b.ch,bot:true,owner:m.id}));startRace(m.delay||3000,m.ids,m.rid)}}else refreshPanel(true);return}
    if(m.t==='st'&&state==='race'&&Array.isArray(m.bs))m.bs.forEach(a=>{const q=racers.find(x=>x.id===a[0]&&x.owner===m.id&&x.kind==='remote');if(q&&q.done==null){q.tphi=+a[1]||0;q.tw=+a[2]||0;q.spin=+a[3]||0;q.top=+a[4]||0;q.rt=performance.now()}});
    if(m.t==='fin'&&m.b){const q=racers.find(x=>x.id===m.b&&x.owner===m.id&&x.kind==='remote');if(q&&q.done==null&&(state==='race'||state==='count')){q.done=+m.time;q.spin=+m.spin||0;q.top=+m.top||0;q.phi=Math.max(q.phi,phiForFinish(q.char));q.w=0;q.tw=0;if(!firstDone)firstDone=performance.now()}return}
    if(m.t==='st'&&m.self===0)return;
    const r=racers.find(x=>x.id===m.id);if(!r||r.kind!=='remote')return;
    if(m.t==='st'&&state==='race'){r.tphi=+m.phi||0;r.tw=+m.w||0;r.spin=+m.spin||0;r.top=+m.top||0;r.rt=performance.now();return}
    if(m.t==='fin'&&r.done==null&&(state==='race'||state==='count')){r.done=+m.time;r.spin=+m.spin||0;r.top=+m.top||0;r.phi=Math.max(r.phi,phiForFinish(r.char));r.w=0;r.tw=0;if(!firstDone)firstDone=performance.now();return}
  }
  function onLeave(p){
    if(mode!=='online')return;
    const r=racers.find(x=>x.id===p.id);racers.forEach(q=>{if(q.owner===p.id&&(state==='race'||state==='count'||state==='done'))q.left=true});
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
  if(panel==='match'||panel==='alone'){sig='';matchTick();return}
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
// ---------- screens: home -> one tap per mode ----------
let nameBack='home',invite=!!qs.get('room'),onTab='create',cap=Math.min(8,Math.max(2,+store.get('cr-cap')||4)),codeDraft=(qs.get('room')||'').replace(/\D/g,'').slice(0,4),meBack='home';
let p2Char=(k=>isOpen(k)&&k!==myChar?k:CHARS.find(x=>isOpen(x)&&x!==myChar))(store.get('cr-char2'));
const homeBtn=(ask,back)=>`<button class="homeb" data-act="${ask?'homeask':'home'}" aria-label="${t('home')}" title="${t('home')}">🏠</button>${back?`<button class="homeb backb" data-act="${back}" aria-label="${t('back2')}" title="${t('back2')}">←</button>`:''}`;
// where you are in the 30 levels: cleared = green, next = orange ring, 29 = dragon, 30 = crown
function lvStrip(){
  const c=cleared(),nx=Math.min(NLV,c+1),na=CHARS.filter(k=>k in UNLOCK&&UNLOCK[k]>c).sort((a,b)=>UNLOCK[a]-UNLOCK[b])[0];
  const cells=LV.map((r,i)=>{const n=i+1;return `<i class="${n<=c?'ok':''}${n===nx&&c<NLV?' nx':''}${n===29?' dg':''}${n===NLV?' kg':''}"></i>`}).join('');
  return `<div class="lvstrip" role="img" aria-label="${t('lvOf',{n:c})}"><div class="cells">${cells}</div><div class="ends"><span>${t('lvShort',{n:1})}</span><span>${t('lvOf',{n:c})}</span><span>🐉 👑</span></div>
  <p class="small" style="margin:2px 0 0">${c>=NLV?t('allCleared'):t('nextUp',{n:nx})+(na?' · '+t('nextAnimal',{n:UNLOCK[na],a:t('ch_'+na)}):'')}</p></div>`;
}
const lockLvl=k=>UNLOCK[k];
function animalGrid(sel,g,skip){return `<div class="chars" data-g="${g}">${CHARS.map(k=>{const op=isOpen(k),dis=skip===k;return `<button data-v="${k}" class="${k===sel?'on':''}${op?'':' lk'}${k==='dragon'?' gold':''}" aria-pressed="${k===sel}" ${dis?'disabled':''}>${icImg(k)}<span>${op?t('ch_'+k):'🔒 '+(k==='dragon'?DRAGON_STARS+' ⭐':t('lockLv',{n:lockLvl(k)}))}</span></button>`}).join('')}</div>`}
function meCard(){return `<div class="me"><button class="ic2" data-act="me" aria-label="${t('changeAnimal')}">${icImg(myChar)}</button><span class="mt"><button class="nmb" data-act="name" aria-label="${t('editName')}"><b>${esc(myName())}</b> <span aria-hidden="true">✏️</span></button><span class="sub"><small>${t('theAnimal',{a:t('ch_'+myChar)})}</small><button class="ed" data-act="me">${t('changeAnimal')}</button></span></span></div>`}
function nameBox(){
  nameBack=panel;panel='namebox';
  ov.innerHTML=`<div class="panel confirm namebox" role="dialog" aria-label="${t('editName')}"><button class="homeb x" data-act="nameclose" aria-label="${t('close')}">✕</button><h2>${t('editName')}</h2><p class="small" style="margin:0 0 8px">${t('nameShown')}</p>
  <div class="row"><input type="text" id="nick" maxlength="${NAMEMAX}" autocomplete="off" value="${esc(myName())}"><button class="sec" data-act="reroll" style="flex:none;padding:0 12px" aria-label="${t('newName')}">🎲</button></div>
  <button class="go small" data-act="savename" style="width:100%;margin-top:10px">${t('saveName')}</button><p class="small" id="msg" aria-live="polite"></p></div>`;
  const i=document.getElementById('nick');if(i){i.focus();i.select()}
}
function backFromName(){const b=nameBack;if(b==='invite')inviteScreen();else if(b==='friends')friends();else home()}
const progLv=()=>Math.min(NLV,cleared()+1);

// ---------- Mission map (scrolls from START at the bottom up to the Imugi) ----------
const MAP_BAND=330,MAP_TOP=96;
const MAP_REWARD={2:['centi'],4:['garter'],9:['basil'],12:['puffer'],14:['crab','shrimp'],17:['frill'],22:['peng'],29:['imugi']};
function mapPoints(){const xs=[95,265,110,250,180],yo=[295,235,175,115,50],p=[];
  for(let w=0;w<6;w++)for(let i=0;i<5;i++)p.push([w%2===0?xs[i]:360-xs[i],MAP_TOP+MAP_BAND*(5-w)+yo[i]]);return p}
function mapScreen(){
  panel='map';state='menu';closeNet();mode='solo';
  const st=getStars(),cur=progLv(),tot=totalStars(),H=MAP_TOP+MAP_BAND*6+80,P=mapPoints(),s=[];
  const by=w=>MAP_TOP+MAP_BAND*(5-w),B=MAP_BAND;
  const bg=[['#8fdc6a','#5cb83c'],['#9fd8ff','#4fa3e0'],['#5cc4dd','#2f8fb8'],['#f5d79a','#e3ad66'],['#e4f4ff','#a7d1ec'],['#4a5f8a','#2c3e66']];
  for(let w=0;w<6;w++){const y=by(w),[c1,c2]=bg[w];s.push(`<rect x="0" y="${y}" width="360" height="${B}" fill="${c1}"/>`);
    if(w===0){s.push(`<path d="M0 ${y+B-60} Q90 ${y+B-100} 180 ${y+B-70} T360 ${y+B-80} V${y+B} H0Z" fill="${c2}"/>`);for(let k=0;k<10;k++)s.push(`<circle cx="${20+k*35}" cy="${y+40+(k*53)%200}" r="4" fill="#ff6b9a"/><circle cx="${20+k*35}" cy="${y+40+(k*53)%200}" r="1.8" fill="#ffd23f"/>`)}
    if(w===1){s.push(`<ellipse cx="180" cy="${y+170}" rx="170" ry="120" fill="${c2}" opacity=".55"/>`);[[60,80],[300,120],[70,250],[290,270],[200,60]].forEach(([lx,ly])=>s.push(`<path d="M${lx} ${y+ly} m-12 0 a12 8 0 1 0 24 0 l-12 0z" fill="#3f9e3a"/>`));for(let k=0;k<6;k++)s.push(`<rect x="${10+k*62}" y="${y+5}" width="3" height="40" fill="#7a5a2b"/><ellipse cx="${11+k*62}" cy="${y+8}" rx="4" ry="9" fill="#8a5a2b"/>`)}
    if(w===2){for(let k=0;k<5;k++)s.push(`<path d="M0 ${y+20+k*62} q22 -10 45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0 t45 0" fill="none" stroke="#bff0ff" stroke-width="2" opacity=".6"/>`);for(let k=0;k<12;k++)s.push(`<circle cx="${(k*67)%340+10}" cy="${y+30+(k*41)%280}" r="${2+k%3}" fill="none" stroke="#e8fbff" stroke-width="1.2"/>`)}
    if(w===3){s.push(`<path d="M0 ${y+B-40} Q100 ${y+B-110} 200 ${y+B-50} T360 ${y+B-70} V${y+B} H0Z" fill="${c2}"/><circle cx="320" cy="${y+46}" r="18" fill="#ffd23f" opacity=".8"/>`);[[40,120],[320,200],[290,70]].forEach(([cx,cy])=>s.push(`<rect x="${cx-5}" y="${y+cy}" width="10" height="40" rx="5" fill="#3f9e5a"/><rect x="${cx-15}" y="${y+cy+12}" width="8" height="16" rx="4" fill="#3f9e5a"/><rect x="${cx+7}" y="${y+cy+6}" width="8" height="16" rx="4" fill="#3f9e5a"/>`))}
    if(w===4){s.push(`<path d="M0 ${y+120} L60 ${y+50} L110 ${y+120}Z M240 ${y+130} L310 ${y+40} L360 ${y+110} V${y+130}Z" fill="#c9e7fa"/>`);for(let k=0;k<14;k++)s.push(`<circle cx="${(k*53)%340+10}" cy="${y+20+(k*37)%290}" r="2.2" fill="#fff"/>`)}
    if(w===5){s.push(`<path d="M0 ${y+B} V${y+60} Q60 ${y+20} 120 ${y+60} V${y+B}Z M240 ${y+B} V${y+70} Q300 ${y+20} 360 ${y+60} V${y+B}Z" fill="#33466e"/><rect x="125" y="${y}" width="110" height="${B-40}" fill="#9fd6ff" opacity=".55"/>`);for(let k=0;k<8;k++)s.push(`<rect x="${130+k*13}" y="${y}" width="4" height="${B-50}" fill="#e8f6ff" opacity=".6"/>`);s.push(`<ellipse cx="180" cy="${y+B-30}" rx="120" ry="26" fill="#6fb8e8"/>`);for(let k=0;k<18;k++)s.push(`<circle cx="${(k*71)%350+5}" cy="${y+8+(k*29)%120}" r="1.3" fill="#fff"/>`)}
    const lb=t('worldN',{w:w+1,name:WORLDS[w]}),lw=lb.length*7.6+20;s.push(`<rect x="${352-lw}" y="${y+6}" rx="10" width="${lw}" height="22" fill="rgba(0,0,0,.45)"/><text x="${342}" y="${y+22}" text-anchor="end" font-size="13" font-weight="800" fill="#fff">${esc(lb)}</text>`)}
  const d='M'+P.map(([x,y])=>x+' '+y).join(' L');
  s.push(`<path d="${d}" fill="none" stroke="#fff6dc" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="${d}" fill="none" stroke="#d9b36a" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/>`);
  const im=(k,x,y,w)=>`<image href="${iconURL(k)}" x="${x-w/2}" y="${y-w*.3}" width="${w}" height="${w*.6}"/>`;
  // reward bubbles
  Object.entries(MAP_REWARD).forEach(([i,ks])=>{i=+i;const [x,y]=P[i],bw=26+ks.length*44,bx=x<180?x+30:x-30-bw,got=st[i]>0;
    s.push(`<rect x="${bx}" y="${y-24}" width="${bw}" height="48" rx="12" fill="${got?'#e8f8e4':'#fff'}" stroke="${got?'#2f9e3a':'#7a3cff'}" stroke-width="2"/><text x="${bx+bw/2}" y="${y-13}" text-anchor="middle" font-size="9" font-weight="800" fill="${got?'#2f7d1f':'#5b2fd0'}">${got?t('unlockedTag'):t('unlockTag')}</text>`);
    ks.forEach((k,j)=>s.push(im(k,bx+35+j*44,y+6,40)))});
  // mission circles
  P.forEach(([x,y],i)=>{const n=i+1,boss=i%5===4,r=boss?22:17,ok=st[i]>0,c=n===cur&&!ok,lock=n>cur;
    s.push(`<g ${lock?'':`data-m="${n}" class="mnode" role="button" tabindex="0" aria-label="${esc(t('missionN',{n}))}"`}>`);
    if(c)s.push(`<circle cx="${x}" cy="${y}" r="${r+8}" fill="#ff8a2a" opacity=".3"/>`);
    s.push(`<circle cx="${x}" cy="${y+3}" r="${r}" fill="rgba(0,0,0,.25)"/><circle cx="${x}" cy="${y}" r="${r}" fill="${lock?'#e8eef2':'#fff'}" stroke="${ok?'#2f9e3a':c?'#ff8a2a':'#9aa8b2'}" stroke-width="4"/>`);
    s.push(`<text x="${x}" y="${y+6}" text-anchor="middle" font-size="${boss?18:16}" font-weight="800" fill="${lock?'#7a8a94':'#14301f'}">${lock?'🔒':boss?'👑':n}</text>`);
    if(ok)s.push(`<text x="${x}" y="${y+r+14}" text-anchor="middle" font-size="12" fill="#ffd23f" stroke="#7a5a00" stroke-width=".5">${'★'.repeat(st[i])}${'☆'.repeat(3-st[i])}</text>`);
    s.push('</g>');if(c||(n===cur&&ok&&n===30))s.push(im(myChar,x,y-40,46))});
  // bonus: penguin ski jump beside mission 24
  {const [x,y]=P[23],bx=x<180?x+96:x-96,by=y-34,op=skiOpen(),sd=skiData();
    s.push(`<path d="M${x} ${y} Q${(x+bx)/2} ${y-50} ${bx} ${by}" fill="none" stroke="#fff6dc" stroke-width="6" stroke-dasharray="3 7" stroke-linecap="round"/>`);
    s.push(`<g ${op?'data-m="31" class="mnode" role="button" tabindex="0"':''} aria-label="${esc(t('skiName'))}"><rect x="${bx-38}" y="${by-22}" width="76" height="44" rx="14" fill="${op?'#fff3c4':'#e8eef2'}" stroke="${op?'#e0a000':'#9aa8b2'}" stroke-width="3"/><text x="${bx}" y="${by-3}" text-anchor="middle" font-size="16">${op?'🎿🐧':'🔒'}</text><text x="${bx}" y="${by+14}" text-anchor="middle" font-size="9" font-weight="800" fill="#7a5a00">${op?(sd.ft?sd.ft+' ft':'BONUS'):'PASS M24'}</text></g>`);
    if(sd.s)s.push(`<text x="${bx}" y="${by+36}" text-anchor="middle" font-size="12" fill="#ffd23f" stroke="#7a5a00" stroke-width=".5">${'★'.repeat(sd.s)}${'☆'.repeat(3-sd.s)}</text>`)}
  // Imugi waiting at the top
  {const [x,y]=P[29];s.push(`<g transform="translate(205,${y+130}) scale(.6)"><path d="M10 95 C40 60 70 110 100 80 S150 50 170 70" fill="none" stroke="#1f5f5b" stroke-width="22" stroke-linecap="round"/><path d="M10 95 C40 60 70 110 100 80 S150 50 170 70" fill="none" stroke="#3fa58f" stroke-width="16" stroke-linecap="round"/><ellipse cx="185" cy="62" rx="26" ry="20" fill="#3fa58f" stroke="#1f5f5b" stroke-width="3"/><circle cx="186" cy="54" r="8" fill="#fff"/><ellipse cx="188" cy="54" rx="2.5" ry="6" fill="#222"/><circle cx="222" cy="40" r="12" fill="#ffe27a" stroke="#e0a000" stroke-width="2"/></g>`)}
  // header + start
  s.push(`<rect x="0" y="0" width="360" height="${MAP_TOP}" fill="#1b2a4a"/><text x="180" y="40" text-anchor="middle" font-size="22" font-weight="800" fill="#fff">${t('mapTitle')}</text><text x="180" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#ffd23f">${t('starsOf',{n:tot})}</text>`);
  s.push(`<rect x="60" y="70" width="240" height="18" rx="9" fill="#33466e"/><rect x="60" y="70" width="${Math.min(240,240*tot/DRAGON_STARS)}" height="18" rx="9" fill="#ffd23f"/>${im('dragon',48,79,40)}<text x="186" y="83" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">${t('dragonAt',{n:DRAGON_STARS})}</text>`);
  s.push(`<rect x="0" y="${MAP_TOP+MAP_BAND*6}" width="360" height="80" fill="#fff"/><text x="180" y="${H-12}" text-anchor="middle" font-size="12" font-weight="800" fill="#2f5a1f">${t('startHere')}</text>`);
  ['cat','inch','snail','turtle'].forEach((k,j)=>s.push(im(k,72+j*72,H-44,50)));
  ov.innerHTML=`<div class="panel mappanel">${homeBtn()}${cleared()>=NLV?`<button class="sec endb" data-act="ending">${t('endBtn')}</button>`:''}<svg class="mapsvg" viewBox="0 0 360 ${H}" width="100%" font-family="'Baloo 2',sans-serif" role="img" aria-label="${t('mapTitle')}">${s.join('')}</svg></div>`;
  const pn=ov.querySelector('.mappanel'),sv=ov.querySelector('.mapsvg');
  requestAnimationFrame(()=>{if(!pn||!sv)return;const k=sv.getBoundingClientRect().width/360,[,yy]=P[Math.min(29,cur-1)];pn.scrollTop=Math.max(0,yy*k-pn.clientHeight/2)});
}
function misHow(m){const pick=x=>x;switch(m.type){
  case 'red':return t('how_red',{e:WATCH[m.watch][0],w:WATCH[m.watch][1]});case 'catch':return t('how_catch',{e:ITEM[m.item][0],i:ITEM[m.item][2]});
  case 'egg':return t('how_egg',{e:EGG[m.item][0],i:EGG[m.item][1],l:m.lim});case 'chase':return t('how_chase',{e:FOE[m.foe][0],f:FOE[m.foe][1]})+(m.gate?' '+t('how_gates2'):'');
  case 'runner':return t('how_runner',{e:FOE[m.foe][0],f:FOE[m.foe][1]});case 'duck':return t('how_duck',{e:FOL[m.fol][0],f:FOL[m.fol][1],lo:m.dlo,hi:m.dhi});
  case 'gates':return t('how_gates',{e:GATE[m.gate][0],g:GATE[m.gate][1]});case 'water':return t('how_water',{w:m.wmin});case 'heat':return t('how_heat',{h:m.hot});
  case 'slide':return t('how_slide',{j:m.jmin});case 'ski':return t('how_ski');case 'beat':return m.water?t('how_water',{w:m.wmin}):m.gate?t('how_tide'):'';}return ''}
function missionStart(n){
  if(n===31&&!skiOpen())n=progLv();
  if(n!==31)n=Math.max(1,Math.min(NLV,Math.min(n,progLv())));lvl=raceLv=n;store.set('cr-lv',String(n));
  panel='mstart';state='menu';closeNet();mode='solo';botChar=null;setup();
  const m=MIS[n-1],best=n===31?skiData().s:getStars()[n-1],g=starGoals(m),boss=m.boss,pc=m.as&&isOpen(m.as)?m.as:myChar,foe=m.foe||m.watch,fe=m.foe&&FOE[m.foe]||m.watch&&WATCH[m.watch];
  const you=`<div>${icImg(pc,'big')}<small>${esc(myName())}${m.as&&pc===m.as?' · '+esc(t('ch_'+pc)):''}</small></div>`;
  const vs=m.opp?`<div class="vs">${you}<b>VS</b><div>${icImg(m.opp,'big')}<small>${esc(t('ch_'+m.opp))}</small></div></div>`:fe?`<div class="vs">${you}<b>VS</b><div>${ALLC.includes(foe)?icImg(foe,'big'):`<span class="bigemo">${fe[0]}</span>`}<small>${esc(fe[1])}</small></div></div>`:`<div class="vs">${you}</div>`;
  const how=misHow(m);
  ov.innerHTML=`<div class="panel mstart">${homeBtn(false,'map')}<h2>${esc(t('worldN',{w:m.w+1,name:WORLDS[m.w]}))}</h2>
  <p class="lvc">${misName(n).toUpperCase()}${boss?' 👑':''}</p>${vs}${n===31&&skiData().ft?`<p class="small"><b>${t('skiBest',{f:skiData().ft})}</b></p>`:''}
  <p class="goal">${esc(goalText(m))}</p>
  ${m.type==='obst'?`<p class="lore">${obLayout(m).filter((x,i,a)=>a.findIndex(y=>y[0]===x[0])===i).map(([k])=>{const d=OBW[m.w][k];return `${d[1]} <b>${esc(d[2])}</b>: ${k==='push'?'keep spinning '+m.pmin+'+ RPM or you get stuck':k==='quiet'?'tiptoe under '+m.qmax+' RPM or it wakes up':'arrive at '+m.bmin+'+ RPM for a boost'}`}).join('<br>')}</p>`:''}
  ${how?`<p class="lore">${esc(how)}</p>`:''}
  ${m.foe==='imugi'?`<p class="lore">🐍 <b>${t('ch_imugi')} 이무기.</b> ${esc(t('imugiLore'))}</p>`:''}
  <div class="stars3">${g.map((x,i)=>`<div class="${i<best?'got':''}"><b>${'⭐'.repeat(i+1)}</b>${esc(x)}</div>`).join('')}</div>
  <button class="go" data-act="mgo">${t('startMission')}</button><p class="small" id="msg" aria-live="polite"></p></div>`;
}
function closeNet(){if(net){net.send({t:'bye'});net.close()}anyone=false}
function menu(){if(invite){inviteScreen();return}home()}
function home(){
  panel='home';state='menu';finishId++;closeNet();mode='solo';raceLv=lvl=progLv();botChar=null;setup();
  const tot=totalStars();
  ov.innerHTML=`<div class="panel home">${meCard()}<h2>${t('letsRace')}</h2>
  <div class="tiles">
   <button class="tile c1 wide" data-act="mission"><span class="e">🗺️</span><b>${t('misTile')}</b><small>${t('misTileSub')}</small><span class="live">${t('starsOf',{n:tot})}</span><span class="minibar" aria-hidden="true"><i style="width:${Math.round(tot/90*100)}%"></i></span></button>
   <button class="tile c2" data-act="any"><span class="e">🌍</span><b>${t('anyTile')}</b><small>${t('anyTileSub')}</small><span class="live" id="anyLive"${anyCount>0?'':' hidden'}><i></i>${t('racingNow',{n:anyCount})}</span></button>
   <button class="tile c3" data-act="friends"><span class="e">👫</span><b>${t('friendsTile')}</b><small>${t('friendsSub')}</small></button>
   <button class="tile c5 small" data-act="practice"><span class="e">🏁</span><b>${t('practice')}</b><small>${t('notBoard')}</small></button>
   <button class="tile c4 small" data-act="duo"><span class="e">📱</span><b>${t('sameTile')}</b><small>${t('notBoard')}</small></button>
  </div>
  <div class="row"><button class="sec" data-act="board">🏆 ${t('board')}</button></div>
  <p class="small" id="msg" aria-live="polite"></p></div>`;
  anyPeek();
}
function animalCard(k){
  panel='acard';const op=isOpen(k),how=k==='dragon'?t('dragonStars',{n:DRAGON_STARS}):t('lockedMsg',{n:UNLOCK[k],a:t('ch_'+k)});
  ov.innerHTML=`<div class="panel acard">${homeBtn(false,'acback')}<div class="acpic${op?'':' lkpic'}">${icImg(k,'big')}</div><h2>${op?'':'🔒 '}${esc(t('ch_'+k))}</h2><p class="small"><i>${esc(t('line_'+k))}</i></p><p class="fact">${esc(t('fact_'+k))}</p>
  ${op?`<button class="go" data-act="choose" data-v="${k}">${k===myChar?t('chosenA'):t('chooseA')}</button><button class="sec" data-act="vidplay" data-v="${k}">${t('watchVid')}</button>`:`<p class="small"><b>${esc(how)}</b></p>`}</div>`;
}
function meScreen(){
  panel='me';
  ov.innerHTML=`<div class="panel">${homeBtn(false,meBack==='home'?null:'medone')}<h2>${t('pickAnimal')}</h2>${animalGrid(myChar,'char')}
  <button class="go" data-act="medone">${t('doneBtn')}</button><p class="small" id="msg" aria-live="polite"></p></div>`;
}
function friends(){
  panel='friends';state='menu';closeNet();mode='online';
  let h=`<div class="panel">${homeBtn()}<h2>${t('friendsTitle')}</h2>${meCard()}<div class="seg" data-g="otab"><button data-v="create" class="${onTab==='create'?'on':''}">${t('createTab')}</button><button data-v="join" class="${onTab==='join'?'on':''}">${t('joinTab')}</button></div>`;
  if(onTab==='create')h+=`<label>${t('howMany')}</label><div class="seg cap" data-g="cap">${[2,3,4,5,6,7,8].map(n=>`<button data-v="${n}" class="${n===cap?'on':''}" aria-pressed="${n===cap}">${n}</button>`).join('')}</div><p class="small">${t('capHint',{n:cap})}</p><button class="go" data-act="create">${t('createBtn')}</button>`;
  else h+=`<label for="code">${t('codeLbl')}</label><input type="text" id="code" class="codein" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="off" value="${esc(codeDraft)}" placeholder="0000"><button class="go" data-act="join">${t('joinBtn')}</button>`;
  ov.innerHTML=h+`<p class="small" id="msg" aria-live="polite"></p></div>`;
}
function inviteScreen(){
  panel='invite';state='menu';closeNet();mode='online';setup();
  ov.innerHTML=`<div class="panel">${homeBtn()}<h2>${t('invitedT')}</h2><p class="small" style="margin:0">${t('roomCode')}</p><p class="code">${esc(codeDraft)}</p>
  <p class="small">${t('joinAs')}</p>${meCard()}<button class="go" data-act="join">${t('joinBtn')}</button>
  <div class="row"><button class="sec" data-act="uninvite">${t('notNow')}</button></div><p class="small" id="msg" aria-live="polite"></p></div>`;
}
function duoScreen(){
  panel='duo';state='menu';closeNet();mode='duo';if(!isOpen(p2Char)||p2Char===myChar)p2Char=CHARS.find(x=>isOpen(x)&&x!==myChar);setup();
  ov.innerHTML=`<div class="panel">${homeBtn()}<h2>${t('p2Title')}</h2><p class="small">${t('p1Is',{a:`<b>${t('ch_'+myChar)}</b>`})} · ${t('selected',{a:`<b>${t('ch_'+p2Char)}</b>`})}</p>${animalGrid(p2Char,'char2',myChar)}<p class="small">${t('duoHint')}</p>
  <button class="go" data-act="start">${t('start')}</button><p class="small" id="msg" aria-live="polite"></p></div>`;
}
function levelsScreen(){
  const fromRes=panel==='results';panel='levels';
  const top=progLv();
  ov.innerHTML=`<div class="panel">${homeBtn(false,fromRes?'backres':null)}<h2>${t('levels')}</h2><div class="lvs" data-g="lvpick">${LV.map((r,i)=>{const n=i+1,op=n<=top;return `<button data-v="${n}" class="${n<=cleared()?'ok':n===top?'cur':''}" ${op?'':'disabled'} aria-label="${t('levelN',{n})}">${n===NLV?(op?'👑30':'🔒👑'):op?n:'🔒'}</button>`}).join('')}</div>
  <p class="small">${t('cpuAbout',{r:LV[top-1]})} · ${t('levelN',{n:top})}</p></div>`;
}
function roomLink(code){return location.origin+location.pathname+'?room='+code+(qs.get('local')==='1'?'&local=1':'')}
function playerList(){
  const mem=net.members(),c=net.cap(),empty=Math.max(0,c-mem.length);
  const iHost=net.host();
  return `<ul class="players">${mem.map((p,i)=>p.bot?`<li class="botli"><span class="dot" style="background:${SK[i%8].body}"></span><span class="ic">${icImg(p.ch||'cat')}</span><b>${esc(p.name)}</b><span class="st ok">${t('isReady')}</span>${iHost?`<button class="rmb" data-act="rmbot" data-v="${p.id}" aria-label="Remove ${esc(p.name)}">✕</button>`:''}</li>`:`<li><span class="dot" style="background:${SK[i%8].body}"></span><span class="ic">${icImg(p.id===myId?myChar:(p.ch||'cat'))}</span>${esc(p.name)}${p.id===myId?' ('+t('you')+')':''}${i===0?` <span class="st" style="margin-left:4px">· ${t('host')}</span>`:''}<span class="st ${p.ready?'ok':''}">${p.ready?t('isReady'):t('notReady')}</span></li>`).join('')}${`<li class="empty">${t('emptySlot')}</li>`.repeat(empty)}</ul>`;
}
function readyArea(){
  const mem=net.members(),ids=readyIds(),c=net.cap(),allIn=mem.length>=c,allReady=ids.length===mem.length;
  let h='';
  if(net.racing()&&panel==='lobby')h+=`<p class="small">${t('inProgress')}</p>`;
  h+=`<p class="small"><b>${t('joinedCount',{n:mem.length,m:c})}</b> · ${t('readyCount',{r:ids.length,n:mem.length})}</p>`;
  const others=mem.filter(p=>p.id!==myId),waitMe=others.length>0&&others.every(p=>p.ready);
  if(!net.me.ready)h+=`${waitMe?`<p class="waitu">${t('waitingForYou')}</p>`:''}<button class="go pulse" data-act="ready">👉 ${panel==='results'?t('rematch'):t('readyBtn')}</button>`;
  else h+=`<p class="small">${allIn?t('waitReady'):t('waitJoin',{k:c-mem.length})}</p>`;
  if(net.me.ready&&net.host()&&mem.length>=2&&!(allIn&&allReady))h+=`<button class="go alt" data-act="startnow">${t('startNow',{k:mem.length})}</button>`;
  h+=`<p class="small">${t('autoStart',{m:c})}${mem.length>=2?' '+t('hostCan'):''}</p>`;
  return h;
}
function lobby(){
  panel='lobby';if(state!=='done')state='lobby';
  const n=net;if(!n){menu();return}
  const st=n.status();
  if(st==='connecting'){ov.innerHTML=`<div class="panel">${homeBtn()}<h2>${t('room')}</h2><p class="code">${esc(n.code)}</p><p class="small">${t('joining')}</p></div>`;return}
  if(st==='fail'||st==='full'||st==='noroom'){ov.innerHTML=`<div class="panel">${homeBtn()}<h2>${t('room')} ${esc(n.code)}</h2><p>${st==='full'?t('full',{m:n.cap()}):st==='noroom'?t('noRoom',{c:esc(n.code)}):t('offline')}</p><button class="go" data-act="leave">${t('back')}</button></div>`;return}
  setup();
  const link=roomLink(n.code),full=n.members().length>=n.cap();
  ov.innerHTML=`<div class="panel">${homeBtn(true,invite?null:'lobbyback')}<p class="small" style="margin:0">${t('roomCode')}</p><p class="code">${esc(n.code)}</p>
  ${full?'':`<p class="link" id="lnk">${esc(link)}</p><div class="row"><button class="sec" data-act="copylink">🔗 ${t('copy')}</button>${navigator.share?`<button class="sec" data-act="sharelink">${t('share')}</button>`:''}</div>`}
  ${playerList()}${readyArea()}
  ${endNote?`<p class="small">${esc(endNote)}</p>`:''}
  <div class="row"><button class="sec" data-act="homeask">${t('leave')}</button></div><p class="small" id="msg" aria-live="polite"></p></div>`;
}
let boardNote='',lbPeriod='day',lbData=null,lbErr=false;
async function fetchBoard(period,kind){const sb=getSb();if(!sb||qs.get('local')==='1')throw new Error('offline');const {data,error}=kind==='jump'?await sb.rpc('cr_jump_board',{p_period:period,p_device:deviceId}):await sb.rpc('cr_board',{p_period:period,p_device:deviceId});if(error)throw error;return data}
async function submitScore(ms,topRpm,md,lv){
  const nick=anyone&&md==='online'?autoName():myName();
  const sb=getSb();if(!sb||qs.get('local')==='1')return;
  boardNote=t('boardSaving');
  try{
    const {error}=await sb.from('cr_scores').insert({nick,time_ms:Math.round(ms),top_rpm:Math.min(520,Math.round(topRpm)),mode:md,diff:null,level:md==='solo'?lv:null,device_id:deviceId,animal:me&&me.char||myChar});
    if(error)throw error;
    const b=await fetchBoard('day');
    boardNote=b&&b.me?t('boardRank',{r:b.me.rk,n:b.total}):'';
  }catch(e){boardNote=t('boardFail')}
  if(panel==='results'&&state==='done'){sig='';results()}
}
async function submitJump(ft,rpm){
  const sb=getSb();if(!sb||qs.get('local')==='1')return;
  try{const {error}=await sb.from('cr_jumps').insert({nick:myName(),feet:ft,takeoff_rpm:Math.min(520,Math.round(rpm)),device_id:deviceId,animal:'peng'});if(error)throw error;
    const {data}=await sb.rpc('cr_jump_board',{p_period:'day',p_device:deviceId});boardNote=data&&data.me?t('boardRankJ',{r:data.me.rk,n:data.total}):''}catch(e){boardNote=t('boardFail')}
  if(panel==='results'&&state==='done'){sig='';results()}
}
let lbKind='race';
const lvLabel=r=>r.lv?t('lvShort',{n:r.lv}):r.md==='online'?t('onlineLv'):r.df!=null?['Easy','Normal','Hard','Champion'][r.df]||'—':'—';
function board(){
  panel='board';state='menu';
  const tabs=[['day','p24'],['week','p7'],['all','pAll']];
  let body;
  if(lbErr)body=`<p class="small">${t('boardErr')}</p>`;
  else if(!lbData)body=`<p class="small">${t('loading')}</p>`;
  else if(!lbData.top.length)body=`<p class="small">${t('boardEmpty')}</p>`;
  else{
    const row=(r,mine)=>`<tr${mine?' style="font-weight:800;background:color-mix(in srgb,var(--on) 14%,transparent)"':''}><td>${r.rk}</td><td><span class="ic">${icImg(r.animal)}</span>${esc(r.nick)}${mine?' ('+t('you')+')':''}</td><td>${lbKind==='jump'?(+r.best).toFixed(1)+' ft':fmt(r.best)}</td></tr>`;
    const meIn=lbData.top.some(r=>r.me);
    body=`<table class="rk"><thead><tr><th>${t('rank')}</th><th>${t('racer')}</th><th>${lbKind==='jump'?t('distance'):t('time')}</th></tr></thead><tbody>${lbData.top.map(r=>row(r,r.me)).join('')}${!meIn&&lbData.me?`<tr><td colspan="4" style="text-align:center">…</td></tr>`+row(lbData.me,true):''}</tbody></table><p class="small">${t('boardNote')}</p>`;
  }
  ov.innerHTML=`<div class="panel">${homeBtn()}<h2>${t('boardTitle')}</h2><div class="seg" data-g="lbkind"><button data-v="race" class="${lbKind==='race'?'on':''}">${t('lbRace')}</button><button data-v="jump" class="${lbKind==='jump'?'on':''}">${t('lbJump')}</button></div><div class="seg" data-g="period">${tabs.map(([k,l])=>`<button data-v="${k}" class="${k===lbPeriod?'on':''}">${t(l)}</button>`).join('')}</div>${body}</div>`;
}
async function loadBoard(){lbData=null;lbErr=false;board();try{lbData=await fetchBoard(lbPeriod,lbKind)}catch(e){lbErr=true}if(panel==='board')board()}
let shareText='',finishId=0,raceLv=1,lvJump=0,newUnlocks=[],wonLv=false,lastStars=0;
function finish(){
  if(state==='done')return;
  state='done';endEl=performance.now()-startT;ov.innerHTML='';
  const order=standings();
  winner=order[0]&&(order[0].done!=null||mode==='online')?order[0]:null;
  lvJump=0;newUnlocks=[];wonLv=false;
  if(mode==='solo'){
    // mission: stars for this run; keep the best per mission; new animals when their mission is first passed
    const L=raceLv,m=MIS[L-1],won=!m.opp||winner===me,st=missionStars(m,me,won),a=getStars(),openBefore=CHARS.filter(isOpen);
    lastStars=st;wonLv=st>0;
    if(L===31){const sd=skiData(),ft=MX&&MX.ski?MX.ski.ft:0,rp=MX&&MX.ski?MX.ski.rpm:0;endNote=ft>sd.ft&&sd.ft?t('skiNewBest',{f:ft}):sd.ft?t('skiBest',{f:Math.max(sd.ft,ft)}):'';
      store.set('cr-ski',JSON.stringify({s:Math.max(sd.s,st),ft:Math.max(sd.ft,ft)}));newUnlocks=CHARS.filter(c2=>isOpen(c2)&&!openBefore.includes(c2));lvl=31;
      shareText=t('shareSki',{f:ft,r:st>0?'★'.repeat(st):'',rpm:rp});if(ft>0)submitJump(ft,rp)}
    else{
    const k='cr3-best-'+L,b=+store.get(k)||0;
    if(me.done!=null&&!me.failed){if(!b||me.done<b){store.set(k,String(me.done));endNote=b?t('newBestLv',{n:L}):''}else endNote=t('bestLv',{n:L,t:fmt(b)})}
    if(st>a[L-1]){a[L-1]=st;setStars(a)}
    newUnlocks=CHARS.filter(c2=>isOpen(c2)&&!openBefore.includes(c2));
    if(st>0){lvl=Math.min(NLV,L+1);store.set('cr-lv',String(lvl))}else lvl=L;
    shareText=t('shareSolo',{d:misName(L),r:st>0?'★'.repeat(st):t('lost'),t:me.done!=null?' · '+fmt(me.done):'',rpm:Math.round(me.top*60)});}
  }
  else if(mode==='online'&&me){const p=order.indexOf(me)+1;shareText=t('shareOnline',{p:ord(p),n:racers.length,t:me.done!=null?' · '+fmt(me.done):'',u:anyone?gameURL():net?roomLink(net.code):location.origin})}
  else if(winner)shareText=t('wins',{n:winner.name})+(winner.done!=null?' '+fmt(winner.done):'');
  boardNote='';
  {const pm=MIS[raceLv-1];if((mode==='solo'&&pm.type==='beat'&&!pm.water&&!pm.gate||mode==='online')&&me&&me.done!=null&&!me.failed)submitScore(me.done,me.top*60,mode,raceLv)}
  sig='';const fid=++finishId;setTimeout(()=>{if(state==='done'&&fid===finishId)results(true)},1900);
}
function starBox(){
  const m=MIS[raceLv-1],g=starGoals(m),best=getStars()[raceLv-1];
  return `<p class="bigstars" aria-label="${lastStars} of 3 stars">${'★'.repeat(lastStars)}<span>${'★'.repeat(3-lastStars)}</span></p>
  <div class="stars3">${g.map((x,i)=>`<div class="${i<lastStars?'got':''}"><b>${'⭐'.repeat(i+1)}</b>${esc(x)}</div>`).join('')}</div>
  <p class="small" style="margin:4px 0 0">${esc(t('worldN',{w:m.w+1,name:WORLDS[m.w]}))} · ${'★'.repeat(best)}${'☆'.repeat(3-best)}</p>`;
}
function unlockScreen(){
  panel='unlock';const list=newUnlocks,leg=list.includes('dragon'),one=list.length===1;
  const pics=list.map(k=>{const sh=animalShot(k,'clap',3);return `<figure class="ul${k==='dragon'?' gold':''}"><img src="${sh?sh.toDataURL():iconURL(k)}" alt=""><figcaption><b>${t('ch_'+k)}</b>${one?`<small>${t('line_'+k)}</small>`:''}</figcaption></figure>`}).join('');
  ov.innerHTML=`<div class="panel unlock${leg?' legend':''}"><p class="lvc">${t('misDone',{n:raceLv})}</p><h2>${leg?t('legendary'):one?t('newAnimal'):t('newAnimals',{n:list.length})}</h2><div class="uls">${pics}</div>
  ${list.map(k=>`<button class="go${k==='dragon'?' goldb':''}" data-act="raceas" data-v="${k}">${t('raceAs',{a:t('ch_'+k)})}</button><button class="sec" data-act="vidul" data-v="${k}">${t('watchVid')}</button>`).join('')}
  ${raceLv<NLV?`<button class="go alt" data-act="mnext">${t('nextMission')}</button>`:''}
  <div class="row"><button class="sec" data-act="backres">${t('seePic')}</button></div></div>`;
}
function results(fresh){
  if(fresh){const won=mode==='duo'||(mode==='solo'?lastStars>0:winner===me);if(!won&&mode==='solo'&&!(me&&me.failed)){sfx.failBig()}else if(!won&&mode==='solo'){}else if(won&&mode==='solo'&&raceLv===NLV)sfx.champion();else if(won&&newUnlocks.includes('dragon'))sfx.champion();else if(won)sfx.winBig();else sfx.sad()}
  if(fresh&&mode==='solo'){const endNow=raceLv===NLV&&lastStars>0&&!store.get('cr-end');
    if(endNow||newUnlocks.length){if(endNow)store.set('cr-end','1');const after=()=>playVids(newUnlocks.slice(),()=>{if(newUnlocks.length)unlockScreen();else{sig='';results()}});if(endNow)playEnding(after);else after();return}}
  panel='results';
  const order=standings();
  let title;
  if(mode==='solo')title=raceLv===31?t('skiTitle',{f:MX&&MX.ski?MX.ski.ft:0}):lastStars>0?t('misDone',{n:raceLv}):t('misFail',{n:raceLv});
  else if(mode==='online'&&me){const p=order.indexOf(me)+1;title=p===1?t('youWin'):t('place',{p:ord(p),n:racers.length})}
  else title=winner?t('wins',{n:winner.name}):'—';
  const rows=order.map((c,i)=>`<tr${c===me&&mode==='online'?' style="font-weight:800"':''}><td>${i+1}</td><td><span class="dot" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.pc||c.body};margin-right:4px"></span><span class="ic">${icImg(c.char)}</span>${esc(c.name)}</td><td>${c.left?t('leftTag'):c.done!=null?fmt(c.done):t('dnf')}</td><td>${Math.round(c.top*60)}</td></tr>`).join('');
  let again;
  if(mode==='online')again=anyone?`<button class="go" data-act="anyagain">${t('rematch')}</button>`:(net&&net.status()==='ok'?`<button class="go" data-act="tolobby">${t('rematch')}</button>`:'');
  else if(mode==='solo'){const back=`<button class="go alt" data-act="map">${t('backMap')}</button>`;
    again=raceLv===31?`<button class="go" data-act="mretry">${t('skiAgain')}</button>${back}`:(lastStars>0&&raceLv<NLV?`<button class="go" data-act="mnext">${t('nextMission')}</button><div class="row"><button class="sec" data-act="mretry">${t('retryMission')}</button><button class="sec" data-act="map">${t('mapBtn')}</button></div>`:`<button class="go" data-act="mretry">${t('retryMission')}</button>${back}`)}
  else if(mode==='duo')again=`<button class="go" data-act="duo">${t('rematch')}</button>`;
  else again=`<button class="go" data-act="start">${t('rematch')}</button>`;
  const pic=ensureCard(),canShare=!!navigator.share;
  ov.innerHTML=`<div class="panel">${homeBtn(mode==='online'&&!!net)}<h2>${esc(title)}</h2>${mode==='solo'?starBox()+again:''}
  <button class="cardbtn" data-act="card" aria-label="${esc(t('picAlt'))}"><img class="card mini" src="${pic}" alt="${esc(t('picAlt'))}"></button>
  ${mode==='solo'?'':again}
  <div class="row">${canShare?`<button class="sec" data-act="sharepic">📤 ${t('sharePic')}</button>`:''}<button class="sec" data-act="savepic">⬇️ ${t('savePic')}</button></div>
  <table class="rk"><thead><tr><th>${t('rank')}</th><th>${t('racer')}</th><th>${t('time')}</th><th>${t('topRpm')}</th></tr></thead><tbody>${rows}</tbody></table>
  ${endNote?`<p class="small">${esc(endNote)}</p>`:''}
  ${boardNote?`<p class="small">${esc(boardNote)}</p>`:''}
  <div class="row"><button class="sec" data-act="copy">${t('copyText')}</button></div>
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
const winLine=L=>L>=NLV?'I BEAT THE DRAGON KING!':L>=26?'UNSTOPPABLE!':L>=20?'TOO FAST TO CATCH!':L>=10?'SUPER SPEEDY WIN!':'I BEAT THE COMPUTER!';
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
    }else if(what==='lose'){face(hd.x,hd.y,hd.r,'lose',1000,f) // missed the mission: no medal, no trophy
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
  const saved=ctx,savedWin=winner,hab=habOf(c.char);
  const sky={waterfall:['#14203d','#5b7ab8'],volcano:['#3b1d6e','#ff9a3c'],garden:['#7fd0ff','#e9f9ff'],desert:['#ffb36b','#fff0c9'],pond:['#7fd0ff','#e9f9ff'],sea:['#1f7fc4','#8adaf7'],ice:['#9fd6ff','#f4fcff']}[hab];
  const ground={waterfall:'#2f5a6e',volcano:'#5b3a2e',garden:'#5cb83c',desert:'#eec57e',pond:'#62c0e8',sea:'#e3cf94',ice:'#f6fcff'}[hab];
  const first=mode==='solo'?lastStars>0:place===1,champ=mode==='solo'&&first&&raceLv===NLV;
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
      const crowd=CHARS.filter(k=>k!==c.char),hf=Math.ceil(crowd.length/2),rows=[crowd.slice(0,hf),crowd.slice(hf)],tiers=[[505,470],[640,610]];
      rows.forEach((list,r)=>{const[by,ph]=tiers[r];
        ctx.fillStyle='rgba(255,255,255,.28)';rr(30,by-2,Wc-60,22,11);ctx.fill();ctx.fillStyle='rgba(122,60,255,.25)';rr(30,by+20,Wc-60,10,5);ctx.fill();
        list.forEach((k,i)=>{const sh=animalShot(k,'clap',r*7+i);if(!sh)return;const cw=(Wc-80)/list.length,cx=40+cw*(i+.5),k2=Math.min((cw-14)/sh.width,(r?118:104)/sh.height),dw=sh.width*k2,dh=sh.height*k2;ctx.drawImage(sh,cx-dw/2,by-dh+4,dw,dh)})});
    }
    const main=animalShot(c.char,first?(champ?'champ':'trophy'):mode==='solo'?'lose':'medal',0,place);
    if(main){const k=Math.min((champ?760:840)/main.width,(champ?330:600)/main.height,1.6),dw=main.width*k,dh=main.height*k;
      ctx.fillStyle='rgba(20,48,31,.18)';ctx.beginPath();ctx.ellipse(Wc/2,1018,dw*.42,22,0,0,7);ctx.fill();
      ctx.drawImage(main,(Wc-dw)/2,1020-dh,dw,dh)}
    for(let i=0;i<70;i++){const x=hash(i*7.1)*Wc,y=hash(i*3.3)*900,col=['#ff6b8a','#ffd23f','#4fb3ff','#6fd14a','#c9b3ff','#ff9a3c'][i%6];ctx.save();ctx.translate(x,y);ctx.rotate(hash(i)*6);ctx.fillStyle=col;ctx.globalAlpha=.85;ctx.fillRect(-7,-3.5,14,7);ctx.restore()}
    // headline
    let head,sub;
    if(mode==='solo'){head=raceLv===31?'I FLEW '+(MX&&MX.ski?Math.round(MX.ski.ft):0)+' FT!':first?(raceLv===NLV?'I BEAT THE IMUGI!':lastStars===3?'PERFECT! ★★★':lastStars===2?'SUPER SPEEDY! ★★':'MISSION COMPLETE! ★'):'SO CLOSE! REMATCH?';sub=t('missionN',{n:raceLv})+' · '+WORLDS[MIS[raceLv-1].w]}
    else if(mode==='online'){head=first?'1ST PLACE!':ord(place).toUpperCase()+' PLACE!';sub=(anyone?t('anyTile'):t('friendsTile'))+' · '+n+' '+t('players')}
    else{head=(c.name||'').toUpperCase()+' WINS!';sub=t('duo')}
    ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';
    let fs=150;ctx.font=`800 ${fs}px "Baloo 2",sans-serif`;while(ctx.measureText(head).width>Wc-90&&fs>60){fs-=6;ctx.font=`800 ${fs}px "Baloo 2",sans-serif`}
    ctx.lineWidth=22;ctx.strokeStyle='#14301f';ctx.strokeText(head,Wc/2,150);ctx.fillStyle=first?'#ffd23f':'#ffffff';ctx.fillText(head,Wc/2,150);
    ctx.font='700 46px "Baloo 2",sans-serif';ctx.lineWidth=10;ctx.strokeText(sub,Wc/2,250);ctx.fillStyle='#fff';ctx.fillText(sub,Wc/2,250);
    const who=(mode!=='duo'?(anyone&&mode==='online'?autoName():myName())+' the ':'')+t('ch_'+c.char);
    ctx.font='700 40px "Baloo 2",sans-serif';ctx.lineWidth=9;ctx.strokeText(who,Wc/2,310);ctx.fillStyle='#ffe9a8';ctx.fillText(who,Wc/2,310);
    if(mode==='solo'&&first&&lvJump>1){const jt='⚡ LEVEL JUMP +'+lvJump+'!';ctx.font='800 44px "Baloo 2",sans-serif';const jw=ctx.measureText(jt).width+60;ctx.save();ctx.translate(Wc/2,385);ctx.rotate(-.04);ctx.fillStyle='#ff4f6d';rr(-jw/2,-34,jw,68,34);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#fff';ctx.fillText(jt,0,2);ctx.restore()}
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
  ov.innerHTML=`<div class="panel">${homeBtn(mode==='online'&&!!net,'backres')}<h2>🎉 ${t('yourPic')}</h2><img class="card" src="${cardURL}" alt="${esc(t('picAlt'))}">
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
function saveForm(){const c=document.getElementById('code');if(c)codeDraft=c.value.replace(/\D/g,'').slice(0,4)}
function clearRoomParam(){qs.delete('room');history.replaceState(null,'',location.pathname+(qs.toString()?'?'+qs.toString():''))}
function raceOv(){ov.innerHTML=mode==='practice'?`<button class="done" data-act="menu">${t('done')}</button>`:`<button class="quit" data-act="quit">✕ ${t('quit')}</button>${switchOffer?`<button class="switchb" data-act="switchany">🌍 ${t('switchQ')} <b>${t('switchYes')}</b></button>`:''}`}
function startLocal(){
  saveForm();botChar=null;finishId++;if(mode==='solo')raceLv=lvl;setup();firstDone=0;winner=null;endNote='';boardNote='';panel='race';lastCount=0;switchOffer=false;
  if(mode==='practice'){state='race';startT=performance.now();sfx.go()}
  else{state='count';startT=performance.now()+3000}
  raceOv();if(net)net.hello();
}
function leaveRoom(){closeNet();clearRoomParam();invite=false;onTab='create';state='menu';home()}
// ---------- Race anyone: one shared room where whoever is waiting gets matched ----------
const ANYROOM='ANY';
const ANYMIN=4,ANYALONE=10000;let mBots=[],mPlanFor=0;let matchOk=false;let peekTr=null,peekTimer=0;const stopPeek=()=>{clearTimeout(peekTimer);if(peekTr){try{peekTr.close()}catch(e){}peekTr=null}};let raceBots=[],anyCount=0,anyPeekAt=0,pairAt=0,aloneSince=0,aloneWait=10000,switchOffer=false;
function anyPeek(){
  // listen to the shared room for a few seconds (without joining) to count who is racing there
  if(Date.now()-anyPeekAt<20000)return;anyPeekAt=Date.now();
  const seen=new Map();let tr=null;
  try{tr=makeTransport(ANYROOM,m=>{if(m&&m.t==='hi'&&m.id)seen.set(m.id,1)},()=>{})}catch(e){return}
  peekTr=tr;peekTimer=setTimeout(()=>{if(peekTr===tr){try{tr.close()}catch(e){}peekTr=null}else return;anyCount=seen.size;const el=document.getElementById('anyLive');if(el&&panel==='home'){el.hidden=anyCount<1;el.innerHTML=`<i></i>${t('racingNow',{n:anyCount})}`}},4500);
}
function pool(){if(!net)return[];return net.all().filter(p=>p.id===myId?state==='match':p.ph==='match').sort((a,b)=>(a.ws||0)-(b.ws||0)||(a.id<b.id?-1:1))}
function startAnyone(){
  stopPeek();closeNet();clearRoomParam();invite=false;anyone=true;mode='online';
  joinRoom(ANYROOM,MAXP);enterMatch();
}
function enterMatch(){raceBots=[];mBots=[];mPlanFor=0;mShown=0;anyGo=false;matchOk=false;anyone=true;mode='online';state='match';panel='match';pairAt=0;aloneSince=Date.now();aloneWait=10000;switchOffer=false;if(net){net.me.ws=Date.now();net.me.ready=false;net.hello()}setup();matchScreen()}
function matchTick(){
  if(!anyone||!net)return;
  const others=[...net.peers.values()].filter(p=>p.ph==='match');
  if(mode!=='online')return;
  if(state!=='match')return;
  if(net.status()!=='ok'){if(panel==='match'||panel==='alone')matchScreen();return}
  if(!matchOk){matchOk=true;aloneSince=Date.now()} // count the 10 s only once we're actually connected
  const pl=pool();
  if(pl[0]&&pl[0].id===myId){
    // I'm the game creator: 1–4 computers (fun names) join at random moments, the first no sooner than 5 s from now
    if(!mPlanFor){mPlanFor=Date.now();const used=new Set(pl.map(p=>p.id===myId?myChar:p.ch)),k=1+Math.floor(Math.random()*4);mBots=[];
      while(mBots.length<k){const pool2=CHARS.filter(c=>c!=='dragon'&&c!=='imugi'&&!used.has(c)),ch=pool2[Math.floor(Math.random()*pool2.length)]||'cat';used.add(ch);
        mBots.push({id:'b'+Math.random().toString(36).slice(2,10),name:makeAutoName(),ch,bot:true,owner:myId,lv:1,at:mPlanFor+5000+Math.random()*15000})}
      mBots.sort((a,b)=>a.at-b.at)}
    const vb=visBots();if(vb.length!==mShown){mShown=vb.length;net.hello()}
    // the race starts by itself only when all 8 places are full; before that the creator taps Start
    if(pl.length+vb.length>=MAXP||anyGo){anyGo=false;
      const ids=pl.slice(0,MAXP).map(p=>p.id),rid=Math.random().toString(36).slice(2,8);
      raceBots=vb.slice(0,Math.max(0,MAXP-ids.length));
      // computers race at 50%–120% of the fastest real player's speed (last-5-race average RPM)
      const best=Math.max(...pl.slice(0,MAXP).map(q=>q.id===myId?mySpd():(q.sp||LV[(q.lv||1)-1])));
      raceBots.forEach(b=>{b.rpm=Math.max(40,Math.min(500,Math.round(best*(.5+Math.random()*.7))))});
      ids.push(...raceBots.map(b=>b.id));
      net.send({t:'go',delay:3000,ids,rid,bots:raceBots.map(b=>({id:b.id,name:b.name,ch:b.ch}))});startRace(3000,ids,rid);return}
  }else{mBots=[];mPlanFor=0;anyGo=false}
  if(panel==='match'||panel==='alone')matchScreen();
}
let mShown=0,anyGo=false;
// computers already "in the room": on the host, the ones whose time has come; elsewhere, what the host reports
function visBots(){if(!net)return[];const pl=pool(),room=Math.max(0,Math.min(4,MAXP-pl.length));
  if(pl[0]&&pl[0].id===myId)return mBots.filter(b=>b.at<=Date.now()).slice(0,room);
  const h=pl[0]&&net.peers.get(pl[0].id);return h&&h.mb?h.mb.slice(0,room):[]}
function matchScreen(){
  panel='match';const conn=!net||net.status()!=='ok';const real=pool(),pl=[...real,...visBots()],n=pl.length,creator=!conn&&real[0]&&real[0].id===myId,left=creator?'c':real[0]?real[0].id:'';
  const s2=n+'|'+pl.map(p=>p.id+p.ch).join(',')+'|'+left+'|'+conn;if(s2===sig&&ov.querySelector('.match'))return;sig=s2;
  const deg=Math.round(360*Math.min(1,n/MAXP));
  ov.innerHTML=`<div class="panel match">${homeBtn()}<h2>${t('finding')}</h2>
  <div class="spin" style="--p:${deg}deg"><span>${n}/${MAXP}</span></div>
  <ul class="players">${pl.map(p=>`<li><span class="ic">${icImg(p.id===myId?myChar:(p.ch||'cat'))}</span>${esc(p.id===myId?autoName():p.name)}${p.id===myId?' ('+t('you')+')':''}</li>`).join('')}<li class="empty">${t('lookingMore',{k:MAXP-n})}</li></ul>
  ${conn?`<p class="small"><b>${net&&net.status()==='fail'?t('offline'):t('joining')}</b></p>`:creator?(n>=2?`<button class="go" data-act="anystart">${t('anyStart',{k:n})}</button>`:''):real[0]?`<p class="small"><b>${t('waitCreator',{n:esc(real[0].id===myId?autoName():real[0].name)})}</b></p>`:''}<p class="small">${t('anyRule')} ${t('funNames')}</p>
  <div class="row"><button class="sec" data-act="home">${t('cancel')}</button></div></div>`;
}
function confirmBox(q,noAct,noLbl,yesAct,yesLbl){ov.innerHTML=`<div class="panel confirm" role="dialog" aria-label="${q}"><p><b>${q}</b></p><div class="row"><button class="sec" data-act="${noAct}">${noLbl}</button><button class="go small" data-act="${yesAct}">${yesLbl}</button></div></div>`}
ov.addEventListener('click',e=>{
  const mn=e.target.closest&&e.target.closest('[data-m]');if(mn){sfx.tap();missionStart(+mn.dataset.m);return}
  const b=e.target.closest('button');if(!b||b.disabled)return;const gp=b.parentElement.dataset.g,act=b.dataset.act;
  sfx.tap();
  if(act==='menu'&&mode==='practice'&&state==='race'){home();return}
  if(act==='anystart'){if(anyone&&state==='match'&&net){anyGo=true;matchTick()}return}
  if(act==='quit'){confirmBox(t('quitQ'),'keep',t('keep'),'quityes',t('quitYes'));return}
  if(act==='keep'){if(state==='race'||state==='count')raceOv();return}
  if(act==='quityes'){finishId++;
    if(mode==='online'&&net){net.send({t:'quit'});if(anyone){enterMatch();return}state='lobby';panel='lobby';sig='';lobby();return}
    if(mode==='online'){leaveRoom();return}
    if(mode==='duo'){duoScreen();return}
    if(mode==='solo'){missionStart(raceLv);return}
    home();return}
  if(act==='homeask'){confirmBox(t('leaveQ'),'stay',t('stay'),'leaveyes',t('leaveYes'));return}
  if(act==='stay'){sig='';refreshPanel(true);return}
  if(act==='leaveyes'||act==='leave'){leaveRoom();return}
  if(gp==='char'){animalCard(b.dataset.v);return}
  if(gp==='lbkind'){lbKind=b.dataset.v;loadBoard();return}
  if(gp==='char2'){const k=b.dataset.v;if(!isOpen(k)){say(k==='dragon'?t('dragonStars',{n:DRAGON_STARS}):t('lockedMsg',{n:UNLOCK[k],a:t('ch_'+k)}));return}p2Char=k;store.set('cr-char2',p2Char);duoScreen();return}
  if(gp==='otab'){saveForm();onTab=b.dataset.v;friends();return}
  if(gp==='cap'){cap=+b.dataset.v;store.set('cr-cap',String(cap));friends();return}
  if(gp==='period'){lbPeriod=b.dataset.v;loadBoard();return}
  if(act==='home'){home();return}
  if(act==='menu'){menu();return}
  if(act==='me'){meBack=panel;meScreen();return}
  if(act==='medone'){if(meBack==='invite')inviteScreen();else if(meBack==='friends')friends();else home();return}
  if(act==='name'){nameBox();return}
  if(act==='nameclose'){backFromName();return}
  if(act==='reroll'){const n=makeAutoName(),i=document.getElementById('nick');if(i){i.value=n;i.style.borderColor='';i.focus();i.select()}say('');return}
  if(act==='savename'){const i=document.getElementById('nick'),v=(i?i.value:'').trim().slice(0,NAMEMAX);if(v&&isBad(v)){say(t('badName'));if(i){i.focus();i.style.borderColor='#ff8a2a'}return}
    if(!v||v===autoName()){store.set('cr-nick','')}else if(/^(Zippy|Turbo|Rapid|Lucky|Super|Happy|Brave|Swift|Jolly|Sunny|Fizzy|Peppy|Mega|Comet|Rocket|Speedy|Dizzy|Bouncy|Sparky|Mighty) \w+ \d\d$/.test(v)){store.set('cr-auto',v);store.set('cr-nick','')}else store.set('cr-nick',v);
    backFromName();return}
  if(act==='mission'||act==='map'){mapScreen();return}
  if(act==='mgo'){mode='solo';anyone=false;startLocal();return}
  if(act==='mnext'){missionStart(raceLv+1);return}
  if(act==='mretry'){missionStart(raceLv);return}
  if(act==='practice'){mode='practice';startLocal();return}
  if(act==='duo'){duoScreen();return}
  if(act==='friends'){onTab='create';friends();return}
  if(act==='any'||act==='anyback'){if(act==='anyback'&&net){finishId++;enterMatch();return}startAnyone();return}
  if(act==='keepwait'){aloneSince=Date.now();aloneWait=30000;sig='';matchScreen();return}
  if(act==='anyagain'||act==='switchany'){finishId++;enterMatch();return}
  if(act==='levels'){mapScreen();return}
  if(act==='tolobby'&&net){state='lobby';panel='lobby';sig='';endNote='';lobby();return}
  if(act==='addbot'&&net&&net.host()){const mem=net.members();if(mem.length>=net.cap())return;const hu=net.humans(),avg=Math.round(hu.reduce((a,p)=>a+(p.id===myId?progLv():(p.lv||1)),0)/Math.max(1,hu.length)),lv=Math.max(1,Math.min(NLV,avg+Math.floor(Math.random()*7)-3));
    const used=new Set(mem.map(p=>p.id===myId?myChar:p.ch)),pool2=CHARS.filter(k=>k!=='dragon'&&!used.has(k)),ch=(pool2.length?pool2:CHARS.filter(k=>k!=='dragon'))[Math.floor(Math.random()*(pool2.length||12))];
    let nn=1;while(net.me.bots.some(b=>b.n===nn))nn++;
    net.me.bots.push({id:'b'+Math.random().toString(36).slice(2,10),ch,n:nn,lv});net.hello();sig='';refreshPanel(true);maybeStart();return}
  if(act==='rmbot'&&net&&net.host()){net.me.bots=net.me.bots.filter(x=>x.id!==b.dataset.v);net.hello();sig='';refreshPanel(true);return}
  if(act==='lobbyback'){confirmBox(t('leaveQ'),'stay',t('stay'),'leavefr',t('leaveYes'));return}
  if(act==='leavefr'){closeNet();clearRoomParam();invite=false;friends();return}
  if(act==='uninvite'){clearRoomParam();invite=false;home();return}
  if(act==='board'){loadBoard();return}
  if(act==='vidskip'){endVid();return}
  if(act==='vidplay'){const k=b.dataset.v;if(isOpen(k))playVid(k,()=>animalCard(k));return}
  if(act==='vidul'){const k=b.dataset.v;playVid(k,()=>unlockScreen());return}
  if(act==='choose'){myChar=b.dataset.v;store.set('cr-char',myChar);botChar=null;meScreen();return}
  if(act==='acback'){meScreen();return}
  if(act==='ending'){playEnding(()=>mapScreen());return}
  if(act==='raceas'){myChar=b.dataset.v;store.set('cr-char',myChar);missionStart(Math.min(NLV,raceLv+(lastStars>0?1:0)));return}
  if(act==='start'){if(mode==='online'){menu();return}startLocal();return}
  if(act==='create'||act==='join'){
    saveForm();let code;
    if(act==='join'){code=codeDraft;if(code.length!==4){say(t('badCode'));const c=document.getElementById('code');if(c){c.focus();c.style.borderColor='#ff8a2a'}return}}
    else code=newCode();
    invite=false;anyone=false;mode='online';qs.set('room',code);history.replaceState(null,'','?'+qs.toString());
    joinRoom(code,act==='create'?cap:null);panel='lobby';lobby();return}
  if(act==='ready'&&net){net.me.ready=true;net.hello();endNote='';maybeStart();refreshPanel(true);return}
  if(act==='startnow'&&net){maybeStart(true);return}
  if(act==='copylink'&&net){copyText(roomLink(net.code),t('copied'));return}
  if(act==='sharelink'&&net){navigator.share({title:t('title'),text:t('invite'),url:roomLink(net.code)}).catch(()=>{});return}
  if(act==='card'){showCard();return}
  if(act==='sharepic'){sharePic();return}
  if(act==='savepic'){savePic();return}
  if(act==='backres'){results();return}
  if(act==='copy'){copyText(shareMsg(),t('copyOk'))}
});
ov.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.dataset&&e.target.dataset.m){e.preventDefault();missionStart(+e.target.dataset.m);return}if(e.key==='Enter'){if(e.target.id==='nick'){const b=ov.querySelector('[data-act=savename]');if(b)b.click()}else if(e.target.id==='code'){const b=ov.querySelector('[data-act=join]');if(b)b.click()}}});
ov.addEventListener('input',e=>{if(e.target.id==='code'){const v=e.target.value.replace(/\D/g,'').slice(0,4);if(v!==e.target.value)e.target.value=v;codeDraft=v}});

// ---------- input: draw circles ----------
const ptr=new Map();
function who(y){if(mode!=='duo')return me;return y-cv.getBoundingClientRect().top<HUD+(H-HUD)/2?racers[0]:racers[1]}
// only ONE finger per racer drives it (extra fingers used to add speed: 3 fingers = 3x)
const driver=new Map();
const isDriver=(p,id)=>{if(!p.c)return false;const d=driver.get(p.c);if(d==null||!ptr.has(d)){driver.set(p.c,id);return true}return d===id};
cv.addEventListener('pointerdown',e=>{try{cv.setPointerCapture(e.pointerId)}catch(err){}const c=who(e.clientY);ptr.set(e.pointerId,{c,cx:e.clientX,cy:e.clientY,pa:null,sum:0});if(c&&!ptr.has(driver.get(c)))driver.set(c,e.pointerId)});
function moveP(p,x,y,id){
  p.cx+=(x-p.cx)*.07;p.cy+=(y-p.cy)*.07;
  const dx=x-p.cx,dy=y-p.cy;if(dx*dx+dy*dy<144){p.pa=null;return}
  const a=Math.atan2(dy,dx);
  if(p.pa!=null){let d=a-p.pa;if(d>Math.PI)d-=2*Math.PI;if(d<-Math.PI)d+=2*Math.PI;if(Math.abs(d)<1.3){p.sum=p.sum*.9+d;if(isDriver(p,id))feed(p.c,Math.abs(p.sum)>.15?d*Math.sign(p.sum):0)}}
  p.pa=a;
}
cv.addEventListener('pointermove',e=>{const p=ptr.get(e.pointerId);if(!p||(state!=='race'&&state!=='count'))return;if(!p.c)p.c=who(e.clientY);const evs=e.getCoalescedEvents?e.getCoalescedEvents():[];(evs.length?evs:[e]).forEach(v=>moveP(p,v.clientX,v.clientY,e.pointerId))});
const up=e=>{const p=ptr.get(e.pointerId);ptr.delete(e.pointerId);if(p&&p.c&&driver.get(p.c)===e.pointerId){driver.delete(p.c);for(const [id,q] of ptr)if(q.c===p.c){driver.set(p.c,id);q.pa=null;q.sum=0;break}}};
cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
addEventListener('keydown',e=>{
  if(e.repeat||state!=='race'||e.target.tagName==='INPUT')return;const k=e.key.toLowerCase();let c=null;
  if(k==='d'||k==='arrowright'||k===' ')c=mode==='duo'?racers[0]:me;
  else if((k==='l'||k==='enter')&&mode==='duo')c=racers[1];
  if(c){e.preventDefault();feed(c,1.6)}
});

// test hook for rendering sample pictures (only with ?cardtest=1)
if(qs.get('cardtest')==='1')window.__card=o=>{
  mode=o.mode||'solo';raceLv=lvl=o.lv??1;lvJump=o.jump||0;myChar=o.ch||'cat';if(o.nick!=null)store.set('cr-nick',o.nick);botChar=null;setup();
  const meR=mode==='solo'?racers[racers.length-1]:racers[0];me=meR;lastStars=o.stars??(o.win?1:0);
  racers.forEach((r,i)=>{r.done=null;r.top=(o.other||200)/60});
  meR.top=o.rpm/60;meR.done=o.time;
  if(mode==='solo'&&racers.length>1){const bot=racers[0];if(!o.win){bot.done=o.time-700}winner=o.win?meR:bot}else if(mode==='solo')winner=meR;
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

