import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitesseComponent } from './vitesse/vitesse.component';


@NgModule({
   declarations: [
      AppComponent,
      VitesseComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
