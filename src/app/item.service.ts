import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from './models/Item';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     Authorization: 'my-auth-token'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  currentItemToSave: Item = new Item();
  currentItemToUpdate: Item = new Item();
  currentItemToDelete: Item = new Item();

  url = 'http://localhost:8080/warehouse-app/item/';

  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.url);
    
  }

  save(item: Item){
    return this.httpClient.post<Item>(this.url, item);
    
  }

  update(item: Item){
    return this.httpClient.put<Item>(this.url, item);
    
  }


  delete(id: number): any{
    return this.httpClient.delete<any>(this.url, {"body":{"id": id}});
    
  }
}
