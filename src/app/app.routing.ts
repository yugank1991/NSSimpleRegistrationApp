import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { ColorMixerWidgetComponent } from "./color-mixer-widget/color-mixer-widget.component";

const routes: Routes = [
    { path: "", redirectTo: "/register", pathMatch: "full" },
    { path: "register", component: RegistrationComponent },
    { path: "list", component: UserListComponent },
    { path: "color-mixer", component: ColorMixerWidgetComponent },
];


export const navigatableComponents = [
    RegistrationComponent,
    UserListComponent,
    ColorMixerWidgetComponent,
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }