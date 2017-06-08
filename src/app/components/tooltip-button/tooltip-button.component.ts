import {AfterViewInit, Component, Input, OnInit, ViewChild} from "@angular/core";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.css']
})
export class TooltipButtonComponent implements OnInit, AfterViewInit {

  @ViewChild(PopupComponent) popup:PopupComponent;
  @Input() label:string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {

  }

  // when clicking on button, open tip
  activate(){
    console.log('activate-tooltip');
    this.popup.show();
  }



}
