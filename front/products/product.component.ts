import { Component, input, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { finalize } from 'rxjs';

import { ProductService } from './product.service';

@Component({
  standalone: true,
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isLoading()) {
      <p>Loading...</p>
    } @else {
      <p>{{ product()?.name }}</p>
    }
  `,
})
export class ProductComponent implements OnInit {
  readonly id = input.required<string>();
  private readonly productService = inject(ProductService);

  readonly isLoading = signal(true);
  readonly product = signal<{ name: string } | null>(null);

  ngOnInit(): void {
    this.productService
      .getProduct(this.id())
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe((product) => {
        this.product.set(product);
      });
  }
}
