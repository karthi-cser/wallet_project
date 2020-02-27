import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocumentComponent } from './api-document.component';

describe('ApiDocumentComponent', () => {
  let component: ApiDocumentComponent;
  let fixture: ComponentFixture<ApiDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
