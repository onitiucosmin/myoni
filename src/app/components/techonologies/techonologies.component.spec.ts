import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechonologiesComponent } from './techonologies.component';

describe('TechonologiesComponent', () => {
  let component: TechonologiesComponent;
  let fixture: ComponentFixture<TechonologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechonologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechonologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
