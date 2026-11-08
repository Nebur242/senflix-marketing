// Usage: node scripts/check-redirects.mjs [baseUrl]
// baseUrl defaults to http://localhost:3000; pass a Vercel Preview URL to
// check the real vercel.json redirects.
// Checks every legacy URL answers 301 to the expected www URL, query kept.
const base = process.argv[2] ?? "http://localhost:3000";
const www = "https://www.senflix.app";
const cases = [
  ["/payments/success?url=senflix%3A%2F%2F%2Fx&language=fr",
    "/payments/success?url=senflix%3A%2F%2F%2Fx&language=fr"],
  ["/payments/success/?url=senflix%3A%2F%2F%2Fx",
    "/payments/success?url=senflix%3A%2F%2F%2Fx"],
  ["/privacy-policy", "/confidentialite"],
  ["/fr/privacy-policy", "/confidentialite"],
  ["/en/privacy-policy", "/privacy"],
  ["/terms", "/conditions"],
  ["/fr/terms", "/conditions"],
  ["/en/terms", "/terms"],
  ["/copyright", "/droits-auteur"],
  ["/fr/copyright", "/droits-auteur"],
  ["/en/copyright", "/copyright"],
  ["/support", "/support"],
  ["/fr/support", "/support"],
  ["/contact", "/support"],
  ["/fr/contact", "/support"],
  ["/en/support", "/help"],
  ["/en/contact", "/help"],
  ["/", "/"],
  ["/fr", "/"],
  ["/en/anything/else?x=1", "/?x=1"],
  ["/senflix-icon.png", "/"],
];
let failed = 0;
for (const [from, to] of cases) {
  // Follow same-origin hops (local `next start` strips a trailing slash
  // with a 308 before the redirect table); the last hop must be a 301.
  let url = base + from;
  let res;
  let location;
  for (let hop = 0; hop < 3; hop += 1) {
    res = await fetch(url, { redirect: "manual" });
    location = res.headers.get("location");
    if (!location) break;
    const next = new URL(location, url);
    if (next.origin !== new URL(base).origin) break;
    url = next.toString();
  }
  const ok = res.status === 301 && location === www + to;
  if (!ok) failed += 1;
  console.log(`${ok ? "ok  " : "FAIL"} ${res.status} ${from} -> ${location}`);
}
process.exit(failed ? 1 : 0);
