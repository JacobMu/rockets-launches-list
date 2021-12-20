import type { FC, ReactNode } from "react";
import { Stack, StackItem } from "@fluentui/react";

interface Props {
	content: ReactNode;
	leftSide: ReactNode;
}

export const SideMenuLayout: FC<Props> = ({ content, leftSide }) => {
	return (
		<Stack
			tokens={{ padding: 25, childrenGap: 40 }}
			horizontal
			horizontalAlign="space-between"
		>
			<StackItem>{leftSide}</StackItem>
			<StackItem grow>{content}</StackItem>
		</Stack>
	);
};
