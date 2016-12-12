import { Component, OnInit } from '@angular/core';
import { CounterLogicComponent } from './counter-logic.component';
import { CounterService } from './counter.service';

@Component({
    selector: 'counter',
    template: `
            <p>Count: {{currentValue}}</p>
            <counter-logic [counterValue]="currentValue" (counterChanged)="updateCurrentCount($event)"></counter-logic>
        `,
    providers: [CounterService]
})
export class CounterComponent implements OnInit {
    currentValue: number;

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