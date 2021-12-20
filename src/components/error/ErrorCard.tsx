import { MessageBar, MessageBarType } from "@fluentui/react";
import type { FC } from "react";

interface Props {
	errorMessage: string;
}

export const ErrorCard: FC<Props> = ({ errorMessage }) => (
	<MessageBar
		messageBarType={MessageBarType.error}
		dismissButtonAriaLabel={"app.close"}
		isMultiline
	>
		{errorMessage}
	</MessageBar>
);
