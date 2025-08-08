import React from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';

const TrustedLogos: React.FC = () => {
  const { trustedLogosContent } = useAdmin();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400 mb-12 font-medium"
            variants={itemVariants}
          >
            {trustedLogosContent.headerText}
          </motion.p>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            variants={containerVariants}
          >
            {trustedLogosContent.logos.map((logo) => (
              <motion.div
                key={logo.id}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div 
                  className="flex flex-col items-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
                  title={logo.description}
                >
                  <div className="text-gray-600 dark:text-gray-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={logo.imagePath} 
                      alt={logo.name} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedLogos; 