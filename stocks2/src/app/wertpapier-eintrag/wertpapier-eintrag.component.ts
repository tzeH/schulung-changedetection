import { Component, Input } from '@angular/core';

import { SymbolInfo } from '../stocks-api/stocks-types';

@Component({
  selector: 'app-wertpapier-eintrag',
  templateUrl: './wertpapier-eintrag.component.html',
  styleUrls: ['./wertpapier-eintrag.component.scss']
})
export class WertpapierEintragComponent {

  @Input() symbolInfo: SymbolInfo;

}
