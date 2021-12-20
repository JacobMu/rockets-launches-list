import { useRecoilValue } from "recoil";
import { rocketLaunchDetailState } from "../store/RocketsLaunchesAtom";
import type { MissionDetail } from "../types";

interface HookResult {
	missionDetail: MissionDetail;
}

export const useListDetail = (missionDetailId: string): HookResult => {
	const rocketLaunch = useRecoilValue(
		rocketLaunchDetailState(missionDetailId)
	);

	return {
		missionDetail: {
			mission_name: rocketLaunch?.mission_name,
			video_link: rocketLaunch?.links.video_link,
		},
	};
};
