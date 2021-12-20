import { CommandBar, getTheme } from "@fluentui/react";
import type { FC } from "react";
import { LanguageToggle } from "../i18/language-toggle/LanguageToggle";
import { useNavigationBar } from "./useNavigationBar";

const theme = getTheme();
const STYLE = {
	root: { backgroundColor: theme.palette.blue },
};

export const NavigationBar: FC = () => {
	const { items } = useNavigationBar();
	return (
		<CommandBar
			items={items}
			styles={STYLE}
			farItems={[
				{
					key: "",
					onRender: (): JSX.Element => <LanguageToggle />,
				},
			]}
		/>
	);
};
