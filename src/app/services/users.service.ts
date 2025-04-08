import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSQL } from '../users/userSQL';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url  = "http://localhost:8080/api/users/";

  constructor( private httpClient: HttpClient){ }

  getUsersList(): Observable<UserSQL[]>{
    return this.httpClient.get<UserSQL[]>(this.url);
  }

  createUser(user: UserSQL): Observable<Object>{
      return this.httpClient.post(this.url,user);
  }

  getUserById(id: number): Observable<UserSQL>{
    return this.httpClient.get<UserSQL>(`${this.url}/${id}`);

  }

  deleteUser(id: number): Observable<UserSQL>{
    return this.httpClient.delete<UserSQL>(`${this.url}/${id}`)
  }

  updateUser(id: number, user: UserSQL): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`,user)
  }
}
