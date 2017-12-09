import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http:Http,private route:Router) { }

  log(post){
    return this.http.
    post('http://dev.savivatech.com/customApp/ecomlogin.php',JSON.stringify({email:post.email,password:post.password}))
    .map(res=>{
      let user = res.json();
      if(user !="Login Failed"){
        localStorage.setItem('currentUser',JSON.stringify(user));
      }
      return user;
    });
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.route.navigate(['login']);
  }

}
