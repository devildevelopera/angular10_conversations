import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { AppState } from 'src/app/ngrx/reducers/index.reducer';

@Component({
  selector: 'app-ar-actions',
  templateUrl: './ar-actions.component.html',
  styleUrls: ['./ar-actions.component.scss']
})
export class ArActionsComponent implements OnInit {
  
  curTab = 0;
  hoverHistory:boolean = false;
  hoverInfo:boolean = false;
  hoverQueue:boolean = false;
  hoverNotes:boolean = false;
  openedRequest: ActiveRequest;

  constructor(private store: Store<AppState>) {
    store.select('openArDetail').subscribe(val => this.openedRequest = JSON.parse(localStorage.getItem('openedRequest')));
  }

  ngOnInit(): void {
    
  }

  setActionTab(curTab){
    this.curTab = curTab;
  }

  hoverStatusHistory():void {
    this.hoverHistory = true;
  }

  hoveroutStatusHistory():void {
    this.hoverHistory = false;
  }

  hoverStatusInfo():void {
    this.hoverInfo = true;
  }

  hoveroutStatusInfo():void {
    this.hoverInfo = false;
  }

  hoverStatusQueue():void {
    this.hoverQueue = true;
  }

  hoveroutStatusQueue():void {
    this.hoverQueue = false;
  }

  hoverStatusNotes():void {
    this.hoverNotes = true;
  }

  hoveroutStatusNotes():void {
    this.hoverNotes = false;
  }
}
