import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from "../ITask"
import { TASKS } from '../mock-tasks';

// "of" is for local file
// "HttpClient" is for request response backend server


const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )
}


// do the depedency injection
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor (
    private http: HttpClient
  ) { }
  // real world async use http and observable at angular
  // angular use httpclient rather than fetch
  // but can use anything like axios


  // ex:pulling data from local file 
  getTasksFromLocalFile (): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  // ex: pulling data from backend using mock json-server
  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

  updateTaskRemainder (task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions);

  }
  deleteTask (task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`

    return this.http.delete<Task>(url);
  }
}
