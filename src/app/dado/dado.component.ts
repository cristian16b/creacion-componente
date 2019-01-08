import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  valor: number;
  constructor() { }

  ngOnInit() {
    this.valor = Math.trunc(Math.random()*6)+1;
  }

}
//Nota para crear componentes usar el siguiente comando
//ng generate component <nombre del componente> en la consola, en la carpeta del proyecto
