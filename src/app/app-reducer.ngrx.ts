import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromToDoList from './todo-list/store/todo-list.reducer';

export interface State {
  todoList: fromToDoList.State;
}

export const reducers: ActionReducerMap<State> = {
  todoList: fromToDoList.listReducer
};

export const getToDoListState = createFeatureSelector<fromToDoList.State>('todoList');
export const getTodoList = createSelector(getToDoListState, fromToDoList.getTodoList);

