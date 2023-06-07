import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { SecureComponent } from './pages/auth/secure/secure.component';
import { HomeComponent } from './pages/home/home.component';

import { userAuthGuard, userNotAuthGuard } from './services/guards/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [userNotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [userNotAuthGuard]
  },
  {
    path: '',
    component: SecureComponent,
    canActivate: [userAuthGuard],
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
