export async function getAllProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=100');
  const data = await res.json();
  return data.products;
}
