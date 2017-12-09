import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router,ActivatedRoute,ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  user:any;
  userDetails:any;
  show:boolean = false;
  uploaded:boolean = false;
  updateForm:FormGroup;
  name:string;
  email:any;
  password:any;
  phone:number;
  street:any;
  city:string;
  state:string;
  country:string;
  pincode:number;
  role:string;
  dataAvailable:boolean = false;

  constructor(private userService:UserService,private route:ActivatedRoute,private fb:FormBuilder) {
    this.validate();
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser(id).subscribe(response=> {
      this.userDetails = response
      console.log(this.userDetails);
      this.dataAvailable= true;
      this.updateDetails();
    });
  }

  validate(){
    this.updateForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')])],
      phone:['',Validators.compose([Validators.required,Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')])],
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      pincode:['',Validators.required],
      role:['',Validators.required]
    });
  }

  updateDetails(){
    this.updateForm
    .setValue({
      name:this.userDetails.name,
      email:this.userDetails.email,
      password:this.userDetails.password,
      phone:this.userDetails.phone,
      street:this.userDetails.street,
      city:this.userDetails.city,
      state:this.userDetails.state,
      country:this.userDetails.country,
      pincode:this.userDetails.pincode,
      role:this.userDetails.role
    });
  }

  update(data,id){
    if(this.updateForm.valid){
      this.show = true;
      this.userService.updateUser(data,id).subscribe(response=>{
        this.userDetails = response
        console.log(this.userDetails);
        this.updateDetails();
        this.show = false;
        this.uploaded = true;
        setTimeout(
          ()=>{
            this.uploaded = false;
          },
        3000)
      });
    }else{
      this.validate();
    }
  }

}
