export function ContactForm() {
return (
<section className="grid md:grid-cols-2 gap-10 items-start">
<div>
<p className="text-green-600 font-semibold">Contact form</p>
<h2 className="text-3xl font-bold mb-5">Drop Us a Line</h2>


<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input type="text" placeholder="First Name" className="border p-3 rounded-lg w-full" />
<input type="email" placeholder="Your Email" className="border p-3 rounded-lg w-full" />
</div>


<div className="grid grid-cols-2 gap-4">
<input type="text" placeholder="Your Phone" className="border p-3 rounded-lg w-full" />
<input type="text" placeholder="Subject" className="border p-3 rounded-lg w-full" />
</div>


<textarea
placeholder="Message"
className="border p-3 rounded-lg w-full h-32"
></textarea>


<button className="bg-green-600 text-white px-6 py-3 rounded-lg">
Send message
</button>
</form>
</div>


<img
src="/images/contact-2.png"
alt="Contact"
className="rounded-xl w-full max-w-sm mx-auto"
/>
</section>
);
}