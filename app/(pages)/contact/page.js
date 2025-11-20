//  import ContactPage from '@/app/Components/Contact/ContactPage';
// import React from 'react';
 
//  const page = () => {
//    return (
//      <div>
//        <ContactPage/>
//      </div>
//    );
//  }
 
//  export default page; 
 
 import { ContactForm } from "@/app/Components/Contact/ContactForm";
import { ContactHeader } from "@/app/Components/Contact/ContactHeader";
import { ContactLocations } from "@/app/Components/Contact/ContactLocations";
import { ContactMap } from "@/app/Components/Contact/ContactMap";
import React from "react";
// import ContactHeader from "./ContactHeader";
// import ContactMap from "./ContactMap";
// import ContactLocations from "./ContactLocations";
// import ContactForm from "./ContactForm";


export default function ContactPage() {
return (
<div className="container mx-auto py-10 space-y-12">
<ContactHeader />
<ContactMap />
<ContactLocations />
<ContactForm />
</div>
);
}