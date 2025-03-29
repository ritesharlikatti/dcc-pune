import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorGreetingComponent } from './pastor-greeting.component';

describe('PastorGreetingComponent', () => {
  let component: PastorGreetingComponent;
  let fixture: ComponentFixture<PastorGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastorGreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
