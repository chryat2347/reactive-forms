import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3Component } from './route-3.component';

describe('Route3Component', () => {
  let component: Route3Component;
  let fixture: ComponentFixture<Route3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
