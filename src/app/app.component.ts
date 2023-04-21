import { AuthService } from './core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser, IUserSingResponse } from './core/services/auth/models/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wikicars';
  public isLogged: boolean = false
  public isAdmin: boolean = false
  constructor(
    private authService: AuthService
  ){}
  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
      
    })
    this.authService.isAdminGet().subscribe(()=>{
      

    })
  }
}
