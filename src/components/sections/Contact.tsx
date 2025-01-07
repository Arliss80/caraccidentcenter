import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../ui/Button';
import ContactInfo from '../ui/ContactInfo';
import { CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_EMAIL, CONTACT_ADDRESS } from '../../constants/contact';
import { useLanguage } from '../../hooks/useLanguage';

export default function Contact() {
  const { t, language } = useLanguage();
  const addressString = `${CONTACT_ADDRESS.street}, ${CONTACT_ADDRESS.suite}, ${CONTACT_ADDRESS.city}, ${CONTACT_ADDRESS.state} ${CONTACT_ADDRESS.zip}`;

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-gray-600">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm flex items-center justify-center p-12"
          >
            <Button
              variant="primary"
              size="lg"
              href={language === 'es' ? '/contact-es.html' : '/contact-en.html'}
              className="w-full max-w-sm"
            >
              {language === 'es' ? 'Contáctenos' : 'Contact Us'}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<Phone className="w-5 h-5 text-blue-600" />}
              title={t.contact.info.phone.title}
              content={CONTACT_PHONE}
              href={CONTACT_PHONE_HREF}
            />
            <ContactInfo
              icon={<Mail className="w-5 h-5 text-blue-600" />}
              title={t.contact.info.email.title}
              content={CONTACT_EMAIL}
              href={`mailto:${CONTACT_EMAIL}`}
            />
            <ContactInfo
              icon={<MapPin className="w-5 h-5 text-blue-600" />}
              title="Address"
              content={addressString}
            />
            <ContactInfo
              icon={<Clock className="w-5 h-5 text-blue-600" />}
              title={t.contact.info.hours.title}
              content={t.contact.info.hours.value}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}