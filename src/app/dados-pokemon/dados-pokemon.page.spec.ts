import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosPokemonPage } from './dados-pokemon.page';

describe('DadosPokemonPage', () => {
  let component: DadosPokemonPage;
  let fixture: ComponentFixture<DadosPokemonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosPokemonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
