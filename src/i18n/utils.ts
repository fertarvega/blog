import type { Lang } from "./types";
import { uiNav, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in uiNav) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: "home" | "about") {
    return uiNav[lang][key] || uiNav[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string) {
    if (lang === "es") {
      return `${path}`;
    } else if (lang === "en") {
      return `/en${path}`;
    }
  };
}
