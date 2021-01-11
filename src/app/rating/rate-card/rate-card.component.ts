import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.scss']
})
export class RateCardComponent implements OnInit {

  @Input() style: string = "primary";
  @Input() title: string = "";
  @Input() desc: string | undefined;
  status: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.desc);

  }

  countSelector(count: number): void {
    this.status === count ? this.status = 0 : this.status = count;
  }

}
