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
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "ns-registration",
            moduleId: module.id,
            styleUrls: ['./registration.component.css'],
            templateUrl: "./registration.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, forms_1.FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
