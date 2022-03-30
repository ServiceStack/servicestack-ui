import { ApiResult, JsonServiceClient } from './client'
import { App, Meta, Forms, Routes, Breakpoints, Transition, MetadataOperationType, MetadataType, MetadataPropertyType, InputInfo, ThemeInfo, LinkInfo, AuthenticateResponse, AdminUsersInfo } from './shared'
import { LocodeRoutes, LocodeRoutesExtend, LocodeStore, LocodeSettings, ApiState, CrudApisState } from './shared';

/**
 * Create a new `JsonServiceStack` client instance configured with the authenticated user
 *
 * @remarks
 * For typical API requests it's recommended to use the UI's pre-configured **client** instance
 *
 * @param {Function} [fn]
 * @return {JsonServiceClient}
 */
export function createClient(fn?: Function): JsonServiceClient;
/** Resolve Absolute URL for API Name
 * @param {string} op
 * @return {string} */
export function resolveApiUrl(op: string): string;
/** App's pre-configured `JsonServiceClient` instance for making typed API requests */
export let client: JsonServiceClient;
/** Organized data structure to render Sidebar
 * @remarks
 * @type {{expanded: boolean, operations: MetadataOperationType[], tag: string}[]} */
export let sideNav: {
    expanded: boolean;
    operations: MetadataOperationType[];
    tag: string;
}[];
export let Meta:Meta;
export let Forms:Forms;

/**
 * Create a new state for an API that encapsulates its invocation and execution
 * @param {MetadataOperationType} op
 * @return {ApiState} */
export function apiState(op: MetadataOperationType): ApiState;
/**
 * Return all CRUD API States available for this operation
 * @param {string} opName
 * @return {CrudApisState}
 */
export function createState(opName: string): CrudApisState;
/**
 * Execute tailwindui.com transition definition rules
 * @type {Transition}
 * */
export let transition: Transition;
/**
 * Reactive store to maintain & programatically access Tailwind's responsive breakpoints
 * @type {Breakpoints & {previous: Breakpoints, current: Breakpoints, snap: (function(): void)}}
 * */
export let breakpoints: Breakpoints & {
    previous: Breakpoints;
    current: Breakpoints;
    snap: (() => void);
};
/** The App's reactive `routes` navigation component used for all App navigation
 * @type {LocodeRoutes & LocodeRoutesExtend & Routes} */
export let routes: LocodeRoutes & LocodeRoutesExtend & Routes;
/** Manage users query & filter preferences in the Users browsers localStorage
 * @type {LocodeSettings} */
export let settings: LocodeSettings;
/** App's primary reactive store maintaining global functionality for Locode Apps
 * @type {LocodeStore} */
export let store: LocodeStore;


/** Method arguments of custom Create Form Components */
export interface CreateComponentArgs {
    store: LocodeStore;
    routes: LocodeRoutes & LocodeRoutesExtend & Routes;
    settings: LocodeSettings;
    state: () => CrudApisState;
    save: () => void;
    done: () => void;
}
/** Method Signature of custom Create Form Components */
export declare type CreateComponent = (args:CreateComponentArgs) => Record<string,any>;

/** Method arguments of custom Edit Form Components */
export interface EditComponentArgs {
    store: LocodeStore;
    routes: LocodeRoutes & LocodeRoutesExtend & Routes;
    settings: LocodeSettings;
    state: () => CrudApisState;
    save: () => void;
    done: () => void;
}
/** Method signature of custom Edit Form Components */
export declare type EditComponent = (args:EditComponentArgs) => Record<string,any>;

/** API Explorer App instance */
export let App:App;
