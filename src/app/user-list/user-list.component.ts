import { Component, OnInit } from "@angular/core";
import { User } from "../registration/user";
import { UserService } from "../registration/user.service";

@Component({
    selector: "ns-user-list",
    styleUrls: ['./user-list.component.css'],
    moduleId: module.id,
    templateUrl: "./user-list.component.html",
})
export class UserListComponent implements OnInit {
    userList: User[];
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userList = this.userService.getUsers();
    }
}