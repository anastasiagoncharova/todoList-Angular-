import { Component, OnInit } from '@angular/core';
import {TodoListService} from './services/todo-list.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRoot from '../app-reducer.ngrx';
import {ToDoList} from '../shared/models/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  subArr: Subscription[] = [];
  todoList: ToDoList[];
  editMode = false;
  createMode = false;
  editedItem = null;
  counter = 0;
  constructor(private todoListService: TodoListService,
              private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.todoListService.getItems();
    this.subArr.push(this.store.select(fromRoot.getTodoList).subscribe((res: ToDoList[]) => {
      this.todoList = res;
      this.counter = this.todoList.length + 1;
    }));
  }

  setItem(form, editedItem) {
    editedItem.name = form.get('name').value;
    editedItem.description = form.get('description').value;
    editedItem.status = form.get('status').value;
  }

  onEditClick(editedItem) {
    this.editedItem = editedItem;
    this.editMode = true;
  }

  onEditSave(form) {
    if (this.createMode) {
      const editedItem: any = {};
      this.setItem(form, editedItem);
      editedItem.id = this.counter;
      this.counter++;
      this.todoList.push(editedItem);
    } else {
      const listItem = this.todoList.filter(item => item.id === this.editedItem.id)[0];
      this.setItem(form, listItem);
    }
    this.editMode = false;
    this.createMode = false;
  }

  onAddItemClick() {
    this.createMode = true;
    this.editedItem = {name: '', description: '', status: true};
  }
}
