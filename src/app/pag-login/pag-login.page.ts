import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-login',
  templateUrl: './pag-login.page.html',
  styleUrls: ['./pag-login.page.scss'],
  standalone: false,
})
export class PagLoginPage {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
	this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,8}$')]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
    });
  
  }

  onSubmit() {
  if (this.loginForm.valid) {
    const { usuario, password } = this.loginForm.value;
    const datosRegistrados = localStorage.getItem('usuarioRegistrado');

    if (datosRegistrados) {
      const datos = JSON.parse(datosRegistrados);

      if (usuario === datos.nombreuser && password === datos.password) {
        this.router.navigate(['/pag-home'], { queryParams: { user: usuario }});
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('No hay usuario registrado. Por favor, regístrese primero.');
    }
  } else {
    alert('Complete correctamente el formulario.');
  }
}


  irARegistro() {
    this.router.navigate(['/pag-form-registro']);
  }

}
