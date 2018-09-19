import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdCounterComponent } from './cd-counter.component';

describe('CdCounterComponent', () => {
  let component: CdCounterComponent;
  let fixture: ComponentFixture<CdCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
