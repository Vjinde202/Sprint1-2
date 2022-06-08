import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  pizza: Pizza=new Pizza();

  constructor(private pizzaService: PizzaService,
        private router: Router) { }

  ngOnInit(): void {
  }

  savePizza()
  {
    this.pizzaService.insertPizza(this.pizza).subscribe(data =>
      {
        console.log(data);
        this.goToList();
      },
      error => console.log(error));
  }


  goToList()
  {
    this.router.navigate(['/pizza']);
  }
  onSubmit()
  {
  console.log(this.pizza);
  this.savePizza();
  }

}
