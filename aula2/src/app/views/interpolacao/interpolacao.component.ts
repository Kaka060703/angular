import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent {
  nomeClasse = 'pais';
  grita(value: string){
    return value.toUpperCase();
  }
}
