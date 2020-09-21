import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0, width: 0 }),
            animate('0.2s ease-out',
              style({ opacity: 1, width: 546 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1, width: 546 }),
            animate('0.2s ease-in',
              style({ opacity: 0, width: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SearchBarComponent implements OnInit {
  @Input()
  get isVisible(): boolean { return this._isVisible; }
  set isVisible(isVisible: boolean) {
    this._isVisible = isVisible;
  }

  @Output() searchEvent = new EventEmitter<boolean>();

  //set the search bar visiblity
  _isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  // get the visiblity from the parent
  searchCancel() {
    this._isVisible = false;
    this.searchEvent.emit(false);
  }

  searchStart(): void {
    this._isVisible = true;
    this.searchEvent.emit(true);
  }
}
