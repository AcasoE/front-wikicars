import { UserRequestBody } from './models/user-register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../auth/models/auth.model';

const REGISTER_URL = 'https://back-wikicars.vercel.app/register'


@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(
    private http: HttpClient,
  ) { }


  public newUser(body: UserRequestBody): Observable<IUser>{
    return this.http.post<IUser>(`${REGISTER_URL}`, body)
  }
}
