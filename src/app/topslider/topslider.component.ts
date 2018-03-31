import { Component, OnInit } from '@angular/core';
import { TopSlider } from '../models/topslider';

@Component({
  selector: 'app-topslider',
  templateUrl: './topslider.component.html',
  styleUrls: ['./topslider.component.css']
})
export class TopsliderComponent implements OnInit {

  Slider = new TopSlider();

  constructor() { }

  ngOnInit() {
  }

}
