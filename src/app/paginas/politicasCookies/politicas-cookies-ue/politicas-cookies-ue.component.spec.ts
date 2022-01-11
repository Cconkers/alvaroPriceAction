import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasCookiesUEComponent } from './politicas-cookies-ue.component';

describe('PoliticasCookiesUEComponent', () => {
  let component: PoliticasCookiesUEComponent;
  let fixture: ComponentFixture<PoliticasCookiesUEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasCookiesUEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasCookiesUEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
