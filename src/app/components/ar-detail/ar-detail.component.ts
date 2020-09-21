import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ar-detail',
  templateUrl: './ar-detail.component.html',
  styleUrls: ['./ar-detail.component.scss']
})
export class ArDetailComponent implements OnInit {

  @Input() name: string;
  @Input() phone: string;

  constructor() { }

  ngOnInit(): void {
  }

}
