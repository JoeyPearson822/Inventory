import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(private service: ItemService) { }

  itemList!: Item[];
  ngOnInit(): void {
      this.service.findAll().subscribe((data) => {
        this.itemList = data;
        console.log(this.itemList);
      });
  }

}
