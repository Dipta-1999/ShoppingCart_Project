import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanonComponent } from './canon.component';

describe('CanonComponent', () => {
  let component: CanonComponent;
  let fixture: ComponentFixture<CanonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
