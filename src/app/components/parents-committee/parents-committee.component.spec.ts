import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsCommitteeComponent } from './parents-committee.component';

describe('ParentsCommitteeComponent', () => {
  let component: ParentsCommitteeComponent;
  let fixture: ComponentFixture<ParentsCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
