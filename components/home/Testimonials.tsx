"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "@/types"; // Import the Testimonial type

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh S.",
    role: "Birthday Party Host",
    quote:
      "The customized cake was the centerpiece of the party! Delicious, stunning, and exceeded all expectations.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Zubeena G.",
    role: "Bride",
    quote:
      "Sweet Delights made our wedding cake flawless. Guests raved about the unique flavors. Highly recommend!",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Sanmati R.",
    role: "Regular Customer",
    quote:
      "The best cupcakes in the city, hands down. I stop by every week for a treat. Their service is just as sweet!",
    avatar: "/images/avatar-3.jpg",
  },
];

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  index: number;
}> = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="p-6 rounded-xl shadow-lg border border-gray-100 bg-white"
  >
    <div className="flex mb-3 justify-center">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
      ))}
    </div>
    <p className="italic text-gray-700 mb-4">
      &ldquo;{testimonial.quote}&rdquo;
    </p>
    <div className="flex text-center items-center justify-center">
      <div className="text-center">
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-pink-600">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-3 font-bold">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12">
          Real feedback from happy customers celebrating life&apos;s moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} testimonial={t} index={index} />
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#"
          className="mt-10 inline-block text-pink-600 border border-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition duration-200"
        >
          Read All Reviews
        </motion.a>
      </div>
    </section>
  );
};

export default Testimonials;
