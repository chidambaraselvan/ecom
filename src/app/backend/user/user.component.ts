import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any[];
  user:any;
  display:string;
  removed:any;

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit() {
    this.getUsers();
    this.display= 'none';
    this.user = null;
  }

  getUsers(){
    this.userService.getAllUsers().subscribe(response =>{
      this.users = response;
      console.log(this.users);
    });
  }

  viewUser(i){
    this.user = this.users[i];
    this.display= 'block';
  }

  onCloseHandled(){
    this.display= 'none';
    this.user = null;
  }

  deleteUser(id,i){
    this.userService.removeUser(id).subscribe(response =>{
      this.removed = response;
      if(this.removed == "Successfully Deleted"){
        this.users.splice(i,1);
      }
    });
  }

}
