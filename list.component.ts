import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  pizzas!: Pizza[];

  constructor(private pizzaService : PizzaService , private router: Router) { }


  ngOnInit(): void {

    this.getPizza();
  }
  private getPizza()
  {
    this.pizzaService.getPizzaList().subscribe(data =>
      {
        this.pizzas=data;
      })
  }
  updatePizza(id:number)
  {
     this.router.navigate(['update',id]);
  }
  deletePizza(id:number)
  {
    this.pizzaService.deletePizza(id).subscribe(data =>
      {
        console.log(data);
        this.getPizza();
      })
  }
 pizzaDetails(id:number)
 {
   this.router.navigate(['details',id]);
 }
}
