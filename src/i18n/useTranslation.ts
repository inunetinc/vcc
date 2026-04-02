import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

export function useTranslation() {
  const { language, setLanguage } = useContext(LanguageContext);

  function t(key: string): string {
    return (translations as any)[language]?.[key] ?? (translations as any)['en']?.[key] ?? key;
  }

  return { t, language, setLanguage };
}
