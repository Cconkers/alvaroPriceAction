import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionUSComponent } from './declaracion-us.component';

describe('DeclaracionUSComponent', () => {
  let component: DeclaracionUSComponent;
  let fixture: ComponentFixture<DeclaracionUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclaracionUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
