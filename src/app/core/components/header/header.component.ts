import { headerlinksAdmin } from './config/header.config';
import { AuthService } from './../../services/auth/auth.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderLinkAdmin, HeaderLinkUser } from '../header/models/headers.models';
import { headerlinksUser } from './../header/config/header.config';
import { Router, ActivatedRoute, ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public headerLinksUser: HeaderLinkUser[] = headerlinksUser
  public headerLinksAdmin: HeaderLinkAdmin[] = headerlinksAdmin
  public currentUrl: string  = ""
  public isLogged: boolean = false
  public isAdmin: boolean = false
constructor(
  private authService: AuthService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private cdr: ChangeDetectorRef
){
  this.router.events.subscribe((event)=>{
    if (event instanceof ChildActivationEnd && event.snapshot.url?.length > 0) {
      this.currentUrl = event.snapshot.url[0].path      
    }



  })

  }


  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
      
    })
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin
      this.cdr.detectChanges()
      })
  }
  public logout(){
    this.authService.logout()
    this.router.navigate(['login'])
  }
}


