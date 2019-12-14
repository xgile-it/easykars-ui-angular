import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   private apiUrl = 'http://localhost:8080/api/auth/signin';
   public get currentUserValue() {
     return this.currentUserSubject.value;
   }

   login(usernameOrEmail, password) {
    return this.http.post<any>(`${this.apiUrl}`, { usernameOrEmail, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
   }
   logout(){
     //remove user from l storage and set current user to null
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null)
   }
}
