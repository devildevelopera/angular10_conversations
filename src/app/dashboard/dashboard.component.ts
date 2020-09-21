import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MultiLevelDropdownBigComponent } from '../components/multi-level-dropdown-big/multi-level-dropdown-big.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('mldbc_chat') mldbc_chat: MultiLevelDropdownBigComponent;
  @ViewChild('mldbc_voice') mldbc_voice: MultiLevelDropdownBigComponent;
  @ViewChild('mldbc_email') mldbc_email: MultiLevelDropdownBigComponent;
  @Input() opened: boolean;
  @Input() searched: boolean;
  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  resetAll(): void {
    this.mldbc_chat.ngOnInit();
    this.mldbc_voice.ngOnInit();
    this.mldbc_email.ngOnInit();
  }

}
