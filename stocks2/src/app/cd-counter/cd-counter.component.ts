import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  DoCheck,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-cd-counter',
  templateUrl: './cd-counter.component.html',
  styleUrls: ['./cd-counter.component.scss'],
})
export class CdCounterComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
  AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  /*
   Hier kann ein input gesetzt werden, damit auch OnChanges() analysiert werden kann.
   */
  @Input() countedInput: any;

  @Input() name = '';

  /*
  CSS-Positionierung der counter
  */
  @HostBinding('style.position') position = 'absolute';
  @HostBinding('style.top') positionTop = 0;
  @HostBinding('style.right') positionRight = 0;

  /*
   Hier zählen wir die protokollierten Aufrufe
  */
  private aufrufe = [] as string[];
  get onChanges() { return this.aufrufe.filter(a => a.includes('ngOnChanges')).length; }
  get onInit() { return this.aufrufe.filter(a => a.includes('ngOnInit')).length; }
  get onDestroy() { return this.aufrufe.filter(a => a.includes('ngOnDestroy')).length; }
  get doCheck() { return this.aufrufe.filter(a => a.includes('ngDoCheck')).length; }
  get afterViewInit() { return this.aufrufe.filter(a => a.includes('ngAfterViewInit')).length; }
  get afterViewChecked() { return this.aufrufe.filter(a => a.includes('ngAfterViewChecked')).length; }
  get afterContentInit() { return this.aufrufe.filter(a => a.includes('ngAfterContentInit')).length; }
  get afterContentChecked() { return this.aufrufe.filter(a => a.includes('ngAfterContentChecked')).length; }

  /*
  Formatiert die Statistiken für die Badges. ...-Init Aufrufe werden nur als 'i' angezeigt.
  */
  get changeStats() {
    let result = '' + this.onChanges;
    if (this.onInit > 0) {
      result += 'i';
    }
    if (this.onDestroy > 0) {
      result += 'x';
    }
    return result;
  }
  get checkStats() {
    return '' + this.doCheck;
  }
  get viewStats() {
    return '' + this.afterViewChecked + (this.afterViewInit > 0 ? 'i' : '');
  }
  get contentStats() {
    return '' + this.afterContentChecked + (this.afterContentInit > 0 ? 'i' : '');
  }

  /*
  * Ab hier werden alle Lifecycle-Hooks nur noch protokolliert
  */

  ngOnChanges(changes: SimpleChanges): void {
    // Wir zählen nur diesen einen Input als echte Veränderung,
    // damit man auch sowas sehen kann wie "0" onChanges.

    if (!changes.countedInput) {
      return;
    }

    this.aufrufe.push('ngOnChanges ' + Object.keys(changes));
    this.loggeAufruf();
  }

  ngOnInit() {
    this.aufrufe.push('ngOnInit');
    this.loggeAufruf();
  }

  ngDoCheck(): void {
    this.aufrufe.push('ngDoCheck');
    this.loggeAufruf();
  }

  ngOnDestroy(): void {
    this.aufrufe.push('ngOnDestroy');
    this.loggeAufruf();
  }

  ngAfterViewInit(): void {
    this.aufrufe.push('ngAfterViewInit');
    this.loggeAufruf();
  }

  ngAfterViewChecked(): void {
    this.aufrufe.push('ngAfterViewChecked');
    this.loggeAufruf();
  }

  ngAfterContentInit(): void {
    this.aufrufe.push('ngAfterContentInit');
    this.loggeAufruf();
  }

  ngAfterContentChecked(): void {
    this.aufrufe.push('ngAfterContentChecked');
    this.loggeAufruf();
  }

  private loggeAufruf() {
    console.log(this.name + ': ' + this.aufrufe[this.aufrufe.length - 1]);
  }

}
