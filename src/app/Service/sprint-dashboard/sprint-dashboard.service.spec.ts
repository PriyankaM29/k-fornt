import { TestBed } from '@angular/core/testing';

import { SprintDashboardService } from './sprint-dashboard.service';

describe('SprintDashboardService', () => {
  let service: SprintDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
