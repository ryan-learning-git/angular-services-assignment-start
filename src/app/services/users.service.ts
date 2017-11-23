import {EventEmitter, Output} from '@angular/core';

export class UsersService {

  constructor(){

  }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  changeCountToInactive = 0;
  changeCountToActive = 0;

  @Output() changeCountsEmitter = new EventEmitter<void>();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.changeCountToInactive++;
    this.changeCountsEmitter.emit();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.changeCountToActive++;
    this.changeCountsEmitter.emit();
  }

}
