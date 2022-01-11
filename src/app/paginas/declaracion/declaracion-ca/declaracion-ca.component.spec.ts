import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionCAComponent } from './declaracion-ca.component';

describe('DeclaracionCAComponent', () => {
  let component: DeclaracionCAComponent;
  let fixture: ComponentFixture<DeclaracionCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclaracionCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
