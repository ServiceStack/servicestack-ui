import { ApiResult, JsonServiceClient } from './client'
import { App, Meta, Forms, Routes, Breakpoints, Transition, MetadataOperationType, MetadataType, MetadataPropertyType, InputInfo, ThemeInfo, LinkInfo, AuthenticateResponse, AdminUsersInfo } from './shared'
import { AdminRoutes, AdminStore } from './shared';

/** App's pre-configured `JsonServiceClient` instance for making typed API requests */
export let client: any;
export let Meta:Meta;
export let Forms:Forms;

/**
 * Execute tailwindui.com transition definition rules
 * @type {Transition}
 * */
export let transition: Transition;
/**
 * The App's reactive `routes` navigation component used for all App navigation
 * @remarks
 * @type {AdminRoutes & Routes}
 */
export let routes: AdminRoutes & Routes;
/**
 * App's primary reactive store maintaining global functionality for Admin UI
 * @remarks
 * @type {AdminStore}
 */
export let store: AdminStore;


/** API Explorer App instance */
export let App:App;
