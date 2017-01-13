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
        `,
        providers: [CounterService]
})
export class CounterComponent implements OnInit {
    localCurrentValue: number = 5;
    
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