import type { FC } from "react";
import { Stack, StackItem, Text } from "@fluentui/react";
import * as React from "react";
import type { CheckboxItem } from "../types";
import { Checkbox } from "./Checkbox";
import { t } from "../../i18/translationService";

interface Props {
	checkboxes: CheckboxItem[];
}

export const Checkboxes: FC<Props> = ({ checkboxes }) => {
	return (
		<Stack tokens={{ childrenGap: 10, padding: 25 }}>
			<Text variant="large">{t("app.list.sideBar.title")}</Text>
			{checkboxes.map(({ label, key }) => (
				<StackItem key={key}>
					<Checkbox label={label} checkboxName={key} />
				</StackItem>
			))}
		</Stack>
	);
};
