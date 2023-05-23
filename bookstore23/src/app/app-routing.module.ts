import {RouterModule, Routes} from "@angular/router";
import {PadletListComponent} from "./padlet-list/padlet-list.component";
import {PadletDetailsComponent} from "./padlet-details/padlet-details.component";
import {NgModule} from "@angular/core";
import {PadletFormComponent} from "./padlet-form/padlet-form.component";
import {EntrieFormComponent} from "./entrie-form/entrie-form.component";
import {RatingFormComponent} from "./rating-form/rating-form.component";
import {CommentFormComponent} from "./comment-form/comment-form.component";

const routes: Routes = [
  { path: '', redirectTo: 'padlets', pathMatch: 'full'},
  { path: 'padlets', component: PadletListComponent},
  { path: 'padlets/:id', component: PadletDetailsComponent},
  { path: 'padletsform', component: PadletFormComponent},
  { path: 'padletsform/:id', component: PadletFormComponent},
  { path: 'padlets/:padlet_id/entriesform', component: EntrieFormComponent},
  { path: 'padlets/:padlet_id/entriesform/:id', component: EntrieFormComponent},
  { path: 'padlets/:padlet_id/entries/:entrie_id/ratingsform', component: RatingFormComponent},
  { path: 'padlets/:padlet_id/entries/:entrie_id/commentsform', component: CommentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
