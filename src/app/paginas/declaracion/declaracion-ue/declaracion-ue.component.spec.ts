import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionUEComponent } from './declaracion-ue.component';

describe('DeclaracionUEComponent', () => {
  let component: DeclaracionUEComponent;
  let fixture: ComponentFixture<DeclaracionUEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclaracionUEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionUEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
