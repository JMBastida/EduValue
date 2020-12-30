import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonUniversityFiltersComponent } from './non-university-filters.component';

describe('NonUniversityFiltersComponent', () => {
  let component: NonUniversityFiltersComponent;
  let fixture: ComponentFixture<NonUniversityFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonUniversityFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonUniversityFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
