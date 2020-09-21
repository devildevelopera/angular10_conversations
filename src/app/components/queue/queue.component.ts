import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  data = [
    {type: 'Chats', num: 248, time: '23 Mins', up: true, skills: ['Accounts', 'Billing', 'Level 1 Support', 'Orders', 'Technical Support']},
    {type: 'Calls', num: 57, time: '8 Mins', up: false, skills: ['Billing', 'Level 2 Support', 'Returns', 'Sales']},
    {type: 'Emails', num: 132, time: '4 Hrs', up: false, skills: ['Accounts', 'Shipping', 'Refunds', 'Technical Support']},
  ]

  openArDetail = false;
  length = 0;
  
  constructor(private store: Store<AppState>) {
    store.select('openArDetail').subscribe(val => {this.openArDetail = val.visible});
    store.select('activeRequests').subscribe(val => {this.length = val.length });
  }

  ngOnInit(): void {
  }

}
