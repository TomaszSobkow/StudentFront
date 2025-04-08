import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'app-listofstudents',
    templateUrl: './listofstudents.component.html',
    styleUrls: ['./listofstudents.component.css'],
    standalone: false
})
export class ListofstudentsComponent implements OnInit {
  
  constructor(private studentService: StudentService, private router: Router ) {  }

  title =  "List of students";


  students: Student[] = [] ;

  private getStudents(){
    this.studentService.getStudentsList().subscribe( data => {
      this.students = data;
    });
  }

  getStudentDetails(id: number){
    this.router.navigate(['defaultComponent/students/student', id])
  }

  ngOnInit(): void {
    this.getStudents();

  }

}
