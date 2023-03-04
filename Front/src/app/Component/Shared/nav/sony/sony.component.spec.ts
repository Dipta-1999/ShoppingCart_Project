import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyComponent } from './sony.component';

describe('SonyComponent', () => {
  let component: SonyComponent;
  let fixture: ComponentFixture<SonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
