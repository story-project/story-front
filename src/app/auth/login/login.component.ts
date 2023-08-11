import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Auth} from "../auth";
import {provideRouter, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @ViewChild('formMessage') formMessage!: ElementRef
  hide = true
  loginForm!: FormGroup
  message!: string
  showMessage = false

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    })

  }

  loginProcess() {
    this.authService.login(this.loginForm.value).subscribe(
      (jwtToken) => {
      localStorage.setItem('jwtToken', jwtToken.accessToken)
      this.router.navigate(['/home'])

    },
      (err) => {
        this.showMessage = true
        this.message = "Siz oldin Ro'yhatdan o'tmagansiz!"
        setTimeout(() => {
          this.showMessage = false
        }, 4000)
      }
    )
  }
  get email() {
    return this.loginForm.controls?.['email']
  }
}
