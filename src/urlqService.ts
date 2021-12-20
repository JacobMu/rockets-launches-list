import { Client, defaultExchanges } from "urql";

export function getClient(): Client {
	return new Client({
		url: "https://api.spacex.land/graphql/",
		exchanges: defaultExchanges,
	});
}
