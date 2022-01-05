import { Action } from '@ngrx/store';
import {ToDoList} from '../../shared/models/models';

export const FETCH_LIST_SUCCESS = 'Fetch todo list';

export class AddTodoListSuccessAction implements Action {
  readonly type = FETCH_LIST_SUCCESS;
  constructor(public payload: { todoList: ToDoList[] }) {
  }
}

export type ListActions =
  AddTodoListSuccessAction;
