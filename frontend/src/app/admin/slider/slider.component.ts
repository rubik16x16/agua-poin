import { Component, OnInit } from '@angular/core';

import { SliderImgsService } from '../../services/slider-imgs.service';
import { SliderImg } from '../../models/slider-img';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  private sliderImgs: Array<SliderImg>;

  constructor(
    private sliderImgsService: SliderImgsService
  ) { }

  ngOnInit() {

    this.getSliderImgs();
  }

  private getSliderImgs(): void{

    this.sliderImgsService.getSliderImgs().subscribe(
      sliderImgs =>{

        this.sliderImgs= sliderImgs;
      }
    );
  }//end getSliderImgs

  private deleteSliderImg(id: number): void{

    this.sliderImgs= this.sliderImgs.filter(sliderImg => sliderImg.getId() != id);
    this.sliderImgsService.deleteSliderImg(id).subscribe();
  }//end deleteSliderImg

}//end SliderImgsComponent
