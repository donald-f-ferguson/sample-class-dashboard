import { Injectable } from '@angular/core';

import { User } from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public current_user: User;

  public getCurrentUser(): User {
    this.current_user = new User();
    this.current_user.uni = 'dff9';
    this.current_user.firstName = "Donald";
    this.current_user.lastName = "Ferguson";
    this.current_user.avatar = "https://media.licdn.com/dms/image/C4D03AQGe_OsIY9ZQMQ/profile-displayphoto-shrink_800_800/0/1615474723040?e=2147483647&v=beta&t=Y75fNbzF83v-YBZQ4VjQGpwcGSXRbLlhsNrVNERIS44";
    return this.current_user;
  }
}
