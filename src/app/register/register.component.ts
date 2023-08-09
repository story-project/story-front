import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Person} from "./person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup
  hide = true
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      username: [
        '',
        [Validators.required]
      ],
      fullname: [
        ''
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    })
  }

  registerProcess() {
    console.log(this.registerForm.value)
    this.registerService.register(this.registerForm.value).subscribe(
      (res) => {
        console.log(res)
        const person: Person = {
          username: this.registerForm.value.username,
          fullname: this.registerForm.value.fullname,
          user: res['@id']
        }
        this.registerService.addPerson(person).subscribe(
          (res) => {
            console.log(res)
            this.router.navigate(['/home'])
          },
          err => {
            console.log(err)
          }
        )
      }
    )
  }

  get email() {
    return this.registerForm.controls?.['email']
  }
}
