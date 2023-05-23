import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RatingFactory} from "../shared/rating-factory";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Padlet} from "../shared/padlet";
import {PadletFactory} from "../shared/padlet-factory";
import {Rating} from "../shared/rating";
import {EntrieFormErrorMessages} from "../entrie-form/entrie-form-error-messages";

@Component({
  selector: 'bs-rating-form',
  templateUrl: './rating-form.component.html',
  styles: []
})
export class RatingFormComponent implements OnInit {
  ratingForm: FormGroup;
  rating = RatingFactory.empty();
  errors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ratingForm = this.fb.group({});
  }

  ngOnInit() {
    this.initRating();
  }

  initRating() {
    this.ratingForm = this.fb.group({
      entrie_id: [this.route.snapshot.params["entrie_id"], Validators.required],
      user_id: [1, Validators.required],
      rating: [this.rating, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
    this.ratingForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm() {
    const id = this.route.snapshot.params["entrie_id"];
    const padlet_id = this.route.snapshot.params["padlet_id"];
    console.log(id);
    console.log(padlet_id);
    const rating: Rating = RatingFactory.fromObject(this.ratingForm.value);
    //console.log(rating);
    this.ps.createRating(id, rating).subscribe(res => {
      this.rating = RatingFactory.empty();
      this.ratingForm.reset(RatingFactory.empty());
      this.router.navigate(['padlets', padlet_id]);
    });
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.ratingForm.invalid);
    this.errors = {};
    for (const message of EntrieFormErrorMessages) {
      const control = this.ratingForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
