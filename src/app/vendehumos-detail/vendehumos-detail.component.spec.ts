import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendehumosDetailComponent } from './vendehumos-detail.component';

describe('VendehumosDetailComponent', () => {
  let component: VendehumosDetailComponent;
  let fixture: ComponentFixture<VendehumosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendehumosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendehumosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
