import en from './en';
import tr from './tr';

export const translations: Record<string, Record<string, string>> = {
  en,
  tr,
  fr: en, // fallback to English until translated
  ar: en, // fallback to English until translated
};
