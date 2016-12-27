import {Component} from '@angular/core';
import {Todo} from './todo.model';

@Component({
    selector:'todo-form',
    template:
    `
        <form>
            <div class="input-group">
                <input type="text" clas="form-control" size="30" placeholder="add new todo here">
                <span class= "input-group-btn">
                    <button class="btn btn-primary" type="submit" value="add">Add</button>
                </span>
            </div>
        </form>
    `   

}) 

export class TodoFormComponent{}