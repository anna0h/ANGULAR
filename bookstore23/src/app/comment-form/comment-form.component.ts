import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentFactory} from "../shared/comment-factory";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrieFormErrorMessages} from "../entrie-form/entrie-form-error-messages";
import {Entrie} from "../shared/entrie";
import {Comment} from "../shared/comment";

@Component({
  selector: 'bs-comment-form',
  templateUrl: './comment-form.component.html',
  styles: [
  ]
})
export class CommentFormComponent implements OnInit{
  @Input() entrie: Entrie | undefined;

  commentForm: FormGroup;
  comment = CommentFactory.empty();
  errors: { [key: string] : string} = {};

  constructor(
    private fb: FormBuilder,
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.commentForm = this.fb.group({});
  }

  ngOnInit() {
    this.initComment();
  }

  initComment(){
    let sessionId: string = <string>sessionStorage.getItem("userId");
    this.commentForm = this.fb.group({
      entrie_id: [this.route.snapshot.params["entrie_id"], Validators.required],
      user_id : [sessionId, Validators.required],
      id: this.comment.id,
      comment: [this.comment, Validators.required],
    });
    this.commentForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm(){
    const id = this.route.snapshot.params["entrie_id"];
    const padlet_id = this.route.snapshot.params["padlet_id"];
    //console.log(id);
    //console.log(padlet_id);

    const comment: Comment = CommentFactory.fromObject(this.commentForm.value);
    this.ps.createComment(id, comment).subscribe(res => {
      this.comment = CommentFactory.empty();
      this.commentForm.reset(CommentFactory.empty());
      this.router.navigate(['padlets', padlet_id]);
    });
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.commentForm.invalid);
    this.errors = {};
    for (const message of EntrieFormErrorMessages) {
      const control = this.commentForm.get(message.forControl);
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
