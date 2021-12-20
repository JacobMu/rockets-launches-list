import type { IDetailsRowProps } from "@fluentui/react";
import { DetailsRow } from "@fluentui/react";
import type { FC } from "react";

interface Props {
	detailRowProps?: IDetailsRowProps;

	handleDialogClick(): void;
}

export const RocketsLaunchesListItem: FC<Props> = ({
	detailRowProps,
	handleDialogClick,
}) => {
	if (!detailRowProps) {
		return null;
	}

	return (
		<div onClick={handleDialogClick}>
			<DetailsRow {...detailRowProps} />
		</div>
	);
};
