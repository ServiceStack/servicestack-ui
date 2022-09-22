import { ApiResult, JsonServiceClient } from './client'
import { App, Meta, Forms, Routes, Breakpoints, Transition, MetadataOperationType, MetadataType, MetadataPropertyType, InputInfo, ThemeInfo, LinkInfo, AuthenticateResponse, AdminUsersInfo } from './shared'
import { AdminRoutes, AdminStore } from './shared';

/** Resolve Absolute URL for API Name
 * @param {string} op
 * @return {string} */
export function resolveApiUrl(op: string): string;
/** App's pre-configured `JsonServiceClient` instance for making typed API requests */
export let client: any;
export let Meta:Meta;
export let Forms:Forms;

/** @param {KeyboardEvent} e */
export function keydown(e: KeyboardEvent): void;
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
export namespace settings {
    namespace events {
        /** @param {string} op */
        function table(table: any): string;
        /** @param {string} op */
        function table(table: any): string;
        function lookup(table: any): string;
        function lookup(table: any): string;
        /** @param {string} table
         *  @param {string} name */
        function tableProp(table: string, name: string): string;
        /** @param {string} table
         *  @param {string} name */
        function tableProp(table: string, name: string): string;
    }
    /** @param {string} table */
    function table(table: string): any;
    /** @param {string} table */
    function table(table: string): any;
    /** @param {string} table */
    function lookup(table: string): any;
    /** @param {string} table */
    function lookup(table: string): any;
    /** @param {string} table
     *  @param {Function} fn */
    function saveTable(table: string, fn: Function): void;
    /** @param {string} table
     *  @param {Function} fn */
    function saveTable(table: string, fn: Function): void;
    /** @param {string} table
     *  @param {Function} fn */
    function saveLookup(table: string, fn: Function): void;
    /** @param {string} table
     *  @param {Function} fn */
    function saveLookup(table: string, fn: Function): void;
    /** @param {string} table
     *  @param {string} name */
    function tableProp(table: string, name: string): any;
    /** @param {string} table
     *  @param {string} name */
    function tableProp(table: string, name: string): any;
    /** @param {string} table
     *  @param {string} name
     *  @param {Function} fn */
    function saveTableProp(table: string, name: string, fn: Function): void;
    /** @param {string} table
     *  @param {string} name
     *  @param {Function} fn */
    function saveTableProp(table: string, name: string, fn: Function): void;
    /** @param {string} table */
    function hasPrefs(table: string): boolean;
    /** @param {string} table */
    function hasPrefs(table: string): boolean;
    /** @param {string} table */
    function clearPrefs(table: string): void;
    /** @param {string} table */
    function clearPrefs(table: string): void;
}
/**
 * App's primary reactive store maintaining global functionality for Admin UI
 * @remarks
 * @type {AdminStore}
 */
export let store: AdminStore;


/** API Explorer App instance */
export let App:App;
