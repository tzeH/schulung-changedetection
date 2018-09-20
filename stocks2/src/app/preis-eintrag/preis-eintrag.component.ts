import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { SymbolInfo } from '../stocks-api/stocks-types';
import { StocksService } from '../stocks-api/stocks.service';

@Component({
  selector: 'app-preis-eintrag',
  templateUrl: './preis-eintrag.component.html',
  styleUrls: ['./preis-eintrag.component.scss']
})
export class PreisEintragComponent implements OnChanges {

  @Input() symbolInfo: SymbolInfo;

  latestPrice$ = of<number>();
  latestPrice = null as null | number;

  constructor(private stocksService: StocksService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.symbolInfo) {
      this.latestPrice$ = this.getQuote(this.symbolInfo.symbol);
      this.latestPrice$.subscribe(price => this.latestPrice = price);
    }
  }

  getQuote(symbol: string): Observable<number> {
    return this.stocksService.getQuote(symbol)
      .pipe(
        map(quoteInfo => quoteInfo.latestPrice)
      );
  }
}
