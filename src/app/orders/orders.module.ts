import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { SharedModule } from '../shared/shared.module';
import { ngModuleTestApp } from '../app.module';

const _ngModule = {
  imports: [
    SharedModule,
    OrdersRoutingModule
  ],
  declarations: [OrdersComponent]
};

@NgModule(_ngModule)
export class OrdersModule { }

//Para testing with jest
let ngModuleTest = ngModuleTestApp;
ngModuleTest.imports = ngModuleTest.imports.concat(_ngModule.imports);
ngModuleTest.declarations = ngModuleTest.declarations.concat(_ngModule.declarations);
export const ngModuleTestOrders = ngModuleTest;


