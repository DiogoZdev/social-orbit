import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginForm = true;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.setLoginForm();
  }

  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  setRegisterForm() {
    this.loginForm = this.formBuilder.group({
      name: ["", Validators.required],
      username: ["", [Validators.required, Validators.minLength(8)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  toggleRegister() {
    this.isLoginForm = !this.isLoginForm;
    this.isLoginForm ? this.setLoginForm() : this.setRegisterForm();
  }


  mainAction() {
    console.log(`form valido: ${ this.loginForm.valid }`);
    
    this.isLoginForm ? this.login() : this.register();
  }

  login() {
    console.log('clicou login')
    console.log(this.loginForm.value)
  }

  register() {
    console.log('clicou cadastrar')
    console.log(this.loginForm.value)
  }
}
