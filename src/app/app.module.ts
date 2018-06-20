import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { PictoComponent } from './blocs/picto/picto.component';
import { OfferComponent } from './blocs/offer/offer.component';
import { ConsoComponent } from './blocs/conso/conso.component';
import { SituationComponent } from './blocs/situation/situation.component';
import { SponsorComponent } from './blocs/sponsor/sponsor.component';
import { TrustComponent } from './blocs/trust/trust.component';

import * as $ from 'jquery';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'tap', component: ScoresComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PictoComponent,
    OfferComponent,
    ConsoComponent,
    SituationComponent,
    SponsorComponent,
    TrustComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
