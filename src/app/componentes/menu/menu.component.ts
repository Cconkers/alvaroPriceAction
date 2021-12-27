import { Component, OnInit } from '@angular/core';

interface menuItem {
  nombre: string;
  ruta: string;
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
    },
    {
      ruta: '/paginas/contacto',
      nombre: 'Contacto',
    },
    {
      ruta: '/paginas/formacion',
      nombre: 'Formacion',
    },
    {
      ruta: '/paginas/gratis',
      nombre: 'Gratis',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
