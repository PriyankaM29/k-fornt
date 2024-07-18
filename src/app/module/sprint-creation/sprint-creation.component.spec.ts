import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintCreationComponent } from './sprint-creation.component';

describe('SprintCreationComponent', () => {
  let component: SprintCreationComponent;
  let fixture: ComponentFixture<SprintCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
