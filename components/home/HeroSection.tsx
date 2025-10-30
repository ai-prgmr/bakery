"use client";
import { motion } from "framer-motion";
import { Truck, Sparkles, Heart, Award } from "lucide-react"; // Example icons

const featureItems = [
  { icon: Truck, label: "Fast Delivery", detail: "Across the city" },
  { icon: Sparkles, label: "Freshness Guaranteed", detail: "Baked daily" },
  { icon: Heart, label: "Handcrafted With Love", detail: "Artisanal recipes" },
  { icon: Award, label: "Award Winning", detail: "Top rated bakery" },
];

const HeroSection: React.FC = () => {
  return (
    <section>
      {/* Main Hero Banner */}
      <div
        className="relative aspect-9/16 md:aspect-video bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/cake-home.png")' }}
      >
        {/* Text and CTA Box */}
        <div className="absolute backdrop-blur-sm shadow-xl md:backdrop-blur-none md:shadow-none top-1/2 left-1/2 transform -translate-x-1/2 text-center md:text-left md:top-1/3 md:left-1/3 md:translate-x-0 p-8 rounded-lg w-full md:max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-serif text-gray-800 font-bold mb-4"
          >
            Where Every{" "}
            <span className="bg-linear-to-r from-[#ec4899] to-[#f97316] inline-block text-transparent bg-clip-text">
              Sweet Story
            </span>{" "}
            Comes True
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-md md:text-lg text-gray-700 mb-6"
          >
            Artisanal custom cakes, cupcakes, and desserts baked fresh for your
            special moments.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-base md:text-xl font-semibold hover:bg-pink-700 transition duration-300 shadow-xl"
          >
            Order Custom Cake
          </motion.button>
        </div>
      </div>

      {/* Feature Strip (Wireframe Element) */}
      <div className="bg-white py-6 shadow-lg z-10 relative">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {featureItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-3"
            >
              <item.icon className="w-8 h-8 text-pink-600 mb-2" />
              <p className="text-lg font-semibold text-gray-800">
                {item.label}
              </p>
              <p className="text-sm text-gray-500">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
