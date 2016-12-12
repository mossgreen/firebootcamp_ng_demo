import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    styles: [`div { border: solid 1px blue; margin: 10px; padding: 10px; }`],
    template: `
         <div>
            <h2>Counter Component</h2>
            <p>Count: {{currentValue}}</p>
        </div>
        `
})
export class CounterComponent {
    currentValue: number = 5
}