import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../register/person";
import {BehaviorSubject, map} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) { }

  getPerson(personId: any) {
    return this.http.get(`${environment.baseUrl}/people/${personId}`)
  }

  addPerson(person: Person) {
    return this.http.post(`${environment.baseUrl}/people`, person).pipe(
      map((res:any) => {
        this.getPerson(res.id).subscribe(res=>{
          console.log(res)})
        return res
      })
    )
  }
}
