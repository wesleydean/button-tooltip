import {AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild} from "@angular/core";
import {UIService} from "../services/UIService.service";
import {Subject} from "rxjs";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'tooltip-button',
  templateUrl: './tooltip-button.component.html'
})
export class TooltipButtonComponent implements OnInit {
  onUnSubscribe:Subject<void> = new Subject<void>();


  @Input() label:string;
  @Input() tooltip:string;
  shouldShow:boolean = false;
  tooltipVisible:boolean = false;
  placement:string = 'top';

  constructor(private _UIService:UIService, private _el: ElementRef, @Inject(DOCUMENT) private document: Document) {
  }

  // close on esc key
  @HostListener('document:keydown', ['$event']) onKeyPress(event: KeyboardEvent) {
    let x = event.keyCode;
    if (x === 27) {
      this._UIService.resetAllToolTips();
    }
  }

  // close on click
  @HostListener('document:click', ['$event']) onClick(event:MouseEvent){
    if (this._el && !this._el.nativeElement.contains(event.target)) {
      this.tooltipVisible = false;
      this.shouldShow = false;
    }
  }

  // flip tooltip class on window boundary scroll
  @HostListener('document:scroll', ['$event']) onScroll(event) {

    let scrollTop = this.document.body.scrollTop;

    // if scrollTop - element's clientRect.top is greater than zero, show tooltip on bottom, otherwise, show on top
    if(scrollTop - this._el.nativeElement.getBoundingClientRect().top > 0){
      this.placement = 'bottom';
    } else {
      this.placement = 'top';
    }

  }

  ngOnInit() {

    // reset and hide all tooltips
    this._UIService.resetToolTips$.takeUntil(this.onUnSubscribe).subscribe(res => {
      this.tooltipVisible = false;
      this.shouldShow = false;
    });

    // activate only this tooltip
    this._UIService.activateTooltip$.takeUntil(this.onUnSubscribe).subscribe(res => {

      if (this.tooltipVisible){
        this.tooltipVisible = false;
        this.shouldShow = false;
      }

      else {
        if (this.shouldShow){
          this.tooltipVisible = true;
        }
      }

    });

  }

  // when clicking on button, open tip
  activate(bool){

    this.shouldShow = bool;

    this._UIService.activateTip();

  }


  ngOnDestroy(){
    this.onUnSubscribe.next();
    this.onUnSubscribe.complete();
  }




}
