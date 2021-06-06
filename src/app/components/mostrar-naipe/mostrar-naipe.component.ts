import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-naipe',
  templateUrl: './mostrar-naipe.component.html',
  styleUrls: ['./mostrar-naipe.component.scss'],
})
export class MostrarNaipeComponent {

  insertNumber: number;
  arrayNaipes = [];

  generarNaipes() {
    switch (true) {
      case this.insertNumber == null:
        Swal.fire({
          title: 'Valor no válido',
          text: 'Introduzca un número mayor que cero',
          icon: 'info',
          confirmButtonText: 'Aceptar',
        });
        return

    case (this.insertNumber<= 0):
      Swal.fire({
        title: 'Valor no válido',
        text: 'Introduzca un número mayor que cero',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
      return
    case (this.insertNumber > 100):
      Swal.fire({
        title: 'Valor no válido',
        text: 'Introduzca un número inferior a 101',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
    return
    }

    this.arrayNaipes.splice(0, this.arrayNaipes.length);
    setTimeout(() => {
      this.arrayNaipes.length = this.insertNumber;
    }, 1);
  }

  generarNumero() {
    const RANDOMNUMBER = Math.floor(Math.random() * (101 - 1) + 1);
    this.insertNumber = RANDOMNUMBER;
  }
}
