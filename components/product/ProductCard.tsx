"use client";
import { motion } from "framer-motion";
import { Product } from "@/types"; // Assuming types file is in src/types/index.ts
// import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition duration-300 hover:shadow-xl group"
    >
      <div className="relative overflow-hidden">
        {/* Replace with Next.js Image component for optimization */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Category Label */}
        <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
          {product.category || "Dessert"}
        </span>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-2xl font-serif text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-pink-600 font-bold mb-3 text-xl">{product.price}</p>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-pink-600 text-white px-5 py-2 rounded-full text-md font-semibold transition duration-300 hover:bg-pink-700 shadow-md"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </motion.button> */}
      </div>
    </motion.div>
  );
};

export default ProductCard;
