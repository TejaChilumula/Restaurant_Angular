import { Component, OnInit, Input } from '@angular/core'; 
import { Dish } from '../shared/dish'
//import { MenuComponent } from '../menu/menu.component'


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish : Dish | undefined;
  ngOnInit(): void {
  }

}
