import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserSQL } from '../userSQL';

@Component({
    selector: 'app-listofusers',
    templateUrl: './listofusers.component.html',
    styleUrls: ['./listofusers.component.css'],
    standalone: false
})
export class ListofusersComponent implements OnInit {

  title = "List of Users";

  users: UserSQL[] = [];


  constructor(private usersService: UsersService, private router: Router){  }

  ngOnInit(): void {
    this.getUsers();
  }

   private getUsers(){
    this.usersService.getUsersList().subscribe( data=>{
      this.users = data; 	
    });
  }

  getUsersDetails(id: number){
      this.router.navigate(['defaultComponent/users/user', id],)
  }


}
