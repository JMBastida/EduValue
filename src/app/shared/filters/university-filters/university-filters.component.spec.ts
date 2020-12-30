import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityFiltersComponent } from './university-filters.component';

describe('UniversityFiltersComponent', () => {
  let component: UniversityFiltersComponent;
  let fixture: ComponentFixture<UniversityFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
