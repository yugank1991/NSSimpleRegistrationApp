import { Injectable } from "@angular/core";

import { User } from "./user";

@Injectable()
export class UserService {
    private users = new Array<User>(
        { id: 0, firstname: "First Name", lastname: "Last Name", organisation: "Organisation" },
    );

    getUsers(): User[] {
        return this.users;
    }

    getUser(name: string): User {
        return this.users.filter(item =>
            item.firstname.includes(name)
            || item.lastname.includes(name)
            || item.organisation.includes(name))[0];
    }
    addUser(user: User) {
        this.users.push(user);
    }
}
