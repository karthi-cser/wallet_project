import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylibrarylistComponent } from './mylibrarylist.component';

describe('MylibrarylistComponent', () => {
  let component: MylibrarylistComponent;
  let fixture: ComponentFixture<MylibrarylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylibrarylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylibrarylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
