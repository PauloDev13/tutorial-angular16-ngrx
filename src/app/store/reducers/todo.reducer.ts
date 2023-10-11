import { createReducer, on } from '@ngrx/store';

import { TodoModel } from '../../models/todo.model';
import { addTodo, removeTodo, toggleTodo } from '../actions/todo.action';

export interface todoState {
  todos: TodoModel[];
}

export const initialState: todoState = {
  todos: [
    {
      id: 1,
      title: 'Todo 1',
      completed: false,
      userId: 1,
    },
  ],
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state: todoState, action: { todo: TodoModel }): todoState => {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }),
  on(removeTodo, (state: todoState, action: { id: number }) => {
    return {
      ...state,
      todos: state.todos.filter((todo: TodoModel) => todo.id !== action.id),
    };
  }),
  on(toggleTodo, (state: todoState, action: { id: number }) => {
    return {
      ...state,
      todos: state.todos.map(
        (todo: TodoModel): TodoModel =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      ),
    };
  }),
);
