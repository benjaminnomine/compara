import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ordinateur } from '../ordinateur';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.scss']
})
export class ComparateurComponent implements OnInit {

  selection: Ordinateur[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getSelection();
  }

  getSelection(): void {
    this.dataService.selection.subscribe(selection => this.selection = selection);
  }

  calculerClass(): string {
    if ( this.selection.length === 2 )
    {
      return 'col-lg-6';
    }
    else if ( this.selection.length === 3 )
    {
      return 'col-lg-4';
    }
    else
    {
      return 'col-lg-3';
    }
  }
}
