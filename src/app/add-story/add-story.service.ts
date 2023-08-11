import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddStory} from "./add-story";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddStoryService {

  constructor(private http: HttpClient) { }

  addStory(data: AddStory): Observable<any> {
    return this.http.post(`${environment.baseUrl}/stories`, data)
  }
}
