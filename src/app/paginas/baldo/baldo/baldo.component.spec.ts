import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaldoComponent } from './baldo.component';

describe('BaldoComponent', () => {
  let component: BaldoComponent;
  let fixture: ComponentFixture<BaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaldoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
