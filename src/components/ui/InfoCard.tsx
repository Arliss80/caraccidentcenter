import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  content: string;
  className?: string;
}

export default function InfoCard({ title, content, className = '' }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white p-6 rounded-xl shadow-sm ${className}`}
    >
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </motion.div>
  );
}