import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Search } from "lucide-react";

const Footer = () => {
  return (
     <footer className="w-full bg-white mt-10 border-t">
      <div className="container mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        {/* Column 1 */}
        <div>
          <h2 className="font-bold mb-2">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
          <p className="text-gray-600 text-xs">HOTLINE 24/7</p>
          <p className="text-green-600 font-bold text-lg">(025) 3686 25 16</p>
          <p className="text-gray-600 mt-3 text-xs">
            257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
          </p>
          <p className="text-gray-600 text-xs">contact@swootechmart.com</p>

          <div className="flex gap-4 mt-4 text-gray-700">
            <Twitter className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">TOP CATEGORIES</h3>
          {[
            "Laptops",
            "PC & Computers",
            "Cell Phones",
            "Tablets",
            "Gaming & VR",
            "Networks",
            "Cameras",
            "Sounds",
            "Office",
          ].map((item) => (
            <p key={item} className="text-gray-700 text-sm mb-1">{item}</p>
          ))}
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">COMPANY</h3>
          {["About Swoo", "Contact", "Career", "Blog", "Sitemap", "Store Locations"].map(
            (item) => (
              <p key={item} className="text-gray-700 text-sm mb-1">{item}</p>
            )
          )}
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3">HELP CENTER</h3>
          {["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"].map(
            (item) => (
              <p key={item} className="text-gray-700 text-sm mb-1">{item}</p>
            )
          )}
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold mb-3">PARTNER</h3>
          {["Become Seller", "Affiliate", "Advertise", "Partnership"].map((item) => (
            <p key={item} className="text-gray-700 text-sm mb-1">{item}</p>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="container mx-auto px-10 mt-5">
        <h3 className="text-sm font-semibold">
          SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER
        </h3>

        <div className="flex items-center mt-3 border rounded-full overflow-hidden max-w-lg">
          <input
            type="text"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 text-sm outline-none"
          />
          <button className="px-5 py-3 text-green-600 font-bold text-sm">
            SUBSCRIBE
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-1">
          By subscribing, you're accepted the our <span className="underline">Policy</span>
        </p>
      </div>

      {/* Payment Icons */}
      <div className="container mx-auto px-10 mt-8 flex gap-5 text-gray-700 text-sm">
        <p>PayPal</p>
        <p>Visa</p>
        <p>Stripe</p>
        <p>Klarna</p>
      </div>

      {/* Bottom */}
      <div className="container mx-auto px-10 mt-10 py-5 border-t text-xs text-gray-600 flex justify-between">
        <p>© 2024 ShawonetC3 . All Rights Reserved</p>
        <p>Mobile Site</p>
      </div>
    </footer>
  );
}

export default Footer;
