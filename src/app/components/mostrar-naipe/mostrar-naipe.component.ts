import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-naipe',
  templateUrl: './mostrar-naipe.component.html',
  styleUrls: ['./mostrar-naipe.component.scss'],
})
export class MostrarNaipeComponent {
  //Variables:
  numeroIntroducido: number;
  arrayNaipes = [];
  // --FIN VARIABLES--

  constructor() {}

  // Metodos:
  generarNaipes() {
    if (this.numeroIntroducido == null) {
      Swal.fire({
        title: 'Por favor:',
        text: 'Introduzca un número mayor que cero',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });

      // alert('Introduzca un número mayor que cero');
      return;
    } else if (this.numeroIntroducido <= 0) {
      Swal.fire({
        title: 'Por favor:',
        text: 'Introduzca un número mayor que cero',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
      return;
    }
    this.arrayNaipes.splice(0, this.arrayNaipes.length);
    setTimeout(() => {
      this.arrayNaipes.length = this.numeroIntroducido;
    }, 1);
  }

  generarNumero() {
    const RANDOMNUMBER = Math.floor(Math.random() * (101 - 1) + 1);
    this.numeroIntroducido = RANDOMNUMBER;
  }
}
