import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


    constructor(
      private http: HttpClient,
    ) {}

    getToken() {
      return localStorage.getItem(KEY) ?? '';
    }
  
    saveToken(token: string) {
      localStorage.setItem(KEY, token);
    }
  
    removeToken() {
      localStorage.removeItem(KEY);
    }
  
    hasToken() {
      return !!this.getToken();
    }
}
