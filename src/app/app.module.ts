import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { PrefooterComponent } from './prefooter/prefooter.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { Routes, RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: "popup",
    component:PopupComponent
  }
  
];









@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    PrefooterComponent,
    HeroComponent,
    FooterComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
