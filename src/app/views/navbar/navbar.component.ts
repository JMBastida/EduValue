import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { RateModalComponent } from '../rate-modal/rate-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  constructor(public dialog: ModalService) {}

  ngOnInit(): void {}

  showRatingModal() {
		this.dialog.present(RateModalComponent);
  }
}
