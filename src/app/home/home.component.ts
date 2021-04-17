import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { promotions } from '../shared/promotions';
import { PromotionsService } from '../services/promotions.service';
import {Leader} from '../shared/leader';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish : Dish | undefined;
  promotion : promotions | undefined;
  leader : Leader | undefined;

  constructor(private dishservice: DishService , private promoservice: PromotionsService , private leaderservice : LeadersService ) { }

  ngOnInit(): void {
  
  this.dish = this.dishservice.getFeaturedDish();
  this.promotion = this.promoservice.getFeaturedPromotion();
  this.leader = this.leaderservice.getFeaturedLeader();

}}
