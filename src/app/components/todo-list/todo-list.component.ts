import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos = [];

    constructor() {
    }

    ngOnInit() {
        for(let i = 1; i < 10; i++){
            let t = new Todo(i, "task "+i, false);
            this.todos.push(t);
        }
    }
}
