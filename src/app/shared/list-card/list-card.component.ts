import { Component, Input, OnInit } from '@angular/core';
import { University } from '../model/university.model';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {
  @Input()university!: University;
  @Input()ratesActive: boolean = false;

  img = '../../../assets/img/james.jpg';
  caracteristicas = {
    code: '001',
    city: 'castelló',
    tipo1: 'privada',
    tipo2: 'presencial',
  };

  constructor() {}

  ngOnInit(): void {
  }
}
