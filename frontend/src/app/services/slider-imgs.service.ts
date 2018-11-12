import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SliderImg } from '../models/slider-img';

@Injectable({
	providedIn: 'root'
})
export class SliderImgsService{

	private readonly NOTAS_URL='http://localhost/agua-poin/public/api/slider';
	private readonly HTTP_OPTIONS= {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(
		private http: HttpClient,
		private messageService: MessageService
	) { }

	getSliderImgs(): Observable<any>{

		return this.http.get<any>(this.NOTAS_URL)
			.pipe(
				map(
					res => {
						return res.map(item => { return new SliderImg(item.id, item.nombre, item.src) });
					}
				),
				tap(_ => this.log('fetched sliderImgs')),
				catchError(this.handleError('getSliderImgs', []))
			);
	}//end getSliderImgs

	getSliderImg(id: number): Observable<any>{

		return this.http.get<any>(`${this.NOTAS_URL}/${id}`)
		.pipe(
			map(
				item => { return new SliderImg(item.id, item.nombre, item.src) }
			),
			tap(_ => this.log(`fetched sliderImg id:${id}`)),
			catchError(this.handleError('getSliderImg', []))
		)
	}//end getSliderImg

	storeSliderImg(sliderImg: SliderImg): Observable<any>{

		let sliderImgData: FormData= new FormData();
		sliderImgData.append('nombre', sliderImg.getNombre());
		sliderImgData.append('src', sliderImg.getImgFile());

		return this.http.post<any>(this.NOTAS_URL, sliderImgData)
			.pipe(
				tap(sliderImg => this.log(`stored sliderImg id:${sliderImg.id}`)),
				catchError(this.handleError('storeSliderImg', []))
			);
	}//end storeSliderImg

	updateSliderImg(id: number, sliderImg: SliderImg): Observable<any>{

		let sliderImgData: FormData= new FormData();
		sliderImgData.append('_method', 'PUT');
		sliderImgData.append('nombre', sliderImg.getNombre());
		sliderImgData.append('src', sliderImg.getImgFile());

		return this.http.post(`${this.NOTAS_URL}/${id}`, sliderImgData).
			pipe(
				tap(_ => this.log(`updated sliderImg id:${id}`)),
				catchError(this.handleError('updateSliderImg', []))
			);
	}//end updateSliderImg

	deleteSliderImg(sliderImg: SliderImg | number): Observable<any>{

		const id = typeof sliderImg === 'number' ? sliderImg : sliderImg.getId();

		return this.http.delete(`${this.NOTAS_URL}/${id}`, this.HTTP_OPTIONS).
			pipe(
				tap(_=> this.log(`deleted sliderImg id:${id}`)),
				catchError(this.handleError('deletedSliderImg', []))
			);
	}//end deleteSliderImg

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

		this.messageService.add(`SliderImgsService: ${message}`);
	}//end log
}//end SliderImgsService
