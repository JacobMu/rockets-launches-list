import type { CombinedError } from "urql";
import { ROCKETS_LAUNCHES_QUERY } from "./rocketLaunchesQuery";
import type { RocketsLaunches } from "../types";
import { useCallback, useEffect, useState } from "react";
import type { PastRocketsLaunches } from "../types";
import { useCreateApiQuery } from "../../hooks/useCreateApiQuery";
import { useRecoilState } from "recoil";
import {
	rocketsLaunchesSelector,
	rocketsLaunchesState,
} from "../store/RocketsLaunchesAtom";

interface HookResult {
	isFetching: boolean;
	isFetchingAdditionalItems: boolean;
	error?: CombinedError;
	launches?: PastRocketsLaunches[];

	fetchMoreItems(): void;
}

const DEFAULT_OFFSET = 20;

export const useRocketsLaunchesQuery = (): HookResult => {
	const {
		error,
		data: { launchesPast },
		isFetching,
		setOffset,
	} = useCreateApiQuery<RocketsLaunches>({
		query: ROCKETS_LAUNCHES_QUERY,
		requestPolicy: "cache-first",
		variables: { limit: 20 },
	});
	const [hasMoreToFetch, setHasMoreToFetch] = useState(true);
	const [isFetchingAdditionalItems, setIsFetchingAdditionalItems] =
		useState(false);
	const [rocketLaunches, setRocketsLaunches] =
		useRecoilState(rocketsLaunchesState);

	useEffect(() => {
		if (!launchesPast) {
			return;
		}
		setIsFetchingAdditionalItems(false);
		setRocketsLaunches(rocketsLaunchesSelector(launchesPast));

		if (launchesPast.length === 0) {
			setHasMoreToFetch(false);
			return;
		}

		if (launchesPast) {
			setHasMoreToFetch(true);
		}
	}, [launchesPast, setRocketsLaunches]);

	const fetchMoreItems = useCallback(() => {
		if (!hasMoreToFetch) {
			return;
		}
		setOffset(DEFAULT_OFFSET);
		setIsFetchingAdditionalItems(true);
	}, [hasMoreToFetch, setOffset]);

	return {
		launches: rocketLaunches?.launchesPast ?? [],
		error,
		isFetchingAdditionalItems,
		isFetching: isFetching && !isFetchingAdditionalItems,
		fetchMoreItems,
	};
};
