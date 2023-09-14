import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePostulationComponent } from './liste-postulation.component';

describe('ListePostulationComponent', () => {
  let component: ListePostulationComponent;
  let fixture: ComponentFixture<ListePostulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePostulationComponent]
    });
    fixture = TestBed.createComponent(ListePostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
