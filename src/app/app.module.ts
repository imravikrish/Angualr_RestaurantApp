import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDesignComponent } from './home-design/home-design.component';
import { NetflixWebComponent } from './netflix-web/netflix-web.component';
import { DrinksCompComponent } from './drinks-comp/drinks-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDesignComponent,
    NetflixWebComponent,
    DrinksCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
