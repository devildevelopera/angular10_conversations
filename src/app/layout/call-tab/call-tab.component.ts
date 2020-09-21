import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { Store } from '@ngrx/store';
import { MoreTabsComponent } from '../../more/more-tabs/more-tabs.component';
import { OpenActiveRequestDetail, HideActiveRequestDetail } from 'src/app/ngrx/actions/open-ar-detail.action';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-call-tab',
  templateUrl: './call-tab.component.html',
  styleUrls: ['./call-tab.component.scss']
})
export class CallTabComponent implements OnInit {
  @ViewChild(MoreTabsComponent) MoreTabsComponent: MoreTabsComponent;
  curTab = 0;
  length = 0;
  open = false;
  openid = undefined;
  openedRequest: ActiveRequest;
  activeRequests: ActiveRequest[];
  name: string;
  phone: string;

  constructor(private store: Store<AppState>, private router: Router, private _location: Location) {
    store.select('activeRequests').subscribe(val => { this.activeRequests = val; this.length = val.length });
  }

  ngOnInit(): void {
  }

  setCallTab(curTab) {
    this.curTab = curTab;
  }

  openDetail(request: ActiveRequest, index: number): void {
    if (this.MoreTabsComponent) {
      this.MoreTabsComponent.isShow = false;
    }
    if (this.openid != index) {
      this.open = true;
    } else {
      this.open = !this.open;
    }
    this.openid = index;
    this.name = request.first_name + " " + request.last_name;
    this.phone = request.phone;
    this.openedRequest = request;
    if (this.open) {
      localStorage.setItem('openedRequest', JSON.stringify(this.openedRequest));
      this.store.dispatch(new OpenActiveRequestDetail());
      this.router.navigate(["home/ardetailcontent"]);
    } else {
      this.store.dispatch(new HideActiveRequestDetail());
      this._location.back();
    }
    
    
  }
}
