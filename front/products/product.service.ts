import { Observable } from 'rxjs';

export interface ProductService {
  getProduct(id: string): Observable<{ id: string }>;
}
