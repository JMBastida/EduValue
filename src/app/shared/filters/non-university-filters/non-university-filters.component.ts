import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-non-university-filters',
  templateUrl: './non-university-filters.component.html',
  styleUrls: ['./non-university-filters.component.scss'],
})
export class NonUniversityFiltersComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  accordionStatus: boolean = false;

  searchText = '';

  constructor() {}

  ngOnInit(): void {}

  searchForThis() {
    this.searchcriteria.emit(this.searchText);
  }
}
