import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreisEintragComponent } from './preis-eintrag.component';

describe('PreisEintragComponent', () => {
  let component: PreisEintragComponent;
  let fixture: ComponentFixture<PreisEintragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreisEintragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreisEintragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
