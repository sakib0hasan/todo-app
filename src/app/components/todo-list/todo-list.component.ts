import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';
import {FormControl} from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos = [];
    randomThings = [
        'Install Google Analytics.',
        'Using WordPress? Download the Yoast SEO Plugin.',
        'Verify Your Site in Google Search Console.',
        'Improve Website Performance & Speed.',
        'Take the Google Mobile-Friendly Test',
        'Develop a Buyer Personal',
        'Keyword Strategy',
        'Brainstorm for Keyword Ideas.',
        'Narrow Down Your Keyword List',
        'Choose Target Keywords'
    ];
    taskname = new FormControl('');

    constructor() {
    }

    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            let t = new Todo(i, this.randomThings[i], false);
            this.todos.push(t);
        }
    }

    onTaskComplete(id, isChecked) {
        _.find(this.todos, todo => {
            return todo.id === id;
        }).completed = isChecked;
    }
}
