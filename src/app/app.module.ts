import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './services/users.service';
import { GuestComponent } from './guest/guest.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './guest/login/login.component';
import { RegComponent } from './guest/reg/reg.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';
import { GettingComponent } from './user/getting/getting.component';
import { AddingComponent } from './user/adding/adding.component';
import { ScreenComponent } from './user/screen/screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';                  


@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    UserComponent,
    LoginComponent,
    RegComponent,
    AboutusComponent,
    ErrorComponent,
    GettingComponent,
    AddingComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
