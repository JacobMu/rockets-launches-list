import type { FC } from "react";
import { SideMenuLayout } from "../layout/SideMenuLayout";
import * as React from "react";
import { Checkboxes } from "./checkboxes/Checkboxes";
import { RocketsLaunches } from "./list/RocketsLaunches";
import { getCheckboxItems } from "./RocketsLaunchesService";

export const RocketsLaunchesPage: FC = () => {
	return (
		<SideMenuLayout
			content={<RocketsLaunches />}
			leftSide={<Checkboxes checkboxes={getCheckboxItems()} />}
		/>
	);
};
