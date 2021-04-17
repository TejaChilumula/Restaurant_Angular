import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import {Leader} from '../shared/leader'
import { FileDetector } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }
  getLeaders() : Leader[]{
    return LEADERS;
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader)=>(leader.featured))[0]
  }

}
