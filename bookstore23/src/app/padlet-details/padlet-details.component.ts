import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: []
})
export class PadletDetailsComponent implements OnInit {
  //@Input() padlet: Padlet | undefined
  //@Output() showListEvent = new EventEmitter<any>();

  constructor(
    private ps: PadletService,
    private route: ActivatedRoute
  ) {
  }

  padlet: Padlet | undefined;
  entries: Entrie[] = [];

  /*showPadletList(){
      this.showListEvent.emit();
    }*/

  ngOnInit() {
    /*this.entries = [
      new Entrie( 1,
        new User(3, "fN3", "lN3", "user3@test.com","secret", "url"),
        new Padlet(3, true, new User(4, "test", "test", "test@test.at", "secret", "url"),"Entrie"),
        "Entrie 1", "Content von Entrie"),
      new Entrie( 2,
        new User(4, "fN3", "lN3", "user3@test.com","secret", "url"),
        new Padlet(4, true, new User(5, "test", "test", "test@test.at", "secret", "url"),"Entrie"),
        "Entrie 2", "Content von Entrie")
    ]
    console.log(this.entries);*/
    const params = this.route.snapshot.params;
    this.padlet = this.ps.getSinglePadlet(params['id']);
    this.entries = this.ps.getAllEntries(params['id']);
  }
}
