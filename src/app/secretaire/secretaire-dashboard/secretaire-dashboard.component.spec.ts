import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireDashboardComponent } from './secretaire-dashboard.component';

describe('SecretaireDashboardComponent', () => {
  let component: SecretaireDashboardComponent;
  let fixture: ComponentFixture<SecretaireDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretaireDashboardComponent]
    });
    fixture = TestBed.createComponent(SecretaireDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
