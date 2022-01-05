import {ListActions, FETCH_LIST_SUCCESS } from './todo-list.actions';
import {ToDoList} from '../../shared/models/models';

export interface State {
  todoList: ToDoList[];
}

const initialState: State = {
  todoList: null
};

export function listReducer(state = initialState, action: ListActions) {
  if (action.type === FETCH_LIST_SUCCESS) {
    return {...state, todoList: action.payload.todoList};
  }
}

export const getTodoList = (state: State) => state.todoList;
