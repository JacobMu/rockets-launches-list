import type { ComponentType, ComponentProps, LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { Spinner } from "@fluentui/react";
import * as React from "react";

type LazyComponent<Component extends ComponentType<any>> = ((
	props: ComponentProps<Component>
) => JSX.Element) & {
	preload: () => Promise<ModuleWithComponent<Component> | Component>;
};
type ModuleWithComponent<Component> = Record<string, Component>;

function getComponentFromModule<Component>(
	returnedValue: ModuleWithComponent<Component> | Component
): { default: Component } {
	if (typeof returnedValue === "object") {
		const firstComponentName = Object.keys(returnedValue)[0];
		return {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			default: returnedValue[firstComponentName],
		};
	}
	return {
		default: returnedValue,
	};
}

function getLazyFactory<Component>(
	importFunc: () => Promise<ModuleWithComponent<Component> | Component>
): () => Promise<{ default: Component }> {
	return (): Promise<{ default: Component }> =>
		importFunc().then(getComponentFromModule);
}

export const withLazyComponent = <Component extends ComponentType<any>>(
	importFunc: () => Promise<ModuleWithComponent<Component> | Component>
): LazyComponent<Component> => {
	const lazyFactory = getLazyFactory<Component>(importFunc);

	const LazyComponent: LazyExoticComponent<Component> = lazy(lazyFactory);

	const LazyComponentWithSuspense: LazyComponent<Component> = (props) => (
		<Suspense fallback={<Spinner label="app.loading" />}>
			<LazyComponent {...props} />
		</Suspense>
	);
	LazyComponentWithSuspense.preload = importFunc;

	return LazyComponentWithSuspense;
};
