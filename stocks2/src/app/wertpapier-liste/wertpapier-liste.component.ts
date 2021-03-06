import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { concatAll, mergeMap, shareReplay, take, toArray } from 'rxjs/operators';

import { QuoteInfo, SymbolInfo } from '../stocks-api/stocks-types';
import { StocksService } from '../stocks-api/stocks.service';

@Component({
  selector: 'app-wertpapier-liste',
  templateUrl: './wertpapier-liste.component.html',
  styleUrls: ['./wertpapier-liste.component.scss']
})
export class WertpapierListeComponent {

  readonly symbols$: Observable<SymbolInfo[]>;

  readonly quotes$: Observable<QuoteInfo[]>;

  constructor(stocksService: StocksService) {
    this.symbols$ = stocksService.getSymbols()
      .pipe(
        concatAll(),
        take(3),
        toArray(),
        shareReplay()
      );

    this.quotes$ = this.symbols$.pipe(
      concatAll(),
      mergeMap(s => stocksService.getQuote(s.symbol)),
      toArray()
    );
  }

}
