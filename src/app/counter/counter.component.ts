import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'counter',
    styles: [`div { border: solid 1px blue; margin: 10px; padding: 10px; }`],
    template: `
        <div>
            <h2>Counter Component</h2>
            <p>Count: {{localCurrentValue}}</p>
            <counter-logic [logicCounterValue]="localCurrentValue" (counterChanged)="updateCurrentCount($event)"></counter-logic>
        </div>

        <!--

When the (counterChanged) event is raised, 
we want to call a function on our counter component called updateCurrentCount($event) 
and pass it the event passed out of our child counter-logic component. 
In this situation, the emitted value '($event)' happens to be a number


        -->
        `,
    providers: [CounterService]
})
export class CounterComponent implements OnInit {
    localCurrentValue: number = 0;

    constructor(private _counterService: CounterService) {

    }

    ngOnInit() {
        this.getCurrentValue();
    }


    getCurrentValue() {
        this._counterService.getCount()
            .subscribe((result) => {
                this.localCurrentValue = result.count;
            });
    }

    updateCurrentCount(currentCount: number) {
        this.localCurrentValue = currentCount;
    }

}