import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    { path: "", redirectTo: "/register", pathMatch: "full" },
    { path: "register", component: RegistrationComponent },
    { path: "list", component: UserListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }