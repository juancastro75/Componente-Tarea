import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemodalPage } from './pokemodal.page';

describe('PokemodalPage', () => {
  let component: PokemodalPage;
  let fixture: ComponentFixture<PokemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
