import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidsComponent } from './fids.component';

describe('FidsComponent', () => {
  let component: FidsComponent;
  let fixture: ComponentFixture<FidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
