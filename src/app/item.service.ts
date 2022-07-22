import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from './models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://localhost:8080/warehouse-app/item/';
  
  constructor(private htttpClient: HttpClient) { }


  findAll(): Observable<Item[]>{
    return this.htttpClient.get<Item[]>(this.url);
  }

  save(item: Item){
    return this.htttpClient.post<Item>(this.url, item);
  }
}
