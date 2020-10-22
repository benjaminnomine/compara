import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ordinateur } from '../ordinateur';
import { DataService } from '../data.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header bg-primary text-white" style="display: flex-block">
  <div><span><h3 class="modal-title" id="exampleModalLongTitle">{{ monOrdi.nom }}</h3></span></div>
  <div><span><h4 class="modal-subtitle text-muted">{{ monOrdi.ref }}</h4></span></div>
  <!-- -->
  <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="activeModal.dismiss('Cross click')" style="display: flex-right">
      <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <div>
      <table class="table table-bordered table-striped table-sm table-hover">
          <tr>
            <td>Prix</td>
            <td><ul><li>{{ monOrdi.prix}}$</li></ul></td>
          </tr>
          <tr>
              <td>Processeur</td>
              <td>
                  <ul>
                      <li>{{ monOrdi.processeur.type }}</li>
                      <li>{{ monOrdi.processeur.frequence }}</li>
                  </ul>
              </td>
          </tr>
          <tr>
              <td>Mémoire</td>
              <td>
                  <ul>
                      <li>Type : {{ monOrdi.ram.type }}</li>
                      <li>Fréquence : {{ monOrdi.ram.frequence }}</li>
                      <li>Quantité : {{ monOrdi.ram.quantitee }}</li>
                  </ul>
              </td>
          </tr>
          <tr>
              <td>Ecran</td>
              <td>
                  <ul>
                      <li>Taille : {{ monOrdi.ecran.taille }}"</li>
                      <li>Résolution : {{ monOrdi.ecran.resolution }}</li>
                  </ul>
              </td>
          </tr>
          <tr>
              <td>Stockage</td>
              <td>
                  <ul>
                      <li>{{ monOrdi.stockage }}</li>
                  </ul>
              </td>
          </tr>
          <tr>
              <td>Système d'exploitation</td>
              <td>
                  <ul>
                      <li>{{ monOrdi.os }}</li>
                  </ul>
              </td>
          </tr>
          <tr>
              <td>Connectique</td>
              <td>
                  <ul>
                      <li>Ports USB : {{ monOrdi.connectique.usb }}</li>
                      <li>Port Ethernet : {{ monOrdi.connectique.ethernet }}</li>
                      <li>Ports HDMI : {{ monOrdi.connectique.hdmi }}</li>
                      <li>Ports Audio : {{ monOrdi.connectique.audio }}</li>
                  </ul>
              </td>
          </tr>
          <tr>
              <td>Connectivité</td>
              <td>
                  <ul>
                      <li>Wifi : {{ monOrdi.connectivite.Wifi }}</li>
                      <li>Bluetooth : {{ monOrdi.connectivite.Bluetooth }}</li>
                  </ul>
              </td>
          </tr>
      </table>
  </div>
</div>
  `
})
// tslint:disable-next-line: component-class-suffix
export class NgbdModalContent {
  @Input() monOrdi: Ordinateur;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ordinateurs: Ordinateur[];
  selection: Ordinateur[] = [];
  compteur: number;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getOrdis();
    this.getSelection();
  }

  getOrdis(): void {
    this.dataService.getOrdis().subscribe(ordinateurs => this.ordinateurs = ordinateurs);
  }
  getSelection(): void {
    this.dataService.getSelection().subscribe(selection => this.selection = selection);
  }

  open(item: Ordinateur): void {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.monOrdi = item;
  }

  change(item: Ordinateur): void {
    if (item.isSelected)
      {
        this.selection.push(item);
        this.compteur++;
      }
    else
      {
        const index = this.selection.indexOf(item);
        this.selection.splice(index, 1);
        this.compteur--;
      }
    this.dataService.updateOrdi(item, item.id).subscribe();
    this.dataService.selection.next(this.selection);
  }
}
