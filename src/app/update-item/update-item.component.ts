import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  itemToUpdate: Item;
  constructor(private service: ItemService, private router: Router) {
    this.itemToUpdate = service.currentItemToUpdate;
  }

  update(item: Item): void {
    this.service.update(item).subscribe(data => {
        console.log(data);
    })

}

  ngOnInit(): void {
  }
  
}
