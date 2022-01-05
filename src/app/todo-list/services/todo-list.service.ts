import { Injectable } from '@angular/core';
import * as ToDoListActions from '../store/todo-list.actions';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../app-reducer.ngrx';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private store: Store<fromRoot.State>) { }

  getItems() {
    const todoList = [
      {id: 1, name: 'item 1', description: 'desc', status: true},
      {id: 2, name: 'item 2', description: 'desc', status: false},
      {id: 3, name: 'item 3', description: 'desc', status: false},
      {id: 4, name: 'item 4', description: 'desc', status: true},
      {id: 5, name: 'item 5', description: 'desc', status: true},
    ];
    this.store.dispatch(new ToDoListActions.AddTodoListSuccessAction({todoList}));
  }
}
