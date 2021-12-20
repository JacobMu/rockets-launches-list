import type { FC } from "react";
import type { IDialogContentProps, IModalProps } from "@fluentui/react";
import {
	Dialog,
	DialogFooter,
	DialogType,
	MessageBar,
	MessageBarType,
	PrimaryButton,
} from "@fluentui/react";
import ReactPlayer from "react-player";
import type { MissionDetail } from "../types";
import { useListDetail } from "./useListDetail";
import * as React from "react";

const MODAL_PROPS: IModalProps = {
	isBlocking: false,
};

function getDialogContentProps(
	missionDetail: MissionDetail
): IDialogContentProps {
	return {
		type: DialogType.normal,
		closeButtonAriaLabel: "app.close",
		title: missionDetail.mission_name,
	};
}

interface Props {
	isDialogOpen: boolean;
	missionDetailId: string;

	onDismiss(): void;
}

export const ListDetail: FC<Props> = ({
	onDismiss,
	isDialogOpen,
	missionDetailId,
}) => {
	const { missionDetail } = useListDetail(missionDetailId);
	return (
		<Dialog
			minWidth={750}
			hidden={!isDialogOpen}
			onDismiss={onDismiss}
			dialogContentProps={getDialogContentProps(missionDetail)}
			modalProps={MODAL_PROPS}
		>
			{missionDetail?.video_link && (
				<ReactPlayer url={missionDetail.video_link} width={700} />
			)}
			{!missionDetail?.video_link && (
				<MessageBar
					messageBarType={MessageBarType.info}
					dismissButtonAriaLabel={"app.close"}
					isMultiline
				>
					{"app.list.noRocketLaunchVideo"}
				</MessageBar>
			)}
			<DialogFooter>
				<PrimaryButton onClick={onDismiss} text="app.close" />
			</DialogFooter>
		</Dialog>
	);
};
