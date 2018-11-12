import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { SliderImgsService } from 'src/app/services/slider-imgs.service';
import { SliderImg } from 'src/app/models/slider-img';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	private fileUrl: string;
	private fileToUpload: File = null;

	private frmSliderImg= new FormGroup({
		nombre: new FormControl()
	});

	constructor(
		private sliderImgsService: SliderImgsService,
		private location: Location
	) { }

	ngOnInit() {
	}

	private storeSliderImg(): void{

		this.sliderImgsService.storeSliderImg(new SliderImg(0, this.frmSliderImg.value.nombre, '', this.fileToUpload))
		.subscribe(
			_ => this.goBack()
		);
	}//end storeImgSlider

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
