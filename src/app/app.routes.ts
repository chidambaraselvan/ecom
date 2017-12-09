import { Routes } from '@angular/router';
import { RegisterComponent } from './frontend/register/register.component';
import { LoginComponent } from './frontend/login/login.component';
import { AdmindashboardComponent } from './backend/admindashboard/admindashboard.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UserComponent } from './backend/user/user.component';
import { Component } from '@angular/core/src/metadata/directives';
import { UsereditComponent } from './backend/useredit/useredit.component';

export const AppRoute:Routes = [
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'',
        redirectTo: '/register',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'admindashboard',
        component:AdmindashboardComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path:'user',
        component:UserComponent,           
    },
    {
        path: 'user/:id',
        component: UsereditComponent
    }
    
];