export function ShopList({ items = products, onView }) {
  return (
    <div className="space-y-4">
      {items.map(p => (
        <div
          key={p.id}
          className="flex gap-4 bg-white shadow rounded-xl p-4 items-center"
        >
          <img src={p.image} className="w-32 h-32 object-cover rounded-lg" />
          <div className="flex-1">
            <h3 className="font-semibold text-base">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {p.description}
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="font-bold text-xl">${p.price}</div>
              <button
                className="px-4 py-2 border rounded-lg text-sm"
                onClick={() => onView && onView(p)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
