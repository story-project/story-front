import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auth} from "./auth";
import {BehaviorSubject, map, Observable} from "rxjs";

import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  isUserLoggedIn = new BehaviorSubject(false)

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getToken()
    console.log(this.getToken())
    if (this.getToken()) {
      this.isUserLoggedIn.next(true)
    }
  }

  login(data: Auth): Observable<any> {
    return this.http.post<Response>(`${environment.baseUrl}/users/auth`, data).pipe(map((res)=>{
      this.isUserLoggedIn.next(true)
      return res
    }))
  }

  logout() {
    return localStorage.removeItem('jwtToken')
  }

  getToken() {
    return localStorage.getItem('jwtToken')
  }

  getUserInfo() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }
}
