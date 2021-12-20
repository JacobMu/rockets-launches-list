import { useCallback } from "react";
import { changeLanguage, LANGUAGE } from "../initializeI18Service";

interface HookResult {
	handleToggleChange(
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		isChecked?: boolean
	): void;
}

export const useLanguageToggle = (): HookResult => {
	const handleToggleChange = useCallback((event, isChecked = false) => {
		if (isChecked) {
			changeLanguage(LANGUAGE.EN);
			return;
		}
		changeLanguage(LANGUAGE.SK);
	}, []);

	return {
		handleToggleChange,
	};
};
