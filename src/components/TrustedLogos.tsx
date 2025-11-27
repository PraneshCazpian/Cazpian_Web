import React from "react";
import { motion } from "framer-motion";

const TrustedLogos: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const builtOn = [
    { name: "Apache Iceberg", img: "/Logos/iceberg.svg" },
    { name: "Apache Spark", img: "/Logos/spark.svg" },
    { name: "Apache Arrow", img: "/Logos/arrow.svg" },
    { name: "Apache Polaris", img: "/Logos/polaris.svg" },
    { name: "Kubernetes", img: "/Logos/kubernetes.svg" },
  ];

  const cloudStorage = [
    { name: "Minio", img: "/Logos/minio.svg" },
    { name: "Google Cloud Storage", img: "/Logos/gcp.svg" },
    { name: "AWS S3", img: "/Logos/aws.svg" },
    { name: "Microsoft Azure", img: "/Logos/azure.svg" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background lines */}
      <img
        src="/Bg-tr.svg"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side — Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          {/* Built On Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-center"
          >
            {/* Title outside the box */}
            <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-3 text-center lg:text-left">
              Built On
            </h3>

            {/* Box */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl px-4 py-6 md:px-6 md:py-8 flex flex-col items-center lg:items-start w-full max-w-md">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-center h-full w-full">
                {builtOn.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center lg:items-center"
                  >
                    <img
                      src={logo.img}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto mb-2 object-contain"
                    />
                    <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 text-center lg:text-left">
                      {logo.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cloud Storage Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-center relative lg:left-[1in]"
          >
            {/* Title outside the box */}
            <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-3 text-center lg:text-left">
              Cloud Storage
            </h3>

            {/* Box */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl px-4 py-6 md:px-6 md:py-8 flex flex-col items-center lg:items-start w-full max-w-md">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-center h-full w-full">
                {cloudStorage.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center lg:items-center"
                  >
                    <img
                      src={logo.img}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto mb-2 object-contain"
                    />
                    <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 text-center lg:text-center">
                      {logo.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side — Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center lg:text-right lg:relative lg:right-[2in]"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-black-700 dark:text-indigo-400 mb-3"
          >
            Open standards &
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
          >
            Cloud-native stack
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 mt-2"
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedLogos;
