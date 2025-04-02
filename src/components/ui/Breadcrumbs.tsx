import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { getLanguageFromURL } from '../../utils/i18n';

interface BreadcrumbItem {
  label: string;
  labelEs: string;
  path: string;
}

export default function Breadcrumbs() {
  const location = useLocation();
  const { isSpanish } = useLanguage();
  const currentLanguage = getLanguageFromURL(location.pathname);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: 'Home',
        labelEs: 'Inicio',
        path: `/${currentLanguage}`
      }
    ];

    let currentPath = '';
    paths.slice(1).forEach(path => {
      currentPath += `/${path}`;
      switch (path) {
        case 'medical-network':
          breadcrumbs.push({
            label: 'Medical Network',
            labelEs: 'Red Médica',
            path: `/${currentLanguage}${currentPath}`
          });
          break;
        case 'attorney-network':
          breadcrumbs.push({
            label: 'Attorney Network',
            labelEs: 'Red Legal',
            path: `/${currentLanguage}${currentPath}`
          });
          break;
        default:
          if (path.includes('car-accident-help')) {
            const cityName = path.replace('-car-accident-help', '');
            breadcrumbs.push({
              label: `${cityName.replace(/-/g, ' ')} Help`,
              labelEs: `Ayuda en ${cityName.replace(/-/g, ' ')}`,
              path: `/${currentLanguage}${currentPath}`
            });
          }
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-600" aria-current="page">
                {isSpanish ? crumb.labelEs : crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="text-blue-600 hover:text-blue-800"
              >
                {isSpanish ? crumb.labelEs : crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}