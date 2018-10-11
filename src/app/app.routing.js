"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var registration_component_1 = require("./registration/registration.component");
var user_list_component_1 = require("./user-list/user-list.component");
var routes = [
    { path: "", redirectTo: "/register", pathMatch: "full" },
    { path: "register", component: registration_component_1.RegistrationComponent },
    { path: "list", component: user_list_component_1.UserListComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
