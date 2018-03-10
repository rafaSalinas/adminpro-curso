import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor( @Inject(DOCUMENT) private _document ) { 
    // Incluimos la llamada a cargar ajustes para quee al llamar al servicion cargue los ajustes guardados
    // Y en el AppComponent que es el componente principal , inyectamos un objeto ajustes que es de esta
    // clase del servicio
    this.cargarAjustes();
  }

  guardarAjustes() {
    // localStorage solo graba strings, por lo que usamos la funcion de JSON , stringify
    // para hacer un string del objeto ajustes
    localStorage.setItem( 'ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes')) {
      // Para convertir el string en un objeto usamos la funcion parse de JSON
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));

      this.aplicarTema(this.ajustes.tema);
    } else {
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema( tema: string ) {
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    // Aqui asignamos los valores seleccionados al objeto ajustes del servicio
    // que hemos inyectado en el constructor
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    // Guardamos los ajustes
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
