import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public userName?: string 

constructor(){
  this.getUser()
}


public getUser(){
  const token = localStorage.getItem('jwt-auth-token')
  if(token){
    let tokenParsed = JSON.parse(token)
    this.userName = tokenParsed.nombre
  }
}
}
