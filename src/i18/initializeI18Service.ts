import i18next from "i18next";
import enLang from "./locales/en.json";
import skLang from "./locales/sk.json";

export enum LANGUAGE {
	EN = "en",
	SK = "sk",
}

i18next.init({
	lng: LANGUAGE.EN,
	interpolation: { escapeValue: false },
	debug: true,
	resources: {
		en: { translation: enLang },
		sk: { translation: skLang },
	},
});
export default i18next;

export function getCurrentLanguage(): string {
	return i18next.language;
}

export function changeLanguage(language: string): void {
	i18next.changeLanguage(language);
}
