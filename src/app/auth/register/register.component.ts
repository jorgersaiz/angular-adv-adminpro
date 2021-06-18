import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false

  public registerForm = this.formBuilder.group({
    nombre: ['Jorge', [Validators.required]],
    email: ['test@gmail.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required]],
    password2: ['12345', [Validators.required]],
    terminos: [ true, [Validators.required]],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  })
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }


  crearUsuario(){
    this.formSubmitted = true
    console.log(this.registerForm.value);

    if(this.registerForm.invalid){
      return;      
    } 

    this.usuarioService
    .crearUsuario(  this.registerForm.value )
    .subscribe( resp => {

      console.log('Usuario creado');
      console.log(resp);
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error')
    } )
    
  }

  contrasenasNoValidas(): boolean{
    const pass1 = this.registerForm.get('password').value
    const pass2 = this.registerForm.get('password2').value

    if(pass1 !== pass2 && this.formSubmitted){
      return true
    } else {
      return false
    }
  }

  campoNoValido( campo : string): boolean {
    
    if( this.registerForm.get(campo).invalid && this.formSubmitted){
      return true
    } else {
      return false
    }
    
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos').valid && this.formSubmitted
  }

  passwordsIguales(pass1Name: string, pass2Name: string){
    
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name)
      const pass2Control = formGroup.get(pass2Name)

      if ( pass1Control.value === pass2Control.value ){
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({noEsIgual: true})
      }
    }
  }

  ngOnInit(): void {
  }

}
