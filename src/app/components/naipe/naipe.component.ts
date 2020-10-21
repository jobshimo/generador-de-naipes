import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naipe',
  templateUrl: './naipe.component.html',
  styleUrls: ['./naipe.component.scss'],
})
export class NaipeComponent implements OnInit {
  // Variables:
  valorNaipe: number;
  stringNaipe: string;
  paloNaipe: number;
  srcNaipe: string;
  textura: string;
  valorTextura: number;
  classPalo: string;
  classPaloSub: string;
  classPaloSubRotate: string;

  classDorso: string = 'card-img-top texturaDorso';
  classDelante: string = 'card naipe';

  // Costructor:
  constructor() {
    const RANDOMNUMBER: number = Math.floor(Math.random() * (14 - 1) + 1);
    const RANDOMPALO: number = Math.floor(Math.random() * (5 - 1) + 1);
    const RANDOMTEXTURA: number = Math.floor(Math.random() * (13 - 1) + 1);
    this.valorNaipe = RANDOMNUMBER;
    this.paloNaipe = RANDOMPALO;
    this.valorTextura = RANDOMTEXTURA;
  }

  ngOnInit(): void {
    this.getStringValor();
    this.getPalo();
    this.getTextura();
  }

  // Metodos:

  voltear() {
    const VOLTEAR = 'card-img-top texturaDorso animated flipOutY slow';

    this.classDorso = VOLTEAR;
    this.classDelante = 'card naipe animated flipInY slow';
  }

  getTextura() {
    const TEXTURA1 = '../../../assets/palos/textura2.png';
    const TEXTURA2 = '../../../assets/palos/textura3.png';
    const TEXTURA3 = '../../../assets/palos/textura4.png';
    const TEXTURA4 = '../../../assets/palos/textura5.png';
    const TEXTURA5 = '../../../assets/palos/textura6.png';
    const TEXTURA6 = '../../../assets/palos/textura7.png';
    const TEXTURA7 = '../../../assets/palos/textura8.png';
    const TEXTURA8 = '../../../assets/palos/textura9.png';
    const TEXTURA9 = '../../../assets/palos/textura10.png';
    const TEXTURA10 = '../../../assets/palos/textura11.png';
    const TEXTURA11 = '../../../assets/palos/textura12.png';
    const TEXTURA12 = '../../../assets/palos/textura13.png';

    switch (this.valorTextura) {
      case 1:
        this.textura = TEXTURA1;
        break;
      case 2:
        this.textura = TEXTURA2;
        break;
      case 3:
        this.textura = TEXTURA3;
        break;
      case 4:
        this.textura = TEXTURA4;
        break;
      case 5:
        this.textura = TEXTURA5;
        break;
      case 6:
        this.textura = TEXTURA6;
        break;
      case 7:
        this.textura = TEXTURA7;
        break;
      case 8:
        this.textura = TEXTURA8;
        break;
      case 9:
        this.textura = TEXTURA9;
        break;
      case 10:
        this.textura = TEXTURA10;
        break;
      case 11:
        this.textura = TEXTURA11;
        break;
      case 12:
        this.textura = TEXTURA12;
        break;
    }
  }

  getPalo() {
    const HEART = '../../../assets/palos/final/heart.png';
    const SPADE = '../../../assets/palos/final/spade.png';
    const CLOVER = '../../../assets/palos/final/clover.png';
    const DIAMOND = '../../../assets/palos/final/diamond.png';

    switch (this.paloNaipe) {
      case 1:
        this.srcNaipe = HEART;
        this.classPalo = 'valorNaipeRojo';
        this.classPaloSub = 'subNaipeRojo';
        this.classPaloSubRotate = 'subNaipeRotateRojo';

        break;
      case 2:
        this.srcNaipe = SPADE;
        this.classPalo = 'valorNaipeNegro';
        this.classPaloSub = 'subNaipe';
        this.classPaloSubRotate = 'subNaipeRotate';
        break;
      case 3:
        this.srcNaipe = CLOVER;
        this.classPalo = 'valorNaipeNegro';
        this.classPaloSub = 'subNaipe';
        this.classPaloSubRotate = 'subNaipeRotate';
        break;
      case 4:
        this.srcNaipe = DIAMOND;
        this.classPalo = 'valorNaipeRojo';
        this.classPaloSub = 'subNaipeRojo';
        this.classPaloSubRotate = 'subNaipeRotateRojo';

        break;
    }
  }

  getStringValor() {
    switch (this.valorNaipe) {
      case 1:
        this.stringNaipe = 'A';
        break;
      case 2:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 3:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 4:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 5:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 6:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 7:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 8:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 9:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 10:
        this.stringNaipe = this.valorNaipe.toString();
        break;
      case 11:
        this.stringNaipe = 'J';
        break;
      case 12:
        this.stringNaipe = 'Q';
        break;
      case 13:
        this.stringNaipe = 'K';
        break;
    }
  }
}
