import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomItemsComponent } from './random-items.component';

describe('RandomItemsComponent', () => {
  let component: RandomItemsComponent;
  let fixture: ComponentFixture<RandomItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomItemsComponent]
    });
    fixture = TestBed.createComponent(RandomItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
