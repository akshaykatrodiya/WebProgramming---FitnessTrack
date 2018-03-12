import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TopsliderComponent } from './topslider/topslider.component';
import { TilesmenuComponent } from './tilesmenu/tilesmenu.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SupplementationComponent } from './supplementation/supplementation.component';
import { MotivationComponent } from './motivation/motivation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopsliderComponent,
    TilesmenuComponent,
    NutritionComponent,
    SupplementationComponent,
    MotivationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule//,
   // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
