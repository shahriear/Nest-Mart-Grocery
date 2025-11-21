// app/api/wishlist/route.js

let wishlist = [
  {
    id: 1,
    name: "Blue Diamond Almonds",
    price: 32.85,
    inStock: true,
    rating: 4.5,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 2,
    name: "Organic Honey",
    price: 12.5,
    inStock: false,
    rating: 4.0,
    image: "/images/thumbnail-2.jpg",
  },
  {
    id: 3,
    name: "Nestle Coffee-Mate",
    price: 10.25,
    inStock: true,
    rating: 4.2,
    image: "/images/thumbnail-3.jpg",
  },
  {
    id: 4,
    name: "Fresh Apples",
    price: 5.0,
    inStock: true,
    rating: 4.8,
    image: "/images/thumbnail-4.jpg",
  },
];

// GET wishlist
export async function GET() {
  return new Response(JSON.stringify(wishlist), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// DELETE item
export async function DELETE(req, { params }) {
  const id = parseInt(params.id);
  wishlist = wishlist.filter((item) => item.id !== id);
  return new Response(JSON.stringify({ message: "Item removed" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
