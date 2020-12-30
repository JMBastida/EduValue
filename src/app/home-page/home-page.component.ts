import { Component, OnInit } from '@angular/core';
import universities from '../../assets/universities.json';
import { University } from '../shared/model/university.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  value = 0;
  searchFilter: string = '';
  constructor() { }

  public universitiesList: University[] = universities;

  ngOnInit(): void {
    this.value=10;
    setTimeout(() => {
      this.value=70;
    }, 3000);
  }

  searchThis(data: any) {
    console.log(data)
    this.searchFilter = data;
  }

}
