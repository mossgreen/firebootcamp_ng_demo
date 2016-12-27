import { NgModule, Input, Output, EventEmitter  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list.component';

import { CounterComponent } from './counter/counter.component';
import { CounterLogicComponent } from './counter/counter-logic.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule,FormsModule ],
  declarations: [ AppComponent,TodoComponent,TodoListComponent, CounterLogicComponent,  CounterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }