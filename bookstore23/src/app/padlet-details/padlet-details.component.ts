import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PadletFactory} from "../shared/padlet-factory";
import {UserFactory} from "../shared/user-factory";
import {EntrieFactory} from "../shared/entrie-factory";
import {Rating} from "../shared/rating";
import {Comment} from "../shared/comment";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: []
})
export class PadletDetailsComponent implements OnInit {
  padlet: Padlet = PadletFactory.empty();
  entries: Entrie[] = [];
  entrie: Entrie = EntrieFactory.empty();

  user: User = UserFactory.empty();

  constructor(
    private ps: PadletService,
    private router: Router,
    private route: ActivatedRoute,
    public authService:AuthenticationService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ps.getSinglePadlet(params['id'])
      .subscribe((p: Padlet) => {
        this.padlet = p;
        this.entries = this.padlet.entries;
        this.user = this.padlet.user;
        this.getRatings();
        this.getComments();
      });
  }

  getRatings() : void {
    for(let entrie of this.entries) {
      this.ps.getRatingsForEntrie(entrie.id).subscribe((res: Rating[]) => {
        entrie.ratings = res;
      })
    }
  }

  getRating(rating: number) {
    return Array(rating)
  }

  getComments() : void {
    for (let entrie of this.entries) {
      this.ps.getCommentsForEntrie(entrie.id).subscribe((res: Comment[]) => {
        //console.log(entrie.comments);
        entrie.comments = res;
      });
    }
  }

  removePadlet(){
    if (confirm('Padlet wirklich löschen?')) {
      this.ps.removePadlet(this.padlet.id)
        .subscribe((res:any) => this.router.navigate(['../'], { relativeTo:
          this.route }));
    }
  }

  removeEntrie(id: number){
    if (confirm('Entrie wirklich löschen?')) {
      this.ps.removeEntrie(id)
        .subscribe((res:any) => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/padlets', this.padlet.id ]); // springt zu padlets, dann in das richtige -> lädt also Seite neu
        }));

    }
  }

  isOwner(){
    let id: string = <string>sessionStorage.getItem("userId");
    if (this.padlet.user_id.toString() == id){
      return true;
    }
    else {
      return false;
    }
  }
}
