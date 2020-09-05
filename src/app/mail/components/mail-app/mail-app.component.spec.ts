import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAppComponent } from './mail-app.component';

describe('MailAppComponent', () => {
  let component: MailAppComponent;
  let fixture: ComponentFixture<MailAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
