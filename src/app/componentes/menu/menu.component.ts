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


  constructor() {}

  ngOnInit(): void {}
}
