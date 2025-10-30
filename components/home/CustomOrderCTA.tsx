"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Example icon for the list items

const steps = [
  "Consultation to discuss your vision, flavors, and serving size.",
  "Sketch and concept approval by our head baker.",
  "Fresh ingredients sourced and baking scheduled.",
  "Your beautiful, custom cake is delivered or ready for pickup!",
];

const CustomOrderCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 font-bold">
              Design Your Dream Cake
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              From elaborate wedding tiers to unique birthday themes, we bring
              your wildest, sweetest visions to life. Start your personalized
              order today.
            </p>

            {/* Steps/Checklist */}
            <ul className="space-y-4 mb-10">
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start text-lg text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-1 shrink-0" />
                  {step}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(247, 75, 143, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              href="/contactus?intent=custom"
              className="inline-block bg-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold transition duration-300 shadow-lg hover:bg-pink-700"
            >
              Start Your Inquiry
            </motion.a>
          </motion.div>

          {/* Right Column: Image Gallery/Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="relative h-96 lg:h-[500px]"
          >
            {/* Image 1: Large Base Image */}
            <img
              src="/bakery/images/design-cake-1.png"
              alt="Beautiful Custom Wedding Cake"
              className="absolute top-0 left-0 w-4/5 h-4/5 object-cover rounded-xl shadow-2xl z-10 border-4 border-white"
            />
            {/* Image 2: Small Accent Image (Bottom Right) */}
            <img
              src="/bakery/images/design-cake-3.png"
              alt="Custom Birthday Cupcakes"
              className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover rounded-xl shadow-xl border-4 border-white z-20 transform translate-x-4 translate-y-4"
            />
            {/* Wireframe Style Accent Box (Soft Mint/Green) */}
            <div className="absolute bottom-10 left-10 w-4/5 h-4/5 bg-[#E6FFEE] rounded-xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderCTA;
