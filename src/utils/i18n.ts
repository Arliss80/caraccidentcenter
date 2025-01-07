// Language configuration
export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

export const DEFAULT_LANGUAGE: Language = 'en';

// URL utilities
export function getLanguageFromURL(pathname: string): Language {
  const langPrefix = pathname.split('/')[1];
  return SUPPORTED_LANGUAGES.includes(langPrefix as Language) 
    ? langPrefix as Language 
    : DEFAULT_LANGUAGE;
}

export function removeLanguageFromPath(pathname: string): string {
  const parts = pathname.split('/');
  return SUPPORTED_LANGUAGES.includes(parts[1] as Language)
    ? '/' + parts.slice(2).join('/')
    : pathname;
}

export function addLanguageToPath(pathname: string, language: Language): string {
  const cleanPath = removeLanguageFromPath(pathname);
  return `/${language}${cleanPath}`;
}