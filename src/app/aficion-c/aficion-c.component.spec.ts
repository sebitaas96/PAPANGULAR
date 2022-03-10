import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AficionCComponent } from './aficion-c.component';

describe('AficionCComponent', () => {
  let component: AficionCComponent;
  let fixture: ComponentFixture<AficionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AficionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AficionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
