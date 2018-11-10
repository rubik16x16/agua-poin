import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { NotasService } from '../../../services/notas.service';
import { Nota } from '../../../models/nota';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	private fileUrl: string;
	private fileToUpload: File = null;

	private frmNota: FormGroup= new FormGroup({   
		titulo: new FormControl(),
		cuerpo: new FormControl(),
		media: new FormGroup({
			type: new FormControl('imagen'),
			src: new FormControl()
		})
	});

	constructor(
		private notasService: NotasService,
		private location: Location
	) { }

	ngOnInit() {
	}

	private storeNota(): void{

		let nota= new Nota(0, this.frmNota.value.titulo, this.frmNota.value.cuerpo,
			this.frmNota.value.media.type, this.frmNota.value.media.src, this.fileToUpload);

		this.notasService.storeNota(nota).subscribe(
			_ => this.goBack()
		);
	}//end storeNota

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
}//end CreateComponent class
