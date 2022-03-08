import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../ITask"
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  // pulling data from form input
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor (private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)

  }

  onSubmit () {
    if (!this.text) {
      alert("please add the task!")
      return;
    }
    // for request body
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }


    this.onAddTask.emit(newTask);

    //@Todo - emit event
    this.text = "";
    this.day = ""
    this.reminder = false;
  }

  ngOnInit (): void {
  }

}
