import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/models/todo.model';
import { Guid } from 'typescript-guid';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  theme: string = 'my-dark-theme';
  themeIcon: string = 'light_mode';
  value = '';
  todos: Todo[] = [
    new Todo(Guid.create(), 'Do your homework', false),
    new Todo(Guid.create(), 'Solve some problem', false),
  ];
  constructor() {}

  ngOnInit(): void {
    const data: string | null = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data)
    }
  }

  changeTheme(): void {
    if (this.theme === 'my-dark-theme') {
      this.theme = 'my-light-theme';
      this.themeIcon = 'dark_mode';
    } else {
      this.theme = 'my-dark-theme';
      this.themeIcon = 'light_mode';
    }
  }
  updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(form: NgForm): void {
    if (form.value.title) {
      const todo: Todo = new Todo(Guid.create(), form.value.title, false);
      this.todos.push(todo);
      this.updateLocalStorage();
      form.reset();
    }
  }
  deleteTodo(id: Guid): void {
    this.todos = this.todos.filter((entry: Todo) => entry.id !== id);
    this.updateLocalStorage();
  }
  onCompleteTodo(id: Guid): void {
    let todo: Todo = this.todos.filter((entry: Todo) => entry.id === id)[0];
    todo.isComplete = true;
    this.updateLocalStorage();
  }
}
