import { TestBed } from '@angular/core/testing';

import { CommonAssetService } from './common-asset.service';

describe('CommonAssetService', () => {
  let service: CommonAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
