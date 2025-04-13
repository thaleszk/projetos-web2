import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividirComponent } from './dividir.component';

describe('DividirComponent', () => {
  let component: DividirComponent;
  let fixture: ComponentFixture<DividirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
