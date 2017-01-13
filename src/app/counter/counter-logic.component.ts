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