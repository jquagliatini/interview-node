import { Routes } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { isAuthenticatedGuard } from './shared/is-authenticated.guard';

export const routes: Routes = [
  {
    path: '/products/:id',
    component: ProductComponent,
    canActivate: [isAuthenticatedGuard],
  },
];
