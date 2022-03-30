import { ApiResult, JsonServiceClient } from './client'
import { App, Meta, Forms, Routes, Breakpoints, Transition, MetadataOperationType, MetadataType, MetadataPropertyType, InputInfo, ThemeInfo, LinkInfo, AuthenticateResponse, AdminUsersInfo } from './shared'
import { ExplorerRoutes, ExplorerRoutesExtend, ExplorerStore } from './shared';

export function createClient(fn: any): any;
/** @type {{expanded: boolean, operations: MetadataOperationType[], tag: string}[]} */
export let sideNav: {
    expanded: boolean;
    operations: MetadataOperationType[];
    tag: string;
}[];
export let Meta:Meta;
export let Forms:Forms;

/**
 * Execute tailwindui.com transition definition rules
 * @remarks
 * @type {Transition}
 * */
export let transition: Transition;
/** @type {Breakpoints & {previous: Breakpoints, current: Breakpoints, snap: (function(): void)}} */
export let breakpoints: Breakpoints & {
    previous: Breakpoints;
    current: Breakpoints;
    snap: (() => void);
};
/** The App's reactive `routes` navigation component used for all App navigation
 * @type {ExplorerRoutes & ExplorerRoutesExtend & Routes} */
export let routes: ExplorerRoutes & ExplorerRoutesExtend & Routes;
/** App's primary reactive store maintaining global functionality for API Explorer
 * @type {ExplorerStore} */
export let store: ExplorerStore;


/** API Explorer App instance */
export let App:App;
