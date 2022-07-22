import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  itemToSave: Item;
  constructor(private service: ItemService) {
    this.itemToSave = service.currentItemToSave;
  }

  save(item: Item): void {
    this.service.save(item).subscribe(data => {
        console.log(data);
    })
  }

  ngOnInit(): void {

  }

}
