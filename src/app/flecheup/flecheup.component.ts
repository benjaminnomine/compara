import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-flecheup',
  templateUrl: './flecheup.component.html',
  styleUrls: ['./flecheup.component.scss'],
})
export class FlecheupComponent implements OnInit {
  isShow: boolean;
  topPosToStartShowing = 150;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
