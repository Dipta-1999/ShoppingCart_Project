import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikonComponent } from './nikon.component';

describe('NikonComponent', () => {
  let component: NikonComponent;
  let fixture: ComponentFixture<NikonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
