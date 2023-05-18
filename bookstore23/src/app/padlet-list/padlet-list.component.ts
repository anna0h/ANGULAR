import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Padlet} from "../shared/padlet";
import {User} from "../shared/user";
import {PadletService} from "../shared/padlet.service";
import {Entrie} from "../shared/entrie";

@Component({
  selector: 'bs-padlet-list',
  templateUrl: './padlet-list.component.html',
  styles: []
})
export class PadletListComponent implements OnInit {
  padlets: Padlet[] = [];

  /*@Output() showDetailsEvent = new EventEmitter<Padlet>();*/
  constructor(
    private ps: PadletService
  ) {}

  ngOnInit() {
    this.ps.getAllPadlets().subscribe(res=>this.padlets = res);
  }

  /*
  showDetails(padlet:Padlet) {
    this.showDetailsEvent.emit(padlet)
  }*/

}
