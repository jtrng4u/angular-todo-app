import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  task: string = '';
  @Output() addTask = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addTasks(task: string):void {
    this.addTask.emit(task);
  }
}
