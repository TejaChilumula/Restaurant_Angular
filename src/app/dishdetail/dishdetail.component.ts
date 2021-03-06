import { Component, OnInit, Input } from '@angular/core'; 
import { Dish } from '../shared/dish'
//import { MenuComponent } from '../menu/menu.component'
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish : Dish | undefined;

  constructor(private dishservice : DishService ,private route : ActivatedRoute ,private location : Location ){}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }
  goback() : void{
    this.location.back();
  }
}
