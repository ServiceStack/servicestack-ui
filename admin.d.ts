import { ApiResult, JsonServiceClient } from './client'
import { App, Meta, Forms, Breakpoints, MetadataOperationType, MetadataType, MetadataPropertyType, InputInfo, ThemeInfo, LinkInfo, AuthenticateResponse, AdminUsersInfo } from './shared'

export let Meta:Meta;
export let Forms:Forms;

/**
 * Execute tailwindui.com transition definition rules
 * @remarks
 * @type {(prop:string,enter?:boolean) => boolean}
 * */
export let transition: (prop: string, enter?: boolean) => boolean;
/** Route methods used in Admin UI
 * @typedef {{tab?:string,provider?:string,q?:string,page?:string,sort?:string,new?:string,edit?:string}} AdminRoutes */
/**
 * The App's reactive `routes` navigation component used for all App navigation
 * @remarks
 * @type {AdminRoutes & {page: string, set: (function(any): void), state: any, to: (function(any): void), href: (function(any): string)}}
 */
export let routes: AdminRoutes & {
    page: string;
    set: ((arg0: any) => void);
    state: any;
    to: ((arg0: any) => void);
    href: ((arg0: any) => string);
};
/**
 * App's primary reactive store maintaining global functionality for Admin UI
 * @remarks
 * @type {{
 *     adminLink(string): LinkInfo,
 *     init(): void,
 *     cachedFetch(string): Promise<unknown>,
 *     debug: boolean,
 *     copied: boolean,
 *     auth: AuthenticateResponse|null,
 *     readonly authProfileUrl: string|null,
 *     readonly displayName: null,
 *     readonly link: LinkInfo,
 *     readonly isAdmin: boolean,
 *     login(any): void,
 *     readonly adminUsers: AdminUsersInfo,
 *     readonly authRoles: string[],
 *     filter: string,
 *     baseUrl: string,
 *     logout(): void,
 *     readonly authLinks: LinkInfo[],
 *     SignIn(): Function,
 *     readonly adminLinks: LinkInfo[],
 *     api: ApiResult<AuthenticateResponse>|null,
 *     readonly authPermissions: *
 * }}
 */
export let store: {
    adminLink(string: any): LinkInfo;
    init(): void;
    cachedFetch(string: any): Promise<unknown>;
    debug: boolean;
    copied: boolean;
    auth: AuthenticateResponse | null;
    readonly authProfileUrl: string | null;
    readonly displayName: null;
    readonly link: LinkInfo;
    readonly isAdmin: boolean;
    login(any: any): void;
    readonly adminUsers: AdminUsersInfo;
    readonly authRoles: string[];
    filter: string;
    baseUrl: string;
    logout(): void;
    readonly authLinks: LinkInfo[];
    SignIn(): Function;
    readonly adminLinks: LinkInfo[];
    api: ApiResult<AuthenticateResponse> | null;
    readonly authPermissions: any;
};
/**
 * Route methods used in Admin UI
 */
export type AdminRoutes = {
    tab?: string;
    provider?: string;
    q?: string;
    page?: string;
    sort?: string;
    new?: string;
    edit?: string;
};

export let App:App;
