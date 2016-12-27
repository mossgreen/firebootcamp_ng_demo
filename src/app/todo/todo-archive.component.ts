import {Component, OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {TodoService} from './todo.service';

@Component({
    selector:'todo-archive',
    template:
    `
    <div>
        <h2>Archived Todos</h2>
        <div>
            <todo-list [todos]="todos"></todo-list>
        </div>
    </div>
    `,
    styles:['a {cursor:pointer; cursor: hand;}']
})

export class TodoArchiveComponent implements OnInit{
    todos: Todo[];
    constructor(private _todoService: TodoService){}
    ngOnInit(){
        this.todos = this._todoService.get().filter(todo => todo.archived === true)
    }
}