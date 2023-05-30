import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigateComponent } from './top-navigate.component';

describe('TopNavigateComponent', () => {
  let component: TopNavigateComponent;
  let fixture: ComponentFixture<TopNavigateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavigateComponent]
    });
    fixture = TestBed.createComponent(TopNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
