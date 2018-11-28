import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Destroy01Component } from './destroy01.component';

describe('Destroy01Component', () => {
  let component: Destroy01Component;
  let fixture: ComponentFixture<Destroy01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Destroy01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Destroy01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
