import { ApiResult } from './client';

export interface IReturn<T> {
    createResponse(): T;
}
export interface IReturnVoid {
    createResponse(): void;
}
export interface IHasSessionId {
    sessionId: string;
}
export interface IHasBearerToken {
    bearerToken: string;
}
export interface IPost {
}
export interface IGet {
}
export interface IPut {
}
export interface IDelete {
}
export declare class AdminUserBase {
    userName: string;
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    password: string;
    profileUrl: string;
    userAuthProperties: {
        [index: string]: string;
    };
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AdminUserBase>);
}
export declare class QueryBase {
    skip?: number;
    take?: number;
    orderBy: string;
    orderByDesc: string;
    include: string;
    fields: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<QueryBase>);
}
export declare class QueryDb<T> extends QueryBase {
    constructor(init?: Partial<QueryDb<T>>);
}
export declare class CrudEvent {
    id: number;
    eventType: string;
    model: string;
    modelId: string;
    eventDate: string;
    rowsUpdated?: number;
    requestType: string;
    requestBody: string;
    userAuthId: string;
    userAuthName: string;
    remoteIp: string;
    urn: string;
    refId?: number;
    refIdStr: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<CrudEvent>);
}
export declare class AppInfo {
    baseUrl: string;
    serviceStackVersion: string;
    serviceName: string;
    serviceDescription: string;
    serviceIconUrl: string;
    brandUrl: string;
    brandImageUrl: string;
    textColor: string;
    linkColor: string;
    backgroundColor: string;
    backgroundImageUrl: string;
    iconUrl: string;
    jsTextCase: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AppInfo>);
}
export declare class ImageInfo {
    svg: string;
    uri: string;
    alt: string;
    cls: string;
    constructor(init?: Partial<ImageInfo>);
}
export declare class LinkInfo {
    id: string;
    href: string;
    label: string;
    icon: ImageInfo;
    constructor(init?: Partial<LinkInfo>);
}
export declare class ThemeInfo {
    form: string;
    modelIcon: ImageInfo;
    constructor(init?: Partial<ThemeInfo>);
}
export declare class ApiCss {
    form: string;
    fieldset: string;
    field: string;
    constructor(init?: Partial<ApiCss>);
}
export declare class AppTags {
    default: string;
    other: string;
    constructor(init?: Partial<AppTags>);
}
export declare class LocodeUi {
    css: ApiCss;
    tags: AppTags;
    maxFieldLength: number;
    maxNestedFields: number;
    maxNestedFieldLength: number;
    constructor(init?: Partial<LocodeUi>);
}
export declare class ExplorerUi {
    css: ApiCss;
    tags: AppTags;
    constructor(init?: Partial<ExplorerUi>);
}
export declare class FormatInfo {
    method: string;
    options: string;
    locale: string;
    constructor(init?: Partial<FormatInfo>);
}
export declare class ApiFormat {
    locale: string;
    assumeUtc: boolean;
    number: FormatInfo;
    date: FormatInfo;
    constructor(init?: Partial<ApiFormat>);
}
export declare class UiInfo {
    brandIcon: ImageInfo;
    hideTags: string[];
    modules: string[];
    alwaysHideTags: string[];
    adminLinks: LinkInfo[];
    theme: ThemeInfo;
    locode: LocodeUi;
    explorer: ExplorerUi;
    defaultFormats: ApiFormat;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UiInfo>);
}
export declare class ConfigInfo {
    debugMode?: boolean;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ConfigInfo>);
}
export declare class NavItem {
    label: string;
    href: string;
    exact?: boolean;
    id: string;
    className: string;
    iconClass: string;
    show: string;
    hide: string;
    children: NavItem[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<NavItem>);
}
export declare class FieldCss {
    field: string;
    input: string;
    label: string;
    constructor(init?: Partial<FieldCss>);
}
export declare class InputInfo {
    id: string;
    name: string;
    type: string;
    value: string;
    placeholder: string;
    help: string;
    label: string;
    title: string;
    size: string;
    pattern: string;
    readOnly?: boolean;
    required?: boolean;
    disabled?: boolean;
    autocomplete: string;
    autofocus: string;
    min: string;
    max: string;
    step?: number;
    minLength?: number;
    maxLength?: number;
    allowableValues: string[];
    allowableEntries: KeyValuePair<String, String>[];
    options: string;
    ignore?: boolean;
    css: FieldCss;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<InputInfo>);
}
export declare class MetaAuthProvider {
    name: string;
    label: string;
    type: string;
    navItem: NavItem;
    icon: ImageInfo;
    formLayout: InputInfo[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<MetaAuthProvider>);
}
export declare class AuthInfo {
    hasAuthSecret?: boolean;
    hasAuthRepository?: boolean;
    includesRoles?: boolean;
    includesOAuthTokens?: boolean;
    htmlRedirect: string;
    authProviders: MetaAuthProvider[];
    roleLinks: {
        [index: string]: LinkInfo[];
    };
    serviceRoutes: {
        [index: string]: string[];
    };
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AuthInfo>);
}
export declare class AutoQueryConvention {
    name: string;
    value: string;
    types: string;
    valueType: string;
    constructor(init?: Partial<AutoQueryConvention>);
}
export declare class AutoQueryInfo {
    maxLimit?: number;
    untypedQueries?: boolean;
    rawSqlFilters?: boolean;
    autoQueryViewer?: boolean;
    async?: boolean;
    orderByPrimaryKey?: boolean;
    crudEvents?: boolean;
    crudEventsServices?: boolean;
    accessRole: string;
    namedConnection: string;
    viewerConventions: AutoQueryConvention[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AutoQueryInfo>);
}
export declare class ScriptMethodType {
    name: string;
    paramNames: string[];
    paramTypes: string[];
    returnType: string;
    constructor(init?: Partial<ScriptMethodType>);
}
export declare class ValidationInfo {
    hasValidationSource?: boolean;
    hasValidationSourceAdmin?: boolean;
    serviceRoutes: {
        [index: string]: string[];
    };
    typeValidators: ScriptMethodType[];
    propertyValidators: ScriptMethodType[];
    accessRole: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ValidationInfo>);
}
export declare class SharpPagesInfo {
    apiPath: string;
    scriptAdminRole: string;
    metadataDebugAdminRole: string;
    metadataDebug?: boolean;
    spaFallback?: boolean;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<SharpPagesInfo>);
}
export declare class RequestLogsInfo {
    requiredRoles: string[];
    requestLogger: string;
    serviceRoutes: {
        [index: string]: string[];
    };
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<RequestLogsInfo>);
}
export declare class FilesUploadLocation {
    name: string;
    readAccessRole: string;
    writeAccessRole: string;
    allowExtensions: string[];
    allowOperations: string;
    maxFileCount?: number;
    minFileBytes?: number;
    maxFileBytes?: number;
    constructor(init?: Partial<FilesUploadLocation>);
}
export declare class FilesUploadInfo {
    basePath: string;
    locations: FilesUploadLocation[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<FilesUploadInfo>);
}
export declare class MetadataTypeName {
    name: string;
    namespace: string;
    genericArgs: string[];
    constructor(init?: Partial<MetadataTypeName>);
}
export declare class MetadataDataContract {
    name: string;
    namespace: string;
    constructor(init?: Partial<MetadataDataContract>);
}
export declare class MetadataDataMember {
    name: string;
    order?: number;
    isRequired?: boolean;
    emitDefaultValue?: boolean;
    constructor(init?: Partial<MetadataDataMember>);
}
export declare class MetadataAttribute {
    name: string;
    constructorArgs: MetadataPropertyType[];
    args: MetadataPropertyType[];
    constructor(init?: Partial<MetadataAttribute>);
}
export declare class RefInfo {
    model: string;
    selfId: string;
    refId: string;
    refLabel: string;
    constructor(init?: Partial<RefInfo>);
}
export declare class MetadataPropertyType {
    name: string;
    type: string;
    namespace: string;
    isValueType?: boolean;
    isEnum?: boolean;
    isPrimaryKey?: boolean;
    genericArgs: string[];
    value: string;
    description: string;
    dataMember: MetadataDataMember;
    readOnly?: boolean;
    paramType: string;
    displayType: string;
    isRequired?: boolean;
    allowableValues: string[];
    allowableMin?: number;
    allowableMax?: number;
    attributes: MetadataAttribute[];
    input: InputInfo;
    format: FormatInfo;
    ref: RefInfo;
    constructor(init?: Partial<MetadataPropertyType>);
}
export declare class MetadataType {
    name: string;
    namespace: string;
    genericArgs: string[];
    inherits: MetadataTypeName;
    implements: MetadataTypeName[];
    displayType: string;
    description: string;
    notes: string;
    icon: ImageInfo;
    isNested?: boolean;
    isEnum?: boolean;
    isEnumInt?: boolean;
    isInterface?: boolean;
    isAbstract?: boolean;
    dataContract: MetadataDataContract;
    properties: MetadataPropertyType[];
    attributes: MetadataAttribute[];
    innerTypes: MetadataTypeName[];
    enumNames: string[];
    enumValues: string[];
    enumMemberValues: string[];
    enumDescriptions: string[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<MetadataType>);
}
export declare class MediaRule {
    size: string;
    rule: string;
    applyTo: string[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<MediaRule>);
}
export declare class AdminUsersInfo {
    accessRole: string;
    enabled: string[];
    userAuth: MetadataType;
    allRoles: string[];
    allPermissions: string[];
    queryUserAuthProperties: string[];
    queryMediaRules: MediaRule[];
    formLayout: InputInfo[];
    css: ApiCss;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AdminUsersInfo>);
}
export declare class PluginInfo {
    loaded: string[];
    auth: AuthInfo;
    autoQuery: AutoQueryInfo;
    validation: ValidationInfo;
    sharpPages: SharpPagesInfo;
    requestLogs: RequestLogsInfo;
    filesUpload: FilesUploadInfo;
    adminUsers: AdminUsersInfo;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<PluginInfo>);
}
export declare class CustomPluginInfo {
    accessRole: string;
    serviceRoutes: {
        [index: string]: string[];
    };
    enabled: string[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<CustomPluginInfo>);
}
export declare class MetadataTypesConfig {
    baseUrl: string;
    usePath: string;
    makePartial: boolean;
    makeVirtual: boolean;
    makeInternal: boolean;
    baseClass: string;
    package: string;
    addReturnMarker: boolean;
    addDescriptionAsComments: boolean;
    addDataContractAttributes: boolean;
    addIndexesToDataMembers: boolean;
    addGeneratedCodeAttributes: boolean;
    addImplicitVersion?: number;
    addResponseStatus: boolean;
    addServiceStackTypes: boolean;
    addModelExtensions: boolean;
    addPropertyAccessors: boolean;
    excludeGenericBaseTypes: boolean;
    settersReturnThis: boolean;
    makePropertiesOptional: boolean;
    exportAsTypes: boolean;
    excludeImplementedInterfaces: boolean;
    addDefaultXmlNamespace: string;
    makeDataContractsExtensible: boolean;
    initializeCollections: boolean;
    addNamespaces: string[];
    defaultNamespaces: string[];
    defaultImports: string[];
    includeTypes: string[];
    excludeTypes: string[];
    treatTypesAsStrings: string[];
    exportValueTypes: boolean;
    globalNamespace: string;
    excludeNamespace: boolean;
    dataClass: string;
    dataClassJson: string;
    ignoreTypes: string[];
    exportTypes: string[];
    exportAttributes: string[];
    ignoreTypesInNamespaces: string[];
    constructor(init?: Partial<MetadataTypesConfig>);
}
export declare class MetadataRoute {
    path: string;
    verbs: string;
    notes: string;
    summary: string;
    constructor(init?: Partial<MetadataRoute>);
}
export declare class ApiUiInfo {
    locodeCss: ApiCss;
    explorerCss: ApiCss;
    formLayout: InputInfo[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ApiUiInfo>);
}
export declare class MetadataOperationType {
    request: MetadataType;
    response: MetadataType;
    actions: string[];
    returnsVoid?: boolean;
    method: string;
    returnType: MetadataTypeName;
    routes: MetadataRoute[];
    dataModel: MetadataTypeName;
    viewModel: MetadataTypeName;
    requiresAuth?: boolean;
    requiredRoles: string[];
    requiresAnyRole: string[];
    requiredPermissions: string[];
    requiresAnyPermission: string[];
    tags: string[];
    ui: ApiUiInfo;
    constructor(init?: Partial<MetadataOperationType>);
}
export declare class MetadataTypes {
    config: MetadataTypesConfig;
    namespaces: string[];
    types: MetadataType[];
    operations: MetadataOperationType[];
    constructor(init?: Partial<MetadataTypes>);
}
export declare class ResponseError {
    errorCode: string;
    fieldName: string;
    message: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseError>);
}
export declare class ResponseStatus {
    errorCode: string;
    message: string;
    stackTrace: string;
    errors: ResponseError[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<ResponseStatus>);
}
export declare class KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
    constructor(init?: Partial<KeyValuePair<TKey, TValue>>);
}
export declare class AppMetadata {
    app: AppInfo;
    ui: UiInfo;
    config: ConfigInfo;
    contentTypeFormats: {
        [index: string]: string;
    };
    httpHandlers: {
        [index: string]: string;
    };
    plugins: PluginInfo;
    customPlugins: {
        [index: string]: CustomPluginInfo;
    };
    api: MetadataTypes;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AppMetadata>);
}
export declare class AuthenticateResponse implements IHasSessionId, IHasBearerToken {
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    referrerUrl: string;
    bearerToken: string;
    refreshToken: string;
    profileUrl: string;
    roles: string[];
    permissions: string[];
    responseStatus: ResponseStatus;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AuthenticateResponse>);
}
export declare class AssignRolesResponse {
    allRoles: string[];
    allPermissions: string[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AssignRolesResponse>);
}
export declare class UnAssignRolesResponse {
    allRoles: string[];
    allPermissions: string[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<UnAssignRolesResponse>);
}
export declare class AdminUserResponse {
    id: string;
    result: {
        [index: string]: Object;
    };
    details: {
        [index: string]: Object;
    }[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AdminUserResponse>);
}
export declare class AdminUsersResponse {
    results: {
        [index: string]: Object;
    }[];
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AdminUsersResponse>);
}
export declare class AdminDeleteUserResponse {
    id: string;
    responseStatus: ResponseStatus;
    constructor(init?: Partial<AdminDeleteUserResponse>);
}
export declare class QueryResponse<T> {
    offset: number;
    total: number;
    results: T[];
    meta: {
        [index: string]: string;
    };
    responseStatus: ResponseStatus;
    constructor(init?: Partial<QueryResponse<T>>);
}
export declare class MetadataApp implements IReturn<AppMetadata> {
    view: string;
    constructor(init?: Partial<MetadataApp>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AppMetadata;
}
/**
* Sign In
*/
export declare class Authenticate implements IReturn<AuthenticateResponse>, IPost {
    /**
    * AuthProvider, e.g. credentials
    */
    provider: string;
    state: string;
    oauth_token: string;
    oauth_verifier: string;
    userName: string;
    password: string;
    rememberMe?: boolean;
    errorView: string;
    nonce: string;
    uri: string;
    response: string;
    qop: string;
    nc: string;
    cnonce: string;
    accessToken: string;
    accessTokenSecret: string;
    scope: string;
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<Authenticate>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AuthenticateResponse;
}
export declare class AssignRoles implements IReturn<AssignRolesResponse>, IPost {
    userName: string;
    permissions: string[];
    roles: string[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<AssignRoles>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AssignRolesResponse;
}
export declare class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost {
    userName: string;
    permissions: string[];
    roles: string[];
    meta: {
        [index: string]: string;
    };
    constructor(init?: Partial<UnAssignRoles>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): UnAssignRolesResponse;
}
export declare class AdminGetUser implements IReturn<AdminUserResponse>, IGet {
    id: string;
    constructor(init?: Partial<AdminGetUser>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AdminUserResponse;
}
export declare class AdminQueryUsers implements IReturn<AdminUsersResponse>, IGet {
    query: string;
    orderBy: string;
    skip?: number;
    take?: number;
    constructor(init?: Partial<AdminQueryUsers>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AdminUsersResponse;
}
export declare class AdminCreateUser extends AdminUserBase implements IReturn<AdminUserResponse>, IPost {
    roles: string[];
    permissions: string[];
    constructor(init?: Partial<AdminCreateUser>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AdminUserResponse;
}
export declare class AdminUpdateUser extends AdminUserBase implements IReturn<AdminUserResponse>, IPut {
    id: string;
    lockUser?: boolean;
    unlockUser?: boolean;
    addRoles: string[];
    removeRoles: string[];
    addPermissions: string[];
    removePermissions: string[];
    constructor(init?: Partial<AdminUpdateUser>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AdminUserResponse;
}
export declare class AdminDeleteUser implements IReturn<AdminDeleteUserResponse>, IDelete {
    id: string;
    constructor(init?: Partial<AdminDeleteUser>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): AdminDeleteUserResponse;
}
export declare class GetCrudEvents extends QueryDb<CrudEvent> implements IReturn<QueryResponse<CrudEvent>> {
    authSecret: string;
    model: string;
    modelId: string;
    constructor(init?: Partial<GetCrudEvents>);
    getTypeName(): string;
    getMethod(): string;
    createResponse(): QueryResponse<CrudEvent>;
}
/**
 * Server Metadata containing App capabilities and APIs used to dynamically render the UI
 */
export declare let Server: AppMetadata;
/** Tailwind Responsive Breakpoints
 * { 2xl:1536, xl:1280, lg:1024, md:768, sm:640 } */
export declare type Breakpoints = Record<'2xl' | 'xl' | 'lg' | 'md' | 'sm', boolean>;
/** Return self or reactive proxy of self */
export declare type Identity = <T>(args: T) => T;
/** Return self or reactive proxy of self */
export declare type MapFn = <T, V>(o: T, f: (o: T) => V) => V | null;
/** Invoke a Tailwind Definition Rule */
export declare type Transition = (prop: string, enter: boolean) => boolean;
/** Publish/Subscribe to App Events */
export declare type Bus = {
    subscribe: (type: string, callback: Function) => {
        unsubscribe: () => void;
    };
    publish: (eventType: string, arg: any) => void;
};
/** High-level API encapsulating client PetiteVue App */
export declare type App = {
    /** Publish/Subscript to App events */
    events: Bus;
    /** PetiteVue App instance */
    readonly petite: any;
    /** Register map of PetiteVue components using key as Components Name */
    components: (components: Record<string, Function | Object>) => void;
    /** Register single component
     * @param {string} name
     * @param {string|Function} component Auto Component template HTML or Component Function */
    component: (name: string, component: string | Function) => void;
    /** Register Auto Component with $template contents
     * @param {string} name
     * @param {string} $template */
    template: (name: string, $template: string) => void;
    /** Register map of Auto Components using key as Components Name */
    templates: (templates: Record<string, string>) => void;
    /** Register PetiteVue directive */
    directive: (name: string, fn: Function) => void;
    /** Register (non-reactive) global App state property */
    prop: (name: string, val: any) => void;
    /** Register multiple (non-reactive) global App state props */
    props: (props: Record<string, any>) => void;
    /** Build PetiteVue App instance */
    build: (args: Record<string, any>) => any;
    /** Dynamically load external script src */
    import: (arg0: string) => Promise<any>;
    /** Register callback to invoke after App has started */
    onStart: (f: Function) => void;
    /** Start App instance */
    start: () => void;
    /** App function for unsubscribing 'sub' subscription in Component instance */
    unsubscribe: () => void;
    /** PetiteVue.createApp - create PetiteVue instance */
    createApp: (args: any) => any;
    /** PetiteVue.nextTick - register callback to be fired afterA next async loop */
    nextTick: (f: Function) => void;
    /** PetiteVue.reactive - create a reactive store */
    reactive: Identity;
};
/** Utility class for managing Forms UI and behavior */
export declare type Forms = {
    getId: (type: MetadataType, row: any) => any;
    getType: (typeRef: string | {
        namespace: string;
        name: string;
    }) => MetadataType;
    inputId: (input: {
        id: string;
    }) => string;
    colClass: (fields: number) => string;
    inputProp: (prop: MetadataPropertyType) => {
        id: string;
        type: string;
        'data-type': string;
    };
    getPrimaryKey: (type: MetadataType) => MetadataPropertyType | null;
    typeProperties: (type: MetadataType) => MetadataPropertyType[];
    relativeTime: (val: string | number | Date, rtf?: Intl.RelativeTimeFormat) => string;
    relativeTimeFromMs: (elapsedMs: number, rtf?: Intl.RelativeTimeFormat) => string;
    relativeTimeFromDate: (d: Date, from?: Date) => string;
    Lookup: {};
    lookupLabel: (model: any, id: any, label: string) => any;
    refInfo: (row: any, prop: MetadataPropertyType, props: MetadataPropertyType[]) => {
        href: {
            op: string;
            skip: any;
            edit: any;
            new: any;
            $qs: {
                [x: string]: any;
            };
        };
        icon: any;
        html: any;
    };
    fetchLookupValues: (results: any[], props: MetadataPropertyType[], refreshFn: () => void) => void;
    theme: ThemeInfo;
    formClass: string;
    gridClass: string;
    opTitle(op: MetadataOperationType): string;
    forAutoForm(type: MetadataType): (field: any) => void;
    forCreate(type: MetadataType): (field: any) => void;
    forEdit(type: MetadataType): (field: any) => void;
    getFormProp(id: any, type: any): MetadataPropertyType;
    getGridInputs(formLayout: InputInfo[], f?: (args: {
        id: string;
        input: InputInfo;
        rowClass: string;
    }) => void): {
        id: string;
        input: InputInfo;
        rowClass: string;
    }[];
    getGridInput(input: InputInfo, f?: (args: {
        id: string;
        input: InputInfo;
        rowClass: string;
    }) => void): {
        id: string;
        input: InputInfo;
        rowClass: string;
    };
    getFieldError(error: any, id: any): string | null;
    kvpValues(input: any): {
        key: any;
        value: any;
    }[];
    useLabel(input: any): string | null;
    usePlaceholder(input: any): string | null;
    isRequired(input: any): boolean;
    resolveFormLayout(op: MetadataOperationType): InputInfo[];
    formValues(form: any): Record<string, any>;
    formData(form: any, op: MetadataOperationType): FormData;
    groupTypes(allTypes: any): any[];
    complexProp(prop: any): boolean;
    supportsProp(prop: any): boolean;
    populateModel(model: any, formLayout: any): Record<string, any>;
    apiValue(o: any): any;
    format(o: any, prop: MetadataPropertyType): any;
};
/** Generic functionality around AppMetadata */
export declare type Meta = {
    /** Global Cache */
    CACHE: {};
    /** HTTP Errors specially handled by Locode */
    HttpErrors: Record<number, string>;
    /** Map of Request DTO names to `MetadataOperationType` */
    OpsMap: Record<string, MetadataOperationType>;
    /** Map of DTO names to `MetadataType` */
    TypesMap: Record<string, MetadataType>;
    /** Map of DTO namespace + names to `MetadataType` */
    FullTypesMap: Record<string, MetadataType>;
    /** Find `MetadataOperationType` by API name */
    getOp: (opName: string) => MetadataOperationType;
    /** Find `MetadataType` by DTO name */
    getType: (typeRef: ({
        namespace?: string;
        name: string;
    } | string)) => null | MetadataType;
    /** Check whether a Type is an Enum */
    isEnum: (type: string) => boolean;
    /** Get Enum Values of an Enum Type */
    enumValues: (type: string) => {
        key: string;
        value: string;
    }[];
    /** Get API Icon */
    getIcon: (args: ({
        op?: MetadataOperationType;
        type?: MetadataType;
    })) => {
        svg: string;
    };
};
/** Reactive store to manage page navigation state and sync with history.pushState */
export declare type Routes = {
    /** The arg name that's used to identify the page name */
    page: string;
    /** Populate Route state */
    set: (args: Record<string, any>) => void;
    /** Snapshot of the current route state */
    state: Record<string, any>;
    /** Navigate to new route state */
    to: (args: Record<string, any>) => void;
    /** Return URL of current route state */
    href: (args: Record<string, any>) => string;
};
/** APIs for resolving SVG icons and data URIs for different File Types */
interface Files {
    /** Get Icon SVG for .ext */
    extSvg(ext: string): string | null;
    /** Get Icon src for .ext */
    extSrc(ext: string): string | null;
    /** Return file extension (without '.; prefix) of path or URI */
    getExt(path: string): string | null;
    /** Encode SVG for embedding in Data URI */
    encodeSvg(s: string): string;
    /** Return whether path is a URI to a previewable image */
    canPreview(path: string): boolean;
    /** Return file name part of URI or file path */
    getFileName(path: string): string | null;
    /** Format bytes into human-readable file size */
    formatBytes(bytes: number, d?: number): string;
    /** Get the Icon src for a file path or URI, previewable resources will return self, otherwise returns SVG URI of .ext */
    filePathUri(path: string): string | null;
    /** Convert SVG to Data URI */
    svgToDataUri(svg: string): string;
    /** Return Image URI of INPUT file attachments */
    fileImageUri(file: File | MediaSource): string;
    /** Clear all remaining Image URIs of INPUT file attachments */
    flush(): void;
}
export declare let Files: Files;
/** APIs to inspect .NET Types */
interface Types {
    /** Return well-known C# alias for its .NET Type name */
    alias(type: string): any;
    /** Return underlying Type if nullable */
    unwrap(type: string): string;
    /** Resolve well-known C# Type Name from Type Ref */
    typeName(metaType: {
        name: string;
        genericArgs: string[];
    }): string;
    /** Resolve well-known C# Type Name from Name and Generic Args */
    typeName2(name: string, genericArgs: string[]): string;
    /** Return true if .NET Type is numeric */
    isNumber(type: string): boolean;
    /** Return true if .NET Type is a string */
    isString(type: string): boolean;
    /** Return true if .NET Type is a collection */
    isArray(type: string): boolean;
    /** Return true if typeof is a scalar value (string|number|symbol|boolean) */
    isPrimitive(type: string): boolean;
    /** Return value suitable for human display */
    formatValue(type: string, value: any): any;
    /** Create a unique key string from a Type Ref */
    key(typeRef: {
        namespace: string;
        name: string;
    }): string | null;
    /** Return true if both Type Refs are equivalent */
    equals(a: {
        namespace: string;
        name: string;
    }, b: {
        namespace: string;
        name: string;
    }): boolean;
    /** Return true if Property has named Attribute */
    propHasAttr(p: MetadataPropertyType, attr: string): boolean;
    /** Return named property on Type (case-insensitive) */
    getProp(type: MetadataType, name: string): MetadataPropertyType;
    /** Return all properties of a Type, inc. base class properties  */
    typeProperties(TypesMap: any, type: any): MetadataPropertyType[];
}
export declare let Types: Types;
/** Custom route params used in API Explorer */
export declare type ExplorerRoutes = {
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
/** Route methods used in API Explorer */
export declare type ExplorerRoutesExtend = {
    queryHref(): string;
};
/** App's primary reactive store maintaining global functionality for Admin UI */
export declare type ExplorerStore = {
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
/** Method arguments of custom Doc Components */
export interface DocComponentArgs {
    store: ExplorerStore;
    routes: ExplorerRoutes & Routes;
    breakpoints: Breakpoints;
    op: () => MetadataOperationType;
}
/** Method Signature of custom Doc Components */
export declare type DocComponent = (args: DocComponentArgs) => Record<string, any>;
/** Custom route params used in Locode */
export declare type LocodeRoutes = {
    op?: string;
    tab?: string;
    provider?: string;
    preview?: string;
    body?: string;
    doc?: string;
    skip?: string;
    new?: string;
    edit?: string;
};
/** Route methods used in Locode */
export declare type LocodeRoutesExtend = {
    onEditChange(any: any): void;
    update(): void;
    uiHref(any: any): string;
};
export declare type LocodeStore = {
    cachedFetch: (url: string) => Promise<string>;
    copied: boolean;
    sideNav: {
        expanded: boolean;
        operations: MetadataOperationType[];
        tag: string;
    }[];
    auth: AuthenticateResponse;
    readonly displayName: string | null;
    login: (args: any, $on?: Function) => void;
    detailSrcResult: any;
    logout: () => void;
    readonly isServiceStackType: boolean;
    readonly opViewModel: string;
    api: ApiResult<AuthenticateResponse>;
    modalLookup: any | null;
    init: () => void;
    readonly op: MetadataOperationType;
    debug: boolean;
    readonly filteredSideNav: {
        tag: string;
        operations: MetadataOperationType[];
        expanded: boolean;
    }[];
    readonly authProfileUrl: string | null;
    previewResult: string | null;
    readonly opDesc: string;
    toggle: (tag: string) => void;
    readonly opDataModel: string;
    readonly authRoles: string[];
    filter: string;
    baseUrl: string;
    readonly authLinks: LinkInfo[];
    readonly opName: string;
    SignIn: (opt: any) => Function;
    hasRole: (role: string) => boolean;
    readonly authPermissions: string[];
    readonly useLang: string;
    invalidAccess: () => string | null;
};
/** Manage users query & filter preferences in the Users browsers localStorage */
export declare type LocodeSettings = {
    op: (op: string) => any;
    lookup: (op: string) => any;
    saveOp: (op: string, fn: Function) => void;
    hasPrefs: (op: string) => boolean;
    saveOpProp: (op: string, name: string, fn: Function) => void;
    saveLookup: (op: string, fn: Function) => void;
    events: {
        op: (op: string) => string;
        lookup: (op: string) => string;
        opProp: (op: string, name: string) => string;
    };
    opProp: (op: string, name: string) => any;
    clearPrefs: (op: string) => void;
};
/** Create a new state for an API that encapsulates its invocation and execution */
export declare type ApiState = {
    op: MetadataOperationType;
    client: any;
    apiState: ApiState;
    formLayout: any;
    createModel: (args: any) => any;
    apiLoading: boolean;
    apiResult: any;
    readonly api: any;
    createRequest: (args: any) => any;
    model: any;
    title: string | null;
    readonly error: ResponseStatus;
    readonly errorSummary: string | null;
    fieldError(id: string): string | null;
    field(propName: string, f?: (args: {
        id: string;
        input: InputInfo;
        rowClass: string;
    }) => void): any;
    apiSend(dtoArgs: Record<string, any>, queryArgs?: Record<string, any>): any;
    apiForm(formData: FormData, queryArgs?: Record<string, any>): any;
};
/** All CRUD API States available for this operation */
export declare type CrudApisState = {
    opQuery: MetadataOperationType | null;
    opCreate: MetadataOperationType | null;
    opPatch: MetadataOperationType | null;
    opUpdate: MetadataOperationType | null;
    opDelete: MetadataOperationType | null;
    apiQuery: ApiState | null;
    apiCreate: ApiState | null;
    apiPatch: ApiState | null;
    apiUpdate: ApiState | null;
    apiDelete: ApiState | null;
};
export declare type CrudApisStateProp = CrudApisState & {
    prop: MetadataPropertyType;
    opName: string;
    dataModel: MetadataType;
    viewModel: MetadataType;
    viewModelColumns: MetadataPropertyType[];
    callback: Function;
    createPrefs: () => any;
    selectedColumns: (prefs: any) => MetadataPropertyType[];
};
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
export declare type CreateComponent = (args: CreateComponentArgs) => Record<string, any>;
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
export declare type EditComponent = (args: EditComponentArgs) => Record<string, any>;
/** Route methods used in Admin UI */
export declare type AdminRoutes = {
    tab?: string;
    provider?: string;
    q?: string;
    page?: string;
    sort?: string;
    new?: string;
    edit?: string;
};
/** App's primary reactive store maintaining global functionality for Admin UI */
export declare type AdminStore = {
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
 * Alt solution to optional chaining by only executing fn accessor if object is not null
 * @example
 * let a = b()?.c // equivalent to:
 * let a = map(b(), x => x.c)
 * @template T,V
 * @param {T} o
 * @param {(T) => V} f
 * @return {V|null}
 */
export function map<T, V>(o: T, f: (T: any) => V): V;
/** Set class on document.body if truthy otherwise set `no{class}`
 * @param {{[key:string]:string|any}} obj */
export function setBodyClass(obj: {
    [key: string]: any;
}): void;
/** Get CSS style property value
 * @param {string} name */
export function styleProperty(name: string): string;
export function setStyleProperty(props: any): void;
/** Tailwind CSS classes for standard Input controls
 * @param {boolean} [invalid=false]
 * @param {string} [cls] */
export function inputClass(invalid?: boolean, cls?: string): string;
/** Set the browser's page fav icon by icon
 * @param {ImageInfo} icon
 * @param {string} defaultSrc */
export function setFavIcon(icon: ImageInfo, defaultSrc: string): void;
/** Set the browser's page fav icon by src
 * @param {string} src */
export function setFavIconSrc(src: string): void;
/**
 * High-level API around highlight.js to add syntax highlighting to language source cde
 * @param {string} src
 * @param {string} language
 * @return {string}
 */
export function highlight(src: string, language: string): string;
/** Create Request DTO from MetadataOperationType and map of args
 * @param {MetadataOperationType} op
 * @param {*?} args */
export function createRequest(op: MetadataOperationType, args: any | null): any;
/** Create Request DTO from API Name and map of args
 * @param {string} name
 * @param {*} obj */
export function createDto(name: string, obj: any): any;
/** Check if array is not null or empty
 * @param {any[]|null} arr */
export function hasItems(arr: any[] | null): boolean;
/** Check if Auth Session has access to API
 * @param {MetadataOperationType?} op
 * @param {AuthenticateResponse|null} auth */
export function canAccess(op: MetadataOperationType | null, auth: AuthenticateResponse | null): boolean;
/** Return error message if Auth Session cannot access API
 * @param {MetadataOperationType} op
 * @param {{roles:string[],permissions:string[]}} auth */
export function invalidAccessMessage(op: MetadataOperationType, auth: {
    roles: string[];
    permissions: string[];
}): string;
/** Parse cookie string into Map
 * @param {string} str
 * @return {Record<string,string>} */
export function parseCookie(str: string): Record<string, string>;
/** High-level API to invoke an API Request by Request DTO and optional queryString args
 * @param {function} createClient
 * @param {*} requestDto
 * @param {*} [queryArgs] */
export function apiSend(createClient: Function, requestDto: any, queryArgs?: any): any;
/** High-level API to invoke an API Request by Request DTO, FormData and optional queryString args
 * @param {function} createClient
 * @param {*} requestDto
 * @param {FormData} formData
 * @param {*} [queryArgs] */
export function apiForm(createClient: Function, requestDto: any, formData: FormData, queryArgs?: any): any;
/** Utility to copy text to OS clipboard
 * @param {string} text
 * @param {number} [timeout=3000] */
export function copy(text: string, timeout?: number): void;
export class copy {
    /** Utility to copy text to OS clipboard
     * @param {string} text
     * @param {number} [timeout=3000] */
    constructor(text: string, timeout?: number);
    copied: boolean;
}
/** Render ImageInfo into HTML IMG
 * @param {ImageInfo} icon
 * @param {*} [opt] */
export function iconHtml(icon: ImageInfo, opt?: any): string;
/** Sort & group operations operations in logical order
 * @param {MetadataOperationType[]} ops
 * @return {MetadataOperationType[]} */
export function sortOps(ops: MetadataOperationType[]): MetadataOperationType[];
/**
 * Return absolute URL from relative URL
 * @param url
 * @return {*|string}
 */
export function toAppUrl(url: any): any | string;
/**: format methods */
/** Format number into USD currency
 * @param {number} val */
export function currency(val: number): string;
/** Format bytes into human-readable file size
 * @param {number} val */
export function bytes(val: number): string;
/** HTML Tag builder
 * @param {string} tag
 * @param {string} [child]
 * @param {*} [attrs] */
export function htmlTag(tag: string, child?: string, attrs?: any): string;
/** Create formatted HTML A URL links
 * @param {string} href
 * @param {*} [opt] */
export function link(href: string, opt?: any): string;
/** Create formatted HTML A mailto: links
 * @param {string} email
 * @param {*} [opt] */
export function linkMailTo(email: string, opt?: any): string;
/** Create formatted HTML A tel: links
 * @param {string} tel
 * @param {*} [opt] */
export function linkTel(tel: string, opt?: any): string;
/** Create HTML IMG Icon from URL
 * @param {string} url */
export function icon(url: string): string;
/** Create rounded HTML IMG Icon from URL
 * @param {string} url */
export function iconRounded(url: string): string;
/** Create HTML Link for file attachment
 * @param {string} url */
export function attachment(url: string): string;
/** Handle IMG onerror to populate fallback icon
 * @param {HTMLImageElement} img
 * @param {string} [fallbackSrc] */
export function iconOnError(img: HTMLImageElement, fallbackSrc?: string): void;
/** Create icon with fallback
 * @param {string} src
 * @param {string} [fallbackSrc] */
export function iconFallbackSrc(src: string, fallbackSrc?: string): string;
/** marker fn, special-cased to hide from query results
 * @param o
 * @return {string}
 */
export function hidden(o: any): string;
/**
 * API around CRUD APIs
 * @type {{Delete: string, AnyWrite: string[], isCreate: (function(*): any), Create: string, isDelete: (function(*): any), AnyRead: string[], isQuery: (function(*): boolean|null), isCrud: (function(*): boolean|null), Update: string, Patch: string, isUpdate: (function(*): any), isPatch: (function(*): any)}}
 */
export const Crud: {
    Delete: string;
    AnyWrite: string[];
    isCreate: ((arg0: any) => any);
    Create: string;
    isDelete: ((arg0: any) => any);
    AnyRead: string[];
    isQuery: ((arg0: any) => boolean | null);
    isCrud: ((arg0: any) => boolean | null);
    Update: string;
    Patch: string;
    isUpdate: ((arg0: any) => any);
    isPatch: ((arg0: any) => any);
};
export function isAdminAuth(session?: {
    roles: string[];
}): boolean;

/** App to register and build a PetiteVueApp
 * @param {{createApp:(initialData?:any) => any,nextTick:(fn:Function) => void,reactive:Identity}} PetiteVue
 * @returns {App}
 */
export function createApp(PetiteVue: {
    createApp: (initialData?: any) => any;
    nextTick: (fn: Function) => void;
    reactive: Identity;
}): App;

/** @param {Meta} Meta
 *  @param {ApiCss} css
 *  @param {UiInfo} ui
 *  @return {Forms} */
export function createForms(Meta: Meta, css: ApiCss, ui: UiInfo): Forms;
/**
 * Useful generic collections around Metadata APIs
 * @param app
 * @param appName
 */
export function appObjects(app: any, appName: any): {
    CACHE: {};
    HttpErrors: Record<number, string>;
    OpsMap: Record<string, MetadataOperationType>;
    TypesMap: Record<string, MetadataType>;
    FullTypesMap: Record<string, MetadataType>;
};
/**
 * Generic functionality around AppMetadata
 * @remarks
 * @param {AppMetadata} app
 * @param {string} appName
 * @return {Meta}
 */
export function createMeta(app: AppMetadata, appName: string): Meta;

/**
 * Returns a reactive store that maintains different resolution states:
 *
 * @remarks
 * Events:
 *   breakpoint:change - the browser width changed breakpoints
 *
 * @defaultValue { 2xl:1536, xl:1280, lg:1024, md:768, sm:640 }
 *
 * @example
 * E.g. at 1200px: { 2xl:false, xl:false, lg:true, md:true, sm:true }
 *
 * @param {App} App
 * @param {{handlers: {change({previous: *, current: *}): void}}} options
 * @returns {Breakpoints & {previous:Breakpoints,current:Breakpoints,snap:()=>void}}
 */
export function useBreakpoints(App: App, options: any): Breakpoints & {
    previous: Breakpoints;
    current: Breakpoints;
    snap: () => void;
};

/**
 * @template {Record<<string,Function>} T
 * Maintain page route state:
 *  - /{pageKey}?{queryKeys}
 * @remarks
 * Events:
 *   route:init - loaded from URL
 *   route:to   - navigated by to()
 *   route:nav  - fired for both
 * @param {App} App
 * @param {{page:string,queryKeys:string[],handlers?:{init?:(args:any)=>void,to?:(args:any)=>void,nav?:(args:any)=>void},extend?:T}} opt
 * @return {T & Routes}
 */
export function usePageRoutes<T extends any>(App: App, { page, queryKeys, handlers, extend }: {
    page: string;
    queryKeys: string[];
    handlers?: {
        init?: (args: any) => void;
        to?: (args: any) => void;
        nav?: (args: any) => void;
    };
    extend?: T;
}): T & Routes;

/**
 * Implements https://tailwindui.com transition states by encoding in data-transition attr
 * @example
 * data-transition="{
 *   entering: { cls:'transition ease-in-out duration-300 transform', from:'-translate-x-full', to:'translate-x-0'},
 *   leaving:  { cls:'transition ease-in-out duration-300 transform', from:'translate-x-0',     to:'-translate-x-full' }
 * }" data-transition-for="sidebar"
 * @param {App} App
 * @param {Record<string,boolean>} transitions
 * @return {Transition}
 */
export function useTransitions(App: App, transitions: Record<string, boolean>): Transition;

