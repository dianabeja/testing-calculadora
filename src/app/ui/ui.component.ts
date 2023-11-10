import { Component, OnInit } from '@angular/core';
import { calcularPotencia } from '../potencia/potencia';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  operator1 = 0;
  operator2 = 0;
  text = " ";

  Operacion = " ";

  ngOnInit() {
  }

  Potencia() {
    let myresult = 1;
    myresult = calcularPotencia(this.operator1, this.operator2);

    this.result = myresult;
    this.Operacion = " ^ "
    this.text = " La potencia es es: " + this.result;
  }

}