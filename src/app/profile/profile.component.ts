import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    private authService: AuthService
  ) {
  }

  logoutProcces() {
    if (this.authService.isUserLoggedIn) {
      this.authService.logout()
      this.authService.isUserLoggedIn.next(false)
      window.location.reload()
    }
  }
}
