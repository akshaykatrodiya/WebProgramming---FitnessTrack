import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ng-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TopsliderComponent } from './topslider/topslider.component';
import { CoachingComponent } from './coaching/coaching.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SupplementationComponent } from './supplementation/supplementation.component';
import { MotivationComponent } from './motivation/motivation.component';
import { FooterComponent } from './footer/footer.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { ExerciseService } from './services/exercise.service';
import { SearchApicallService } from "./services/search-apicall.service";
import { HomeComponent } from './home/home.component';
import { ClickOutsideDirective } from './shared/search-drop-down.directive';
import { SearchFilterPipe } from './shared/filter-pipe';


const appRoutes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'exercise', component:ExerciseComponent},
  {path:'coaching', component:CoachingComponent},
  {path:'nutrition', component:NutritionComponent},
  {path:'supplementation', component:SupplementationComponent},
  {path:'motivation', component:MotivationComponent},
  {path:'footer', component:FooterComponent}
];

@NgModule({
  declarations: [
    ClickOutsideDirective,
    SearchFilterPipe,
    AppComponent,
    NavComponent,
    TopsliderComponent,
    CoachingComponent,
    NutritionComponent,
    SupplementationComponent,
    MotivationComponent,
    FooterComponent,
    ExerciseComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [ExerciseService, SearchApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
