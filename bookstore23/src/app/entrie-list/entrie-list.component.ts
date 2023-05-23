import {Component, OnInit} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";

@Component({
  selector: 'bs-entrie-list',
  templateUrl: './entrie-list.component.html',
  styles: [
  ]
})
export class EntrieListComponent implements OnInit{
  //entries: Entrie[] = [];

  /*ngOnInit() {
    this.entries = [
      new Entrie( 1,
        new User(3, "fN3", "lN3", "user3@test.com","secret", "url"),
        new Padlet(3, true, new User(4, "test", "test", "test@test.at", "secret", "url"),"Entrie"),
        "neuer Entrie", "Content von Entrie"),
      new Entrie( 2,
        new User(4, "fN3", "lN3", "user3@test.com","secret", "url"),
        new Padlet(4, true, new User(5, "test", "test", "test@test.at", "secret", "url"),"Entrie"),
        "neuer Entrie", "Content von Entrie")
    ]
    console.log(this.entries);
  }*/

}
