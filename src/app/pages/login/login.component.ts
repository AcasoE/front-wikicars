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
  private formBuilder: FormBuilder
){
  this.loginForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
}

public login (){
  if (this.loginForm?.valid) {
    this.authservice.login(this.loginForm.value).subscribe({
      next: (res) => console.log(res),
      error: (err) => {
        this.formError = err.console.error();
        
      }
      
    });
    this.loginForm.reset()
  }
}

}
