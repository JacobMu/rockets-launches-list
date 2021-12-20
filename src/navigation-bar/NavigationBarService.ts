import type { ICommandBarItemProps } from "@fluentui/react";
import { t } from "../i18/translationService";

enum COMMAND_BAR_ITEMS {
	NAME = "app.commandBar.name",
}

export function getItems(): ICommandBarItemProps[] {
	return [
		{
			key: COMMAND_BAR_ITEMS.NAME,
			text: t(COMMAND_BAR_ITEMS.NAME),
			cacheKey: COMMAND_BAR_ITEMS.NAME,
			disabled: true,
		},
	];
}
