import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PopupComponent} from "../popup/popup.component";
import {RouterModule} from "@angular/router";
import {TooltipButtonComponent} from "./tooltip-button.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PopupComponent,
    TooltipButtonComponent
  ],
  exports:[
    PopupComponent,
    TooltipButtonComponent
  ]
})
export class TooltipButtonModule { }
