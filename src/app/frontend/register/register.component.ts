import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm:FormGroup;
  name:string;
  email:any;
  password:any;
  phone:number;
  street:any;
  city:string;
  state:string;
  country:string;
  pincode:number;
  rdata:any;

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')])],
      phone:['',Validators.compose([Validators.required,Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')])],
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      pincode:['',Validators.required]
    });
  }

  register(userData){
    this.userService.signup(userData).subscribe(response => {
      this.rdata = response;
      if(this.rdata == 'Registered Successfully'){
        this.router.navigate(['login']);
      }
    });
    
  }

}
