import type { ColumnItem } from "../types";

function getColumnItem(columnItem: ColumnItem): ColumnItem | undefined {
	if (!columnItem.isVisible) {
		return undefined;
	}
	return {
		...columnItem,
		isRowHeader: true,
		isResizable: true,
		isSorted: true,
	};
}

export function getVisibleColumnItems(columnItems: ColumnItem[]): ColumnItem[] {
	return columnItems
		.map(getColumnItem)
		.filter((columnItem): columnItem is ColumnItem => !!columnItem);
}
