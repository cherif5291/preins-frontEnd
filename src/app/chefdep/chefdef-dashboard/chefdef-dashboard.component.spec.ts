import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdefDashboardComponent } from './chefdef-dashboard.component';

describe('ChefdefDashboardComponent', () => {
  let component: ChefdefDashboardComponent;
  let fixture: ComponentFixture<ChefdefDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefdefDashboardComponent]
    });
    fixture = TestBed.createComponent(ChefdefDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
