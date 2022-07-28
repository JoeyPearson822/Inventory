import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/Item';
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(private service: ItemService, private router: Router) { }

  itemList!: Item[];


  ngOnInit(): void {

      this.service.findAll().subscribe((data) => {
        this.itemList = data;
        console.log(this.itemList);
      });
  }

  onUpdateItem(item: Item) {
    this.service.currentItemToUpdate = item;
    this.service.update(item);
    this.router.navigate(['/update']);
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
        this.itemList = this.itemList?.filter((item)=> item.id != id)
    })
  }

  // onDeleteItem(id: number) {
  //   alert("onDelete called");
  //   //this.service.currentItemToDelete = item;
  //   this.service.delete(id);
  //   // this.router.navigate(['/delete']);
  //   // this.service.findAll().subscribe((data) => {
  //   //   this.itemList = data;
  //   //   });
  // }
}
