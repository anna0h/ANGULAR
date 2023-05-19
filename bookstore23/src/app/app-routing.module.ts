import {RouterModule, Routes} from "@angular/router";
import {PadletListComponent} from "./padlet-list/padlet-list.component";
import {PadletDetailsComponent} from "./padlet-details/padlet-details.component";
import {NgModule} from "@angular/core";
import {PadletFormComponent} from "./padlet-form/padlet-form.component";

const routes: Routes = [
  { path: '', redirectTo: 'padlets', pathMatch: 'full'},
  { path: 'padlets', component: PadletListComponent},
  { path: 'padlets/:id', component: PadletDetailsComponent},
  { path: 'admin', component: PadletFormComponent},
  { path: 'admin/:id', component: PadletFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
