import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { PromocionesService } from '../../../services/promociones.service';
import { Promocion } from '../../../models/promocion';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	private fileUrl: string;
	private fileToUpload: File = null;
	
	private promocionForm= new FormGroup({
		media: new FormGroup({
			type: new FormControl('imagen'),
			src: new FormControl()
		}),
		nombre: new FormControl()
	});

	constructor(
		private promocionesService: PromocionesService,
		private location: Location
	) { }

	ngOnInit() {
	}

	private storePromocion(){

		let promocionData= this.promocionForm.value;

		let promocion= new Promocion(0, promocionData.nombre, promocionData.media.type,
			promocionData.media.src, this.fileToUpload);

		this.promocionesService.storePromocion(promocion).subscribe(
			_ => this.goBack()
		);
	}//end storePromocion

	private onSelectFile(event) { // called each time file input changes

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

