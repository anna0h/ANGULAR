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

  constructor(private ps:PadletService){}

  ngOnInit(){
    /*this.padlets = [
      new Padlet(1, false,
        new User(1, 'Anna', 'Hornbachner', 'anna@test.com', 'secret', 'url'),
        'Padlet 1'),
      new Padlet(2, true,
        new User(2, 'fN2', 'lN2', 'user2@test.com', 'secret', 'url'),
        'Padlet 2')
    ]*/
    //console.log(this.padlets);

    this.padlets = this.ps.getAllPadlets();
  }

}
