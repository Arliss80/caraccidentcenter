import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award } from 'lucide-react';
import Value from '../ui/Value';
import { useLanguage } from '../../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-blue-50/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {t.about.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.about.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              alt="Professional medical and legal consultation"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl z-20">
              <p className="text-5xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Value
              icon={<Heart className="w-8 h-8 text-blue-600" />}
              title={t.about.stats.network.title}
              description={t.about.stats.network.description}
            />
            <Value
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title={t.about.stats.experience.title}
              description={t.about.stats.experience.description}
            />
            <Value
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title={t.about.stats.support.title}
              description={t.about.stats.support.description}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}