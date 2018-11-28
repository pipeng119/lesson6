import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Destroy02Component } from './destroy02.component';

describe('Destroy02Component', () => {
  let component: Destroy02Component;
  let fixture: ComponentFixture<Destroy02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Destroy02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Destroy02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
