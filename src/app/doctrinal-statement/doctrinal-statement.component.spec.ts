import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctrinalStatementComponent } from './doctrinal-statement.component';

describe('DoctrinalStatementComponent', () => {
  let component: DoctrinalStatementComponent;
  let fixture: ComponentFixture<DoctrinalStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctrinalStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctrinalStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
