import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendehumosListComponent } from './vendehumos-list.component';

describe('VendehumosListComponent', () => {
  let component: VendehumosListComponent;
  let fixture: ComponentFixture<VendehumosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendehumosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendehumosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
