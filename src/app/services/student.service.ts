import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../students/student';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private  url  = "http://localhost:8080/api/students";


  constructor( private httpClient: HttpClient){ }

  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.url);
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(this.url+'/student', student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.url+'/student'}/${id}`);

  }

  deleteStudent(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(`${this.url+'/student'}/${id}`)
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.url+'/student'}/${id}`,student)
  }


}
