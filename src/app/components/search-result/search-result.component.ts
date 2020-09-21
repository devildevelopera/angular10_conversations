import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  data = [
    { type: 'email', name: "Jonathan Brewer", content: 'Account Balance', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "Jonathan Day", content: 'Forgot Password', date: '27, Thu-10:13 am' },
    { type: 'voice', name: "Jonathan Ferguson", content: 'Refund', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "John Holland", content: 'Canceled Order', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Johaan Williamson", content: 'Technical Issue', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Jean Sherman", content: 'Payment Issue', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "Joan Stevenson", content: 'New Account, Login Issue', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Jonathan Brewer", content: 'Account Balance', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "Jonathan Day", content: 'Forgot Password', date: '27, Thu-10:13 am' },
    { type: 'voice', name: "Jonathan Ferguson", content: 'Refund', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "John Holland", content: 'Canceled Order', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Johaan Williamson", content: 'Technical Issue', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Jean Sherman", content: 'Payment Issue', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "Joan Stevenson", content: 'New Account, Login Issue', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Jonathan Brewer", content: 'Account Balance', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "Jonathan Day", content: 'Forgot Password', date: '27, Thu-10:13 am' },
    { type: 'voice', name: "Jonathan Ferguson", content: 'Refund', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "John Holland", content: 'Canceled Order', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Johaan Williamson", content: 'Technical Issue', date: '27, Thu-10:13 am' },
    { type: 'email', name: "Jean Sherman", content: 'Payment Issue', date: '27, Thu-10:13 am' },
    { type: 'chat', name: "Joan Stevenson", content: 'New Account, Login Issue', date: '27, Thu-10:13 am' },
  ]
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  searchBack(): void {
    this._location.back();
  }

}
