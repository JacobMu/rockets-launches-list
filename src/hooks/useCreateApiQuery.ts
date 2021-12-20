import type { RequestPolicy, TypedDocumentNode, CombinedError } from "urql";
import { useQuery } from "urql";
import type { RocketsLaunches } from "../rockets-launches/types";
import type { DocumentNode } from "graphql";
import { useCallback, useEffect, useState } from "react";

interface HookParam {
	query: string | DocumentNode | TypedDocumentNode<RocketsLaunches, object>;
	variables?: Record<string, unknown>;
	requestPolicy?: RequestPolicy;
}

interface HookResult<Payload> {
	isFetching: boolean;
	data: Payload;
	error?: CombinedError;

	setOffset(newOffset: number): void;
}

export const useCreateApiQuery = <Payload>({
	query,
	requestPolicy,
	variables,
}: HookParam): HookResult<Payload> => {
	const [offset, setOffset] = useState<number>(0);
	const [response] = useQuery<Payload>({
		query,
		requestPolicy,
		variables: {
			...variables,
			offset,
		},
	});

	return {
		isFetching: response.fetching,
		data: response.data ?? ({} as Payload),
		error: response.error,
		setOffset: useCallback((newOffset: number) => {
			setOffset((currentOffset: number) => currentOffset + newOffset);
		}, []),
	};
};
