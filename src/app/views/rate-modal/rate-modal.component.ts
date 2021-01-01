import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/shared/model/university.model';
import universities from '../../../assets/universities.json';
import { ModalComponent } from 'src/app/shared/services/modal/modal.component';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.scss']
})
export class RateModalComponent implements OnInit {

  searchFilter: string = '';
  public universitiesList: University[] = universities;

  constructor(private modalComponent: ModalComponent) { }

  ngOnInit(): void {
  }

  close(data: any) {
    this.modalComponent.close(data);
  }

  searchThis(data: any) {
    console.log(data)
    this.searchFilter = data;
  }

}
