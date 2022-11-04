import {Component, OnInit} from '@angular/core';
import {Todo} from "./models/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'To-Do List';
  filteredTodos: Todo[] = [];

  todos = [
    {
      "task": "Wash cloths",
      "complete": false
    },
    {
      "task": "Call family",
      "complete": false
    },
    {
      "task": "Doctor appointment",
      "complete": false
    }
  ]
  message: string = '';

  addTask(task: string): void {
    let todo: Todo = {
      "task": task,
      "complete": false
    }

    this.todos.push(todo);
    this.message = '';
  }

  filterTasks(task: string): void {
    this.filteredTodos = this.todos.filter(todo => todo.task.startsWith(task));
  }

  ngOnInit(): void {
    this.filteredTodos = this.todos;
  }

  completeTask(task: string) {
    let idx = this.todos.findIndex(todo => todo.task == task);
    console.log('task deleting', task, idx);
    let todo = this.todos[idx];
    todo.complete = !todo.complete;
    let hasAny = this.todos.filter(todo => !todo.complete);
    if (hasAny.length == 0) {
      this.message = 'All tasks complete! Great Job!!';
    }
  }

  deleteTask(task: string) {
    let idx = this.todos.findIndex(todo => todo.task == task);
    this.todos.splice(idx, 1);
    this.filteredTodos = this.todos;
    if (this.filteredTodos.length == 0) {
      this.message = 'No more task!!';
    }
  }
}
