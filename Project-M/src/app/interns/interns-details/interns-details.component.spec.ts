import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsDetailsComponent } from './interns-details.component';

describe('InternsDetailsComponent', () => {
  let component: InternsDetailsComponent;
  let fixture: ComponentFixture<InternsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
