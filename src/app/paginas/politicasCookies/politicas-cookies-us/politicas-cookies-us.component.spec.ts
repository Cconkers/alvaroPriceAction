import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasCookiesUSComponent } from './politicas-cookies-us.component';

describe('PoliticasCookiesUSComponent', () => {
  let component: PoliticasCookiesUSComponent;
  let fixture: ComponentFixture<PoliticasCookiesUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasCookiesUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasCookiesUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
