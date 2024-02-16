import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriBannerComponent } from './maestri-banner.component';

describe('MaestriBannerComponent', () => {
  let component: MaestriBannerComponent;
  let fixture: ComponentFixture<MaestriBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaestriBannerComponent]
    });
    fixture = TestBed.createComponent(MaestriBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
