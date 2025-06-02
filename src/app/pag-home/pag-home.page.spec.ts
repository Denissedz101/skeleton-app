import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagHomePage } from './pag-home.page';

describe('PagHomePage', () => {
  let component: PagHomePage;
  let fixture: ComponentFixture<PagHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
