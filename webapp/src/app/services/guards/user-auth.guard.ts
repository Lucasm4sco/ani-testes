import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';
import { inject } from '@angular/core';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.isAuthenticated)
    return true;

  router.navigate(['/login']);
  return false;
};

export const userNotAuthGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(!userService.isAuthenticated)
    return true;

  router.navigate(['/home']);
  return false;
};
