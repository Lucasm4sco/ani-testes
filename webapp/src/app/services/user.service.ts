import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router
  ) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  get user(): IUser {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null;
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
