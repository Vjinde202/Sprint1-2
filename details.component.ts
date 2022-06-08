import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  id!:number;
  pizza : Pizza=new Pizza();
  constructor(private route: ActivatedRoute,
             private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pizza=new Pizza();
    this.pizzaService.getPizzaById(this.id).subscribe(data =>
      {
        this.pizza = data;
      })
  }

}
