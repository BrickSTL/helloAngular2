import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})

export class  DataService {
    //outside apiUrl = 'https://jsonplaceholder.typicode.com/users'
    public apiUrl = 'http://localhost:8080/'

    constructor ( private http: HttpClient ){ }
    getUser(){
        return this.http.get<User>(this.apiUrl)
    }
}
