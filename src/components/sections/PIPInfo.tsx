import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, DollarSign, FileText, Clock } from 'lucide-react';
import Button from '../ui/Button';
import InfoCard from '../ui/InfoCard';
import PIPBenefits from './pip/PIPBenefits';
import PIPSteps from './pip/PIPSteps';
import PIPAssistance from './pip/PIPAssistance';
import { useLanguage } from '../../hooks/useLanguage';

export default function PIPInfo() {
  const { t } = useLanguage();

  return (
    <section id="pip" className="section-padding bg-gradient-to-b from-white to-blue-50/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {t.pip.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t.pip.title}
          </h2>
          <p className="text-gray-700 text-lg">
            {t.pip.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.pip.steps.title}</h3>
              <PIPSteps steps={t.pip.steps.items} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
                <AlertCircle className="w-6 h-6 text-blue-700 mr-3" />
                {t.pip.benefits.title}
              </h3>
              <PIPBenefits benefits={t.pip.benefits.items} />
            </div>

            <PIPAssistance
              title={t.pip.assistance.title}
              points={t.pip.assistance.points}
              cta={t.pip.assistance.cta}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}