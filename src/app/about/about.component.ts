import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeadersService} from '../services/leaders.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders : Leader[] | undefined;
  constructor(private leaderservice : LeadersService) { }

  ngOnInit(): void {
    this.leaders = this.leaderservice.getLeaders();
  }

}
