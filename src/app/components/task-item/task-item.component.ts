import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../ITask'
import { faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRemainder: EventEmitter<Task> = new EventEmitter();


  constructor () { }

  onDelete (task: Task) {
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle (task: Task) {
    this.onToggleRemainder.emit(task);
  }

  ngOnInit (): void {
  }

}
