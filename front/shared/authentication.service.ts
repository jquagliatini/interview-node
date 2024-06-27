import { Observable } from 'rxjs'; 

export interface AuthenticationService {
    isAuthenticated(): Observable<boolean>;
}