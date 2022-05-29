import { Component, OnInit } from '@angular/core';
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
  todos: Todo[] = [
    new Todo(Guid.create(), 'Do your homework', false),
    new Todo(Guid.create(), 'Solve some problems', false),
  ];
  constructor() {}

  ngOnInit(): void {}
  changeTheme(): void {
    if (this.theme === 'my-dark-theme') {
      this.theme = 'my-light-theme';
      this.themeIcon = 'dark_mode';
    } else {
      this.theme = 'my-dark-theme';
      this.themeIcon = 'light_mode';
    }
  }
}
