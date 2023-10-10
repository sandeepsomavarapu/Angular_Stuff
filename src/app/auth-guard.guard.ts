import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem("uname") === "fisglobal") {
    return true;
  }
  else {
    return false
  }
};
