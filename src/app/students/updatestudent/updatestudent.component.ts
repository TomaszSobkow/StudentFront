import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'app-updatestudent',
    templateUrl: './updatestudent.component.html',
    styleUrls: ['./updatestudent.component.css'],
    standalone: false
})
export class UpdatestudentComponent implements OnInit {


  title = 'Update Student';
  id!: number;
  student!: Student;
  displayDialog: boolean = false;

  constructor(private studentService: StudentService,
              private rout:  ActivatedRoute,
              private router : Router) { }

  update(){
    this.updateStudent();
    this.displayDialog = true;
    window.alert('Edited student ' + this.student.firstName+ ' ' +this.student.lastName)
    this.goToStudentsList();
  };

  updateStudent(){
    this.studentService.updateStudent(this.id, this.student).subscribe(data => {
      this.student = new Student();
    }, error =>  console.log(error));
  }

  deleteStudent(id : number){
    this.studentService.deleteStudent(id).subscribe(data => {

      window.alert('Deleted Student ID'+this.student.id +' '+this.student.firstName + ' ' +this.student.lastName);
      this.goToStudentsList();
    })
  }

  cancel(){
  this.goToStudentsList();
  }


  ngOnInit(): void {

    this.student = new Student();

    this.id = this.rout.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student  = data;
    },
    )
  }

  goToStudentsList(){
    this.router.navigate(['defaultComponent/students']);
  }

}
