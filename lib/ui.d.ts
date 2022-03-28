import * as admin from './admin'
import * as client from './client'
import * as explorer from './explorer'
import * as locode from './locode'
import * as shared from './shared'

declare module "ui/admin" {
    export = admin;
}
declare module "ui/client" {
    export = client;
}
declare module "ui/explorer" {
    export = explorer;
}
declare module "ui/locode" {
    export = locode;
}
declare module "ui/shared" {
    export = shared;
}
