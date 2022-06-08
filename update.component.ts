import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  pizza: Pizza = new Pizza();

  constructor(private pizzaService : PizzaService,
          private route: ActivatedRoute,
          private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.pizzaService.getPizzaById(this.id).subscribe(data =>
      {
        this.pizza=data;
      },
      error => console.log(error));

    
  }
  onSubmit(){
    this.pizzaService.updatePizza(this.id, this.pizza).subscribe(data =>
      {
        this.goToList();
      },
      error=>console.log(error));
    
  }
  goToList()
  {
    this.router.navigate(['/pizza']);
  }

}
