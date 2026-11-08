// Usage: node scripts/check-redirects.mjs [baseUrl]
// Checks every legacy URL answers 301 to the expected www URL, query kept.
const base = process.argv[2] ?? "http://localhost:3000";
const www = "https://www.senflix.app";
const cases = [
  ["/payments/success?url=senflix%3A%2F%2F%2Fx&language=fr",
    "/payments/success?url=senflix%3A%2F%2F%2Fx&language=fr"],
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
  const res = await fetch(base + from, { redirect: "manual" });
  const location = res.headers.get("location");
  const ok = res.status === 301 && location === www + to;
  if (!ok) failed += 1;
  console.log(`${ok ? "ok  " : "FAIL"} ${res.status} ${from} -> ${location}`);
}
process.exit(failed ? 1 : 0);
