import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from "../../ITask"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  // we wanna be able call the service method
  // in order to do that bring the service in
  constructor (
    // auto recall new TaskService( ) => taskService / do depedency injection
    // taskService in parameter of constructor will create automatically this.taskSevice
    private taskService: TaskService
  ) { }

  deleteTask (task: Task) {
    this.taskService.deleteTask(task).subscribe(
      (task) => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    )
  }

  toggleRemainder (task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskRemainder(task).subscribe();

  }

  addTask (task: Task) {
    this.taskService.addTask(task).subscribe(
      (task) => (this.tasks.push(task))
    )
  }

  ngOnInit (): void {
    // usually you want use this hook
    // in angular, they say observable list for hook
    this.taskService.getTasks().subscribe(

      // observable is equal to promise
      // provide the anonymous func to listen the streaming of observable angular
      (tasks) => this.tasks = tasks
    );
  }


}
