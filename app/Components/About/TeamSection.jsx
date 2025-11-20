"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const teamMembers = [
  {
    name: "H. Merinda",
    role: "CEO & Co-Founder",
    img: "/images/about-6.png",
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  {
    name: "Dilan Specter",
    role: "Head Engineer",
    img: "/images/about-8.png", 
    socials: ["facebook", "twitter", "instagram", "youtube"],
  },
  
];

export default function TeamSection() {
  const getSocialIcon = (social) => {
    switch (social) {
      case "facebook":
        return <FaFacebookF size={16} />;
      case "twitter":
        return <FaTwitter size={16} />;
      case "instagram":
        return <FaInstagram size={16} />;
      case "youtube":
        return <FaYoutube size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* <h4 className="text-green-600 font-semibold mb-2">Our Team</h4>
        <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Proin ullamcorper pretium orci. Donec necscere risque leo. Nam massa
          dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
          faucibus finibus.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-3  gap-10 w-4/5 m-auto">
        <div>
            <h4 className="text-green-600 font-semibold mb-2">Our Team</h4>
        <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Proin ullamcorper pretium orci. Donec necscere risque leo. Nam massa
          dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
          faucibus finibus.
        </p>
        <button className="mt-12 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition">
          View All Members
        </button>
        </div>
          {teamMembers.map((member, i) => (
            <div key={i} className="relative group">
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-xl shadow-md w-64 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
                <div className="flex justify-center gap-3 mt-2 text-green-600">
                  {member.socials.map((s, idx) => (
                    <a key={idx} href="#" className="hover:text-green-800">
                      {getSocialIcon(s)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="mt-12 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition">
          View All Members
        </button> */}
      </div>
    </div>
  );
}
