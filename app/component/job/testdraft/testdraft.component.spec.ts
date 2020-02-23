import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdraftComponent } from './testdraft.component';

describe('TestdraftComponent', () => {
  let component: TestdraftComponent;
  let fixture: ComponentFixture<TestdraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
