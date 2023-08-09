import {Component, OnInit} from '@angular/core';
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
  hide = true
  loginForm!: FormGroup

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
    this.authService.login(this.loginForm.value).subscribe((jwtToken) => {
      localStorage.setItem('jwtToken', jwtToken.accessToken)
      this.router.navigate(['/home'])
    })
  }
  get email() {
    return this.loginForm.controls?.['email']
  }
}
