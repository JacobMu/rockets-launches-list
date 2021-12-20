import type { ICommandBarItemProps } from "@fluentui/react";
import { getItems } from "./NavigationBarService";

interface HookResult {
	items: ICommandBarItemProps[];
}

export const useNavigationBar = (): HookResult => {
	return {
		items: getItems(),
	};
};
