import { defaultLang, ui } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): string {
    const keys = key.split('.');
    let current: unknown = ui[lang];
    for (const k of keys) {
      if (current == null || typeof current !== 'object') { current = undefined; break; }
      current = (current as Record<string, unknown>)[k];
    }
    if (current !== undefined) return String(current);

    let fallback: unknown = ui[defaultLang];
    for (const k of keys) {
      if (fallback == null || typeof fallback !== 'object') { fallback = undefined; break; }
      fallback = (fallback as Record<string, unknown>)[k];
    }
    return fallback !== undefined ? String(fallback) : key;
  };
}
