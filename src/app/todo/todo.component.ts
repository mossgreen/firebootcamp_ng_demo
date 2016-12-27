import {Component} from '@angular/core';
import{Todo} from './todo.model';

@Component({
selector:'todo',
template:
`
<div>
    <h2>Todo</h2>
    <todo-list [todos]="todos"></todo-list>
</div>
`
})

export class TodoComponent{
    todos: Todo[] = [
        {text:'learn angular', done:true},
        {text: 'build an angular app', done: false}

    ];
}