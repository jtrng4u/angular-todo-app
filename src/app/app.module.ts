import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import { AppComponent } from './app.component';
import { FilterTodoComponent } from './components/filter-todo/filter-todo.component';
import { ShowTodoComponent } from './components/show-todo/show-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FilterTodoComponent,
    ShowTodoComponent,
    AddTodoComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
