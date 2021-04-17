import { Injectable } from '@angular/core';
import {promotions} from '../shared/promotions'
import { PROMOTIONS } from '../shared/PromoList'

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor() { }
  getPromotions() : promotions[] {
    return PROMOTIONS;
  }
  getPromotion(id : string) : promotions {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0]
  }
  getFeaturedPromotion() : promotions {
    return PROMOTIONS.filter((promo) => (promo.featured))[0]
  }


}
