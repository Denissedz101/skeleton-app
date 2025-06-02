import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pag-form-registro',
  templateUrl: './pag-form-registro.page.html',
  styleUrls: ['./pag-form-registro.page.scss'],
  standalone: false,
})
export class PagFormRegistroPage {
  
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private router: Router
  ) {
	this.formulario = this.fb.group({
		nombreuser: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,8}$')]],
		nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
		apellidoPat: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
		apellidoMat: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
		fechaNac: ['', [Validators.required]],
		region: ['', Validators.required],
		comuna: ['', Validators.required],
		password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
		});
  }

  limpiar() {
    this.formulario.reset();
  }

  async mostrar() {
    const { nombre, apellidoPat, apellidoMat } = this.formulario.value;
    const alert = await this.alertCtrl.create({
      header: 'Información',
      message: `Nombre completo: ${nombre} ${apellidoPat} ${apellidoMat}`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  guardar() {
  if (this.formulario.valid && this.esMayor18(this.formulario.value.fechaNac)) {
    const datos = this.formulario.value;

    // Guardar datos en localStorage
    localStorage.setItem('usuarioRegistrado', JSON.stringify(datos));

    // Redirigir al login
    this.router.navigate(['/pag-login']);
  } else {
    alert('Verifique que todos los campos estén correctos y que sea mayor de 18 años.');
  }
}

  private esMayor18(fecha: string): boolean {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad > 18 || (edad === 18 && hoy >= new Date(nacimiento.setFullYear(nacimiento.getFullYear() + 18)));
  }




}
