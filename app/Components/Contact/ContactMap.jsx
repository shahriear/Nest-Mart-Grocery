export function ContactMap() {
return (
<div className="w-full h-[250px] rounded-xl overflow-hidden border">
<iframe
src="https://www.openstreetmap.org/export/embed.html"
className="w-full h-full"
allowFullScreen
loading="lazy"
></iframe>
</div>
);
}