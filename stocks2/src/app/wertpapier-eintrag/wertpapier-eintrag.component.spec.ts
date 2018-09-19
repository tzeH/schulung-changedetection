import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WertpapierEintragComponent } from './wertpapier-eintrag.component';

describe('WertpapierEintragComponent', () => {
  let component: WertpapierEintragComponent;
  let fixture: ComponentFixture<WertpapierEintragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WertpapierEintragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WertpapierEintragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
