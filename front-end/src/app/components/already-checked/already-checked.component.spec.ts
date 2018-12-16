import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyCheckedComponent } from './already-checked.component';

describe('AlreadyCheckedComponent', () => {
  let component: AlreadyCheckedComponent;
  let fixture: ComponentFixture<AlreadyCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyCheckedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
