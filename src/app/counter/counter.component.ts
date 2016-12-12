import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    styles: [`div { border: solid 1px blue; margin: 10px; padding: 10px; }`],
    template: `
        <div>
            <h2>Counter Component</h2>
            <p>Count: {{currentValue}}</p>
            <counter-logic [counterValue]="currentValue" (counterChanged)="updateCurrentCount($event)"></counter-logic>
        </div>
        `
})
export class CounterComponent {
    currentValue: number = 5

    updateCurrentCount(currentCount: number) {
        this.currentValue = currentCount;
    }

}