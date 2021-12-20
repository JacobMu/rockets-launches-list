import type { ColumnItem } from "../types";

export function getUpdatedColumnsState(checkboxName: string, isChecked: boolean) {
	return (columnItems: ColumnItem[]): ColumnItem[] => {
		return columnItems.map((columnItem) => {
			if (columnItem.key === checkboxName) {
				return { ...columnItem, isVisible: isChecked };
			}
			return columnItem;
		});
	};
}
