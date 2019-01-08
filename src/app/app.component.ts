import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creacion-componente';
}

// NOTA: COMO AUDITAR Y SOLUCIONAR VULNERABILIDADES
// https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities
// USAR COMANDO npm audit en la consola, ubicados en la carpeta del proyecto