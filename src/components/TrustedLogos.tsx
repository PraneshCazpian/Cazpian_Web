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

  // Limit to 9 logos for 3x3 grid
  const displayLogos = trustedLogosContent.logos.slice(0, 9);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            {trustedLogosContent.headerText}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Trusted by industry leaders worldwide
          </motion.p>
          
          {/* Professional 3x3 Grid Layout */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-12xl mx-auto"
            variants={containerVariants}
          >
            {displayLogos.map((logo) => (
              <motion.div
                key={logo.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div 
                  className="flex flex-col items-center justify-center p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-600 h-full min-h-[160px] lg:min-h-[180px]"
                  title={logo.description}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={logo.imagePath} 
                      alt={logo.name} 
                      className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm lg:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">
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