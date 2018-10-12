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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDO0lBREE7UUFFWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxDQUMxRixDQUFDO0lBZU4sQ0FBQztJQWJHLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLElBQVk7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtZQUN6QixPQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzttQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO21CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFGbkMsQ0FFbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCw2QkFBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFqQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQWtCdkI7SUFBRCxrQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSB1c2VycyA9IG5ldyBBcnJheTxVc2VyPihcbiAgICAgICAgeyBpZDogMCwgZmlyc3RuYW1lOiBcIkZpcnN0IE5hbWVcIiwgbGFzdG5hbWU6IFwiTGFzdCBOYW1lXCIsIG9yZ2FuaXNhdGlvbjogXCJPcmdhbmlzYXRpb25cIiB9LFxuICAgICk7XG5cbiAgICBnZXRVc2VycygpOiBVc2VyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VycztcbiAgICB9XG5cbiAgICBnZXRVc2VyKG5hbWU6IHN0cmluZyk6IFVzZXIge1xuICAgICAgICByZXR1cm4gdGhpcy51c2Vycy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAgICAgaXRlbS5maXJzdG5hbWUuaW5jbHVkZXMobmFtZSlcbiAgICAgICAgICAgIHx8IGl0ZW0ubGFzdG5hbWUuaW5jbHVkZXMobmFtZSlcbiAgICAgICAgICAgIHx8IGl0ZW0ub3JnYW5pc2F0aW9uLmluY2x1ZGVzKG5hbWUpKVswXTtcbiAgICB9XG4gICAgYWRkVXNlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHRoaXMudXNlcnMucHVzaCh1c2VyKTtcbiAgICB9XG59XG4iXX0=