const CHACHE_NAME ='version-1';

const urlsTochache =['index.html','offline.html'];

this.addEventListener('install',(event)=>{
 event.waitUntil(caches.open(CHACHE_NAME).then((cache)=>{
    console.log("Opned Cache");
    return cache.addAll(urlsTochache)
 }))
})

this.addEventListener('fetch',(event)=>{
    event.respondWith((caches.match(event.request).then((res)=>{})))})

this.addEventListener('activate',(event)=>{
  const checheWhiteList =[];
  checheWhiteList.push(CHACHE_NAME)
  event.waitUntil(caches.keys().then(cacheName=>Promise.all(
    cacheName.map((chacheName)=>{
        if(!checheWhiteList.includes(chacheName)){
            return chacheName.delete(chacheName)
        }
    })
  )))
})