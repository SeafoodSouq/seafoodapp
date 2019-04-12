import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GuidesComponent } from './guides.component';

const routes: Routes = [
  { path: "", component: GuidesComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
