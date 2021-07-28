import {Component, Input, OnInit} from '@angular/core';
import {TransferenciaService} from '../services/transferencia.service';
import {Transferencia} from '../models/transferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe(
      (dados: Transferencia[]) => {
        console.table(dados);
        this.transferencias = dados;
    });
  }

}
