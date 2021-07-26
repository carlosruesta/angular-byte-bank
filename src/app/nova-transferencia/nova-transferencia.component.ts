import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    console.log(this.valor, this.destino);
    const dadosTransferencia = {
      valor: this.valor,
      destino: this.destino
    };
    this.aoTransferir.emit(dadosTransferencia);
  }
}
