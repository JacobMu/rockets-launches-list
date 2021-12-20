import { withLazyComponent } from "../../components/lazy-load/LazyLoadedComponent";

export const LazyLoadListDetail = withLazyComponent(
	() => import("./ListDetail")
);
