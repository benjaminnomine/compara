import { Component, OnInit, Input } from '@angular/core';
import { Ordinateur } from '../ordinateur';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  selection: Ordinateur[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getSelection();
  }

  getSelection(): void {
    this.dataService.selection.subscribe(selection => this.selection = selection);
  }

  getCounter(): number {
    return this.selection.length;
  }
  isCompare(): boolean {
    return this.router.url === '/comparateur';
  }
  isDash(): boolean {
    return this.router.url === '/dash';
  }
}
