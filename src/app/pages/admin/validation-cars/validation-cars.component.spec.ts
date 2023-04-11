import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCarsComponent } from './validation-cars.component';

describe('ValidationCarsComponent', () => {
  let component: ValidationCarsComponent;
  let fixture: ComponentFixture<ValidationCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
