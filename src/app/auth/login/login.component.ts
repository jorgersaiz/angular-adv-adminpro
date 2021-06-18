import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public formSubmitted = false

  public loginForm = this.formBuilder.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember:[localStorage.getItem('remember') || false]
  })
  constructor( private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) { }

  login(){

    // this.router.navigateByUrl("/")

    this.usuarioService
    .login(this.loginForm.value)
    .subscribe(resp => {

      if( this.loginForm.get('remember').value ){
        localStorage.setItem('email', this.loginForm.get('email').value)
        localStorage.setItem('remember', this.loginForm.get('remember').value)
      } else {
        localStorage.removeItem('email')
      }
      console.log(resp);
      
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error')
    })

    console.log(this.loginForm.value);
    
    
  }

  ngOnInit(): void {
  }

}
