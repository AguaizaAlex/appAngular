import { TestBed } from '@angular/core/testing';

import { TareaServicioService } from './tarea-servicio.service';

describe('TareaServicioService', () => {
  let service: TareaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
