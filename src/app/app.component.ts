import { Component, HostListener, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'EduValue';
  constructor(private locaction: Location, @Inject(DOCUMENT) document: any, private router: Router) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {

    if (window.pageYOffset > 100) {
      console.log(this.router.url);

      var element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-danger');
      }
    } else {
      var element = document.getElementById('navbar-top');
      if (element && !this.router.url.includes('/universidad')) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-danger');
      }
    }
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    this.onWindowScroll(event);
  }
}
