import { useRocketsLaunchesQuery } from "../query-api/useRocketsLaunchesQuery";

interface HookResult {
	isFetchingAdditionalItems: boolean;

	handleScroll(): void;
}

export const useRocketsLaunches = (): HookResult => {
	const { isFetchingAdditionalItems, fetchMoreItems } =
		useRocketsLaunchesQuery();

	const handleScroll = (): void => {
		fetchMoreItems();
	};

	return {
		isFetchingAdditionalItems,
		handleScroll,
	};
};
