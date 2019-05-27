import { TestBed } from '@angular/core/testing';

import { BoitedeVitesseService } from './boitede-vitesse.service';

describe('BoitedeVitesseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoitedeVitesseService = TestBed.get(BoitedeVitesseService);
    expect(service).toBeTruthy();
  });
});
