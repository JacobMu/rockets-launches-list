import type { FC } from "react";
import { useInfiniteScroller } from "./useInifiteScroller";
import { Spinner } from "@fluentui/react";
import * as React from "react";

interface Props {
	isLoading: boolean;

	onScroll?(): void;
}

export const InfiniteScroller: FC<Props> = ({
	children,
	onScroll,
	isLoading,
}) => {
	const { nodeRef, lastItemRef } = useInfiniteScroller({
		onScroll,
	});
	return (
		<div ref={nodeRef} id="infinite-scroller-wrapper">
			{children}
			{isLoading && (
				<Spinner
					label="app.loading"
					styles={{ root: { marginTop: 15 } }}
				/>
			)}
			<div ref={lastItemRef} />
		</div>
	);
};
