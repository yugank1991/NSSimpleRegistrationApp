"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../registration/user.service");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.userList = this.userService.getUsers();
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: "ns-user-list",
            styleUrls: ['./user-list.component.css'],
            moduleId: module.id,
            templateUrl: "./user-list.component.html",
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
