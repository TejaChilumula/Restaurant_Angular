import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { promotions } from '../shared/promotions';
import { PromotionsService } from '../services/promotions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish : Dish | undefined;
  promotion : promotions | undefined;

  constructor(private dishservice: DishService , private promoservice: PromotionsService) { }

  ngOnInit(): void {
  
  this.dish = this.dishservice.getFeaturedDish();
  this.promotion = this.promoservice.getFeaturedPromotion();

}}
