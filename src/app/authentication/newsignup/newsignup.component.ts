import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserSQL } from 'src/app/users/userSQL';

@Component({
    selector: 'app-newsignup',
    templateUrl: './newsignup.component.html',
    styleUrls: ['./newsignup.component.css'],
    standalone: false
})
export class NewsignupComponent implements OnInit {

  private isDataValid: boolean = false;
  private isUserFound: boolean = false;

  user: UserSQL = new UserSQL();

  private allUsers: UserSQL[] = [];

  constructor( private userService: UsersService, private router: Router) { }


  login() {
    this.dataValidation();
    if(this.isDataValid){
        this.checkUser();
    }
  }

  dataValidation() {
    if (this.user.login != ''){
      if (this.user.password != ''){
          this.isDataValid = true;
        }else{ window.alert('Password can not be empty!');}
      }else{
        window.alert('Login can not be Empty !');}
  }

  checkUser(){
    for(let i = 0; i < this.allUsers.length; i++){
      if(this.allUsers[i].login === this.user.login && this.allUsers[i].password === this.user.password){
        if(this.allUsers[i].login === "phil".toLowerCase()){
          window.alert( this.allUsers[i].login+ ' Prosze pozwól mi dolaczyc do mentoringu!!!, bardzo prosze, jak to zrobic, PLEASE!!!!!')
        }
        this.router.navigate(['/defaultComponent']);
        this.isUserFound = true;
        break;
      }
    }
      this.userNotKnown(this.user);
  }

  userNotKnown(user: UserSQL){
    if(!this.isUserFound){
      window.alert('User '+ user.login+ ' Not Known')
    }
  }

  getUsers(){
    this.userService.getUsersList().subscribe( users=> {
    this.allUsers = users;
})
  }
  ngOnInit(): void {
    this.getUsers();
  }

}
