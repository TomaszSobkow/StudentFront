import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'app-addstudent',
    templateUrl: './addstudent.component.html',
    styleUrls: ['./addstudent.component.css'],
    standalone: false
})
export class AddstudentComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  title: string = 'Add Student';

  student: Student = new Student;

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe
    (
      body => {
      this.goToStudentsList();
    },
    error => console.log(error)
    );
  }

  goToStudentsList(){
    this.router.navigate(['defaultComponent/students']);
  }

  cancel(){
    this.goToStudentsList();
  }

   onSubmit(){
    this.saveStudent();
    this.confirmation();
   };

   confirmation(){
     window.alert("Added new Student "+
                  this.student.firstName + " " + this.student.lastName)
   }


  ngOnInit(): void {
  }

}
