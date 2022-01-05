import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: any;
  @Output() editItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onEditClick() {
    this.editItem.emit(this.listItem);
  }

}
