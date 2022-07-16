import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksCompComponent } from './drinks-comp.component';

describe('DrinksCompComponent', () => {
  let component: DrinksCompComponent;
  let fixture: ComponentFixture<DrinksCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
