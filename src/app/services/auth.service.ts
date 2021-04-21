import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private appHttp: AppHttpService) { }

  registerUser() {

  }

  authentificationUser() {
    
  }
}
