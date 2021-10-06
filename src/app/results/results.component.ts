import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() cantidadPreguntas: number;
  @Input() totalRespuestasCorrectas: number;
  porcentaje: number;

  constructor() {
    this.cantidadPreguntas = 0;
    this.totalRespuestasCorrectas = 0;
    this.porcentaje = 0;
  }

  ngOnInit(): void {
    if (this.cantidadPreguntas != 0) {
      this.porcentaje = this.totalRespuestasCorrectas / this.cantidadPreguntas;
    }
  }

}
