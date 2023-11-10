import { Component, OnInit } from '@angular/core';
import { calcularPotencia } from '../potencia/potencia';
import { radicales } from '../radicales/radicales';
import { calcularResto } from '../resto/resto';
import { minimo } from '../minimo/minimo';
import { min } from 'rxjs';

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
    this.text = " La potencia es: " + this.result;
  }

  Radicales(){
    let myresult=1;
    myresult= radicales(this.operator1, this.operator2);
    this.result=myresult;
    this.Operacion=" √ ";
    this.text= "El resultado de la raíz es: "+this.result;
  }
  Resto(){
    let myresult=1;
    myresult= calcularResto(this.operator1, this.operator2);
    this.result=myresult;
    this.Operacion=" % ";
    this.text= "El resto es: "+this.result;
  }
  Minimo(){
    let myresult=1;
    myresult= minimo(this.operator1, this.operator2);
    this.result=myresult;
    this.Operacion=" < ";
    this.text= "El numero menor es: "+this.result;
  }

}