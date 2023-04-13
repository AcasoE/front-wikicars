import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegisterService } from './../../core/services/user/user-register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
public userForm?: FormGroup
public done: boolean = false
  constructor(
    private formBuilder: FormBuilder,
    private userRegisterService: UserRegisterService,
    private router: Router
  ){}


  public ngOnInit(): void {
    this.initform()
  }

  public initform(){
    this.userForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      rol: new FormControl('user', [Validators.required])
    })
  }
  public nuevoUsuario(){
    this.userRegisterService.newUser(this.userForm?.value).subscribe((user)=>{
      if(user){
        this.done = true
        this.router.navigate(['login'])
      }
    })
  }
}
