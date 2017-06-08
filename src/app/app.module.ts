import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { MainComponent } from './components/main/main.component';
import {TooltipButtonModule} from "./components/tooltip-button/tooltip-button.module";
import {UIService} from "./components/services/UIService.service";

const appRoutes: Routes = [
  { path: '', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    TooltipButtonModule
  ],
  providers: [
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
