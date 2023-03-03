import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikonItemsComponent } from './nikon-items.component';

describe('NikonItemsComponent', () => {
  let component: NikonItemsComponent;
  let fixture: ComponentFixture<NikonItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikonItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikonItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
