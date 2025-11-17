import React from 'react';
import Image from "next/image";
import { BiSupport } from 'react-icons/bi';
import { PiPhoneCallLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { SiPicsart } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-700  pt-10 pb-6">
<div className=' container mx-auto border-b border-green-300'>
  <div className="  px-4 grid grid-cols-1 md:grid-cols-7 gap-6 mb-10 ">
{/* Logo & Info */}
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<Image src="/images/logo.svg" width={200} height={300} alt="Nest Logo" />
{/* <h2 className="text-2xl font-bold text-green-600">Nest</h2> */}
</div>
<p className="text-sm mb-4">Awesome grocery store website template</p>


<ul className="space-y-3 text-sm">
<li> <strong>Address:</strong> 5171 W Campbell Ave Kent, Utah 53127 USA</li>
<li> <strong>Call Us:</strong> (+91) 540-025-124553</li>
<li> <strong>Email:</strong> sale@Nest.com</li>
<li> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</li>
</ul>
</div>


{/* Company */}
<div>
<h3 className="font-semibold mb-3 text-lg">Company</h3>
<ul className="space-y-2 text-sm">
<li>About Us</li>
<li>Delivery Information</li>
<li>Privacy Policy</li>
<li>Terms & Conditions</li>
<li>Contact Us</li>
<li>Support Center</li>
<li>Careers</li>
</ul>
</div>


{/* Account */}
<div>
<h3 className="font-semibold mb-3 text-lg">Account</h3>
<ul className="space-y-2 text-sm">
<li>Sign In</li>
<li>View Cart</li>
<li>My Wishlist</li>
<li>Track My Order</li>
<li>Help Ticket</li>
<li>Shipping Details</li>
<li>Compare Products</li>
</ul>
</div>


{/* Corporate */}
<div>
<h3 className="font-semibold mb-3 text-lg">Corporate</h3>
<ul className="space-y-2 text-sm">
<li>Become a Vendor</li>
<li>Affiliate Program</li>
<li>Farm Business</li>
<li>Farm Careers</li>
<li>Our Suppliers</li>
<li>Accessibility</li>
<li>Promotions</li>
</ul>
</div>


{/* Popular */}
<div>
<h3 className="font-semibold mb-3 text-lg">Popular</h3>
<ul className="space-y-2 text-sm">
<li>Milk & Flavoured Milk</li>
<li>Butter and Margarine</li>
<li>Eggs Substitutes</li>
<li>Marmalades</li>
<li>Sour Cream and Dips</li>
<li>Tea & Kombucha</li>
<li>Cheese</li>
</ul>
</div>


{/* Install App */}
<div className='w whitespace-nowrap'>
<h3 className="font-semibold mb-3 text-lg">Install App</h3>
<p className="text-sm mb-3">From App Store or Google Play</p>
<div className="flex gap-3 mb-4">
<Image src="/images/appstore.png" alt="App Store" width={140} height={40} />
<Image src="/images/googleplay.png" alt="Google Play" width={140} height={40} />
</div>


<p className="text-sm mb-2">Secured Payment Gateways</p>
<div className="flex gap-2">
<Image src="/images/visa.png" alt="Visa" width={45} height={30} />
<Image src="/images/mastercard.png" alt="Mastercard" width={45} height={30} />
<Image src="/images/maestro.png" alt="Maestro" width={45} height={30} />
<Image src="/images/express.png" alt="American Express" width={45} height={30} />
</div>
</div>
</div>

</div>


{/* Bottom */}
<div className='container mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-8'>

  {/* Left copyright */}
  <div className="text-sm text-center md:text-left">
    © 2025 <span className="text-green-600 font-semibold">Nest</span> - HTML Ecommerce Nest. All rights reserved.
  </div>

  {/* Phone Numbers */}
  <div className='flex flex-col sm:flex-row gap-6'>

    <div className='flex items-center space-x-2 font-bold text-green-500'>
      <span className="text-4xl text-gray-600"><PiPhoneCallLight/></span>
      <div>
        <span className="text-2xl">1900 - 6666</span>
        <p className="text-xs font-medium text-gray-500">Working 8:00 - 22:00</p>
      </div>
    </div>

    <div className='flex items-center space-x-2 font-bold text-green-500'>
      <span className="text-4xl text-gray-600"><PiPhoneCallLight/></span>
      <div>
        <span className="text-2xl">1900 - 8888</span>
        <p className="text-xs font-medium text-gray-500">24/7 Support Center</p>
      </div>
    </div>

  </div>

  {/* Social Media */}
  <div className='text-center md:text-right'>
    <div className='flex justify-center md:justify-end gap-2 items-center'>
      <h2 className='text-[18px] font-medium'>Follow Us</h2>
      <FaFacebook className='text-3xl text-green-600' />
      <FaInstagram className='text-3xl text-green-600'/>
      <IoLogoTwitter className='text-3xl text-green-600'/>
      <SiPicsart className='text-3xl text-green-600'/>
      <FaYoutube className='text-3xl text-green-600'/>
    </div>
    <p className='text-gray-500 mt-1'>Up to 15% discount on your first subscribe</p>
  </div>

</div>

</footer>
  );
}

export default Footer;
