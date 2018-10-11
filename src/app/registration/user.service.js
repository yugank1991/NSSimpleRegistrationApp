"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = new Array({ id: 0, firstname: "First Name", lastname: "Last Name", organisation: "Organisation" });
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.getUser = function (name) {
        return this.users.filter(function (item) {
            return item.firstname.includes(name)
                || item.lastname.includes(name)
                || item.organisation.includes(name);
        })[0];
    };
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
