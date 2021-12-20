import type {
	CheckboxItem,
	ColumnItem,
	ListItem,
	PastRocketsLaunches,
} from "./types";
import { LIST_COLUMN_NAME } from "./types";
import { t } from "../i18/translationService";

enum COLUMN_KEY {
	MISSION_NAME = "app.list.column.missionName",
	ROCKET_NAME = "app.list.column.rocketName",
	LAUNCH_DATE = "app.list.column.launchDate",
	MISSION_SUCCESS = "app.list.column.success",
}

export function getCheckboxItems(): CheckboxItem[] {
	return [
		{
			key: LIST_COLUMN_NAME.MISSION,
			label: t(COLUMN_KEY.MISSION_NAME),
		},
		{
			key: LIST_COLUMN_NAME.ROCKET,
			label: t(COLUMN_KEY.ROCKET_NAME),
		},
		{
			key: LIST_COLUMN_NAME.DATE,
			label: t(COLUMN_KEY.LAUNCH_DATE),
		},
		{
			key: LIST_COLUMN_NAME.SUCCESS,
			label: t(COLUMN_KEY.MISSION_SUCCESS),
		},
	];
}

export function getColumnItems(): ColumnItem[] {
	return [
		{
			key: LIST_COLUMN_NAME.MISSION,
			fieldName: LIST_COLUMN_NAME.MISSION,
			name: t(COLUMN_KEY.MISSION_NAME),
			minWidth: 150,
			maxWidth: 250,
			isVisible: true,
		},
		{
			key: LIST_COLUMN_NAME.ROCKET,
			fieldName: LIST_COLUMN_NAME.ROCKET,
			name: t(COLUMN_KEY.ROCKET_NAME),
			minWidth: 150,
			maxWidth: 250,
			isVisible: true,
		},
		{
			key: LIST_COLUMN_NAME.DATE,
			fieldName: LIST_COLUMN_NAME.DATE,
			name: t(COLUMN_KEY.LAUNCH_DATE),
			minWidth: 250,
			maxWidth: 300,
			isVisible: true,
		},
		{
			key: LIST_COLUMN_NAME.SUCCESS,
			fieldName: LIST_COLUMN_NAME.SUCCESS,
			name: t(COLUMN_KEY.MISSION_SUCCESS),
			minWidth: 16,
			isVisible: true,
		},
	];
}

function getSuccessStatus(wasSuccessful?: boolean): string {
	if (wasSuccessful) {
		return t("app.success");
	}
	return t("app.fail");
}

function getStandardizedListItem(launch: PastRocketsLaunches): ListItem {
	const { mission_name, rocket, launch_date_local, launch_success, id } =
		launch;
	return {
		id,
		key: mission_name,
		mission: mission_name,
		rocket: rocket.rocket_name,
		date: new Date(launch_date_local).toUTCString(),
		success: getSuccessStatus(launch_success),
	};
}

export function getLaunchesList(
	rocketsLaunches?: PastRocketsLaunches[]
): ListItem[] | undefined {
	return rocketsLaunches?.map(getStandardizedListItem) ?? undefined;
}
