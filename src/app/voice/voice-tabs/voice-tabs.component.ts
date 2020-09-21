import { Component, OnInit, Input } from '@angular/core';
import { ActiveRequest} from '../../ngrx/models/active-request.model';

@Component({
  selector: 'app-voice-tabs',
  templateUrl: './voice-tabs.component.html',
  styleUrls: ['./voice-tabs.component.scss']
})
export class VoiceTabsComponent implements OnInit {

  constructor() { } 
  @Input() contactinfo: ActiveRequest;
  
  @Input() isLinked:boolean = false;
  @Input() newMesssage:boolean = false;
  @Input() isActive:boolean = false;
  //li-main/li-list
  @Input() display_type:string = 'li-main';

  ngOnInit(): void {
  }

}
