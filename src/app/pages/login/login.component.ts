import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
public register: boolean = true
public formError: string = ''
public loginForm?: FormGroup
constructor(
  private authservice: AuthService,
  private fb: FormBuilder,
  private router: Router
){
  this.loginForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
  this.authservice.isLogged$.subscribe((isLogged)=>{
    if(isLogged){
      this.router.navigate(['home'])
    }
  })
}

public login(){
  if (this.loginForm?.valid) {
    this.authservice.login(this.loginForm.value).subscribe({
      next: () => this.loginForm?.reset(),
      error: (err) => {
        this.formError = err.error;
        
      }
      
    });
  }
}

}
