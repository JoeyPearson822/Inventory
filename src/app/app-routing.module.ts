import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
  {
    path: 'add', component: NewItemComponent
  }, {
    path: 'list', component: ItemListComponent
  }, {
    path: 'update', component: UpdateItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
