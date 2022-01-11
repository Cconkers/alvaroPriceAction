import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasCookiesCAComponent } from './politicas-cookies-ca.component';

describe('PoliticasCookiesCAComponent', () => {
  let component: PoliticasCookiesCAComponent;
  let fixture: ComponentFixture<PoliticasCookiesCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasCookiesCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasCookiesCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
