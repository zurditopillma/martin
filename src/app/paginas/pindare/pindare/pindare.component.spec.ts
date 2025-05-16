import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindareComponent } from './pindare.component';

describe('PindareComponent', () => {
  let component: PindareComponent;
  let fixture: ComponentFixture<PindareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PindareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
