import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  nextId = 4;
  todos = [
    {
      id: 1,
      description: 'Homework 1',
      done: false
    },
    {
      id: 2,
      description: 'Project 1',
      done: false
    },
    {
      id: 3,
      description: 'Homework2',
      done: true
    },
  ];

  delete(todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  add(newTodoDescription) {
    let newTodo = {
      id: this.nextId,
     description: newTodoDescription,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  toggle(todo) {
    todo.done = !todo.done;
  }
}