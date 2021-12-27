import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraPaginaComponent } from './cabezera-pagina.component';

describe('CabezeraPaginaComponent', () => {
  let component: CabezeraPaginaComponent;
  let fixture: ComponentFixture<CabezeraPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabezeraPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
