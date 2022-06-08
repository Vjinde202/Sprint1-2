import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private endpoint ="http://localhost:8080/pizza";
  private insertEnd="http://localhost:8080/add";
  private deleteEnd="http://localhost:8080/delete";
  

  constructor(private httpClient: HttpClient) { }

  getPizzaList() :Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.endpoint}`);
  }


  insertPizza(pizza : Pizza):Observable<Object>{
    return this.httpClient.post(`${this.insertEnd}`,pizza);
  }

  getPizzaById(id:number):Observable<Pizza>{
    return this.httpClient.get<Pizza>(`${this.endpoint}/${id}`);
  }
  updatePizza(id:number, pizza: Pizza): Observable<Object>
  {
    return this.httpClient.put(`${this.endpoint}/${id}`,pizza);
  }
  deletePizza(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.deleteEnd}/${id}`);
  }
  
}
