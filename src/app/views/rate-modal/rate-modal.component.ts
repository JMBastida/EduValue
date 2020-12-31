import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/services/modal/modal.component';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.scss']
})
export class RateModalComponent implements OnInit {

  constructor(private modalComponent: ModalComponent) { }

  ngOnInit(): void {
  }

  close(data: any) {
    this.modalComponent.close(data);
  }

}
