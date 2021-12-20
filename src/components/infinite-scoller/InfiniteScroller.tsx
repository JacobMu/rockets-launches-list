import type { FC } from "react";
import { useInfiniteScroller } from "./useInifiteScroller";
import { Spinner } from "@fluentui/react";
import * as React from "react";

interface Props {
	hasLoadingItems: boolean;

	onScroll?(): void;
}

export const InfiniteScroller: FC<Props> = ({
	children,
	onScroll,
	hasLoadingItems,
}) => {
	const { nodeRef, lastItemRef } = useInfiniteScroller({
		onScroll,
	});
	return (
		<div ref={nodeRef} id="infinite-scroller-wrapper">
			{children}
			{hasLoadingItems && (
				<Spinner
					label="app.loading"
					styles={{ root: { marginTop: 15 } }}
				/>
			)}
			<div ref={lastItemRef} />
		</div>
	);
};
