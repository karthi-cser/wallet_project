import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballibrarylistComponent } from './globallibrarylist.component';

describe('GloballibrarylistComponent', () => {
  let component: GloballibrarylistComponent;
  let fixture: ComponentFixture<GloballibrarylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloballibrarylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloballibrarylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
