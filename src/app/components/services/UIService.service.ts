/**
 * Created by wesfranc on 2017-06-07.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
@Injectable()
export class UIService {

  constructor(){

  }

  resetToolTips = new Subject();
  resetToolTips$ = this.resetToolTips.asObservable();
  resetAllToolTips(){
    this.resetToolTips.next();
  }

  activateTooltip = new Subject();
  activateTooltip$ = this.activateTooltip.asObservable();
  activateTip(){
    this.activateTooltip.next();
  }

}
