import { Component, OnInit } from '@angular/core';
import universities from '../../assets/universities.json';
import { University } from '../shared/model/university.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  university: boolean = true;
  searchFilter: string = '';
  regions: string[] = [
    'Comunitat Valenciana',
    'Extremadura',
    'Balears (Illes)',
    'Cataluña',
    'Andalucía',
    'Galicia',
    'Castilla y León',
    'Madrid (Comunidad de)',
    'Murcia (Región de)',
    'Asturias (Principado de)',
    'Canarias',
    'Cantabria',
    'País Vasco',
    'Aragón',
    'Estado',
    'Navarra (Comunidad Foral de)',
    'Castilla _ La Mancha',
    'Rioja (La)',
  ];

  constructor() {}

  public universitiesList: University[] = universities;

  ngOnInit(): void {
    /*const unique = [
      ...new Set(this.universitiesList.map((item) => item.comunidad_autonoma)),
    ];
    console.log(unique);*/
  }

  searchThis(data: any) {
    console.log(data);
    this.searchFilter = data;
  }
}
