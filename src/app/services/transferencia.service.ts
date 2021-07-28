import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transferencia} from '../models/transferencia';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
    this.url = 'http://localhost:3000/transferencias';
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private hidratar(transferencia: any): void {
    transferencia.data = new Date();
  }
}
