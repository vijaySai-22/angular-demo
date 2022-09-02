import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList : string [] = [];
  inputValue: string="";

  addTask(){
    this.todoList.push(this.inputValue)
    this.inputValue=""
  }

  removeTask(task: string){
    this.todoList=this.todoList.filter(e=>e!==task)
  }

  constructor() { }

  ngOnInit(): void {
    this.todoList=["Task 1","Task 2"]
  }

}
