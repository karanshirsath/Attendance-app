import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  addNewUser(user){
    return this.http.post<{message: string}>('http://localhost:9000/user',user);

  }
  validateLogin(user){
  return this.http.post('http://localhost:9000/user/login',user);
  }
}
