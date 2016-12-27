import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'counter',
    styles: [`div { border: solid 1px blue; margin: 10px; padding: 10px; }`],
    template: `
        <div>
            <h2>Counter Component</h2>
            <p>Count: {{currentValue}}</p>
            <counter-logic [counterValue]="currentValue" (counterChanged)="updateCurrentCount($event)"></counter-logic>
        </div>
        `,
        providers: [CounterService]
})
export class CounterComponent implements OnInit {
    currentValue: number = 0
    
    constructor(private _counterService: CounterService) {
        
    }
    
    ngOnInit() {
        this.getCurrentValue();
    }
    
    getCurrentValue() {
    this._counterService.getCount()
        .subscribe((result) => {
            this.currentValue = result.count;
        });
    }
    
    updateCurrentCount(currentCount: number) {
        this.currentValue = currentCount;
    }

}