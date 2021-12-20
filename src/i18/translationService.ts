import i18next from "i18next";

export function t(translationKey: string): string {
	return i18next.t(translationKey);
}
