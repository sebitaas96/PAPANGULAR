import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCComponent } from './pais-c.component';

describe('PaisCComponent', () => {
  let component: PaisCComponent;
  let fixture: ComponentFixture<PaisCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
