import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Promocion } from '../models/promocion';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  private readonly PROMOCIONES_URL='http://localhost/agua-poin/public/api/promociones';
  private readonly HTTP_OPTIONS= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPromociones(): Observable<any[]>{

    return this.http.get<any[]>(this.PROMOCIONES_URL)
      .pipe(
        tap(_ => this.log('fetched promociones')),
        catchError(this.handleError('getPromociones', []))
      );
  }//end getPromociones

  getPromocion(id: number): Observable<any>{

    return this.http.get<any>(`${this.PROMOCIONES_URL}/${id}`)
    .pipe(
      tap(_ => this.log(`fetched promocion id:${id}`)),
      catchError(this.handleError('getPromocion', []))
    )
  }//end getPromocion

  storePromocion(promocion: Promocion): Observable<any>{

    let promocionData: FormData= new FormData();
    promocionData.append('nombre', promocion.getNombre());
    promocionData.append('img', promocion.getImgFile());

    return this.http.post<any>(this.PROMOCIONES_URL, promocionData)
      .pipe(
        tap(promocion => this.log(`stored promocion id:${promocion.id}`)),
        catchError(this.handleError('storePromocion', []))
      );
  }//end storePromocion

  updatePromocion(id: number, promocion: Promocion): Observable<any>{

    let promocionData: FormData= new FormData();
    promocionData.append('_method', 'PUT');
    promocionData.append('nombre', promocion.getNombre());
    promocionData.append('img', promocion.getImgFile());

    return this.http.post(`${this.PROMOCIONES_URL}/${id}`, promocionData).
      pipe(
        tap(_ => this.log(`updated promocion id:${id}`)),
        catchError(this.handleError('updatePromocion', []))
      );
  }//end updatePromocion

  deletePromocion(promocion: Promocion | number): Observable<any>{

    const id = typeof promocion === 'number' ? promocion : promocion.getId();

    return this.http.delete(`${this.PROMOCIONES_URL}/${id}`, this.HTTP_OPTIONS).
      pipe(
        tap(_=> this.log(`deleted promocion id:${id}`)),
        catchError(this.handleError('deletedPromocion', []))
      );
  }//end deletePromocion

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

  private log(message: string): void{

    this.messageService.add(`PromocionesService: ${message}`);
  }//end log
}
