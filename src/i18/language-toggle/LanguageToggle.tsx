import type { FC } from "react";
import { Stack, Toggle } from "@fluentui/react";
import { t } from "../translationService";
import { useLanguageToggle } from "./useLanguageToggle";

export const LanguageToggle: FC = () => {
	const { handleToggleChange } = useLanguageToggle();
	return (
		<Stack tokens={{ padding: 10 }}>
			<Toggle
				label={<div>{t("app.language.changeLanguage")}</div>}
				inlineLabel
				defaultChecked
				onText={t("app.language.enLang")}
				offText={t("app.language.skLang")}
				onChange={handleToggleChange}
			/>
		</Stack>
	);
};
