export function ShopSingle({ product }) {
  if (!product)
    return <div className="text-center text-gray-500">No product selected</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow p-6 rounded-xl">
      <img
        src={product.image}
        className="w-full h-96 object-cover rounded-lg"
      />

      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>

        <div className="flex gap-5 items-center mt-4">
          <span className="text-3xl font-bold">${product.price}</span>
          <span className="flex items-center gap-1 text-yellow-500">
            <Star /> {product.rating}
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">
            Add to Cart
          </button>
          <button className="px-6 py-3 border rounded-xl">Buy Now</button>
        </div>

        <div className="text-sm text-gray-500 mt-6">
          Sold: {product.sold} times
        </div>
      </div>
    </div>
  );
}
