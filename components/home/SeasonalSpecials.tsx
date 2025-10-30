"use client";
import { motion } from "framer-motion";
import { Product } from "@/types";

const seasonalItems: Product[] = [
  {
    id: 5,
    name: "Cranberry Orange Scones",
    price: "₹ 300 each",
    image: "/bakery/images/cran-orange.jpeg",
  },
  {
    id: 6,
    name: "Gingerbread Cupcakes",
    price: "₹ 400 each",
    image: "/bakery/images/ginger-cupcake.jpeg",
  },
  {
    id: 7,
    name: "Hot Chocolate Bombs",
    price: "₹ 300 (set of 3)",
    image: "/bakery/images/choco-bombs.jpeg",
  },
];

const SeasonalCard: React.FC<{ product: Product; index: number }> = ({
  product,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-64 md:w-72 shrink-0 rounded-xl overflow-hidden shadow-xl bg-white transition duration-300 hover:shadow-2xl cursor-pointer"
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold font-serif text-gray-800">
        {product.name}
      </h3>
      <p className="text-pink-600 font-bold mt-1">{product.price}</p>
    </div>
  </motion.div>
);

const SeasonalSpecials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-gray-800 mb-3 font-bold text-center">
          Seasonal Specials
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Limited-time treats featuring the best of the current season.
        </p>

        {/* Horizontal Scroll Container */}
        <div className="flex flex-col md:flex-row mx-auto w-full justify-center items-center overflow-x-auto pb-6 space-x-6 px-2 md:px-0">
          {seasonalItems.map((item, index) => (
            <SeasonalCard key={item.id} product={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalSpecials;
