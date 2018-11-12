import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { SliderImgsService } from '../../../services/slider-imgs.service';
import { SliderImg } from '../../../models/slider-img';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private fileUrl: string;
  private fileToUpload: File = null;
  private id: number;

  private frmSliderImg= new FormGroup({
    nombre: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private sliderImgsService: SliderImgsService,
    private location: Location
  ) { }

  ngOnInit() {

    this.id= +this.route.snapshot.paramMap.get('id');
    this.getSliderImg();
  }

  private getSliderImg(): void{

    this.sliderImgsService.getSliderImg(this.id).subscribe(
      sliderImg => {
        this.frmSliderImg.controls.nombre.setValue(sliderImg.getNombre());
        this.fileUrl= `http://localhost/agua-poin/public/storage/${sliderImg.getImgSrc()}`
      }
    );
  }//end getSliderImg

  private updateSliderImg(): void{

    let sliderImgData= this.frmSliderImg.value;

    let sliderImg= new SliderImg(0, sliderImgData.nombre, '',this.fileToUpload);

    this.sliderImgsService.updateSliderImg(this.id, sliderImg).subscribe(
      _ => this.goBack()
      );
  }//end updateSliderImg

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
}//end EditComponent class
