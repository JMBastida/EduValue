import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from '../shared/model/university.model';
import universities from '../../assets/universities.json';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  university!: University;
  public universitiesList: University[] = universities;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    var element = document.getElementById('navbar-top');
    if (element) {
      element.classList.remove('navbar-transparent');
      element.classList.add('bg-danger');
    }
    this.route.params.subscribe((param) => {
      const id = param['id'];
      this.universitiesList.forEach((item) => {
        if (item.codigo_universidad === id) {
          this.university = item;
        }
      });
    });
  }
}
