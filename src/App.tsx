import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MedicalNetwork from './pages/MedicalNetwork';
import AttorneyNetwork from './pages/AttorneyNetwork';
import MedicalServiceDetail from './pages/MedicalServiceDetail';
import LocationPage from './pages/LocationPage';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './utils/i18n';

export default function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check if the current path starts with a supported language
  const hasValidLanguagePrefix = SUPPORTED_LANGUAGES.some(lang => 
    location.pathname === `/${lang}` || location.pathname.startsWith(`/${lang}/`)
  );

  // Redirect to default language if no valid language prefix
  if (!hasValidLanguagePrefix) {
    const targetPath = location.pathname === '/' 
      ? `/${DEFAULT_LANGUAGE}`
      : `/${DEFAULT_LANGUAGE}${location.pathname}`;
    return <Navigate to={targetPath} replace />;
  }

  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />

      {/* Language-specific routes */}
      {SUPPORTED_LANGUAGES.map(lang => (
        <Route key={lang} path={`/${lang}/*`} element={
          <Routes>
            <Route index element={<MainLayout />} />
            <Route path="medical-network" element={<MedicalNetwork />} />
            <Route path="medical-network/:serviceId" element={<MedicalServiceDetail />} />
            <Route path="attorney-network" element={<AttorneyNetwork />} />
            <Route path=":citySlug-car-accident-help" element={<LocationPage />} />
          </Routes>
        } />
      ))}

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
    </Routes>
  );
}