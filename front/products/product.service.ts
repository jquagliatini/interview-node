import { Observable } from 'rxjs';

export interface ProductService {
  getProducts(): Observable<{ id: string }[]>;
}
