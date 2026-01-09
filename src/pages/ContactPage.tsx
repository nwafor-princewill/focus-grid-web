import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
// import ContactForm from '../components/sections/ContactForm';
import ContactForm from '../components/sections/ContactForm';

const ContactPage: React.FC = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="-mt-[80px] lg:-mt-[116px]">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;