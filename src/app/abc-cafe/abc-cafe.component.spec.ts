import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCCafeComponent } from './abc-cafe.component';

describe('ABCCafeComponent', () => {
  let component: ABCCafeComponent;
  let fixture: ComponentFixture<ABCCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ABCCafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ABCCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
