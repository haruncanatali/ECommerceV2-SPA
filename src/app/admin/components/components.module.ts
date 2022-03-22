import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [CustomersComponent,DashboardComponent,OrdersComponent,ProductsComponent],
  imports:[],
  exports: [
    CommonModule  
  ]
})
export class ComponentsModule { }
