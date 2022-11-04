import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../models/todo";
import {faTimes, faEdit} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() completeTask = new EventEmitter();
  @Output() deleteTask = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {

  }

  completeTasks(task: string) {
    this.completeTask.emit(task);
  }

  deleteTasks(task: string):void {
    this.deleteTask.emit(task);
  }
}
