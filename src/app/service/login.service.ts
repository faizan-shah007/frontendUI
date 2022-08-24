
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  

  login(email:string, password:string): Observable<any>{
    return this.http.get(`https://localhost:7214/api/Auth?email=`+ email + '&password=' + password);
  }
}
