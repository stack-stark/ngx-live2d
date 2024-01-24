import { TestBed } from '@angular/core/testing';

import { NgxLive2dService } from './ngx-live2d.service';

describe('NgxLive2dService', () => {
  let service: NgxLive2dService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLive2dService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
