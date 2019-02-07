import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss'],
})
export class RegisterViewComponent {
  username: string;
  password: string;
  error: any;
  valid: any;
  constructor(private api: ApiService) {}

  register() {
    const { username, password } = this;
    if (username.trim() !== '' && password.trim() !== '') {
      this.api
        .register(username.trim(), password.trim())
        .then(res => {
          this.valid = res;
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
}
