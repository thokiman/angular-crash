import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { AddTaskComponent } from './components/add-task/add-task.component'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

// setting up the router need RouterModule and Routes
const appRoutes: Routes = [
  { path: '', component: TasksComponent },// path = go to homepage, component = connect to the TasksComponent (add form and list task)
  { path: 'about', component: AboutComponent }// path = go to about, component = connect to the AboutComponent 

]

// two way data binding to control form need FormModule and place it at import
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    // set up the const appRoutes to here
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// declarations => put any the component to declarations from cli
// imports => put any module to such as BroserModule for interacting with DOM
// providers => any global service you have put in providers
// bootstraps => whatever your bootstraping which in our case is our AppComponent
export class AppModule { }
