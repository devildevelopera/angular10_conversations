import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  data = [
    { id: 0, type: 'email', name: "Jonathan Brewer", content: 'prince.parisian@hotmail.com', date: '10:13 am' },
    { id: 1, type: 'chat', name: "Jonathan Day", content: '@theodore_day, FB Messenger', date: '10:13 am' },
    { id: 2, type: 'voice', name: "Jonathan Ferguson", content: '919 123 4567', date: '10:13 am' },
    { id: 3, type: 'chat', name: "John Holland", content: 'Golfpro.com', date: '10:13 am' },
    { id: 4, type: 'email', name: "Johaan Williamson", content: 'janae.legros@yahoo.com', date: '10:13 am' },
    { id: 5, type: 'email', name: "Jean Sherman", content: 'leif_zieme@mohr.us', date: '10:13 am' },
    { id: 6, type: 'chat', name: "Joan Stevenson", content: '@masonste, Google hangouts', date: '10:13 am' }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  historyDetail(item: any): void {
    this.router.navigate(["home/history-detail", item.id]);
  }

}
