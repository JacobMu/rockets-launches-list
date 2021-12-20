import { atom } from "recoil";
import { getColumnItems } from "../RocketsLaunchesService";
import type { ColumnItem } from "../types";

export const columnsState = atom<ColumnItem[]>({
	key: "columnState",
	default: getColumnItems(),
});
