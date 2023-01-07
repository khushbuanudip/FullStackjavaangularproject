import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteappointmentComponent } from './deleteappointment.component';

describe('DeleteappointmentComponent', () => {
  let component: DeleteappointmentComponent;
  let fixture: ComponentFixture<DeleteappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
