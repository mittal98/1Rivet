import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBuiltPipesComponent } from './in-built-pipes.component';

describe('InBuiltPipesComponent', () => {
  let component: InBuiltPipesComponent;
  let fixture: ComponentFixture<InBuiltPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InBuiltPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InBuiltPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
