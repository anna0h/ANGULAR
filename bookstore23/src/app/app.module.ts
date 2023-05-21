import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadletListComponent } from './padlet-list/padlet-list.component';
import { PadletListItemComponent } from './padlet-list-item/padlet-list-item.component';
import { PadletDetailsComponent } from './padlet-details/padlet-details.component';
import { EntrieItemComponent } from './entrie-item/entrie-item.component';
import {PadletService} from "./shared/padlet.service";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { PadletFormComponent } from './padlet-form/padlet-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EntrieFormComponent } from './entrie-form/entrie-form.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PadletListComponent,
    PadletListItemComponent,
    PadletDetailsComponent,
    EntrieItemComponent,
    PadletFormComponent,
    EntrieFormComponent,
    RatingFormComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PadletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
