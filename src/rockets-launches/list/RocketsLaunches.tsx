import type { FC } from "react";
import { useRocketsLaunches } from "./useRocketsLaunches";
import { InfiniteScroller } from "../../components/infinite-scoller/InfiniteScroller";
import * as React from "react";
import { RocketLaunchesList } from "./RocketLaunchesList";

export const RocketsLaunches: FC = () => {
	const { isFetchingAdditionalItems, handleScroll } = useRocketsLaunches();

	return (
		<InfiniteScroller
			onScroll={handleScroll}
			isLoading={isFetchingAdditionalItems}
		>
			<RocketLaunchesList />
		</InfiniteScroller>
	);
};
