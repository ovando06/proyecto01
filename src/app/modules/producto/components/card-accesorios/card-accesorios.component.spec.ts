import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccesoriosComponent } from './card-accesorios.component';

describe('CardAccesoriosComponent', () => {
  let component: CardAccesoriosComponent;
  let fixture: ComponentFixture<CardAccesoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAccesoriosComponent]
    });
    fixture = TestBed.createComponent(CardAccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
