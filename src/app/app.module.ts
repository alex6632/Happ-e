import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PictoComponent } from './blocs/picto/picto.component';
import { OfferComponent } from './blocs/offer/offer.component';
import { ConsoComponent } from './blocs/conso/conso.component';
import { SituationComponent } from './blocs/situation/situation.component';
import { SponsorComponent } from './blocs/sponsor/sponsor.component';
import { TrustComponent } from './blocs/trust/trust.component';
import { HeaderComponent } from './blocs/header/header.component';
import { StickyComponent } from './blocs/sticky/sticky.component';
import { FooterComponent } from './blocs/footer/footer.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { Step2Component } from './subscription/step2/step2.component';
import { Step3Component } from './subscription/step3/step3.component';
import { Step4Component } from './subscription/step4/step4.component';
import { Step5Component } from './subscription/step5/step5.component';
import { Step6Component } from './subscription/step6/step6.component';
import { WelcomeComponent } from './subscription/welcome/welcome.component';

import * as $ from 'jquery';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'souscrire', component: SubscriptionComponent },
  { path: 'souscrire/etape-2', component: Step2Component },
  { path: 'souscrire/etape-3', component: Step3Component },
  { path: 'souscrire/etape-4', component: Step4Component },
  { path: 'souscrire/etape-5', component: Step5Component },
  { path: 'souscrire/etape-6', component: Step6Component },
  { path: 'souscrire/bienvenue', component: WelcomeComponent },
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
    HeaderComponent,
    StickyComponent,
    FooterComponent,
    SubscriptionComponent,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
