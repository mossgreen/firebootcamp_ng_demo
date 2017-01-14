import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter-logic',
    styles: [`div { border: solid 1px green; margin: 10px; padding: 10px; }`],
    template: `
            <div>
                <h4>Counter Logic Component</h4>
                <button class="btn btn-default" (click)="add()">add</button>
                    <label>{{ logicCounterValue }}</label>
                <button class="btn btn-default" (click)="subtract()">subtract</button>
            </div>
        `
})
export class CounterLogicComponent {
    //@Input declares a data-bound input property that allows values to be passed into a component.
    //@Output declares an event-bound output property. 
    //When an output property emits an event, an event handler attached to that event the template is invoked.
    @Input() logicCounterValue: number = 0;
    @Output() counterChanged = new EventEmitter<number>();

    add() {
        this.logicCounterValue++;
        this.counterChanged.emit(this.logicCounterValue);
    }

    subtract() {
        this.logicCounterValue--;
        this.counterChanged.emit(this.logicCounterValue);
    }
}