import { Component } from '@angular/core';
import { TodoService } from './todo/todo.service';

@Component({
  selector: 'my-app',
  providers: [TodoService],
  styles: [`div.container { border: solid 1px red; margin: 10px; padding: 10px; }`],
  template: 
  `
  <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">FireBootCamp Angular - Todo</a>
        </div>
        <ul class="nav navbar-nav">
          <!--This is an Angular router directive that when clicked will change the route to be / (the application root). 
          Because in our todo.routing.ts we do a redirect from '' to 'todo', this will load the todo component -->
          <li><a [routerLink]="['/']">Todos</a></li>

        </ul>
      </div>
  </nav>
  <div class="container">

    <!-- A router oulet is where the current routes component will be loaded into the DOM. 
    Instead of putting the todo component directly on our AppComponent 
    we now use a router outlet that displays the content that we have routed to -->
    <router-outlet></router-outlet>

    <!--
      <todo></todo>
      -->
  </div>

  <hr> 
  <!--
  <div>
      <h2>App Component</h2>
      <counter></counter>
  </div>
  -->
  `
})
export class AppComponent {

}
