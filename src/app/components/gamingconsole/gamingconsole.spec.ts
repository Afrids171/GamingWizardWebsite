import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamingconsole } from './gamingconsole';

describe('Gamingconsole', () => {
  let component: Gamingconsole;
  let fixture: ComponentFixture<Gamingconsole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gamingconsole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gamingconsole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
