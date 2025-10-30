"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Tips for Planning a Wedding Cake",
    date: "Oct 15, 2025",
    link: "#",
  },
  {
    id: 2,
    title: "How to Store Your Cake for Maximum Freshness",
    date: "Sep 28, 2025",
    link: "#",
  },
  {
    id: 3,
    title: "The Best Fall Flavors to Try Now",
    date: "Sep 1, 2025",
    link: "#",
  },
];

const socialImages = [
  "/images/social-1.jpg",
  "/images/social-2.jpg",
  "/images/social-3.jpg",
  "/images/social-4.jpg",
  "/images/social-5.jpg",
  "/images/social-6.jpg",
];

const BlogSocial: React.FC = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Social Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif text-gray-800 mb-6 font-bold">
              Follow Our Sweet Life
            </h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {socialImages.map((src, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={src}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://instagram.com/sweetdelights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow @SweetDelights
            </motion.a>
          </motion.div>

          {/* Right Column: Blog Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-serif text-gray-800 mb-6 font-bold">
              Read Our Latest Blog
            </h3>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.link}
                  className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
                >
                  <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                  <p className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition duration-200">
                    {post.title}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSocial;
