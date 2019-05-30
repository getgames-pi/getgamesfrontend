import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game-models';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  apiURL = 'http://localhost:9000/jogos';

  constructor(private http: HttpClient) { }

  //Http option configuração para buscar JSON
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllGames (): Observable<Game> {
    return this.http.get<Game>(this.apiURL + '')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getSpecificGame(id): Observable<Game> {
    return this.http.get<Game>(this.apiURL + '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  registerNewGame(game): Observable<Game>{
    return this.http.post<Game>(this.apiURL + '/jogo', JSON.stringify(game), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateGame(id, game): Observable<Game>{
    return this.http.put<Game>(this.apiURL+ '/' +id, JSON.stringify(game), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteGame(id){
    return this.http.delete<Game>(this.apiURL  +'/' + id)
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