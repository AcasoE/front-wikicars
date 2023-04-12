import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IUserSingResponse } from './models/auth.model';
import { Observable, ReplaySubject, tap } from 'rxjs';

const AUTH_URL = 'https://back-wikicars.vercel.app/users'
const TOKEN_KEY = 'jwt-auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)
  public isAdmin$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const isLogged = this.isLogged();
    this.isLogged$.next(isLogged)
    const isAdmin = this.isAdmin()
    this.isAdmin$.next(isAdmin)
  }

  public login(user: IUser): Observable<IUserSingResponse> {
    return this.http.post<IUserSingResponse>(`${AUTH_URL}/login`, user).pipe(
      tap((res: IUserSingResponse) => {
        const userStore = JSON.stringify({
          token: res.token,
          nombre: res.user.name,
          id: res.user._id,
          rol: res.user.rol
        });
        localStorage.setItem(TOKEN_KEY, userStore);
        this.isLogged$.next(true)
        this.router.navigate(['home'])
      })
    )
  }

  public resgister(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${AUTH_URL}/register`, user)
  }
  public logout() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.isLogged$.next(false);
    if (removeToken != null) {
      this.router.navigate(['login'])
    }
  }

  public isLogged(): boolean {
    const userToken = localStorage.getItem(TOKEN_KEY);
    if (!userToken) { return false }
    const isValidToken = JSON.parse(userToken)?.token
    return !!isValidToken
  }
  public isAdmin(): boolean {
    const userToken = localStorage.getItem(TOKEN_KEY)
    if (!userToken) { return false }
    const isValidToken = JSON.parse(userToken)?.rol
    return !!isValidToken
  }
  public getToken(): string | null {
    const userToken = localStorage.getItem(TOKEN_KEY);
    return userToken ? JSON.parse(userToken)?.token : null
  }
}






