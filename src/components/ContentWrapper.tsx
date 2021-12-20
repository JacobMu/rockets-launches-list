import { Stack, StackItem } from "@fluentui/react";
import type { FC } from "react";

export const ContentWrapper: FC = ({ children }) => (
	<Stack styles={{ root: { marginTop: "1rem" } }}>
		<StackItem>{children}</StackItem>
	</Stack>
);
