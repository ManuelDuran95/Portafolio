import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringComponent } from './turing.component';

describe('TuringComponent', () => {
  let component: TuringComponent;
  let fixture: ComponentFixture<TuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
