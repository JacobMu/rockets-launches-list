import type { FC } from "react";
import { SideMenuLayout } from "../layout/SideMenuLayout";
import * as React from "react";
import { Checkboxes } from "./checkboxes/Checkboxes";
import { RocketsLaunchesList } from "./list/RocketsLaunchesList";
import { getCheckboxItems } from "./RocketsLaunchesService";

export const RocketsLaunchesPage: FC = () => {
	return (
		<SideMenuLayout
			content={<RocketsLaunchesList />}
			leftSide={<Checkboxes checkboxes={getCheckboxItems()} />}
		/>
	);
};
