export function filterTopSelling(products) {
  return products.sort((a, b) => b.price - a.price).slice(0, 3);
}

export function filterTopRated(products) {
  // return products.filter(p => p.rating > 3);
  return products.sort((a, b) => b.price - a.price).slice(0, 3);
}

export function filterTrending(products) {
  return products.sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export function filterRecentlyAdded(products) {
  return [...products].reverse().slice(0, 3);
}
