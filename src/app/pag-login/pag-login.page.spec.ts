import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagLoginPage } from './pag-login.page';

describe('PagLoginPage', () => {
  let component: PagLoginPage;
  let fixture: ComponentFixture<PagLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
