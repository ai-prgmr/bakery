"use client";
import { motion } from "framer-motion";
import { Leaf, Cake, Heart, Timer, Zap } from "lucide-react";

const promises = [
  {
    icon: Leaf,
    label: "Fresh Ingredients",
    detail: "Locally sourced and organic",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Cake,
    label: "Artisanal Recipes",
    detail: "Time-tested baking traditions",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Heart,
    label: "Baked With Passion",
    detail: "Every dessert made with love",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Timer,
    label: "Timely Delivery",
    detail: "On-time guarantee for events",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Zap,
    label: "Dietary Options",
    detail: "Gluten-free & vegan choices",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const BakingPromise: React.FC = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-3 font-bold">
          Our Baking Promise
        </h2>
        <p className="text-gray-600 mb-12">
          Quality, care, and commitment in every single bite.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {promises.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center p-6 rounded-xl w-32 md:w-40 transition duration-300 hover:shadow-lg ${item.bg}`}
            >
              <item.icon className={`w-8 h-8 mb-3 ${item.color}`} />
              <p className="font-semibold text-gray-800 mb-1">{item.label}</p>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BakingPromise;
