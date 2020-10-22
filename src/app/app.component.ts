import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'compara';
  public isCollapsed = true;

  goToBottom(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }
  goToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
