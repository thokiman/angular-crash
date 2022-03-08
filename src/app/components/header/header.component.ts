import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'task tracker';
  showAddTask: boolean = true;
  subscription!: Subscription;

  constructor (
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle().subscribe(
      // from ui.service.ts, this.showAddTask => onToggle, this.subject.asObservable() call toggleAddTask => this.showAddTask => this.subject.next(this.showAddTask) => header.component.ts, this.showAddTask
      (value) => this.showAddTask = value
    )


  }

  ngOnInit (): void {
  }


  toggleAddTask () {
    console.log("toggle");// emitting from this.btnClick.emit() and can use to parent element
    this.uiService.toggleAddTask();
  }

  hasRoute (route: string) {
    return this.router.url === route
  }
}
