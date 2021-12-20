import type { FC } from "react";
import {
	CheckboxVisibility,
	DetailsList,
	MessageBar,
	MessageBarType,
	Spinner,
} from "@fluentui/react";
import { RocketsLaunchesListItem } from "./RocketsLaunchesListItem";
import { LazyLoadListDetail } from "../detail/LazyLoadListDetail";
import * as React from "react";
import { useRocketLaunchesList } from "./useRocketLaunchesList";
import { ErrorCard } from "../../components/error/ErrorCard";

export const RocketLaunchesList: FC = () => {
	const {
		columnItems,
		launchesList,
		handleDialogClick,
		handleDismissClick,
		missionDetailId,
		isDialogVisible,
		error,
		isFetching,
	} = useRocketLaunchesList();

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
		<>
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
		</>
	);
};
