// https://whatismyip.tomjamescn.workers.dev
//
//
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  const clientIP = request.headers.get("CF-Connecting-IP")
  return new Response(clientIP, {status: 200})
}
