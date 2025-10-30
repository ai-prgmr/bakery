"use client";
import { useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { Product } from "@/types";
import { motion } from "framer-motion";

// --- Placeholder Data ---
const allProducts: Product[] = [
  // --- 550 RS CAKES (1 Pound) ---
  {
    id: 101,
    name: "Pineapple Cake",
    price: "₹ 550 (1 lb)",
    image: "/bakery/images/pineapple-cake.webp",
    category: "cakes",
  },
  {
    id: 102,
    name: "Butterscotch Cake",
    price: "₹ 550 (1 lb)",
    image: "/bakery/images/cake-butterscotch.jpeg",
    category: "cakes",
  },
  {
    id: 103,
    name: "Strawberry Cake",
    price: "₹ 550 (1 lb)",
    image: "/bakery/images/cake-strawberry.jpeg",
    category: "cakes",
  },
  {
    id: 104,
    name: "Chocolate Mousse Cake",
    price: "₹ 550 (1 lb)",
    image: "/bakery/images/cake-chocomousse.jpeg",
    category: "cakes",
  },

  // --- 600 RS CAKES (1 Pound) ---
  {
    id: 201,
    name: "Rasmalai Cake",
    price: "₹ 600 (1 lb)",
    image: "/bakery/images/cake-rasmalai.jpeg",
    category: "cakes",
  },
  {
    id: 202,
    name: "Mix Fruit Cake",
    price: "₹ 600 (1 lb)",
    image: "/bakery/images/cake-mix-fruit.jpeg",
    category: "cakes",
  },
  {
    id: 203,
    name: "Black Forest Cake",
    price: "₹ 600 (1 lb)",
    image: "/bakery/images/cake-blackforest.webp",
    category: "cakes",
  },
  {
    id: 204,
    name: "Mango Cake",
    price: "₹ 600 (1 lb)",
    image: "/bakery/images/cake-mango.webp",
    category: "cakes",
  },
  {
    id: 205,
    name: "Chocolate Truffle Cake",
    price: "₹ 600 (1 lb)",
    image: "/bakery/images/cake-chocotruffle.jpeg",
    category: "cakes",
  },

  // --- 700 RS CAKES (1 Pound) ---
  {
    id: 301,
    name: "Tres Leches Cake",
    price: "₹ 700 (1 lb)",
    image: "/bakery/images/cake-tresleches.jpeg",
    category: "cakes",
  },

  // --- 750 RS CAKES (1 Pound) ---
  {
    id: 401,
    name: "Red Velvet Cake",
    price: "₹ 750 (1 lb)",
    image: "/bakery/images/cake-redvelvet.webp",
    category: "cakes",
  },
  {
    id: 402,
    name: "Blueberry Cake",
    price: "₹ 750 (1 lb)",
    image: "/bakery/images/cake-blueberry.webp",
    category: "cakes",
  },
  {
    id: 403,
    name: "Nutella Cake",
    price: "₹ 750 (1 lb)",
    image: "/bakery/images/cake-nutella.jpeg",
    category: "cakes",
  },
  {
    id: 404,
    name: "Lotus Biscoff Cake",
    price: "₹ 750 (1 lb)",
    image: "/bakery/images/cake-lotusbiscoff.webp",
    category: "cakes",
  },
  {
    id: 405,
    name: "Chocolate Tiramisu with Mascarpone",
    price: "₹ 750 (1 lb)",
    image: "/bakery/images/cake-chocotiramisu.jpeg",
    category: "cakes",
  },
  {
    id: 406,
    name: "Opera Cake with Coffee Mousse",
    price: "₹ 750 (1 lb)",
    image: "/bakery/images/cake-opera.jpeg",
    category: "cakes",
  },

  // --- 900 RS CAKES (1 Pound) ---
  {
    id: 501,
    name: "Pistachio Tiramisu with Mascarpone",
    price: "₹ 900 (1 lb)",
    image: "/bakery/images/cake-pistachiotiramisu.jpeg",
    category: "cakes",
  },
  {
    id: 502,
    name: "Pull Me Up Cake",
    price: "₹ 900 (1 lb)",
    image: "/bakery/images/cake-pullmeup.webp",
    category: "cakes",
  },
  {
    id: 503,
    name: "Belgian Chocolate Truffle Cake",
    price: "₹ 900 (1 lb)",
    image: "/bakery/images/cake-belgianchocotruffle.webp",
    category: "cakes",
  },

  // --- PREMIUM/DESIGNER CAKES ---
  {
    id: 601,
    name: "Any Designer Cake with Fondant Toppers",
    price: "₹ 1000 (1 lb)",
    image: "/bakery/images/cake-designer.webp",
    category: "designer",
  },
  {
    id: 602,
    name: "Ball Cake",
    price: "₹ 1100 (1 lb)",
    image: "/bakery/images/cake-ball.webp",
    category: "designer",
  },
  {
    id: 603,
    name: "Belgian Chocolate Cake (2.5 lb)",
    price: "₹ 3000",
    image: "/bakery/images/cake-belgian.webp",
    category: "cakes",
  },

  // --- CHEESECAKES (7 Inch) ---
  {
    id: 701,
    name: "Blueberry Cheesecake",
    price: "₹ 1000 (7 inch)",
    image: "/bakery/images/cheesecake-blueberry.webp",
    category: "cheesecakes",
  },
  {
    id: 702,
    name: "Strawberry Cheesecake",
    price: "₹ 1000 (7 inch)",
    image: "/bakery/images/cheesecake-strawberry.jpeg",
    category: "cheesecakes",
  },
  {
    id: 703,
    name: "Lotus Biscoff Cheesecake",
    price: "₹ 1000 (7 inch)",
    image: "/bakery/images/cheesecake-biscoff.jpeg",
    category: "cheesecakes",
  },

  // --- BROWNIES ---
  {
    id: 801,
    name: "Choco Gooey Brownie with Belgian Ganache",
    price: "₹ 400 (500g)",
    image: "/bakery/images/brownie-gooey.jpeg",
    category: "brownies",
  },
  {
    id: 802,
    name: "Chocolate Brownie Box",
    price: "₹ 200 (2 pc, 3.5x3.5 inch)",
    image: "/bakery/images/brownie-box.jpeg",
    category: "brownies",
  },
  {
    id: 803,
    name: "Single Piece Brownie",
    price: "₹ 70 (2.5x2.5 inch)",
    image: "/bakery/images/brownie-single.jpeg",
    category: "brownies",
  },

  // --- DESSERT BOWLS ---
  {
    id: 901,
    name: "Tres Leches Dessert Bowl (Vanilla)",
    price: "₹ 600",
    image: "/bakery/images/dessert-tresleches-vanilla.jpeg",
    category: "dessert bowls",
  },
  {
    id: 902,
    name: "Tres Leches Dessert Bowl (Rose)",
    price: "₹ 600",
    image: "/bakery/images/dessert-tresleches-rose.jpeg",
    category: "dessert bowls",
  },
  {
    id: 903,
    name: "Tres Leches Dessert Bowl (Rasmalai)",
    price: "₹ 600",
    image: "/bakery/images/dessert-tresleches-rasmalai.jpeg",
    category: "dessert bowls",
  },
  {
    id: 904,
    name: "Tres Leches Dessert Bowl (Belgian Chocolate)",
    price: "₹ 700",
    image: "/bakery/images/dessert-tresleches-choco.jpeg",
    category: "dessert bowls",
  },
  {
    id: 905,
    name: "Desert Layered Bowl",
    price: "₹ 700",
    image: "/bakery/images/dessert-layered.jpeg",
    category: "dessert bowls",
  },
  {
    id: 906,
    name: "Pistachio Tiramisu Dessert Bowl",
    price: "₹ 800",
    image: "/bakery/images/dessert-pistachio.jpeg",
    category: "dessert bowls",
  },
];

const categories = [
  "all",
  "cakes",
  "cheesecakes",
  "brownies",
  "dessert bowls",
  "designer",
];
// ------------------------

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "cakes" | "cheesecakes" | "brownies" | "dessert bowls" | "designer"
  >("all");

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const filterButtonClasses = (category: string) =>
    `px-6 py-2 rounded-full font-semibold transition duration-200 uppercase text-sm ${
      activeCategory === category
        ? "bg-pink-600 text-white shadow-md"
        : "bg-white text-gray-700 border border-gray-300 hover:bg-pink-50"
    }`;

  return (
    <>
      <main className="min-h-screen bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-serif text-gray-800 mb-4 font-bold text-center"
          >
            Our Delicious Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 mb-12 text-center"
          >
            Explore our handcrafted selection of cakes, cupcakes, and pastries.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(
                    cat as
                      | "all"
                      | "cakes"
                      | "cheesecakes"
                      | "brownies"
                      | "dessert bowls"
                      | "designer"
                  )
                }
                className={filterButtonClasses(cat)}
              >
                {cat === "all" ? "View All" : cat}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              // Use a key for Framer Motion animation consistency after filtering
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
