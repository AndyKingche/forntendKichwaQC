import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraductorFormComponent } from './traductor-form.component';

describe('TraductorFormComponent', () => {
  let component: TraductorFormComponent;
  let fixture: ComponentFixture<TraductorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraductorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraductorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
