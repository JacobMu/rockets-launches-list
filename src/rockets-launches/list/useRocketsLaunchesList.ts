import { useRecoilValue, useSetRecoilState } from "recoil";
import { columnsState } from "../store/ColumnsAtom";
import type { ColumnItem, ListItem } from "../types";
import { getVisibleColumnItems } from "./RocketsLaunchesListService";
import { useCallback, useEffect, useState } from "react";
import type { IDetailsRowProps } from "@fluentui/react";
import { useRocketsLaunchesQuery } from "../query-api/useRocketsLaunchesQuery";
import type { CombinedError } from "urql";
import { getLaunchesList } from "../RocketsLaunchesService";
import { rocketsLaunchesState } from "../store/RocketsLaunchesAtom";

interface HookResult {
	columnItems: ColumnItem[];
	launchesList: ListItem[];
	isDialogVisible: boolean;
	isFetchingAdditionalItems: boolean;
	missionDetailId: string;
	error: CombinedError;
	isFetching: boolean;

	handleDismissClick(): void;

	handleDialogClick(props?: IDetailsRowProps): void;

	handleScroll(): void;
}

export const useRocketsLaunchesList = (): HookResult => {
	const columnItems = useRecoilValue(columnsState);
	const {
		error,
		isFetching,
		isFetchingAdditionalItems,
		launches,
		fetchMoreItems,
	} = useRocketsLaunchesQuery();
	const [isDialogVisible, setIsDialogVisible] = useState(false);
	const [missionDetailId, setMissionDetailId] = useState<string | undefined>(
		undefined
	);

	const handleDialogClick = (props?: IDetailsRowProps): void => {
		setMissionDetailId(props?.item.id);
		setIsDialogVisible(true);
	};
	const handleDismissClick = (): void => setIsDialogVisible(false);
	const handleScroll = useCallback(() => {
		fetchMoreItems();
	}, [fetchMoreItems]);

	return {
		isFetching,
		isFetchingAdditionalItems,
		error,
		isDialogVisible,
		missionDetailId,
		launchesList: getLaunchesList(launches),
		columnItems: getVisibleColumnItems(columnItems),
		handleDismissClick,
		handleDialogClick,
		handleScroll,
	};
};
