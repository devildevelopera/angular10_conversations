import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-queue',
  templateUrl: './card-queue.component.html',
  styleUrls: ['./card-queue.component.scss']
})
export class CardQueueComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
