import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: "", component: SellerComponent }
];

@NgModule({
  imports: [SharedModule,  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
