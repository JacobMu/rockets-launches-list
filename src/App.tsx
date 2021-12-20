import { ThemeProvider } from "@fluentui/react";
import type { FC } from "react";
import { Provider as UrqlProvider } from "urql";
import { RecoilRoot } from "recoil";
import { NavigationBar } from "./navigation-bar/NavigationBar";
import { ContentWrapper } from "./components/ContentWrapper";
import { getClient } from "./urlqService";
import { RocketsLaunchesPage } from "./rockets-launches/RocketsLaunchesPage";

export const App: FC = () => {
	return (
		<ThemeProvider>
			<UrqlProvider value={getClient()}>
				<RecoilRoot>
					<NavigationBar />
					<ContentWrapper>
						<RocketsLaunchesPage />
					</ContentWrapper>
				</RecoilRoot>
			</UrqlProvider>
		</ThemeProvider>
	);
};
