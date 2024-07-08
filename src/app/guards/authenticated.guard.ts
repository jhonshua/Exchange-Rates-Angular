import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {

  const autService = inject(AuthService);
  const router = inject(Router);

  if (autService.isAuthenticated()){
    return router.navigate(['/dasboard']);

  }else{
    return true;
  }

};
