import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  onPassForForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.onPassForForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])]
      });
  }
  doSend(){
    this.userService.recoverPass(this.onPassForForm.value).subscribe((data: any)=>{
      if (Object.is(data,null)) {
        window.alert("El correo no esta registrado en esta pagina")
      } else {
        window.alert("Contraseñana enviada por email")
      }
    })
  }

}
