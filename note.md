Notes with FireBootCamp - Angular
======


[TOC]


Short Cuts in cli
-------------
  1. `$ ng server`
  2. `$ ng new recipe-book --prefix rb` // new a project named recipe-book, use 'rb 'as prefix, rather than 'app'
  3. `$ ng g c recipe-book` // g -> generate, c -> component
  4. `$ ng destroy component shopping-list-add `// it will delete the shopping-list-add folder in project
  5. `$ ng g c shopping-list-add --flat` // it won't generate a folder to container component files.  
  6. `ng g d highlight` // generate a directive named hightlight, d for directive

To initialize a new project:
----------

1. `$ ng new firebootcamp_ng` // new a project named "irebootcamp_ng"

2. then, wait for installing, it may takes some time depends on internet speed

3. `$ cd firebootcamp_ng ` get into this folder

4. run `ng server` 

5. on browser, navigate to "http://localhost:4200/"

Communicating between Components
----

1. Create the counter component
 - Add "counter" folder underneath the app folder 
 - Add a "counter.component.ts" file in the new counter folder

2. On AppComponent - Add the counter component to the template
	
	Open `app.component.ts`, make it as following:
	
	```
	    @Component({
	        selector: 'my-app',
	        styles: [`div { border: solid 1px red; margin: 10px; padding: 10px; }`],
	        template: `
	            <div>
	                <h2>App Component</h2>
	                 <counter></counter>

	            </div>
	        `
	    })    
	```


Communicating between Components
----
1. add count.service.ts under folder count
```
import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

      getCount() {
          return 5;
      }
}
```
2. Inject the service into the components constructor
The final code for our counter component will look like below
```
import { Component, OnInit } from '@angular/core';
import { CounterLogicComponent } from './counter-logic.component';
import { CounterService } from './counter.service';

@Component({
    selector: 'counter',
    template: `
            <p>Count: {{currentValue}}</p>
            <counter-logic [counterValue]="currentValue" (counterChanged)="updateCurrentCount($event)"></counter-logic>
        `,
    directives: [CounterLogicComponent],
    providers: [CounterService]
})
export class CounterComponent implements OnInit {
    currentValue: number = 0

    constructor(private _counterService: CounterService) { }

    ngOnInit() {
        this.getCurrentValue();
    }

    updateCurrentCount(currentCount: number) {
        this.currentValue = currentCount;
    }

    getCurrentValue() {
        this.currentValue = this._counterService.getCount();
    }

}
```

What we learn so far
-------------
1. name convention
    * `counter.service.ts`
    * `import {CounterService} from "./counter.service";`
    * `export class CounterService`
2. always use @Injectable decorator in service file
3. register the service should use `provider`, here: 
```
@Component({
    selector: 'counter',
    template: `
            <p>Count: {{currentValue}}</p>
            <counter-logic [counterValue]="currentValue" (counterChanged)="updateCurrentCount($event)"></counter-logic>
        `,
    providers: [CounterService]
})
export class CounterComponent implements OnInit {
```
4. 