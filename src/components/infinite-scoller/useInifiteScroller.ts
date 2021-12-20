import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface HookParam {
	onScroll?(): void;
}

interface HookResult {
	nodeRef: React.MutableRefObject<null | HTMLDivElement>;
	lastItemRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const useInfiniteScroller = ({ onScroll }: HookParam): HookResult => {
	const [node, setNodeRef] = useState(undefined);
	const nodeRef = useRef(null);
	const observer = useRef<IntersectionObserver | undefined>();
	const lastItemRef = useRef(null);

	const handleChange = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				onScroll?.();
			}
		},
		[onScroll]
	);

	observer.current = useMemo(
		() =>
			new IntersectionObserver(handleChange, {
				threshold: 1.0,
				root: node,
			}),
		[handleChange, node]
	);

	useEffect(() => {
		if (nodeRef.current) {
			setNodeRef(nodeRef.current);
		}
	}, [setNodeRef]);

	useEffect(() => {
		if (lastItemRef.current) {
			observer?.current?.observe(lastItemRef.current);
		}
		return (): void => observer?.current?.disconnect();
	}, []);

	return {
		nodeRef,
		lastItemRef,
	};
};
