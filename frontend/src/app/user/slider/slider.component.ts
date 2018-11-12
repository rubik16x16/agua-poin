import { Component, OnInit } from '@angular/core';

import { SliderImgsService } from '../../services/slider-imgs.service';
import { SliderImg } from 'src/app/models/slider-img';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  private sliderImgs: Array<SliderImg>;

  constructor(
    private sliderImgsService: SliderImgsService,
  ) { }

  ngOnInit() {

    this.getSliderImgs();
  }

  getSliderImgs(): void{

    this.sliderImgsService.getSliderImgs().subscribe(
      sliderImgs => {
        this.sliderImgs= sliderImgs;
        console.log(sliderImgs);
      }
    );
  }//end getSliderImgs 
}//end SliderComponent class
