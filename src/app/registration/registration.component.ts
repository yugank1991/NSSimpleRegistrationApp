import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from './user';
import { UserService } from "./user.service";

@Component({
    selector: "ns-registration",
    moduleId: module.id,
    templateUrl: "./registration.component.html",
})
export class RegistrationComponent implements OnInit {
    public input: AbstractControl;
    public registrationForm;
    public firstname: AbstractControl;
    public lastname: AbstractControl;
    public organisation: AbstractControl;
    public error = [];
    constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
        this.registrationForm = this.formBuilder.group({
            firstname: ["", Validators.required],
            lastname: ["", Validators.required],
            organisation: ["", Validators.required]
        });
        this.clearErrors();
    }
    ngOnInit(): void {
    }

    save() {
        const obj = this.registrationForm.value;
        if (obj['firstname'].length === 0) {
            this.error[0] = true;
        } else if (obj['lastname'].length === 0) {
            this.error[1] = true;
        } else if (obj['organisation'].length === 0) {
            this.error[2] = true;
        } else {
            obj['id'] = this.userService.getUsers().length;
            this.userService.addUser(<User>obj);
            this.registrationForm.reset();
        }
    }

    clearErrors() {
        this.error[0] = false;
        this.error[1] = false;
        this.error[2] = false;
    }

    view() {
        this.router.navigate(['list']);
    }

    gotoColorMixer() {
        this.router.navigate(['color-mixer']);
    }

}