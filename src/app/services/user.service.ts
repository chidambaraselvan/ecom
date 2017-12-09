import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http:Http) { }

  signup(post){
    return this.http
    .post('http://dev.savivatech.com/customApp/signup.php',JSON.stringify({name:post.name,email:post.email,password:post.password,phone:post.phone,street:post.street,city:post.city,state:post.state,country:post.country,pincode:post.pincode}))
    .map(res=>res.json());
  }

  getAllUsers(){
    return this.http
    .get('http://dev.savivatech.com/customApp/getallusers.php')
    .map(res=>res.json());
  }

  getUser(id){
    return this.http
    .post('http://dev.savivatech.com/customApp/getuser.php',JSON.stringify({id:id}))
    .map(res=>res.json());
  }

  updateUser(post,id){
    return this.http
    .post('http://dev.savivatech.com/customApp/updateUser.php',JSON.stringify({id:id,name:post.name,email:post.email,password:post.password,phone:post.phone,street:post.street,city:post.city,state:post.state,country:post.country,pincode:post.pincode,role:post.role}))
    .map(res=>res.json());
  }

  removeUser(id){
    return this.http
    .post('http://dev.savivatech.com/customApp/deleteuser.php',JSON.stringify({id:id}))
    .map(res=>res.json());
  }
}
