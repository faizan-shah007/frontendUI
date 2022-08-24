import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../Models/user.model';

@Injectable ({
    providedIn: 'root'
})
export class userService {
    baseUrl = 'https://localhost:7214/api/User';
    constructor(private http: HttpClient) { }

    //Get All User

    getAllUser(): Observable<user[]> {
        return this.http.get<user[]>(this.baseUrl);
    }

    addUser(user: user) {
        return this.http.post(this.baseUrl, user);
    } 
    
    deleteUser(id: string): Observable<user> {
        return this.http.delete<user>(this.baseUrl + '/' + id);
    }

    updateUser(user: user): Observable<user> {
        return this.http.put<user>(this.baseUrl + '/' + user.id, user);
    }
}

