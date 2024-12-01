import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export declare class ProductService {
  getProduct(id: string): Observable<Product>;
}

export type Product = {
  id: string;
  name: string;
};
