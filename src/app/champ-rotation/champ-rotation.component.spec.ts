import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeChampsComponent } from './champ-rotation.component';

describe('ChampRotationComponent', () => {
  let component: FreeChampsComponent;
  let fixture: ComponentFixture<FreeChampsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeChampsComponent]
    });
    fixture = TestBed.createComponent(FreeChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
