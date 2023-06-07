import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})
export class HomeComponent {

  userData: IUser | null = null;

  constructor(private userService: UserService) {
    this.userData = this.userService.user;
  }

  range(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
  }

}
