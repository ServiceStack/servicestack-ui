import { ApiResult, JsonServiceClient } from './client'
import { App, Forms, MetadataOperationType, MetadataType, MetadataPropertyType, InputInfo, ThemeInfo, LinkInfo, Breakpoints, AuthenticateResponse, AdminUsersInfo } from './shared'

export function createClient(fn: any): any;
/** @type {{expanded: boolean, operations: MetadataOperationType[], tag: string}[]} */
export let sideNav: {
    expanded: boolean;
    operations: MetadataOperationType[];
    tag: string;
}[];
export let Meta: any;

/**
 * Execute tailwindui.com transition definition rules
 * @remarks
 * @type {(prop:string,enter?:boolean) => boolean}
 * */
export let transition: (prop: string, enter?: boolean) => boolean;
/** @type {Breakpoints & {previous: Breakpoints, current: Breakpoints, snap: (function(): void)}} */
export let breakpoints: Breakpoints & {
    previous: Breakpoints;
    current: Breakpoints;
    snap: (() => void);
};
/** Custom route params used in API Explorer
 * @typedef {{op?:string,tab?:string,lang?:string,provider?:string,preview?:string,body?:string,doc?:string,detailSrc?:string,form?:string,response?:string}} UiRoutes */
/** Route methods used in API Explorer
 * @typedef {{queryHref(): string}} UiRoutesExtend */
/**
 * The App's reactive `routes` navigation component used for all App navigation
 * @remarks
 * @type {UiRoutes & UiRoutesExtend & {page: string, set: (function(any): void), state: any, to: (function(any): void), href: (function(any): string)}}
 */
export let routes: UiRoutes & UiRoutesExtend & {
    page: string;
    set: ((arg0: any) => void);
    state: any;
    to: ((arg0: any) => void);
    href: ((arg0: any) => string);
};
/**
 * App's primary reactive store maintaining global functionality for API Explorer
 * @remarks
 * @type {{
 * cachedFetch: (url:string) => Promise<string>,
 *     copied: boolean,
 *     readonly opTabs: {[p: string]: string},
 *     sideNav: {expanded: boolean, operations: MetadataOperationType[], tag: string}[],
 *     auth: AuthenticateResponse,
 *     readonly displayName: string|null,
 *     loadLang: () => void,
 *     langCache: () => {op: string, lang: string, url: string},
 *     login: (args:any, $on?:Function) => void,
 *     detailSrcResult: {},
 *     logout: () => void,
 *     readonly isServiceStackType: boolean,
 *     api: ApiResult<AuthenticateResponse>,
 *     init: () => void,
 *     readonly op: MetadataOperationType|null,
 *     debug: boolean,
 *     readonly filteredSideNav: {tag: string, operations: MetadataOperationType[], expanded: boolean}[],
 *     readonly authProfileUrl: string|null,
 *     previewResult: string|null,
 *     readonly activeLangSrc: string|null,
 *     readonly previewCache: {preview: string, url: string, lang: string}|null,
 *     toggle: (tag:string) => void,
 *     getTypeUrl: (types: string) => string,
 *     readonly authRoles: string[],
 *     filter: string,
 *     loadDetailSrc: () => void,
 *     baseUrl: string,
 *     readonly activeDetailSrc: string,
 *     readonly authLinks: LinkInfo[],
 *     readonly opName: string,
 *     readonly previewSrc: string,
 *     SignIn: (opt:any) => Function,
 *     hasRole: (role:string) => boolean,
 *     loadPreview: () => void,
 *     readonly authPermissions: string[],
 *     readonly useLang: string,
 *     invalidAccess: () => string|null
 * }}
 */
export let store: {
    cachedFetch: (url: string) => Promise<string>;
    copied: boolean;
    readonly opTabs: {
        [p: string]: string;
    };
    sideNav: {
        expanded: boolean;
        operations: MetadataOperationType[];
        tag: string;
    }[];
    auth: AuthenticateResponse;
    readonly displayName: string | null;
    loadLang: () => void;
    langCache: () => {
        op: string;
        lang: string;
        url: string;
    };
    login: (args: any, $on?: Function) => void;
    detailSrcResult: {};
    logout: () => void;
    readonly isServiceStackType: boolean;
    api: ApiResult<AuthenticateResponse>;
    init: () => void;
    readonly op: MetadataOperationType | null;
    debug: boolean;
    readonly filteredSideNav: {
        tag: string;
        operations: MetadataOperationType[];
        expanded: boolean;
    }[];
    readonly authProfileUrl: string | null;
    previewResult: string | null;
    readonly activeLangSrc: string | null;
    readonly previewCache: {
        preview: string;
        url: string;
        lang: string;
    } | null;
    toggle: (tag: string) => void;
    getTypeUrl: (types: string) => string;
    readonly authRoles: string[];
    filter: string;
    loadDetailSrc: () => void;
    baseUrl: string;
    readonly activeDetailSrc: string;
    readonly authLinks: LinkInfo[];
    readonly opName: string;
    readonly previewSrc: string;
    SignIn: (opt: any) => Function;
    hasRole: (role: string) => boolean;
    loadPreview: () => void;
    readonly authPermissions: string[];
    readonly useLang: string;
    invalidAccess: () => string | null;
};
/**
 * Custom route params used in API Explorer
 */
export type UiRoutes = {
    op?: string;
    tab?: string;
    lang?: string;
    provider?: string;
    preview?: string;
    body?: string;
    doc?: string;
    detailSrc?: string;
    form?: string;
    response?: string;
};
/**
 * Route methods used in API Explorer
 */
export type UiRoutesExtend = {
    queryHref(): string;
};

export declare var App:App
export declare var Forms:Forms
/** Method arguments of custom Doc Components */
export interface DocComponentArgs {
    store: typeof store;
    routes: typeof routes;
    breakpoints: typeof breakpoints;
    op: () => MetadataOperationType;
}
/** Method Signature of custom Doc Components */
export declare type DocComponent = (args:DocComponentArgs) => Record<string,any>;
