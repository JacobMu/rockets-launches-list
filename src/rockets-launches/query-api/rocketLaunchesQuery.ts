import { gql } from "urql";

export const ROCKETS_LAUNCHES_QUERY = gql`
	query RocketsLaunchesQuery($limit: Int, $offset: Int) {
		launchesPast(limit: $limit, offset: $offset) {
			id
			mission_name
			launch_date_local
			rocket {
				rocket_name
			}
			launch_success
			links {
				video_link
			}
		}
	}
`;
