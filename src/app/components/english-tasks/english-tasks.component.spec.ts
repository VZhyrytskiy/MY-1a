import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTasksComponent } from './english-tasks.component';

describe('EnglishTasksComponent', () => {
  let component: EnglishTasksComponent;
  let fixture: ComponentFixture<EnglishTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
