import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    console.log(taskData);

    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => {
      console.log(oldTasks);
      return [...oldTasks, newTask];
    });
  }

  updateTaskStatus(id: string, newStatus: string) {
    this.tasks.update((oldTasks) => {
      debugger
      return oldTasks.map((task) => {
        debugger
        return task.id === id ? { ...task, newStatus } : task;
      });
    });
  }
}
