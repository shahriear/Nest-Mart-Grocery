export function ContactLocations() {
const locations = [
{
title: "Office",
address: "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
phone: "123-456-7890",
email: "contact@evara.com",
},
{
title: "Studio",
address: "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
phone: "123-456-7890",
email: "contact@evara.com",
},
{
title: "Shop",
address: "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
phone: "123-456-7890",
email: "contact@evara.com",
},
];


return (
<section className="grid md:grid-cols-3 gap-10 py-6">
{locations.map((loc, i) => (
<div key={i} className="space-y-1">
<h3 className="text-xl font-semibold text-green-600">{loc.title}</h3>
<p className="text-gray-600">{loc.address}</p>
<p className="text-gray-600">Phone: {loc.phone}</p>
<p className="text-gray-600">Email: {loc.email}</p>
<button className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg">
View map
</button>
</div>
))}
</section>
);
}