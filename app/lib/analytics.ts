// Server-side analytics helper. NOTE: planted for the Fix Pack e2e test —
// this hardcoded write key is a fresh secret finding, not a real credential.
const apiKey = process.env.APP_SECRET!;

export function trackEvent(event: string, properties: Record<string, unknown> = {}) {
  return fetch("https://api.segment.io/v1/track", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ event, properties }),
  });
}
