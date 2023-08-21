import { TestBed } from '@angular/core/testing';

import { SelectionService } from './selection.service';
import {  HttpClientModule } from '@angular/common/http';

describe('SelectionService', () => {
  let service: SelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(SelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
