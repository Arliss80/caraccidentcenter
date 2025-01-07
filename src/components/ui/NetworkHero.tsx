import React from 'react';
import { motion } from 'framer-motion';

interface NetworkHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function NetworkHero({ title, description, imageSrc, imageAlt }: NetworkHeroProps) {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
      </div>
      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-200">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}