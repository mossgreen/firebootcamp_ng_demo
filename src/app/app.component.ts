import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`div { border: solid 1px red; margin: 10px; padding: 10px; }`],
    template: `

        <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">FireBootCamp Angular - Todo</a>
        </div>
      </div>
    </nav>
    <div class="container">
       <todo></todo>
    </div>

    <hr>
            <div>
                <h2>App Component</h2>
                <counter></counter>

            </div>
        `
})
export class AppComponent {

}
