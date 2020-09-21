import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActiveRequest} from '../../ngrx/models/active-request.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/reducers/index.reducer';
import { AddActiveRequest, ClearActiveRequests } from 'src/app/ngrx/actions/active-request.actions';

@Component({
  selector: 'app-more-dropdown',
  templateUrl: './more-dropdown.component.html',
  styleUrls: ['./more-dropdown.component.scss']
})
export class MoreDropdownComponent implements OnInit {
  @Input() isShow: boolean;

  length = 0;
  activeRequests:ActiveRequest[];
    
  constructor( private store: Store<AppState>) {
    store.select('activeRequests').subscribe(val => {this.activeRequests = val; this.length = val.length});     
  }

  ngOnInit(): void {
  }

  updateOrder(item: ActiveRequest): void {
    let tempData = this.activeRequests.slice(0, this.activeRequests.length-1);
    tempData.unshift(item);
    this.store.dispatch(new ClearActiveRequests());
    for(var i=0; i<tempData.length; i++) {
      this.store.dispatch(new AddActiveRequest(tempData[i]))
    }
  }
}
