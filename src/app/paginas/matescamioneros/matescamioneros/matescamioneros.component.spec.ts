import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatescamionerosComponent } from './matescamioneros.component';

describe('MatescamionerosComponent', () => {
  let component: MatescamionerosComponent;
  let fixture: ComponentFixture<MatescamionerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatescamionerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatescamionerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
