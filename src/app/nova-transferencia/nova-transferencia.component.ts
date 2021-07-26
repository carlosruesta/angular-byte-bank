import {Component} from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number = 123;
  destino: number = 222;
  transferir() {
    console.log('Solicitada nova transferência');
    console.log(this.valor, this.destino);
  }
}
