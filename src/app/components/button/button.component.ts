import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // for grabbing the props from header component/ parent component, use @Input "props name" : "data type"
  // <app-button color = "green" text = "Add" > </app-button>
  @Input() text!: string; // "!" fixed the value that will not be null or undefined
  @Input() color!: string;
  @Output() btnClick = new EventEmitter()
  // @Output bring the value from event
  // analogy as: func clickWhatever(event) => event.name, ....
  // btnClick for bring event object from window object


  constructor () { }

  ngOnInit (): void {
  }

  onClick () {
    console.log("Add")
    this.btnClick.emit(); // sending to header <app-button></app-button> and catching at (btnClick) = "toggleAddTask()"
  }

}
