import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {StoryCart} from "./story-cart";

@Injectable({
  providedIn: 'root'
})
export class StoryCartService implements OnInit{
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getStories() {
    return this.http.get(`${environment.baseUrl}/stories`)
  }
}
