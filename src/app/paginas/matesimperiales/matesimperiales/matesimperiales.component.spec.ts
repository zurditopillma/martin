import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatesimperialesComponent } from './matesimperiales.component';

describe('MatesimperialesComponent', () => {
  let component: MatesimperialesComponent;
  let fixture: ComponentFixture<MatesimperialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatesimperialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatesimperialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
