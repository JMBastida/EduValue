import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'university-filters',
  templateUrl: './university-filters.component.html',
  styleUrls: ['./university-filters.component.scss']
})
export class UniversityFiltersComponent implements OnInit {

  @Output() searchcriteria = new EventEmitter<String>();
  searchText = '';
  focus: any;

  constructor() { }

  ngOnInit(): void {
  }

  searchForThis() {
    this.searchcriteria.emit(this.searchText)
  }

}
