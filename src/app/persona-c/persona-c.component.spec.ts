import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCComponent } from './persona-c.component';

describe('PersonaCComponent', () => {
  let component: PersonaCComponent;
  let fixture: ComponentFixture<PersonaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
