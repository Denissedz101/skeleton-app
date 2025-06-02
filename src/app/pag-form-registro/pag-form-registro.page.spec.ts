import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagFormRegistroPage } from './pag-form-registro.page';

describe('PagFormRegistroPage', () => {
  let component: PagFormRegistroPage;
  let fixture: ComponentFixture<PagFormRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagFormRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
