import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import Button from './Button';

interface LanguageModalProps {
  isOpen: boolean;
  onSelectLanguage: (lang: 'en' | 'es') => void;
}

export default function LanguageModal({ isOpen, onSelectLanguage }: LanguageModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <Globe className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Welcome • Bienvenidos</h2>
          <p className="text-gray-600 text-center mb-8">
            Please select your preferred language • Por favor, seleccione su idioma preferido
          </p>
          <div className="space-y-4">
            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={() => onSelectLanguage('en')}
            >
              Continue in English
            </Button>
            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => onSelectLanguage('es')}
            >
              Continuar en Español
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}