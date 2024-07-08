import { inject } from '@angular/core';
import { CanActivateFn , Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {

const autService = inject(AuthService);
const router = inject(Router);

if (autService.isAuthenticated()){
  return true;
}else{
  return router.navigate(['/login']);
}

};
