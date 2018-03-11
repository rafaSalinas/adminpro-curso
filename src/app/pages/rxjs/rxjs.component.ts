import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regersaObservable()
      .subscribe(
         numero => console.log( 'Subscrito  ', numero),
         error =>  console.log( 'Error en obs', error),
         () => console.log( 'El observador termino' )
      );
  }

  ngOnInit() {
  }

  // Aqui nos desusbcribimos del observador
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regersaObservable(): Observable<any> {

    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next(salida); // El observable siempre emite la variabla contador cuando cambia en cada intervalo, es infinito
        // if ( contador === 3) {
        //  clearInterval( intervalo);
        //  observer.complete();
        // }

        // if ( contador === 2 ) {
        //  observer.error('Auxilio');
        // }
      }, 500);
    })
    .retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter( (valor, index) => {
      if ( (valor % 2) === 1 ) {
        // impar
        return true;
      } else {
        // par
        return false;
      }
    });
  }
}
