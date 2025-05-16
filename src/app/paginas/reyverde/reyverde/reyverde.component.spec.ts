import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReyverdeComponent } from './reyverde.component';

describe('ReyverdeComponent', () => {
  let component: ReyverdeComponent;
  let fixture: ComponentFixture<ReyverdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReyverdeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReyverdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
