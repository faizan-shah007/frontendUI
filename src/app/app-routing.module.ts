import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterSignUpComponent } from './component/register-sign-up/register-sign-up.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path: 'dash', component: UserDashboardComponent
  },
  {
    path: 'login', component: LoginComponent 
  },
  {
    path: 'register', component: RegisterSignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
