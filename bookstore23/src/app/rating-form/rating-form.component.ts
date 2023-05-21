import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RatingFactory} from "../shared/rating-factory";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Padlet} from "../shared/padlet";
import {PadletFactory} from "../shared/padlet-factory";
import {Rating} from "../shared/rating";

@Component({
  selector: 'bs-rating-form',
  templateUrl: './rating-form.component.html',
  styles: [
  ]
})
export class RatingFormComponent implements OnInit{
  ratingForm: FormGroup;
  rating = RatingFactory.empty();
  errors: { [key: string] : string} = {};

  constructor(
    private fb: FormBuilder,
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ratingForm = this.fb.group({});
  }

  ngOnInit() {
    this.initRating;
  }

  initRating(){
    this.ratingForm = this.fb.group({
      rating: [this.rating.rating, [Validators.required, Validators.min(0), Validators.max(5)]],
    });
    this.ratingForm.statusChanges.subscribe(() =>
    this.updateErrorMessages());
  }

  submitForm(){
    const id = this.route.snapshot.params["entrie_id"];
    console.log(id);
    const rating: Rating = RatingFactory.fromObject(this.ratingForm.value);
    rating.user_id = 1; // just for testing
    //console.log(rating);
    /*this.ps.createRating(this.id, rating).subscribe(res => {
      this.rating = RatingFactory.empty();
      this.ratingForm.reset(RatingFactory.empty());
      this.router.navigate(['padlets'], { relativeTo: this.route });
    });*/
  }

  updateErrorMessages(){

  }
}
