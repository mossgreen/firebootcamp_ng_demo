import {Component, OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {TodoService} from './todo.service';


@Component({
  selector: 'todo',
  template: `
  <div>
    <h2>Todo</h2>
    <span>{{remaining}} of {{todos.length}} remaining</span>
    [ <a (click)="archive()">archive</a> ]

    <todo-list [todos]="todos"></todo-list>
    <todo-form (newTodo)="addTodo($event)"></todo-form>
    </div>`,
  styles: ['a { cursor: pointer; cursor: hand; }']
})

export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.get().filter(todo => todo.archived !== true)
  }

  get remaining() {
    return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
  }

  archive(): void {
    this.todos = this.todos.map((todo: Todo) => {
      if (todo.done) todo.archived = true;
      return todo;
    }).filter(todo => todo.done !== true);
  }

  addTodo(todo: Todo) {
    todo.archived = false;
    this.todos.push(todo);
    this._todoService.push(todo);
  }
}