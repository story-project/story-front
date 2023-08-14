import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../register/person";
import {BehaviorSubject, map} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userId!: number

  constructor(
    private http: HttpClient,
  ) { }

  getPerson(userId: any) {
    return this.http.get(`${environment.baseUrl}/people?user=${userId}`)
  }

  addPerson(person: Person) {
    return this.http.post(`${environment.baseUrl}/people`, person)
      .pipe(
          map((res:any) => {
            this.userId = res.id
          // this.getPerson(res.id).subscribe(res=>{
          //   console.log(res)})
          return res
        })
    )
  }
}
