import { useCallback } from "react";
import type * as React from "react";
import { useSetRecoilState } from "recoil";
import { columnsState } from "../store/ColumnsAtom";
import { getUpdatedColumnsState } from "./CheckboxService";

interface HookResult {
	handleChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean): void;
}

export const useCheckboxItem = (checkboxName: string): HookResult => {
	const setColumnsState = useSetRecoilState(columnsState);

	const handleChange = useCallback(
		(_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked = false) => {
			setColumnsState(getUpdatedColumnsState(checkboxName, isChecked));
		},
		[checkboxName, setColumnsState]
	);
	return {
		handleChange,
	};
};
