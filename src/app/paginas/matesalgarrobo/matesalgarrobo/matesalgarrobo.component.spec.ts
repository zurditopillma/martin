import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatesalgarroboComponent } from './matesalgarrobo.component';

describe('MatesalgarroboComponent', () => {
  let component: MatesalgarroboComponent;
  let fixture: ComponentFixture<MatesalgarroboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatesalgarroboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatesalgarroboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
