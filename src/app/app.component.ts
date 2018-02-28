import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos=[]


   addTodo(value){
    this.todos.push(value)
    console.log(this.todos)
  }
 
}




