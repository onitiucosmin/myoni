import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongPointsComponent } from './strong-points.component';

describe('StrongPointsComponent', () => {
  let component: StrongPointsComponent;
  let fixture: ComponentFixture<StrongPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrongPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
