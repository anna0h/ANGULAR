import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Padlet} from "../shared/padlet";
import {User} from "../shared/user";

@Component({
  selector: 'bs-padlet-list',
  templateUrl: './padlet-list.component.html',
  styles: []
})
export class PadletListComponent implements OnInit {
  padlets: Padlet[] = [];

  @Output() showDetailsEvent = new EventEmitter<Padlet>();

  ngOnInit(){
    this.padlets = [
      new Padlet(1, false,
        new User(1, 'Anna', 'Hornbachner', 'anna@test.com', 'secret', 'url'),
        'Padlet 1'),
      new Padlet(2, true,
        new User(2, 'fN2', 'lN2', 'user2@test.com', 'secret', 'url'),
        'Padlet 2')
    ]
    //console.log(this.padlets);
  }

  showDetails(padlet:Padlet){
    this.showDetailsEvent.emit(padlet);
  }
}
