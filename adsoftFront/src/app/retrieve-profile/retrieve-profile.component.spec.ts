import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveProfileComponent } from './retrieve-profile.component';

describe('RetrieveProfileComponent', () => {
  let component: RetrieveProfileComponent;
  let fixture: ComponentFixture<RetrieveProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
