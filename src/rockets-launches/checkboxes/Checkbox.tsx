import * as React from "react";
import type { FC } from "react";
import { Checkbox as FluentUiCheckbox } from "@fluentui/react";
import { useCheckboxItem } from "./useCheckboxItem";

interface Props {
	checkboxName: string;
	label: string;
}

export const Checkbox: FC<Props> = ({ label, checkboxName }) => {
	const { handleChange } = useCheckboxItem(checkboxName);
	return <FluentUiCheckbox defaultChecked onChange={handleChange} label={label} />;
};
