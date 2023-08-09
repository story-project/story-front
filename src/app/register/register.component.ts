import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup
  hide = true
  constructor(private formBuilder: FormBuilder) {
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
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    })
  }

  pushForm() {
    console.log(this.registerForm)
  }

  get email() {
    return this.registerForm.controls?.['email']
  }
}
