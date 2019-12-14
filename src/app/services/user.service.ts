import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

private apiUrl = 'http://localhost:8080/api/auth/signup';

  

 /** getAll() {
    *return this.http.get<any[]>(`${environment.apiUrl}/users`);
  *}
  */
  register(user) {
    return this.http.post(`${this.apiUrl}`, user);
  }

  delete(id: number){
  return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
