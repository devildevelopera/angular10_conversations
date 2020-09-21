import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-tab',
  templateUrl: './actions-tab.component.html',
  styleUrls: ['./actions-tab.component.scss']
})
export class ActionsTabComponent implements OnInit {
  @Output() curTabNum = new EventEmitter<string>();

  curTab = undefined;
  curSubTab = undefined;
  subTabOpen = false;
  hoverHistory: boolean = false;
  hoverAnalytics: boolean = false;
  hoverQueue: boolean = false;
  hoverHelp: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.curTab = localStorage.getItem('tab_id');
    if (this.curTab === '2') {
      this.subTabOpen = true;
      this.curSubTab = localStorage.getItem('subTab_id')? parseInt(localStorage.getItem('subTab_id')): 0;
    } else {
      this.subTabOpen = false;
    }
  }

  setActionTab(curTab) {
    this.curTab = curTab;
    localStorage.setItem("tab_id", this.curTab);

    switch (this.curTab) {
      case 0:
        this.router.navigate(["home/queue"]);
        break;
      case 1:
        this.router.navigate(["home/history"]);
        break;
      case 2:
        this.router.navigate(["home/analytics-mystatus"]);
        break;
      case 3:
        this.router.navigate(["home/help"]);
        break;
    }
  }

  setActionSubTab(curSubTab) {
    this.curSubTab = curSubTab;
    localStorage.setItem("subTab_id", this.curSubTab);
    
    switch (this.curSubTab) {
      case 0:
        this.router.navigate(["home/analytics-mystatus"]);
        break;
      case 1:
        this.router.navigate(["home/analytics-teamstatus"]);
        break;
      case 2:
        this.router.navigate(["home/analytics-mystatus"]);
        break;
      case 3:
        this.router.navigate(["home/analytics-mystatus"]);
        break;
    }
  }

  hoverStatusHistory(): void {
    this.hoverHistory = true;
  }

  hoveroutStatusHistory(): void {
    this.hoverHistory = false;
  }

  hoverStatusAnalytics(): void {
    this.hoverAnalytics = true;
  }

  hoveroutStatusAnalytics(): void {
    this.hoverAnalytics = false;
  }

  hoverStatusQueue(): void {
    this.hoverQueue = true;
  }

  hoveroutStatusQueue(): void {
    this.hoverQueue = false;
  }

  hoverStatusHelp(): void {
    this.hoverHelp = true;
  }

  hoveroutStatusHelp(): void {
    this.hoverHelp = false;
  }

}
