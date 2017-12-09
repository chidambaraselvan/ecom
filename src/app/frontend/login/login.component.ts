import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  logged:any;
  email:any;
  password:any;

  constructor(private authService:AuthService,private fb:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    })
  }
  login(data){
    this.authService.log(data).subscribe(response =>{
      this.logged = response
      
      if(this.logged.role == "admin"){
        this.route.navigate(['admindashboard']);
      }
    });
  }
  
}
