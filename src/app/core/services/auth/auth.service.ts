import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IUserSingResponse } from './models/auth.model';
import { Observable, ReplaySubject, tap } from 'rxjs';

const AUTH_URL = 'http://localhost:8000/users'
const TOKEN_KEY = 'jwt-auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)
  public isAdmin$: ReplaySubject<boolean> = new ReplaySubject<boolean>(0)
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
          nombre: res.userToLog.name,
          id: res.userToLog._id,
          rol: res.userToLog.rol
        });
        localStorage.setItem(TOKEN_KEY, userStore);
        const rol = JSON.parse(userStore)
        this.isLogged$.next(true)
        if (rol.rol == "admin") {
          this.isAdmin$.next(true)
        }
        this.router.navigate(['home'])
      })
    )
  }

  public logout() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.isLogged$.next(false);
    this.isAdmin$.next(false)
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
    if(isValidToken === "admin"){return true} else{
      return false
    }
  }
  public getToken(): string | null {
    const userToken = localStorage.getItem(TOKEN_KEY);
    return userToken ? JSON.parse(userToken)?.token : null
  }
}






