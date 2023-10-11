import { createAction, props } from '@ngrx/store';

import { TodoModel } from '../../models/todo.model';

export const addTodo = createAction(
  '[TODOS] ADD TODO',
  props<{ todo: TodoModel }>(),
);
export const toggleTodo = createAction(
  '[TODOS] TOGGLE TODO',
  props<{ id: number }>(),
);

export const removeTodo = createAction(
  '[TODOS] REMOVE TODO',
  props<{ id: number }>(),
);
