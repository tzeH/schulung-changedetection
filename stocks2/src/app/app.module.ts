import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdCounterComponent } from './cd-counter/cd-counter.component';
import { StocksApiModule } from './stocks-api/stocks-api.module';
import { WertpapierListeComponent } from './wertpapier-liste/wertpapier-liste.component';
import { WertpapierEintragComponent } from './wertpapier-eintrag/wertpapier-eintrag.component';
import { PreisEintragComponent } from './preis-eintrag/preis-eintrag.component';


@NgModule({
  declarations: [
    AppComponent,
    WertpapierListeComponent,
    CdCounterComponent,
    WertpapierEintragComponent,
    PreisEintragComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    StocksApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
