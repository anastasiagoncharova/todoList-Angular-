import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.sass']
})
export class EditFormComponent implements OnInit {
  @Input() editedItem: any;
  @Output() editSave: EventEmitter<any> = new EventEmitter();
  todoListForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.todoListForm = this.formBuilder.group({
      name: [''],
      description: [''],
      status: [true]
    });
    this.todoListForm.patchValue({
      name: this.editedItem.name,
      description: this.editedItem.description,
      status: this.editedItem.status
    });
  }

  onEditSave() {
    this.editSave.emit(this.todoListForm);
  }
}
