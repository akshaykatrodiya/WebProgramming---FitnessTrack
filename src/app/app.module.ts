import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ng-bootstrap/carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

const appRoutes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
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
    AppComponent,
    NavComponent,
    TopsliderComponent,
    CoachingComponent,
    NutritionComponent,
    SupplementationComponent,
    MotivationComponent,
    FooterComponent,
    ExerciseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
