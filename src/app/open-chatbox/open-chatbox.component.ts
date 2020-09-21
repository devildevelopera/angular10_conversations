import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/reducers/index.reducer';

@Component({
  selector: 'app-open-chatbox',
  templateUrl: './open-chatbox.component.html',
  styleUrls: ['./open-chatbox.component.scss']
})
export class OpenChatboxComponent implements OnInit {

  length = 0;
  arDetailOpened = false;
  
  constructor(private store: Store<AppState>) {
    store.select('activeRequests').subscribe(val => { this.length = val.length });
    store.select('openArDetail').subscribe(val => {this.arDetailOpened = val.visible});
  }

  ngOnInit(): void {
  }
}
