import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetailPageComponent } from './serie-detail-page.component';

describe('SerieDetailPageComponent', () => {
  let component: SerieDetailPageComponent;
  let fixture: ComponentFixture<SerieDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieDetailPageComponent]
    });
    fixture = TestBed.createComponent(SerieDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
