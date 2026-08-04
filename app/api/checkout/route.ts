import Stripe from "stripe";

const stripe = new Stripe(process.env.AWS_ACCESS_KEY_ID!);

export async function POST(req: Request) {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [],
  });
  return Response.json({ id: session.id });
}
