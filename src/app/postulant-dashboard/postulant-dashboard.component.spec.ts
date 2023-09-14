import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantDashboardComponent } from './postulant-dashboard.component';

describe('PostulantDashboardComponent', () => {
  let component: PostulantDashboardComponent;
  let fixture: ComponentFixture<PostulantDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostulantDashboardComponent]
    });
    fixture = TestBed.createComponent(PostulantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
