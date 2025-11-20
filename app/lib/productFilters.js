// export function filterTopSelling(products) {
//   return products.sort((a, b) => b.price - a.price).slice(0, 3);
// }

// export function filterTopRated(products) {
//   // return products.filter(p => p.rating > 3);
//   return products.sort((a, b) => b.price - a.price).slice(0, 3);
// }

// export function filterTrending(products) {
//   return products.sort((a, b) => b.rating - a.rating).slice(0, 3);
// }

// export function filterRecentlyAdded(products) {
//   return [...products].reverse().slice(0, 3);
// }

export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();
  return data.products;
}

// Top Selling (Highest Price)
export function filterTopSelling(products) {
  return [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 3);
}

// Top Rated (Highest Rating)
export function filterTopRated(products) {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
}

// Trending (Price + Rating mix)
export function filterTrending(products) {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
}

// Recently Added (Last 3 Items)
export function filterRecentlyAdded(products) {
  return [...products].reverse().slice(0, 3);
}
