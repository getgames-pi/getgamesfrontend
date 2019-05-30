import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game-models';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user-model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:9000/usuarios';

  //Http option configuração para buscar JSON
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  authenticate(username, password) {
    if (username =="giovanni" && password == "123") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

getAllUser(): Observable < User > {
  return this.http.get<User>(this.apiURL + '')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

getUser(id): Observable < User > {
  return this.http.get<User>(this.apiURL + '/usuario/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

registerUser(user): Observable < User > {
  return this.http.post<User>(this.apiURL + '/cadastrar', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

updateUser(id, user): Observable < User > {
  return this.http.put<User>(this.apiURL + '/atualizar/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

deleteGame(id) {
  return this.http.delete<User>(this.apiURL + '/remover/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

//Tratamento de erro
handleError(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}


}