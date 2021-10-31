import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { fisioOptions, fisioQuestions } from './fisio-questions';

@Component({
  selector: 'app-fisio',
  templateUrl: './fisio.component.html',
  styleUrls: ['./fisio.component.scss']
})
export class FisioComponent implements OnInit {
  questions: any[];
  fisioOptions: any;
  totalRespuestasCorrectas: number;
  submitted: boolean;
  cantidadPreguntas: number;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.questions = [];
    this.fisioOptions = fisioOptions;
    this.totalRespuestasCorrectas = 0;
    this.cantidadPreguntas = 0;
    this.submitted = false;
  }

  ngOnInit(): void {
    this.resetComponent();

    of(fisioQuestions).subscribe((info) => {
      let data = this.generateOptions(info);
      this.questions = data;
    });
  }

  private resetComponent() {
    this.questions = [];
    this.fisioOptions = fisioOptions;
    this.totalRespuestasCorrectas = 0;
    this.cantidadPreguntas = 0;
    this.submitted = false;
  }

  generateOptions(info: any[]): any[] {
    info.forEach(question => {
      //asignación de id
      question.id = Guid.newGuid();

      //options 
      question.options = Object.getOwnPropertyNames(fisioOptions);

      //generación aleatoria de valor
      question.randomValue = this.randomIntFromInterval(question.range.min, question.range.max);
    });

    //ordenamiento aleatorio
    info.sort((a, b) => a.id > b.id ? -1 : 1);

    //selecciono los primeros 10
    info = info.slice(0, 5);

    return info;
  }

  // min and max included 
  randomIntFromInterval(min: number, max: number) {
    let randomNumberInInterval = Math.random() * (max - min + 1) + min;

    let random = Math.random();
    if (random < 0.4) {
      randomNumberInInterval += (max - min) * Math.random() * -1;
    }
    else if (random > 0.6) {
      randomNumberInInterval += (max - min) * Math.random();
    }

    if (randomNumberInInterval < 0) {
      randomNumberInInterval = randomNumberInInterval * -1;
    }

    return randomNumberInInterval;
    // return Math.floor(randomNumberInInterval);
  }

  onSubmit(form: any) {
    if (!form.valid) {
      return;
    }
    this.calcularResultados();
    this.submitted = true;
    this.goTop();
  }

  calcularResultados() {
    this.totalRespuestasCorrectas = 0;
    this.cantidadPreguntas = 0;

    this.questions.forEach(question => {
      let lower = question.randomValue < question.range.min
      let higher = question.randomValue > question.range.max;
      let inRange = lower == false && higher == false;

      //cuál era la respuesta correcta?
      question.respuestaCorrecta = higher ? 'mayor' : lower ? 'menor' : 'normal';

      //la respuesta es correcta?
      question.respuestaEsCorrecta = question.response == question.respuestaCorrecta;

      this.cantidadPreguntas++;
      if (question.respuestaEsCorrecta) {
        this.totalRespuestasCorrectas++;
      }
    });
  }


  goTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })()
  }
}

export class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}