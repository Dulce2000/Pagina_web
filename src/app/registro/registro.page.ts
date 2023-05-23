import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  onRegisterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {

  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'lastname': [null, Validators.compose([
        Validators.required
      ])],
      'usuario': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'used': [null, Validators.compose([
        Validators.required
      ])]
      ,
      'age': [null, Validators.compose([
        Validators.required
      ])],
      'phone': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  doSave() {
    console.log(this.onRegisterForm.value)
    this.userService.registerUser(this.onRegisterForm.value).subscribe((data: any) => {
      console.log(data)
      if (Object.is(data, null)) {
        window.alert("Error al registrar el usuario: El correo ingresado esta ya estaba registrado")
      } else {
        window.alert("Usuario registrado con exito")
      }
    });
  }

}
