import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlecheupComponent } from './flecheup.component';

describe('FlecheupComponent', () => {
  let component: FlecheupComponent;
  let fixture: ComponentFixture<FlecheupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlecheupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlecheupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
