import type { RecoilValueReadOnly } from "recoil";
import { atom, selector } from "recoil";
import type { PastRocketsLaunches, RocketsLaunches } from "../types";

export const rocketsLaunchesState = atom<RocketsLaunches>({
	key: "rocketsLaunchesState",
	default: { launchesPast: [] },
});
export const rocketsLaunchesSelector =
	(newLaunches = [] as PastRocketsLaunches[]) =>
	({ launchesPast }: RocketsLaunches): RocketsLaunches => ({
		launchesPast: [...launchesPast, ...newLaunches],
	});

export function rocketLaunchDetailState(
	missionDetailId: string
): RecoilValueReadOnly<PastRocketsLaunches | undefined> {
	return selector({
		key: "rocketLaunchDetailState",
		get: ({ get }) => {
			return get(rocketsLaunchesState)?.launchesPast.find((launch) => {
				return launch.id === missionDetailId;
			});
		},
	});
}
