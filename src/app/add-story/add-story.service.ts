import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddStory} from "./add-story";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddStoryService {

  constructor(private http: HttpClient) { }

  addStory(data: AddStory): Observable<any> {
    return this.http.post(`${environment.baseUrl}/stories`, data)
  }
}
