import { Component, OnInit } from '@angular/core';

interface menuItem {
  nombre: string;
  ruta: string;
  children: string[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: menuItem[] = [
    {
      ruta: '/paginas/inicio',
      nombre: 'Inicio',
      children:[]
    },
    {
      ruta: '/paginas/contacto',
      nombre: 'Contacto',
      children: [
        {
          ruta: '/paginas/inicio',
          nombre: 'Inicio',
        },
        {
          ruta: '/paginas/inicio',
          nombre: 'Inicio',
        },
      ]
    },
    {
      ruta: '/paginas/formacion',
      nombre: 'Formacion',
      children: [
        {
          ruta: '/paginas/inicio',
          nombre: 'Inicio',
        },
        {
          ruta: '/paginas/inicio',
          nombre: 'Inicio',
        },
      ]
    },
    {
      ruta: '/paginas/gratis',
      nombre: 'Gratis',
      children: [
        {
          ruta: '/paginas/inicio',
          nombre: 'Inicio',
        },
        {
          ruta: '/paginas/inicio',
          nombre: 'Inicio',
        },
      ]
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
