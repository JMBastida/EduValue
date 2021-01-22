import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-non-university-filters',
  templateUrl: './non-university-filters.component.html',
  styleUrls: ['./non-university-filters.component.scss'],
})
export class NonUniversityFiltersComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  accordionStatus: boolean = true;
  searchText = '';
  focus: any;

  comunidades = [
    {
      nombre: 'Andalucia',
      provincias: [
        'Almeria',
        'Cadiz',
        'Cordoba',
        'Granada',
        'Huelva',
        'Jaen',
        'Malaga',
        'Sevilla',
      ],
    },
    { nombre: 'Aragón', provincias: ['Huesca', 'Teruel', 'Zaragoza'] },
    {
      nombre: 'Canarias',
      provincias: ['Las Palmas', 'Santa Cruz de Tenerife'],
    },
    { nombre: 'Cantabria', provincias: [''] },
    {
      nombre: 'Castilla y León',
      provincias: [
        'Avila',
        'Burgos',
        'Leon',
        'Palencia',
        'Salamanca',
        'Segovia',
        'Soria',
        'Valladolid',
        'Zamora',
      ],
    },
    {
      nombre: 'Castilla-La Mancha',
      provincias: [
        'Albacete',
        'Ciudad Real',
        'Cuenca',
        'Guadalajara',
        'Toledo',
      ],
    },
    {
      nombre: 'Cataluña',
      provincias: ['Barcelona', 'Girona', 'Lleida', 'Tarragona'],
    },
    { nombre: 'Ceuta', provincias: [''] },
    {
      nombre: 'Comunidad Valenciana',
      provincias: ['Alicante', 'Castellon', 'Valencia'],
    },
    { nombre: 'Comunidad de Madrid', provincias: [''] },
    { nombre: 'Extremadura', provincias: ['Badajoz', 'Caceres'] },
    {
      nombre: 'Galicia',
      provincias: ['A Coruña', 'Lugo', 'Ourense', 'Pontevedra'],
    },
    { nombre: 'Islas Baleares', provincias: [''] },
    { nombre: 'La Rioja', provincias: [''] },
    { nombre: 'Melilla', provincias: [''] },
    { nombre: 'Navarra', provincias: [''] },
    { nombre: 'País Vasco', provincias: ['Alava', 'Guipuzcoa', 'Vizcaya'] },
    { nombre: 'Principado de Asturias', provincias: [''] },
    { nombre: 'Región de Murcia', provincias: [''] },
  ];
  selectedRegion: number = 0;
  selectedProvince: number = 0;


  constructor() {
  }

  ngOnInit(): void {}

  accordionManage(event: boolean): void{
    this.accordionStatus = event;
  }
  searchForThis() {
    //api call
  }
}
