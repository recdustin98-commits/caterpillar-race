// Caterpillar Race offline support: try the network first (so new versions show up), fall back to the saved copy when offline.
const C='cr-v7';
const CORE=['/','/index.html','/game.js','/adv.js','/penguin.js','/manifest.webmanifest','/icon-192.png','/icon-512.png','/apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.119.2/dist/umd/supabase.js',
  ...'cat inch snail turtle centi garter crab basil puffer shrimp peng frill imugi dragon king'.split(' ').map(k=>'/img/'+k+'.webp')];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(CORE.map(u=>c.add(new Request(u,{mode:u.startsWith('http')?'no-cors':'same-origin'})).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  const mine=u.origin===location.origin,font=u.host.endsWith('fonts.googleapis.com')||u.host.endsWith('fonts.gstatic.com'),lib=u.host==='cdn.jsdelivr.net';
  if(!mine&&!font&&!lib)return; // Supabase (online racing, leaderboard) always goes to the network
  e.respondWith(fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(C).then(c=>c.put(r.mode==='navigate'?'/':r,cp))}return res})
    .catch(()=>caches.match(r.mode==='navigate'?'/':r,{ignoreSearch:true}).then(m=>m||caches.match(r,{ignoreSearch:true}))))});
