import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListsComponent } from './show-lists.component';

describe('ShowListsComponent', () => {
  let component: ShowListsComponent;
  let fixture: ComponentFixture<ShowListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowListsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
