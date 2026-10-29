// After each deploy: `npm run indexnow` tells Bing, Yandex and other IndexNow
// engines (which also feed ChatGPT search via Bing) that every URL changed.
const host = 'firstrespondersrestoration.us';
const key = '2811c5a8df4744539a90c6de2530e3a6';
const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
