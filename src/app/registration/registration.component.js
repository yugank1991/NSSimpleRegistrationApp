"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var user_service_1 = require("./user.service");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, userService, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.error = [];
        this.registrationForm = this.formBuilder.group({
            firstname: ["", forms_1.Validators.required],
            lastname: ["", forms_1.Validators.required],
            organisation: ["", forms_1.Validators.required]
        });
        this.clearErrors();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.save = function () {
        var obj = this.registrationForm.value;
        if (obj['firstname'].length === 0) {
            this.error[0] = true;
        }
        else if (obj['lastname'].length === 0) {
            this.error[1] = true;
        }
        else if (obj['organisation'].length === 0) {
            this.error[2] = true;
        }
        else {
            obj['id'] = this.userService.getUsers().length;
            this.userService.addUser(obj);
            this.registrationForm.reset();
        }
    };
    RegistrationComponent.prototype.clearErrors = function () {
        this.error[0] = false;
        this.error[1] = false;
        this.error[2] = false;
    };
    RegistrationComponent.prototype.view = function () {
        this.router.navigate(['list']);
    };
    RegistrationComponent.prototype.gotoColorMixer = function () {
        this.router.navigate(['color-mixer']);
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "ns-registration",
            moduleId: module.id,
            templateUrl: "./registration.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, forms_1.FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLHdDQUEwRTtBQUUxRSwrQ0FBNkM7QUFPN0M7SUFPSSwrQkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsV0FBd0I7UUFBbEYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFEL0YsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQUksR0FBSjtRQUNJLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBTyxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQTdDUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FROEIsZUFBTSxFQUF1QiwwQkFBVyxFQUF1QixtQkFBVztPQVA3RixxQkFBcUIsQ0ErQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1yZWdpc3RyYXRpb25cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGlucHV0OiBBYnN0cmFjdENvbnRyb2w7XG4gICAgcHVibGljIHJlZ2lzdHJhdGlvbkZvcm07XG4gICAgcHVibGljIGZpcnN0bmFtZTogQWJzdHJhY3RDb250cm9sO1xuICAgIHB1YmxpYyBsYXN0bmFtZTogQWJzdHJhY3RDb250cm9sO1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb246IEFic3RyYWN0Q29udHJvbDtcbiAgICBwdWJsaWMgZXJyb3IgPSBbXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBmaXJzdG5hbWU6IFtcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBvcmdhbmlzYXRpb246IFtcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzLnJlZ2lzdHJhdGlvbkZvcm0udmFsdWU7XG4gICAgICAgIGlmIChvYmpbJ2ZpcnN0bmFtZSddLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvclswXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqWydsYXN0bmFtZSddLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvclsxXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqWydvcmdhbmlzYXRpb24nXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JbMl0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqWydpZCddID0gdGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuYWRkVXNlcig8VXNlcj5vYmopO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25Gb3JtLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckVycm9ycygpIHtcbiAgICAgICAgdGhpcy5lcnJvclswXSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yWzFdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3JbMl0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2aWV3KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xpc3QnXSk7XG4gICAgfVxuXG4gICAgZ290b0NvbG9yTWl4ZXIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY29sb3ItbWl4ZXInXSk7XG4gICAgfVxuXG59Il19