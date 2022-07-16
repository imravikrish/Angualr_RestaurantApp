import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixWebComponent } from './netflix-web.component';

describe('NetflixWebComponent', () => {
  let component: NetflixWebComponent;
  let fixture: ComponentFixture<NetflixWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflixWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
