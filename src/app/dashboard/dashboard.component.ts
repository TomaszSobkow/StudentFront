
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Student } from '../students/student';
import { StudentService } from '../services/student.service';
import { UserSQL } from '../users/userSQL';
import { UsersService } from '../services/users.service';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent implements OnInit {

    title = 'DashBoard Component'

    noOfUsers : number = 0;
    students: Student[] = [] ;
    users: UserSQL[]=[];

  constructor( private registerService: RegisterService, private studentService: StudentService, private userService: UsersService ) { }

  ngOnInit(): void {
    this.noOfUsers = this.registerService.getUsers().length;

    this.studentService.getStudentsList().subscribe( data => {
      this.students = data;
    });

    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

}
