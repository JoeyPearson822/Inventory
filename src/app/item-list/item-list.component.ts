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

    this.itemList = [{"id":1,"name":"bottle cap","quantity":999,"price":0.99,"warehouseId":2,"supplierId":2,"minQty":100,"maxQty":1000},
      {"id":2,"name":"bottle","quantity":101,"price":0.99,"warehouseId":2,"supplierId":2,"minQty":100,"maxQty":1000},
      {"id":4,"name":"label","quantity":500,"price":0.99,"warehouseId":2,"supplierId":2,"minQty":100,"maxQty":1000},
      {"id":5,"name":"screw","quantity":650,"price":0.42,"warehouseId":1,"supplierId":1,"minQty":10,"maxQty":10000}];

      this.service.findAll().subscribe((data) => {
        this.itemList = data;
        console.log(this.itemList);
      });
  }

  onUpdateItem(item: Item) {
    this.service.currentItemToSave = item;
    this.router.navigate(['/add'])
  }

  onDeleteItem(id: number) {
    this.service.delete(id);
    this.service.findAll().subscribe((data) => {
      this.itemList = data;
    });
  }
}
