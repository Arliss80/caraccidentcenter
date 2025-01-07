import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { getLanguageFromURL } from '../../utils/i18n';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

export default function ServiceCard({ icon, title, description, features, link }: ServiceCardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSpanish } = useLanguage();
  const currentLanguage = getLanguageFromURL(location.pathname);
  
  const handleClick = () => {
    const languageAwareLink = `/${currentLanguage}${link}`;
    navigate(languageAwareLink);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100/50">
      <div className="p-3 bg-blue-50 rounded-xl w-fit mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={handleClick}
        className="w-full group inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold mt-auto"
      >
        {isSpanish ? 'Más Información' : 'Learn More'}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}