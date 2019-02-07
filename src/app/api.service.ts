import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, List } from './models.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  jwt: string = localStorage.getItem('jwt');
  constructor(private http: HttpClient) {}
  register(username, password) {
    const body = { username, password };
    return this.http.post('https://apitrello.herokuapp.com/users', body).toPromise();
  }
  login(username, password) {
    const body = { username, password };

    return new Promise((resolve, reject) => {
      this.http
        .post('https://apitrello.herokuapp.com/users/login', body)
        .toPromise()
        .then(() => {
          reject('User not found');
        })
        .catch(maybeNotAndError => {
          if (maybeNotAndError.status === 200) {
            const jwt = maybeNotAndError.error.text;
            this.jwt = jwt;
            localStorage.setItem('jwt', jwt);
            resolve(200);
          } else if (maybeNotAndError.status === 401) {
            reject('Wrong password');
          } else {
            reject('Try again');
          }
        });
    });
  }
  getLists(): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    return this.http.get('https://apitrello.herokuapp.com/list', options).toPromise();
  }
  getTasks(idlist: number): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    return new Promise((resolve, reject) => {
      this.http
        .get('https://apitrello.herokuapp.com/list/tasks/' + idlist, options)
        .toPromise()
        .then(tasks => {
          if (tasks) {
            resolve(tasks);
          } else {
            resolve([]);
          }
        })
        .catch(error => {
          console.log(error);
          resolve([]);
        });
    });
  }
  newList(name: string): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    const body = { name };
    return this.http.post('https://apitrello.herokuapp.com/list/', body, options).toPromise();
  }
  deleteList(id: number): any {
    const options = { headers: { Authorization: `Bearer ${this.jwt}` } };
    return this.http.delete('https://apitrello.herokuapp.com/list/' + id, options).toPromise();
  }
}
