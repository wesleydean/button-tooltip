import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TooltipButtonComponent} from "./tooltip-button.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TooltipButtonComponent
  ],
  exports:[
    TooltipButtonComponent
  ]
})
export class TooltipButtonModule { }
