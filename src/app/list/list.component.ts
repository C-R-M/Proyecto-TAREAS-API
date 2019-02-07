import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../services/data-manager.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list: List;
  editing = false;
  oldName: string;
  newName: string = '';

  constructor(private dataService: DataManagerService, private confirmationDialogService: ConfirmationDialogService,
              private api: ApiService) {}
  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Por favor confirma ...', 'Que realmente quieres borrar la lista ?')
    .then((confirmed) => this.delete())
    .catch(() => console.log('Cancelado borrar lista seleccionada'));
  }
  delete() {
      this.dataService.deleteList(this.list.listId);
  }
  newTask(ev) {
    const text = ev.target.value.trim();
    if (text !== '') {
      this.dataService.addNewTask(text, this.list);
      this.api.newTask(this.list.listId, text.trim());
      ev.target.value = '';
    }
  }
  editName() {
    this.list.name = this.newName;
    this.dataService.editListName(this.list);
    this.editing = false;
  }
  edit(node) {
    setTimeout(() => {
      node.focus();
    }, 0);
    this.editing = true;
  }
  cancelEdit() {
    this.editing = false;
  }
}
