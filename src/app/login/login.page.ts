import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  onLoginForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService
    ) { }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
      });
  }
  doCheck(){
    this.userService.loginUser(this.onLoginForm.value).subscribe((data: any)=>{
      if (Object.is(data,null)) {
        window.alert("El correo o la contraseña son incorrectos")
      } else {
        window.alert("las credenciales son validas")
      }
    })
  }
}
