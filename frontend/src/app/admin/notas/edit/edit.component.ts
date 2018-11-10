import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { NotasService } from '../../../services/notas.service';
import { Nota } from '../../../models/nota';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	private id: number;
	private fileUrl: string;
	private fileToUpload: File = null;

	private frmNota= new FormGroup({
		titulo: new FormControl(),
		cuerpo: new FormControl(),
		media: new FormGroup({
			type: new FormControl(),
			src: new FormControl()
		})
	});

	constructor(
		private route: ActivatedRoute,
		private notasService: NotasService,
		private location: Location
	) { }

	ngOnInit() {

		this.getNota();
	}//end ngOnInit

	private getNota(): void{

		this.id = +this.route.snapshot.paramMap.get('id');
		this.notasService.getNota(this.id).subscribe(nota => {

			let media= this.frmNota.controls.media as FormGroup;
			this.frmNota.controls.titulo.setValue(nota.getTitulo());
			this.frmNota.controls.cuerpo.setValue(nota.getCuerpo());
			media.controls.type.setValue(nota.getMedia());
		  if(nota.getMedia() == 'imagen'){
				
				this.fileUrl= `http://localhost/agua-poin/public/storage/${nota.getSrc()}`;
			}else{

				media.controls.src.setValue(nota.getSrc());
			}
		});
	}//end getNota

	private updateNota(): void{

		let notaData= this.frmNota.value;

		let nota: Nota= new Nota(this.id, notaData.titulo, notaData.cuerpo,
			notaData.media.type, notaData.media.src, this.fileToUpload);

		this.notasService.updateNota(this.id, nota).subscribe(
			_ => this.goBack()
		);
	}//end updateNota

	private onSelectFile(event): void{ // called each time file input changes

		if (event.target.files && event.target.files[0]) {

			this.fileToUpload = event.target.files[0];

			var reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]); // read file as data url
			reader.onload = (event) => { // called once readAsDataURL is completed
				this.fileUrl = event.target.result;
			}//end closure
		}//end if
	}//end onSelectFile

	private goBack(): void {

		this.location.back();
	}//end goBack
}
