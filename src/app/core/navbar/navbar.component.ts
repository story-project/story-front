import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  isUserLoggedIn: boolean = false
  sub$ = new Subject()

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isUserLoggedIn
      .pipe(takeUntil(this.sub$))
      .subscribe(state=> {this.isUserLoggedIn = state})
  }

  ngOnDestroy() {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
