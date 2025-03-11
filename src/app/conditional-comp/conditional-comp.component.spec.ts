import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalCompComponent } from './conditional-comp.component';

describe('ConditionalCompComponent', () => {
  let component: ConditionalCompComponent;
  let fixture: ComponentFixture<ConditionalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionalCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
