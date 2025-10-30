"use client";
import { motion } from "framer-motion";
import { Product } from "@/types"; // Assuming types file is in src/types/index.ts

const signatureProducts: Product[] = [
  // Placeholder data - replace with real data
  {
    id: 1,
    name: "Red Velvet Delights",
    price: "Starts at ₹ 250",
    image: "/images/red-velvet.png",
  },
  {
    id: 2,
    name: "Classic Vanilla Dream",
    price: "Starts at ₹ 1200",
    image: "/images/Vanilla-dream.png",
  },
  {
    id: 3,
    name: "Chocolate Raspberry Bomb",
    price: "Starts at ₹ 300",
    image: "/images/choco-raspberry.png",
  },
];

const Card: React.FC<{ product: Product; index: number }> = ({
  product,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group"
  >
    <div className="relative overflow-hidden">
      {/* Replace with Next.js Image component for optimization */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute top-0 right-0 bg-pink-600 text-white text-sm px-3 py-1 rounded-bl-lg font-medium">
        New
      </div>
    </div>

    <div className="p-5 text-center">
      <h3 className="text-2xl font-serif text-gray-800 mb-1">{product.name}</h3>
      <p className="text-pink-600 font-bold mb-3">{product.price}</p>
      <motion.a
        whileHover={{ backgroundColor: "#F74B8F", color: "#ffffff" }}
        href={`/products/${product.id}`}
        className="inline-block border border-pink-600 text-pink-600 px-5 py-2 rounded-full text-sm transition duration-200 font-semibold"
      >
        View Details
      </motion.a>
    </div>
  </motion.div>
);

const SignatureCollection: React.FC = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-2 font-bold">
          Our Signature Collection
        </h2>
        <p className="text-gray-600 mb-12">
          Handcrafted favorites that define our bakery&apos;s artistry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureProducts.map((product, index) => (
            <Card key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
