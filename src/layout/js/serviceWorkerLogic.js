const cacheName = 'v1/html';

const filesToCache = [
  '/',
  '/js/index.js',
  '/css/index.css',
];

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then( cache => cache.addAll(filesToCache) )
      .then( () => self.skipWaiting() )
  );

});

self.addEventListener('activate', (event) => {
  event.waitUntil( self.clients.claim() );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    response(event.request)
      .catch( err => {

        console.log(err);
        return useNoConnectPage();
      })
  )
});

function response( request ) {
  return fetch( request )
    .then( response => response.ok ? response : fromCache(request) )
    .catch( () => fromCache( request ) );
}

function fromCache( request ) {
  return caches.open(cacheName)
    .then( cache => cache.match(request) )
    .then( matching => (matching || Promise.reject('no in cache ' + request.url) ) )
}
function useNoConnectPage() {
  const HTML = `
    <div>
      <h1>
        Нет соединения
      </h1>
    </div>
    `;

  return Promise.resolve(
    new Response(HTML, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8'
          }
        }
      )
    )
}
