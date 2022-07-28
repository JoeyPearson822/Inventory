import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {
  
  itemList!: Item[];
  
  itemToDelete: Item;
  constructor(private service: ItemService, private router: Router) {
    this.itemToDelete = service.currentItemToDelete;
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
        this.itemList = this.itemList?.filter((item)=> item.id != id)
    })
  }

  ngOnInit(): void {
  }
}
