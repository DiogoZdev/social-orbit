import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from './user.interface';

@Injectable({
	providedIn: 'root',
})
export class UserService {

	private userSubject = new	BehaviorSubject<User>({})
	
	constructor(
		private authService: AuthService,
	) {
		if (this.authService.hasToken()) {
			this.decodeJWT();
		}
	}
	

	// função que faz o decode dos dados do usuário e notifica através do subject
	private decodeJWT() {
		const token = this.authService.getToken();
		const user = jwt_decode(token) as User;
		this.userSubject.next(user);
	}
	
	getUser() {
		return this.userSubject.asObservable();
	}

	saveToken(token: string) {
		this.authService.saveToken(token);
		this.decodeJWT();
	}

	logout() {
		this.authService.removeToken();
		this.userSubject.next({});
	}

	isLoggedIn() {
		return !!this.authService.hasToken();
	}
	
}