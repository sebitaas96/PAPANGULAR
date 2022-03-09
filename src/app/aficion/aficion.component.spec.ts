import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AficionComponent } from './aficion.component';

describe('AficionComponent', () => {
  let component: AficionComponent;
  let fixture: ComponentFixture<AficionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AficionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AficionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
