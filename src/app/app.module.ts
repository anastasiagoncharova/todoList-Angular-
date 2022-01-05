import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './todo-list/list-item/list-item.component';
import { EditFormComponent } from './todo-list/edit-form/edit-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app-reducer.ngrx';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ListItemComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
