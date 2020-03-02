import { TestBed } from '@angular/core/testing';

import { PokedexApiService } from './pokedex-api.service';

describe('PokedexApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokedexApiService = TestBed.get(PokedexApiService);
    expect(service).toBeTruthy();
  });
});
