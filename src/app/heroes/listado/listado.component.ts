import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  /*constructor() {
    /* Se ejecuta primero
    console.log('constructor');
    
  }

  ngOnInit(): void {
    /* Inicializar cosas o servicios
    console.log('onInit');
  }*/

  heroes: string[] = ['Spedermna', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //this.heroes.splice(0, 2);
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
