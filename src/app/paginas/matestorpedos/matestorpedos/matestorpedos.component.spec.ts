import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatestorpedosComponent } from './matestorpedos.component';

describe('MatestorpedosComponent', () => {
  let component: MatestorpedosComponent;
  let fixture: ComponentFixture<MatestorpedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatestorpedosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatestorpedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
