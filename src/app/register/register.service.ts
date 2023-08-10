import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Register} from "./register";
import {Person} from "./person";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: Register): Observable<any> {
    return this.http.post(`${environment.baseUrl}/users`, user)
  }
}
