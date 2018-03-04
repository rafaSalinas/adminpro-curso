import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // El nombre dentro de ViewChild es el que le damos al elemento en el html, y el tipo usamos ElementRef propio de javascript, 
  // que crea un objeto con todos los datos del elemento html.
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number ) {
    // Podemos usar javascript normal para hacer referencia al name del input y asi evitar qeu pase de 100 asignandole el valor de progreso
    // Como getElementByName devuelve un array , el [0] seria la primera caja y no va a funcionar en el segundo incrementador
    // let elemHtml: any = document.getElementsByName('progreso')[0];

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // Una vez que usamos el decorador ViewChild ya no es necesario usar javascript, porque txtProgress es un objeto con todos los datos-
    // elemHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor( valor ) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return ;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return ;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);

    // Poner el foco en el elemento que estamos tras cambiar el valor. Es facil hacerlo con ElementRef. Pone el cursor dentro del input
    this.txtProgress.nativeElement.focus();
  }

}
