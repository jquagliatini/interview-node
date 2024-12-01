import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';

export const isAuthenticatedGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(AuthenticationService)
    .isAuthenticated()
    .pipe(map((isAuthenticated) => isAuthenticated || router.createUrlTree(['/'])));
};
