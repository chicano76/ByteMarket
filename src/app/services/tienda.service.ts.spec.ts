import { TestBed } from '@angular/core/testing';

import { TiendaServiceTs } from './tienda.service.ts';

describe('TiendaServiceTs', () => {
  let service: TiendaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
