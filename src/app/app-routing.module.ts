import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './guest/login/login.component';
import { RegComponent } from './guest/reg/reg.component';
import { GuestComponent } from './guest/guest.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';





const routes: Routes = [
  { path: '',redirectTo: 'reg', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'reg', component:RegComponent},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  {path:'**',component:ErrorComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
