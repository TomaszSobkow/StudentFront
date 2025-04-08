import { Injectable, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  users =  new Array<User>();
  isFreeUserName: boolean = true;
 
  constructor(private router: Router) { 
    this.users.push(new User('student', 'student'))
  }

  checkUser(userName: string){
    console.log('Student name ' + userName)
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].name.includes(userName)){
        console.log('loking for a student' + this.users.length);
        window.alert("User -> " + userName + " already exists")
        this.isFreeUserName = false;
        break;
      }else{
        this.isFreeUserName = true;
      }
    }
  }

  addUser( userName: string, userPassword: string){
    this.checkUser(userName);

    if(this.isFreeUserName){
      this.users.push(new User(userName, userPassword));
      this.router.navigate([''])
    }
  }

  getUsers(){
    return this.users;
  }
}
