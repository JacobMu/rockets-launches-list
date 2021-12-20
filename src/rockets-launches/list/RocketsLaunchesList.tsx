import {
	CheckboxVisibility,
	DetailsList,
	MessageBar,
	MessageBarType,
	Spinner,
} from "@fluentui/react";
import type { FC } from "react";
import { useRocketsLaunchesList } from "./useRocketsLaunchesList";
import { RocketsLaunchesListItem } from "./RocketsLaunchesListItem";
import { LazyLoadListDetail } from "../detail/LazyLoadListDetail";
import { InfiniteScroller } from "../../components/infinite-scoller/InfiniteScroller";
import { ErrorCard } from "../../components/error/ErrorCard";
import * as React from "react";

export const RocketsLaunchesList: FC = () => {
	const {
		launchesList,
		error,
		isFetching,
		isFetchingAdditionalItems,
		columnItems,
		isDialogVisible,
		missionDetailId,
		handleDialogClick,
		handleDismissClick,
		handleScroll,
	} = useRocketsLaunchesList();

	if (isFetching) {
		return <Spinner label="app.loading" />;
	}

	if (error) {
		return <ErrorCard errorMessage="app.unknownError" />;
	}

	if (!launchesList) {
		return (
			<MessageBar
				messageBarType={MessageBarType.info}
				dismissButtonAriaLabel={"app.close"}
				isMultiline
			>
				{"app.list.notRocketLaunches"}
			</MessageBar>
		);
	}

	return (
		<InfiniteScroller
			onScroll={handleScroll}
			hasLoadingItems={isFetchingAdditionalItems}
		>
			<DetailsList
				columns={columnItems}
				items={launchesList}
				isHeaderVisible
				checkboxVisibility={CheckboxVisibility.hidden}
				onRenderRow={(props): JSX.Element | null => (
					<RocketsLaunchesListItem
						handleDialogClick={(): void => handleDialogClick(props)}
						detailRowProps={props}
					/>
				)}
			/>
			{missionDetailId && (
				<LazyLoadListDetail
					isDialogOpen={isDialogVisible}
					missionDetailId={missionDetailId}
					onDismiss={handleDismissClick}
				/>
			)}
		</InfiniteScroller>
	);
};
