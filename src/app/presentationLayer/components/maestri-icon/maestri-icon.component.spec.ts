import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriIconComponent } from './maestri-icon.component';

describe('MaestriIconComponent', () => {
  let component: MaestriIconComponent;
  let fixture: ComponentFixture<MaestriIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaestriIconComponent]
    });
    fixture = TestBed.createComponent(MaestriIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
