import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostulationComponent } from './list-postulation.component';

describe('ListPostulationComponent', () => {
  let component: ListPostulationComponent;
  let fixture: ComponentFixture<ListPostulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPostulationComponent]
    });
    fixture = TestBed.createComponent(ListPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
