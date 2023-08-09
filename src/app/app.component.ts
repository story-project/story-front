import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'story-front';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.getToken()) {
      this.authService.isUserLoggedIn.next(true)
    } else {
      this.router.navigate(['/login'])
    }
  }
}
