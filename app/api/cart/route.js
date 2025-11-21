let cart = [];

export async function POST(req) {
  try {
    const item = await req.json();
    cart.push(item);
    return new Response(
      JSON.stringify({ message: 'Item added to cart', cart }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Failed to add to cart' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
