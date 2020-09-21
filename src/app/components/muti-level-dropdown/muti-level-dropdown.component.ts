import { Component, OnInit, Input,HostListener,ElementRef, EventEmitter, Output} from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { AppState ,selectChannel} from '../../ngrx/reducers/index.reducer';
import { ActiveRequest} from '../../ngrx/models/active-request.model';
import { AddActiveRequest} from '../../ngrx/actions/active-request.actions';
import { Channel} from '../../ngrx/models/channel.model';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-muti-level-dropdown',
  templateUrl: './muti-level-dropdown.component.html',
  styleUrls: ['./muti-level-dropdown.component.scss']
})
export class MutiLevelDropdownComponent implements OnInit {
  @Input() type: string;
  channel: Channel;
  isShow:boolean = false;
  status:string;
  timer:number = 0;
  tick = 1000;
  countUp: Subscription;
  tooltip:string;
  activeRequest:ActiveRequest;
  hover:boolean = false;
    
  constructor( private store: Store<AppState>) {
    store.select('channel').subscribe(val => this.channel = val);
  }
  
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    const clickedElement = event.target as HTMLElement;
    if((clickedElement.tagName === "SPAN" && clickedElement.className === "multi-level-dropdown__timer") || (clickedElement.tagName === "SPAN" && clickedElement.innerHTML === "Ready") || clickedElement.tagName === "svg") {
      this.isShow = false;
    }
    if (clickedElement.classList[0] !== 'multi-level-dropdown__status' && clickedElement.tagName !== "SPAN" && clickedElement.tagName !== "svg") {
      this.isShow = false;
    }
  }

  ngOnInit(): void {
    this.countUp = timer(0, this.tick).subscribe(() => ++this.timer);    
    this.status = this.channel[this.type]['status']; 
    this.tooltip = this.channel[this.type].subStatus; 
  }

  ngOnDestroy() {
    this.countUp = null;
  }

  showMenu(): void {
    this.isShow = true;
  }

  doAction(status:string,tooltip:string){
    this.tooltip = tooltip;

    this.timer = 0;
    this.status = status;

    this.isShow = false;

  }

  hoverStatus():void {
    this.hover = true;
  }

  hoveroutStatus():void {
    this.hover = false;
  }

  newActionRequest():void {
    this.activeRequest = {
      user_id: 1,
      first_name:"Test",
      last_name:"test",
      email:"test@test.com",
      phone:"8135637145",
      type:this.type,
      status: this.type === "voice"? "incoming": "ready",
      is_active:false,
      new_message: true,
      is_deferred:false,  
    }
    this.store.dispatch(new AddActiveRequest(this.activeRequest))
    this.isShow = false;
  }
}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
