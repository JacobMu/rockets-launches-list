import { useRecoilValue } from "recoil";
import { columnsState } from "../store/ColumnsAtom";
import { useRocketsLaunchesQuery } from "../query-api/useRocketsLaunchesQuery";
import { useState } from "react";
import type { IDetailsRowProps } from "@fluentui/react";
import { getLaunchesList } from "../RocketsLaunchesService";
import { getVisibleColumnItems } from "./RocketsLaunchesListService";
import type { ColumnItem, ListItem } from "../types";
import type { CombinedError } from "urql";

interface HookResult {
	columnItems: ColumnItem[];
	launchesList: ListItem[];
	isDialogVisible: boolean;
	missionDetailId?: string;
	error?: CombinedError;
	isFetching: boolean;

	handleDismissClick(): void;

	handleDialogClick(props?: IDetailsRowProps): void;
}

export const useRocketLaunchesList = (): HookResult => {
	const columnItems = useRecoilValue(columnsState);
	const { error, isFetching, launches } = useRocketsLaunchesQuery();
	const [isDialogVisible, setIsDialogVisible] = useState(false);
	const [missionDetailId, setMissionDetailId] = useState<string | undefined>(
		undefined
	);

	const handleDialogClick = (props?: IDetailsRowProps): void => {
		setMissionDetailId(props?.item.id);
		setIsDialogVisible(true);
	};
	const handleDismissClick = (): void => setIsDialogVisible(false);

	return {
		isFetching,
		error,
		isDialogVisible,
		missionDetailId,
		launchesList: getLaunchesList(launches) ?? [],
		columnItems: getVisibleColumnItems(columnItems),
		handleDismissClick,
		handleDialogClick,
	};
};
