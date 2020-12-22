import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresgistrationComponent } from './userresgistration.component';

describe('UserresgistrationComponent', () => {
  let component: UserresgistrationComponent;
  let fixture: ComponentFixture<UserresgistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserresgistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserresgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
