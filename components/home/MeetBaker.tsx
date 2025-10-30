"use client";
import { motion } from "framer-motion";

const MeetBaker: React.FC = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-4 font-bold">
              Meet Our Baker
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Hi, I&apos;m **Farida**, and baking is my joy. For over ten years,
              I&apos;ve poured passion, quality ingredients, and artistry into
              every creation. I believe a cake is more than dessert—it&apos;s
              the centerpiece of a memory.
            </p>

            <ul className="space-y-2 mb-8 text-gray-700">
              <li className="flex items-center">
                <span className="text-pink-600 mr-2 text-xl">&bull;</span> Over
                10 Years of Experience
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 mr-2 text-xl">&bull;</span>{" "}
                Exclusive Seasonal Menus
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 mr-2 text-xl">&bull;</span>{" "}
                Commitment to Freshness
              </li>
            </ul>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/about" // Assuming you'll add a detailed About Us page
              className="inline-block border border-pink-600 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-100 transition duration-300"
            >
              Read My Full Story
            </motion.a>
          </motion.div>

          {/* Right Column: Image Grid (Wireframe Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="/bakery/images/baker-1.png"
              alt="Baker working on a cake"
              className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
            />

            <img
              src="/bakery/images/baker-2.png"
              alt="Kitchen shot"
              className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetBaker;
