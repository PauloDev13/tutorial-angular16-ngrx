import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoModel } from '../../models/todo.model';
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from '../../store/actions/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos$!: TodoModel[];
  newTodoTitle = '';

  constructor(private store: Store<{ todos: { todos: TodoModel[] } }>) {
    store.select('todos').subscribe({
      next: todosState => {
        this.todos$ = todosState.todos;
        console.log(this.todos$);
      },
    });
  }
  addNewTodo() {
    if (this.newTodoTitle.trim() === '') {
      return;
    }

    const newTodo: TodoModel = {
      id: Math.random(),
      title: this.newTodoTitle,
      completed: false,
      userId: 1,
    };

    this.store.dispatch(addTodo({ todo: newTodo }));
  }

  removeTodo(id: number) {
    if (id === null) {
      return;
    }
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: number) {
    if (id === null) {
      return;
    }
    this.store.dispatch(toggleTodo({ id }));
  }
}
