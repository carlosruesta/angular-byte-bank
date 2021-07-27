import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-byte-bank';
  transferencias: any[] = [];

  transferir($event) {
    this.transferencias.push($event);
  }
}
