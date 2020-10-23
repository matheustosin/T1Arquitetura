import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConsultaComponent } from './table-consulta.component';

describe('TableConsultaComponent', () => {
  let component: TableConsultaComponent;
  let fixture: ComponentFixture<TableConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
