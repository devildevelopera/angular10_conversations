import { Component, OnInit, ViewChild } from '@angular/core';
import { AppState, selectChannel } from '../../ngrx/reducers/index.reducer';
import { Store, select } from '@ngrx/store';
import { MutiLevelDropdownComponent } from '../../components/muti-level-dropdown/muti-level-dropdown.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild('mldbc_chat') mldbc_chat: MutiLevelDropdownComponent;
  @ViewChild('mldbc_voice') mldbc_voice: MutiLevelDropdownComponent;
  @ViewChild('mldbc_email') mldbc_email: MutiLevelDropdownComponent;

  isSearchVisible = false;
  channel: any;
  hoverSearch = false;
  hoverWarning = false;
  hoverHome = false;
  hoverLang = false;
  _activeTheme = 'dark-mode';

  constructor(private store: Store<AppState>, private router: Router) {
    store.select('channel').subscribe(val => this.channel = val);
  }

  get activeTheme() {
    return this._activeTheme;
  }
  set activeTheme(value) {
    document.documentElement.dataset.theme = value;
    this._activeTheme = value;
  }

  ngOnInit(): void {
  }

  // get the visiblity from the parent
  searchBarShow() {
    this.isSearchVisible = true;
    setTimeout(function () {
      var x = document.getElementById("_search").focus();
    }, 100);
  }

  searchEventFunc(val: boolean): void {
    this.isSearchVisible = false;
    if (val) {
      this.router.navigate(["home/search"]);
    }
  }

  resetAll(): void {
    this.mldbc_chat.ngOnInit();
    this.mldbc_voice.ngOnInit();
    this.mldbc_email.ngOnInit();
  }

  hoverStatusSearch(): void {
    this.hoverSearch = true;
  }

  hoveroutStatusSearch(): void {
    this.hoverSearch = false;
  }

  hoverStatusWarning(): void {
    this.hoverWarning = true;
  }

  hoveroutStatusWarning(): void {
    this.hoverWarning = false;
  }

  hoverStatusHome(): void {
    this.hoverHome = true;
  }

  hoveroutStatusHome(): void {
    this.hoverHome = false;
  }

  hoverStatusLang(): void {
    this.hoverLang = true;
  }

  hoveroutStatusLang(): void {
    this.hoverLang = false;
  }

  changeTheme() {
    if (this.activeTheme == 'light-mode') {
      this.activeTheme = 'dark-mode';
    } else {
      this.activeTheme = 'light-mode';
    }
  }
}
