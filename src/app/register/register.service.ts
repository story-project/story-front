import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Register} from "./register";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: Register): Observable<any> {
    return this.http.post(`${environment.baseUrl}/users`, user)
  }
}
