import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-todo',
  templateUrl: './filter-todo.component.html',
  styleUrls: ['./filter-todo.component.css']
})
export class FilterTodoComponent implements OnInit {
  task: string = '';
  @Output() filterTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filterTasks(task: string) {
    this.filterTask.emit(task);
  }
}
