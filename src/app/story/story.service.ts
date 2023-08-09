import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storyId!: number
  constructor(private http: HttpClient) { }

  getStory(storyId: any) {
    return this.http.get(`${environment.baseUrl}/stories/${storyId}`)
  }
}
