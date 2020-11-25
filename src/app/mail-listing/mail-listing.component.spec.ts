import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListingComponent } from './mail-listing.component';

describe('MailListingComponent', () => {
  let component: MailListingComponent;
  let fixture: ComponentFixture<MailListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
