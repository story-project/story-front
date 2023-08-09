import {CanMatchFn, Router} from '@angular/router';
import {map} from "rxjs";
import {AuthService} from "../auth.service";
import {inject} from "@angular/core";

export const authCanmatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router)
  return inject(AuthService).isUserLoggedIn.pipe(
    map(userState => {
      console.log(userState)
      if (userState) {
        return true
      } else {
        return router.createUrlTree(['/login'])
      }
    })
  )
};

export const authCantmatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router)
  return inject(AuthService).isUserLoggedIn.pipe(
    map(userState => {
      if (userState) {
        return router.createUrlTree(['/home'])
      } else {
        return true
      }
    })
  )
};
