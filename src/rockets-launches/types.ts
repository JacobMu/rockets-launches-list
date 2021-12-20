import type { IColumn } from "@fluentui/react";

export enum LIST_COLUMN_NAME {
	ID = "id",
	MISSION = "mission",
	ROCKET = "rocket",
	DATE = "date",
	SUCCESS = "success",
}

export interface ListItem {
	id: string;
	key: string;
	mission: string;
	rocket: string;
	date: string;
	success: string;
}

export interface MissionDetail {
	mission_name: string;
	video_link?: string;
}

interface Links {
	video_link?: string;
}

export interface PastRocketsLaunches {
	id: string;
	mission_name: string;
	launch_date_local: string;
	rocket: {
		rocket_name: string;
	};
	launch_success?: boolean;
	links: Links;
}

export interface RocketsLaunches {
	launchesPast: PastRocketsLaunches[];
}

export interface CheckboxItem {
	key: LIST_COLUMN_NAME;
	label: string;
}

export type ColumnItem = IColumn & { isVisible: boolean };
