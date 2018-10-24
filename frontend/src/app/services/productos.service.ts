import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private readonly PRODUCTOS_URL='http://localhost/agua-poin/public/api/productos';
  private readonly HTTP_OPTIONS= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getProductos(): Observable<any[]>{

    return this.http.get<any[]>(this.PRODUCTOS_URL)
      .pipe(
        tap(_ => this.log('fetched productos')),
        catchError(this.handleError('getProductos', []))
      );
  }//end getProductos

  getProducto(id: number): Observable<any>{

    return this.http.get<any>(`${this.PRODUCTOS_URL}/${id}`)
    .pipe(
      tap(_ => this.log(`fetched producto id:${id}`)),
      catchError(this.handleError('getProducto', []))
    )
  }//end getProducto

  storeProducto(producto: Producto): Observable<any>{

    let productoData: FormData= new FormData();
    productoData.append('nombre', producto.getNombre());
    productoData.append('precio', String(producto.getPrecio()));
    productoData.append('img', producto.getImgFile());

    return this.http.post<any>(this.PRODUCTOS_URL, productoData)
      .pipe(
        tap(producto => this.log(`stored producto id:${producto.id}`)),
        catchError(this.handleError('storeProducto', []))
      );
  }//end storeProducto

  updateProducto(id: number, producto: Producto): Observable<any>{

    let productoData: FormData= new FormData();
    productoData.append('_method', 'PUT');
    productoData.append('nombre', producto.getNombre());
    productoData.append('precio', String(producto.getPrecio()));
    productoData.append('img', producto.getImgFile());

    return this.http.post(`${this.PRODUCTOS_URL}/${id}`, productoData).
      pipe(
        tap(_ => this.log(`updated producto id:${id}`)),
        catchError(this.handleError('updateProducto', []))
      );
  }//end updateProducto

  deleteProducto(producto: Producto | number): Observable<any>{

    const id = typeof producto === 'number' ? producto : producto.getId();

    return this.http.delete(`${this.PRODUCTOS_URL}/${id}`, this.HTTP_OPTIONS).
      pipe(
        tap(_=> this.log(`deleted producto id:${id}`)),
        catchError(this.handleError('deletedProducto', []))
      );
  }//end deleteProducto

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

    this.messageService.add(`ProductosService: ${message}`);
  }//end log
}
