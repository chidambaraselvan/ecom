import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { RegisterComponent } from './frontend/register/register.component';
import { LoginComponent } from './frontend/login/login.component';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthenticationGuard } from './guards/authentication.guard';

import { AppRoute } from './app.routes';
import { AdmindashboardComponent } from './backend/admindashboard/admindashboard.component';
import { SidebarComponent } from './backend/sidebar/sidebar.component';
import { TopbarComponent } from './backend/topbar/topbar.component';
import { UserComponent } from './backend/user/user.component';
import { UsereditComponent } from './backend/useredit/useredit.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdmindashboardComponent,
    SidebarComponent,
    TopbarComponent,
    UserComponent,
    UsereditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [UserService,AuthService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
