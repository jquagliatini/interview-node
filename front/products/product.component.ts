import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@shared/authentication.service';

import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
})
export class ProductComponent {
  id: any;
  product: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public authService: AuthenticationService,
    public productService: ProductService,
  ) {
    this.redirectIfNotAuthenticated();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => (this.id = params.id));
    this.productService.getProduct(this.id).subscribe((product) => (this.product = product));
  }

  private redirectIfNotAuthenticated(): any {
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/']);
      }
    });
  }
}
