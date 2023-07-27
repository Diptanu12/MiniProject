import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBooksComponent } from './more-books.component';

describe('MoreBooksComponent', () => {
  let component: MoreBooksComponent;
  let fixture: ComponentFixture<MoreBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreBooksComponent]
    });
    fixture = TestBed.createComponent(MoreBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
