"use client";
import Image from "next/image";

const features = [
  { img: "/images/icon-1.svg", title: "Free Shipping", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
  { img: "/images/icon-1.svg", title: "Secure Payments", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
  { img: "/images/icon-1.svg", title: "Online Support", text: "2There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
  { img: "/images/icon-1.svg", title: "Daily Offers", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
  { img: "/images/icon-1.svg", title: "Easy Returns", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
  { img: "/images/icon-1.svg", title: "Fast Delivery", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
];

export default function AboutFeatures() {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="grid md:grid-cols-3 gap-10 ">
        {features.map((f, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <Image src={f.img} width={50} height={50} alt="icon" />
            <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
