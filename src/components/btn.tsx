import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroButtons = () => {
  const siteConfig = {
    primaryColor: "#6366F1", // Indigo-like color — you can replace it
  };

  return (
    <motion.div
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start sm:justify-start items-center mt-10 sm:mt-4 px-4 sm:px-0 sm:ml-12 lg:ml-30 relative sm:-translate-y-4 lg:-translate-y-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

  {/* Primary CTA */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to="/book-demo"
      className="inline-flex items-center px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 text-center w-full sm:w-auto"
      style={{
        background:
          "linear-gradient(135deg, #6366F1, #6366F1dd)",
        boxShadow: "0 10px 30px #6366F140",
      }}
    >
      Book a Demo
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </motion.div>

  {/* Secondary CTA */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to="/start-free"
      className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-indigo-500 text-indigo-500 hover:bg-transparent hover:text-indigo-500 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1 hover:shadow-xl text-center w-full sm:w-auto"
    >
      Start Free
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </motion.div>
</motion.div>

  );
};

export default HeroButtons;
