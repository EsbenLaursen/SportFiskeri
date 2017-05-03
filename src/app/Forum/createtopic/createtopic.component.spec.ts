import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetopicComponent } from './createtopic.component';

describe('CreatetopicComponent', () => {
  let component: CreatetopicComponent;
  let fixture: ComponentFixture<CreatetopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
