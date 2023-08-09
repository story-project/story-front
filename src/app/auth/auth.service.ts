import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auth} from "./auth";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(data: Auth): Observable<any> {
    return this.http.post<Response>(`${environment.baseUrl}/users/auth`, data)

  }

  getToken() {
    return localStorage.getItem('jwtToken')
  }
}
