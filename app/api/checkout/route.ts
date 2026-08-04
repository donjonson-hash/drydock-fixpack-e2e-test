import Stripe from "stripe";

const stripe = new Stripe("AKIAIOSFODNN7EXAMPLE");

export async function POST(req: Request) {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [],
  });
  return Response.json({ id: session.id });
}
