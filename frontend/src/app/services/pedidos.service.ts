import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private readonly PEDIDOS_URL='http://localhost/agua-poin/public/api/pedidos';
  private readonly HTTP_OPTIONS= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPedidos(): Observable<any[]>{

    return this.http.get<any[]>(this.PEDIDOS_URL)
      .pipe(
        tap(_ => this.log('fetched pedidos')),
        catchError(this.handleError('getPedidos', []))
      );
  }//end getPedidos

  getPedido(id: number): Observable<any>{

    return this.http.get<any>(`${this.PEDIDOS_URL}/${id}`)
    .pipe(
      tap(_ => this.log(`fetched pedido id:${id}`)),
      catchError(this.handleError('getPedido', []))
    )
  }//end getPedido

  storePedido(pedido: Pedido): Observable<any>{

    return this.http.post<any>(this.PEDIDOS_URL, pedido, this.HTTP_OPTIONS)
      .pipe(
        tap(pedido => this.log(`stored pedido id:${pedido.id}`)),
        catchError(this.handleError('storePedido', []))
      );
  }//end storePedido

  updatePedido(id: number, pedido: Pedido): Observable<any>{

    return this.http.put(`${this.PEDIDOS_URL}/${id}`, pedido, this.HTTP_OPTIONS).
      pipe(
        tap(_ => this.log(`updated pedido id:${id}`)),
        catchError(this.handleError('updatePedido', []))
      );
  }//end updatePedido

  deletePedido(pedido: Pedido | number): Observable<any>{

    const id = typeof pedido === 'number' ? pedido : pedido.getId();

    return this.http.delete(`${this.PEDIDOS_URL}/${id}`, this.HTTP_OPTIONS).
      pipe(
        tap(_=> this.log(`deleted pedido id:${id}`)),
        catchError(this.handleError('deletedPedido', []))
      );
  }//end deletePedido

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

    this.messageService.add(`PedidosService: ${message}`);
  }//end log
}
