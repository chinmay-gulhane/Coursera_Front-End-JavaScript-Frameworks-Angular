import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes'; not the ideal way , we will do this ny using a service
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /* array dishes of type Dish */
  dishes: Dish[];

  // selectedDish: Dish = DISHES[0];
  selectedDish: Dish;

   constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }


}
