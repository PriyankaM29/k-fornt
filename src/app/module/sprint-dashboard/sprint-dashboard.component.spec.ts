import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintDashboardComponent } from './sprint-dashboard.component';

describe('SprintDashboardComponent', () => {
  let component: SprintDashboardComponent;
  let fixture: ComponentFixture<SprintDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
