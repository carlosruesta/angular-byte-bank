import {Component, EventEmitter, Output} from '@angular/core';
import {TransferenciaService} from '../services/transferencia.service';
import {Transferencia} from '../models/transferencia';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  constructor(
    private service: TransferenciaService,
    private router: Router
  ) { }

  transferir() {
    console.log('Solicitada nova transferência');
    console.log(this.valor, this.destino);
    const dadosTransferencia = {
      valor: this.valor,
      destino: this.destino
    };
    this.service.adicionar(dadosTransferencia).subscribe(
      // em caso sucesso
      (dados: Transferencia) => {
        console.log(dados);
        this.limparDados();
        this.router.navigateByUrl('extrato');
      },
      // em caso de erro
      (error) => {
        console.error(error);
      }
    );
  }

  limparDados() {
    this.valor = null;
    this.destino = null;
  }
}
