import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export declare class AuthenticationService {
  isAuthenticated(): Observable<boolean>;
}
