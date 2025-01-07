import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mx-auto text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}