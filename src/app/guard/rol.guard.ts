import { CanActivateFn } from '@angular/router';

export const rolGuard: CanActivateFn = (route, state) => {

  const rol = route.data['idRol']
  
  if (Number(localStorage.getItem("rol")) == rol) {
    return true;
  } else {
    return false;
  }
  
};
