import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLogComponent } from './department-log.component';

describe('DepartmentLogComponent', () => {
  let component: DepartmentLogComponent;
  let fixture: ComponentFixture<DepartmentLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
