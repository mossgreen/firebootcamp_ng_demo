import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()

export class TodoService {

    constructor() { }

    public todos: Todo[] = [
        { text: 'learn angular', done: true, archived: true },
        { text: 'learn angular better', done: true, archived: false },
        { text: 'build an angular app', done: false, archived: false }
    ];

    get(){
        return this.todos;
    }

    push(todo: Todo){
        this.todos.push(todo);
    }
}

