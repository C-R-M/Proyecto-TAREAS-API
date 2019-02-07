import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ShowListsComponent } from './show-lists/show-lists.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { DataManagerService } from './services/data-manager.service';
import { FormsModule } from '@angular/forms';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ShowListsComponent,
    AddNewListComponent,
    ListComponent,
    TaskComponent,
    RegisterViewComponent,
    LoginViewComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    DialogComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MatToolbarModule,
    MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule,
    BrowserAnimationsModule, MaterialModule, NgbModule.forRoot()],
  entryComponents: [ ConfirmationDialogComponent ],
  providers: [DataManagerService, ApiService, ConfirmationDialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
