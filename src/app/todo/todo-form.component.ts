import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo.model';

@Component({
    selector: 'todo-form',
    template:
    `
        <form (ngSubmit)="addTodo()">
            <div class="input-group">
                <input type="text" clas="form-control" [(ngModel)]="todo" size="30" name="todo"  placeholder="add new todo here">
                <span class= "input-group-btn">
                    <button class="btn btn-primary" type="submit" value="add">Add</button>
                </span>
            </div>
        </form>
    `

})

export class TodoFormComponent {
  @Output() newTodo = new EventEmitter<Todo>();
  todo: string = '';

  addTodo() {
    if (this.todo) {
     this.newTodo.next({text:this.todo, done:false,archived:false});
    }
    this.todo = '';
  }
}