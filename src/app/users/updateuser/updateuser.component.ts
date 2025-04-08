import { Component, OnInit } from '@angular/core';
import { UserSQL } from '../userSQL';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-updateuser',
    templateUrl: './updateuser.component.html',
    styleUrls: ['./updateuser.component.css'],
    standalone: false
})
export class UpdateuserComponent implements OnInit {


  title = 'Update User';
  id!: number;
  user!: UserSQL;
  admin = "";

  constructor(private userService: UsersService,
              private rout:  ActivatedRoute,
              private router : Router) { }

  onSubmit(){
    this.updateUser();
    window.alert('Edited Student ' + this.user.login);
    this.goToStudentsList();
  };

  updateUser(){
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.user = new UserSQL();
    }, error =>  console.log(error));
  }

  deleteUser(id : number){
    this.userService.deleteUser(id).subscribe(data => {

      window.alert('Deleted Student ID'+this.user.id +' '+this.user.login + ' ' +this.user.password);
      this.goToStudentsList();
    })
  }

  cancel(){
  this.goToStudentsList();
  }


  ngOnInit(): void {

    this.user = new UserSQL();

    this.id = this.rout.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data => {
      this.user  = data;
    },
    )
  }

  goToStudentsList(){
    this.router.navigate(['defaultComponent/users']);
  }
 

}
