import { Observable } from 'rxjs'; 

export declare class ProductService {
    getProduct(id: string): Observable<{ id: string }>;
}