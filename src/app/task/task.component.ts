import { Component, Input } from '@angular/core';
import { Task } from '../models.interface';
import { DataManagerService } from '../services/data-manager.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog//confirmation-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task;
  editing = false;

  constructor(private dataService: DataManagerService, private confirmationDialogService: ConfirmationDialogService) {}

  openConfirmationDialog() {
    this.confirmationDialogService.confirm('Por favor confirma ...', 'Que realmente quieres borrar la tarea seleccionada. ?')
    .then((confirmed) => this.deleteTask())
    .catch(() => console.log('Cancelada borrar tarea.)'));
  }

  deleteTask() {
    this.dataService.deleteTask(this.task);
  }
  editStart() {
    this.editing = true;
  }
  editTaskText(newTaskText) {
    this.task.text = newTaskText;
    this.dataService.editTask(this.task);
    this.editing = false;
  }
  cancelEdit() {
    this.editing = false;
  }
}
