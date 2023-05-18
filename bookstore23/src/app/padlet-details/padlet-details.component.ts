import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PadletFactory} from "../shared/padlet-factory";
import {UserFactory} from "../shared/user-factory";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: []
})
export class PadletDetailsComponent implements OnInit {
  //@Input() padlet: Padlet | undefined
  //@Output() showListEvent = new EventEmitter<any>();

  //padlet: Padlet | undefined;
  padlet: Padlet = PadletFactory.empty();
  //entries: Entrie[] = [];
  //user: User = UserFactory.empty();

  constructor(
    private ps: PadletService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    /*this.ps.getSinglePadlet(params['id'])
      .subscribe((p: Padlet) => {
        this.padlet = p;
        this.entries = this.padlet.entries;
        this.user = this.padlet.user;
      });*/
    //console.log(this.padlet);
    this.ps.getSinglePadlet(params['id']).subscribe((p:Padlet) => {this.padlet = p;
      console.log(this.padlet);
    });
  }
}
