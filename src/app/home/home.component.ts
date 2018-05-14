import { Component, OnInit } from '@angular/core';
import { Home } from '../models/home';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClickOutsideDirective } from '../shared/search-drop-down.directive';
import { SearchFilterPipe } from '../shared/filter-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Home = new Home();
  exerciseForm: FormGroup;
  showDropDown = false;

  constructor( private fb: FormBuilder ) { 
    this.initForm()
   }

  ngOnInit() {
  }
  
  initForm(): FormGroup {
    return this.exerciseForm = this.fb.group({
      search: [null]
    })
  }

  openDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  getSearchValue() {
    return this.exerciseForm.value.search;
  }

  selectValue(value) {
    this.exerciseForm.patchValue({"search": value});
    this.showDropDown = false;
  }

}
