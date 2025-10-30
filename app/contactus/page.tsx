"use client";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

// --- Configuration ---
// Replace these placeholders with your actual details
const CONTACT_EMAIL = "order@sweetdelights.com";
const WHATSAPP_NUMBER = "15551234567"; // Start with country code, no symbols
const WHATSAPP_PREFILL =
  "Hello, I would like to inquire about a custom cake order.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILL
)}`;
// ---------------------

// Information block for the right column (mostly unchanged)
const ContactInfo: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="space-y-10"
  >
    {/* Direct Contact Methods */}
    <div className="bg-pink-50 p-8 rounded-xl shadow-lg border border-pink-200">
      <h3 className="text-2xl font-serif text-gray-800 mb-4 font-bold">
        Quick Contact
      </h3>
      <div className="space-y-4">
        {/* WhatsApp Link */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="flex items-center justify-center w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-md"
        >
          <MessageSquare className="w-6 h-6 mr-3" />
          Message Us on WhatsApp
        </motion.a>

        {/* Email Link */}
        <motion.a
          href={`mailto:${CONTACT_EMAIL}`}
          whileHover={{ scale: 1.02 }}
          className="flex items-center justify-center w-full border border-pink-600 text-pink-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-100 transition duration-300 shadow-md"
        >
          <Mail className="w-6 h-6 mr-3" />
          Send Us an Email
        </motion.a>

        <p className="text-center text-sm text-gray-500 pt-2">
          For urgent inquiries, please use WhatsApp.
        </p>
      </div>
    </div>

    {/* Operating Hours (Unchanged) */}
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-serif text-gray-800 mb-4 font-bold">
        Opening Hours
      </h3>
      <ul className="space-y-2 text-lg text-gray-700">
        <li className="flex justify-between items-center border-b pb-1">
          <p className="font-semibold">Tuesday - Saturday</p>
          <p>9:00 AM - 5:00 PM</p>
        </li>
        <li className="flex justify-between items-center border-b pb-1">
          <p className="font-semibold">Sunday</p>
          <p>10:00 AM - 3:00 PM</p>
        </li>
        <li className="flex justify-between items-center">
          <p className="font-semibold text-red-600">Monday</p>
          <p className="text-red-600">Closed</p>
        </li>
      </ul>
      <p className="text-sm text-gray-500 mt-4 italic flex items-center">
        <Clock className="w-4 h-4 mr-1" /> Custom pickup times available upon
        request.
      </p>
    </div>

    {/* Physical Address */}
    <div className="flex items-center text-lg text-gray-700 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
      <MapPin className="w-6 h-6 mr-3 text-pink-600 shrink-0" />
      <p>Khatiwala Tank, Indore, Madhya Pradesh</p>
    </div>
  </motion.div>
);

const ContactUsPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-white pt-12 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-serif text-pink-600 mb-3 font-bold">
              Contact Us
            </h1>
          </motion.div>

          {/* Contact Grid: Direct Links & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column: Direct Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center space-y-6 bg-pink-50 p-8 rounded-xl shadow-2xl border border-pink-100"
            >
              <h2 className="text-4xl font-serif text-gray-800 mb-4 font-bold">
                Let&apos;s Chat!
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                For custom cake inquiries, please tap the WhatsApp button below.
                This allows us to share images and discuss details efficiently!
              </p>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-full bg-green-500 text-white px-6 py-4 rounded-full text-xl font-bold hover:bg-green-600 transition duration-300 shadow-lg"
              >
                <MessageSquare className="w-7 h-7 mr-3" />
                Start Custom Order on WhatsApp
              </motion.a>

              <div className="text-center py-2">
                <span className="text-gray-500">OR</span>
              </div>

              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-full border border-pink-600 text-pink-600 px-6 py-4 rounded-full text-xl font-bold hover:bg-pink-100 transition duration-300 shadow-lg"
              >
                <Mail className="w-7 h-7 mr-3" />
                Email General Inquiry
              </motion.a>
            </motion.div>

            {/* Right Column: Info & Hours */}
            <ContactInfo />
          </div>

          {/* Embedded Map Section (Unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-6 font-bold text-center">
              Find Our Location
            </h2>
            <div className="w-[600px] h-[450px] mx-auto bg-gray-200 rounded-xl overflow-hidden shadow-2xl border-4 border-white relative">
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4591.84625387832!2d75.86033976187319!3d22.693548317726062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4b9d073e9%3A0x6deeca7281875896!2sPatel%20Gali%2C%20Mechanic%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452014%2C%20India!5e1!3m2!1sen!2sus!4v1761741122109!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ContactUsPage;
