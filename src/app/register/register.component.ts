import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Person} from "./person";
import {Router} from "@angular/router";
import {ProfileService} from "../profile/profile.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup
  hide = true
  message!: string
  showMessage = false

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private profileService: ProfileService,
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
    // console.log(this.registerForm.value)
    this.registerService.register(this.registerForm.value).subscribe(
      (res) => {
        this.showMessage = true
        this.message = "Ro'yhatdan muvaffaqiyatli o'tdingiz, Endi Login qilishingiz mumkin!"
        setTimeout(() => {
          this.showMessage = false
          this.router.navigate(['/login'])
        }, 4000)
        const person: Person = {
          username: this.registerForm.value.username,
          fullname: this.registerForm.value.fullname,
          user: res['@id']
        }
        this.profileService.addPerson(person).subscribe(
          (res: any) => {
            console.log(res)
          }
        )
      },
      () => {
        this.showMessage = true
        this.message = "Ro'yhatdan o'tishda xatolik bo'ldi, iltimos qayta urinib ko'ring!"
        setTimeout(() => {
          this.showMessage = false
        }, 4000)
      }
    )
  }

  get email() {
    return this.registerForm.controls?.['email']
  }
}
