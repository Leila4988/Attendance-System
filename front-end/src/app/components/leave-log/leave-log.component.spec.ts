import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveLogComponent } from './leave-log.component';

describe('LeaveLogComponent', () => {
  let component: LeaveLogComponent;
  let fixture: ComponentFixture<LeaveLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
