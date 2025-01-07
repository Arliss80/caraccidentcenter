import { useLocation } from 'react-router-dom';
import { getLanguageFromURL, Language } from '../utils/i18n';
import { useTranslation } from '../translations/i18n';

export function useLanguage() {
  const location = useLocation();
  const language = getLanguageFromURL(location.pathname);
  const translations = useTranslation(language);

  return {
    language,
    t: translations,
    isSpanish: language === 'es'
  };
}