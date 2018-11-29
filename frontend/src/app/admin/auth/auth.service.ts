import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../../services/message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Admin } from '../../models/admin';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string= 'admin';

  private readonly AUTH_URL= 'http://localhost/agua-poin/public/api/admin/login';
  private readonly HTTP_OPTIONS= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,

  ) { }

  login(admin: Admin): Observable<boolean> {
    return this.http.post<any>(this.AUTH_URL, admin, this.HTTP_OPTIONS)
      .pipe(
        tap(usuario => this.log(`usuario: ${usuario}`)),
        catchError(this.handleError('storeProducto', []))
      );
  }//end login

  setUserData(userToken: string, expirationTime: string): void{

    localStorage.setItem('user_token', userToken);
    localStorage.setItem('expires_at', expirationTime);
  }//end setUserData

  getUserToken(): string{

    return localStorage.getItem('user_token');
  }//end getUserToken

  getExpirationTime(): any{

    return moment.unix(+localStorage.getItem('expires_at'));
  }//end getExpirationTime

  logOut(): void{

    localStorage.removeItem('user_token');
    localStorage.removeItem('expires_at');
  }//end logOut

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }//end handleError

  private log(message: string) {

    this.messageService.add(`ProductosService: ${message}`);
  }//end log
}
