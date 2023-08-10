import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddPictureService {

  constructor(private http: HttpClient) { }

  addPicture(data: any) {
    return this.http.post(`${environment.baseUrl}/media_objects`, data)
  }
}
