import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {StoryCart} from "./story-cart";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StoryCartService implements OnInit{
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getStories(categoryId = '') {
    return this.http.get(`${environment.baseUrl}/stories${categoryId}`)
  }
}
