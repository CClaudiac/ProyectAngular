import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {

  constructor() { }

  public operandoA: number = 0;
  public operandoB: number = 0;
  public resultado: number = 0;

  ngOnInit(): void {}

  public sumar() {
    this.resultado = this.operandoA + this.operandoB;
  }

  public restar() {
    this.resultado = this.operandoA - this.operandoB;
  }

  public multiplicar(){
    this.resultado= this.operandoA * this.operandoB;
  }

  public dividir(){
    this.resultado = this.operandoA / this.operandoB;
  }
}

