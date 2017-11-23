import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private usersService: UsersService) {};

  users = this.usersService.inactiveUsers;

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
