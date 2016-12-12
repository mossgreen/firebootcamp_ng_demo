import { NgModule, Input, Output, EventEmitter  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterLogicComponent } from './counter/counter-logic.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, CounterLogicComponent,  CounterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }